import * as THREE from 'three';

export class HitboxSystem {
  constructor() {
    this.raycaster = new THREE.Raycaster();
    this.debugMode = false;
    
    // Damage multipliers for different body parts
    this.damageMultipliers = {
      head: 2.0,      // Headshot = 2x damage
      chest: 1.0,     // Normal damage
      stomach: 0.9,   // Slightly less
      arm: 0.7,       // Arms take less damage
      leg: 0.8        // Legs take less damage
    };
    
    // Hit feedback colors for debugging
    this.hitColors = {
      head: 0xff0000,     // Red for headshot
      chest: 0xff9900,    // Orange for chest
      stomach: 0xffff00,  // Yellow for stomach
      arm: 0x00ff00,      // Green for arms
      leg: 0x0099ff       // Blue for legs
    };
    
    // Store active player models for hit detection
    this.playerModels = new Map();
    
    // Hit markers for visual feedback
    this.hitMarkers = [];
    this.maxHitMarkers = 20;
  }
  
  // Register a player model for hit detection
  registerPlayer(playerId, playerModel) {
    if (!playerModel || !playerModel.getHitboxes) {
      console.warn('Invalid player model provided to hitbox system');
      return;
    }
    
    this.playerModels.set(playerId, playerModel);
    
    // Set hitbox visibility based on debug mode
    playerModel.setHitboxesVisible(this.debugMode);
  }
  
  // Unregister a player
  unregisterPlayer(playerId) {
    this.playerModels.delete(playerId);
  }
  
  // Perform hit detection with advanced hitbox system
  checkHit(origin, direction, range = 100, excludePlayerId = null) {
    this.raycaster.set(origin, direction);
    this.raycaster.far = range;
    
    let closestHit = null;
    let minDistance = Infinity;
    
    // Check each registered player
    for (const [playerId, playerModel] of this.playerModels) {
      // Skip excluded player (usually the shooter)
      if (playerId === excludePlayerId) continue;
      
      // Get hitboxes from player model
      const hitboxes = playerModel.getHitboxes();
      if (!hitboxes || hitboxes.length === 0) continue;
      
      // Check intersection with hitboxes
      const intersects = this.raycaster.intersectObjects(hitboxes, false);
      
      if (intersects.length > 0) {
        // Sort by priority (head > chest > stomach > arms > legs)
        intersects.sort((a, b) => {
          const priorityA = a.object.userData.priority || 999;
          const priorityB = b.object.userData.priority || 999;
          return priorityA - priorityB;
        });
        
        const hit = intersects[0];
        
        if (hit.distance < minDistance) {
          minDistance = hit.distance;
          
          const hitboxData = hit.object.userData;
          
          closestHit = {
            hit: true,
            playerId: playerId,
            playerModel: playerModel,
            point: hit.point,
            distance: hit.distance,
            normal: hit.face ? hit.face.normal : new THREE.Vector3(0, 1, 0),
            hitbox: hit.object,
            bodyPart: hitboxData.type || 'chest',
            damageMultiplier: hitboxData.damageMultiplier || 1.0,
            isHeadshot: hitboxData.type === 'head'
          };
        }
      }
    }
    
    return closestHit || { hit: false };
  }
  
  // Calculate damage based on hit location
  calculateDamage(baseDamage, hitResult) {
    if (!hitResult || !hitResult.hit) return 0;
    
    const multiplier = hitResult.damageMultiplier || 1.0;
    const finalDamage = Math.round(baseDamage * multiplier);
    
    // Add some randomness for realism (±5%)
    const variance = finalDamage * 0.05;
    const randomDamage = finalDamage + (Math.random() - 0.5) * variance;
    
    return Math.round(Math.max(1, randomDamage));
  }
  
  // Create hit marker for visual feedback
  createHitMarker(scene, hitPoint, bodyPart, damage) {
    const geometry = new THREE.SphereGeometry(0.05, 8, 8);
    const color = this.hitColors[bodyPart] || 0xffffff;
    
    const material = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 0.8
    });
    
    const marker = new THREE.Mesh(geometry, material);
    marker.position.copy(hitPoint);
    
    // Add damage text (sprite)
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    
    // Style based on body part
    if (bodyPart === 'head') {
      ctx.fillStyle = '#ff0000';
      ctx.font = 'bold 48px Arial';
    } else {
      ctx.fillStyle = '#ffffff';
      ctx.font = '36px Arial';
    }
    
    ctx.textAlign = 'center';
    ctx.fillText(damage.toString(), 64, 45);
    
    if (bodyPart === 'head') {
      ctx.font = '20px Arial';
      ctx.fillText('HEADSHOT!', 64, 60);
    }
    
    const texture = new THREE.CanvasTexture(canvas);
    const spriteMaterial = new THREE.SpriteMaterial({ 
      map: texture,
      transparent: true
    });
    
    const sprite = new THREE.Sprite(spriteMaterial);
    sprite.scale.set(0.5, 0.25, 1);
    sprite.position.copy(hitPoint);
    sprite.position.y += 0.2;
    
    scene.add(marker);
    scene.add(sprite);
    
    // Store for cleanup
    this.hitMarkers.push({ marker, sprite, lifetime: 1.0 });
    
    // Limit hit markers
    while (this.hitMarkers.length > this.maxHitMarkers) {
      const old = this.hitMarkers.shift();
      scene.remove(old.marker);
      scene.remove(old.sprite);
      old.marker.geometry.dispose();
      old.marker.material.dispose();
      old.sprite.material.map.dispose();
      old.sprite.material.dispose();
    }
    
    return { marker, sprite };
  }
  
  // Update hit markers (fade out)
  updateHitMarkers(scene, deltaTime) {
    for (let i = this.hitMarkers.length - 1; i >= 0; i--) {
      const hitMarker = this.hitMarkers[i];
      hitMarker.lifetime -= deltaTime;
      
      if (hitMarker.lifetime <= 0) {
        // Remove from scene
        scene.remove(hitMarker.marker);
        scene.remove(hitMarker.sprite);
        
        // Dispose of resources
        hitMarker.marker.geometry.dispose();
        hitMarker.marker.material.dispose();
        hitMarker.sprite.material.map.dispose();
        hitMarker.sprite.material.dispose();
        
        // Remove from array
        this.hitMarkers.splice(i, 1);
      } else {
        // Fade out and float up
        const opacity = hitMarker.lifetime;
        hitMarker.marker.material.opacity = opacity * 0.8;
        hitMarker.sprite.material.opacity = opacity;
        hitMarker.sprite.position.y += deltaTime * 0.5;
      }
    }
  }
  
  // Toggle debug mode
  setDebugMode(enabled) {
    this.debugMode = enabled;
    
    // Update all registered player models
    for (const playerModel of this.playerModels.values()) {
      playerModel.setHitboxesVisible(enabled);
    }
  }
  
  // Get hit statistics
  getHitStats(hitResults) {
    const stats = {
      totalHits: 0,
      headshots: 0,
      bodyShots: 0,
      limbShots: 0,
      avgDamage: 0,
      totalDamage: 0
    };
    
    if (!Array.isArray(hitResults)) return stats;
    
    hitResults.forEach(hit => {
      if (hit.hit) {
        stats.totalHits++;
        stats.totalDamage += hit.damage || 0;
        
        switch (hit.bodyPart) {
          case 'head':
            stats.headshots++;
            break;
          case 'chest':
          case 'stomach':
            stats.bodyShots++;
            break;
          case 'arm':
          case 'leg':
            stats.limbShots++;
            break;
        }
      }
    });
    
    if (stats.totalHits > 0) {
      stats.avgDamage = Math.round(stats.totalDamage / stats.totalHits);
    }
    
    return stats;
  }
  
  // Check if a position would hit any player
  checkPositionCollision(position, radius = 0.5, excludePlayerId = null) {
    const collisions = [];
    
    for (const [playerId, playerModel] of this.playerModels) {
      if (playerId === excludePlayerId) continue;
      
      const playerPos = playerModel.getModel().position;
      const distance = position.distanceTo(playerPos);
      
      // Simple radius check for now
      if (distance < radius + 0.5) { // 0.5 is approx player radius
        collisions.push({
          playerId,
          distance,
          playerModel
        });
      }
    }
    
    return collisions;
  }
  
  // Clean up
  dispose() {
    // Clear all hit markers
    this.hitMarkers.forEach(hitMarker => {
      if (hitMarker.marker) {
        hitMarker.marker.geometry.dispose();
        hitMarker.marker.material.dispose();
      }
      if (hitMarker.sprite) {
        hitMarker.sprite.material.map.dispose();
        hitMarker.sprite.material.dispose();
      }
    });
    
    this.hitMarkers = [];
    this.playerModels.clear();
  }
}