import * as THREE from 'three';
import { maps } from './mapData.js';

export class MapLoader {
  constructor(scene) {
    this.scene = scene;
    this.objects = [];
    this.colliders = [];
  }

  loadMap(mapName) {
    // Clear existing map
    this.clearMap();
    
    // Get map data
    const mapData = maps[mapName];
    if (!mapData) {
      console.error(`Map "${mapName}" not found!`);
      return null;
    }
    
    // Set scene properties
    if (mapData.skyColor) {
      this.scene.background = new THREE.Color(mapData.skyColor);
    }
    if (mapData.fogColor) {
      this.scene.fog = new THREE.Fog(mapData.fogColor, mapData.fogNear || 10, mapData.fogFar || 100);
    }
    
    // Create objects
    mapData.objects.forEach(obj => {
      this.createObject(obj);
    });
    
    // Return spawn position
    return mapData.spawn || [0, 1, 0];
  }
  
  clearMap() {
    // Remove all map objects from scene
    this.objects.forEach(obj => {
      this.scene.remove(obj);
    });
    this.objects = [];
    this.colliders = [];
  }
  
  createObject(objData) {
    let mesh;
    
    switch(objData.type) {
      case 'box':
        mesh = this.createBox(objData);
        break;
      case 'ramp':
        mesh = this.createRamp(objData);
        break;
      case 'cylinder':
        mesh = this.createCylinder(objData);
        break;
      case 'sphere':
        mesh = this.createSphere(objData);
        break;
      default:
        console.warn(`Unknown object type: ${objData.type}`);
        return;
    }
    
    if (mesh) {
      this.objects.push(mesh);
      this.scene.add(mesh);
      
      // Add to colliders if not a decoration
      if (!objData.noCollide) {
        this.colliders.push({
          type: objData.type,
          position: objData.pos,
          size: objData.size,
          rotation: objData.rot || [0, 0, 0],
          mesh: mesh
        });
      }
    }
  }
  
  createBox(objData) {
    const [width, height, depth] = objData.size;
    const [x, y, z] = objData.pos;
    
    const geometry = new THREE.BoxGeometry(width, height, depth);
    const material = new THREE.MeshStandardMaterial({
      color: objData.color || '#808080',
      roughness: objData.roughness || 0.7,
      metalness: objData.metalness || 0.1
    });
    
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    
    if (objData.rot) {
      mesh.rotation.x = objData.rot[0] * Math.PI / 180;
      mesh.rotation.y = objData.rot[1] * Math.PI / 180;
      mesh.rotation.z = objData.rot[2] * Math.PI / 180;
    }
    
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    
    return mesh;
  }
  
  createRamp(objData) {
    const [width, height, length] = objData.size;
    const [x, y, z] = objData.pos;
    
    // Create wedge shape for ramp
    const shape = new THREE.Shape();
    shape.moveTo(0, 0);
    shape.lineTo(length, 0);
    shape.lineTo(length, height);
    shape.closePath();
    
    const extrudeSettings = {
      steps: 1,
      depth: width,
      bevelEnabled: false
    };
    
    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    geometry.center();
    
    const material = new THREE.MeshStandardMaterial({
      color: objData.color || '#606060',
      roughness: objData.roughness || 0.7,
      metalness: objData.metalness || 0.1
    });
    
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    
    if (objData.rot) {
      mesh.rotation.x = objData.rot[0] * Math.PI / 180;
      mesh.rotation.y = objData.rot[1] * Math.PI / 180;
      mesh.rotation.z = objData.rot[2] * Math.PI / 180;
    }
    
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    
    return mesh;
  }
  
  createCylinder(objData) {
    const [radius, height] = objData.size;
    const [x, y, z] = objData.pos;
    
    const geometry = new THREE.CylinderGeometry(radius, radius, height, 16);
    const material = new THREE.MeshStandardMaterial({
      color: objData.color || '#808080',
      roughness: objData.roughness || 0.7,
      metalness: objData.metalness || 0.1
    });
    
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    
    if (objData.rot) {
      mesh.rotation.x = objData.rot[0] * Math.PI / 180;
      mesh.rotation.y = objData.rot[1] * Math.PI / 180;
      mesh.rotation.z = objData.rot[2] * Math.PI / 180;
    }
    
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    
    return mesh;
  }
  
  createSphere(objData) {
    const [radius] = objData.size;
    const [x, y, z] = objData.pos;
    
    const geometry = new THREE.SphereGeometry(radius, 16, 16);
    const material = new THREE.MeshStandardMaterial({
      color: objData.color || '#808080',
      roughness: objData.roughness || 0.7,
      metalness: objData.metalness || 0.1
    });
    
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    
    return mesh;
  }
  
  getColliders() {
    return this.colliders;
  }
}

// Keep compatibility with old system
export class SimpleMap {
  constructor(scene) {
    this.scene = scene;
    this.mapLoader = new MapLoader(scene);
  }
  
  createMap() {
    // Load the simple arena map by default
    const spawnPos = this.mapLoader.loadMap('simple_arena');
    console.log('Map loaded with spawn position:', spawnPos);
  }
}

export const Dust2Map = SimpleMap;