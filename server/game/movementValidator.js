export class MovementValidator {
  constructor() {
    // Movement constants (matching client-side)
    this.maxSpeed = 5; // Base movement speed
    this.sprintMultiplier = 2;
    this.crouchMultiplier = 0.4;
    this.maxJumpHeight = 4;
    this.gravity = -15;
    this.tickRate = 64; // Server tick rate
    
    // Player state tracking
    this.playerStates = new Map();
    
    // Tolerance values for lag compensation
    this.positionTolerance = 1.1; // 10% tolerance
    this.timeTolerance = 100; // 100ms max lag compensation
  }

  validateMovement(playerId, newPosition, deltaTime, inputData) {
    // Get or create player state
    let playerState = this.playerStates.get(playerId);
    if (!playerState) {
      playerState = this.initPlayerState(newPosition);
      this.playerStates.set(playerId, playerState);
      return newPosition; // First update, accept position
    }

    const oldPosition = playerState.position;
    
    // Validate delta time
    if (deltaTime <= 0 || deltaTime > 100) { // Max 100ms per update
      console.warn(`Invalid deltaTime for player ${playerId}: ${deltaTime}`);
      return oldPosition; // Reject movement
    }

    // Calculate maximum possible movement
    const maxDistance = this.calculateMaxMovement(playerState, deltaTime, inputData);
    const actualDistance = this.calculateDistance(oldPosition, newPosition);

    // Check for speed hacks
    if (actualDistance > maxDistance * this.positionTolerance) {
      console.warn(`Speed hack detected for player ${playerId}: ${actualDistance} > ${maxDistance}`);
      
      // Log violation
      playerState.violations.speed++;
      playerState.lastViolation = Date.now();
      
      // Correct position
      return this.correctPosition(oldPosition, newPosition, maxDistance);
    }

    // Check for teleportation
    if (actualDistance > maxDistance * 3) {
      console.warn(`Teleport detected for player ${playerId}: ${actualDistance}`);
      
      playerState.violations.teleport++;
      playerState.lastViolation = Date.now();
      
      return oldPosition; // Reject movement completely
    }

    // Validate vertical movement
    if (!this.validateVerticalMovement(playerState, oldPosition, newPosition, deltaTime, inputData)) {
      console.warn(`Invalid vertical movement for player ${playerId}`);
      
      playerState.violations.physics++;
      
      // Allow horizontal movement but correct vertical
      return {
        x: newPosition.x,
        y: oldPosition.y,
        z: newPosition.z
      };
    }

    // Check for wall clipping
    if (this.checkWallClipping(oldPosition, newPosition)) {
      console.warn(`Wall clipping detected for player ${playerId}`);
      
      playerState.violations.clipping++;
      
      return oldPosition; // Reject movement
    }

    // Update player state
    this.updatePlayerState(playerId, newPosition, inputData);
    
    return newPosition;
  }

  initPlayerState(position) {
    return {
      position: { ...position },
      velocity: { x: 0, y: 0, z: 0 },
      isOnGround: true,
      isJumping: false,
      lastJumpTime: 0,
      lastUpdate: Date.now(),
      violations: {
        speed: 0,
        teleport: 0,
        physics: 0,
        clipping: 0
      },
      lastViolation: 0
    };
  }

  calculateMaxMovement(playerState, deltaTime, inputData) {
    let speed = this.maxSpeed;
    
    // Apply modifiers
    if (inputData.sprint && !inputData.crouch) {
      speed *= this.sprintMultiplier;
    }
    
    if (inputData.crouch) {
      speed *= this.crouchMultiplier;
    }

    // Convert to units per millisecond and multiply by deltaTime
    return (speed / 1000) * deltaTime;
  }

  calculateDistance(pos1, pos2) {
    const dx = pos2.x - pos1.x;
    const dz = pos2.z - pos1.z;
    return Math.sqrt(dx * dx + dz * dz); // Horizontal distance only
  }

  validateVerticalMovement(playerState, oldPos, newPos, deltaTime, inputData) {
    const verticalChange = newPos.y - oldPos.y;
    
    // On ground - can only go up (jump) or stay level
    if (playerState.isOnGround) {
      // Check for jump
      if (inputData.jump && verticalChange > 0) {
        const maxJumpDelta = (this.maxJumpHeight / 1000) * deltaTime;
        
        if (verticalChange > maxJumpDelta * this.positionTolerance) {
          return false; // Jump too high
        }
        
        // Check jump cooldown (prevent bunny hopping exploit)
        const timeSinceLastJump = Date.now() - playerState.lastJumpTime;
        if (timeSinceLastJump < 500) { // 500ms cooldown
          return false;
        }
        
        playerState.isOnGround = false;
        playerState.isJumping = true;
        playerState.lastJumpTime = Date.now();
        
        return true;
      }
      
      // Not jumping - should stay at ground level (small tolerance for slopes)
      if (Math.abs(verticalChange) > 0.5) {
        return false;
      }
      
      return true;
    }
    
    // In air - affected by gravity
    const gravityDelta = (this.gravity / 1000) * deltaTime;
    const expectedFall = gravityDelta * (deltaTime / 1000); // Gravity acceleration
    
    // Allow some upward movement if still in jump arc
    if (playerState.isJumping && verticalChange > 0) {
      const timeSinceJump = Date.now() - playerState.lastJumpTime;
      if (timeSinceJump > 1000) { // Jump arc should be done after 1 second
        playerState.isJumping = false;
      }
    }
    
    // Check if landed
    if (verticalChange <= 0 && newPos.y <= 0) { // Assuming ground at y=0
      playerState.isOnGround = true;
      playerState.isJumping = false;
      return true;
    }
    
    // Validate fall speed
    if (verticalChange < expectedFall * this.positionTolerance) {
      return false; // Falling too fast
    }
    
    return true;
  }

  checkWallClipping(oldPos, newPos) {
    // Simplified wall clipping check
    // In production, this would check against actual map geometry
    
    // Check if movement passes through known walls
    // This is a placeholder - implement actual collision detection
    const mapBounds = {
      x: { min: -100, max: 100 },
      y: { min: -10, max: 50 },
      z: { min: -100, max: 100 }
    };
    
    // Check if new position is out of bounds
    if (newPos.x < mapBounds.x.min || newPos.x > mapBounds.x.max ||
        newPos.y < mapBounds.y.min || newPos.y > mapBounds.y.max ||
        newPos.z < mapBounds.z.min || newPos.z > mapBounds.z.max) {
      return true; // Out of bounds
    }
    
    // TODO: Implement ray casting for wall detection
    // const ray = this.createRay(oldPos, newPos);
    // return this.checkRayCollision(ray);
    
    return false;
  }

  correctPosition(oldPos, newPos, maxDistance) {
    // Calculate unit vector from old to new position
    const dx = newPos.x - oldPos.x;
    const dz = newPos.z - oldPos.z;
    const distance = Math.sqrt(dx * dx + dz * dz);
    
    if (distance === 0) return oldPos;
    
    // Normalize and scale to max distance
    const scale = maxDistance / distance;
    
    return {
      x: oldPos.x + dx * scale,
      y: newPos.y, // Keep vertical component
      z: oldPos.z + dz * scale
    };
  }

  updatePlayerState(playerId, newPosition, inputData) {
    const playerState = this.playerStates.get(playerId);
    if (!playerState) return;
    
    // Calculate velocity (for prediction)
    const deltaTime = Date.now() - playerState.lastUpdate;
    if (deltaTime > 0) {
      playerState.velocity = {
        x: (newPosition.x - playerState.position.x) / deltaTime * 1000,
        y: (newPosition.y - playerState.position.y) / deltaTime * 1000,
        z: (newPosition.z - playerState.position.z) / deltaTime * 1000
      };
    }
    
    playerState.position = { ...newPosition };
    playerState.lastUpdate = Date.now();
    
    // Update ground state
    if (newPosition.y <= 0.1) { // Near ground
      playerState.isOnGround = true;
      playerState.isJumping = false;
    }
  }

  getPlayerViolations(playerId) {
    const playerState = this.playerStates.get(playerId);
    if (!playerState) return null;
    
    return {
      violations: playerState.violations,
      lastViolation: playerState.lastViolation,
      totalViolations: Object.values(playerState.violations).reduce((a, b) => a + b, 0)
    };
  }

  resetPlayerViolations(playerId) {
    const playerState = this.playerStates.get(playerId);
    if (!playerState) return;
    
    playerState.violations = {
      speed: 0,
      teleport: 0,
      physics: 0,
      clipping: 0
    };
    playerState.lastViolation = 0;
  }

  removePlayer(playerId) {
    this.playerStates.delete(playerId);
  }

  // Lag compensation
  interpolatePosition(playerId, timestamp) {
    const playerState = this.playerStates.get(playerId);
    if (!playerState) return null;
    
    const timeDiff = Date.now() - timestamp;
    if (timeDiff > this.timeTolerance) {
      return playerState.position; // Too old, return current position
    }
    
    // Simple linear interpolation based on velocity
    const interpolationTime = timeDiff / 1000; // Convert to seconds
    
    return {
      x: playerState.position.x + playerState.velocity.x * interpolationTime,
      y: playerState.position.y + playerState.velocity.y * interpolationTime,
      z: playerState.position.z + playerState.velocity.z * interpolationTime
    };
  }
}