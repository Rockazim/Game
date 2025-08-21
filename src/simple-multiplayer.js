import { io } from 'https://cdn.socket.io/4.6.2/socket.io.esm.min.js';

export class SimpleMultiplayer {
  constructor(game) {
    this.game = game;
    this.socket = null;
    this.connected = false;
    this.playerId = null;
    this.username = null;
    this.roomId = null;
    this.players = new Map();
    
    // Determine server URL based on environment
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      // Local development - connect to local server
      this.serverUrl = 'http://localhost:3000';
    } else if (window.location.hostname === 'hyperfps.xyz') {
      // Production - connect to production server
      this.serverUrl = 'https://hyperfps.xyz:3000';
    } else {
      // Fallback to same origin
      this.serverUrl = window.location.origin;
    }
  }

  connect(username) {
    this.username = username || `Player${Math.floor(Math.random() * 9999)}`;
    
    // Connect to server
    this.socket = io(this.serverUrl, {
      transports: ['websocket', 'polling'],
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000
    });

    this.setupEventHandlers();
    
    // Join immediately with username
    this.socket.on('connect', () => {
      this.connected = true;
      console.log('Connected to server');
      
      this.socket.emit('join', { username: this.username });
    });

    this.socket.on('connect_error', (error) => {
      console.error('Connection error:', error);
    });
  }

  setupEventHandlers() {
    // Player joined successfully
    this.socket.on('joined', (data) => {
      this.playerId = data.playerId;
      this.username = data.username;
      console.log(`Joined as ${this.username} (${this.playerId})`);
      
      // Update UI with rooms
      if (this.game.ui) {
        this.game.ui.showRoomList(data.rooms);
      }
    });

    // Room events
    this.socket.on('roomCreated', (data) => {
      console.log('Room created:', data.name);
    });

    this.socket.on('joinedRoom', (data) => {
      this.roomId = data.roomId;
      console.log('Joined room:', data.roomName);
      
      // Clear existing players
      this.players.clear();
      
      // Add existing players
      data.players.forEach(player => {
        if (player.id !== this.playerId) {
          this.addRemotePlayer(player);
        }
      });
      
      // Hide room list, show game
      if (this.game.ui) {
        this.game.ui.hideRoomList();
      }
    });

    this.socket.on('playerJoined', (data) => {
      console.log('Player joined:', data.username);
      this.addRemotePlayer(data);
      
      if (this.game.ui) {
        this.game.ui.showNotification(`${data.username} joined`);
      }
    });

    this.socket.on('playerLeft', (data) => {
      console.log('Player left:', data.username);
      this.removeRemotePlayer(data.id);
      
      if (this.game.ui) {
        this.game.ui.showNotification(`${data.username} left`);
      }
    });

    this.socket.on('leftRoom', () => {
      this.roomId = null;
      this.players.clear();
      
      if (this.game.ui) {
        this.game.ui.showRoomList();
      }
    });

    // Movement updates
    this.socket.on('playerMoved', (data) => {
      const player = this.players.get(data.id);
      if (player) {
        // Smooth interpolation
        player.targetPosition = data.position;
        player.targetRotation = data.rotation;
      }
    });

    // Combat events
    this.socket.on('playerShot', (data) => {
      if (data.playerId !== this.playerId) {
        // Show remote player shooting
        if (this.game.showRemoteShot) {
          this.game.showRemoteShot(data);
        }
      }
    });

    this.socket.on('playerHit', (data) => {
      if (data.targetId === this.playerId) {
        // We got hit
        if (this.game.player) {
          this.game.player.health = data.health;
        }
        if (this.game.hud) {
          this.game.hud.updateHealth(data.health);
        }
        if (this.game.showHitEffect) {
          this.game.showHitEffect();
        }
      }
    });

    this.socket.on('playerKilled', (data) => {
      if (data.victimId === this.playerId) {
        // We died
        if (this.game.handleDeath) {
          this.game.handleDeath(data.killerName);
        }
      }
      
      // Show kill notification
      if (this.game.ui) {
        this.game.ui.showKillNotification(data.killerName, data.victimName, data.weapon);
      }
    });

    this.socket.on('playerRespawned', (data) => {
      if (data.id === this.playerId) {
        // We respawned
        if (this.game.player) {
          this.game.player.position.set(data.position.x, data.position.y, data.position.z);
          this.game.player.health = 100;
        }
        if (this.game.hud) {
          this.game.hud.updateHealth(100);
        }
      } else {
        // Remote player respawned
        const player = this.players.get(data.id);
        if (player && player.mesh) {
          player.mesh.position.set(data.position.x, data.position.y, data.position.z);
        }
      }
    });

    // Chat
    this.socket.on('chat', (data) => {
      if (this.game.ui) {
        this.game.ui.addChatMessage(data.username, data.message);
      }
    });

    // Errors
    this.socket.on('error', (data) => {
      console.error('Server error:', data.message);
      if (this.game.ui) {
        this.game.ui.showError(data.message);
      }
    });

    // Disconnection
    this.socket.on('disconnect', () => {
      this.connected = false;
      console.log('Disconnected from server');
      
      if (this.game.ui) {
        this.game.ui.showDisconnected();
      }
    });
  }

  // Room management
  createRoom(name, maxPlayers = 10) {
    if (!this.connected) return;
    
    this.socket.emit('createRoom', { name, maxPlayers });
  }

  joinRoom(roomId) {
    if (!this.connected) return;
    
    this.socket.emit('joinRoom', { roomId });
  }

  leaveRoom() {
    if (!this.connected || !this.roomId) return;
    
    this.socket.emit('leaveRoom');
  }

  // Send updates
  sendMovement(position, rotation) {
    if (!this.connected || !this.roomId) return;
    
    this.socket.emit('move', {
      position: {
        x: position.x,
        y: position.y,
        z: position.z
      },
      rotation: {
        x: rotation.x,
        y: rotation.y
      }
    });
  }

  sendShoot(position, direction, weapon) {
    if (!this.connected || !this.roomId) return;
    
    this.socket.emit('shoot', {
      position: {
        x: position.x,
        y: position.y,
        z: position.z
      },
      direction: {
        x: direction.x,
        y: direction.y,
        z: direction.z
      },
      weapon
    });
  }

  sendHit(targetId, damage, weapon) {
    if (!this.connected || !this.roomId) return;
    
    this.socket.emit('hit', {
      targetId,
      damage,
      weapon
    });
  }

  sendChat(message) {
    if (!this.connected || !this.roomId) return;
    
    this.socket.emit('chat', { message });
  }

  // Player management
  addRemotePlayer(playerData) {
    if (playerData.id === this.playerId) return;
    
    // Create visual representation
    let mesh = null;
    if (this.game.createRemotePlayer) {
      mesh = this.game.createRemotePlayer(playerData);
    }
    
    this.players.set(playerData.id, {
      ...playerData,
      mesh,
      targetPosition: playerData.position,
      targetRotation: playerData.rotation || { x: 0, y: 0 }
    });
  }

  removeRemotePlayer(playerId) {
    const player = this.players.get(playerId);
    if (player) {
      if (player.mesh && this.game.removeRemotePlayer) {
        this.game.removeRemotePlayer(player.mesh);
      }
      this.players.delete(playerId);
    }
  }

  // Update remote players with interpolation
  updatePlayers(deltaTime) {
    this.players.forEach(player => {
      if (player.mesh && player.targetPosition) {
        // Smooth interpolation
        const lerpFactor = Math.min(deltaTime * 5, 1);
        
        player.mesh.position.lerp(player.targetPosition, lerpFactor);
        
        if (player.targetRotation) {
          player.mesh.rotation.y = this.lerpAngle(
            player.mesh.rotation.y,
            player.targetRotation.y,
            lerpFactor
          );
        }
      }
    });
  }

  lerpAngle(current, target, factor) {
    let delta = target - current;
    
    // Normalize angle difference
    while (delta > Math.PI) delta -= Math.PI * 2;
    while (delta < -Math.PI) delta += Math.PI * 2;
    
    return current + delta * factor;
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
    
    this.connected = false;
    this.roomId = null;
    this.players.clear();
  }
}