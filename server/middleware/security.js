import rateLimit from 'express-rate-limit';
import slowDown from 'express-slow-down';
import jwt from 'jsonwebtoken';

export class SecurityMiddleware {
  // Rate limiting for API endpoints
  static createApiRateLimit() {
    return rateLimit({
      windowMs: 60 * 1000, // 1 minute
      max: parseInt(process.env.MAX_REQUESTS_PER_MINUTE) || 60,
      message: 'Too many requests, please try again later',
      standardHeaders: true,
      legacyHeaders: false,
      handler: (req, res) => {
        res.status(429).json({
          error: 'Too many requests',
          retryAfter: req.rateLimit.resetTime
        });
      }
    });
  }

  // Stricter rate limiting for authentication
  static createAuthRateLimit() {
    return rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 5, // 5 attempts per window
      message: 'Too many authentication attempts',
      standardHeaders: true,
      legacyHeaders: false,
      skipSuccessfulRequests: true, // Don't count successful logins
      handler: (req, res) => {
        res.status(429).json({
          error: 'Too many authentication attempts. Please try again later.',
          retryAfter: req.rateLimit.resetTime
        });
      }
    });
  }

  // Game action rate limiting
  static createGameRateLimit() {
    return rateLimit({
      windowMs: 1000, // 1 second
      max: 60, // 60 actions per second max
      message: 'Too many game actions',
      keyGenerator: (req) => req.userId || req.ip,
      handler: (req, res) => {
        res.status(429).json({
          error: 'Rate limit exceeded for game actions'
        });
      }
    });
  }

  // Progressive delay for suspicious behavior
  static createSlowDown() {
    return slowDown({
      windowMs: 15 * 60 * 1000, // 15 minutes
      delayAfter: 100, // Allow 100 requests per window at full speed
      delayMs: 500, // Add 500ms delay per request after delayAfter
      maxDelayMs: 20000, // Maximum delay of 20 seconds
      skipSuccessfulRequests: true
    });
  }

  // JWT token verification middleware
  static authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      return res.status(401).json({ error: 'Access token required' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        if (err.name === 'TokenExpiredError') {
          return res.status(401).json({ error: 'Token expired' });
        }
        return res.status(403).json({ error: 'Invalid token' });
      }

      req.userId = user.userId;
      req.user = user;
      next();
    });
  }

  // WebSocket rate limiting class
  static createWebSocketRateLimiter() {
    const clients = new Map();
    const cleanup = setInterval(() => {
      const now = Date.now();
      for (const [clientId, client] of clients.entries()) {
        client.actions = client.actions.filter(time => now - time < 60000);
        if (client.actions.length === 0) {
          clients.delete(clientId);
        }
      }
    }, 60000); // Cleanup every minute

    return {
      checkLimit(clientId, action) {
        const now = Date.now();
        const client = clients.get(clientId) || { actions: [] };
        
        // Remove old actions (older than 1 second)
        client.actions = client.actions.filter(a => now - a.time < 1000);
        
        // Check rate limits per action type
        const limits = {
          move: 30,     // 30 movement updates per second
          shoot: 10,    // 10 shots per second
          reload: 2,    // 2 reloads per second
          chat: 5,      // 5 chat messages per second
          default: 20   // Default limit for other actions
        };

        const actionLimit = limits[action] || limits.default;
        const actionCount = client.actions.filter(a => a.action === action).length;
        
        if (actionCount >= actionLimit) {
          return false; // Rate limit exceeded
        }

        client.actions.push({ action, time: now });
        clients.set(clientId, client);
        return true;
      },

      cleanup() {
        clearInterval(cleanup);
      }
    };
  }

  // IP-based blocking middleware
  static ipBlocker() {
    const blockedIPs = new Set();
    const tempBlocks = new Map(); // IP -> unblock timestamp

    return (req, res, next) => {
      const ip = req.ip || req.connection.remoteAddress;

      // Check permanent blocks
      if (blockedIPs.has(ip)) {
        return res.status(403).json({ error: 'Access denied' });
      }

      // Check temporary blocks
      const unblockTime = tempBlocks.get(ip);
      if (unblockTime) {
        if (Date.now() < unblockTime) {
          return res.status(403).json({ 
            error: 'Temporarily blocked',
            retryAfter: new Date(unblockTime).toISOString()
          });
        } else {
          tempBlocks.delete(ip);
        }
      }

      req.blockIP = (duration = 3600000) => { // Default 1 hour
        tempBlocks.set(ip, Date.now() + duration);
      };

      req.permanentlyBlockIP = () => {
        blockedIPs.add(ip);
      };

      next();
    };
  }

  // Request sanitization
  static sanitizeRequest(req, res, next) {
    // Remove any potential XSS attempts from query params
    for (const key in req.query) {
      if (typeof req.query[key] === 'string') {
        req.query[key] = req.query[key]
          .replace(/[<>]/g, '')
          .replace(/javascript:/gi, '')
          .replace(/on\w+\s*=/gi, '');
      }
    }

    // Sanitize body if it exists
    if (req.body && typeof req.body === 'object') {
      req.body = sanitizeObject(req.body);
    }

    next();
  }
}

// Helper function to recursively sanitize objects
function sanitizeObject(obj) {
  const sanitized = {};
  
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      
      if (typeof value === 'string') {
        sanitized[key] = value
          .replace(/[<>]/g, '')
          .replace(/javascript:/gi, '')
          .replace(/on\w+\s*=/gi, '')
          .trim();
      } else if (typeof value === 'object' && value !== null) {
        sanitized[key] = Array.isArray(value) 
          ? value.map(item => typeof item === 'object' ? sanitizeObject(item) : item)
          : sanitizeObject(value);
      } else {
        sanitized[key] = value;
      }
    }
  }
  
  return sanitized;
}