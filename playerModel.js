import * as THREE from 'three';

export class PlayerModel {
  constructor(options = {}) {
    this.team = options.team || 'ct'; // 'ct' or 't'
    this.isLocalPlayer = options.isLocalPlayer || false;
    this.showArms = options.showArms || false;
    
    // Model hierarchy
    this.root = new THREE.Group();
    this.body = new THREE.Group();
    this.upperBody = new THREE.Group();
    this.lowerBody = new THREE.Group();
    this.head = null;
    this.leftArm = new THREE.Group();
    this.rightArm = new THREE.Group();
    this.leftLeg = new THREE.Group();
    this.rightLeg = new THREE.Group();
    
    // Hitboxes
    this.hitboxes = new THREE.Group();
    this.hitboxes.visible = false; // Invisible by default
    
    // Animation properties
    this.animationTime = 0;
    this.walkCycle = 0;
    this.isMoving = false;
    this.isCrouching = false;
    this.isDead = false;
    
    // Build the model
    this.createModel();
    this.createHitboxes();
    
    // Add glow effect group
    this.glowMeshes = [];
  }
  
  createModel() {
    // Materials based on team
    const primaryColor = this.team === 'ct' ? '#4A90E2' : '#E67E22';
    const secondaryColor = this.team === 'ct' ? '#2C3E50' : '#8B4513';
    const accentColor = this.team === 'ct' ? '#5DADE2' : '#F39C12';
    
    const skinMaterial = new THREE.MeshStandardMaterial({
      color: '#FDBCB4',
      roughness: 0.7,
      metalness: 0
    });
    
    const vestMaterial = new THREE.MeshStandardMaterial({
      color: secondaryColor,
      roughness: 0.8,
      metalness: 0.1
    });
    
    const pantsMaterial = new THREE.MeshStandardMaterial({
      color: '#2C3E50',
      roughness: 0.85,
      metalness: 0
    });
    
    const bootMaterial = new THREE.MeshStandardMaterial({
      color: '#1A1A1A',
      roughness: 0.9,
      metalness: 0.05
    });
    
    const accentMaterial = new THREE.MeshStandardMaterial({
      color: accentColor,
      roughness: 0.3,
      metalness: 0.7,
      emissive: accentColor,
      emissiveIntensity: 0.1
    });
    
    // HEAD - Krunker-style cylinder with slight taper (scaled down)
    const headGeometry = new THREE.CylinderGeometry(0.28, 0.32, 0.64, 8);
    this.head = new THREE.Mesh(headGeometry, skinMaterial);
    this.head.position.y = 1.92;
    this.head.castShadow = true;
    
    // Simple eye indents (dark spots) - scaled
    const eyeGeometry = new THREE.BoxGeometry(0.08, 0.08, 0.04);
    const eyeMaterial = new THREE.MeshStandardMaterial({ color: '#000000' });
    
    const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    leftEye.position.set(-0.12, 0.08, 0.28);
    this.head.add(leftEye);
    
    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    rightEye.position.set(0.12, 0.08, 0.28);
    this.head.add(rightEye);
    
    // Tactical helmet rim (optional accent) - scaled
    const helmetRimGeometry = new THREE.TorusGeometry(0.32, 0.04, 4, 12);
    const helmetRim = new THREE.Mesh(helmetRimGeometry, accentMaterial);
    helmetRim.position.y = 0.16;
    helmetRim.rotation.x = Math.PI / 2;
    this.head.add(helmetRim);
    
    // Hide head for local player in first person
    if (this.isLocalPlayer && !this.showArms) {
      this.head.visible = false;
    }
    
    // TORSO - Wider shoulders tapering down (scaled)
    const torsoGeometry = new THREE.BoxGeometry(0.96, 0.8, 0.48);
    const torso = new THREE.Mesh(torsoGeometry, vestMaterial);
    torso.position.y = 1.2;
    torso.castShadow = true;
    
    // Tactical vest detail - chest plate (scaled)
    const chestPlateGeometry = new THREE.BoxGeometry(0.64, 0.48, 0.08);
    const chestPlate = new THREE.Mesh(chestPlateGeometry, accentMaterial);
    chestPlate.position.set(0, 0, 0.24);
    torso.add(chestPlate);
    
    // Vest pockets (scaled)
    const pocketGeometry = new THREE.BoxGeometry(0.16, 0.12, 0.04);
    const leftPocket = new THREE.Mesh(pocketGeometry, secondaryColor);
    leftPocket.position.set(-0.24, -0.16, 0.28);
    torso.add(leftPocket);
    
    const rightPocket = new THREE.Mesh(pocketGeometry, secondaryColor);
    rightPocket.position.set(0.24, -0.16, 0.28);
    torso.add(rightPocket);
    
    // ARMS - Krunker-style simple cylinders with joints (scaled)
    const upperArmGeometry = new THREE.CylinderGeometry(0.12, 0.096, 0.48, 6);
    const lowerArmGeometry = new THREE.CylinderGeometry(0.096, 0.08, 0.4, 6);
    const handGeometry = new THREE.BoxGeometry(0.12, 0.16, 0.064);
    
    // Left arm (scaled)
    const leftUpperArm = new THREE.Mesh(upperArmGeometry, vestMaterial);
    leftUpperArm.position.set(-0.52, 1.2, 0);
    leftUpperArm.rotation.z = 0.1;
    
    const leftLowerArm = new THREE.Mesh(lowerArmGeometry, skinMaterial);
    leftLowerArm.position.set(0, -0.4, 0);
    
    const leftHand = new THREE.Mesh(handGeometry, skinMaterial);
    leftHand.position.set(0, -0.28, 0);
    
    leftLowerArm.add(leftHand);
    leftUpperArm.add(leftLowerArm);
    this.leftArm.add(leftUpperArm);
    
    // Right arm (scaled)
    const rightUpperArm = new THREE.Mesh(upperArmGeometry, vestMaterial);
    rightUpperArm.position.set(0.52, 1.2, 0);
    rightUpperArm.rotation.z = -0.1;
    
    const rightLowerArm = new THREE.Mesh(lowerArmGeometry, skinMaterial);
    rightLowerArm.position.set(0, -0.4, 0);
    
    const rightHand = new THREE.Mesh(handGeometry, skinMaterial);
    rightHand.position.set(0, -0.28, 0);
    
    rightLowerArm.add(rightHand);
    rightUpperArm.add(rightLowerArm);
    this.rightArm.add(rightUpperArm);
    
    // Hide arms for local player in first person
    if (this.isLocalPlayer && !this.showArms) {
      this.leftArm.visible = false;
      this.rightArm.visible = false;
    }
    
    // WAIST/BELT (scaled)
    const waistGeometry = new THREE.BoxGeometry(0.8, 0.16, 0.44);
    const waist = new THREE.Mesh(waistGeometry, bootMaterial);
    waist.position.y = 0.72;
    
    // Belt buckle accent (scaled)
    const buckleGeometry = new THREE.BoxGeometry(0.12, 0.12, 0.04);
    const buckle = new THREE.Mesh(buckleGeometry, accentMaterial);
    buckle.position.set(0, 0, 0.24);
    waist.add(buckle);
    
    // LEGS - Blocky with knee detail (scaled)
    const upperLegGeometry = new THREE.BoxGeometry(0.28, 0.48, 0.28);
    const lowerLegGeometry = new THREE.BoxGeometry(0.24, 0.4, 0.24);
    const footGeometry = new THREE.BoxGeometry(0.28, 0.12, 0.36);
    
    // Left leg (scaled)
    const leftUpperLeg = new THREE.Mesh(upperLegGeometry, pantsMaterial);
    leftUpperLeg.position.set(-0.2, 0.4, 0);
    
    const leftKneePad = new THREE.Mesh(
      new THREE.BoxGeometry(0.24, 0.12, 0.08),
      accentMaterial
    );
    leftKneePad.position.set(0, -0.16, 0.16);
    leftUpperLeg.add(leftKneePad);
    
    const leftLowerLeg = new THREE.Mesh(lowerLegGeometry, pantsMaterial);
    leftLowerLeg.position.set(0, -0.4, 0);
    
    const leftFoot = new THREE.Mesh(footGeometry, bootMaterial);
    leftFoot.position.set(0, -0.24, 0.04);
    
    leftLowerLeg.add(leftFoot);
    leftUpperLeg.add(leftLowerLeg);
    this.leftLeg.add(leftUpperLeg);
    
    // Right leg (scaled)
    const rightUpperLeg = new THREE.Mesh(upperLegGeometry, pantsMaterial);
    rightUpperLeg.position.set(0.2, 0.4, 0);
    
    const rightKneePad = new THREE.Mesh(
      new THREE.BoxGeometry(0.24, 0.12, 0.08),
      accentMaterial
    );
    rightKneePad.position.set(0, -0.16, 0.16);
    rightUpperLeg.add(rightKneePad);
    
    const rightLowerLeg = new THREE.Mesh(lowerLegGeometry, pantsMaterial);
    rightLowerLeg.position.set(0, -0.4, 0);
    
    const rightFoot = new THREE.Mesh(footGeometry, bootMaterial);
    rightFoot.position.set(0, -0.24, 0.04);
    
    rightLowerLeg.add(rightFoot);
    rightUpperLeg.add(rightLowerLeg);
    this.rightLeg.add(rightUpperLeg);
    
    // Assemble the model hierarchy
    this.upperBody.add(this.head);
    this.upperBody.add(torso);
    this.upperBody.add(this.leftArm);
    this.upperBody.add(this.rightArm);
    
    this.lowerBody.add(waist);
    this.lowerBody.add(this.leftLeg);
    this.lowerBody.add(this.rightLeg);
    
    this.body.add(this.upperBody);
    this.body.add(this.lowerBody);
    
    this.root.add(this.body);
    this.root.add(this.hitboxes);
    
    // Store meshes for glow effect
    this.glowMeshes = [
      torso, chestPlate, helmetRim,
      leftKneePad, rightKneePad, buckle
    ];
  }
  
  createHitboxes() {
    // Hitbox material (invisible but can be made visible for debugging)
    const hitboxMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
      visible: false  // Start invisible
    });
    
    // HEAD HITBOX - sphere for better hit detection (scaled)
    const headHitbox = new THREE.Mesh(
      new THREE.SphereGeometry(0.32, 8, 6),
      hitboxMaterial
    );
    headHitbox.position.y = 1.92;
    headHitbox.userData = { 
      type: 'head', 
      damageMultiplier: 2.0,
      priority: 1 
    };
    
    // UPPER TORSO HITBOX (scaled)
    const upperTorsoHitbox = new THREE.Mesh(
      new THREE.BoxGeometry(0.96, 0.48, 0.48),
      hitboxMaterial
    );
    upperTorsoHitbox.position.y = 1.36;
    upperTorsoHitbox.userData = { 
      type: 'chest', 
      damageMultiplier: 1.0,
      priority: 2 
    };
    
    // LOWER TORSO HITBOX (scaled)
    const lowerTorsoHitbox = new THREE.Mesh(
      new THREE.BoxGeometry(0.8, 0.4, 0.44),
      hitboxMaterial
    );
    lowerTorsoHitbox.position.y = 0.88;
    lowerTorsoHitbox.userData = { 
      type: 'stomach', 
      damageMultiplier: 0.9,
      priority: 3 
    };
    
    // ARM HITBOXES - capsules for better coverage (scaled)
    const armHitboxGeometry = new THREE.CapsuleGeometry(0.096, 0.64, 4, 6);
    
    const leftArmHitbox = new THREE.Mesh(armHitboxGeometry, hitboxMaterial);
    leftArmHitbox.position.set(-0.52, 1.04, 0);
    leftArmHitbox.userData = { 
      type: 'arm', 
      damageMultiplier: 0.7,
      priority: 4 
    };
    
    const rightArmHitbox = new THREE.Mesh(armHitboxGeometry, hitboxMaterial);
    rightArmHitbox.position.set(0.52, 1.04, 0);
    rightArmHitbox.userData = { 
      type: 'arm', 
      damageMultiplier: 0.7,
      priority: 4 
    };
    
    // LEG HITBOXES (scaled)
    const legHitboxGeometry = new THREE.CapsuleGeometry(0.12, 0.64, 4, 6);
    
    const leftLegHitbox = new THREE.Mesh(legHitboxGeometry, hitboxMaterial);
    leftLegHitbox.position.set(-0.2, 0.32, 0);
    leftLegHitbox.userData = { 
      type: 'leg', 
      damageMultiplier: 0.8,
      priority: 5 
    };
    
    const rightLegHitbox = new THREE.Mesh(legHitboxGeometry, hitboxMaterial);
    rightLegHitbox.position.set(0.2, 0.32, 0);
    rightLegHitbox.userData = { 
      type: 'leg', 
      damageMultiplier: 0.8,
      priority: 5 
    };
    
    // Add all hitboxes to the group
    this.hitboxes.add(headHitbox);
    this.hitboxes.add(upperTorsoHitbox);
    this.hitboxes.add(lowerTorsoHitbox);
    this.hitboxes.add(leftArmHitbox);
    this.hitboxes.add(rightArmHitbox);
    this.hitboxes.add(leftLegHitbox);
    this.hitboxes.add(rightLegHitbox);
    
    // Store references for easy access
    this.headHitbox = headHitbox;
    this.chestHitbox = upperTorsoHitbox;
    this.stomachHitbox = lowerTorsoHitbox;
    this.leftArmHitbox = leftArmHitbox;
    this.rightArmHitbox = rightArmHitbox;
    this.leftLegHitbox = leftLegHitbox;
    this.rightLegHitbox = rightLegHitbox;
  }
  
  // Get all hitbox meshes for raycasting
  getHitboxes() {
    return this.hitboxes.children;
  }
  
  // Show/hide hitboxes for debugging
  setHitboxesVisible(visible) {
    // Set visibility for the group and all children
    this.hitboxes.visible = visible;
    this.hitboxes.traverse((child) => {
      if (child.isMesh && child.material) {
        child.material.visible = visible;
      }
    });
  }
  
  // Update animations
  update(deltaTime, velocity = null) {
    if (this.isDead) return;
    
    this.animationTime += deltaTime;
    
    // Check if moving based on velocity
    if (velocity) {
      const speed = Math.sqrt(velocity.x * velocity.x + velocity.z * velocity.z);
      this.isMoving = speed > 0.1;
    }
    
    // Walking animation
    if (this.isMoving && !this.isCrouching) {
      this.walkCycle += deltaTime * 8; // Walk speed
      
      // Leg swing
      const legSwing = Math.sin(this.walkCycle) * 0.3;
      this.leftLeg.rotation.x = legSwing;
      this.rightLeg.rotation.x = -legSwing;
      
      // Arm swing (opposite to legs)
      if (!this.isLocalPlayer || this.showArms) {
        this.leftArm.rotation.x = -legSwing * 0.5;
        this.rightArm.rotation.x = legSwing * 0.5;
      }
      
      // Subtle body bob
      this.body.position.y = Math.abs(Math.sin(this.walkCycle * 2)) * 0.02;
    } else {
      // Return to idle position
      this.leftLeg.rotation.x *= 0.9;
      this.rightLeg.rotation.x *= 0.9;
      
      if (!this.isLocalPlayer || this.showArms) {
        this.leftArm.rotation.x *= 0.9;
        this.rightArm.rotation.x *= 0.9;
      }
      
      this.body.position.y *= 0.9;
    }
    
    // Breathing idle animation
    const breathe = Math.sin(this.animationTime * 2) * 0.01;
    this.upperBody.position.y = breathe;
    
    // Subtle head movement
    if (this.head && this.head.visible) {
      this.head.rotation.y = Math.sin(this.animationTime * 0.5) * 0.05;
    }
  }
  
  // Set crouching state
  setCrouching(crouching) {
    this.isCrouching = crouching;
    
    if (crouching) {
      // Compress the model
      this.body.scale.y = 0.6;
      this.body.position.y = -0.4;
      
      // Adjust hitboxes
      this.hitboxes.scale.y = 0.6;
      this.hitboxes.position.y = -0.4;
    } else {
      // Return to normal
      this.body.scale.y = 1;
      this.body.position.y = 0;
      
      this.hitboxes.scale.y = 1;
      this.hitboxes.position.y = 0;
    }
  }
  
  // Death animation
  playDeathAnimation() {
    this.isDead = true;
    
    // Ragdoll effect - tilt and fall
    const fallDirection = Math.random() * Math.PI * 2;
    this.body.rotation.z = Math.PI / 2;
    this.body.rotation.y = fallDirection;
    this.body.position.y = -1;
    
    // Fade out effect
    this.root.traverse((child) => {
      if (child.isMesh && child.material) {
        child.material.transparent = true;
        child.material.opacity = 0.5;
      }
    });
  }
  
  // Respawn
  respawn() {
    this.isDead = false;
    
    // Reset position and rotation
    this.body.rotation.set(0, 0, 0);
    this.body.position.y = 0;
    
    // Reset opacity
    this.root.traverse((child) => {
      if (child.isMesh && child.material) {
        child.material.opacity = 1;
      }
    });
  }
  
  // Enable/disable glow effect
  setGlowEffect(enabled, color = null) {
    this.glowMeshes.forEach(mesh => {
      if (mesh && mesh.material) {
        if (enabled) {
          mesh.material.emissive = new THREE.Color(color || this.team === 'ct' ? '#5DADE2' : '#F39C12');
          mesh.material.emissiveIntensity = 0.3;
        } else {
          mesh.material.emissiveIntensity = 0.1;
        }
      }
    });
  }
  
  // Get the root group to add to scene
  getModel() {
    return this.root;
  }
  
  // Set visibility for first person view
  setFirstPersonVisibility(showArms = false) {
    this.showArms = showArms;
    
    if (this.isLocalPlayer) {
      // Hide head in first person
      if (this.head) this.head.visible = false;
      
      // Show/hide arms based on preference
      this.leftArm.visible = showArms;
      this.rightArm.visible = showArms;
    }
  }
  
  // LOD (Level of Detail) System
  createLODModel() {
    const lod = new THREE.LOD();
    
    // LOD 0: Full detail (0-20 units)
    lod.addLevel(this.root, 0);
    
    // LOD 1: Medium detail (20-50 units)
    const mediumDetail = this.createMediumDetailModel();
    lod.addLevel(mediumDetail, 20);
    
    // LOD 2: Low detail (50-100 units)
    const lowDetail = this.createLowDetailModel();
    lod.addLevel(lowDetail, 50);
    
    // LOD 3: Very low detail (100+ units)
    const veryLowDetail = this.createVeryLowDetailModel();
    lod.addLevel(veryLowDetail, 100);
    
    return lod;
  }
  
  createMediumDetailModel() {
    const group = new THREE.Group();
    
    // Simplified materials
    const teamColor = this.team === 'ct' ? '#4A90E2' : '#E67E22';
    const simpleMaterial = new THREE.MeshLambertMaterial({ color: teamColor });
    const skinMaterial = new THREE.MeshLambertMaterial({ color: '#FDBCB4' });
    
    // Simplified body (single box) - scaled
    const torsoGeometry = new THREE.BoxGeometry(0.96, 1.6, 0.48);
    const torso = new THREE.Mesh(torsoGeometry, simpleMaterial);
    torso.position.y = 1.2;
    group.add(torso);
    
    // Simplified head (sphere) - scaled
    const headGeometry = new THREE.SphereGeometry(0.32, 6, 6);
    const head = new THREE.Mesh(headGeometry, skinMaterial);
    head.position.y = 1.92;
    group.add(head);
    
    // Simple legs (single box) - scaled
    const legsGeometry = new THREE.BoxGeometry(0.64, 0.8, 0.4);
    const legs = new THREE.Mesh(legsGeometry, simpleMaterial);
    legs.position.y = 0.4;
    group.add(legs);
    
    // Copy hitboxes (invisible but needed for hit detection)
    group.add(this.hitboxes.clone());
    
    return group;
  }
  
  createLowDetailModel() {
    const group = new THREE.Group();
    
    // Very simple capsule shape
    const teamColor = this.team === 'ct' ? '#4A90E2' : '#E67E22';
    const material = new THREE.MeshBasicMaterial({ color: teamColor });
    
    const geometry = new THREE.CapsuleGeometry(0.4, 1.44, 4, 6);
    const capsule = new THREE.Mesh(geometry, material);
    capsule.position.y = 1.12;
    group.add(capsule);
    
    // Copy hitboxes
    group.add(this.hitboxes.clone());
    
    return group;
  }
  
  createVeryLowDetailModel() {
    const group = new THREE.Group();
    
    // Billboard sprite for very far distances
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');
    
    // Draw simple player silhouette
    const teamColor = this.team === 'ct' ? '#4A90E2' : '#E67E22';
    ctx.fillStyle = teamColor;
    ctx.fillRect(24, 20, 16, 40); // Body
    ctx.fillRect(20, 40, 24, 40); // Legs
    ctx.fillStyle = '#FDBCB4';
    ctx.beginPath();
    ctx.arc(32, 16, 8, 0, Math.PI * 2); // Head
    ctx.fill();
    
    const texture = new THREE.CanvasTexture(canvas);
    const spriteMaterial = new THREE.SpriteMaterial({ 
      map: texture,
      color: 0xffffff
    });
    
    const sprite = new THREE.Sprite(spriteMaterial);
    sprite.scale.set(0.8, 1.6, 1);
    sprite.position.y = 1.12;
    group.add(sprite);
    
    return group;
  }
  
  // Update LOD based on distance from camera
  updateLOD(camera) {
    if (this.lodGroup) {
      this.lodGroup.update(camera);
    }
  }
  
  // Get LOD group instead of regular model for remote players
  getLODModel() {
    if (!this.lodGroup) {
      this.lodGroup = this.createLODModel();
    }
    return this.lodGroup;
  }
  
  // Clean up
  dispose() {
    this.root.traverse((child) => {
      if (child.geometry) child.geometry.dispose();
      if (child.material) {
        if (Array.isArray(child.material)) {
          child.material.forEach(mat => mat.dispose());
        } else {
          child.material.dispose();
        }
      }
    });
    
    // Clean up LOD models if they exist
    if (this.lodGroup) {
      this.lodGroup.traverse((child) => {
        if (child.geometry) child.geometry.dispose();
        if (child.material) {
          if (Array.isArray(child.material)) {
            child.material.forEach(mat => mat.dispose());
          } else {
            child.material.dispose();
          }
        }
      });
    }
  }
}