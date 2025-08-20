import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { SecurityMiddleware } from './middleware/security.js';
import { AuthService } from './auth/authService.js';
import { GameServer } from './game/gameServer.js';
import { SecurityMonitor } from './security/monitor.js';
import { ValidationService } from './security/validation.js';

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
    origin: process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:5173'],
    credentials: true
  },
  transports: ['websocket', 'polling'],
  pingTimeout: 60000,
  pingInterval: 25000,
  maxHttpBufferSize: 1e6, // 1MB max message size
  connectionStateRecovery: {
    maxDisconnectionDuration: 2 * 60 * 1000, // 2 minutes
    skipMiddlewares: false
  }
});

// Initialize services
const authService = new AuthService();
const gameServer = new GameServer(io);
const securityMonitor = new SecurityMonitor();
const validationService = new ValidationService();

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
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

// Compression
app.use(compression());

// Body parsing
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Rate limiting
app.use('/api/', SecurityMiddleware.createApiRateLimit());
app.use('/auth/', SecurityMiddleware.createAuthRateLimit());

// Request logging
app.use((req, res, next) => {
  securityMonitor.logRequest({
    method: req.method,
    path: req.path,
    ip: req.ip,
    userAgent: req.get('user-agent')
  });
  next();
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    connections: io.engine.clientsCount
  });
});

// Authentication routes
app.post('/auth/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    
    // Validate input
    if (!validationService.validateUsername(username) ||
        !validationService.validateEmail(email) ||
        !validationService.validatePassword(password)) {
      return res.status(400).json({ error: 'Invalid input format' });
    }

    const result = await authService.register(username, email, password);
    res.json(result);
  } catch (error) {
    securityMonitor.logSecurityEvent('registration_error', { error: error.message });
    res.status(400).json({ error: error.message });
  }
});

app.post('/auth/login', SecurityMiddleware.createAuthRateLimit(), async (req, res) => {
  try {
    const { username, password } = req.body;
    const ipAddress = req.ip;
    const userAgent = req.get('user-agent');
    
    const result = await authService.login(username, password, ipAddress, userAgent);
    res.json(result);
  } catch (error) {
    securityMonitor.logSecurityEvent('login_error', { 
      username: req.body.username,
      error: error.message,
      ip: req.ip 
    });
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

// Game API routes
app.get('/api/rooms', SecurityMiddleware.authenticateToken, (req, res) => {
  const rooms = gameServer.getRoomList();
  res.json(rooms);
});

app.post('/api/create-room', SecurityMiddleware.authenticateToken, (req, res) => {
  try {
    const { name, maxPlayers } = req.body;
    const room = gameServer.createRoom(name, maxPlayers);
    res.json(room);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Socket.io authentication middleware
io.use(async (socket, next) => {
  try {
    const token = socket.handshake.auth.token;
    
    if (!token) {
      return next(new Error('Authentication required'));
    }

    const payload = await authService.verifyToken(token);
    socket.userId = payload.userId;
    socket.sessionId = validationService.generateSessionId();
    
    // Log connection
    securityMonitor.logSecurityEvent('websocket_connection', {
      userId: payload.userId,
      ip: socket.handshake.address,
      sessionId: socket.sessionId
    });
    
    next();
  } catch (error) {
    next(new Error('Authentication failed'));
  }
});

// Socket.io connection handling
io.on('connection', (socket) => {
  console.log(`Player connected: ${socket.userId} (${socket.sessionId})`);
  
  // Add player to game server
  gameServer.addPlayer(socket);
  
  // Handle disconnection
  socket.on('disconnect', (reason) => {
    console.log(`Player disconnected: ${socket.userId} - ${reason}`);
    gameServer.removePlayer(socket);
    
    securityMonitor.logSecurityEvent('websocket_disconnection', {
      userId: socket.userId,
      sessionId: socket.sessionId,
      reason
    });
  });
  
  // Error handling
  socket.on('error', (error) => {
    console.error(`Socket error for ${socket.userId}:`, error);
    securityMonitor.logSecurityEvent('websocket_error', {
      userId: socket.userId,
      error: error.message
    });
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  securityMonitor.logSecurityEvent('server_error', {
    error: err.message,
    stack: err.stack,
    path: req.path,
    method: req.method
  });
  
  // Don't leak error details in production
  const message = process.env.NODE_ENV === 'production' 
    ? 'Internal server error' 
    : err.message;
    
  res.status(err.status || 500).json({ error: message });
});

// Start server
const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => {
  console.log(`🚀 Secure FPS Game Server running on port ${PORT}`);
  console.log(`🔒 Security features enabled`);
  console.log(`📊 Monitoring active`);
  console.log(`🎮 Game server ready`);
  
  // Log server start
  securityMonitor.logSecurityEvent('server_started', {
    port: PORT,
    environment: process.env.NODE_ENV,
    timestamp: new Date().toISOString()
  });
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  httpServer.close(() => {
    console.log('HTTP server closed');
    process.exit(0);
  });
});

export { app, io, httpServer };