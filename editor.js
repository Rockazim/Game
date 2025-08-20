import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

class MapEditor {
  constructor() {
    this.objects = [];
    this.selectedObject = null;
    this.selectedType = 'box';
    this.gridHelper = null;
    this.spawnPoint = null;
    
    this.init();
    this.setupControls();
    this.animate();
  }
  
  init() {
    // Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color('#87CEEB');
    this.scene.fog = new THREE.Fog('#87CEEB', 50, 200);
    
    // Camera
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.set(20, 20, 20);
    this.camera.lookAt(0, 0, 0);
    
    // Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    document.getElementById('canvas-container').appendChild(this.renderer.domElement);
    
    // Orbit Controls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    
    // Lights
    const ambientLight = new THREE.AmbientLight('#ffffff', 0.6);
    this.scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight('#ffffff', 0.8);
    directionalLight.position.set(10, 20, 10);
    directionalLight.castShadow = true;
    directionalLight.shadow.camera.left = -50;
    directionalLight.shadow.camera.right = 50;
    directionalLight.shadow.camera.top = 50;
    directionalLight.shadow.camera.bottom = -50;
    this.scene.add(directionalLight);
    
    // Grid
    this.gridHelper = new THREE.GridHelper(100, 100, '#444444', '#222222');
    this.scene.add(this.gridHelper);
    
    // Ground plane for reference
    const groundGeometry = new THREE.PlaneGeometry(100, 100);
    const groundMaterial = new THREE.MeshStandardMaterial({ 
      color: '#404040',
      transparent: true,
      opacity: 0.5
    });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.01;
    ground.receiveShadow = true;
    this.scene.add(ground);
    
    // Raycaster for object selection
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
    
    // Create spawn point indicator
    const spawnGeometry = new THREE.ConeGeometry(0.5, 2, 4);
    const spawnMaterial = new THREE.MeshStandardMaterial({ color: '#00ff00' });
    this.spawnPoint = new THREE.Mesh(spawnGeometry, spawnMaterial);
    this.spawnPoint.position.set(0, 1, 0);
    this.spawnPoint.userData = { type: 'spawn', isSpawn: true };
    this.scene.add(this.spawnPoint);
    
    // Outline for selected objects
    this.outlineMaterial = new THREE.MeshBasicMaterial({ 
      color: '#00ff00',
      wireframe: true
    });
  }
  
  setupControls() {
    // Object type buttons
    document.querySelectorAll('.object-button').forEach(button => {
      button.addEventListener('click', (e) => {
        document.querySelectorAll('.object-button').forEach(b => b.classList.remove('active'));
        button.classList.add('active');
        this.selectedType = button.dataset.type;
      });
    });
    
    // Set first button as active
    document.querySelector('.object-button').classList.add('active');
    
    // Mouse controls
    this.renderer.domElement.addEventListener('click', (e) => this.onMouseClick(e));
    
    // Keyboard controls
    document.addEventListener('keydown', (e) => this.onKeyDown(e));
    
    // Window resize
    window.addEventListener('resize', () => this.onWindowResize());
  }
  
  onMouseClick(event) {
    // Calculate mouse position in normalized device coordinates
    const rect = this.renderer.domElement.getBoundingClientRect();
    this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    
    // Update the raycaster
    this.raycaster.setFromCamera(this.mouse, this.camera);
    
    // Check for intersections
    const intersects = this.raycaster.intersectObjects(this.scene.children, true);
    
    if (intersects.length > 0) {
      const object = intersects[0].object;
      
      // Don't select ground or grid
      if (object === this.gridHelper || object.userData.isGround) return;
      
      this.selectObject(object);
    } else {
      this.selectObject(null);
    }
  }
  
  selectObject(object) {
    // Remove previous selection outline
    if (this.selectedOutline) {
      this.scene.remove(this.selectedOutline);
      this.selectedOutline = null;
    }
    
    this.selectedObject = object;
    
    if (object) {
      // Create outline
      const outlineGeometry = object.geometry.clone();
      this.selectedOutline = new THREE.Mesh(outlineGeometry, this.outlineMaterial);
      this.selectedOutline.position.copy(object.position);
      this.selectedOutline.rotation.copy(object.rotation);
      this.selectedOutline.scale.copy(object.scale);
      this.selectedOutline.scale.multiplyScalar(1.05);
      this.scene.add(this.selectedOutline);
      
      // Update UI with object properties
      this.updatePropertiesUI(object);
      
      // Update object list selection
      this.updateObjectList();
    }
  }
  
  updatePropertiesUI(object) {
    if (!object) return;
    
    document.getElementById('pos-x').value = object.position.x.toFixed(1);
    document.getElementById('pos-y').value = object.position.y.toFixed(1);
    document.getElementById('pos-z').value = object.position.z.toFixed(1);
    
    const userData = object.userData;
    if (userData.size) {
      document.getElementById('size-w').value = userData.size[0];
      document.getElementById('size-h').value = userData.size[1];
      document.getElementById('size-d').value = userData.size[2];
    }
    
    document.getElementById('rot-x').value = (object.rotation.x * 180 / Math.PI).toFixed(0);
    document.getElementById('rot-y').value = (object.rotation.y * 180 / Math.PI).toFixed(0);
    document.getElementById('rot-z').value = (object.rotation.z * 180 / Math.PI).toFixed(0);
    
    if (userData.color) {
      document.getElementById('color').value = userData.color;
    }
  }
  
  placeObject() {
    const type = this.selectedType;
    const pos = [
      parseFloat(document.getElementById('pos-x').value),
      parseFloat(document.getElementById('pos-y').value),
      parseFloat(document.getElementById('pos-z').value)
    ];
    const size = [
      parseFloat(document.getElementById('size-w').value),
      parseFloat(document.getElementById('size-h').value),
      parseFloat(document.getElementById('size-d').value)
    ];
    const rot = [
      parseFloat(document.getElementById('rot-x').value),
      parseFloat(document.getElementById('rot-y').value),
      parseFloat(document.getElementById('rot-z').value)
    ];
    const color = document.getElementById('color').value;
    
    let geometry, mesh;
    
    switch(type) {
      case 'box':
        geometry = new THREE.BoxGeometry(size[0], size[1], size[2]);
        break;
      case 'sphere':
        geometry = new THREE.SphereGeometry(size[0], 16, 16);
        break;
      case 'cylinder':
        geometry = new THREE.CylinderGeometry(size[0], size[0], size[1], 16);
        break;
      case 'ramp':
        // Create wedge for ramp
        const shape = new THREE.Shape();
        shape.moveTo(0, 0);
        shape.lineTo(size[2], 0);
        shape.lineTo(size[2], size[1]);
        shape.closePath();
        geometry = new THREE.ExtrudeGeometry(shape, {
          steps: 1,
          depth: size[0],
          bevelEnabled: false
        });
        geometry.center();
        break;
      case 'spawn':
        // Move spawn point
        this.spawnPoint.position.set(pos[0], pos[1], pos[2]);
        return;
      default:
        geometry = new THREE.BoxGeometry(size[0], size[1], size[2]);
    }
    
    const material = new THREE.MeshStandardMaterial({ color: color });
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(pos[0], pos[1], pos[2]);
    mesh.rotation.x = rot[0] * Math.PI / 180;
    mesh.rotation.y = rot[1] * Math.PI / 180;
    mesh.rotation.z = rot[2] * Math.PI / 180;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    
    // Store data in userData for export
    mesh.userData = {
      type: type,
      position: pos,
      size: size,
      rotation: rot,
      color: color
    };
    
    this.scene.add(mesh);
    this.objects.push(mesh);
    this.updateObjectList();
  }
  
  deleteSelected() {
    if (!this.selectedObject || this.selectedObject.userData.isSpawn) return;
    
    const index = this.objects.indexOf(this.selectedObject);
    if (index > -1) {
      this.objects.splice(index, 1);
    }
    
    this.scene.remove(this.selectedObject);
    if (this.selectedOutline) {
      this.scene.remove(this.selectedOutline);
      this.selectedOutline = null;
    }
    this.selectedObject = null;
    this.updateObjectList();
  }
  
  duplicateSelected() {
    if (!this.selectedObject || this.selectedObject.userData.isSpawn) return;
    
    const userData = this.selectedObject.userData;
    const oldValues = {
      x: document.getElementById('pos-x').value,
      y: document.getElementById('pos-y').value,
      z: document.getElementById('pos-z').value
    };
    
    // Offset position slightly
    document.getElementById('pos-x').value = parseFloat(oldValues.x) + 2;
    document.getElementById('pos-z').value = parseFloat(oldValues.z) + 2;
    
    this.placeObject();
    
    // Restore position inputs
    document.getElementById('pos-x').value = oldValues.x;
    document.getElementById('pos-z').value = oldValues.z;
  }
  
  clearAll() {
    if (!confirm('Clear all objects?')) return;
    
    this.objects.forEach(obj => this.scene.remove(obj));
    this.objects = [];
    
    if (this.selectedOutline) {
      this.scene.remove(this.selectedOutline);
      this.selectedOutline = null;
    }
    this.selectedObject = null;
    this.updateObjectList();
  }
  
  updateObjectList() {
    const list = document.getElementById('object-list');
    list.innerHTML = '';
    
    this.objects.forEach((obj, index) => {
      const item = document.createElement('div');
      item.className = 'object-item';
      if (obj === this.selectedObject) {
        item.classList.add('selected');
      }
      
      const userData = obj.userData;
      item.textContent = `${userData.type} [${userData.position[0]}, ${userData.position[1]}, ${userData.position[2]}]`;
      item.onclick = () => this.selectObject(obj);
      
      list.appendChild(item);
    });
  }
  
  exportMap() {
    const mapName = document.getElementById('map-name').value || 'custom_map';
    
    const mapData = {
      name: mapName,
      skyColor: '#87CEEB',
      fogColor: '#87CEEB',
      fogNear: 50,
      fogFar: 200,
      spawn: [
        this.spawnPoint.position.x,
        this.spawnPoint.position.y,
        this.spawnPoint.position.z
      ],
      objects: this.objects.map(obj => {
        const data = obj.userData;
        const exportObj = {
          type: data.type,
          pos: data.position,
          size: data.size,
          color: data.color
        };
        
        // Only add rotation if not zero
        if (data.rotation.some(r => r !== 0)) {
          exportObj.rot = data.rotation;
        }
        
        return exportObj;
      })
    };
    
    const exportText = `${mapName}: ${JSON.stringify(mapData, null, 2)}`;
    
    document.getElementById('export-text').value = exportText;
    document.getElementById('export-panel').style.display = 'block';
  }
  
  copyExport() {
    const textarea = document.getElementById('export-text');
    textarea.select();
    document.execCommand('copy');
    alert('Copied to clipboard!');
  }
  
  closeExport() {
    document.getElementById('export-panel').style.display = 'none';
  }
  
  importMap() {
    const json = prompt('Paste map JSON data:');
    if (!json) return;
    
    try {
      const mapData = JSON.parse(json);
      
      // Clear existing objects
      this.clearAll();
      
      // Set spawn
      if (mapData.spawn) {
        this.spawnPoint.position.set(...mapData.spawn);
      }
      
      // Create objects
      mapData.objects.forEach(objData => {
        document.getElementById('pos-x').value = objData.pos[0];
        document.getElementById('pos-y').value = objData.pos[1];
        document.getElementById('pos-z').value = objData.pos[2];
        document.getElementById('size-w').value = objData.size[0];
        document.getElementById('size-h').value = objData.size[1];
        document.getElementById('size-d').value = objData.size[2] || objData.size[0];
        document.getElementById('color').value = objData.color;
        
        if (objData.rot) {
          document.getElementById('rot-x').value = objData.rot[0];
          document.getElementById('rot-y').value = objData.rot[1];
          document.getElementById('rot-z').value = objData.rot[2];
        }
        
        this.selectedType = objData.type;
        this.placeObject();
      });
      
      alert('Map imported!');
    } catch(e) {
      alert('Invalid map data!');
      console.error(e);
    }
  }
  
  testMap() {
    // Save map to localStorage and open game
    const mapData = this.exportMap();
    localStorage.setItem('testMap', JSON.stringify(mapData));
    window.open('index.html?testMap=true', '_blank');
  }
  
  onKeyDown(event) {
    if (!this.selectedObject || this.selectedObject.userData.isSpawn) return;
    
    const moveSpeed = event.shiftKey ? 2 : 0.5;
    const rotSpeed = 15;
    
    switch(event.key.toLowerCase()) {
      case 'delete':
        this.deleteSelected();
        break;
      case 'g':
        this.gridHelper.visible = !this.gridHelper.visible;
        break;
      case 'd':
        if (event.ctrlKey) {
          event.preventDefault();
          this.duplicateSelected();
        }
        break;
      // Movement
      case 'w':
        this.selectedObject.position.z -= moveSpeed;
        break;
      case 's':
        this.selectedObject.position.z += moveSpeed;
        break;
      case 'a':
        this.selectedObject.position.x -= moveSpeed;
        break;
      case 'd':
        if (!event.ctrlKey) {
          this.selectedObject.position.x += moveSpeed;
        }
        break;
      case 'r':
        this.selectedObject.position.y += moveSpeed;
        break;
      case 'f':
        this.selectedObject.position.y -= moveSpeed;
        break;
      // Rotation
      case 'q':
        this.selectedObject.rotation.y -= rotSpeed * Math.PI / 180;
        break;
      case 'e':
        this.selectedObject.rotation.y += rotSpeed * Math.PI / 180;
        break;
    }
    
    // Update outline position
    if (this.selectedOutline && this.selectedObject) {
      this.selectedOutline.position.copy(this.selectedObject.position);
      this.selectedOutline.rotation.copy(this.selectedObject.rotation);
      
      // Update UI
      this.updatePropertiesUI(this.selectedObject);
      
      // Update userData
      this.selectedObject.userData.position = [
        this.selectedObject.position.x,
        this.selectedObject.position.y,
        this.selectedObject.position.z
      ];
      this.selectedObject.userData.rotation = [
        this.selectedObject.rotation.x * 180 / Math.PI,
        this.selectedObject.rotation.y * 180 / Math.PI,
        this.selectedObject.rotation.z * 180 / Math.PI
      ];
    }
  }
  
  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
  
  animate() {
    requestAnimationFrame(() => this.animate());
    
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }
}

// Create editor instance
const editor = new MapEditor();
window.editor = editor; // Make it accessible from HTML