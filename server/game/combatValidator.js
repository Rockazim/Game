export class CombatValidator {
  constructor() {
    // Weapon configurations
    this.weaponStats = {
      pistol: {
        damage: 25,
        fireRate: 400, // ms between shots
        range: 50,
        accuracy: 0.9,
        reloadTime: 2000,
        magazineSize: 12,
        reserveAmmo: 100
      },
      ak47: {
        damage: 35,
        fireRate: 100, // ms between shots
        range: 100,
        accuracy: 0.85,
        reloadTime: 3000,
        magazineSize: 30,
        reserveAmmo: 120
      },
      knife: {
        damage: 50,
        fireRate: 500,
        range: 2,
        accuracy: 1,
        reloadTime: 0,
        magazineSize: 1,
        reserveAmmo: 0
      }
    };

    // Track player shooting data
    this.playerCombatData = new Map();
  }

  validateShot(player, position, direction, weaponType) {
    // Get or create player combat data
    let combatData = this.playerCombatData.get(player.id);
    if (!combatData) {
      combatData = this.initCombatData();
      this.playerCombatData.set(player.id, combatData);
    }

    const weapon = this.weaponStats[weaponType];
    if (!weapon) {
      throw new Error('Invalid weapon type');
    }

    const now = Date.now();

    // Check fire rate
    const timeSinceLastShot = now - combatData.lastShotTime;
    if (timeSinceLastShot < weapon.fireRate) {
      console.warn(`Fire rate violation for player ${player.id}: ${timeSinceLastShot}ms < ${weapon.fireRate}ms`);
      combatData.violations.fireRate++;
      return null; // Reject shot
    }

    // Check if player is reloading
    if (player.isReloading) {
      console.warn(`Player ${player.id} attempted to shoot while reloading`);
      combatData.violations.reloading++;
      return null;
    }

    // Check ammo
    if (combatData.currentAmmo[weaponType] <= 0) {
      console.warn(`Player ${player.id} attempted to shoot with no ammo`);
      return null; // Need to reload
    }

    // Validate shot origin position
    if (!this.validateShotPosition(player.position, position)) {
      console.warn(`Invalid shot position for player ${player.id}`);
      combatData.violations.position++;
      return null;
    }

    // Validate direction vector
    if (!this.validateDirection(direction)) {
      console.warn(`Invalid shot direction for player ${player.id}`);
      combatData.violations.direction++;
      return null;
    }

    // Update combat data
    combatData.lastShotTime = now;
    combatData.shotsFired++;
    combatData.currentAmmo[weaponType]--;

    // Record shot for pattern analysis
    combatData.shotHistory.push({
      timestamp: now,
      position,
      direction,
      weapon: weaponType
    });

    // Keep only last 100 shots
    if (combatData.shotHistory.length > 100) {
      combatData.shotHistory.shift();
    }

    // Return validated shot data
    return {
      playerId: player.id,
      position,
      direction,
      weapon: weaponType,
      damage: weapon.damage,
      range: weapon.range,
      timestamp: now
    };
  }

  initCombatData() {
    return {
      lastShotTime: 0,
      shotsFired: 0,
      shotsHit: 0,
      headshots: 0,
      currentAmmo: {
        pistol: 12,
        ak47: 30
      },
      reserveAmmo: {
        pistol: 100,
        ak47: 120
      },
      shotHistory: [],
      violations: {
        fireRate: 0,
        position: 0,
        direction: 0,
        reloading: 0,
        damage: 0
      },
      accuracy: 0,
      headshotRatio: 0
    };
  }

  validateShotPosition(playerPos, shotPos) {
    // Shot should originate near player position
    const maxDistance = 2; // Max 2 units from player
    
    const distance = Math.sqrt(
      Math.pow(shotPos.x - playerPos.x, 2) +
      Math.pow(shotPos.y - playerPos.y, 2) +
      Math.pow(shotPos.z - playerPos.z, 2)
    );

    return distance <= maxDistance;
  }

  validateDirection(direction) {
    // Direction should be a normalized vector
    const magnitude = Math.sqrt(
      direction.x * direction.x +
      direction.y * direction.y +
      direction.z * direction.z
    );

    // Check if normalized (magnitude should be close to 1)
    return Math.abs(magnitude - 1) < 0.1;
  }

  validateHit(shooter, target, shotData, hitData) {
    const combatData = this.playerCombatData.get(shooter.id);
    if (!combatData) return null;

    // Validate hit distance
    const distance = this.calculateDistance(shotData.position, target.position);
    if (distance > shotData.range) {
      console.warn(`Hit out of range for player ${shooter.id}: ${distance} > ${shotData.range}`);
      return null;
    }

    // Validate line of sight (simplified - would use raycasting in production)
    if (!this.hasLineOfSight(shotData.position, target.position)) {
      console.warn(`No line of sight for hit from player ${shooter.id}`);
      combatData.violations.wallhack = (combatData.violations.wallhack || 0) + 1;
      return null;
    }

    // Calculate damage with distance falloff
    let damage = shotData.damage;
    if (distance > 20) {
      damage *= 0.8; // 20% damage reduction at distance
    }

    // Check for headshot
    const isHeadshot = hitData.hitLocation === 'head';
    if (isHeadshot) {
      damage *= 2; // Double damage for headshot
      combatData.headshots++;
    }

    // Update hit statistics
    combatData.shotsHit++;
    combatData.accuracy = (combatData.shotsHit / combatData.shotsFired) * 100;
    combatData.headshotRatio = combatData.headshots / Math.max(combatData.shotsHit, 1);

    return {
      damage: Math.round(damage),
      isHeadshot,
      distance,
      shooter: shooter.id,
      target: target.id
    };
  }

  handleReload(player, weaponType) {
    const combatData = this.playerCombatData.get(player.id);
    if (!combatData) return false;

    const weapon = this.weaponStats[weaponType];
    if (!weapon) return false;

    // Check if already reloading
    if (player.isReloading) {
      return false;
    }

    // Check if magazine is full
    if (combatData.currentAmmo[weaponType] >= weapon.magazineSize) {
      return false;
    }

    // Check reserve ammo
    if (combatData.reserveAmmo[weaponType] <= 0) {
      return false;
    }

    // Start reload
    player.isReloading = true;

    // Calculate ammo to reload
    const needed = weapon.magazineSize - combatData.currentAmmo[weaponType];
    const available = combatData.reserveAmmo[weaponType];
    const toReload = Math.min(needed, available);

    // Schedule reload completion
    setTimeout(() => {
      if (player.isReloading) { // Check if still reloading (not interrupted)
        combatData.currentAmmo[weaponType] += toReload;
        combatData.reserveAmmo[weaponType] -= toReload;
        player.isReloading = false;
      }
    }, weapon.reloadTime);

    return true;
  }

  calculateDistance(pos1, pos2) {
    return Math.sqrt(
      Math.pow(pos2.x - pos1.x, 2) +
      Math.pow(pos2.y - pos1.y, 2) +
      Math.pow(pos2.z - pos1.z, 2)
    );
  }

  hasLineOfSight(pos1, pos2) {
    // Simplified line of sight check
    // In production, this would use proper raycasting against map geometry
    // For now, we'll assume line of sight exists
    // TODO: Implement actual raycasting
    return true;
  }

  analyzeShotPattern(playerId) {
    const combatData = this.playerCombatData.get(playerId);
    if (!combatData || combatData.shotHistory.length < 10) {
      return null;
    }

    const recentShots = combatData.shotHistory.slice(-20);
    const analysis = {
      averageTimeBetweenShots: 0,
      directionVariance: 0,
      suspiciousPatterns: []
    };

    // Calculate average time between shots
    let totalTime = 0;
    for (let i = 1; i < recentShots.length; i++) {
      totalTime += recentShots[i].timestamp - recentShots[i-1].timestamp;
    }
    analysis.averageTimeBetweenShots = totalTime / (recentShots.length - 1);

    // Calculate direction variance
    const directions = recentShots.map(s => s.direction);
    analysis.directionVariance = this.calculateDirectionVariance(directions);

    // Check for suspicious patterns
    if (analysis.directionVariance < 0.01) {
      analysis.suspiciousPatterns.push('no_recoil');
    }

    if (combatData.accuracy > 95 && combatData.shotsFired > 20) {
      analysis.suspiciousPatterns.push('impossible_accuracy');
    }

    if (combatData.headshotRatio > 0.8 && combatData.shotsHit > 10) {
      analysis.suspiciousPatterns.push('excessive_headshots');
    }

    return analysis;
  }

  calculateDirectionVariance(directions) {
    if (directions.length < 2) return 0;

    // Calculate mean direction
    const mean = {
      x: directions.reduce((sum, d) => sum + d.x, 0) / directions.length,
      y: directions.reduce((sum, d) => sum + d.y, 0) / directions.length,
      z: directions.reduce((sum, d) => sum + d.z, 0) / directions.length
    };

    // Calculate variance
    let variance = 0;
    for (const dir of directions) {
      variance += Math.pow(dir.x - mean.x, 2) +
                  Math.pow(dir.y - mean.y, 2) +
                  Math.pow(dir.z - mean.z, 2);
    }

    return variance / directions.length;
  }

  getPlayerCombatStats(playerId) {
    const combatData = this.playerCombatData.get(playerId);
    if (!combatData) return null;

    return {
      shotsFired: combatData.shotsFired,
      shotsHit: combatData.shotsHit,
      accuracy: combatData.accuracy,
      headshots: combatData.headshots,
      headshotRatio: combatData.headshotRatio,
      violations: combatData.violations
    };
  }

  resetPlayerCombatData(playerId) {
    this.playerCombatData.set(playerId, this.initCombatData());
  }

  removePlayer(playerId) {
    this.playerCombatData.delete(playerId);
  }
}