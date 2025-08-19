import * as THREE from 'three';

export class Dust2Map {
  constructor(scene) {
    this.scene = scene;
    this.structures = [];
    this.collisionBoxes = [];
    this.textureLoader = new THREE.TextureLoader();
    this.createMap();
  }

  createMap() {
    // Enhanced Dust 2 color palette based on screenshot analysis
    this.colors = {
      sand: '#D4B896',
      lightWall: '#E8D4B0',
      darkWall: '#9B8A6D',
      box: '#8B7355',
      door: '#5C4033',
      blueContainer: '#4B6B8A',
      ground: '#C8B88B',
      arch: '#B8A080',
      window: '#2A3B4C',
      trim: '#C4A57B',
      stone: '#A89B8C',
      concrete: '#9B9B9B',
      metal: '#6B6B6B',
      wood: '#7B5A3A',
      greenBarrel: '#556B2F',
      redBarrel: '#8B3626',
      tiles: '#D4C4A0'
    };
    
    // Create map components in order
    this.createGround();
    this.createTSpawn();
    this.createCTSpawn();
    this.createMidArea();
    this.createALong();
    this.createASite();
    this.createShortCatwalk();
    this.createBTunnels();
    this.createBSite();
    this.createPerimeterWalls();
    this.addEnvironmentalDetails();
    this.addLighting();
  }

  createGround() {
    // Main ground plane with texture-like detail
    const groundGeometry = new THREE.PlaneGeometry(150, 150, 30, 30);
    
    // Add subtle variation to ground vertices
    const positions = groundGeometry.attributes.position.array;
    for (let i = 0; i < positions.length; i += 3) {
      positions[i + 2] = Math.random() * 0.05; // Small height variation
    }
    groundGeometry.computeVertexNormals();
    
    const groundMaterial = new THREE.MeshStandardMaterial({
      color: this.colors.ground,
      roughness: 0.95,
      metalness: 0.05,
      flatShading: false
    });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = 0;
    ground.receiveShadow = true;
    this.scene.add(ground);
    
    // Add ground details - sand patches
    for (let i = 0; i < 15; i++) {
      const patchSize = 2 + Math.random() * 3;
      const patchGeo = new THREE.PlaneGeometry(patchSize, patchSize);
      const patchMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(this.colors.sand).multiplyScalar(0.9 + Math.random() * 0.2),
        roughness: 1,
        metalness: 0
      });
      const patch = new THREE.Mesh(patchGeo, patchMat);
      patch.rotation.x = -Math.PI / 2;
      patch.position.set(
        (Math.random() - 0.5) * 120,
        0.01,
        (Math.random() - 0.5) * 120
      );
      patch.receiveShadow = true;
      this.scene.add(patch);
    }
  }

  createBox(width, height, depth, color, position, options = {}) {
    const geometry = new THREE.BoxGeometry(width, height, depth);
    const material = new THREE.MeshStandardMaterial({
      color: color,
      roughness: options.roughness || 0.9,
      metalness: options.metalness || 0.1
    });
    const box = new THREE.Mesh(geometry, material);
    box.position.set(position.x, position.y + height/2, position.z);
    box.castShadow = true;
    box.receiveShadow = true;
    
    if (options.rotation) {
      box.rotation.y = options.rotation;
    }
    
    this.scene.add(box);
    this.structures.push(box);
    return box;
  }
  
  createDetailedBox(width, height, depth, color, position, options = {}) {
    // Create main box
    const mainBox = this.createBox(width, height, depth, color, position, options);
    
    // Add edge details
    if (options.addEdges) {
      const edgeColor = new THREE.Color(color).multiplyScalar(0.7);
      const edgeThickness = 0.05;
      
      // Top edge
      this.createBox(width + 0.1, edgeThickness, depth + 0.1, edgeColor, 
        { x: position.x, y: position.y + height, z: position.z });
      // Bottom edge
      this.createBox(width + 0.1, edgeThickness, depth + 0.1, edgeColor, 
        { x: position.x, y: position.y, z: position.z });
    }
    
    // Add stickers/decals for realism
    if (options.addDecals) {
      const decalGeo = new THREE.PlaneGeometry(width * 0.4, height * 0.3);
      const decalMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(color).multiplyScalar(0.8),
        roughness: 0.5
      });
      const decal = new THREE.Mesh(decalGeo, decalMat);
      decal.position.set(position.x, position.y + height/2, position.z + depth/2 + 0.01);
      this.scene.add(decal);
    }
    
    return mainBox;
  }

  createArch(width, height, depth, color, position, options = {}) {
    // Create more detailed archway structure
    const pillarWidth = options.pillarWidth || 2;
    
    // Left pillar with detail
    this.createBox(pillarWidth, height, depth, color, 
      { x: position.x - width/2 + pillarWidth/2, y: position.y, z: position.z });
    // Right pillar with detail
    this.createBox(pillarWidth, height, depth, color, 
      { x: position.x + width/2 - pillarWidth/2, y: position.y, z: position.z });
    
    // Arched top (simplified with box for now, but with trim)
    this.createBox(width, 2.5, depth, color, 
      { x: position.x, y: position.y + height - 1.25, z: position.z });
    
    // Add decorative trim
    const trimColor = this.colors.trim;
    this.createBox(width + 0.2, 0.3, depth + 0.2, trimColor, 
      { x: position.x, y: position.y + height, z: position.z });
    
    // Add inner arch detail
    if (options.addDetail) {
      const innerWidth = width - pillarWidth * 2;
      this.createBox(innerWidth, 0.2, depth * 0.3, this.colors.stone, 
        { x: position.x, y: position.y + height - 2.5, z: position.z });
    }
  }

  createTSpawn() {
    // T Spawn - Enhanced with multi-story buildings
    // Main spawn platform
    this.createBox(25, 0.5, 20, this.colors.tiles, 
      { x: 0, y: 1, z: 45 });
    
    // Back building - Multi-story structure
    // First floor
    this.createBox(32, 12, 3, this.colors.darkWall, 
      { x: 0, y: 0, z: 55 });
    
    // Windows on back wall
    for (let i = -12; i <= 12; i += 6) {
      this.createBox(2, 2, 0.2, this.colors.window, 
        { x: i, y: 8, z: 56.4 });
      this.createBox(2, 2, 0.2, this.colors.window, 
        { x: i, y: 4, z: 56.4 });
    }
    
    // Side buildings with Middle Eastern architecture
    // Left building
    this.createBox(3, 10, 18, this.colors.lightWall, 
      { x: -15, y: 0, z: 47 });
    // Add decorative elements
    this.createBox(3.5, 0.5, 18.5, this.colors.trim, 
      { x: -15, y: 10, z: 47 });
    // Windows
    this.createBox(1, 2, 0.2, this.colors.window, 
      { x: -13.4, y: 6, z: 45 });
    this.createBox(1, 2, 0.2, this.colors.window, 
      { x: -13.4, y: 6, z: 49 });
    
    // Right building (mirrored)
    this.createBox(3, 10, 18, this.colors.lightWall, 
      { x: 15, y: 0, z: 47 });
    this.createBox(3.5, 0.5, 18.5, this.colors.trim, 
      { x: 15, y: 10, z: 47 });
    this.createBox(1, 2, 0.2, this.colors.window, 
      { x: 13.4, y: 6, z: 45 });
    this.createBox(1, 2, 0.2, this.colors.window, 
      { x: 13.4, y: 6, z: 49 });
    
    // Detailed ramp with stairs texture
    const rampGeo = new THREE.BoxGeometry(20, 0.5, 10);
    const rampMat = new THREE.MeshStandardMaterial({ 
      color: this.colors.sand,
      roughness: 0.9
    });
    const ramp = new THREE.Mesh(rampGeo, rampMat);
    ramp.position.set(0, 0.5, 37);
    ramp.rotation.x = -0.15;
    ramp.castShadow = true;
    ramp.receiveShadow = true;
    this.scene.add(ramp);
    
    // Add stair lines for visual detail
    for (let i = 0; i < 5; i++) {
      this.createBox(20, 0.1, 0.3, this.colors.stone, 
        { x: 0, y: 0.3 + i * 0.2, z: 38 - i * 1.5 });
    }
    
    // Exit to Outside Long (left path) - Enhanced archway
    this.createArch(6, 8, 2.5, this.colors.arch, 
      { x: -10, y: 0, z: 35 }, { addDetail: true });
    
    // Exit to Upper Tunnels (right path) - Enhanced archway
    this.createArch(6, 8, 2.5, this.colors.arch, 
      { x: 10, y: 0, z: 35 }, { addDetail: true });
    
    // Detailed cover boxes with wear
    this.createDetailedBox(2.2, 2, 2.2, this.colors.box, 
      { x: -5, y: 1, z: 42 }, { addEdges: true });
    this.createDetailedBox(1.8, 1.5, 1.8, this.colors.box, 
      { x: 6, y: 1, z: 43 }, { addEdges: true });
    
    // Add some barrels for detail
    this.createBarrel(-8, 1.5, 44, this.colors.greenBarrel);
    this.createBarrel(8, 1.5, 43, this.colors.redBarrel);
  }

  createCTSpawn() {
    // CT Spawn - Enhanced with better architecture
    // Main platform with tiled floor
    this.createBox(22, 0.5, 17, this.colors.tiles, 
      { x: 0, y: 0, z: -40 });
    
    // CT Main building - Multi-level structure
    // Back wall
    this.createBox(28, 12, 2.5, this.colors.darkWall, 
      { x: 0, y: 0, z: -48 });
    
    // Second floor balcony
    this.createBox(20, 0.5, 4, this.colors.concrete, 
      { x: 0, y: 6, z: -46 });
    
    // Balcony railings
    this.createBox(20, 1, 0.2, this.colors.metal, 
      { x: 0, y: 6.5, z: -44 });
    
    // Windows on upper floor
    for (let i = -8; i <= 8; i += 4) {
      this.createBox(2, 2.5, 0.2, this.colors.window, 
        { x: i, y: 8, z: -46.6 });
    }
    
    // Side towers
    // Left tower
    this.createBox(3, 14, 3, this.colors.darkWall, 
      { x: -13, y: 0, z: -40 });
    this.createBox(4, 0.5, 4, this.colors.trim, 
      { x: -13, y: 14, z: -40 });
    // Tower window
    this.createBox(1.5, 2, 0.2, this.colors.window, 
      { x: -11.4, y: 10, z: -40 });
    
    // Right tower (mirrored)
    this.createBox(3, 14, 3, this.colors.darkWall, 
      { x: 13, y: 0, z: -40 });
    this.createBox(4, 0.5, 4, this.colors.trim, 
      { x: 13, y: 14, z: -40 });
    this.createBox(1.5, 2, 0.2, this.colors.window, 
      { x: 11.4, y: 10, z: -40 });
    
    // Enhanced archway exits
    // To A Site - with decorative frame
    this.createArch(5, 7, 2.5, this.colors.arch, 
      { x: -8, y: 0, z: -31 }, { addDetail: true, pillarWidth: 1.5 });
    
    // To B Site - with decorative frame
    this.createArch(5, 7, 2.5, this.colors.arch, 
      { x: 8, y: 0, z: -31 }, { addDetail: true, pillarWidth: 1.5 });
    
    // Central elevated platform with steps
    this.createBox(8, 1, 6, this.colors.concrete, 
      { x: 0, y: 0, z: -35 });
    // Steps
    this.createBox(8, 0.3, 1, this.colors.stone, 
      { x: 0, y: 0, z: -31.5 });
    this.createBox(8, 0.6, 1, this.colors.stone, 
      { x: 0, y: 0, z: -32.5 });
  }

  createMidArea() {
    // Mid area - Enhanced with better detail
    
    // Mid Doors structure - More detailed building
    // Door frame building
    this.createBox(12, 10, 8, this.colors.darkWall, 
      { x: 0, y: 0, z: 0 });
    
    // Doorway cutout represented by side pillars
    this.createBox(2.5, 10, 8, this.colors.darkWall, 
      { x: -4.75, y: 0, z: 0 });
    this.createBox(2.5, 10, 8, this.colors.darkWall, 
      { x: 4.75, y: 0, z: 0 });
    // Top of doorway
    this.createBox(4.5, 3, 8, this.colors.darkWall, 
      { x: 0, y: 7, z: 0 });
    
    // Actual wooden doors (iconic double doors)
    const doorGeo = new THREE.BoxGeometry(0.3, 6.8, 3);
    const doorMat = new THREE.MeshStandardMaterial({ 
      color: this.colors.door,
      roughness: 0.9
    });
    
    // Left door (slightly ajar)
    const leftDoor = new THREE.Mesh(doorGeo, doorMat);
    leftDoor.position.set(-2.8, 3.5, -0.8);
    leftDoor.rotation.y = 0.2;
    leftDoor.castShadow = true;
    this.scene.add(leftDoor);
    
    // Right door (slightly ajar)
    const rightDoor = new THREE.Mesh(doorGeo, doorMat);
    rightDoor.position.set(2.8, 3.5, 0.8);
    rightDoor.rotation.y = -0.2;
    rightDoor.castShadow = true;
    this.scene.add(rightDoor);
    
    // Door handles
    const handleGeo = new THREE.BoxGeometry(0.1, 0.3, 0.1);
    const handleMat = new THREE.MeshStandardMaterial({ 
      color: this.colors.metal,
      metalness: 0.8
    });
    const leftHandle = new THREE.Mesh(handleGeo, handleMat);
    leftHandle.position.set(-2.6, 3.5, -0.8);
    this.scene.add(leftHandle);
    const rightHandle = new THREE.Mesh(handleGeo, handleMat);
    rightHandle.position.set(2.6, 3.5, 0.8);
    this.scene.add(rightHandle);
    
    // Xbox - the famous box near T side mid (more detailed)
    this.createDetailedBox(3.2, 1.8, 3.2, this.colors.box, 
      { x: -2, y: 0, z: 12 }, { addEdges: true, addDecals: true });
    
    // Add Xbox text/marking
    const xboxLabel = new THREE.BoxGeometry(0.01, 0.5, 1);
    const xboxLabelMat = new THREE.MeshStandardMaterial({ color: '#ffffff' });
    const label = new THREE.Mesh(xboxLabel, xboxLabelMat);
    label.position.set(-0.4, 1.5, 12);
    this.scene.add(label);
    
    // Palm tree planter box with detail
    this.createBox(2.5, 1, 2.5, this.colors.concrete, 
      { x: 3, y: 0, z: 15 });
    // Add simple palm tree
    this.createPalmTree(3, 1, 15);
    
    // T to CT Mid walls - with texture variation
    // Left wall
    this.createBox(1.5, 8, 22, this.colors.lightWall, 
      { x: -7, y: 0, z: 10 });
    // Add wall details
    this.createBox(0.2, 8, 22, this.colors.trim, 
      { x: -7.8, y: 0, z: 10 });
    
    // Right wall
    this.createBox(1.5, 8, 22, this.colors.lightWall, 
      { x: 7, y: 0, z: 10 });
    this.createBox(0.2, 8, 22, this.colors.trim, 
      { x: 7.8, y: 0, z: 10 });
    
    // Lower mid area (CT side) - Enhanced walls
    this.createBox(1.5, 8, 18, this.colors.lightWall, 
      { x: -7, y: 0, z: -10 });
    this.createBox(1.5, 8, 18, this.colors.lightWall, 
      { x: 7, y: 0, z: -10 });
    
    // Add some cover/debris in mid
    this.createDetailedBox(1.5, 1, 1.5, this.colors.box, 
      { x: 0, y: 0, z: 6 });
    this.createBarrel(-3, 0, 8, this.colors.greenBarrel);
  }

  createALong() {
    // A Long - Enhanced Western corridor from T spawn to A site
    
    // Long Doors building (double doors near T spawn)
    this.createBox(10, 10, 3, this.colors.darkWall, 
      { x: -22, y: 0, z: 30 });
    // Door openings - large archway
    this.createArch(7, 8, 3, this.colors.arch, 
      { x: -22, y: 0, z: 30 }, { addDetail: true, pillarWidth: 1.5 });
    
    // Long A corridor walls - more detailed
    // Outer wall
    this.createBox(2, 9, 48, this.colors.lightWall, 
      { x: -29, y: 0, z: 7 });
    // Add wall texture variation
    for (let i = 30; i > -15; i -= 8) {
      this.createBox(0.2, 9, 2, this.colors.trim, 
        { x: -30.1, y: 0, z: i });
    }
    
    // Inner wall
    this.createBox(2, 9, 48, this.colors.lightWall, 
      { x: -15, y: 0, z: 7 });
    // Windows on inner wall
    this.createBox(1.5, 2, 0.2, this.colors.window, 
      { x: -13.9, y: 5, z: 15 });
    this.createBox(1.5, 2, 0.2, this.colors.window, 
      { x: -13.9, y: 5, z: 5 });
    this.createBox(1.5, 2, 0.2, this.colors.window, 
      { x: -13.9, y: 5, z: -5 });
    
    // Pit area (sunken spot for cover) - more detailed
    const pitGeo = new THREE.BoxGeometry(6, 0.2, 6);
    const pitMat = new THREE.MeshStandardMaterial({ 
      color: this.colors.sand,
      roughness: 1
    });
    const pit = new THREE.Mesh(pitGeo, pitMat);
    pit.position.set(-22, -1.5, 5);
    pit.receiveShadow = true;
    this.scene.add(pit);
    
    // Pit edges
    this.createBox(6, 1.5, 0.2, this.colors.stone, 
      { x: -22, y: -1.5, z: 8 });
    this.createBox(6, 1.5, 0.2, this.colors.stone, 
      { x: -22, y: -1.5, z: 2 });
    this.createBox(0.2, 1.5, 6, this.colors.stone, 
      { x: -19, y: -1.5, z: 5 });
    this.createBox(0.2, 1.5, 6, this.colors.stone, 
      { x: -25, y: -1.5, z: 5 });
    
    // Blue car/container - more detailed
    this.createDetailedBox(4.5, 2.5, 2.2, this.colors.blueContainer, 
      { x: -22, y: 0, z: -2 }, { addEdges: true });
    // Car windows
    this.createBox(1.5, 0.8, 0.1, this.colors.window, 
      { x: -22, y: 2, z: -0.85 });
    this.createBox(1.5, 0.8, 0.1, this.colors.window, 
      { x: -22, y: 2, z: -3.15 });
    
    // Corner building to A site
    this.createBox(12, 10, 2, this.colors.lightWall, 
      { x: -22, y: 0, z: -15 });
    // Corner detail
    this.createBox(2, 10, 2, this.colors.darkWall, 
      { x: -27, y: 0, z: -15 });
    
    // Side alcove/cubby
    this.createBox(4, 7, 4, this.colors.lightWall, 
      { x: -25.5, y: 0, z: 10 });
    // Alcove entrance
    this.createArch(3, 5, 0.5, this.colors.arch, 
      { x: -23.5, y: 0, z: 10 });
    
    // Additional cover elements
    this.createBarrel(-26, 0, 18, this.colors.greenBarrel);
    this.createDetailedBox(1.5, 1.2, 1.5, this.colors.box, 
      { x: -20, y: 0, z: 12 });
  }

  createASite() {
    // A Site - Enhanced Western bombsite with accurate layout
    // Main platform (elevated bombsite)
    this.createBox(22, 0.8, 20, this.colors.tiles, 
      { x: -35, y: 0.5, z: -20 });
    
    // Add site markings (A designation)
    const siteMarkerGeo = new THREE.RingGeometry(2, 2.5, 8);
    const siteMarkerMat = new THREE.MeshStandardMaterial({ 
      color: '#ffff00',
      side: THREE.DoubleSide
    });
    const siteMarker = new THREE.Mesh(siteMarkerGeo, siteMarkerMat);
    siteMarker.rotation.x = -Math.PI / 2;
    siteMarker.position.set(-35, 1.31, -20);
    this.scene.add(siteMarker);
    
    // Default boxes (standard triple stack) - more detailed
    this.createDetailedBox(3, 2.5, 3, this.colors.box, 
      { x: -32, y: 1.3, z: -18 }, { addEdges: true });
    this.createDetailedBox(2.8, 2.2, 2.8, this.colors.box, 
      { x: -35, y: 1.3, z: -20 }, { addEdges: true });
    this.createDetailedBox(2.5, 1.8, 2.5, this.colors.box, 
      { x: -34, y: 3.8, z: -19 });
    
    // Triple stack (ninja spot)
    this.createDetailedBox(2.8, 3.5, 2.8, this.colors.box, 
      { x: -38, y: 1.3, z: -17 }, { addEdges: true });
    
    // Barrels cluster
    this.createBarrel(-33, 1.3, -22, this.colors.greenBarrel);
    this.createBarrel(-31, 1.3, -23, this.colors.redBarrel);
    
    // Back wall building - multi-story
    this.createBox(26, 12, 2, this.colors.darkWall, 
      { x: -35, y: 0, z: -30 });
    // Upper floor windows
    for (let i = -42; i <= -28; i += 4) {
      this.createBox(2, 2.5, 0.2, this.colors.window, 
        { x: i, y: 8, z: -28.9 });
    }
    // Wall trim
    this.createBox(26.5, 0.5, 2.5, this.colors.trim, 
      { x: -35, y: 12, z: -30 });
    
    // Side building (elevator side)
    this.createBox(2, 12, 22, this.colors.darkWall, 
      { x: -46, y: 0, z: -20 });
    // Add architectural detail
    this.createBox(0.3, 12, 22, this.colors.trim, 
      { x: -47.2, y: 0, z: -20 });
    
    // Goose corner (classic hiding spot) - more detailed
    this.createBox(4, 6, 4, this.colors.lightWall, 
      { x: -43, y: 0, z: -12 });
    // Goose entrance
    this.createArch(3, 4.5, 0.5, this.colors.arch, 
      { x: -41, y: 0, z: -12 });
    
    // Elevator area
    this.createBox(3, 8, 3, this.colors.concrete, 
      { x: -43, y: 0, z: -26 });
    // Elevator door frame
    this.createBox(2.5, 6, 0.2, this.colors.metal, 
      { x: -43, y: 0, z: -24.4 });
    
    // CT Ramp/stairs - more detailed
    for (let i = 0; i < 4; i++) {
      this.createBox(5, 0.3 * (i + 1), 2, this.colors.stone, 
        { x: -25, y: 0, z: -24 - i * 2 });
    }
    
    // Short/Catwalk entrance to A
    this.createBox(6, 0.5, 4, this.colors.sand, 
      { x: -25, y: 1.3, z: -12 });
    
    // A Main entrance from Long
    this.createArch(6, 7, 2, this.colors.arch, 
      { x: -30, y: 0, z: -15 }, { addDetail: true });
    
    // Platform boxes for cover
    this.createDetailedBox(1.5, 1, 1.5, this.colors.box, 
      { x: -40, y: 1.3, z: -22 });
    this.createDetailedBox(2, 1.5, 2, this.colors.box, 
      { x: -28, y: 1.3, z: -17 });
    
    // Site props
    this.createBarrel(-37, 1.3, -24, this.colors.greenBarrel);
    
    // Ground level details around site
    this.createBox(0.5, 0.2, 20, this.colors.stone, 
      { x: -24.5, y: 0, z: -20 });
    this.createBox(22, 0.2, 0.5, this.colors.stone, 
      { x: -35, y: 0, z: -10.5 });
  }

  createShortCatwalk() {
    // Short/Catwalk - Elevated path from mid to A site
    
    // Stairs from mid (near xbox)
    for (let i = 0; i < 5; i++) {
      this.createBox(4, 0.4 * (i + 1), 1.5, this.colors.sand, 
        { x: -8, y: 0, z: 8 - i * 1.5 });
    }
    
    // Catwalk platform
    this.createBox(8, 2, 12, this.colors.sand, 
      { x: -12, y: 0, z: -2 });
    
    // Connection to A site
    this.createBox(10, 2, 6, this.colors.sand, 
      { x: -20, y: 0, z: -8 });
    
    // Side walls
    this.createBox(0.5, 3, 12, this.colors.lightWall, 
      { x: -16, y: 2, z: -2 });
    
    // Ninja corner (hidey spot)
    this.createBox(2, 2, 2, this.colors.box, 
      { x: -18, y: 2, z: -5 });
  }

  createBTunnels() {
    // B Tunnels - Enhanced Eastern path from T spawn to B site
    
    // Upper Tunnels entrance platform
    this.createBox(12, 0.8, 10, this.colors.tiles, 
      { x: 20, y: 1.5, z: 32 });
    
    // Main tunnel structure - enclosed area
    // Left wall with windows
    this.createBox(2, 9, 28, this.colors.darkWall, 
      { x: 14, y: 0, z: 20 });
    // Window openings
    this.createBox(1, 2, 0.2, this.colors.window, 
      { x: 15.1, y: 5, z: 25 });
    this.createBox(1, 2, 0.2, this.colors.window, 
      { x: 15.1, y: 5, z: 15 });
    
    // Right wall
    this.createBox(2, 9, 28, this.colors.darkWall, 
      { x: 26, y: 0, z: 20 });
    
    // Arched ceiling/roof
    this.createBox(14, 1.5, 28, this.colors.darkWall, 
      { x: 20, y: 8, z: 20 });
    // Ceiling beams for detail
    for (let i = 32; i > 8; i -= 4) {
      this.createBox(12, 0.3, 0.5, this.colors.wood, 
        { x: 20, y: 7.8, z: i });
    }
    
    // Detailed stairs to Lower Tunnels
    for (let i = 0; i < 8; i++) {
      this.createBox(9, 0.4 * (8 - i), 1, this.colors.stone, 
        { x: 20, y: 0, z: 16 - i * 1.2 });
      // Stair edge detail
      this.createBox(9, 0.05, 0.1, this.colors.metal, 
        { x: 20, y: 0.4 * (8 - i), z: 16.5 - i * 1.2 });
    }
    
    // Lower tunnel to B - darker area
    this.createBox(2, 7, 22, this.colors.darkWall, 
      { x: 14, y: 0, z: -2 });
    this.createBox(2, 7, 22, this.colors.darkWall, 
      { x: 26, y: 0, z: -2 });
    // Lower tunnel ceiling
    this.createBox(14, 1, 22, this.colors.darkWall, 
      { x: 20, y: 7, z: -2 });
    
    // Cover boxes in tunnels - multiple spots
    this.createDetailedBox(2.8, 2, 2.8, this.colors.box, 
      { x: 20, y: 0, z: 10 }, { addEdges: true });
    this.createDetailedBox(1.5, 1.2, 1.5, this.colors.box, 
      { x: 17, y: 0, z: 5 });
    this.createDetailedBox(2, 1.5, 2, this.colors.box, 
      { x: 23, y: 0, z: 0 });
    
    // Exit to B site - large archway
    this.createArch(10, 7, 2, this.colors.arch, 
      { x: 20, y: 0, z: -12 }, { addDetail: true, pillarWidth: 2 });
    
    // Side alcove in tunnels
    this.createBox(3, 5, 3, this.colors.lightWall, 
      { x: 17, y: 0, z: 20 });
    
    // Tunnel props
    this.createBarrel(24, 0, 18, this.colors.greenBarrel);
    this.createBarrel(16, 0, 2, this.colors.redBarrel);
    
    // Pipes on ceiling (industrial detail)
    const pipeGeo = new THREE.CylinderGeometry(0.2, 0.2, 20, 6);
    const pipeMat = new THREE.MeshStandardMaterial({ 
      color: this.colors.metal,
      metalness: 0.6
    });
    const pipe1 = new THREE.Mesh(pipeGeo, pipeMat);
    pipe1.position.set(18, 6.5, 10);
    pipe1.rotation.z = Math.PI / 2;
    this.scene.add(pipe1);
    
    const pipe2 = new THREE.Mesh(pipeGeo, pipeMat);
    pipe2.position.set(22, 6.5, 10);
    pipe2.rotation.z = Math.PI / 2;
    this.scene.add(pipe2);
  }

  createBSite() {
    // B Site - Enhanced Eastern bombsite with accurate layout
    
    // Main platform - raised bombsite area
    this.createBox(20, 0.8, 20, this.colors.tiles, 
      { x: 35, y: 0.5, z: -20 });
    
    // Add site markings (B designation)
    const bMarkerGeo = new THREE.RingGeometry(2, 2.5, 8);
    const bMarkerMat = new THREE.MeshStandardMaterial({ 
      color: '#ffff00',
      side: THREE.DoubleSide
    });
    const bMarker = new THREE.Mesh(bMarkerGeo, bMarkerMat);
    bMarker.rotation.x = -Math.PI / 2;
    bMarker.position.set(35, 1.31, -20);
    this.scene.add(bMarker);
    
    // Default box - standard site box
    this.createDetailedBox(3.2, 2.5, 3.2, this.colors.box, 
      { x: 33, y: 1.3, z: -18 }, { addEdges: true });
    
    // Big Box (double stack) - main cover
    this.createDetailedBox(4, 4, 4, this.colors.box, 
      { x: 38, y: 1.3, z: -22 }, { addEdges: true, addDecals: true });
    // Second level on big box
    this.createDetailedBox(3, 2, 3, this.colors.box, 
      { x: 38, y: 5.3, z: -22 });
    
    // Car position - detailed vehicle
    this.createDetailedBox(5.5, 2.2, 2.8, this.colors.blueContainer, 
      { x: 32, y: 1.3, z: -24 }, { addEdges: true });
    // Car details
    this.createBox(2, 0.8, 0.1, this.colors.window, 
      { x: 32, y: 2.8, z: -22.55 });
    this.createBox(2, 0.8, 0.1, this.colors.window, 
      { x: 32, y: 2.8, z: -25.45 });
    // Wheels
    for (let x of [29.5, 34.5]) {
      for (let z of [-22.8, -25.2]) {
        const wheelGeo = new THREE.CylinderGeometry(0.4, 0.4, 0.3, 8);
        const wheelMat = new THREE.MeshStandardMaterial({ 
          color: '#222222',
          roughness: 0.8
        });
        const wheel = new THREE.Mesh(wheelGeo, wheelMat);
        wheel.position.set(x, 1.3, z);
        wheel.rotation.z = Math.PI / 2;
        this.scene.add(wheel);
      }
    }
    
    // Back plat (elevated platform)
    this.createBox(12, 2.5, 8, this.colors.concrete, 
      { x: 35, y: 0, z: -13 });
    // Platform stairs
    for (let i = 0; i < 3; i++) {
      this.createBox(6, 0.4 * (i + 1), 1, this.colors.stone, 
        { x: 35, y: 0, z: -9 - i });
    }
    
    // Window room - multi-level structure
    this.createBox(8, 9, 8, this.colors.lightWall, 
      { x: 26, y: 0, z: -14 });
    // Window room second floor
    this.createBox(8, 0.5, 8, this.colors.concrete, 
      { x: 26, y: 4.5, z: -14 });
    // Windows
    this.createBox(3, 2, 0.2, this.colors.window, 
      { x: 26, y: 6, z: -17.9 });
    this.createBox(3, 2, 0.2, this.colors.window, 
      { x: 26, y: 2, z: -17.9 });
    // Window room door
    this.createArch(3, 5, 0.5, this.colors.arch, 
      { x: 29.5, y: 0, z: -14 });
    
    // B Doors from CT - main entrance
    this.createArch(7, 8, 2, this.colors.arch, 
      { x: 20, y: 0, z: -25 }, { addDetail: true, pillarWidth: 1.5 });
    
    // Back wall building
    this.createBox(24, 12, 2, this.colors.darkWall, 
      { x: 35, y: 0, z: -30 });
    // Back wall details
    for (let i = 28; i <= 42; i += 4) {
      this.createBox(2, 2.5, 0.2, this.colors.window, 
        { x: i, y: 8, z: -28.9 });
    }
    this.createBox(24.5, 0.5, 2.5, this.colors.trim, 
      { x: 35, y: 12, z: -30 });
    
    // Side wall building
    this.createBox(2, 12, 22, this.colors.darkWall, 
      { x: 46, y: 0, z: -20 });
    // Side wall trim
    this.createBox(0.3, 12, 22, this.colors.trim, 
      { x: 47.2, y: 0, z: -20 });
    
    // Closet (classic hiding spot)
    this.createBox(4, 7, 4, this.colors.lightWall, 
      { x: 42, y: 0, z: -13 });
    // Closet entrance
    this.createArch(3, 5, 0.5, this.colors.arch, 
      { x: 40, y: 0, z: -13 });
    
    // Additional site cover
    this.createDetailedBox(1.8, 1.2, 1.8, this.colors.box, 
      { x: 40, y: 1.3, z: -18 });
    this.createBarrel(37, 1.3, -16, this.colors.greenBarrel);
    this.createBarrel(30, 1.3, -26, this.colors.redBarrel);
    
    // Fence/railing around parts of site
    for (let i = 26; i <= 44; i += 3) {
      this.createBox(0.1, 1.2, 0.1, this.colors.metal, 
        { x: i, y: 1.3, z: -11 });
    }
    this.createBox(18, 0.05, 0.05, this.colors.metal, 
      { x: 35, y: 2.3, z: -11 });
  }

  createPerimeterWalls() {
    // Enhanced map boundaries with Middle Eastern style
    const wallHeight = 15;
    const wallColor = this.colors.darkWall;
    
    // North boundary - with crenellations
    this.createBox(100, wallHeight, 3, wallColor, 
      { x: 0, y: 0, z: -55 });
    // Add crenellations
    for (let i = -45; i <= 45; i += 5) {
      this.createBox(3, 2, 3, wallColor, 
        { x: i, y: wallHeight, z: -55 });
    }
    
    // South boundary - with crenellations
    this.createBox(100, wallHeight, 3, wallColor, 
      { x: 0, y: 0, z: 60 });
    for (let i = -45; i <= 45; i += 5) {
      this.createBox(3, 2, 3, wallColor, 
        { x: i, y: wallHeight, z: 60 });
    }
    
    // East boundary
    this.createBox(3, wallHeight, 115, wallColor, 
      { x: 50, y: 0, z: 2.5 });
    
    // West boundary
    this.createBox(3, wallHeight, 115, wallColor, 
      { x: -50, y: 0, z: 2.5 });
    
    // Corner towers
    this.createTower(-48, 0, -53);
    this.createTower(48, 0, -53);
    this.createTower(-48, 0, 58);
    this.createTower(48, 0, 58);
    
    // Multiple antennas and details
    this.createAntenna(30, 0, 40);
    this.createAntenna(-35, 0, -45);
    this.createAntenna(40, 0, -30);
  }
  
  createTower(x, y, z) {
    // Create corner tower
    const towerBase = new THREE.CylinderGeometry(3, 4, 18, 8);
    const towerMat = new THREE.MeshStandardMaterial({ 
      color: this.colors.darkWall,
      roughness: 0.9
    });
    const tower = new THREE.Mesh(towerBase, towerMat);
    tower.position.set(x, y + 9, z);
    tower.castShadow = true;
    tower.receiveShadow = true;
    this.scene.add(tower);
    
    // Tower top
    const towerTop = new THREE.ConeGeometry(3.5, 4, 8);
    const topMat = new THREE.MeshStandardMaterial({ 
      color: this.colors.trim,
      roughness: 0.8
    });
    const top = new THREE.Mesh(towerTop, topMat);
    top.position.set(x, y + 20, z);
    top.castShadow = true;
    this.scene.add(top);
  }
  
  createAntenna(x, y, z) {
    // Radio/TV antenna
    const poleGeo = new THREE.CylinderGeometry(0.2, 0.3, 20, 6);
    const poleMat = new THREE.MeshStandardMaterial({ 
      color: this.colors.metal,
      metalness: 0.7,
      roughness: 0.3
    });
    const pole = new THREE.Mesh(poleGeo, poleMat);
    pole.position.set(x, y + 10, z);
    pole.castShadow = true;
    this.scene.add(pole);
    
    // Dish
    const dishGeo = new THREE.SphereGeometry(1.5, 8, 4, 0, Math.PI);
    const dishMat = new THREE.MeshStandardMaterial({ 
      color: '#cccccc',
      metalness: 0.5,
      roughness: 0.5
    });
    const dish = new THREE.Mesh(dishGeo, dishMat);
    dish.position.set(x, y + 18, z);
    dish.rotation.x = Math.PI / 2;
    dish.rotation.y = Math.random() * Math.PI * 2;
    this.scene.add(dish);
  }
  
  createBarrel(x, y, z, color) {
    const barrelGeo = new THREE.CylinderGeometry(0.8, 0.8, 2, 8);
    const barrelMat = new THREE.MeshStandardMaterial({ 
      color: color,
      roughness: 0.7,
      metalness: 0.2
    });
    const barrel = new THREE.Mesh(barrelGeo, barrelMat);
    barrel.position.set(x, y + 1, z);
    barrel.castShadow = true;
    barrel.receiveShadow = true;
    this.scene.add(barrel);
    
    // Barrel rings
    const ringGeo = new THREE.TorusGeometry(0.85, 0.05, 4, 12);
    const ringMat = new THREE.MeshStandardMaterial({ 
      color: this.colors.metal,
      metalness: 0.8
    });
    const topRing = new THREE.Mesh(ringGeo, ringMat);
    topRing.position.set(x, y + 1.8, z);
    topRing.rotation.x = Math.PI / 2;
    this.scene.add(topRing);
    
    const bottomRing = new THREE.Mesh(ringGeo, ringMat);
    bottomRing.position.set(x, y + 0.2, z);
    bottomRing.rotation.x = Math.PI / 2;
    this.scene.add(bottomRing);
  }
  
  createPalmTree(x, y, z) {
    // Simple palm tree
    const trunkGeo = new THREE.CylinderGeometry(0.3, 0.4, 6, 6);
    const trunkMat = new THREE.MeshStandardMaterial({ 
      color: '#8B4513',
      roughness: 0.9
    });
    const trunk = new THREE.Mesh(trunkGeo, trunkMat);
    trunk.position.set(x, y + 3, z);
    trunk.castShadow = true;
    this.scene.add(trunk);
    
    // Palm leaves (simplified)
    const leafGeo = new THREE.ConeGeometry(2, 3, 6);
    const leafMat = new THREE.MeshStandardMaterial({ 
      color: '#228B22',
      roughness: 0.8
    });
    const leaves = new THREE.Mesh(leafGeo, leafMat);
    leaves.position.set(x, y + 7, z);
    leaves.castShadow = true;
    this.scene.add(leaves);
  }
  
  addEnvironmentalDetails() {
    // Add various environmental details
    
    // Trash/debris
    for (let i = 0; i < 10; i++) {
      const debrisGeo = new THREE.BoxGeometry(
        0.3 + Math.random() * 0.3,
        0.1 + Math.random() * 0.2,
        0.3 + Math.random() * 0.3
      );
      const debrisMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0.3, 0.3, 0.3).multiplyScalar(0.5 + Math.random() * 0.5),
        roughness: 1
      });
      const debris = new THREE.Mesh(debrisGeo, debrisMat);
      debris.position.set(
        (Math.random() - 0.5) * 80,
        0.05,
        (Math.random() - 0.5) * 80
      );
      debris.rotation.y = Math.random() * Math.PI * 2;
      debris.receiveShadow = true;
      this.scene.add(debris);
    }
    
    // Power lines (simplified)
    const lineGeo = new THREE.CylinderGeometry(0.02, 0.02, 30, 4);
    const lineMat = new THREE.MeshStandardMaterial({ 
      color: '#333333',
      metalness: 0.5
    });
    const powerLine = new THREE.Mesh(lineGeo, lineMat);
    powerLine.position.set(0, 12, 25);
    powerLine.rotation.z = Math.PI / 2;
    this.scene.add(powerLine);
    
    // Add more palm trees
    this.createPalmTree(-30, 0, 20);
    this.createPalmTree(35, 0, -15);
    this.createPalmTree(-40, 0, -35);
  }
  
  addLighting() {
    // Add point lights for indoor areas
    const tunnelLight = new THREE.PointLight('#ffcc88', 0.5, 15);
    tunnelLight.position.set(20, 5, 10);
    this.scene.add(tunnelLight);
    
    const ctLight = new THREE.PointLight('#ffcc88', 0.5, 20);
    ctLight.position.set(0, 8, -40);
    this.scene.add(ctLight);
    
    const tLight = new THREE.PointLight('#ffcc88', 0.5, 20);
    tLight.position.set(0, 8, 45);
    this.scene.add(tLight);
  }
}