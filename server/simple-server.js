import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize Express app
const app = express();
const httpServer = createServer(app);

// Initialize Socket.io with security config
const io = new Server(httpServer, {
  cors: {
    origin: process.env.ALLOWED_ORIGINS?.split(',') || [
      'http://localhost:5173',
      'https://hyperfps.xyz',
      'https://www.hyperfps.xyz',
      'https://137.184.228.68'
    ],
    credentials: true
  },
  transports: ['websocket', 'polling'],
  pingTimeout: 60000,
  pingInterval: 25000,
  maxHttpBufferSize: 1e6 // 1MB max message size
});

// Game state
const rooms = new Map();
const players = new Map();
let nextPlayerId = 1;

// Security middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'", "ws:", "wss:"],
      fontSrc: ["'self'"],
      objectSrc: ["'none'"],
      mediaSrc: ["'self'"],
      frameSrc: ["'none'"],
    },
  },
  crossOriginEmbedderPolicy: false
}));

// CORS configuration
app.use(cors({
  origin: (origin, callback) => {
    const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:5173'];
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(null, true); // Allow all origins for now
    }
  },
  credentials: true
}));

// Compression
app.use(compression());

// Body parsing
app.use(express.json({ limit: '10mb' }));

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    connections: io.engine.clientsCount,
    rooms: rooms.size,
    players: players.size
  });
});

// Socket.io connection handling - NO AUTHENTICATION
io.on('connection', (socket) => {
  console.log('New connection:', socket.id);

  // Handle player join with just a username
  socket.on('join', (data) => {
    const username = data.username || `Player${nextPlayerId}`;
    const playerId = `player_${nextPlayerId++}`;
    
    const player = {
      id: playerId,
      socketId: socket.id,
      username: username.substring(0, 20), // Limit username length
      position: { x: 0, y: 0, z: 0 },
      rotation: { x: 0, y: 0 },
      health: 100,
      currentWeapon: 'pistol',
      roomId: null,
      kills: 0,
      deaths: 0,
      isDead: false
    };

    players.set(socket.id, player);
    socket.playerId = playerId;

    // Send player their info
    socket.emit('joined', {
      playerId: playerId,
      username: player.username,
      rooms: Array.from(rooms.values()).map(r => ({
        id: r.id,
        name: r.name,
        players: r.players.length,
        maxPlayers: r.maxPlayers
      }))
    });

    console.log(`Player joined: ${player.username} (${playerId})`);
  });

  // Create room
  socket.on('createRoom', (data) => {
    const player = players.get(socket.id);
    if (!player) return;

    const roomId = `room_${Date.now()}`;
    const room = {
      id: roomId,
      name: data.name || 'Unnamed Room',
      maxPlayers: Math.min(data.maxPlayers || 10, 20),
      players: [],
      gameState: 'waiting'
    };

    rooms.set(roomId, room);
    socket.emit('roomCreated', { roomId, name: room.name });
    
    // Auto-join the created room
    joinRoom(socket, roomId);
  });

  // Join room
  socket.on('joinRoom', (data) => {
    joinRoom(socket, data.roomId);
  });

  function joinRoom(socket, roomId) {
    const player = players.get(socket.id);
    const room = rooms.get(roomId);
    
    if (!player || !room) {
      socket.emit('error', { message: 'Room not found' });
      return;
    }

    if (room.players.length >= room.maxPlayers) {
      socket.emit('error', { message: 'Room is full' });
      return;
    }

    // Leave current room if in one
    if (player.roomId) {
      leaveRoom(socket);
    }

    // Join new room
    room.players.push(player);
    player.roomId = roomId;
    socket.join(roomId);

    // Spawn position
    player.position = getSpawnPosition();

    // Notify player
    socket.emit('joinedRoom', {
      roomId: room.id,
      roomName: room.name,
      players: room.players.map(p => ({
        id: p.id,
        username: p.username,
        position: p.position,
        health: p.health
      }))
    });

    // Notify others in room
    socket.to(roomId).emit('playerJoined', {
      id: player.id,
      username: player.username,
      position: player.position
    });

    console.log(`${player.username} joined room ${room.name}`);
  }

  // Leave room
  socket.on('leaveRoom', () => {
    leaveRoom(socket);
  });

  function leaveRoom(socket) {
    const player = players.get(socket.id);
    if (!player || !player.roomId) return;

    const room = rooms.get(player.roomId);
    if (!room) return;

    // Remove player from room
    room.players = room.players.filter(p => p.id !== player.id);
    socket.leave(player.roomId);

    // Notify others
    socket.to(player.roomId).emit('playerLeft', {
      id: player.id,
      username: player.username
    });

    // Delete empty rooms
    if (room.players.length === 0) {
      rooms.delete(player.roomId);
      console.log(`Room ${room.name} deleted (empty)`);
    }

    player.roomId = null;
    socket.emit('leftRoom');
  }

  // Movement
  socket.on('move', (data) => {
    const player = players.get(socket.id);
    if (!player || !player.roomId) return;

    // Simple validation
    if (isValidPosition(data.position)) {
      player.position = data.position;
      player.rotation = data.rotation;

      // Broadcast to others in room
      socket.to(player.roomId).emit('playerMoved', {
        id: player.id,
        position: data.position,
        rotation: data.rotation
      });
    }
  });

  // Shooting
  socket.on('shoot', (data) => {
    const player = players.get(socket.id);
    if (!player || !player.roomId) return;

    // Broadcast to room
    io.to(player.roomId).emit('playerShot', {
      playerId: player.id,
      position: data.position,
      direction: data.direction,
      weapon: data.weapon || 'pistol'
    });
  });

  // Hit detection (simplified)
  socket.on('hit', (data) => {
    console.log('Hit event received:', data);
    const player = players.get(socket.id);
    const target = Array.from(players.values()).find(p => p.id === data.targetId);
    
    console.log('Shooter:', player?.username, player?.id);
    console.log('Target found:', target?.username, target?.id);
    
    if (!player || !target || player.roomId !== target.roomId) return;

    // Apply damage
    target.health = Math.max(0, target.health - (data.damage || 25));

    // Notify players
    io.to(player.roomId).emit('playerHit', {
      shooterId: player.id,
      targetId: target.id,
      damage: data.damage || 25,
      health: target.health
    });

    // Handle death
    if (target.health <= 0) {
      player.kills++;
      target.deaths++;
      
      io.to(player.roomId).emit('playerKilled', {
        killerId: player.id,
        killerName: player.username,
        victimId: target.id,
        victimName: target.username,
        weapon: data.weapon
      });

      // Mark player as dead (don't auto-respawn)
      target.isDead = true;
    }
  });

  // Manual respawn request
  socket.on('requestRespawn', () => {
    const player = players.get(socket.id);
    if (!player || !player.roomId) return;
    
    // Only respawn if dead
    if (!player.isDead) return;
    
    // Respawn player
    player.health = 100;
    player.isDead = false;
    player.position = getSpawnPosition();
    
    // Notify all players in room
    io.to(player.roomId).emit('playerRespawned', {
      id: player.id,
      position: player.position
    });
    
    console.log(`${player.username} respawned`);
  });
  
  // Chat
  socket.on('chat', (data) => {
    const player = players.get(socket.id);
    if (!player || !player.roomId) return;

    const message = data.message.substring(0, 200); // Limit message length
    
    io.to(player.roomId).emit('chat', {
      playerId: player.id,
      username: player.username,
      message: message,
      timestamp: Date.now()
    });
  });

  // Disconnection
  socket.on('disconnect', () => {
    const player = players.get(socket.id);
    if (player) {
      console.log(`Player disconnected: ${player.username}`);
      
      if (player.roomId) {
        leaveRoom(socket);
      }
      
      players.delete(socket.id);
    }
  });
});

// Helper functions
function getSpawnPosition() {
  const spawns = [
    { x: 0, y: 0, z: 0 },
    { x: 10, y: 0, z: 10 },
    { x: -10, y: 0, z: 10 },
    { x: 10, y: 0, z: -10 },
    { x: -10, y: 0, z: -10 }
  ];
  return spawns[Math.floor(Math.random() * spawns.length)];
}

function isValidPosition(pos) {
  return pos && 
    typeof pos.x === 'number' && 
    typeof pos.y === 'number' && 
    typeof pos.z === 'number' &&
    Math.abs(pos.x) < 1000 &&
    Math.abs(pos.y) < 1000 &&
    Math.abs(pos.z) < 1000;
}

// Start server
const PORT = process.env.PORT || 3000;
const HOST = process.env.NODE_ENV === 'production' ? '127.0.0.1' : '0.0.0.0';

httpServer.listen(PORT, HOST, () => {
  console.log(`🎮 HyperFPS Server running on ${HOST}:${PORT}`);
  console.log(`🌐 Environment: ${process.env.NODE_ENV || 'development'}`);
  if (process.env.NODE_ENV === 'production') {
    console.log(`🌐 Domain: https://hyperfps.xyz`);
    console.log(`🔒 Server bound to localhost only (nginx proxy required)`);
  }
  console.log(`✅ No authentication required - just enter username!`);
});

export { app, io, httpServer };