import * as THREE from 'three';
import { WeaponBase } from './weaponBase.js';

export class Knife extends WeaponBase {
  constructor(scene) {
    const config = {
      name: 'Knife',
      damage: 55,
      backstabDamage: 100,
      range: 2,
      attackRate: 0.8,
      switchTime: 0.3,
      isMelee: true,
      position: new THREE.Vector3(0.25, -0.32, -0.4),
      rotation: new THREE.Vector3(-0.5, 0.2, 0.1)
    };
    
    super(scene, config);
    
    this.isAttacking = false;
    this.attackAnimation = 0;
  }
  
  createWeaponMesh() {
    const group = new THREE.Group();
    
    // Blade (scaled up)
    const bladeShape = new THREE.Shape();
    bladeShape.moveTo(0, 0);
    bladeShape.lineTo(0.025, 0);
    bladeShape.lineTo(0.015, 0.28);
    bladeShape.lineTo(0.008, 0.35);
    bladeShape.lineTo(0, 0.35);
    
    const bladeGeometry = new THREE.ExtrudeGeometry(bladeShape, {
      steps: 1,
      depth: 0.005,
      bevelEnabled: false
    });
    
    const bladeMaterial = new THREE.MeshStandardMaterial({
      color: 0xc0c0c0,
      roughness: 0.2,
      metalness: 0.95,
      side: THREE.DoubleSide
    });
    
    const blade = new THREE.Mesh(bladeGeometry, bladeMaterial);
    blade.rotation.x = Math.PI / 2;
    blade.position.set(0, 0, -0.175);
    group.add(blade);
    
    // Handle
    const handleGeometry = new THREE.CylinderGeometry(0.025, 0.025, 0.18, 8);
    const handleMaterial = new THREE.MeshStandardMaterial({
      color: 0x2a2a2a,
      roughness: 0.8,
      metalness: 0.2
    });
    const handle = new THREE.Mesh(handleGeometry, handleMaterial);
    handle.position.set(0, 0, 0.09);
    handle.rotation.x = Math.PI / 2;
    group.add(handle);
    
    // Handle grip texture
    const gripGeometry = new THREE.CylinderGeometry(0.028, 0.028, 0.12, 8);
    const gripMaterial = new THREE.MeshStandardMaterial({
      color: 0x1a1a1a,
      roughness: 0.9,
      metalness: 0.1
    });
    const grip = new THREE.Mesh(gripGeometry, gripMaterial);
    grip.position.set(0, 0, 0.09);
    grip.rotation.x = Math.PI / 2;
    group.add(grip);
    
    // Guard
    const guardGeometry = new THREE.BoxGeometry(0.09, 0.012, 0.012);
    const guardMaterial = new THREE.MeshStandardMaterial({
      color: 0x3a3a3a,
      roughness: 0.4,
      metalness: 0.8
    });
    const guard = new THREE.Mesh(guardGeometry, guardMaterial);
    guard.position.set(0, 0, 0);
    group.add(guard);
    
    // Pommel
    const pommelGeometry = new THREE.SphereGeometry(0.026, 8, 8);
    const pommel = new THREE.Mesh(pommelGeometry, handleMaterial);
    pommel.position.set(0, 0, 0.18);
    group.add(pommel);
    
    // Set position and rotation from config
    group.position.copy(this.config.position);
    group.rotation.x = this.config.rotation.x;
    group.rotation.y = this.config.rotation.y;
    group.rotation.z = this.config.rotation.z;
    
    this.mesh = group;
  }
  
  fire() {
    if (this.isAttacking) {
      return false;
    }
    
    this.isAttacking = true;
    this.attackAnimation = 0;
    
    // Reset after attack duration
    setTimeout(() => {
      this.isAttacking = false;
    }, this.config.attackRate * 1000);
    
    return true;
  }
  
  reload() {
    // Knife doesn't reload
    return false;
  }
  
  update(deltaTime, isMoving, isSprinting) {
    super.update(deltaTime, isMoving, isSprinting);
    
    // Handle attack animation
    if (this.isAttacking && this.mesh) {
      this.attackAnimation += deltaTime * 8;
      
      if (this.attackAnimation < 1) {
        // Swing forward
        const swingProgress = this.attackAnimation;
        this.mesh.rotation.x = this.config.rotation.x - swingProgress * 0.8;
        this.mesh.position.z = this.config.position.z - swingProgress * 0.3;
        this.mesh.position.y = this.config.position.y + swingProgress * 0.1;
      } else if (this.attackAnimation < 2) {
        // Return to position
        const returnProgress = this.attackAnimation - 1;
        this.mesh.rotation.x = this.config.rotation.x - 0.8 * (1 - returnProgress);
        this.mesh.position.z = this.config.position.z - 0.3 * (1 - returnProgress);
        this.mesh.position.y = this.config.position.y + 0.1 * (1 - returnProgress);
      }
    }
  }
}