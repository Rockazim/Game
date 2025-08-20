import * as THREE from 'three';
import { WeaponBase } from './weaponBase.js';

export class Pistol extends WeaponBase {
  constructor(scene) {
    const config = {
      name: 'Pistol',
      damage: 28,
      fireRate: 400, // RPM
      accuracy: 0.75,
      range: 50,
      magSize: 17,
      maxAmmo: 102,
      reloadTime: 2.0,
      switchTime: 0.5,
      recoilAmount: 0.03,
      position: new THREE.Vector3(0.22, -0.35, -0.45),
      rotation: new THREE.Vector3(-0.05, 0.1, 0)
    };
    
    super(scene, config);
  }
  
  createWeaponMesh() {
    const group = new THREE.Group();
    
    // Pistol body (scaled up for better visibility)
    const bodyGeometry = new THREE.BoxGeometry(0.06, 0.22, 0.33);
    const bodyMaterial = new THREE.MeshStandardMaterial({
      color: 0x2a2a2a,
      roughness: 0.4,
      metalness: 0.8
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.set(0, 0, 0);
    group.add(body);
    
    // Pistol grip
    const gripGeometry = new THREE.BoxGeometry(0.05, 0.16, 0.10);
    const gripMaterial = new THREE.MeshStandardMaterial({
      color: 0x1a1a1a,
      roughness: 0.8,
      metalness: 0.2
    });
    const grip = new THREE.Mesh(gripGeometry, gripMaterial);
    grip.position.set(0, -0.10, 0.06);
    grip.rotation.x = -0.3;
    group.add(grip);
    
    // Barrel
    const barrelGeometry = new THREE.CylinderGeometry(0.015, 0.015, 0.22, 8);
    const barrelMaterial = new THREE.MeshStandardMaterial({
      color: 0x3a3a3a,
      roughness: 0.3,
      metalness: 0.9
    });
    const barrel = new THREE.Mesh(barrelGeometry, barrelMaterial);
    barrel.rotation.z = Math.PI / 2;
    barrel.position.set(0, 0.03, -0.24);
    group.add(barrel);
    
    // Trigger guard
    const guardGeometry = new THREE.TorusGeometry(0.035, 0.004, 4, 8, Math.PI);
    const guardMaterial = new THREE.MeshStandardMaterial({
      color: 0x2a2a2a,
      roughness: 0.4,
      metalness: 0.8
    });
    const guard = new THREE.Mesh(guardGeometry, guardMaterial);
    guard.position.set(0, -0.035, 0);
    guard.rotation.z = Math.PI;
    group.add(guard);
    
    // Sight
    const sightGeometry = new THREE.BoxGeometry(0.012, 0.025, 0.06);
    const sightMaterial = new THREE.MeshStandardMaterial({
      color: 0x1a1a1a,
      roughness: 0.6,
      metalness: 0.4
    });
    const frontSight = new THREE.Mesh(sightGeometry, sightMaterial);
    frontSight.position.set(0, 0.11, -0.135);
    group.add(frontSight);
    
    const rearSight = new THREE.Mesh(sightGeometry, sightMaterial);
    rearSight.position.set(0, 0.11, 0.10);
    group.add(rearSight);
    
    // Set position and rotation from config
    group.position.copy(this.config.position);
    group.rotation.x = this.config.rotation.x;
    group.rotation.y = this.config.rotation.y;
    group.rotation.z = this.config.rotation.z;
    
    this.mesh = group;
    
    // Position muzzle flash at barrel end
    if (this.muzzleFlash) {
      this.muzzleFlash.position.set(0, 0.03, -0.35);
      this.muzzleFlash.scale.set(1.0, 1.0, 1);
    }
  }
}