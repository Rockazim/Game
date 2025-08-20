export class Crosshair {
  constructor() {
    this.element = null;
    this.dotElement = null;
    this.linesElements = [];
    this.currentSpread = 10;
    this.targetSpread = 10;
    this.init();
  }
  
  init() {
    // Create crosshair container
    this.element = document.createElement('div');
    this.element.id = 'crosshair';
    this.element.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1000;
      pointer-events: none;
      width: 100px;
      height: 100px;
    `;
    
    // Create center dot
    this.dotElement = document.createElement('div');
    this.dotElement.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 2px;
      height: 2px;
      background-color: #00ff00;
      border: 1px solid #000;
      border-radius: 50%;
    `;
    this.element.appendChild(this.dotElement);
    
    // Create crosshair lines
    const lineStyles = `
      position: absolute;
      background-color: #00ff00;
      border: 1px solid #000;
    `;
    
    // Top line
    const topLine = document.createElement('div');
    topLine.className = 'crosshair-line top';
    topLine.style.cssText = lineStyles + `
      width: 2px;
      height: 15px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -100%);
    `;
    this.element.appendChild(topLine);
    this.linesElements.push(topLine);
    
    // Bottom line
    const bottomLine = document.createElement('div');
    bottomLine.className = 'crosshair-line bottom';
    bottomLine.style.cssText = lineStyles + `
      width: 2px;
      height: 15px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, 0);
    `;
    this.element.appendChild(bottomLine);
    this.linesElements.push(bottomLine);
    
    // Left line
    const leftLine = document.createElement('div');
    leftLine.className = 'crosshair-line left';
    leftLine.style.cssText = lineStyles + `
      width: 15px;
      height: 2px;
      top: 50%;
      left: 50%;
      transform: translate(-100%, -50%);
    `;
    this.element.appendChild(leftLine);
    this.linesElements.push(leftLine);
    
    // Right line
    const rightLine = document.createElement('div');
    rightLine.className = 'crosshair-line right';
    rightLine.style.cssText = lineStyles + `
      width: 15px;
      height: 2px;
      top: 50%;
      left: 50%;
      transform: translate(0, -50%);
    `;
    this.element.appendChild(rightLine);
    this.linesElements.push(rightLine);
    
    // Add to document
    document.body.appendChild(this.element);
  }
  
  setWeapon(weaponType) {
    // Adjust crosshair style based on weapon
    switch(weaponType) {
      case 'knife':
        this.setColor('#ffffff');
        this.setStyle('dot');
        break;
      case 'ak47':
        this.setColor('#00ff00');
        this.setStyle('dynamic');
        this.targetSpread = 15;
        break;
      case 'pistol':
      default:
        this.setColor('#00ff00');
        this.setStyle('dynamic');
        this.targetSpread = 10;
        break;
    }
  }
  
  setColor(color) {
    this.dotElement.style.backgroundColor = color;
    this.linesElements.forEach(line => {
      line.style.backgroundColor = color;
    });
  }
  
  setStyle(style) {
    if (style === 'dot') {
      // Hide lines, show only dot
      this.linesElements.forEach(line => {
        line.style.display = 'none';
      });
      this.dotElement.style.width = '4px';
      this.dotElement.style.height = '4px';
    } else {
      // Show lines
      this.linesElements.forEach(line => {
        line.style.display = 'block';
      });
      this.dotElement.style.width = '2px';
      this.dotElement.style.height = '2px';
    }
  }
  
  updateSpread(isMoving, isShooting, isReloading) {
    // Calculate target spread based on player state
    let baseSpread = 10;
    
    if (isReloading) {
      this.targetSpread = baseSpread * 0.5;
    } else if (isShooting) {
      this.targetSpread = baseSpread * 2.5;
    } else if (isMoving) {
      this.targetSpread = baseSpread * 1.5;
    } else {
      this.targetSpread = baseSpread;
    }
    
    // Smoothly interpolate to target spread
    this.currentSpread += (this.targetSpread - this.currentSpread) * 0.1;
    
    // Update line positions
    this.updateLinePositions();
  }
  
  updateLinePositions() {
    const spread = this.currentSpread;
    
    this.linesElements.forEach((line, index) => {
      if (line.className.includes('top')) {
        line.style.transform = `translate(-50%, calc(-100% - ${spread}px))`;
      } else if (line.className.includes('bottom')) {
        line.style.transform = `translate(-50%, ${spread}px)`;
      } else if (line.className.includes('left')) {
        line.style.transform = `translate(calc(-100% - ${spread}px), -50%)`;
      } else if (line.className.includes('right')) {
        line.style.transform = `translate(${spread}px, -50%)`;
      }
    });
  }
  
  hide() {
    if (this.element) {
      this.element.style.display = 'none';
    }
  }
  
  show() {
    if (this.element) {
      this.element.style.display = 'block';
    }
  }
  
  dispose() {
    if (this.element && this.element.parentNode) {
      this.element.parentNode.removeChild(this.element);
    }
  }
}