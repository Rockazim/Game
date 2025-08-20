import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';

export class AuthService {
  constructor() {
    this.jwtSecret = process.env.JWT_SECRET || 'dev-secret-change-in-production';
    this.refreshSecret = process.env.REFRESH_SECRET || 'dev-refresh-secret';
    this.saltRounds = 12;
    
    // In-memory storage for demo (use database in production)
    this.users = new Map();
    this.sessions = new Map();
    this.loginAttempts = new Map();
  }

  async register(username, email, password) {
    // Check if user already exists
    if (this.getUserByUsername(username)) {
      throw new Error('Username already exists');
    }

    if (this.getUserByEmail(email)) {
      throw new Error('Email already registered');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, this.saltRounds);
    
    // Create user
    const userId = this.generateUserId();
    const user = {
      id: userId,
      username: username.toLowerCase().trim(),
      email: email.toLowerCase().trim(),
      password: hashedPassword,
      createdAt: new Date(),
      lastLogin: null,
      stats: {
        kills: 0,
        deaths: 0,
        gamesPlayed: 0,
        totalScore: 0,
        accuracy: 0,
        headshots: 0
      },
      security: {
        isVerified: false,
        isBanned: false,
        failedLoginAttempts: 0,
        lastFailedLogin: null
      }
    };

    this.users.set(userId, user);
    
    // Generate tokens
    const tokens = this.generateTokenPair(userId);
    
    return {
      userId,
      username: user.username,
      ...tokens
    };
  }

  async login(username, password, ipAddress, userAgent) {
    const user = this.getUserByUsername(username);
    
    // Check login attempts
    this.checkLoginAttempts(username, ipAddress);
    
    if (!user) {
      this.recordFailedLogin(username, ipAddress);
      throw new Error('Invalid credentials');
    }

    // Check if account is banned
    if (user.security.isBanned) {
      throw new Error('Account is banned');
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(password, user.password);
    
    if (!isValidPassword) {
      this.recordFailedLogin(username, ipAddress);
      user.security.failedLoginAttempts++;
      user.security.lastFailedLogin = new Date();
      
      // Lock account after 5 failed attempts
      if (user.security.failedLoginAttempts >= 5) {
        user.security.isLocked = true;
        user.security.lockUntil = new Date(Date.now() + 30 * 60 * 1000); // 30 minutes
        throw new Error('Account locked due to multiple failed login attempts');
      }
      
      throw new Error('Invalid credentials');
    }

    // Check if account is locked
    if (user.security.isLocked && user.security.lockUntil > new Date()) {
      throw new Error('Account is temporarily locked');
    }

    // Reset failed login attempts on successful login
    user.security.failedLoginAttempts = 0;
    user.security.isLocked = false;
    user.security.lockUntil = null;
    user.lastLogin = new Date();
    user.lastIpAddress = ipAddress;
    user.lastUserAgent = userAgent;

    // Clear login attempts
    this.clearLoginAttempts(username, ipAddress);

    // Generate tokens
    const tokens = this.generateTokenPair(user.id);
    
    // Create session
    const sessionId = this.createSession(user.id, ipAddress, userAgent);
    
    return {
      userId: user.id,
      username: user.username,
      sessionId,
      ...tokens
    };
  }

  generateTokenPair(userId) {
    const accessToken = jwt.sign(
      { 
        userId, 
        type: 'access',
        timestamp: Date.now()
      },
      this.jwtSecret,
      { expiresIn: '15m' }
    );

    const refreshToken = jwt.sign(
      { 
        userId, 
        type: 'refresh',
        timestamp: Date.now()
      },
      this.refreshSecret,
      { expiresIn: '7d' }
    );

    return { accessToken, refreshToken };
  }

  verifyToken(token, type = 'access') {
    const secret = type === 'access' ? this.jwtSecret : this.refreshSecret;
    return jwt.verify(token, secret);
  }

  async refreshTokens(refreshToken) {
    try {
      const payload = this.verifyToken(refreshToken, 'refresh');
      const user = this.users.get(payload.userId);
      
      if (!user || user.security.isBanned) {
        throw new Error('Invalid refresh token');
      }

      return this.generateTokenPair(payload.userId);
    } catch (error) {
      throw new Error('Invalid refresh token');
    }
  }

  createSession(userId, ipAddress, userAgent) {
    const sessionId = this.generateSessionId();
    const session = {
      sessionId,
      userId,
      ipAddress,
      userAgent,
      createdAt: new Date(),
      lastActivity: new Date(),
      isActive: true
    };

    this.sessions.set(sessionId, session);
    
    // Clean up old sessions for this user (keep max 3)
    this.cleanupUserSessions(userId);
    
    return sessionId;
  }

  validateSession(sessionId) {
    const session = this.sessions.get(sessionId);
    
    if (!session || !session.isActive) {
      return null;
    }

    // Check session timeout (24 hours)
    const sessionAge = Date.now() - session.createdAt.getTime();
    if (sessionAge > 24 * 60 * 60 * 1000) {
      session.isActive = false;
      return null;
    }

    // Update last activity
    session.lastActivity = new Date();
    
    return session;
  }

  cleanupUserSessions(userId, maxSessions = 3) {
    const userSessions = Array.from(this.sessions.values())
      .filter(s => s.userId === userId)
      .sort((a, b) => b.lastActivity - a.lastActivity);

    // Keep only the most recent sessions
    if (userSessions.length > maxSessions) {
      const toRemove = userSessions.slice(maxSessions);
      toRemove.forEach(session => {
        session.isActive = false;
        this.sessions.delete(session.sessionId);
      });
    }
  }

  checkLoginAttempts(username, ipAddress) {
    const key = `${username}:${ipAddress}`;
    const attempts = this.loginAttempts.get(key) || [];
    
    // Filter attempts within last 15 minutes
    const recentAttempts = attempts.filter(
      time => Date.now() - time < 15 * 60 * 1000
    );

    if (recentAttempts.length >= 5) {
      throw new Error('Too many login attempts. Please try again later.');
    }

    this.loginAttempts.set(key, recentAttempts);
  }

  recordFailedLogin(username, ipAddress) {
    const key = `${username}:${ipAddress}`;
    const attempts = this.loginAttempts.get(key) || [];
    attempts.push(Date.now());
    this.loginAttempts.set(key, attempts);
  }

  clearLoginAttempts(username, ipAddress) {
    const key = `${username}:${ipAddress}`;
    this.loginAttempts.delete(key);
  }

  getUserByUsername(username) {
    username = username.toLowerCase().trim();
    for (const user of this.users.values()) {
      if (user.username === username) {
        return user;
      }
    }
    return null;
  }

  getUserByEmail(email) {
    email = email.toLowerCase().trim();
    for (const user of this.users.values()) {
      if (user.email === email) {
        return user;
      }
    }
    return null;
  }

  getUserById(userId) {
    return this.users.get(userId);
  }

  generateUserId() {
    return crypto.randomBytes(16).toString('hex');
  }

  generateSessionId() {
    return crypto.randomBytes(32).toString('hex');
  }

  // Admin functions for security management
  banUser(userId, reason, duration = null) {
    const user = this.users.get(userId);
    if (!user) return false;

    user.security.isBanned = true;
    user.security.banReason = reason;
    user.security.banDate = new Date();
    user.security.banExpires = duration ? new Date(Date.now() + duration) : null;

    // Invalidate all sessions
    for (const [sessionId, session] of this.sessions.entries()) {
      if (session.userId === userId) {
        session.isActive = false;
        this.sessions.delete(sessionId);
      }
    }

    return true;
  }

  unbanUser(userId) {
    const user = this.users.get(userId);
    if (!user) return false;

    user.security.isBanned = false;
    user.security.banReason = null;
    user.security.banDate = null;
    user.security.banExpires = null;

    return true;
  }

  // Clean up expired sessions periodically
  startSessionCleanup() {
    setInterval(() => {
      const now = Date.now();
      for (const [sessionId, session] of this.sessions.entries()) {
        const age = now - session.createdAt.getTime();
        if (age > 24 * 60 * 60 * 1000 || !session.isActive) {
          this.sessions.delete(sessionId);
        }
      }
    }, 60 * 60 * 1000); // Run every hour
  }
}