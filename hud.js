export class HUD {
  constructor(game = null) {
    this.game = game;
    this.container = null;
    this.ammoDisplay = null;
    this.healthDisplay = null;
    this.weaponDisplay = null;
    this.init();
  }
  
  init() {
    // Create HUD container
    this.container = document.createElement('div');
    this.container.id = 'hud';
    this.container.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 999;
      font-family: 'Courier New', monospace;
      color: #00ff00;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
      user-select: none;
      pointer-events: none;
    `;
    
    // Create weapon name display
    this.weaponDisplay = document.createElement('div');
    this.weaponDisplay.style.cssText = `
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 5px;
      text-align: right;
    `;
    this.weaponDisplay.textContent = 'PISTOL';
    this.container.appendChild(this.weaponDisplay);
    
    // Create ammo display
    this.ammoDisplay = document.createElement('div');
    this.ammoDisplay.style.cssText = `
      font-size: 32px;
      font-weight: bold;
      text-align: right;
    `;
    this.ammoDisplay.innerHTML = '<span id="current-ammo">17</span> / <span id="reserve-ammo">102</span>';
    this.container.appendChild(this.ammoDisplay);
    
    // Create health display
    const healthContainer = document.createElement('div');
    healthContainer.style.cssText = `
      position: fixed;
      bottom: 20px;
      left: 20px;
      font-size: 24px;
      font-weight: bold;
    `;
    
    const healthLabel = document.createElement('span');
    healthLabel.style.cssText = `
      color: #ff0000;
      margin-right: 10px;
    `;
    healthLabel.textContent = 'HP:';
    healthContainer.appendChild(healthLabel);
    
    this.healthDisplay = document.createElement('span');
    this.healthDisplay.id = 'health-display';
    this.healthDisplay.style.cssText = `
      color: #00ff00;
    `;
    this.healthDisplay.textContent = '100';
    healthContainer.appendChild(this.healthDisplay);
    
    // Add reload indicator
    this.reloadIndicator = document.createElement('div');
    this.reloadIndicator.id = 'reload-indicator';
    this.reloadIndicator.style.cssText = `
      position: fixed;
      top: 60%;
      left: 50%;
      transform: translateX(-50%);
      font-size: 20px;
      font-weight: bold;
      color: #ffff00;
      display: none;
    `;
    this.reloadIndicator.textContent = 'RELOADING...';
    
    // Add low ammo warning
    this.lowAmmoWarning = document.createElement('div');
    this.lowAmmoWarning.id = 'low-ammo';
    this.lowAmmoWarning.style.cssText = `
      position: fixed;
      top: 70%;
      left: 50%;
      transform: translateX(-50%);
      font-size: 18px;
      font-weight: bold;
      color: #ff0000;
      display: none;
    `;
    this.lowAmmoWarning.textContent = 'LOW AMMO';
    
    // Add all elements to document
    document.body.appendChild(this.container);
    document.body.appendChild(healthContainer);
    document.body.appendChild(this.reloadIndicator);
    document.body.appendChild(this.lowAmmoWarning);
  }
  
  updateAmmo(current, reserve) {
    const currentAmmoEl = document.getElementById('current-ammo');
    const reserveAmmoEl = document.getElementById('reserve-ammo');
    
    if (currentAmmoEl) {
      currentAmmoEl.textContent = current;
      
      // Color code based on ammo level
      if (current === 0) {
        currentAmmoEl.style.color = '#ff0000';
      } else if (current <= 5) {
        currentAmmoEl.style.color = '#ffaa00';
      } else {
        currentAmmoEl.style.color = '#00ff00';
      }
    }
    
    if (reserveAmmoEl) {
      reserveAmmoEl.textContent = reserve;
    }
    
    // Show low ammo warning
    if (current <= 5 && current > 0) {
      this.lowAmmoWarning.style.display = 'block';
    } else {
      this.lowAmmoWarning.style.display = 'none';
    }
  }
  
  updateHealth(health) {
    if (this.healthDisplay) {
      this.healthDisplay.textContent = health;
      
      // Color code based on health
      if (health <= 25) {
        this.healthDisplay.style.color = '#ff0000';
      } else if (health <= 50) {
        this.healthDisplay.style.color = '#ffaa00';
      } else {
        this.healthDisplay.style.color = '#00ff00';
      }
    }
  }
  
  updateWeapon(weaponName) {
    if (this.weaponDisplay) {
      this.weaponDisplay.textContent = weaponName.toUpperCase();
    }
  }
  
  showReloading(show) {
    if (this.reloadIndicator) {
      this.reloadIndicator.style.display = show ? 'block' : 'none';
    }
  }
  
  showHitMarker() {
    // Create hit marker element
    const hitMarker = document.createElement('div');
    hitMarker.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 40px;
      height: 40px;
      pointer-events: none;
      z-index: 1001;
    `;
    
    // Create X shape with lines
    const line1 = document.createElement('div');
    line1.style.cssText = `
      position: absolute;
      width: 100%;
      height: 2px;
      background: #ffffff;
      top: 50%;
      transform: translateY(-50%) rotate(45deg);
    `;
    
    const line2 = document.createElement('div');
    line2.style.cssText = `
      position: absolute;
      width: 100%;
      height: 2px;
      background: #ffffff;
      top: 50%;
      transform: translateY(-50%) rotate(-45deg);
    `;
    
    hitMarker.appendChild(line1);
    hitMarker.appendChild(line2);
    document.body.appendChild(hitMarker);
    
    // Remove after animation
    setTimeout(() => {
      hitMarker.style.opacity = '0';
      hitMarker.style.transition = 'opacity 0.2s';
      setTimeout(() => {
        document.body.removeChild(hitMarker);
      }, 200);
    }, 100);
  }
  
  dispose() {
    if (this.container && this.container.parentNode) {
      this.container.parentNode.removeChild(this.container);
    }
    
    // Remove other HUD elements
    const elements = ['health-display', 'reload-indicator', 'low-ammo'];
    elements.forEach(id => {
      const el = document.getElementById(id);
      if (el && el.parentNode) {
        el.parentNode.removeChild(el);
      }
    });
  }
}