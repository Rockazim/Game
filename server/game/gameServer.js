import { Room } from './room.js';
import { Player } from './player.js';
import { MovementValidator } from './movementValidator.js';
import { CombatValidator } from './combatValidator.js';
import { AntiCheat } from './antiCheat.js';
import { ValidationService } from '../security/validation.js';

export class GameServer {
  constructor(io) {
    this.io = io;
    this.rooms = new Map();
    this.players = new Map();
    this.movementValidator = new MovementValidator();
    this.combatValidator = new CombatValidator();
    this.antiCheat = new AntiCheat();
    this.validationService = new ValidationService();
    
    // Server configuration
    this.config = {
      tickRate: parseInt(process.env.TICK_RATE) || 64,
      maxRooms: parseInt(process.env.MAX_ROOMS) || 100,
      maxPlayersPerRoom: parseInt(process.env.MAX_PLAYERS_PER_ROOM) || 10
    };

    // WebSocket rate limiter
    this.rateLimiter = new Map();
    
    // Start game loop
    this.startGameLoop();
    
    // Start cleanup routine
    this.startCleanupRoutine();
  }

  addPlayer(socket) {
    const player = new Player(socket.userId, socket.id, socket);
    this.players.set(socket.userId, player);

    // Set up event handlers
    this.setupPlayerHandlers(socket, player);

    // Send initial data to player
    socket.emit('connected', {
      playerId: player.id,
      tickRate: this.config.tickRate,
      rooms: this.getRoomList()
    });

    console.log(`Player ${player.id} added to game server`);
  }

  removePlayer(socket) {
    const player = this.players.get(socket.userId);
    if (!player) return;

    // Remove from room if in one
    if (player.roomId) {
      this.leaveRoom(player, player.roomId);
    }

    // Clean up player data
    this.players.delete(socket.userId);
    
    console.log(`Player ${player.id} removed from game server`);
  }

  setupPlayerHandlers(socket, player) {
    // Movement handling with validation
    socket.on('move', (data) => {
      if (!this.checkRateLimit(player.id, 'move', 30)) {
        socket.emit('error', { message: 'Rate limit exceeded' });
        return;
      }

      try {
        // Validate input
        this.validationService.validateInput(data, 'movement');
        
        // Validate movement physics
        const validatedPosition = this.movementValidator.validateMovement(
          player.id,
          data.position,
          data.deltaTime || 16,
          data.input || {}
        );

        // Check for cheats
        const cheatDetected = this.antiCheat.checkMovement(player, validatedPosition, data);
        if (cheatDetected) {
          this.handleCheatDetection(player, cheatDetected);
          return;
        }

        // Update player position
        player.updatePosition(validatedPosition);
        player.updateRotation(data.rotation);

        // Broadcast to room
        if (player.roomId) {
          const room = this.rooms.get(player.roomId);
          if (room) {
            room.broadcastToOthers(player.id, 'playerMoved', {
              playerId: player.id,
              position: validatedPosition,
              rotation: data.rotation,
              velocity: data.velocity,
              timestamp: Date.now()
            });
          }
        }
      } catch (error) {
        socket.emit('error', { message: 'Invalid movement data' });
        console.error(`Movement validation error for ${player.id}:`, error);
      }
    });

    // Shooting handling with validation
    socket.on('shoot', (data) => {
      if (!this.checkRateLimit(player.id, 'shoot', 10)) {
        socket.emit('error', { message: 'Rate limit exceeded' });
        return;
      }

      try {
        // Validate input
        this.validationService.validateInput(data, 'weapon');

        // Validate shot
        const validatedShot = this.combatValidator.validateShot(
          player,
          data.position,
          data.direction,
          data.weapon
        );

        // Check for aimbot
        const aimbotDetected = this.antiCheat.checkAimbot(player, validatedShot);
        if (aimbotDetected) {
          this.handleCheatDetection(player, aimbotDetected);
          return;
        }

        // Process hit detection (server-side)
        const hitResult = this.processHitDetection(player, validatedShot);

        // Update player stats
        if (hitResult.hit) {
          player.stats.shots++;
          player.stats.hits++;
          if (hitResult.headshot) {
            player.stats.headshots++;
          }
        }

        // Broadcast to room
        if (player.roomId) {
          const room = this.rooms.get(player.roomId);
          if (room) {
            room.broadcast('playerShot', {
              playerId: player.id,
              position: validatedShot.position,
              direction: validatedShot.direction,
              weapon: validatedShot.weapon,
              hitResult,
              timestamp: Date.now()
            });
          }
        }
      } catch (error) {
        socket.emit('error', { message: 'Invalid shot data' });
        console.error(`Shot validation error for ${player.id}:`, error);
      }
    });

    // Room management
    socket.on('joinRoom', (data) => {
      try {
        this.validationService.validateInput(data, 'room');
        this.joinRoom(player, data.roomId);
      } catch (error) {
        socket.emit('error', { message: 'Failed to join room' });
      }
    });

    socket.on('leaveRoom', () => {
      if (player.roomId) {
        this.leaveRoom(player, player.roomId);
      }
    });

    socket.on('createRoom', (data) => {
      try {
        const roomName = this.validationService.sanitizeName(data.name);
        const maxPlayers = Math.min(data.maxPlayers || 10, this.config.maxPlayersPerRoom);
        
        const room = this.createRoom(roomName, maxPlayers);
        socket.emit('roomCreated', { roomId: room.id, name: room.name });
      } catch (error) {
        socket.emit('error', { message: 'Failed to create room' });
      }
    });

    // Chat handling with sanitization
    socket.on('chat', (data) => {
      if (!this.checkRateLimit(player.id, 'chat', 5)) {
        socket.emit('error', { message: 'Chat rate limit exceeded' });
        return;
      }

      try {
        const sanitizedMessage = this.validationService.sanitizeChat(data.message);
        
        if (player.roomId) {
          const room = this.rooms.get(player.roomId);
          if (room) {
            room.broadcast('chat', {
              playerId: player.id,
              playerName: player.name,
              message: sanitizedMessage,
              timestamp: Date.now()
            });
          }
        }
      } catch (error) {
        socket.emit('error', { message: 'Invalid chat message' });
      }
    });

    // Weapon switching
    socket.on('switchWeapon', (data) => {
      if (!this.checkRateLimit(player.id, 'weaponSwitch', 5)) {
        socket.emit('error', { message: 'Rate limit exceeded' });
        return;
      }

      const validWeapons = ['pistol', 'ak47', 'knife'];
      if (validWeapons.includes(data.weapon)) {
        player.currentWeapon = data.weapon;
        
        if (player.roomId) {
          const room = this.rooms.get(player.roomId);
          if (room) {
            room.broadcastToOthers(player.id, 'playerSwitchedWeapon', {
              playerId: player.id,
              weapon: data.weapon
            });
          }
        }
      }
    });

    // Reload handling
    socket.on('reload', (data) => {
      if (!this.checkRateLimit(player.id, 'reload', 2)) {
        socket.emit('error', { message: 'Rate limit exceeded' });
        return;
      }

      player.isReloading = true;
      
      // Weapon reload times
      const reloadTimes = {
        pistol: 2000,
        ak47: 3000
      };

      const reloadTime = reloadTimes[player.currentWeapon] || 2000;

      setTimeout(() => {
        player.isReloading = false;
        socket.emit('reloadComplete');
      }, reloadTime);

      if (player.roomId) {
        const room = this.rooms.get(player.roomId);
        if (room) {
          room.broadcastToOthers(player.id, 'playerReloading', {
            playerId: player.id,
            weapon: player.currentWeapon,
            reloadTime
          });
        }
      }
    });
  }

  createRoom(name, maxPlayers) {
    if (this.rooms.size >= this.config.maxRooms) {
      throw new Error('Maximum number of rooms reached');
    }

    const roomId = this.validationService.generateRoomId();
    const room = new Room(roomId, name, maxPlayers);
    this.rooms.set(roomId, room);

    console.log(`Room created: ${name} (${roomId})`);
    return room;
  }

  joinRoom(player, roomId) {
    const room = this.rooms.get(roomId);
    if (!room) {
      throw new Error('Room not found');
    }

    if (room.isFull()) {
      throw new Error('Room is full');
    }

    // Leave current room if in one
    if (player.roomId) {
      this.leaveRoom(player, player.roomId);
    }

    // Join new room
    room.addPlayer(player);
    player.roomId = roomId;

    // Notify player
    player.socket.emit('joinedRoom', {
      roomId: room.id,
      roomName: room.name,
      players: room.getPlayerList()
    });

    // Notify others in room
    room.broadcastToOthers(player.id, 'playerJoined', {
      playerId: player.id,
      playerName: player.name
    });

    console.log(`Player ${player.id} joined room ${roomId}`);
  }

  leaveRoom(player, roomId) {
    const room = this.rooms.get(roomId);
    if (!room) return;

    room.removePlayer(player.id);
    player.roomId = null;

    // Notify player
    player.socket.emit('leftRoom');

    // Notify others in room
    room.broadcast('playerLeft', {
      playerId: player.id,
      playerName: player.name
    });

    // Delete room if empty
    if (room.isEmpty()) {
      this.rooms.delete(roomId);
      console.log(`Room ${roomId} deleted (empty)`);
    }

    console.log(`Player ${player.id} left room ${roomId}`);
  }

  getRoomList() {
    const rooms = [];
    for (const [id, room] of this.rooms.entries()) {
      rooms.push({
        id: room.id,
        name: room.name,
        players: room.playerCount,
        maxPlayers: room.maxPlayers
      });
    }
    return rooms;
  }

  processHitDetection(shooter, shot) {
    // Server-side hit detection
    const room = this.rooms.get(shooter.roomId);
    if (!room) return { hit: false };

    // Simple hit detection (would be more complex in production)
    for (const player of room.players.values()) {
      if (player.id === shooter.id) continue;

      const distance = this.calculateDistance(shot.position, player.position);
      
      // Check if shot direction intersects with player hitbox
      if (distance < 5) { // Simplified hit detection
        const damage = this.calculateDamage(shot.weapon, distance, false);
        player.takeDamage(damage);

        if (player.health <= 0) {
          this.handlePlayerDeath(player, shooter);
        }

        return {
          hit: true,
          targetId: player.id,
          damage,
          headshot: false,
          targetHealth: player.health
        };
      }
    }

    return { hit: false };
  }

  calculateDistance(pos1, pos2) {
    return Math.sqrt(
      Math.pow(pos1.x - pos2.x, 2) +
      Math.pow(pos1.y - pos2.y, 2) +
      Math.pow(pos1.z - pos2.z, 2)
    );
  }

  calculateDamage(weapon, distance, headshot) {
    const baseDamage = {
      pistol: 25,
      ak47: 35,
      knife: 50
    };

    let damage = baseDamage[weapon] || 20;
    
    // Distance falloff
    if (distance > 20) {
      damage *= 0.8;
    }

    // Headshot multiplier
    if (headshot) {
      damage *= 2;
    }

    return Math.round(damage);
  }

  handlePlayerDeath(victim, killer) {
    victim.deaths++;
    killer.kills++;
    victim.health = 100; // Respawn with full health

    const room = this.rooms.get(victim.roomId);
    if (room) {
      room.broadcast('playerKilled', {
        victimId: victim.id,
        killerId: killer.id,
        weapon: killer.currentWeapon
      });

      // Respawn after delay
      setTimeout(() => {
        const spawnPoint = room.getRandomSpawnPoint();
        victim.position = spawnPoint;
        victim.socket.emit('respawn', { position: spawnPoint });
        
        room.broadcast('playerRespawned', {
          playerId: victim.id,
          position: spawnPoint
        });
      }, 3000); // 3 second respawn time
    }
  }

  handleCheatDetection(player, cheatType) {
    console.log(`Cheat detected for player ${player.id}: ${cheatType}`);
    
    // Increment violation count
    player.violations++;

    // Take action based on severity
    if (player.violations >= 5) {
      // Ban player
      player.socket.emit('banned', { reason: cheatType });
      player.socket.disconnect();
      this.removePlayer(player.socket);
    } else if (player.violations >= 3) {
      // Kick player
      player.socket.emit('kicked', { reason: 'Multiple violations detected' });
      player.socket.disconnect();
    } else {
      // Warning
      player.socket.emit('warning', { 
        message: 'Suspicious activity detected',
        violations: player.violations
      });
    }
  }

  checkRateLimit(playerId, action, maxPerSecond) {
    const now = Date.now();
    const key = `${playerId}:${action}`;
    
    if (!this.rateLimiter.has(key)) {
      this.rateLimiter.set(key, []);
    }

    const timestamps = this.rateLimiter.get(key);
    
    // Remove timestamps older than 1 second
    const filtered = timestamps.filter(t => now - t < 1000);
    
    if (filtered.length >= maxPerSecond) {
      return false;
    }

    filtered.push(now);
    this.rateLimiter.set(key, filtered);
    
    return true;
  }

  startGameLoop() {
    const tickInterval = 1000 / this.config.tickRate;
    
    setInterval(() => {
      const now = Date.now();
      
      // Update each room
      for (const room of this.rooms.values()) {
        room.update(now);
        
        // Send state updates to players
        const state = room.getState();
        room.broadcast('stateUpdate', state);
      }
    }, tickInterval);
  }

  startCleanupRoutine() {
    // Clean up rate limiter
    setInterval(() => {
      const now = Date.now();
      for (const [key, timestamps] of this.rateLimiter.entries()) {
        const filtered = timestamps.filter(t => now - t < 60000);
        if (filtered.length === 0) {
          this.rateLimiter.delete(key);
        } else {
          this.rateLimiter.set(key, filtered);
        }
      }
    }, 60000); // Every minute

    // Clean up inactive rooms
    setInterval(() => {
      for (const [roomId, room] of this.rooms.entries()) {
        if (room.isEmpty() && Date.now() - room.createdAt > 5 * 60 * 1000) {
          this.rooms.delete(roomId);
          console.log(`Cleaned up inactive room: ${roomId}`);
        }
      }
    }, 5 * 60 * 1000); // Every 5 minutes
  }
}