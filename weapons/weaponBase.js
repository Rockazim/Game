import * as THREE from 'three';

export class WeaponBase {
  constructor(scene, config) {
    this.scene = scene;
    this.config = config;
    this.mesh = null;
    this.muzzleFlash = null;
    
    // Weapon state
    this.currentAmmo = config.magSize || 30;
    this.reserveAmmo = config.maxAmmo || 90;
    this.isReloading = false;
    this.isFiring = false;
    this.lastFireTime = 0;
    this.reloadStartTime = 0;
    
    // Animation values
    this.recoilOffset = new THREE.Vector3();
    this.swayOffset = new THREE.Vector3();
    this.idleOffset = new THREE.Vector3();
    
    this.createWeaponMesh();
    this.createMuzzleFlash();
  }
  
  createWeaponMesh() {
    // Override in child classes
  }
  
  createMuzzleFlash() {
    // Create muzzle flash effect
    const geometry = new THREE.PlaneGeometry(0.3, 0.3);
    const material = new THREE.MeshBasicMaterial({
      color: 0xffaa00,
      transparent: true,
      opacity: 0,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending
    });
    
    this.muzzleFlash = new THREE.Mesh(geometry, material);
    this.muzzleFlash.visible = false;
    
    if (this.mesh) {
      this.mesh.add(this.muzzleFlash);
      // Position at barrel end (override in child classes)
      this.muzzleFlash.position.set(0, 0, -1);
    }
  }
  
  fire() {
    if (this.isReloading || this.currentAmmo <= 0) {
      return false;
    }
    
    const now = Date.now();
    const fireDelay = 60000 / this.config.fireRate; // Convert RPM to ms
    
    if (now - this.lastFireTime < fireDelay) {
      return false;
    }
    
    this.currentAmmo--;
    this.lastFireTime = now;
    
    // Add recoil
    this.addRecoil();
    
    // Show muzzle flash
    this.showMuzzleFlash();
    
    return true;
  }
  
  reload() {
    if (this.isReloading || this.currentAmmo === this.config.magSize || this.reserveAmmo <= 0) {
      return false;
    }
    
    this.isReloading = true;
    this.reloadStartTime = Date.now();
    
    // Start reload animation
    setTimeout(() => {
      const neededAmmo = this.config.magSize - this.currentAmmo;
      const ammoToReload = Math.min(neededAmmo, this.reserveAmmo);
      
      this.currentAmmo += ammoToReload;
      this.reserveAmmo -= ammoToReload;
      this.isReloading = false;
    }, this.config.reloadTime * 1000);
    
    return true;
  }
  
  addRecoil() {
    // Add weapon kick
    const recoilAmount = this.config.recoilAmount || 0.05;
    this.recoilOffset.z = recoilAmount;
    this.recoilOffset.y = recoilAmount * 0.5;
    this.recoilOffset.x = (Math.random() - 0.5) * recoilAmount * 0.3;
  }
  
  showMuzzleFlash() {
    if (!this.muzzleFlash) return;
    
    this.muzzleFlash.visible = true;
    this.muzzleFlash.material.opacity = 1;
    
    // Randomize rotation for variety
    this.muzzleFlash.rotation.z = Math.random() * Math.PI * 2;
    
    // Fade out quickly
    setTimeout(() => {
      this.muzzleFlash.visible = false;
      this.muzzleFlash.material.opacity = 0;
    }, 50);
  }
  
  update(deltaTime, isMoving, isSprinting) {
    // Update recoil recovery
    this.recoilOffset.multiplyScalar(1 - deltaTime * 10);
    
    // Update weapon sway based on movement
    if (isMoving) {
      const swayAmount = isSprinting ? 0.02 : 0.01;
      const time = Date.now() * 0.003;
      this.swayOffset.x = Math.sin(time) * swayAmount;
      this.swayOffset.y = Math.abs(Math.sin(time * 2)) * swayAmount;
    } else {
      this.swayOffset.multiplyScalar(1 - deltaTime * 5);
    }
    
    // Update idle animation
    const idleTime = Date.now() * 0.001;
    this.idleOffset.x = Math.sin(idleTime * 1.5) * 0.002;
    this.idleOffset.y = Math.sin(idleTime * 2) * 0.003;
    
    // Apply all offsets to weapon mesh
    if (this.mesh) {
      const totalOffset = new THREE.Vector3()
        .add(this.recoilOffset)
        .add(this.swayOffset)
        .add(this.idleOffset);
      
      this.mesh.position.x = this.config.position.x + totalOffset.x;
      this.mesh.position.y = this.config.position.y + totalOffset.y;
      this.mesh.position.z = this.config.position.z + totalOffset.z;
      
      // Add slight rotation from recoil
      this.mesh.rotation.x = this.config.rotation.x - this.recoilOffset.z * 0.5;
    }
  }
  
  onEquip() {
    if (this.mesh) {
      this.mesh.visible = true;
    }
  }
  
  onUnequip() {
    if (this.mesh) {
      this.mesh.visible = false;
    }
  }
  
  dispose() {
    if (this.mesh) {
      if (this.mesh.parent) {
        this.mesh.parent.remove(this.mesh);
      }
      
      // Dispose geometry and materials
      if (this.mesh.geometry) this.mesh.geometry.dispose();
      if (this.mesh.material) {
        if (Array.isArray(this.mesh.material)) {
          this.mesh.material.forEach(m => m.dispose());
        } else {
          this.mesh.material.dispose();
        }
      }
    }
  }
}