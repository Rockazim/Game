/**
 * Sensitivity Converter UI Component
 * Provides user interface for converting mouse sensitivity between games
 */

import { SensitivityConverter } from './sensitivityConverter.js';

export class SensitivityUI {
  constructor(game) {
    this.game = game;
    this.converter = new SensitivityConverter();
    this.isVisible = false;
    this.currentDPI = 800; // Default DPI
    this.currentGame = 'csgo'; // Default source game
    this.currentSensitivity = 2.0; // Default sensitivity
    
    this.createUI();
    this.setupEventListeners();
  }

  createUI() {
    // Create main container
    this.container = document.createElement('div');
    this.container.id = 'sensitivity-converter';
    this.container.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 600px;
      max-width: 90vw;
      max-height: 90vh;
      background: rgba(0, 0, 0, 0.95);
      color: white;
      font-family: 'Courier New', monospace;
      font-size: 14px;
      border: 2px solid #4CAF50;
      border-radius: 10px;
      padding: 20px;
      z-index: 10000;
      display: none;
      overflow-y: auto;
      box-shadow: 0 0 30px rgba(76, 175, 80, 0.3);
    `;

    // Create header
    const header = document.createElement('div');
    header.style.cssText = `
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 1px solid #4CAF50;
    `;
    
    const title = document.createElement('h2');
    title.textContent = 'Sensitivity Converter';
    title.style.cssText = `
      margin: 0;
      color: #4CAF50;
      font-size: 20px;
    `;

    const closeButton = document.createElement('button');
    closeButton.textContent = '×';
    closeButton.style.cssText = `
      background: none;
      border: none;
      color: white;
      font-size: 24px;
      cursor: pointer;
      padding: 0;
      width: 30px;
      height: 30px;
    `;
    closeButton.onclick = () => this.hide();

    header.appendChild(title);
    header.appendChild(closeButton);

    // Create input section
    const inputSection = document.createElement('div');
    inputSection.style.cssText = `
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 15px;
      margin-bottom: 20px;
      padding: 15px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 5px;
    `;

    // Source game dropdown
    const gameLabel = document.createElement('label');
    gameLabel.textContent = 'From Game:';
    gameLabel.style.color = '#4CAF50';
    
    this.gameSelect = document.createElement('select');
    this.gameSelect.style.cssText = `
      background: #333;
      color: white;
      border: 1px solid #4CAF50;
      border-radius: 3px;
      padding: 5px;
      font-family: inherit;
    `;
    
    const games = this.converter.getAvailableGames();
    for (const [key, name] of Object.entries(games)) {
      if (key === 'hyperfps') continue; // Skip our own game in source list
      const option = document.createElement('option');
      option.value = key;
      option.textContent = name;
      this.gameSelect.appendChild(option);
    }
    this.gameSelect.value = 'csgo';

    // DPI input
    const dpiLabel = document.createElement('label');
    dpiLabel.textContent = 'Mouse DPI:';
    dpiLabel.style.color = '#4CAF50';
    
    this.dpiInput = document.createElement('input');
    this.dpiInput.type = 'number';
    this.dpiInput.value = '800';
    this.dpiInput.min = '100';
    this.dpiInput.max = '10000';
    this.dpiInput.style.cssText = `
      background: #333;
      color: white;
      border: 1px solid #4CAF50;
      border-radius: 3px;
      padding: 5px;
      font-family: inherit;
    `;

    // Sensitivity input
    const sensLabel = document.createElement('label');
    sensLabel.textContent = 'Sensitivity:';
    sensLabel.style.color = '#4CAF50';
    
    this.sensitivityInput = document.createElement('input');
    this.sensitivityInput.type = 'number';
    this.sensitivityInput.value = '2.0';
    this.sensitivityInput.step = '0.001';
    this.sensitivityInput.min = '0.001';
    this.sensitivityInput.style.cssText = `
      background: #333;
      color: white;
      border: 1px solid #4CAF50;
      border-radius: 3px;
      padding: 5px;
      font-family: inherit;
    `;

    const gameDiv = document.createElement('div');
    gameDiv.appendChild(gameLabel);
    gameDiv.appendChild(this.gameSelect);

    const dpiDiv = document.createElement('div');
    dpiDiv.appendChild(dpiLabel);
    dpiDiv.appendChild(this.dpiInput);

    const sensDiv = document.createElement('div');
    sensDiv.appendChild(sensLabel);
    sensDiv.appendChild(this.sensitivityInput);

    inputSection.appendChild(gameDiv);
    inputSection.appendChild(dpiDiv);
    inputSection.appendChild(sensDiv);

    // Create apply to game button and direct slider section
    const applySection = document.createElement('div');
    applySection.style.cssText = `
      margin-bottom: 20px;
      padding: 15px;
      background: rgba(76, 175, 80, 0.1);
      border-radius: 5px;
    `;

    // Conversion result section
    const conversionResult = document.createElement('div');
    conversionResult.style.cssText = `
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 15px;
    `;

    const applyButton = document.createElement('button');
    applyButton.textContent = `Apply to ${this.converter.gameSettings.hyperfps.name}`;
    applyButton.style.cssText = `
      background: #4CAF50;
      color: white;
      border: none;
      border-radius: 5px;
      padding: 10px 20px;
      cursor: pointer;
      font-family: inherit;
      font-weight: bold;
    `;
    applyButton.onclick = () => this.applySensitivity();

    this.convertedValue = document.createElement('span');
    this.convertedValue.style.cssText = `
      color: #4CAF50;
      font-weight: bold;
      font-size: 16px;
    `;

    conversionResult.appendChild(applyButton);
    conversionResult.appendChild(this.convertedValue);
    applySection.appendChild(conversionResult);

    // Direct sensitivity adjustment section
    const directSection = document.createElement('div');
    directSection.style.cssText = `
      border-top: 1px solid rgba(76, 175, 80, 0.3);
      padding-top: 15px;
    `;

    const directTitle = document.createElement('h3');
    directTitle.textContent = 'Direct Sensitivity Control';
    directTitle.style.cssText = `
      margin: 0 0 10px 0;
      color: #4CAF50;
      font-size: 16px;
    `;
    directSection.appendChild(directTitle);

    // Current sensitivity display
    this.currentSensDisplay = document.createElement('div');
    this.currentSensDisplay.style.cssText = `
      font-size: 14px;
      margin-bottom: 10px;
      text-align: center;
      color: #ffff00;
      font-weight: bold;
    `;
    this.updateCurrentSensitivityDisplay();
    directSection.appendChild(this.currentSensDisplay);

    // Sensitivity slider
    this.directSlider = document.createElement('input');
    this.directSlider.type = 'range';
    this.directSlider.min = '0.0001';
    this.directSlider.max = '0.01';
    this.directSlider.step = '0.000001';
    this.directSlider.value = this.game?.rotationSpeed || '0.002';
    this.directSlider.style.cssText = `
      width: 100%;
      height: 8px;
      background: #333;
      outline: none;
      border-radius: 4px;
      margin: 10px 0;
      cursor: pointer;
      -webkit-appearance: none;
      appearance: none;
    `;

    // Add slider styles
    if (!document.getElementById('sensitivity-slider-styles')) {
      const sliderStyles = document.createElement('style');
      sliderStyles.id = 'sensitivity-slider-styles';
      sliderStyles.textContent = `
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 18px;
          height: 18px;
          background: #4CAF50;
          border-radius: 50%;
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
        
        input[type="range"]::-moz-range-thumb {
          width: 18px;
          height: 18px;
          background: #4CAF50;
          border-radius: 50%;
          cursor: pointer;
          border: 2px solid #ffffff;
          box-sizing: border-box;
          box-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
      `;
      document.head.appendChild(sliderStyles);
    }

    // Slider event listener
    this.directSlider.addEventListener('input', (e) => {
      const value = parseFloat(e.target.value);
      this.updateCurrentSensitivityDisplay(value);
      
      // Apply to game immediately
      if (this.game && this.game.rotationSpeed !== undefined) {
        this.game.rotationSpeed = value;
        
        // Save to localStorage
        localStorage.setItem('hyperfps_sensitivity', value.toString());
      }
    });

    directSection.appendChild(this.directSlider);

    // Quick adjustment buttons
    const quickButtons = document.createElement('div');
    quickButtons.style.cssText = `
      display: flex;
      gap: 5px;
      margin-top: 10px;
    `;

    const adjustments = [
      { name: 'Low', value: 0.0008 },
      { name: 'Medium', value: 0.0015 },
      { name: 'High', value: 0.003 },
      { name: 'Reset', value: 0.002 }
    ];

    adjustments.forEach(adj => {
      const btn = document.createElement('button');
      btn.textContent = adj.name;
      btn.style.cssText = `
        flex: 1;
        background: #333;
        color: #4CAF50;
        border: 1px solid #4CAF50;
        border-radius: 3px;
        padding: 6px;
        cursor: pointer;
        font-family: inherit;
        font-size: 12px;
      `;
      
      btn.addEventListener('click', () => {
        this.directSlider.value = adj.value;
        this.updateCurrentSensitivityDisplay(adj.value);
        
        if (this.game && this.game.rotationSpeed !== undefined) {
          this.game.rotationSpeed = adj.value;
          localStorage.setItem('hyperfps_sensitivity', adj.value.toString());
        }
      });
      
      quickButtons.appendChild(btn);
    });

    directSection.appendChild(quickButtons);
    applySection.appendChild(directSection);

    // Create results section
    this.resultsSection = document.createElement('div');
    this.resultsSection.style.cssText = `
      background: rgba(255, 255, 255, 0.05);
      border-radius: 5px;
      padding: 15px;
    `;

    // Create quick presets section
    const presetsSection = document.createElement('div');
    presetsSection.style.cssText = `
      margin-top: 15px;
      padding: 10px;
      background: rgba(255, 255, 255, 0.03);
      border-radius: 5px;
    `;

    const presetsTitle = document.createElement('h3');
    presetsTitle.textContent = 'Quick Presets';
    presetsTitle.style.cssText = `
      margin: 0 0 10px 0;
      color: #4CAF50;
      font-size: 14px;
    `;

    const presetButtons = document.createElement('div');
    presetButtons.style.cssText = `
      display: flex;
      gap: 5px;
      flex-wrap: wrap;
    `;

    // Add preset buttons for common settings
    const presets = [
      { name: 'CS:GO Pro Low', game: 'csgo', sens: 1.5, dpi: 400 },
      { name: 'CS:GO Pro High', game: 'csgo', sens: 2.5, dpi: 800 },
      { name: 'Valorant Pro', game: 'valorant', sens: 0.4, dpi: 800 },
      { name: 'Krunker Default', game: 'krunker', sens: 1.4, dpi: 800 }
    ];

    presets.forEach(preset => {
      const btn = document.createElement('button');
      btn.textContent = preset.name;
      btn.style.cssText = `
        background: #333;
        color: white;
        border: 1px solid #4CAF50;
        border-radius: 3px;
        padding: 5px 10px;
        cursor: pointer;
        font-family: inherit;
        font-size: 12px;
      `;
      btn.onclick = () => this.loadPreset(preset);
      presetButtons.appendChild(btn);
    });

    presetsSection.appendChild(presetsTitle);
    presetsSection.appendChild(presetButtons);

    // Assemble the UI
    this.container.appendChild(header);
    this.container.appendChild(inputSection);
    this.container.appendChild(applySection);
    this.container.appendChild(this.resultsSection);
    this.container.appendChild(presetsSection);

    document.body.appendChild(this.container);
  }

  setupEventListeners() {
    // Update calculations when inputs change
    this.gameSelect.addEventListener('change', () => this.updateConversions());
    this.dpiInput.addEventListener('input', () => this.updateConversions());
    this.sensitivityInput.addEventListener('input', () => this.updateConversions());

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      // Open converter with Ctrl+M
      if (e.ctrlKey && e.key === 'm' && !this.isVisible) {
        e.preventDefault();
        this.show();
      }
      // Close with Escape
      if (e.key === 'Escape' && this.isVisible) {
        this.hide();
      }
    });
  }

  show() {
    this.container.style.display = 'block';
    this.isVisible = true;
    this.updateConversions();
    
    // Sync direct slider with current game sensitivity
    if (this.directSlider && this.game && this.game.rotationSpeed !== undefined) {
      this.directSlider.value = this.game.rotationSpeed;
      this.updateCurrentSensitivityDisplay(this.game.rotationSpeed);
    }
    
    // Disable game controls while UI is open
    if (document.pointerLockElement) {
      document.exitPointerLock();
    }
  }

  hide() {
    this.container.style.display = 'none';
    this.isVisible = false;
  }

  updateCurrentSensitivityDisplay(value = null) {
    if (this.currentSensDisplay) {
      const currentValue = value || (this.game?.rotationSpeed || 0.002);
      this.currentSensDisplay.textContent = `Current: ${currentValue.toFixed(6)}`;
    }
  }

  updateConversions() {
    const sensitivity = parseFloat(this.sensitivityInput.value);
    const dpi = parseInt(this.dpiInput.value);
    const fromGame = this.gameSelect.value;

    if (isNaN(sensitivity) || isNaN(dpi) || sensitivity <= 0 || dpi <= 0) {
      this.resultsSection.innerHTML = '<p style="color: #ff6b6b;">Please enter valid sensitivity and DPI values.</p>';
      return;
    }

    try {
      // Calculate conversion to our game
      const convertedSens = this.converter.convertSensitivity(sensitivity, dpi, fromGame, 'hyperfps');
      this.convertedValue.textContent = `→ ${convertedSens}`;

      // Get all conversions for reference
      const allConversions = this.converter.getAllConversions(sensitivity, dpi, fromGame);
      const cm360 = this.converter.calculateCm360(sensitivity, dpi, fromGame);
      
      // Calculate our game's cm/360 to verify the conversion
      const ourGameCm360 = this.converter.calculateCm360(convertedSens, dpi, 'hyperfps');
      console.log(`Debug: Original ${fromGame} cm/360: ${cm360.toFixed(2)}, HyperFPS cm/360: ${ourGameCm360.toFixed(2)} (should match!)`);

      // Build results HTML
      let html = `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
          <div>
            <h3 style="color: #4CAF50; margin: 0 0 10px 0; font-size: 16px;">Current Settings</h3>
            <p><strong>Game:</strong> ${this.converter.gameSettings[fromGame].name}</p>
            <p><strong>Sensitivity:</strong> ${sensitivity}</p>
            <p><strong>DPI:</strong> ${dpi}</p>
            <p><strong>eDPI:</strong> ${this.converter.calculateEDPI(sensitivity, dpi)}</p>
            <p><strong>cm/360°:</strong> ${cm360.toFixed(2)} cm</p>
          </div>
          <div>
            <h3 style="color: #4CAF50; margin: 0 0 10px 0; font-size: 16px;">Conversions</h3>
      `;

      // Add conversions for other games
      const sortedGames = Object.entries(allConversions).sort(([a], [b]) => 
        this.converter.gameSettings[a].name.localeCompare(this.converter.gameSettings[b].name)
      );

      sortedGames.forEach(([gameKey, data]) => {
        if (!data.error) {
          const isOurGame = gameKey === 'hyperfps';
          html += `<p style="${isOurGame ? 'color: #4CAF50; font-weight: bold;' : ''}">
            <strong>${data.name}:</strong> ${data.sensitivity}
          </p>`;
        }
      });

      html += '</div></div>';

      // Add professional reference if available
      const proSettings = this.converter.getProPlayerSettings(fromGame);
      if (proSettings.length > 0) {
        html += `
          <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #333;">
            <h3 style="color: #4CAF50; margin: 0 0 10px 0; font-size: 14px;">Pro Player Reference (${this.converter.gameSettings[fromGame].name})</h3>
            <div style="font-size: 12px; color: #ccc;">
        `;
        
        proSettings.forEach(player => {
          html += `<span style="margin-right: 15px;">${player.name}: ${player.sensitivity}@${player.dpi}DPI</span>`;
        });
        
        html += '</div></div>';
      }

      this.resultsSection.innerHTML = html;

    } catch (error) {
      this.resultsSection.innerHTML = `<p style="color: #ff6b6b;">Error: ${error.message}</p>`;
    }
  }

  applySensitivity() {
    const sensitivity = parseFloat(this.sensitivityInput.value);
    const dpi = parseInt(this.dpiInput.value);
    const fromGame = this.gameSelect.value;

    if (isNaN(sensitivity) || isNaN(dpi)) {
      alert('Please enter valid sensitivity and DPI values.');
      return;
    }

    try {
      const convertedSens = this.converter.convertSensitivity(sensitivity, dpi, fromGame, 'hyperfps');
      
      // Apply to game
      if (this.game && this.game.rotationSpeed !== undefined) {
        this.game.rotationSpeed = convertedSens;
        
        // Show confirmation
        this.showNotification(`Sensitivity applied: ${convertedSens}`, '#4CAF50');
        
        // Optionally save to localStorage for persistence
        localStorage.setItem('hyperfps_sensitivity', convertedSens.toString());
      }
    } catch (error) {
      this.showNotification(`Error: ${error.message}`, '#ff6b6b');
    }
  }

  loadPreset(preset) {
    this.gameSelect.value = preset.game;
    this.dpiInput.value = preset.dpi.toString();
    this.sensitivityInput.value = preset.sens.toString();
    this.updateConversions();
  }

  showNotification(message, color = '#4CAF50') {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: ${color};
      color: white;
      padding: 10px 20px;
      border-radius: 5px;
      font-family: 'Courier New', monospace;
      font-weight: bold;
      z-index: 10001;
      opacity: 0;
      transition: opacity 0.3s;
    `;
    
    document.body.appendChild(notification);
    
    // Fade in
    setTimeout(() => notification.style.opacity = '1', 10);
    
    // Fade out and remove
    setTimeout(() => {
      notification.style.opacity = '0';
      setTimeout(() => document.body.removeChild(notification), 300);
    }, 3000);
  }

  // Load saved sensitivity on startup
  loadSavedSensitivity() {
    const saved = localStorage.getItem('hyperfps_sensitivity');
    if (saved && this.game) {
      const sensitivity = parseFloat(saved);
      if (!isNaN(sensitivity)) {
        this.game.rotationSpeed = sensitivity;
      }
    }
  }
}