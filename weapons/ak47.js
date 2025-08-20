import * as THREE from 'three';
import { WeaponBase } from './weaponBase.js';

export class AK47 extends WeaponBase {
  constructor(scene) {
    const config = {
      name: 'AK-47',
      damage: 36,
      fireRate: 600, // RPM
      accuracy: 0.85,
      range: 100,
      magSize: 30,
      maxAmmo: 120,
      reloadTime: 2.5,
      switchTime: 1.0,
      recoilAmount: 0.06,
      isAutomatic: true,
      position: new THREE.Vector3(0.18, -0.33, -0.42),
      rotation: new THREE.Vector3(-0.05, 0.05, 0)
    };
    
    super(scene, config);
  }
  
  createWeaponMesh() {
    const group = new THREE.Group();
    
    // Rifle body (scaled up for visibility)
    const bodyGeometry = new THREE.BoxGeometry(0.07, 0.14, 0.8);
    const bodyMaterial = new THREE.MeshStandardMaterial({
      color: 0x3a2a1a,
      roughness: 0.7,
      metalness: 0.3
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.set(0, 0, 0);
    group.add(body);
    
    // Stock
    const stockGeometry = new THREE.BoxGeometry(0.06, 0.12, 0.3);
    const stockMaterial = new THREE.MeshStandardMaterial({
      color: 0x4a3520,
      roughness: 0.9,
      metalness: 0.1
    });
    const stock = new THREE.Mesh(stockGeometry, stockMaterial);
    stock.position.set(0, -0.03, 0.4);
    stock.rotation.x = 0.1;
    group.add(stock);
    
    // Barrel
    const barrelGeometry = new THREE.CylinderGeometry(0.018, 0.018, 0.48, 8);
    const barrelMaterial = new THREE.MeshStandardMaterial({
      color: 0x2a2a2a,
      roughness: 0.3,
      metalness: 0.9
    });
    const barrel = new THREE.Mesh(barrelGeometry, barrelMaterial);
    barrel.rotation.z = Math.PI / 2;
    barrel.position.set(0, 0.02, -0.52);
    group.add(barrel);
    
    // Magazine
    const magGeometry = new THREE.BoxGeometry(0.035, 0.18, 0.09);
    const magMaterial = new THREE.MeshStandardMaterial({
      color: 0x2a2a2a,
      roughness: 0.5,
      metalness: 0.7
    });
    const magazine = new THREE.Mesh(magGeometry, magMaterial);
    magazine.position.set(0, -0.12, 0);
    magazine.rotation.x = -0.15;
    group.add(magazine);
    
    // Grip
    const gripGeometry = new THREE.BoxGeometry(0.045, 0.09, 0.06);
    const gripMaterial = new THREE.MeshStandardMaterial({
      color: 0x3a2a1a,
      roughness: 0.8,
      metalness: 0.2
    });
    const grip = new THREE.Mesh(gripGeometry, gripMaterial);
    grip.position.set(0, -0.09, 0.15);
    grip.rotation.x = -0.2;
    group.add(grip);
    
    // Front sight
    const frontSightGeometry = new THREE.BoxGeometry(0.018, 0.035, 0.012);
    const sightMaterial = new THREE.MeshStandardMaterial({
      color: 0x1a1a1a,
      roughness: 0.6,
      metalness: 0.4
    });
    const frontSight = new THREE.Mesh(frontSightGeometry, sightMaterial);
    frontSight.position.set(0, 0.09, -0.3);
    group.add(frontSight);
    
    // Rear sight
    const rearSightGeometry = new THREE.BoxGeometry(0.035, 0.035, 0.012);
    const rearSight = new THREE.Mesh(rearSightGeometry, sightMaterial);
    rearSight.position.set(0, 0.09, 0.18);
    group.add(rearSight);
    
    // Trigger guard
    const guardGeometry = new THREE.TorusGeometry(0.045, 0.004, 4, 8, Math.PI);
    const guardMaterial = new THREE.MeshStandardMaterial({
      color: 0x2a2a2a,
      roughness: 0.4,
      metalness: 0.8
    });
    const guard = new THREE.Mesh(guardGeometry, guardMaterial);
    guard.position.set(0, -0.045, 0.06);
    guard.rotation.z = Math.PI;
    group.add(guard);
    
    // Gas tube
    const gasGeometry = new THREE.CylinderGeometry(0.009, 0.009, 0.36, 6);
    const gas = new THREE.Mesh(gasGeometry, barrelMaterial);
    gas.rotation.z = Math.PI / 2;
    gas.position.set(0, 0.06, -0.18);
    group.add(gas);
    
    // Set position and rotation from config
    group.position.copy(this.config.position);
    group.rotation.x = this.config.rotation.x;
    group.rotation.y = this.config.rotation.y;
    group.rotation.z = this.config.rotation.z;
    
    this.mesh = group;
    
    // Position muzzle flash at barrel end
    if (this.muzzleFlash) {
      this.muzzleFlash.position.set(0, 0.02, -0.76);
      this.muzzleFlash.scale.set(1.5, 1.5, 1);
    }
  }
}