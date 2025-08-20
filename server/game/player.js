export class Player {
  constructor(userId, socketId, socket) {
    this.id = userId;
    this.socketId = socketId;
    this.socket = socket;
    this.name = `Player_${userId.substring(0, 8)}`;
    
    // Game state
    this.position = { x: 0, y: 0, z: 0 };
    this.rotation = { x: 0, y: 0 };
    this.velocity = { x: 0, y: 0, z: 0 };
    this.health = 100;
    this.armor = 0;
    this.currentWeapon = 'pistol';
    this.ammo = {
      pistol: 100,
      ak47: 120,
      current: 12,
      reserve: 100
    };
    
    // Status flags
    this.isAlive = true;
    this.isReloading = false;
    this.isCrouching = false;
    this.isSprinting = false;
    this.isJumping = false;
    
    // Room info
    this.roomId = null;
    this.team = null;
    
    // Stats
    this.stats = {
      kills: 0,
      deaths: 0,
      assists: 0,
      shots: 0,
      hits: 0,
      headshots: 0,
      accuracy: 0,
      score: 0,
      streak: 0
    };
    
    // Anti-cheat tracking
    this.violations = 0;
    this.lastActions = [];
    this.suspicionScore = 0;
    
    // Performance tracking
    this.ping = 0;
    this.lastUpdate = Date.now();
    this.updateCount = 0;
  }

  updatePosition(position) {
    this.position = position;
    this.lastUpdate = Date.now();
    this.updateCount++;
  }

  updateRotation(rotation) {
    this.rotation = rotation;
  }

  updateVelocity(velocity) {
    this.velocity = velocity;
  }

  takeDamage(amount) {
    // Apply armor reduction
    if (this.armor > 0) {
      const armorDamage = Math.min(this.armor, amount * 0.5);
      this.armor -= armorDamage;
      amount -= armorDamage;
    }

    this.health = Math.max(0, this.health - amount);
    
    if (this.health <= 0) {
      this.isAlive = false;
    }

    return this.health;
  }

  heal(amount) {
    this.health = Math.min(100, this.health + amount);
    return this.health;
  }

  respawn(position) {
    this.health = 100;
    this.armor = 0;
    this.isAlive = true;
    this.position = position;
    this.velocity = { x: 0, y: 0, z: 0 };
    this.currentWeapon = 'pistol';
    this.ammo = {
      pistol: 100,
      ak47: 120,
      current: 12,
      reserve: 100
    };
    this.stats.streak = 0;
  }

  recordAction(action, data) {
    const actionRecord = {
      type: action,
      timestamp: Date.now(),
      data
    };

    this.lastActions.push(actionRecord);
    
    // Keep only last 100 actions
    if (this.lastActions.length > 100) {
      this.lastActions.shift();
    }
  }

  calculateAccuracy() {
    if (this.stats.shots === 0) return 0;
    return (this.stats.hits / this.stats.shots) * 100;
  }

  calculateKDRatio() {
    if (this.stats.deaths === 0) return this.stats.kills;
    return this.stats.kills / this.stats.deaths;
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      position: this.position,
      rotation: this.rotation,
      health: this.health,
      armor: this.armor,
      currentWeapon: this.currentWeapon,
      isAlive: this.isAlive,
      team: this.team,
      stats: {
        kills: this.stats.kills,
        deaths: this.stats.deaths,
        score: this.stats.score
      }
    };
  }

  getDetailedStats() {
    return {
      ...this.stats,
      accuracy: this.calculateAccuracy(),
      kdRatio: this.calculateKDRatio(),
      ping: this.ping
    };
  }
}