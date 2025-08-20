export class AntiCheat {
  constructor() {
    // Detection thresholds
    this.thresholds = {
      maxAccuracy: 0.95,           // 95% accuracy is suspicious
      maxHeadshotRatio: 0.8,       // 80% headshot ratio is suspicious
      minReactionTime: 50,         // Less than 50ms reaction time
      maxFlickSpeed: 500,          // Max degrees per second for flick shots
      maxTrackingAccuracy: 0.9,    // Perfect tracking threshold
      speedHackTolerance: 1.2,     // 20% speed tolerance
      teleportDistance: 10,        // Teleport detection distance
      wallTrackingTime: 1000,      // Time tracking through walls
      rapidFireThreshold: 50       // Minimum ms between shots
    };

    // Player tracking data
    this.playerData = new Map();
    
    // Violation weights for suspicion scoring
    this.violationWeights = {
      speed: 5,
      teleport: 10,
      aimbot: 8,
      wallhack: 7,
      norecoil: 6,
      rapidfire: 4,
      damage: 10
    };
  }

  checkMovement(player, position, data) {
    const playerTracking = this.getPlayerTracking(player.id);
    
    // Update position history
    playerTracking.positions.push({
      position,
      timestamp: Date.now(),
      velocity: data.velocity || { x: 0, y: 0, z: 0 }
    });

    // Keep only last 100 positions
    if (playerTracking.positions.length > 100) {
      playerTracking.positions.shift();
    }

    // Check for speed hacking
    if (this.detectSpeedHack(playerTracking)) {
      playerTracking.violations.speed++;
      return 'speed_hack';
    }

    // Check for teleportation
    if (this.detectTeleport(playerTracking)) {
      playerTracking.violations.teleport++;
      return 'teleport';
    }

    // Check for fly hacking
    if (this.detectFlyHack(playerTracking)) {
      playerTracking.violations.fly++;
      return 'fly_hack';
    }

    return null;
  }

  checkAimbot(player, shotData) {
    const playerTracking = this.getPlayerTracking(player.id);
    
    // Record shot data
    playerTracking.shots.push({
      ...shotData,
      timestamp: Date.now()
    });

    // Keep only last 50 shots
    if (playerTracking.shots.length > 50) {
      playerTracking.shots.shift();
    }

    // Need minimum shots for analysis
    if (playerTracking.shots.length < 10) {
      return null;
    }

    // Calculate accuracy
    const accuracy = this.calculateAccuracy(playerTracking);
    if (accuracy > this.thresholds.maxAccuracy) {
      playerTracking.violations.aimbot++;
      playerTracking.suspiciousMetrics.accuracy = accuracy;
      return 'aimbot_accuracy';
    }

    // Check headshot ratio
    const headshotRatio = this.calculateHeadshotRatio(playerTracking);
    if (headshotRatio > this.thresholds.maxHeadshotRatio) {
      playerTracking.violations.aimbot++;
      playerTracking.suspiciousMetrics.headshotRatio = headshotRatio;
      return 'aimbot_headshots';
    }

    // Check for impossible reaction times
    if (this.detectImpossibleReaction(playerTracking)) {
      playerTracking.violations.aimbot++;
      return 'aimbot_reaction';
    }

    // Check for perfect tracking
    if (this.detectPerfectTracking(playerTracking)) {
      playerTracking.violations.aimbot++;
      return 'aimbot_tracking';
    }

    // Check for no recoil
    if (this.detectNoRecoil(playerTracking)) {
      playerTracking.violations.norecoil++;
      return 'no_recoil';
    }

    return null;
  }

  checkWallhack(player, targetPlayer, canSeeTarget) {
    const playerTracking = this.getPlayerTracking(player.id);
    
    // Track target visibility
    if (!playerTracking.targetTracking.has(targetPlayer.id)) {
      playerTracking.targetTracking.set(targetPlayer.id, {
        lastSeen: 0,
        invisibleTrackingTime: 0,
        throughWallShots: 0
      });
    }

    const targetTracking = playerTracking.targetTracking.get(targetPlayer.id);
    const now = Date.now();

    if (canSeeTarget) {
      targetTracking.lastSeen = now;
      targetTracking.invisibleTrackingTime = 0;
    } else {
      // Check if tracking through walls
      if (this.isTrackingTarget(player, targetPlayer)) {
        targetTracking.invisibleTrackingTime += 16; // Assume 60 FPS
        
        if (targetTracking.invisibleTrackingTime > this.thresholds.wallTrackingTime) {
          playerTracking.violations.wallhack++;
          return 'wallhack_tracking';
        }
      }
    }

    return null;
  }

  detectSpeedHack(playerTracking) {
    const positions = playerTracking.positions;
    if (positions.length < 2) return false;

    const latest = positions[positions.length - 1];
    const previous = positions[positions.length - 2];
    
    const timeDelta = latest.timestamp - previous.timestamp;
    if (timeDelta === 0) return false;

    const distance = this.calculateDistance(previous.position, latest.position);
    const speed = (distance / timeDelta) * 1000; // Units per second

    const maxSpeed = 5 * this.thresholds.speedHackTolerance; // Base speed with tolerance
    
    return speed > maxSpeed;
  }

  detectTeleport(playerTracking) {
    const positions = playerTracking.positions;
    if (positions.length < 2) return false;

    const latest = positions[positions.length - 1];
    const previous = positions[positions.length - 2];
    
    const distance = this.calculateDistance(previous.position, latest.position);
    
    return distance > this.thresholds.teleportDistance;
  }

  detectFlyHack(playerTracking) {
    const positions = playerTracking.positions;
    if (positions.length < 10) return false;

    // Check if player has been in air for too long
    let airTime = 0;
    const groundLevel = 0.5; // Assuming ground at y=0

    for (let i = positions.length - 10; i < positions.length; i++) {
      if (positions[i].position.y > groundLevel) {
        airTime++;
      }
    }

    // If in air for more than 80% of recent positions
    return airTime > 8;
  }

  calculateAccuracy(playerTracking) {
    const shots = playerTracking.shots;
    if (shots.length === 0) return 0;

    const hits = shots.filter(s => s.hit).length;
    return hits / shots.length;
  }

  calculateHeadshotRatio(playerTracking) {
    const shots = playerTracking.shots;
    const hits = shots.filter(s => s.hit);
    if (hits.length === 0) return 0;

    const headshots = hits.filter(s => s.headshot).length;
    return headshots / hits.length;
  }

  detectImpossibleReaction(playerTracking) {
    const shots = playerTracking.shots;
    const recentShots = shots.slice(-5);

    for (const shot of recentShots) {
      if (shot.reactionTime && shot.reactionTime < this.thresholds.minReactionTime) {
        return true;
      }
    }

    return false;
  }

  detectPerfectTracking(playerTracking) {
    const positions = playerTracking.positions;
    if (positions.length < 10) return false;

    // Analyze crosshair movement smoothness
    const movements = [];
    for (let i = 1; i < positions.length; i++) {
      const delta = {
        x: positions[i].position.x - positions[i-1].position.x,
        y: positions[i].position.y - positions[i-1].position.y,
        z: positions[i].position.z - positions[i-1].position.z
      };
      movements.push(delta);
    }

    // Calculate variance in movement
    const variance = this.calculateMovementVariance(movements);
    
    // Very low variance suggests automated tracking
    return variance < 0.001;
  }

  detectNoRecoil(playerTracking) {
    const shots = playerTracking.shots;
    if (shots.length < 10) return false;

    // Check vertical spread of consecutive shots
    const verticalSpreads = [];
    for (let i = 1; i < shots.length; i++) {
      if (shots[i].direction && shots[i-1].direction) {
        const spread = Math.abs(shots[i].direction.y - shots[i-1].direction.y);
        verticalSpreads.push(spread);
      }
    }

    if (verticalSpreads.length === 0) return false;

    // Calculate average spread
    const avgSpread = verticalSpreads.reduce((a, b) => a + b, 0) / verticalSpreads.length;
    
    // No recoil if spread is too consistent
    return avgSpread < 0.01;
  }

  detectRapidFire(playerTracking) {
    const shots = playerTracking.shots;
    if (shots.length < 2) return false;

    const latest = shots[shots.length - 1];
    const previous = shots[shots.length - 2];
    
    const timeDelta = latest.timestamp - previous.timestamp;
    
    return timeDelta < this.thresholds.rapidFireThreshold;
  }

  isTrackingTarget(player, target) {
    // Calculate angle between player look direction and target
    const dirToTarget = {
      x: target.position.x - player.position.x,
      y: target.position.y - player.position.y,
      z: target.position.z - player.position.z
    };

    const distance = Math.sqrt(
      dirToTarget.x * dirToTarget.x +
      dirToTarget.y * dirToTarget.y +
      dirToTarget.z * dirToTarget.z
    );

    if (distance === 0) return false;

    // Normalize
    dirToTarget.x /= distance;
    dirToTarget.y /= distance;
    dirToTarget.z /= distance;

    // Get player look direction from rotation
    const lookDir = {
      x: Math.sin(player.rotation.y) * Math.cos(player.rotation.x),
      y: Math.sin(player.rotation.x),
      z: -Math.cos(player.rotation.y) * Math.cos(player.rotation.x)
    };

    // Calculate dot product
    const dot = dirToTarget.x * lookDir.x +
                dirToTarget.y * lookDir.y +
                dirToTarget.z * lookDir.z;

    // If looking within 10 degrees of target
    return dot > 0.985; // cos(10°) ≈ 0.985
  }

  calculateDistance(pos1, pos2) {
    return Math.sqrt(
      Math.pow(pos2.x - pos1.x, 2) +
      Math.pow(pos2.y - pos1.y, 2) +
      Math.pow(pos2.z - pos1.z, 2)
    );
  }

  calculateMovementVariance(movements) {
    if (movements.length === 0) return 0;

    // Calculate mean movement
    const mean = {
      x: movements.reduce((sum, m) => sum + m.x, 0) / movements.length,
      y: movements.reduce((sum, m) => sum + m.y, 0) / movements.length,
      z: movements.reduce((sum, m) => sum + m.z, 0) / movements.length
    };

    // Calculate variance
    let variance = 0;
    for (const move of movements) {
      variance += Math.pow(move.x - mean.x, 2) +
                  Math.pow(move.y - mean.y, 2) +
                  Math.pow(move.z - mean.z, 2);
    }

    return variance / movements.length;
  }

  getPlayerTracking(playerId) {
    if (!this.playerData.has(playerId)) {
      this.playerData.set(playerId, {
        positions: [],
        shots: [],
        targetTracking: new Map(),
        violations: {
          speed: 0,
          teleport: 0,
          aimbot: 0,
          wallhack: 0,
          norecoil: 0,
          fly: 0
        },
        suspiciousMetrics: {},
        suspicionScore: 0,
        lastAnalysis: 0
      });
    }
    return this.playerData.get(playerId);
  }

  calculateSuspicionScore(playerId) {
    const playerTracking = this.getPlayerTracking(playerId);
    let score = 0;

    // Calculate weighted score
    for (const [type, count] of Object.entries(playerTracking.violations)) {
      score += count * (this.violationWeights[type] || 1);
    }

    playerTracking.suspicionScore = score;
    return score;
  }

  getPlayerReport(playerId) {
    const playerTracking = this.getPlayerTracking(playerId);
    const suspicionScore = this.calculateSuspicionScore(playerId);

    return {
      playerId,
      violations: playerTracking.violations,
      suspiciousMetrics: playerTracking.suspiciousMetrics,
      suspicionScore,
      threat: this.getThreatLevel(suspicionScore),
      recommendation: this.getRecommendation(suspicionScore)
    };
  }

  getThreatLevel(score) {
    if (score >= 100) return 'critical';
    if (score >= 50) return 'high';
    if (score >= 20) return 'medium';
    if (score >= 10) return 'low';
    return 'none';
  }

  getRecommendation(score) {
    if (score >= 100) return 'immediate_ban';
    if (score >= 50) return 'temporary_ban';
    if (score >= 20) return 'flag_for_review';
    if (score >= 10) return 'increased_monitoring';
    return 'continue_monitoring';
  }

  resetPlayerData(playerId) {
    this.playerData.delete(playerId);
  }

  removePlayer(playerId) {
    this.playerData.delete(playerId);
  }
}