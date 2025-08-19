import * as THREE from 'three';
import { Dust2Map } from './map.js';

class Game {
  constructor() {
    // Settings
    this.settings = {
      leftHanded: false // Can be toggled to switch arm visibility
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
    // Create the Dust 2 inspired map
    this.map = new Dust2Map(this.scene);
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
    
    // Position character at T spawn
    this.character.position.set(0, 1.5, 45);
    
    // Add character to scene
    this.scene.add(this.character);
    
    // Create first-person view model arms (visible to player)
    const viewArmGeometry = new THREE.BoxGeometry(0.25, 0.8, 0.25);
    const handGeometry = new THREE.BoxGeometry(0.2, 0.25, 0.15);
    const sleeveGeometry = new THREE.BoxGeometry(0.27, 0.3, 0.27);
    
    if (!this.settings.leftHanded) {
      // Right-handed configuration (default)
      // Right arm (holding weapon position)
      const rightViewArm = new THREE.Mesh(viewArmGeometry, skinMaterial);
      rightViewArm.position.set(0.4, -0.3, -0.5);
      rightViewArm.rotation.x = -0.4;
      rightViewArm.rotation.z = -0.1;
      this.viewModel.add(rightViewArm);
      
      // Right hand
      const rightHand = new THREE.Mesh(handGeometry, skinMaterial);
      rightHand.position.set(0.4, -0.5, -0.8);
      rightHand.rotation.x = -0.3;
      this.viewModel.add(rightHand);
      
      // Right sleeve
      const rightSleeve = new THREE.Mesh(sleeveGeometry, shirtMaterial);
      rightSleeve.position.set(0.4, -0.15, -0.45);
      rightSleeve.rotation.x = -0.4;
      rightSleeve.rotation.z = -0.1;
      this.viewModel.add(rightSleeve);
    } else {
      // Left-handed configuration (can be enabled in settings)
      // Left arm (holding weapon position - mirrored)
      const leftViewArm = new THREE.Mesh(viewArmGeometry, skinMaterial);
      leftViewArm.position.set(-0.4, -0.3, -0.5);
      leftViewArm.rotation.x = -0.4;
      leftViewArm.rotation.z = 0.1;
      this.viewModel.add(leftViewArm);
      
      // Left hand
      const leftHand = new THREE.Mesh(handGeometry, skinMaterial);
      leftHand.position.set(-0.4, -0.5, -0.8);
      leftHand.rotation.x = -0.3;
      this.viewModel.add(leftHand);
      
      // Left sleeve
      const leftSleeve = new THREE.Mesh(sleeveGeometry, shirtMaterial);
      leftSleeve.position.set(-0.4, -0.15, -0.45);
      leftSleeve.rotation.x = -0.4;
      leftSleeve.rotation.z = 0.1;
      this.viewModel.add(leftSleeve);
    }
    
    // View model is added to the scene and will follow the camera
    this.scene.add(this.viewModel);
  }

  setupFirstPersonControls() {
    // Mouse look variables
    this.mouseX = 0;
    this.mouseY = 0;
    this.targetRotationX = 0;
    this.targetRotationY = 0;
    this.rotationSpeed = 0.002;
    this.verticalRotationLimit = Math.PI / 3; // Limit looking up/down to 60 degrees
    
    // Lock pointer on click
    this.renderer.domElement.addEventListener('click', () => {
      this.renderer.domElement.requestPointerLock();
    });
    
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
    
    const viewArmGeometry = new THREE.BoxGeometry(0.25, 0.8, 0.25);
    const handGeometry = new THREE.BoxGeometry(0.2, 0.25, 0.15);
    const sleeveGeometry = new THREE.BoxGeometry(0.27, 0.3, 0.27);
    
    if (!this.settings.leftHanded) {
      // Right arm
      const rightViewArm = new THREE.Mesh(viewArmGeometry, skinMaterial);
      rightViewArm.position.set(0.4, -0.3, -0.5);
      rightViewArm.rotation.x = -0.4;
      rightViewArm.rotation.z = -0.1;
      this.viewModel.add(rightViewArm);
      
      const rightHand = new THREE.Mesh(handGeometry, skinMaterial);
      rightHand.position.set(0.4, -0.5, -0.8);
      rightHand.rotation.x = -0.3;
      this.viewModel.add(rightHand);
      
      const rightSleeve = new THREE.Mesh(sleeveGeometry, shirtMaterial);
      rightSleeve.position.set(0.4, -0.15, -0.45);
      rightSleeve.rotation.x = -0.4;
      rightSleeve.rotation.z = -0.1;
      this.viewModel.add(rightSleeve);
    } else {
      // Left arm
      const leftViewArm = new THREE.Mesh(viewArmGeometry, skinMaterial);
      leftViewArm.position.set(-0.4, -0.3, -0.5);
      leftViewArm.rotation.x = -0.4;
      leftViewArm.rotation.z = 0.1;
      this.viewModel.add(leftViewArm);
      
      const leftHand = new THREE.Mesh(handGeometry, skinMaterial);
      leftHand.position.set(-0.4, -0.5, -0.8);
      leftHand.rotation.x = -0.3;
      this.viewModel.add(leftHand);
      
      const leftSleeve = new THREE.Mesh(sleeveGeometry, shirtMaterial);
      leftSleeve.position.set(-0.4, -0.15, -0.45);
      leftSleeve.rotation.x = -0.4;
      leftSleeve.rotation.z = 0.1;
      this.viewModel.add(leftSleeve);
    }
    
    console.log(`Switched to ${this.settings.leftHanded ? 'left' : 'right'}-handed mode`);
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
      
      // Position camera at character's head position
      const headWorldPos = new THREE.Vector3();
      this.characterHead.getWorldPosition(headWorldPos);
      this.camera.position.copy(headWorldPos);
      this.camera.position.y += breathOffset;
      
      // Apply rotations to camera
      this.camera.rotation.y = this.targetRotationX;
      this.camera.rotation.x = this.targetRotationY;
      this.camera.rotation.order = 'YXZ'; // Prevent gimbal lock
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
    }

    this.renderer.render(this.scene, this.camera);
  }
  
  updateMovement(deltaTime) {
    if (!this.character) return;
    
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
      
      // Apply movement to character
      this.character.position.add(moveVector);
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
    
    // Ground collision detection (multiple levels for map)
    let groundLevel = 0; // Default ground
    
    // T spawn platform
    if (Math.abs(this.character.position.x) < 12.5 && 
        this.character.position.z > 35 && 
        this.character.position.z < 55) {
      groundLevel = 1.5; // T spawn height
    }
    // T spawn ramp
    else if (Math.abs(this.character.position.x) < 10 && 
             this.character.position.z > 32 && 
             this.character.position.z < 42) {
      // Interpolate on ramp
      const rampProgress = (42 - this.character.position.z) / 10;
      groundLevel = 0.5 + rampProgress * 1;
    }
    // Upper B tunnels
    else if (this.character.position.x > 15 && 
             this.character.position.x < 25 &&
             this.character.position.z > 28 && 
             this.character.position.z < 36) {
      groundLevel = 2; // Upper tunnels
    }
    // A Site platform
    else if (this.character.position.x < -25 && 
             this.character.position.x > -45 &&
             this.character.position.z < -11 && 
             this.character.position.z > -29) {
      groundLevel = 1; // A Site height
    }
    // B Site platform
    else if (this.character.position.x > 26 && 
             this.character.position.x < 44 &&
             this.character.position.z < -11 && 
             this.character.position.z > -29) {
      groundLevel = 1; // B Site height
    }
    // Catwalk/Short
    else if (this.character.position.x < -8 && 
             this.character.position.x > -24 &&
             this.character.position.z < 4 && 
             this.character.position.z > -14) {
      groundLevel = 2; // Catwalk height
    }
    // CT spawn
    else if (Math.abs(this.character.position.x) < 12.5 && 
             this.character.position.z < -32.5 && 
             this.character.position.z > -47.5) {
      groundLevel = 0.5; // CT spawn slight elevation
    }
    
    if (this.character.position.y <= groundLevel) {
      this.character.position.y = groundLevel;
      this.velocity.y = 0;
      this.isOnGround = true;
      this.canJump = true;
    } else {
      this.isOnGround = false;
    }
  }
}

new Game();