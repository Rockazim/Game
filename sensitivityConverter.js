/**
 * Mouse Sensitivity Converter for FPS Games
 * Converts sensitivity between different popular FPS games
 */

export class SensitivityConverter {
  constructor() {
    // Game yaw values and sensitivity scales
    this.gameSettings = {
      // CS:GO/CS2 uses Source engine defaults
      'csgo': {
        yaw: 0.022,
        multiplier: 1.0,
        name: 'CS:GO/CS2'
      },
      
      // Valorant uses a different yaw value
      'valorant': {
        yaw: 0.07,
        multiplier: 1.0,
        name: 'Valorant'
      },
      
      // Krunker.io has its own sensitivity scale
      'krunker': {
        yaw: 0.02,
        multiplier: 1.0,
        name: 'Krunker.io'
      },
      
      // Apex Legends
      'apex': {
        yaw: 0.022,
        multiplier: 1.0,
        name: 'Apex Legends'
      },
      
      // Overwatch 2
      'overwatch': {
        yaw: 0.0066,
        multiplier: 1.0,
        name: 'Overwatch 2'
      },
      
      // COD (Modern Warfare/Warzone)
      'cod': {
        yaw: 0.022,
        multiplier: 1.0,
        name: 'Call of Duty'
      },
      
      // Our game (direct rotationSpeed mapping)
      'hyperfps': {
        yaw: 1.0, // Direct 1:1 mapping since we apply rotationSpeed directly
        multiplier: 1.0,
        name: 'HyperFPS'
      }
    };
  }

  /**
   * Calculate cm/360° for a given sensitivity and DPI
   * @param {number} sensitivity - Game sensitivity value
   * @param {number} dpi - Mouse DPI
   * @param {string} gameKey - Game identifier
   * @returns {number} Distance in cm for 360° turn
   */
  calculateCm360(sensitivity, dpi, gameKey) {
    const game = this.gameSettings[gameKey];
    if (!game) throw new Error(`Unknown game: ${gameKey}`);
    
    // Special handling for HyperFPS
    if (gameKey === 'hyperfps') {
      // For HyperFPS: radians_turned = mouse_pixels * rotationSpeed
      // So pixels needed for 360° (2π radians) = 2π / rotationSpeed
      const pixelsFor360 = (2 * Math.PI) / sensitivity;
      const inchesFor360 = pixelsFor360 / dpi;
      return inchesFor360 * 2.54;
    }
    
    // Standard calculation for other games
    const degreesPerInch = sensitivity * game.yaw * dpi;
    const inchesFor360 = 360 / degreesPerInch;
    return inchesFor360 * 2.54;
  }

  /**
   * Convert sensitivity from one game to another
   * @param {number} fromSensitivity - Source sensitivity value
   * @param {number} dpi - Mouse DPI
   * @param {string} fromGame - Source game key
   * @param {string} toGame - Target game key
   * @returns {number} Converted sensitivity for target game
   */
  convertSensitivity(fromSensitivity, dpi, fromGame, toGame) {
    const fromGameSettings = this.gameSettings[fromGame];
    const toGameSettings = this.gameSettings[toGame];
    
    if (!fromGameSettings) throw new Error(`Unknown source game: ${fromGame}`);
    if (!toGameSettings) throw new Error(`Unknown target game: ${toGame}`);
    
    // Special handling for HyperFPS (our game)
    if (toGame === 'hyperfps') {
      // Calculate cm/360 for source game
      const cm360 = this.calculateCm360(fromSensitivity, dpi, fromGame);
      
      // For HyperFPS, we need to calculate the rotationSpeed that gives the same cm/360
      // Our formula: radians_turned = mouse_pixels * rotationSpeed
      // We want: 2π radians = (cm360 / 2.54 * dpi) pixels * rotationSpeed
      const pixelsFor360 = (cm360 / 2.54) * dpi;
      const targetRotationSpeed = (2 * Math.PI) / pixelsFor360;
      
      return Math.round(targetRotationSpeed * 1000000) / 1000000; // Round to 6 decimal places for precision
    }
    
    if (fromGame === 'hyperfps') {
      // Converting FROM HyperFPS to another game
      // Calculate how many pixels are needed for 360° in HyperFPS
      const pixelsFor360 = (2 * Math.PI) / fromSensitivity;
      const cm360 = (pixelsFor360 / dpi) * 2.54;
      
      // Now calculate target game sensitivity for this cm/360
      const targetSensitivity = 360 / (cm360 / 2.54 * dpi * toGameSettings.yaw);
      return Math.round(targetSensitivity * 1000) / 1000;
    }
    
    // Standard conversion between other games
    const cm360 = this.calculateCm360(fromSensitivity, dpi, fromGame);
    const targetSensitivity = 360 / (cm360 / 2.54 * dpi * toGameSettings.yaw);
    
    return Math.round(targetSensitivity * 1000) / 1000; // Round to 3 decimal places
  }

  /**
   * Get all available games for conversion
   * @returns {Object} Available games with their display names
   */
  getAvailableGames() {
    const games = {};
    for (const [key, settings] of Object.entries(this.gameSettings)) {
      games[key] = settings.name;
    }
    return games;
  }

  /**
   * Get recommended sensitivity based on common professional settings
   * @param {string} gameKey - Game identifier
   * @param {number} dpi - Mouse DPI
   * @returns {Object} Recommended sensitivity ranges
   */
  getRecommendedSensitivity(gameKey, dpi) {
    const recommendations = {
      'csgo': { low: 1.0, high: 3.0, optimal: 1.5 },
      'valorant': { low: 0.2, high: 0.8, optimal: 0.4 },
      'krunker': { low: 0.8, high: 2.5, optimal: 1.4 },
      'apex': { low: 1.0, high: 3.0, optimal: 1.8 },
      'overwatch': { low: 3.0, high: 10.0, optimal: 6.0 },
      'cod': { low: 4.0, high: 12.0, optimal: 8.0 },
      'hyperfps': { low: 0.0005, high: 0.003, optimal: 0.0015 }
    };

    const baseRec = recommendations[gameKey];
    if (!baseRec) return null;

    // Adjust for DPI (higher DPI = lower sensitivity needed)
    const dpiMultiplier = 800 / dpi; // 800 DPI as baseline
    
    return {
      low: Math.round(baseRec.low * dpiMultiplier * 1000) / 1000,
      high: Math.round(baseRec.high * dpiMultiplier * 1000) / 1000,
      optimal: Math.round(baseRec.optimal * dpiMultiplier * 1000) / 1000
    };
  }

  /**
   * Calculate effective DPI (eDPI) for a game
   * @param {number} sensitivity - Game sensitivity
   * @param {number} dpi - Mouse DPI
   * @returns {number} Effective DPI value
   */
  calculateEDPI(sensitivity, dpi) {
    return Math.round(sensitivity * dpi);
  }

  /**
   * Get popular professional player settings for reference
   * @param {string} gameKey - Game identifier
   * @returns {Array} Array of pro player settings
   */
  getProPlayerSettings(gameKey) {
    const proSettings = {
      'csgo': [
        { name: 's1mple', sensitivity: 3.09, dpi: 400, edpi: 1236 },
        { name: 'ZywOo', sensitivity: 2.0, dpi: 400, edpi: 800 },
        { name: 'device', sensitivity: 1.9, dpi: 400, edpi: 760 }
      ],
      'valorant': [
        { name: 'TenZ', sensitivity: 0.47, dpi: 800, edpi: 376 },
        { name: 'Shroud', sensitivity: 0.78, dpi: 450, edpi: 351 },
        { name: 'ScreaM', sensitivity: 0.45, dpi: 400, edpi: 180 }
      ],
      'krunker': [
        { name: 'Frostbyte', sensitivity: 1.4, dpi: 800, edpi: 1120 },
        { name: 'xCirno', sensitivity: 1.2, dpi: 1000, edpi: 1200 },
        { name: 'Noobiz', sensitivity: 0.9, dpi: 800, edpi: 720 }
      ]
    };

    return proSettings[gameKey] || [];
  }

  /**
   * Validate sensitivity input
   * @param {number} sensitivity - Sensitivity value to validate
   * @param {string} gameKey - Game identifier
   * @returns {Object} Validation result with isValid boolean and message
   */
  validateSensitivity(sensitivity, gameKey) {
    if (typeof sensitivity !== 'number' || isNaN(sensitivity)) {
      return { isValid: false, message: 'Sensitivity must be a valid number' };
    }

    if (sensitivity <= 0) {
      return { isValid: false, message: 'Sensitivity must be greater than 0' };
    }

    const limits = {
      'csgo': { min: 0.1, max: 10.0 },
      'valorant': { min: 0.01, max: 5.0 },
      'krunker': { min: 0.1, max: 10.0 },
      'apex': { min: 0.1, max: 10.0 },
      'overwatch': { min: 1.0, max: 100.0 },
      'cod': { min: 1.0, max: 20.0 },
      'hyperfps': { min: 0.0001, max: 0.01 }
    };

    const limit = limits[gameKey];
    if (limit && (sensitivity < limit.min || sensitivity > limit.max)) {
      return { 
        isValid: false, 
        message: `Sensitivity for ${this.gameSettings[gameKey].name} should be between ${limit.min} and ${limit.max}` 
      };
    }

    return { isValid: true, message: 'Valid sensitivity' };
  }

  /**
   * Get conversion suggestions based on input
   * @param {number} sensitivity - Current sensitivity
   * @param {number} dpi - Mouse DPI
   * @param {string} fromGame - Source game
   * @returns {Object} Conversion suggestions for all games
   */
  getAllConversions(sensitivity, dpi, fromGame) {
    const conversions = {};
    const cm360 = this.calculateCm360(sensitivity, dpi, fromGame);
    
    for (const gameKey of Object.keys(this.gameSettings)) {
      if (gameKey === fromGame) continue;
      
      try {
        const convertedSens = this.convertSensitivity(sensitivity, dpi, fromGame, gameKey);
        conversions[gameKey] = {
          sensitivity: convertedSens,
          name: this.gameSettings[gameKey].name,
          cm360: cm360,
          edpi: this.calculateEDPI(convertedSens, dpi)
        };
      } catch (error) {
        conversions[gameKey] = { error: error.message };
      }
    }
    
    return conversions;
  }
}