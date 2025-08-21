import * as THREE from 'three';
import { MapLoader } from './mapLoader.js';
import { WeaponSystem } from './weaponSystem.js';
import { BulletSystem } from './bulletSystem.js';
import { Crosshair } from './crosshair.js';
import { HUD } from './hud.js';
import { SimpleMultiplayer } from './src/simple-multiplayer.js';

class Game {
  constructor() {
    // Settings
    this.settings = {
      leftHanded: false, // Can be toggled to switch arm visibility
      debugCollisions: false // Toggle with 'G' to see collision bounds
    };
    
    // Multiplayer
    this.multiplayer = null;
    this.remotePlayers = new Map();
    
    // Player properties
    this.player = {
      health: 100,
      position: null, // Will be set to character position
      currentWeapon: 'pistol',
      isDead: false,
      kills: 0,
      deaths: 0
    };
    
    // Movement variables
    this.moveSpeed = 5; // Units per second
    this.sprintMultiplier = 2;
    this.crouchMultiplier = 0.4; // Slower when crouching
    this.jumpHeight = 4;
    this.gravity = -15;
    this.velocity = new THREE.Vector3();
    this.isOnGround = true;
    this.canJump = true;
    
    // Crouch variables
    this.standHeight = 2.4; // Normal head height
    this.crouchHeight = 1.2; // Crouched head height
    this.currentHeight = this.standHeight;
    this.isCrouching = false;
    this.crouchSpeed = 8; // Speed of crouch transition
    
    // Input states
    this.keys = {
      forward: false,
      backward: false,
      left: false,
      right: false,
      jump: false,
      sprint: false,
      crouch: false
    };
    
    this.init();
    this.createScene();
    this.createLights();
    this.createMap();
    this.createCharacter();
    this.setupWeaponSystem();
    this.setupFirstPersonControls();
    this.setupMovementControls();
    this.handleResize();
    this.animate();
  }

  init() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color('#1a1a2e');
    this.scene.fog = new THREE.Fog('#1a1a2e', 10, 50);

    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    // Camera will be positioned in first-person view

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    document.body.appendChild(this.renderer.domElement);

    this.clock = new THREE.Clock();
  }

  createScene() {
    // Sky color - more desert-like for Dust 2
    this.scene.background = new THREE.Color('#87CEEB');
    this.scene.fog = new THREE.Fog('#87CEEB', 50, 200);
  }
  
  createMap() {
    // Create map loader and load a map
    this.mapLoader = new MapLoader(this.scene);
    
    // Load simple_arena map (or change to 'krunker_style')
    const spawnPos = this.mapLoader.loadMap('simple_arena');
    
    // Update player spawn position from map data
    if (spawnPos && this.character) {
      this.character.position.set(...spawnPos);
    }
  }

  createLights() {
    // Bright desert sunlight
    const ambientLight = new THREE.AmbientLight('#ffeecc', 0.7);
    this.scene.add(ambientLight);

    // Strong directional sun
    const directionalLight = new THREE.DirectionalLight('#ffddaa', 1.0);
    directionalLight.position.set(50, 100, 30);
    directionalLight.castShadow = true;
    directionalLight.shadow.camera.left = -100;
    directionalLight.shadow.camera.right = 100;
    directionalLight.shadow.camera.top = 100;
    directionalLight.shadow.camera.bottom = -100;
    directionalLight.shadow.camera.near = 0.1;
    directionalLight.shadow.camera.far = 300;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    this.scene.add(directionalLight);

    // Subtle fill light
    const fillLight = new THREE.DirectionalLight('#aaccff', 0.3);
    fillLight.position.set(-30, 50, -20);
    this.scene.add(fillLight);
  }

  createCharacter() {
    // Create character group
    this.character = new THREE.Group();
    
    // Link player position reference
    this.player.position = this.character.position;
    
    // Create view model group (arms that follow camera)
    this.viewModel = new THREE.Group();
    
    // Materials for different body parts
    const skinMaterial = new THREE.MeshStandardMaterial({
      color: '#fdbcb4',
      roughness: 0.7,
      metalness: 0.0
    });
    
    const shirtMaterial = new THREE.MeshStandardMaterial({
      color: '#4169e1',
      roughness: 0.8,
      metalness: 0.0
    });
    
    const pantsMaterial = new THREE.MeshStandardMaterial({
      color: '#1f1f1f',
      roughness: 0.8,
      metalness: 0.0
    });
    
    // Head (cube) - Hidden in first-person view
    const headGeometry = new THREE.BoxGeometry(0.8, 0.8, 0.8);
    const head = new THREE.Mesh(headGeometry, skinMaterial);
    head.position.y = 2.4;
    head.castShadow = true;
    head.receiveShadow = true;
    head.visible = false; // Hide head in first-person
    this.character.add(head);
    
    // Store head reference for camera positioning
    this.characterHead = head;
    
    // Body (rectangular box)
    const bodyGeometry = new THREE.BoxGeometry(1.0, 1.2, 0.6);
    const body = new THREE.Mesh(bodyGeometry, shirtMaterial);
    body.position.y = 1.4;
    body.castShadow = true;
    body.receiveShadow = true;
    this.character.add(body);
    
    // Left Arm - Hidden in first-person
    const armGeometry = new THREE.BoxGeometry(0.3, 1.0, 0.3);
    const leftArm = new THREE.Mesh(armGeometry, skinMaterial);
    leftArm.position.set(-0.75, 1.4, 0);
    leftArm.castShadow = true;
    leftArm.visible = false; // Hide in first-person
    this.character.add(leftArm);
    
    // Right Arm - Hidden in first-person
    const rightArm = new THREE.Mesh(armGeometry, skinMaterial);
    rightArm.position.set(0.75, 1.4, 0);
    rightArm.castShadow = true;
    rightArm.visible = false; // Hide in first-person
    this.character.add(rightArm);
    
    // Left Leg
    const legGeometry = new THREE.BoxGeometry(0.4, 1.0, 0.4);
    const leftLeg = new THREE.Mesh(legGeometry, pantsMaterial);
    leftLeg.position.set(-0.25, 0.3, 0);
    leftLeg.castShadow = true;
    this.character.add(leftLeg);
    
    // Right Leg
    const rightLeg = new THREE.Mesh(legGeometry, pantsMaterial);
    rightLeg.position.set(0.25, 0.3, 0);
    rightLeg.castShadow = true;
    this.character.add(rightLeg);
    
    // Position character at spawn (away from obstacles)
    this.character.position.set(8, 1, 5);
    
    // Add character to scene
    this.scene.add(this.character);
    
    // Create first-person view model arms (visible to player) - Krunker style minimal
    // Use cylinders for cleaner look
    const viewArmGeometry = new THREE.CylinderGeometry(0.03, 0.035, 0.15, 8);
    const handGeometry = new THREE.BoxGeometry(0.06, 0.08, 0.05);
    const sleeveGeometry = new THREE.CylinderGeometry(0.035, 0.04, 0.08, 8);
    
    if (!this.settings.leftHanded) {
      // Right-handed configuration (default) - Krunker style
      // Minimal forearm coming from bottom-right
      const rightViewArm = new THREE.Mesh(viewArmGeometry, skinMaterial);
      rightViewArm.position.set(0.25, -0.45, -0.4);
      rightViewArm.rotation.x = 0.1;
      rightViewArm.rotation.z = 0.15;
      this.viewModel.add(rightViewArm);
      
      // Right hand - just the grip
      const rightHand = new THREE.Mesh(handGeometry, skinMaterial);
      rightHand.position.set(0.23, -0.38, -0.45);
      rightHand.rotation.x = -0.1;
      this.viewModel.add(rightHand);
      
      // Minimal sleeve at wrist
      const rightSleeve = new THREE.Mesh(sleeveGeometry, shirtMaterial);
      rightSleeve.position.set(0.25, -0.48, -0.38);
      rightSleeve.rotation.x = 0.1;
      rightSleeve.rotation.z = 0.15;
      this.viewModel.add(rightSleeve);
      
      // Left support arm (for rifles only) - minimal
      const leftSupportArm = new THREE.Mesh(viewArmGeometry, skinMaterial);
      leftSupportArm.position.set(0.05, -0.42, -0.48);
      leftSupportArm.rotation.x = 0.3;
      leftSupportArm.rotation.z = -0.1;
      leftSupportArm.visible = false; // Hide by default, show for rifles
      this.viewModel.add(leftSupportArm);
      this.leftSupportArm = leftSupportArm;
      
      // Left support hand - for rifle front grip
      const leftSupportHand = new THREE.Mesh(handGeometry, skinMaterial);
      leftSupportHand.position.set(0.05, -0.38, -0.55);
      leftSupportHand.rotation.x = -0.1;
      leftSupportHand.visible = false; // Hide by default
      this.viewModel.add(leftSupportHand);
      this.leftSupportHand = leftSupportHand;
    } else {
      // Left-handed configuration (can be enabled in settings)
      // Left arm (holding weapon position - mirrored)
      const leftViewArm = new THREE.Mesh(viewArmGeometry, skinMaterial);
      leftViewArm.position.set(-0.25, -0.4, -0.6);
      leftViewArm.rotation.x = -0.2;
      leftViewArm.rotation.z = 0.05;
      this.viewModel.add(leftViewArm);
      
      // Left hand
      const leftHand = new THREE.Mesh(handGeometry, skinMaterial);
      leftHand.position.set(-0.2, -0.45, -0.85);
      leftHand.rotation.x = -0.1;
      this.viewModel.add(leftHand);
      
      // Left sleeve
      const leftSleeve = new THREE.Mesh(sleeveGeometry, shirtMaterial);
      leftSleeve.position.set(-0.25, -0.25, -0.5);
      leftSleeve.rotation.x = -0.2;
      leftSleeve.rotation.z = 0.05;
      this.viewModel.add(leftSleeve);
      
      // Right support arm
      const rightSupportArm = new THREE.Mesh(viewArmGeometry, skinMaterial);
      rightSupportArm.position.set(0.15, -0.35, -0.7);
      rightSupportArm.rotation.x = -0.1;
      rightSupportArm.rotation.z = -0.3;
      rightSupportArm.rotation.y = -0.2;
      this.viewModel.add(rightSupportArm);
      
      // Right support hand
      const rightSupportHand = new THREE.Mesh(handGeometry, skinMaterial);
      rightSupportHand.position.set(0.1, -0.4, -0.9);
      rightSupportHand.rotation.x = -0.1;
      rightSupportHand.rotation.y = -0.2;
      this.viewModel.add(rightSupportHand);
    }
    
    // View model is added to the scene and will follow the camera
    this.scene.add(this.viewModel);
    
    // Create weapon mount point
    this.weaponMount = new THREE.Group();
    this.viewModel.add(this.weaponMount);
  }

  setupWeaponSystem() {
    // Initialize weapon system
    this.weaponSystem = new WeaponSystem(this.scene, this.weaponMount, this.camera);
    this.bulletSystem = new BulletSystem(this.scene, this.camera);
    this.crosshair = new Crosshair();
    this.hud = new HUD();
    
    // Set initial crosshair and HUD for default weapon
    this.crosshair.setWeapon('pistol');
    this.hud.updateWeapon('Pistol');
    
    // Set initial health
    this.playerHealth = 100;
    this.hud.updateHealth(this.playerHealth);
  }
  
  setupFirstPersonControls() {
    // Mouse look variables
    this.mouseX = 0;
    this.mouseY = 0;
    this.targetRotationX = 0;
    this.targetRotationY = 0;
    this.rotationSpeed = 0.002;
    this.verticalRotationLimit = Math.PI / 3; // Limit looking up/down to 60 degrees
    
    // Lock pointer on click and handle shooting
    this.renderer.domElement.addEventListener('click', () => {
      if (document.pointerLockElement !== this.renderer.domElement) {
        this.renderer.domElement.requestPointerLock();
      }
    });
    
    // Mouse controls for shooting
    this.renderer.domElement.addEventListener('mousedown', (event) => {
      if (document.pointerLockElement === this.renderer.domElement) {
        if (event.button === 0) { // Left click
          this.handleShooting();
          this.weaponSystem.startShooting();
        } else if (event.button === 2) { // Right click
          // Reserved for aim down sights in future
        }
      }
    });
    
    this.renderer.domElement.addEventListener('mouseup', (event) => {
      if (event.button === 0) {
        this.weaponSystem.stopShooting();
      }
    });
    
    // Prevent context menu on right click
    this.renderer.domElement.addEventListener('contextmenu', (e) => e.preventDefault());
    
    // Mouse movement handler
    document.addEventListener('mousemove', (event) => {
      if (document.pointerLockElement === this.renderer.domElement) {
        this.mouseX += event.movementX;
        this.mouseY += event.movementY;
        
        // Calculate target rotations
        this.targetRotationX = -this.mouseX * this.rotationSpeed;
        this.targetRotationY = Math.max(
          -this.verticalRotationLimit,
          Math.min(this.verticalRotationLimit, -this.mouseY * this.rotationSpeed)
        );
      }
    });
    
    // Keyboard controls
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        document.exitPointerLock();
      }
      // Press 'H' to toggle hand preference (for testing)
      if (event.key === 'h' || event.key === 'H') {
        this.toggleHandPreference();
      }
      // Press 'G' to toggle collision debug
      if (event.key === 'g' || event.key === 'G') {
        this.settings.debugCollisions = !this.settings.debugCollisions;
        this.updateDebugVisuals();
        console.log(`Collision debug: ${this.settings.debugCollisions ? 'ON' : 'OFF'}`);
      }
      // Weapon switching
      if (event.key === '1') {
        if (this.weaponSystem.switchWeapon('pistol')) {
          this.crosshair.setWeapon('pistol');
          this.hud.updateWeapon('Pistol');
          // Hide left hand for pistol
          if (this.leftSupportArm) this.leftSupportArm.visible = false;
          if (this.leftSupportHand) this.leftSupportHand.visible = false;
        }
      }
      if (event.key === '2') {
        if (this.weaponSystem.switchWeapon('ak47')) {
          this.crosshair.setWeapon('ak47');
          this.hud.updateWeapon('AK-47');
          // Show left hand for rifle
          if (this.leftSupportArm) this.leftSupportArm.visible = true;
          if (this.leftSupportHand) this.leftSupportHand.visible = true;
        }
      }
      if (event.key === '3') {
        if (this.weaponSystem.switchWeapon('knife')) {
          this.crosshair.setWeapon('knife');
          this.hud.updateWeapon('Knife');
          // Hide left hand for knife
          if (this.leftSupportArm) this.leftSupportArm.visible = false;
          if (this.leftSupportHand) this.leftSupportHand.visible = false;
        }
      }
      // Reload
      if (event.key === 'r' || event.key === 'R') {
        this.weaponSystem.reload();
      }
    });
  }
  
  toggleHandPreference() {
    this.settings.leftHanded = !this.settings.leftHanded;
    
    // Clear existing view model
    while(this.viewModel.children.length > 0) {
      this.viewModel.remove(this.viewModel.children[0]);
    }
    
    // Recreate arms with new preference
    const skinMaterial = new THREE.MeshStandardMaterial({
      color: '#fdbcb4',
      roughness: 0.7,
      metalness: 0.0
    });
    
    const shirtMaterial = new THREE.MeshStandardMaterial({
      color: '#4169e1',
      roughness: 0.8,
      metalness: 0.0
    });
    
    const viewArmGeometry = new THREE.CylinderGeometry(0.03, 0.035, 0.15, 8);
    const handGeometry = new THREE.BoxGeometry(0.06, 0.08, 0.05);
    const sleeveGeometry = new THREE.CylinderGeometry(0.035, 0.04, 0.08, 8);
    
    if (!this.settings.leftHanded) {
      // Krunker style minimal arms
      const rightViewArm = new THREE.Mesh(viewArmGeometry, skinMaterial);
      rightViewArm.position.set(0.25, -0.45, -0.4);
      rightViewArm.rotation.x = 0.1;
      rightViewArm.rotation.z = 0.15;
      this.viewModel.add(rightViewArm);
      
      const rightHand = new THREE.Mesh(handGeometry, skinMaterial);
      rightHand.position.set(0.23, -0.38, -0.45);
      rightHand.rotation.x = -0.1;
      this.viewModel.add(rightHand);
      
      const rightSleeve = new THREE.Mesh(sleeveGeometry, shirtMaterial);
      rightSleeve.position.set(0.25, -0.48, -0.38);
      rightSleeve.rotation.x = 0.1;
      rightSleeve.rotation.z = 0.15;
      this.viewModel.add(rightSleeve);
      
      // Left support (for rifles)
      const leftSupportArm = new THREE.Mesh(viewArmGeometry, skinMaterial);
      leftSupportArm.position.set(0.05, -0.42, -0.48);
      leftSupportArm.rotation.x = 0.3;
      leftSupportArm.rotation.z = -0.1;
      leftSupportArm.visible = false;
      this.viewModel.add(leftSupportArm);
      this.leftSupportArm = leftSupportArm;
      
      const leftSupportHand = new THREE.Mesh(handGeometry, skinMaterial);
      leftSupportHand.position.set(0.05, -0.38, -0.55);
      leftSupportHand.rotation.x = -0.1;
      leftSupportHand.visible = false;
      this.viewModel.add(leftSupportHand);
      this.leftSupportHand = leftSupportHand;
    } else {
      // Left arm (holding weapon)
      const leftViewArm = new THREE.Mesh(viewArmGeometry, skinMaterial);
      leftViewArm.position.set(-0.25, -0.4, -0.6);
      leftViewArm.rotation.x = -0.2;
      leftViewArm.rotation.z = 0.05;
      this.viewModel.add(leftViewArm);
      
      const leftHand = new THREE.Mesh(handGeometry, skinMaterial);
      leftHand.position.set(-0.2, -0.45, -0.85);
      leftHand.rotation.x = -0.1;
      this.viewModel.add(leftHand);
      
      const leftSleeve = new THREE.Mesh(sleeveGeometry, shirtMaterial);
      leftSleeve.position.set(-0.25, -0.25, -0.5);
      leftSleeve.rotation.x = -0.2;
      leftSleeve.rotation.z = 0.05;
      this.viewModel.add(leftSleeve);
      
      // Right support arm
      const rightSupportArm = new THREE.Mesh(viewArmGeometry, skinMaterial);
      rightSupportArm.position.set(0.15, -0.35, -0.7);
      rightSupportArm.rotation.x = -0.1;
      rightSupportArm.rotation.z = -0.3;
      rightSupportArm.rotation.y = -0.2;
      this.viewModel.add(rightSupportArm);
      
      const rightSupportHand = new THREE.Mesh(handGeometry, skinMaterial);
      rightSupportHand.position.set(0.1, -0.4, -0.9);
      rightSupportHand.rotation.x = -0.1;
      rightSupportHand.rotation.y = -0.2;
      this.viewModel.add(rightSupportHand);
    }
    
    console.log(`Switched to ${this.settings.leftHanded ? 'left' : 'right'}-handed mode`);
  }
  
  updateDebugVisuals() {
    // Remove old debug visuals if they exist
    if (this.debugCollider) {
      this.scene.remove(this.debugCollider);
      this.debugCollider = null;
    }
    if (this.debugObjects) {
      this.debugObjects.forEach(obj => this.scene.remove(obj));
      this.debugObjects = [];
    }
    
    // Add debug collision cylinder if enabled
    if (this.settings.debugCollisions) {
      // Player collision cylinder
      const playerHeight = this.isCrouching ? 1.2 : 2.4;
      const geometry = new THREE.CylinderGeometry(0.5, 0.5, playerHeight, 16);
      const material = new THREE.MeshBasicMaterial({ 
        color: 0x00ff00, 
        wireframe: true,
        opacity: 0.7,
        transparent: true
      });
      this.debugCollider = new THREE.Mesh(geometry, material);
      this.scene.add(this.debugCollider);
      
      // Debug collision boxes for map objects
      this.debugObjects = [];
      const colliders = this.mapLoader?.getColliders() || [];
      
      colliders.forEach(collider => {
        let debugMesh;
        const debugMat = new THREE.MeshBasicMaterial({ 
          color: 0xff0000, 
          wireframe: true,
          opacity: 0.3,
          transparent: true
        });
        
        if (collider.type === 'box') {
          const [w, h, d] = collider.size;
          debugMesh = new THREE.Mesh(
            new THREE.BoxGeometry(w, h, d),
            debugMat
          );
          debugMesh.position.set(...collider.position);
        } else if (collider.type === 'cylinder') {
          const [r, h] = collider.size;
          debugMesh = new THREE.Mesh(
            new THREE.CylinderGeometry(r, r, h, 16),
            debugMat
          );
          debugMesh.position.set(...collider.position);
        } else if (collider.type === 'sphere') {
          const [r] = collider.size;
          debugMesh = new THREE.Mesh(
            new THREE.SphereGeometry(r, 16, 16),
            debugMat
          );
          debugMesh.position.set(...collider.position);
        }
        
        if (debugMesh) {
          this.debugObjects.push(debugMesh);
          this.scene.add(debugMesh);
        }
      });
    }
  }

  setupMovementControls() {
    // Keyboard input handlers
    document.addEventListener('keydown', (event) => {
      switch(event.code) {
        case 'KeyW':
        case 'ArrowUp':
          this.keys.forward = true;
          break;
        case 'KeyS':
        case 'ArrowDown':
          this.keys.backward = true;
          break;
        case 'KeyA':
        case 'ArrowLeft':
          this.keys.left = true;
          break;
        case 'KeyD':
        case 'ArrowRight':
          this.keys.right = true;
          break;
        case 'Space':
          if (this.canJump && this.isOnGround) {
            this.keys.jump = true;
          }
          event.preventDefault();
          break;
        case 'ShiftLeft':
        case 'ShiftRight':
          this.keys.sprint = true;
          break;
        case 'KeyC':
          this.keys.crouch = true;
          break;
      }
    });
    
    document.addEventListener('keyup', (event) => {
      switch(event.code) {
        case 'KeyW':
        case 'ArrowUp':
          this.keys.forward = false;
          break;
        case 'KeyS':
        case 'ArrowDown':
          this.keys.backward = false;
          break;
        case 'KeyA':
        case 'ArrowLeft':
          this.keys.left = false;
          break;
        case 'KeyD':
        case 'ArrowRight':
          this.keys.right = false;
          break;
        case 'Space':
          this.keys.jump = false;
          break;
        case 'ShiftLeft':
        case 'ShiftRight':
          this.keys.sprint = false;
          break;
        case 'KeyC':
          this.keys.crouch = false;
          break;
      }
    });
  }

  handleResize() {
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    const deltaTime = this.clock.getDelta();
    const elapsedTime = this.clock.getElapsedTime();

    // Update movement
    this.updateMovement(deltaTime);

    // Update character and camera
    if (this.character) {
      // Subtle breathing effect
      const breathOffset = Math.sin(elapsedTime * 2) * 0.02;
      
      // Apply mouse look rotation to character (horizontal)
      this.character.rotation.y = this.targetRotationX;
      
      // Position camera at character's head position with slight forward offset
      const headWorldPos = new THREE.Vector3();
      this.characterHead.getWorldPosition(headWorldPos);
      this.camera.position.copy(headWorldPos);
      this.camera.position.y += breathOffset;
      
      // Add slight forward offset to camera to reduce seeing player body
      const forward = new THREE.Vector3(0, 0, -0.15);
      forward.applyQuaternion(this.character.quaternion);
      this.camera.position.add(forward);
      
      // Apply rotations to camera
      this.camera.rotation.y = this.targetRotationX;
      this.camera.rotation.x = this.targetRotationY;
      this.camera.rotation.order = 'YXZ'; // Prevent gimbal lock
      
      // Hide character body parts when looking down to avoid seeing blob
      const lookingDown = this.targetRotationY > 0.8; // Increased threshold - only hide when looking very far down
      
      // Only hide body when looking extremely far down
      this.character.children.forEach(child => {
        // Always keep head hidden in first-person
        if (child === this.characterHead) {
          child.visible = false;
          return;
        }
        
        // Hide body only when looking very far down
        const isBody = Math.abs(child.position.y - 1.4) < 0.1; // Body is at y=1.4
        if (isBody && lookingDown) {
          child.visible = false;
        } else if (isBody) {
          child.visible = true;
        }
        
        // Legs always visible unless we add proper leg culling
        const isLeg = child.position.y < 1;
        if (isLeg) {
          child.visible = true;
        }
      });
      
      // Update debug collider position if enabled
      if (this.debugCollider) {
        const playerHeight = this.isCrouching ? 1.2 : 2.4;
        this.debugCollider.position.copy(this.character.position);
        this.debugCollider.position.y += playerHeight / 2; // Center the cylinder on character
        
        // Update cylinder height for crouch
        if (this.isCrouching && this.debugCollider.geometry.parameters.height !== 1.2) {
          this.debugCollider.geometry.dispose();
          this.debugCollider.geometry = new THREE.CylinderGeometry(0.5, 0.5, 1.2, 16);
        } else if (!this.isCrouching && this.debugCollider.geometry.parameters.height !== 2.4) {
          this.debugCollider.geometry.dispose();
          this.debugCollider.geometry = new THREE.CylinderGeometry(0.5, 0.5, 2.4, 16);
        }
      }
    }
    
    // Update view model arms to follow camera
    if (this.viewModel) {
      // Position view model at camera position
      this.viewModel.position.copy(this.camera.position);
      
      // Apply camera rotation to view model
      this.viewModel.rotation.y = this.targetRotationX;
      this.viewModel.rotation.x = this.targetRotationY;
      this.viewModel.rotation.order = 'YXZ';
      
      // Add subtle idle animation to arms
      const idleSwayX = Math.sin(elapsedTime * 1.5) * 0.005;
      const idleSwayY = Math.sin(elapsedTime * 2) * 0.003;
      
      // Adjust arm position when crouching
      if (this.isCrouching) {
        this.viewModel.position.y -= 0.15; // Lower arms slightly when crouching
        this.viewModel.position.z += 0.05; // Pull arms slightly closer
      }
      
      this.viewModel.position.x += idleSwayX;
      this.viewModel.position.y += idleSwayY;
      
      // Update weapon system
      if (this.weaponSystem) {
        const isMoving = this.keys.forward || this.keys.backward || this.keys.left || this.keys.right;
        this.weaponSystem.update(deltaTime, isMoving, this.keys.sprint);
        
        // Add weapon sway from movement
        if (isMoving) {
          const swayAmount = this.keys.sprint ? 0.01 : 0.005;
          this.weaponSystem.addSway(swayAmount, elapsedTime);
        }
      }
      
      // Update bullet system
      if (this.bulletSystem) {
        this.bulletSystem.update(deltaTime);
      }
      
      // Update crosshair spread
      if (this.crosshair) {
        const isMoving = this.keys.forward || this.keys.backward || this.keys.left || this.keys.right;
        const isShooting = this.weaponSystem && this.weaponSystem.isAutoFiring;
        const isReloading = this.weaponSystem && this.weaponSystem.isReloading();
        this.crosshair.updateSpread(isMoving, isShooting, isReloading);
      }
      
      // Update HUD
      if (this.hud && this.weaponSystem) {
        const ammoInfo = this.weaponSystem.getAmmoInfo();
        this.hud.updateAmmo(ammoInfo.current, ammoInfo.reserve);
        this.hud.showReloading(this.weaponSystem.isReloading());
      }
      
      // Hide/fade arms when looking too far down or up
      const lookAngle = this.targetRotationY;
      if (lookAngle > 0.8 || lookAngle < -0.8) {
        // Hide arms when looking too far down or up
        this.viewModel.visible = false;
      } else {
        this.viewModel.visible = true;
      }
    }
    
    // Send position updates to server
    if (this.multiplayer && this.multiplayer.connected && this.multiplayer.roomId) {
      // Send position every few frames to reduce network traffic
      if (!this.lastNetworkUpdate || Date.now() - this.lastNetworkUpdate > 50) {
        this.multiplayer.sendMovement(
          this.character.position,
          { x: this.targetRotationY, y: this.targetRotationX }
        );
        this.lastNetworkUpdate = Date.now();
      }
      
      // Update remote players
      this.multiplayer.updatePlayers(deltaTime);
    }

    this.renderer.render(this.scene, this.camera);
  }
  
  updateMovement(deltaTime) {
    if (!this.character) return;
    
    // Don't move if dead
    if (this.player.isDead) return;
    
    // Handle crouching
    if (this.keys.crouch && this.isOnGround) {
      this.isCrouching = true;
    } else {
      this.isCrouching = false;
    }
    
    // Smooth crouch transition
    const targetHeight = this.isCrouching ? this.crouchHeight : this.standHeight;
    this.currentHeight += (targetHeight - this.currentHeight) * this.crouchSpeed * deltaTime;
    
    // Update character head position for crouch
    if (this.characterHead) {
      this.characterHead.position.y = this.currentHeight;
    }
    
    // Calculate movement direction based on camera rotation
    const moveVector = new THREE.Vector3();
    const forward = new THREE.Vector3(0, 0, -1);
    const right = new THREE.Vector3(1, 0, 0);
    
    // Apply camera rotation to movement vectors
    forward.applyQuaternion(this.camera.quaternion);
    forward.y = 0; // Keep movement horizontal
    forward.normalize();
    
    right.applyQuaternion(this.camera.quaternion);
    right.y = 0; // Keep movement horizontal
    right.normalize();
    
    // Calculate movement based on input
    if (this.keys.forward) {
      moveVector.add(forward);
    }
    if (this.keys.backward) {
      moveVector.sub(forward);
    }
    if (this.keys.left) {
      moveVector.sub(right);
    }
    if (this.keys.right) {
      moveVector.add(right);
    }
    
    // Normalize diagonal movement
    if (moveVector.length() > 0) {
      moveVector.normalize();
      
      // Apply speed (with modifiers)
      let currentSpeed = this.moveSpeed;
      
      // Can't sprint while crouching
      if (this.isCrouching) {
        currentSpeed *= this.crouchMultiplier;
      } else if (this.keys.sprint) {
        currentSpeed *= this.sprintMultiplier;
      }
      
      moveVector.multiplyScalar(currentSpeed * deltaTime);
      
      // Store old position for collision rollback
      const oldPosition = this.character.position.clone();
      
      // Improved collision resolution with push-back
      const resolution = this.moveWithCollision(moveVector);
      
      // Apply the resolved movement
      this.character.position.add(resolution);
    }
    
    // Handle jumping (can't jump while crouching)
    if (this.keys.jump && this.isOnGround && !this.isCrouching) {
      this.velocity.y = this.jumpHeight;
      this.isOnGround = false;
      this.canJump = false;
      this.keys.jump = false; // Reset jump key
    }
    
    // Apply gravity
    if (!this.isOnGround) {
      this.velocity.y += this.gravity * deltaTime;
    }
    
    // Apply vertical velocity
    this.character.position.y += this.velocity.y * deltaTime;
    
    // Simple ground collision - everything is at ground level except stairs
    let groundLevel = 0;
    
    // Check stairs for gradual height changes
    groundLevel = this.getStairHeight(this.character.position.x, this.character.position.z);
    
    if (this.character.position.y <= groundLevel) {
      this.character.position.y = groundLevel;
      this.velocity.y = 0;
      this.isOnGround = true;
      this.canJump = true;
    } else {
      this.isOnGround = false;
    }
  }
  
  getStairHeight(x, z) {
    // Get colliders from map
    if (!this.mapLoader) return 0;
    const colliders = this.mapLoader.getColliders();
    
    let maxHeight = 0;
    const playerRadius = 0.5; // Match the collision radius
    const stepHeight = 0.5; // Maximum step height player can climb
    
    // Check if we're on top of any objects
    for (const collider of colliders) {
      if (collider.type === 'box') {
        const [width, height, depth] = collider.size;
        const [objX, objY, objZ] = collider.position;
        
        // More precise box top detection
        const boxLeft = objX - width/2;
        const boxRight = objX + width/2;
        const boxFront = objZ - depth/2;
        const boxBack = objZ + depth/2;
        const boxTop = objY + height/2;
        
        // Check if player overlaps with box horizontally
        if (x >= boxLeft - playerRadius && x <= boxRight + playerRadius &&
            z >= boxFront - playerRadius && z <= boxBack + playerRadius) {
          
          // Only consider as ground if it's within step height
          if (boxTop > maxHeight && boxTop <= this.character.position.y + stepHeight) {
            maxHeight = boxTop;
          }
        }
      } else if (collider.type === 'cylinder') {
        const [radius, height] = collider.size;
        const [objX, objY, objZ] = collider.position;
        
        // Check if we're above this cylinder
        const dist = Math.sqrt((x - objX) * (x - objX) + (z - objZ) * (z - objZ));
        if (dist < radius + playerRadius) {
          const topHeight = objY + height/2;
          if (topHeight > maxHeight && topHeight <= this.character.position.y + stepHeight) {
            maxHeight = topHeight;
          }
        }
      } else if (collider.type === 'sphere') {
        const [radius] = collider.size;
        const [objX, objY, objZ] = collider.position;
        
        // Check if we're above this sphere
        const dist = Math.sqrt((x - objX) * (x - objX) + (z - objZ) * (z - objZ));
        if (dist < radius + playerRadius) {
          // Calculate sphere height at player position
          const sphereHeightAtPos = Math.sqrt(Math.max(0, radius * radius - dist * dist));
          const topHeight = objY + sphereHeightAtPos;
          if (topHeight > maxHeight && topHeight <= this.character.position.y + stepHeight) {
            maxHeight = topHeight;
          }
        }
      } else if (collider.type === 'ramp') {
        // Improved ramp walking
        const [width, height, length] = collider.size;
        const [objX, objY, objZ] = collider.position;
        const rotation = collider.rotation[1] || 0; // Y rotation in degrees
        
        // Transform player position to ramp's local space
        const localX = x - objX;
        const localZ = z - objZ;
        
        // Apply rotation to get local coordinates
        const rad = -rotation * Math.PI / 180;
        const rotX = localX * Math.cos(rad) - localZ * Math.sin(rad);
        const rotZ = localX * Math.sin(rad) + localZ * Math.cos(rad);
        
        // Check if player is on the ramp (with proper bounds)
        if (Math.abs(rotX) <= width/2 + playerRadius && 
            rotZ >= -length/2 - playerRadius && 
            rotZ <= length/2 + playerRadius) {
          
          // Calculate height based on position along ramp
          // Ramps slope from back to front
          const clampedZ = Math.max(-length/2, Math.min(length/2, rotZ));
          const progress = (clampedZ + length/2) / length;
          const rampHeight = objY + progress * height;
          
          // Allow smooth ramp walking
          if (rampHeight > maxHeight) {
            maxHeight = rampHeight;
          }
        }
      }
    }
    
    return maxHeight;
  }
  
  moveWithCollision(moveVector) {
    // Advanced collision resolution with proper physics
    const steps = 5; // Number of substeps for accurate collision
    const stepVector = moveVector.clone().divideScalar(steps);
    const finalMove = new THREE.Vector3();
    
    for (let i = 0; i < steps; i++) {
      const testPos = this.character.position.clone().add(finalMove).add(stepVector);
      const collision = this.getCollisionInfo(testPos);
      
      if (collision.hit) {
        // Calculate push-back vector
        const pushBack = collision.normal.multiplyScalar(collision.penetration);
        
        // Slide along the surface
        const slideVector = stepVector.clone();
        const dot = slideVector.dot(collision.normal);
        slideVector.sub(collision.normal.clone().multiplyScalar(dot));
        
        // Apply sliding movement
        finalMove.add(slideVector);
        finalMove.add(pushBack);
      } else {
        finalMove.add(stepVector);
      }
    }
    
    return finalMove;
  }
  
  getCollisionInfo(testPos) {
    const playerRadius = 0.5; // More accurate radius
    const playerHeight = this.isCrouching ? 1.2 : 2.4;
    const playerBottom = testPos.y;
    const playerTop = playerBottom + playerHeight;
    
    if (!this.mapLoader) return { hit: false };
    const colliders = this.mapLoader.getColliders();
    
    let closestCollision = null;
    let minDistance = Infinity;
    
    for (const collider of colliders) {
      if (collider.type === 'box') {
        const [width, height, depth] = collider.size;
        const [objX, objY, objZ] = collider.position;
        
        // Box bounds
        const boxLeft = objX - width/2;
        const boxRight = objX + width/2;
        const boxFront = objZ - depth/2;
        const boxBack = objZ + depth/2;
        const boxBottom = objY - height/2;
        const boxTop = objY + height/2;
        
        // Check if we're on top of the box (allow standing)
        const onTop = testPos.x >= boxLeft - playerRadius && 
                     testPos.x <= boxRight + playerRadius &&
                     testPos.z >= boxFront - playerRadius && 
                     testPos.z <= boxBack + playerRadius &&
                     playerBottom >= boxTop - 0.3 && 
                     playerBottom <= boxTop + 0.5;
        
        if (onTop) continue; // Allow standing on top
        
        // Check vertical overlap
        if (playerTop <= boxBottom || playerBottom >= boxTop) continue;
        
        // Find closest point on box to cylinder center
        const closestX = Math.max(boxLeft, Math.min(testPos.x, boxRight));
        const closestZ = Math.max(boxFront, Math.min(testPos.z, boxBack));
        
        // Calculate distance to closest point
        const dx = testPos.x - closestX;
        const dz = testPos.z - closestZ;
        const distSq = dx * dx + dz * dz;
        
        if (distSq < playerRadius * playerRadius) {
          const dist = Math.sqrt(distSq);
          const penetration = playerRadius - dist;
          
          // Calculate collision normal
          let normal;
          if (dist > 0.001) {
            normal = new THREE.Vector3(dx/dist, 0, dz/dist);
          } else {
            // Player center is inside box, push out to nearest edge
            const distances = [
              { dist: Math.abs(testPos.x - boxLeft), normal: new THREE.Vector3(-1, 0, 0) },
              { dist: Math.abs(testPos.x - boxRight), normal: new THREE.Vector3(1, 0, 0) },
              { dist: Math.abs(testPos.z - boxFront), normal: new THREE.Vector3(0, 0, -1) },
              { dist: Math.abs(testPos.z - boxBack), normal: new THREE.Vector3(0, 0, 1) }
            ];
            distances.sort((a, b) => a.dist - b.dist);
            normal = distances[0].normal;
          }
          
          if (dist < minDistance) {
            minDistance = dist;
            closestCollision = {
              hit: true,
              normal: normal,
              penetration: penetration,
              distance: dist
            };
          }
        }
      } else if (collider.type === 'cylinder') {
        const [radius, height] = collider.size;
        const [objX, objY, objZ] = collider.position;
        
        const cylBottom = objY - height/2;
        const cylTop = objY + height/2;
        
        // Check if on top
        const dist2D = Math.sqrt((testPos.x - objX) ** 2 + (testPos.z - objZ) ** 2);
        const onTop = dist2D < radius + playerRadius * 0.5 && 
                     playerBottom >= cylTop - 0.3 && 
                     playerBottom <= cylTop + 0.5;
        
        if (onTop) continue;
        
        // Check vertical overlap
        if (playerTop <= cylBottom || playerBottom >= cylTop) continue;
        
        // Cylinder-cylinder collision in 2D
        if (dist2D < radius + playerRadius && dist2D > 0.001) {
          const penetration = (radius + playerRadius) - dist2D;
          const normal = new THREE.Vector3(
            (testPos.x - objX) / dist2D,
            0,
            (testPos.z - objZ) / dist2D
          );
          
          if (dist2D < minDistance) {
            minDistance = dist2D;
            closestCollision = {
              hit: true,
              normal: normal,
              penetration: penetration,
              distance: dist2D
            };
          }
        }
      } else if (collider.type === 'sphere') {
        const [radius] = collider.size;
        const [objX, objY, objZ] = collider.position;
        
        // Find closest point on player cylinder to sphere center
        const cylHeight = playerHeight;
        const closestY = Math.max(playerBottom, Math.min(objY, playerTop));
        
        // Calculate 3D distance
        const dx = testPos.x - objX;
        const dy = closestY - objY;
        const dz = testPos.z - objZ;
        const dist3D = Math.sqrt(dx*dx + dy*dy + dz*dz);
        
        if (dist3D < radius + playerRadius && dist3D > 0.001) {
          const penetration = (radius + playerRadius) - dist3D;
          const normal = new THREE.Vector3(
            dx / dist3D,
            dy / dist3D,
            dz / dist3D
          );
          
          if (dist3D < minDistance) {
            minDistance = dist3D;
            closestCollision = {
              hit: true,
              normal: normal,
              penetration: penetration,
              distance: dist3D
            };
          }
        }
      }
    }
    
    return closestCollision || { hit: false };
  }
  
  checkCollision() {
    // Simple collision check (for compatibility)
    const collision = this.getCollisionInfo(this.character.position);
    return collision.hit;
  }
  
  handleShooting() {
    if (!this.weaponSystem || !this.bulletSystem) return;
    
    // Don't shoot if dead
    if (this.player.isDead) return;
    
    const shotData = this.weaponSystem.fire();
    if (shotData) {
      // Send shooting event to server
      if (this.multiplayer && this.multiplayer.connected && this.multiplayer.roomId) {
        this.multiplayer.sendShoot(
          shotData.origin,
          shotData.direction,
          this.weaponSystem.currentWeapon
        );
      }
      
      // Perform hit detection (pass remote players for checking)
      const hitResult = this.bulletSystem.shoot(shotData, this.mapLoader.getColliders(), this.remotePlayers);
      
      if (hitResult.hit) {
        if (hitResult.isPlayer && hitResult.playerId) {
          // Hit a player!
          console.log(`Hit player! Damage: ${hitResult.damage}${hitResult.isHeadshot ? ' (HEADSHOT!)' : ''}`);
          
          // Send hit event to server
          if (this.multiplayer && this.multiplayer.connected) {
            this.multiplayer.sendHit(hitResult.playerId, hitResult.damage, this.weaponSystem.currentWeapon);
          }
          
          // Show hit marker
          if (this.hud) {
            this.hud.showHitMarker(hitResult.isHeadshot);
          }
          
          // Show damage number
          this.showDamageNumber(hitResult.point, hitResult.damage, hitResult.isHeadshot);
        } else {
          // Hit environment
          console.log(`Hit at distance: ${hitResult.distance.toFixed(2)}m`);
        }
      }
    }
  }
  
  // Multiplayer methods
  initMultiplayer() {
    this.multiplayer = new SimpleMultiplayer(this);
    
    // Prompt for username
    const username = prompt('Enter your username:') || `Player${Math.floor(Math.random() * 9999)}`;
    
    // Connect to server
    this.multiplayer.connect(username);
    
    // Add UI for room management
    this.createMultiplayerUI();
  }
  
  createMultiplayerUI() {
    // Create a simple UI overlay for multiplayer
    const ui = document.createElement('div');
    ui.id = 'multiplayer-ui';
    ui.style.cssText = `
      position: fixed;
      top: 10px;
      right: 10px;
      color: white;
      font-family: monospace;
      font-size: 14px;
      background: rgba(0,0,0,0.5);
      padding: 10px;
      border-radius: 5px;
      z-index: 1000;
    `;
    
    ui.innerHTML = `
      <div id="connection-status">Connecting...</div>
      <div id="room-controls" style="margin-top: 10px;">
        <button id="create-room" style="margin-right: 5px;">Create Room</button>
        <button id="join-room">Join Room</button>
        <div id="room-list" style="margin-top: 10px;"></div>
      </div>
      <div id="room-info" style="display: none; margin-top: 10px;">
        <div>Room: <span id="current-room"></span></div>
        <div>Players: <span id="player-count">0</span></div>
        <button id="leave-room">Leave Room</button>
      </div>
    `;
    
    document.body.appendChild(ui);
    
    // Store UI reference
    this.ui = {
      connectionStatus: document.getElementById('connection-status'),
      roomControls: document.getElementById('room-controls'),
      roomInfo: document.getElementById('room-info'),
      roomList: document.getElementById('room-list'),
      
      showRoomList: (rooms) => {
        if (!rooms || rooms.length === 0) {
          this.ui.roomList.innerHTML = '<div>No rooms available</div>';
          return;
        }
        
        this.ui.roomList.innerHTML = rooms.map(room => `
          <div style="margin: 5px 0;">
            ${room.name} (${room.players}/${room.maxPlayers})
            <button onclick="game.joinRoom('${room.id}')" style="margin-left: 10px;">Join</button>
          </div>
        `).join('');
      },
      
      hideRoomList: () => {
        this.ui.roomControls.style.display = 'none';
        this.ui.roomInfo.style.display = 'block';
      },
      
      showNotification: (message) => {
        console.log(`[Notification] ${message}`);
      },
      
      showError: (message) => {
        console.error(`[Error] ${message}`);
      },
      
      showDisconnected: () => {
        this.ui.connectionStatus.textContent = 'Disconnected';
        this.ui.connectionStatus.style.color = 'red';
      }
    };
    
    // Set up button handlers
    document.getElementById('create-room').addEventListener('click', () => {
      const roomName = prompt('Enter room name:') || 'New Room';
      this.multiplayer.createRoom(roomName, 10);
    });
    
    document.getElementById('join-room').addEventListener('click', () => {
      const roomId = prompt('Enter room ID:');
      if (roomId) {
        this.multiplayer.joinRoom(roomId);
      }
    });
    
    document.getElementById('leave-room').addEventListener('click', () => {
      this.multiplayer.leaveRoom();
      this.ui.roomControls.style.display = 'block';
      this.ui.roomInfo.style.display = 'none';
    });
    
    // Update connection status
    setTimeout(() => {
      if (this.multiplayer && this.multiplayer.connected) {
        this.ui.connectionStatus.textContent = 'Connected';
        this.ui.connectionStatus.style.color = 'lime';
      }
    }, 1000);
  }
  
  joinRoom(roomId) {
    if (this.multiplayer) {
      this.multiplayer.joinRoom(roomId);
    }
  }
  
  createRemotePlayer(playerData) {
    // Create a simple player mesh
    const playerGeometry = new THREE.CapsuleGeometry(0.5, 1.8, 4, 8);
    const playerMaterial = new THREE.MeshStandardMaterial({ 
      color: new THREE.Color().setHSL(Math.random(), 0.7, 0.5),
      roughness: 0.7,
      metalness: 0.0
    });
    
    const playerMesh = new THREE.Mesh(playerGeometry, playerMaterial);
    playerMesh.position.set(
      playerData.position?.x || 0,
      (playerData.position?.y || 0) + 1.4,
      playerData.position?.z || 0
    );
    
    // Add name label
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'white';
    ctx.font = '32px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(playerData.username || 'Player', 128, 40);
    
    const texture = new THREE.CanvasTexture(canvas);
    const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
    const sprite = new THREE.Sprite(spriteMaterial);
    sprite.scale.set(2, 0.5, 1);
    sprite.position.y = 2;
    playerMesh.add(sprite);
    
    this.scene.add(playerMesh);
    this.remotePlayers.set(playerData.id, playerMesh);
    
    return playerMesh;
  }
  
  removeRemotePlayer(playerMesh) {
    this.scene.remove(playerMesh);
    // Find and remove from map
    for (const [id, mesh] of this.remotePlayers.entries()) {
      if (mesh === playerMesh) {
        this.remotePlayers.delete(id);
        break;
      }
    }
  }
  
  showRemoteShot(data) {
    // Show shooting effect from remote player
    if (this.bulletSystem) {
      // Create a visual bullet trail
      const trail = this.bulletSystem.createTrail(data.position, data.direction);
      if (trail) {
        this.scene.add(trail);
        setTimeout(() => this.scene.remove(trail), 100);
      }
    }
  }
  
  showHitEffect() {
    // Flash red overlay when hit
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: red;
      opacity: 0.3;
      pointer-events: none;
      z-index: 999;
    `;
    document.body.appendChild(overlay);
    
    setTimeout(() => {
      overlay.style.opacity = '0';
      overlay.style.transition = 'opacity 0.5s';
      setTimeout(() => document.body.removeChild(overlay), 500);
    }, 100);
  }
  
  showDamageNumber(position, damage, isHeadshot) {
    // Create floating damage text
    const damageDiv = document.createElement('div');
    damageDiv.style.cssText = `
      position: fixed;
      color: ${isHeadshot ? '#ff0000' : '#ffff00'};
      font-family: monospace;
      font-size: ${isHeadshot ? '28px' : '24px'};
      font-weight: bold;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
      pointer-events: none;
      z-index: 1000;
      animation: floatUp 1s ease-out forwards;
    `;
    damageDiv.textContent = isHeadshot ? `${damage} HEADSHOT!` : damage;
    
    // Convert 3D position to screen position
    const vector = position.clone();
    vector.project(this.camera);
    const x = (vector.x * 0.5 + 0.5) * window.innerWidth;
    const y = (-vector.y * 0.5 + 0.5) * window.innerHeight;
    
    damageDiv.style.left = `${x}px`;
    damageDiv.style.top = `${y}px`;
    
    // Add CSS animation
    if (!document.getElementById('damage-animation')) {
      const style = document.createElement('style');
      style.id = 'damage-animation';
      style.textContent = `
        @keyframes floatUp {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(-50px); opacity: 0; }
        }
      `;
      document.head.appendChild(style);
    }
    
    document.body.appendChild(damageDiv);
    setTimeout(() => document.body.removeChild(damageDiv), 1000);
  }
  
  handleDeath(killerName) {
    console.log(`You were killed by ${killerName}`);
    
    // Set player as dead
    this.player.isDead = true;
    this.player.deaths++;
    
    // Disable controls
    if (document.pointerLockElement) {
      document.exitPointerLock();
    }
    
    // Show death screen with respawn button
    const deathScreen = document.createElement('div');
    deathScreen.id = 'death-screen';
    deathScreen.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.85);
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-family: monospace;
      z-index: 9999;
    `;
    
    deathScreen.innerHTML = `
      <div style="font-size: 48px; color: #ff0000; margin-bottom: 20px;">YOU DIED</div>
      <div style="font-size: 24px; margin-bottom: 10px;">Killed by <span style="color: #ffaa00">${killerName}</span></div>
      <div style="font-size: 18px; margin: 20px 0; color: #888;">
        K/D: ${this.player.kills}/${this.player.deaths}
      </div>
      <button id="respawn-btn" style="
        padding: 15px 30px;
        font-size: 20px;
        background: #4CAF50;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 20px;
        font-family: monospace;
      ">RESPAWN</button>
      <div style="font-size: 14px; margin-top: 10px; color: #666;">
        Press SPACE or click RESPAWN to continue
      </div>
    `;
    
    document.body.appendChild(deathScreen);
    
    // Respawn button handler
    const respawnBtn = document.getElementById('respawn-btn');
    const handleRespawn = () => {
      if (this.multiplayer && this.multiplayer.connected) {
        this.multiplayer.requestRespawn();
      }
      document.body.removeChild(deathScreen);
      this.player.isDead = false;
      
      // Re-enable controls
      this.renderer.domElement.requestPointerLock();
    };
    
    respawnBtn.addEventListener('click', handleRespawn);
    
    // Also allow spacebar to respawn
    const spaceHandler = (e) => {
      if (e.code === 'Space' && this.player.isDead) {
        handleRespawn();
        document.removeEventListener('keydown', spaceHandler);
      }
    };
    document.addEventListener('keydown', spaceHandler);
  }
}

// Create game instance and store globally for UI access
const game = new Game();
window.game = game;

// Initialize multiplayer after a short delay
setTimeout(() => {
  game.initMultiplayer();
}, 1000);