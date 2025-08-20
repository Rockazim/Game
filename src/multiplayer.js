import { io } from 'https://cdn.socket.io/4.6.2/socket.io.esm.min.js';

export class MultiplayerClient {
  constructor(game) {
    this.game = game;
    this.socket = null;
    this.connected = false;
    this.playerId = null;
    this.roomId = null;
    this.players = new Map();
    this.serverUrl = window.location.hostname === 'localhost' 
      ? 'http://localhost:3000' 
      : window.location.origin;
    
    // Network state
    this.ping = 0;
    this.lastPingTime = 0;
    
    // Authentication
    this.token = null;
    this.username = null;
  }

  async connect(username, password) {
    try {
      // First authenticate with the server
      const authResponse = await fetch(`${this.serverUrl}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      if (!authResponse.ok) {
        throw new Error('Authentication failed');
      }

      const authData = await authResponse.json();
      this.token = authData.accessToken;
      this.playerId = authData.userId;
      this.username = username;

      // Connect WebSocket with authentication
      this.socket = io(this.serverUrl, {
        auth: {
          token: this.token
        },
        transports: ['websocket', 'polling'],
        reconnection: true,
        reconnectionAttempts: 5,
        reconnectionDelay: 1000
      });

      this.setupEventHandlers();
      
      return new Promise((resolve, reject) => {
        this.socket.on('connect', () => {
          this.connected = true;
          console.log('Connected to multiplayer server');
          resolve();
        });

        this.socket.on('connect_error', (error) => {
          console.error('Connection error:', error);
          reject(error);
        });
      });
    } catch (error) {
      console.error('Failed to connect:', error);
      throw error;
    }
  }

  async register(username, email, password) {
    try {
      const response = await fetch(`${this.serverUrl}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Registration failed');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  }

  setupEventHandlers() {
    // Connection events
    this.socket.on('connected', (data) => {
      this.playerId = data.playerId;
      console.log('Player ID:', this.playerId);
      
      // Update UI with room list
      if (this.game.ui) {
        this.game.ui.updateRoomList(data.rooms);
      }
    });

    this.socket.on('disconnect', (reason) => {
      this.connected = false;
      console.log('Disconnected:', reason);
      
      // Clear other players
      this.players.clear();
      
      // Update UI
      if (this.game.ui) {
        this.game.ui.showDisconnected();
      }
    });

    // Room events
    this.socket.on('joinedRoom', (data) => {
      this.roomId = data.roomId;
      console.log('Joined room:', data.roomName);
      
      // Add existing players
      data.players.forEach(player => {
        if (player.id !== this.playerId) {
          this.addRemotePlayer(player);
        }
      });
    });

    this.socket.on('playerJoined', (data) => {
      console.log('Player joined:', data.playerName);
      this.addRemotePlayer(data);
    });

    this.socket.on('playerLeft', (data) => {
      console.log('Player left:', data.playerName);
      this.removeRemotePlayer(data.playerId);
    });

    // Game state updates
    this.socket.on('stateUpdate', (state) => {
      this.updateGameState(state);
    });

    // Player movement updates
    this.socket.on('playerMoved', (data) => {
      const player = this.players.get(data.playerId);
      if (player) {
        // Update player position with interpolation
        player.targetPosition = data.position;
        player.targetRotation = data.rotation;
        player.velocity = data.velocity;
        player.lastUpdate = Date.now();
      }
    });

    // Combat events
    this.socket.on('playerShot', (data) => {
      if (data.playerId !== this.playerId) {
        // Show remote player shooting
        this.game.showRemoteShot(data);
      }
      
      // Process hit result
      if (data.hitResult && data.hitResult.hit) {
        if (data.hitResult.targetId === this.playerId) {
          // We got hit
          this.game.player.health = data.hitResult.targetHealth;
          this.game.hud.updateHealth(this.game.player.health);
          this.game.showHitEffect();
        }
      }
    });

    this.socket.on('playerKilled', (data) => {
      if (data.victimId === this.playerId) {
        // We died
        this.game.handleDeath(data.killerId);
      } else {
        // Show kill notification
        const killer = this.players.get(data.killerId) || { name: 'Unknown' };
        const victim = this.players.get(data.victimId) || { name: 'Unknown' };
        this.game.ui.showKillNotification(killer.name, victim.name, data.weapon);
      }
    });

    this.socket.on('respawn', (data) => {
      this.game.player.position.copy(data.position);
      this.game.player.health = 100;
      this.game.hud.updateHealth(100);
    });

    // Chat events
    this.socket.on('chat', (data) => {
      if (this.game.ui) {
        this.game.ui.addChatMessage(data.playerName, data.message);
      }
    });

    // Security events
    this.socket.on('warning', (data) => {
      console.warn('Security warning:', data.message);
      if (this.game.ui) {
        this.game.ui.showWarning(data.message);
      }
    });

    this.socket.on('kicked', (data) => {
      console.error('Kicked from server:', data.reason);
      this.disconnect();
      if (this.game.ui) {
        this.game.ui.showError(`Kicked: ${data.reason}`);
      }
    });

    this.socket.on('banned', (data) => {
      console.error('Banned from server:', data.reason);
      this.disconnect();
      if (this.game.ui) {
        this.game.ui.showError(`Banned: ${data.reason}`);
      }
    });

    this.socket.on('error', (data) => {
      console.error('Server error:', data.message);
      if (this.game.ui) {
        this.game.ui.showError(data.message);
      }
    });

    // Ping measurement
    setInterval(() => {
      if (this.connected) {
        this.lastPingTime = Date.now();
        this.socket.emit('ping');
      }
    }, 5000);

    this.socket.on('pong', () => {
      this.ping = Date.now() - this.lastPingTime;
      if (this.game.ui) {
        this.game.ui.updatePing(this.ping);
      }
    });
  }

  // Send player movement to server
  sendMovement(position, rotation, velocity, input) {
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
      },
      velocity: {
        x: velocity.x,
        y: velocity.y,
        z: velocity.z
      },
      input: {
        forward: input.forward,
        backward: input.backward,
        left: input.left,
        right: input.right,
        jump: input.jump,
        crouch: input.crouch,
        sprint: input.sprint
      },
      deltaTime: this.game.deltaTime,
      timestamp: Date.now()
    });
  }

  // Send shooting action
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
      weapon,
      timestamp: Date.now()
    });
  }

  // Send weapon switch
  sendWeaponSwitch(weapon) {
    if (!this.connected || !this.roomId) return;

    this.socket.emit('switchWeapon', {
      weapon,
      timestamp: Date.now()
    });
  }

  // Send reload action
  sendReload() {
    if (!this.connected || !this.roomId) return;

    this.socket.emit('reload', {
      weapon: this.game.player.currentWeapon,
      timestamp: Date.now()
    });
  }

  // Send chat message
  sendChat(message) {
    if (!this.connected || !this.roomId) return;

    this.socket.emit('chat', {
      message,
      timestamp: Date.now()
    });
  }

  // Room management
  async getRooms() {
    try {
      const response = await fetch(`${this.serverUrl}/api/rooms`, {
        headers: {
          'Authorization': `Bearer ${this.token}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to get rooms');
      }

      return await response.json();
    } catch (error) {
      console.error('Error getting rooms:', error);
      return [];
    }
  }

  joinRoom(roomId) {
    if (!this.connected) return;

    this.socket.emit('joinRoom', {
      roomId,
      action: 'join'
    });
  }

  leaveRoom() {
    if (!this.connected || !this.roomId) return;

    this.socket.emit('leaveRoom');
    this.roomId = null;
    this.players.clear();
  }

  async createRoom(name, maxPlayers) {
    try {
      const response = await fetch(`${this.serverUrl}/api/create-room`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, maxPlayers })
      });

      if (!response.ok) {
        throw new Error('Failed to create room');
      }

      const room = await response.json();
      this.joinRoom(room.roomId);
      return room;
    } catch (error) {
      console.error('Error creating room:', error);
      throw error;
    }
  }

  // Player management
  addRemotePlayer(playerData) {
    if (playerData.id === this.playerId) return;

    // Create visual representation for remote player
    const remotePlayer = this.game.createRemotePlayer(playerData);
    
    this.players.set(playerData.id, {
      ...playerData,
      mesh: remotePlayer,
      targetPosition: playerData.position,
      targetRotation: playerData.rotation,
      lastUpdate: Date.now()
    });
  }

  removeRemotePlayer(playerId) {
    const player = this.players.get(playerId);
    if (player) {
      // Remove visual representation
      if (player.mesh) {
        this.game.removeRemotePlayer(player.mesh);
      }
      this.players.delete(playerId);
    }
  }

  updateGameState(state) {
    // Update room state
    this.roomState = state;

    // Update remote players
    state.players.forEach(playerData => {
      if (playerData.id !== this.playerId) {
        const player = this.players.get(playerData.id);
        if (player) {
          player.health = playerData.health;
          player.currentWeapon = playerData.currentWeapon;
          player.isAlive = playerData.isAlive;
        }
      }
    });

    // Update UI
    if (this.game.ui) {
      this.game.ui.updateScoreboard(state.scores);
      this.game.ui.updateGameTime(state.roundTime);
    }
  }

  // Interpolate remote player positions
  interpolatePlayers(deltaTime) {
    const now = Date.now();
    const interpolationDelay = 100; // 100ms interpolation delay

    this.players.forEach(player => {
      if (player.mesh && player.targetPosition) {
        const timeSinceUpdate = now - player.lastUpdate;
        
        // Interpolate position
        const lerpFactor = Math.min(deltaTime * 0.01, 1);
        player.mesh.position.lerp(player.targetPosition, lerpFactor);
        
        // Interpolate rotation
        if (player.targetRotation) {
          player.mesh.rotation.y = this.lerpAngle(
            player.mesh.rotation.y,
            player.targetRotation.y,
            lerpFactor
          );
        }

        // Extrapolate if no recent updates (lag compensation)
        if (timeSinceUpdate > interpolationDelay && player.velocity) {
          const extrapolationTime = (timeSinceUpdate - interpolationDelay) / 1000;
          player.mesh.position.x += player.velocity.x * extrapolationTime;
          player.mesh.position.z += player.velocity.z * extrapolationTime;
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