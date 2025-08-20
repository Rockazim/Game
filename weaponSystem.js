import * as THREE from 'three';
import { Pistol } from './weapons/pistol.js';
import { AK47 } from './weapons/ak47.js';
import { Knife } from './weapons/knife.js';

export class WeaponSystem {
  constructor(scene, weaponMount, camera) {
    this.scene = scene;
    this.weaponMount = weaponMount;
    this.camera = camera;
    
    this.weapons = {};
    this.currentWeapon = null;
    this.currentWeaponType = null;
    this.isSwitching = false;
    this.isAutoFiring = false;
    
    this.init();
  }
  
  init() {
    // Initialize all weapons
    this.weapons.pistol = new Pistol(this.scene);
    this.weapons.ak47 = new AK47(this.scene);
    this.weapons.knife = new Knife(this.scene);
    
    // Add all weapon meshes to the weapon mount but hide them
    Object.values(this.weapons).forEach(weapon => {
      if (weapon.mesh) {
        this.weaponMount.add(weapon.mesh);
        weapon.mesh.visible = false;
      }
    });
    
    // Equip default weapon (pistol)
    this.switchWeapon('pistol');
  }
  
  switchWeapon(weaponType) {
    if (this.isSwitching || !this.weapons[weaponType] || weaponType === this.currentWeaponType) {
      return false;
    }
    
    this.isSwitching = true;
    this.isAutoFiring = false;
    
    // Get switch time from current weapon or use default
    const switchTime = this.currentWeapon ? this.currentWeapon.config.switchTime : 0.5;
    
    // Hide current weapon
    if (this.currentWeapon) {
      this.currentWeapon.onUnequip();
    }
    
    // Animation for weapon lowering
    if (this.weaponMount) {
      const originalY = this.weaponMount.position.y;
      this.weaponMount.position.y -= 0.5;
      
      // Switch and raise new weapon
      setTimeout(() => {
        this.currentWeapon = this.weapons[weaponType];
        this.currentWeaponType = weaponType;
        this.currentWeapon.onEquip();
        
        // Raise weapon animation
        this.weaponMount.position.y = originalY;
        
        setTimeout(() => {
          this.isSwitching = false;
        }, switchTime * 500);
      }, switchTime * 500);
    }
    
    return true;
  }
  
  startShooting() {
    if (this.isSwitching || !this.currentWeapon) {
      return false;
    }
    
    // Check if weapon is automatic
    if (this.currentWeapon.config.isAutomatic) {
      this.isAutoFiring = true;
    }
    
    return this.fire();
  }
  
  stopShooting() {
    this.isAutoFiring = false;
  }
  
  fire() {
    if (!this.currentWeapon || this.isSwitching) {
      return null;
    }
    
    const success = this.currentWeapon.fire();
    
    if (success) {
      // Return shot data for hit detection
      return {
        damage: this.currentWeapon.config.damage,
        range: this.currentWeapon.config.range,
        accuracy: this.currentWeapon.config.accuracy,
        isMelee: this.currentWeapon.config.isMelee || false
      };
    }
    
    // Check if we need to reload
    if (this.currentWeapon.currentAmmo === 0) {
      this.reload();
    }
    
    return null;
  }
  
  reload() {
    if (!this.currentWeapon || this.isSwitching) {
      return false;
    }
    
    return this.currentWeapon.reload();
  }
  
  update(deltaTime, isMoving, isSprinting) {
    if (!this.currentWeapon) return;
    
    // Update current weapon
    this.currentWeapon.update(deltaTime, isMoving, isSprinting);
    
    // Handle automatic fire
    if (this.isAutoFiring && this.currentWeapon.config.isAutomatic) {
      this.fire();
    }
  }
  
  getAmmoInfo() {
    if (!this.currentWeapon) {
      return { current: 0, reserve: 0 };
    }
    
    return {
      current: this.currentWeapon.currentAmmo,
      reserve: this.currentWeapon.reserveAmmo
    };
  }
  
  isReloading() {
    return this.currentWeapon && this.currentWeapon.isReloading;
  }
  
  getCurrentWeaponName() {
    return this.currentWeapon ? this.currentWeapon.config.name : '';
  }
  
  addSway(amount, time) {
    if (!this.currentWeapon || !this.currentWeapon.mesh) return;
    
    // Add additional movement sway
    this.currentWeapon.swayOffset.x += Math.sin(time * 8) * amount;
    this.currentWeapon.swayOffset.y += Math.abs(Math.sin(time * 16)) * amount * 0.5;
  }
  
  dispose() {
    Object.values(this.weapons).forEach(weapon => {
      weapon.dispose();
    });
    
    this.weapons = {};
    this.currentWeapon = null;
  }
}