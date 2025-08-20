import * as THREE from 'three';

export class SimpleMap {
  constructor(scene) {
    this.scene = scene;
    this.createMap();
  }

  createMap() {
    // Simple color palette
    this.colors = {
      ground: '#404040',
      wall: '#808080', 
      accent: '#4169e1',
      platform: '#606060',
      obstacle: '#8B4513'
    };
    
    // Create map components
    this.createGround();
    this.createArena();
    this.createPlatforms();
    this.createObstacles();
  }

  createGround() {
    // Simple flat ground
    const groundGeometry = new THREE.PlaneGeometry(100, 100);
    const groundMaterial = new THREE.MeshStandardMaterial({
      color: this.colors.ground,
      roughness: 0.8,
      metalness: 0.1
    });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = 0;
    ground.receiveShadow = true;
    this.scene.add(ground);
  }

  createBox(width, height, depth, color, position) {
    const geometry = new THREE.BoxGeometry(width, height, depth);
    const material = new THREE.MeshStandardMaterial({
      color: color,
      roughness: 0.7,
      metalness: 0.1
    });
    const box = new THREE.Mesh(geometry, material);
    box.position.set(position.x, position.y + height/2, position.z);
    box.castShadow = true;
    box.receiveShadow = true;
    this.scene.add(box);
    return box;
  }

  createArena() {
    // Simple rectangular arena with walls
    const wallThickness = 2;
    const wallHeight = 10;
    const arenaSize = 40;
    
    // North wall
    this.createBox(arenaSize, wallHeight, wallThickness, this.colors.wall, 
      { x: 0, y: 0, z: -arenaSize/2 });
    
    // South wall
    this.createBox(arenaSize, wallHeight, wallThickness, this.colors.wall, 
      { x: 0, y: 0, z: arenaSize/2 });
    
    // East wall
    this.createBox(wallThickness, wallHeight, arenaSize, this.colors.wall, 
      { x: arenaSize/2, y: 0, z: 0 });
    
    // West wall  
    this.createBox(wallThickness, wallHeight, arenaSize, this.colors.wall, 
      { x: -arenaSize/2, y: 0, z: 0 });
  }

  createPlatforms() {
    // Central raised platform
    this.createBox(10, 2, 10, this.colors.accent, 
      { x: 0, y: 0, z: 0 });
    
    // Stairs to central platform (4 sides)
    this.createStairs(3, 2, 'north', { x: 0, y: 0, z: 5.5 });
    this.createStairs(3, 2, 'south', { x: 0, y: 0, z: -5.5 });
    this.createStairs(3, 2, 'east', { x: 5.5, y: 0, z: 0 });
    this.createStairs(3, 2, 'west', { x: -5.5, y: 0, z: 0 });
    
    // Corner platforms
    this.createBox(6, 3, 6, this.colors.platform, 
      { x: 15, y: 0, z: 15 });
    
    this.createBox(6, 3, 6, this.colors.platform, 
      { x: -15, y: 0, z: 15 });
    
    this.createBox(6, 3, 6, this.colors.platform, 
      { x: 15, y: 0, z: -15 });
    
    this.createBox(6, 3, 6, this.colors.platform, 
      { x: -15, y: 0, z: -15 });
    
    // Stairs to corner platforms
    this.createStairs(3, 3, 'south', { x: 15, y: 0, z: 11.5 });
    this.createStairs(3, 3, 'south', { x: -15, y: 0, z: 11.5 });
    this.createStairs(3, 3, 'north', { x: 15, y: 0, z: -11.5 });
    this.createStairs(3, 3, 'north', { x: -15, y: 0, z: -11.5 });
    
    // Side platforms (lower)
    this.createBox(8, 1, 4, this.colors.platform, 
      { x: 0, y: 0, z: 12 });
    
    this.createBox(8, 1, 4, this.colors.platform, 
      { x: 0, y: 0, z: -12 });
  }

  createObstacles() {
    // Simple cover boxes scattered around
    this.createBox(2, 2, 2, this.colors.obstacle, 
      { x: 8, y: 0, z: 0 });
    
    this.createBox(2, 2, 2, this.colors.obstacle, 
      { x: -8, y: 0, z: 0 });
    
    this.createBox(3, 1.5, 1.5, this.colors.obstacle, 
      { x: 0, y: 0, z: 8 });
    
    this.createBox(3, 1.5, 1.5, this.colors.obstacle, 
      { x: 0, y: 0, z: -8 });
    
    // Additional obstacles
    this.createBox(1.5, 2.5, 1.5, this.colors.obstacle, 
      { x: 10, y: 0, z: 5 });
    
    this.createBox(1.5, 2.5, 1.5, this.colors.obstacle, 
      { x: -10, y: 0, z: -5 });
  }

  createStairs(width, totalHeight, direction, position) {
    // Create a smooth ramp instead of individual steps for better collision
    const rampLength = totalHeight * 1.5; // Length of the ramp
    
    let rampWidth, rampDepth, rampX, rampZ, rotationAxis, rotationAngle;
    
    switch(direction) {
      case 'north':
        rampWidth = width;
        rampDepth = rampLength;
        rampX = position.x;
        rampZ = position.z + rampLength/2;
        rotationAxis = 'x';
        rotationAngle = -Math.atan2(totalHeight, rampLength);
        break;
      case 'south':
        rampWidth = width;
        rampDepth = rampLength;
        rampX = position.x;
        rampZ = position.z - rampLength/2;
        rotationAxis = 'x';
        rotationAngle = Math.atan2(totalHeight, rampLength);
        break;
      case 'east':
        rampWidth = rampLength;
        rampDepth = width;
        rampX = position.x + rampLength/2;
        rampZ = position.z;
        rotationAxis = 'z';
        rotationAngle = Math.atan2(totalHeight, rampLength);
        break;
      case 'west':
        rampWidth = rampLength;
        rampDepth = width;
        rampX = position.x - rampLength/2;
        rampZ = position.z;
        rotationAxis = 'z';
        rotationAngle = -Math.atan2(totalHeight, rampLength);
        break;
    }
    
    // Create smooth ramp
    const rampGeometry = new THREE.BoxGeometry(rampWidth, 0.2, rampDepth);
    const rampMaterial = new THREE.MeshStandardMaterial({
      color: this.colors.platform,
      roughness: 0.7,
      metalness: 0.1
    });
    const ramp = new THREE.Mesh(rampGeometry, rampMaterial);
    ramp.position.set(rampX, totalHeight/2, rampZ);
    ramp.rotation[rotationAxis] = rotationAngle;
    ramp.castShadow = true;
    ramp.receiveShadow = true;
    this.scene.add(ramp);
    
    // Add visual steps on top of ramp for appearance
    const stepHeight = 0.3;
    const stepDepth = 0.5;
    const numSteps = Math.floor(totalHeight / stepHeight);
    
    for (let i = 0; i < numSteps; i++) {
      let stepX = position.x;
      let stepZ = position.z;
      
      switch(direction) {
        case 'north':
          stepZ = position.z + i * stepDepth;
          break;
        case 'south':
          stepZ = position.z - i * stepDepth;
          break;
        case 'east':
          stepX = position.x + i * stepDepth;
          break;
        case 'west':
          stepX = position.x - i * stepDepth;
          break;
      }
      
      // Create thin visual step lines
      const stepWidth = direction === 'east' || direction === 'west' ? 0.1 : width;
      const stepLength = direction === 'north' || direction === 'south' ? 0.1 : width;
      
      this.createBox(stepWidth, 0.05, stepLength, this.colors.accent, 
        { x: stepX, y: (i + 1) * stepHeight, z: stepZ });
    }
  }
}

// Keep the old class name for compatibility
export const Dust2Map = SimpleMap;