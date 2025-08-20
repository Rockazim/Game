import validator from 'validator';
import crypto from 'crypto';

export class ValidationService {
  constructor() {
    this.schemas = {
      movement: {
        position: { type: 'object', required: ['x', 'y', 'z'] },
        rotation: { type: 'object', required: ['x', 'y'] },
        velocity: { type: 'object', required: ['x', 'y', 'z'] },
        timestamp: { type: 'number', min: 0 }
      },
      chat: {
        message: { type: 'string', maxLength: 200 },
        timestamp: { type: 'number', min: 0 }
      },
      weapon: {
        type: { type: 'string', enum: ['pistol', 'ak47', 'knife'] },
        action: { type: 'string', enum: ['shoot', 'reload', 'switch'] },
        position: { type: 'object', required: ['x', 'y', 'z'] },
        direction: { type: 'object', required: ['x', 'y', 'z'] },
        timestamp: { type: 'number', min: 0 }
      },
      room: {
        action: { type: 'string', enum: ['join', 'leave', 'create'] },
        roomId: { type: 'string', maxLength: 50 },
        name: { type: 'string', maxLength: 50 },
        maxPlayers: { type: 'number', min: 2, max: 20 }
      }
    };

    // Map bounds for position validation
    this.mapBounds = {
      x: { min: -100, max: 100 },
      y: { min: -10, max: 50 },
      z: { min: -100, max: 100 }
    };
  }

  // Username validation (3-20 chars, alphanumeric + underscore)
  validateUsername(username) {
    if (!username || typeof username !== 'string') return false;
    
    const trimmed = username.trim();
    if (trimmed.length < 3 || trimmed.length > 20) return false;
    
    return /^[a-zA-Z0-9_]+$/.test(trimmed);
  }

  // Email validation
  validateEmail(email) {
    if (!email || typeof email !== 'string') return false;
    return validator.isEmail(email);
  }

  // Password validation (min 8 chars, complexity requirements)
  validatePassword(password) {
    if (!password || typeof password !== 'string') return false;
    if (password.length < 8) return false;
    
    // Must contain: lowercase, uppercase, number, special char
    const hasLower = /[a-z]/.test(password);
    const hasUpper = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecial = /[@$!%*?&]/.test(password);
    
    return hasLower && hasUpper && hasNumber && hasSpecial;
  }

  // Validate game input against schema
  validateInput(data, schemaName) {
    const schema = this.schemas[schemaName];
    if (!schema) {
      throw new Error(`Unknown schema: ${schemaName}`);
    }

    return this.validateAgainstSchema(data, schema);
  }

  validateAgainstSchema(data, schema) {
    const errors = [];

    for (const [key, rules] of Object.entries(schema)) {
      const value = data[key];

      // Check required fields
      if (rules.required && (value === undefined || value === null)) {
        errors.push(`${key} is required`);
        continue;
      }

      if (value === undefined || value === null) continue;

      // Type validation
      if (rules.type === 'string' && typeof value !== 'string') {
        errors.push(`${key} must be a string`);
        continue;
      }

      if (rules.type === 'number' && typeof value !== 'number') {
        errors.push(`${key} must be a number`);
        continue;
      }

      if (rules.type === 'object' && typeof value !== 'object') {
        errors.push(`${key} must be an object`);
        continue;
      }

      // String validations
      if (rules.type === 'string') {
        if (rules.maxLength && value.length > rules.maxLength) {
          errors.push(`${key} exceeds maximum length of ${rules.maxLength}`);
        }

        if (rules.enum && !rules.enum.includes(value)) {
          errors.push(`${key} must be one of: ${rules.enum.join(', ')}`);
        }
      }

      // Number validations
      if (rules.type === 'number') {
        if (rules.min !== undefined && value < rules.min) {
          errors.push(`${key} must be at least ${rules.min}`);
        }

        if (rules.max !== undefined && value > rules.max) {
          errors.push(`${key} must be at most ${rules.max}`);
        }

        if (!Number.isFinite(value)) {
          errors.push(`${key} must be a finite number`);
        }
      }

      // Object validations
      if (rules.type === 'object' && rules.required) {
        for (const requiredKey of rules.required) {
          if (value[requiredKey] === undefined) {
            errors.push(`${key}.${requiredKey} is required`);
          }
        }
      }
    }

    if (errors.length > 0) {
      throw new ValidationError(errors);
    }

    return true;
  }

  // Validate position within map bounds
  validatePosition(position) {
    if (!position || typeof position !== 'object') {
      throw new ValidationError(['Invalid position object']);
    }

    const errors = [];

    for (const [axis, bounds] of Object.entries(this.mapBounds)) {
      const value = position[axis];
      
      if (value === undefined || value === null) {
        errors.push(`Position ${axis} is required`);
        continue;
      }

      if (typeof value !== 'number' || !Number.isFinite(value)) {
        errors.push(`Position ${axis} must be a finite number`);
        continue;
      }

      if (value < bounds.min || value > bounds.max) {
        errors.push(`Position ${axis} out of bounds (${bounds.min} to ${bounds.max})`);
      }
    }

    if (errors.length > 0) {
      throw new ValidationError(errors);
    }

    return true;
  }

  // Validate rotation values
  validateRotation(rotation) {
    if (!rotation || typeof rotation !== 'object') {
      throw new ValidationError(['Invalid rotation object']);
    }

    const errors = [];

    // Check X rotation (pitch) - typically -90 to 90 degrees
    if (rotation.x !== undefined) {
      if (typeof rotation.x !== 'number' || !Number.isFinite(rotation.x)) {
        errors.push('Rotation X must be a finite number');
      } else if (rotation.x < -Math.PI/2 || rotation.x > Math.PI/2) {
        errors.push('Rotation X out of valid range');
      }
    }

    // Check Y rotation (yaw) - 0 to 2π
    if (rotation.y !== undefined) {
      if (typeof rotation.y !== 'number' || !Number.isFinite(rotation.y)) {
        errors.push('Rotation Y must be a finite number');
      }
    }

    if (errors.length > 0) {
      throw new ValidationError(errors);
    }

    return true;
  }

  // Sanitize chat messages
  sanitizeChat(message) {
    if (!message || typeof message !== 'string') return '';
    
    // Remove HTML tags and dangerous content
    let sanitized = validator.escape(message);
    
    // Additional filtering
    sanitized = sanitized
      .replace(/javascript:/gi, '')
      .replace(/data:/gi, '')
      .replace(/vbscript:/gi, '')
      .replace(/on\w+\s*=/gi, '')
      .trim();

    // Limit length
    if (sanitized.length > 200) {
      sanitized = sanitized.substring(0, 200);
    }

    return sanitized;
  }

  // Sanitize room/player names
  sanitizeName(name) {
    if (!name || typeof name !== 'string') return '';
    
    // Allow only alphanumeric, spaces, and some special chars
    let sanitized = name.replace(/[^a-zA-Z0-9\s\-_]/g, '').trim();
    
    // Limit length
    if (sanitized.length > 50) {
      sanitized = sanitized.substring(0, 50);
    }

    return sanitized;
  }

  // Generate secure random IDs
  generateSessionId() {
    return crypto.randomBytes(32).toString('hex');
  }

  generateRoomId() {
    return crypto.randomBytes(16).toString('hex');
  }

  generatePlayerId() {
    return crypto.randomBytes(16).toString('hex');
  }

  // Validate WebSocket message
  validateWebSocketMessage(message) {
    if (!message || typeof message !== 'object') {
      throw new ValidationError(['Invalid message format']);
    }

    if (!message.type || typeof message.type !== 'string') {
      throw new ValidationError(['Message type is required']);
    }

    if (message.type.length > 50) {
      throw new ValidationError(['Message type too long']);
    }

    if (!message.data) {
      throw new ValidationError(['Message data is required']);
    }

    // Validate timestamp if present
    if (message.timestamp !== undefined) {
      if (typeof message.timestamp !== 'number' || !Number.isFinite(message.timestamp)) {
        throw new ValidationError(['Invalid timestamp']);
      }

      // Check if timestamp is reasonable (not too far in past or future)
      const now = Date.now();
      const diff = Math.abs(now - message.timestamp);
      if (diff > 60000) { // More than 1 minute difference
        throw new ValidationError(['Timestamp too far from current time']);
      }
    }

    return true;
  }

  // Validate file upload (for future features like custom skins)
  validateFileUpload(file) {
    const errors = [];

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      errors.push('File too large (max 5MB)');
    }

    // Check file type
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (!allowedTypes.includes(file.mimetype)) {
      errors.push('Invalid file type');
    }

    // Check file extension
    const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
    const ext = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();
    if (!allowedExtensions.includes(ext)) {
      errors.push('Invalid file extension');
    }

    if (errors.length > 0) {
      throw new ValidationError(errors);
    }

    return true;
  }
}

// Custom validation error class
export class ValidationError extends Error {
  constructor(errors) {
    super(`Validation failed: ${errors.join(', ')}`);
    this.errors = errors;
    this.name = 'ValidationError';
  }
}