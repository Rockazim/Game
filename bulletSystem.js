import * as THREE from 'three';

export class BulletSystem {
  constructor(scene, camera) {
    this.scene = scene;
    this.camera = camera;
    this.raycaster = new THREE.Raycaster();
    this.impacts = [];
    this.maxImpacts = 50;
    this.trails = [];
    this.maxTrails = 20;
    
    // Create impact effect pool
    this.createImpactPool();
    this.createTrailPool();
  }
  
  createImpactPool() {
    const geometry = new THREE.SphereGeometry(0.05, 4, 4);
    const material = new THREE.MeshBasicMaterial({
      color: 0xffaa00,
      transparent: true,
      opacity: 0.8
    });
    
    for (let i = 0; i < this.maxImpacts; i++) {
      const impact = new THREE.Mesh(geometry, material.clone());
      impact.visible = false;
      this.scene.add(impact);
      this.impacts.push({
        mesh: impact,
        active: false,
        lifetime: 0
      });
    }
  }
  
  createTrailPool() {
    // Pre-create trail objects for performance
    for (let i = 0; i < this.maxTrails; i++) {
      const points = [new THREE.Vector3(), new THREE.Vector3()];
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const material = new THREE.LineBasicMaterial({
        color: 0xffff00,
        transparent: true,
        opacity: 0
      });
      
      const trail = new THREE.Line(geometry, material);
      trail.visible = false;
      this.scene.add(trail);
      
      this.trails.push({
        mesh: trail,
        active: false,
        opacity: 0
      });
    }
  }
  
  createTrail(position, direction) {
    // Find an inactive trail
    const trail = this.trails.find(t => !t.active);
    if (!trail) return null;
    
    // Calculate end point
    const start = new THREE.Vector3(
      position.x || 0,
      position.y || 0,
      position.z || 0
    );
    const dir = new THREE.Vector3(
      direction.x || 0,
      direction.y || -1,
      direction.z || 0
    ).normalize();
    const end = start.clone().add(dir.multiplyScalar(50));
    
    // Update trail geometry
    const positions = trail.mesh.geometry.attributes.position.array;
    positions[0] = start.x;
    positions[1] = start.y;
    positions[2] = start.z;
    positions[3] = end.x;
    positions[4] = end.y;
    positions[5] = end.z;
    trail.mesh.geometry.attributes.position.needsUpdate = true;
    
    // Activate trail
    trail.active = true;
    trail.opacity = 0.5;
    trail.mesh.material.opacity = 0.5;
    trail.mesh.visible = true;
    
    // Fade out
    setTimeout(() => {
      trail.active = false;
      trail.mesh.visible = false;
      trail.mesh.material.opacity = 0;
    }, 100);
    
    return trail.mesh;
  }
  
  shoot(weaponData, mapColliders, remotePlayers = null) {
    if (weaponData.isMelee) {
      return this.meleeAttack(weaponData, remotePlayers);
    }
    
    // Calculate spread based on accuracy
    const spread = (1 - weaponData.accuracy) * 0.05;
    const spreadX = (Math.random() - 0.5) * spread;
    const spreadY = (Math.random() - 0.5) * spread;
    
    // Set up ray from camera center with spread
    const direction = new THREE.Vector3(spreadX, spreadY, -1);
    direction.unproject(this.camera);
    direction.sub(this.camera.position).normalize();
    
    this.raycaster.set(this.camera.position, direction);
    this.raycaster.far = weaponData.range;
    
    // First check for hits on remote players
    if (remotePlayers && remotePlayers.size > 0) {
      const playerMeshes = Array.from(remotePlayers.values());
      const playerIntersects = this.raycaster.intersectObjects(playerMeshes, true);
      
      if (playerIntersects.length > 0) {
        const hit = playerIntersects[0];
        
        // Find which player was hit
        let hitPlayerId = null;
        for (const [playerId, mesh] of remotePlayers.entries()) {
          if (mesh === hit.object || mesh.children.includes(hit.object)) {
            hitPlayerId = playerId;
            break;
          }
        }
        
        // Show impact effect
        this.showImpact(hit.point, hit.face ? hit.face.normal : new THREE.Vector3(0, 1, 0));
        
        // Calculate damage with headshot bonus
        let damage = weaponData.damage;
        const headHeight = 1.6; // Approximate head position
        if (hit.point.y > headHeight) {
          damage = Math.round(damage * 2); // Double damage for headshot
        }
        
        // Return player hit information
        return {
          hit: true,
          point: hit.point,
          distance: hit.distance,
          object: hit.object,
          damage: damage,
          isPlayer: true,
          playerId: hitPlayerId,
          isHeadshot: hit.point.y > headHeight
        };
      }
    }
    
    // Check for hits on map geometry
    const intersects = this.raycaster.intersectObjects(this.scene.children, true);
    
    let hit = null;
    for (const intersect of intersects) {
      // Skip non-solid objects, UI elements, and player meshes
      if (intersect.object.userData && intersect.object.userData.ignoreRaycast) {
        continue;
      }
      
      // Skip remote player meshes (already checked)
      let isPlayerMesh = false;
      if (remotePlayers) {
        for (const mesh of remotePlayers.values()) {
          if (mesh === intersect.object || mesh.children.includes(intersect.object)) {
            isPlayerMesh = true;
            break;
          }
        }
      }
      if (isPlayerMesh) continue;
      
      hit = intersect;
      break;
    }
    
    if (hit) {
      // Show impact effect
      this.showImpact(hit.point, hit.face ? hit.face.normal : new THREE.Vector3(0, 1, 0));
      
      // Return hit information
      return {
        hit: true,
        point: hit.point,
        distance: hit.distance,
        object: hit.object,
        damage: weaponData.damage,
        isPlayer: false
      };
    }
    
    return {
      hit: false,
      damage: 0
    };
  }
  
  meleeAttack(weaponData, remotePlayers = null) {
    // Melee attack - short range check in front of player
    const direction = new THREE.Vector3(0, 0, -1);
    direction.applyQuaternion(this.camera.quaternion);
    
    this.raycaster.set(this.camera.position, direction);
    this.raycaster.far = weaponData.range;
    
    // First check for hits on remote players
    if (remotePlayers && remotePlayers.size > 0) {
      const playerMeshes = Array.from(remotePlayers.values());
      const playerIntersects = this.raycaster.intersectObjects(playerMeshes, true);
      
      if (playerIntersects.length > 0) {
        const hit = playerIntersects[0];
        
        // Find which player was hit
        let hitPlayerId = null;
        for (const [playerId, mesh] of remotePlayers.entries()) {
          if (mesh === hit.object || mesh.children.includes(hit.object)) {
            hitPlayerId = playerId;
            break;
          }
        }
        
        // Check for backstab (double damage from behind)
        let damage = weaponData.damage;
        if (weaponData.backstabDamage) {
          damage = weaponData.backstabDamage;
        }
        
        return {
          hit: true,
          point: hit.point,
          distance: hit.distance,
          object: hit.object,
          damage: damage,
          isMelee: true,
          isPlayer: true,
          playerId: hitPlayerId
        };
      }
    }
    
    // Check for hits on other objects
    const intersects = this.raycaster.intersectObjects(this.scene.children, true);
    
    if (intersects.length > 0) {
      const hit = intersects[0];
      
      // Skip player meshes
      if (remotePlayers) {
        for (const mesh of remotePlayers.values()) {
          if (mesh === hit.object || mesh.children.includes(hit.object)) {
            return { hit: false, damage: 0, isMelee: true };
          }
        }
      }
      
      return {
        hit: true,
        point: hit.point,
        distance: hit.distance,
        object: hit.object,
        damage: weaponData.damage,
        isMelee: true,
        isPlayer: false
      };
    }
    
    return {
      hit: false,
      damage: 0,
      isMelee: true
    };
  }
  
  showImpact(position, normal) {
    // Find inactive impact effect
    let impact = null;
    for (let i = 0; i < this.impacts.length; i++) {
      if (!this.impacts[i].active) {
        impact = this.impacts[i];
        break;
      }
    }
    
    if (!impact) {
      // Reuse oldest impact
      impact = this.impacts[0];
    }
    
    // Position and show impact
    impact.mesh.position.copy(position);
    impact.mesh.position.add(normal.multiplyScalar(0.01)); // Offset slightly from surface
    impact.mesh.visible = true;
    impact.mesh.material.opacity = 0.8;
    impact.mesh.scale.set(1, 1, 1);
    impact.active = true;
    impact.lifetime = 1.0;
    
    // Add bullet hole decal (simplified - just a dark spot)
    const holeGeometry = new THREE.PlaneGeometry(0.1, 0.1);
    const holeMaterial = new THREE.MeshBasicMaterial({
      color: 0x1a1a1a,
      transparent: true,
      opacity: 0.5,
      side: THREE.DoubleSide
    });
    const hole = new THREE.Mesh(holeGeometry, holeMaterial);
    hole.position.copy(position);
    hole.position.add(normal.clone().multiplyScalar(0.02));
    hole.lookAt(position.clone().add(normal));
    this.scene.add(hole);
    
    // Remove hole after some time
    setTimeout(() => {
      this.scene.remove(hole);
      hole.geometry.dispose();
      hole.material.dispose();
    }, 30000); // 30 seconds
  }
  
  createBulletTrail(start, end) {
    // Create a simple line for bullet trail
    const points = [start, end];
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({
      color: 0xffff00,
      transparent: true,
      opacity: 0.5,
      linewidth: 2
    });
    
    const trail = new THREE.Line(geometry, material);
    this.scene.add(trail);
    
    // Fade out and remove trail
    const fadeOut = () => {
      material.opacity -= 0.05;
      if (material.opacity <= 0) {
        this.scene.remove(trail);
        geometry.dispose();
        material.dispose();
      } else {
        requestAnimationFrame(fadeOut);
      }
    };
    
    setTimeout(fadeOut, 50);
  }
  
  update(deltaTime) {
    // Update impact effects
    for (let i = 0; i < this.impacts.length; i++) {
      const impact = this.impacts[i];
      if (impact.active) {
        impact.lifetime -= deltaTime;
        
        if (impact.lifetime <= 0) {
          impact.mesh.visible = false;
          impact.active = false;
        } else {
          // Fade out and scale down
          impact.mesh.material.opacity = impact.lifetime * 0.8;
          const scale = 1 + (1 - impact.lifetime) * 2;
          impact.mesh.scale.set(scale, scale, scale);
        }
      }
    }
  }
  
  dispose() {
    // Clean up impact effects
    this.impacts.forEach(impact => {
      if (impact.mesh) {
        this.scene.remove(impact.mesh);
        impact.mesh.geometry.dispose();
        impact.mesh.material.dispose();
      }
    });
    
    this.impacts = [];
  }
}