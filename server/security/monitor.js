import winston from 'winston';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export class SecurityMonitor {
  constructor() {
    this.logger = this.initializeLogger();
    this.events = new Map(); // Store recent events for analysis
    this.alerts = new Map(); // Track alerts and cooldowns
    this.metrics = {
      requests: 0,
      errors: 0,
      suspiciousActivities: 0,
      blockedAttempts: 0
    };
    
    this.alertThresholds = {
      failedLogins: 10,        // per minute
      suspiciousActions: 5,    // per minute
      serverErrors: 20,        // per minute
      highLatency: 1000,       // milliseconds
      connectionFlood: 100     // connections per minute
    };

    // Start periodic cleanup
    this.startCleanup();
  }

  initializeLogger() {
    const logDir = path.join(__dirname, '../../logs');
    
    return winston.createLogger({
      level: process.env.LOG_LEVEL || 'info',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.errors({ stack: true }),
        winston.format.json()
      ),
      defaultMeta: { service: 'fps-game-security' },
      transports: [
        // Error logs
        new winston.transports.File({ 
          filename: path.join(logDir, 'security-error.log'), 
          level: 'error',
          maxsize: 5242880, // 5MB
          maxFiles: 5
        }),
        // Combined logs
        new winston.transports.File({ 
          filename: path.join(logDir, 'security-combined.log'),
          maxsize: 5242880, // 5MB
          maxFiles: 10
        }),
        // Console output
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.colorize(),
            winston.format.simple()
          )
        })
      ]
    });
  }

  logSecurityEvent(eventType, data) {
    const event = {
      type: eventType,
      timestamp: new Date().toISOString(),
      severity: this.getEventSeverity(eventType),
      ...data
    };

    // Log to file
    this.logger.info('Security Event', event);

    // Store in memory for analysis
    this.storeEvent(eventType, event);

    // Check if alert should be triggered
    this.checkAlertThresholds(eventType, event);

    // Update metrics
    this.updateMetrics(eventType);
  }

  logRequest(data) {
    this.metrics.requests++;
    
    // Log only if verbose logging is enabled
    if (process.env.LOG_LEVEL === 'debug') {
      this.logger.debug('Request', data);
    }
  }

  logError(error, context = {}) {
    this.metrics.errors++;
    
    const errorEvent = {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
      ...context
    };

    this.logger.error('Application Error', errorEvent);
    
    // Check error rate
    this.checkErrorRate();
  }

  getEventSeverity(eventType) {
    const severityMap = {
      // Critical - Immediate action required
      'aimbot_detection': 'critical',
      'damage_manipulation': 'critical',
      'teleport_hack': 'critical',
      'ddos_attempt': 'critical',
      'sql_injection_attempt': 'critical',
      
      // High - Serious security concern
      'speed_hack': 'high',
      'wallhack': 'high',
      'suspicious_login': 'high',
      'unauthorized_access': 'high',
      'xss_attempt': 'high',
      
      // Medium - Notable but not critical
      'failed_login': 'medium',
      'rate_limit_exceeded': 'medium',
      'invalid_input': 'medium',
      
      // Low - Informational
      'login_success': 'low',
      'logout': 'low',
      'websocket_connection': 'low',
      'websocket_disconnection': 'low'
    };

    return severityMap[eventType] || 'low';
  }

  storeEvent(eventType, event) {
    if (!this.events.has(eventType)) {
      this.events.set(eventType, []);
    }

    const eventList = this.events.get(eventType);
    eventList.push(event);

    // Keep only last 1000 events per type
    if (eventList.length > 1000) {
      eventList.shift();
    }
  }

  checkAlertThresholds(eventType, event) {
    const severity = event.severity;
    const now = Date.now();

    // Critical events always trigger alerts
    if (severity === 'critical') {
      this.triggerAlert('CRITICAL', `${eventType}: ${JSON.stringify(event)}`);
      return;
    }

    // Check rate-based thresholds
    const recentEvents = this.getRecentEvents(eventType, 60000); // Last minute
    
    let shouldAlert = false;
    let alertMessage = '';

    switch (eventType) {
      case 'failed_login':
        if (recentEvents.length >= this.alertThresholds.failedLogins) {
          shouldAlert = true;
          alertMessage = `High number of failed logins: ${recentEvents.length} in last minute`;
        }
        break;

      case 'rate_limit_exceeded':
        if (recentEvents.length >= 50) {
          shouldAlert = true;
          alertMessage = `Excessive rate limiting triggered: ${recentEvents.length} blocks`;
        }
        break;

      case 'server_error':
        if (recentEvents.length >= this.alertThresholds.serverErrors) {
          shouldAlert = true;
          alertMessage = `High error rate: ${recentEvents.length} errors in last minute`;
        }
        break;

      default:
        // For high severity events, alert if multiple occurrences
        if (severity === 'high' && recentEvents.length >= 3) {
          shouldAlert = true;
          alertMessage = `Multiple ${eventType} events: ${recentEvents.length}`;
        }
    }

    if (shouldAlert) {
      this.triggerAlert(severity.toUpperCase(), alertMessage);
    }
  }

  getRecentEvents(eventType, windowMs) {
    const events = this.events.get(eventType) || [];
    const cutoff = Date.now() - windowMs;
    
    return events.filter(e => {
      const eventTime = new Date(e.timestamp).getTime();
      return eventTime > cutoff;
    });
  }

  triggerAlert(level, message) {
    const alertKey = `${level}:${message.substring(0, 50)}`;
    const lastAlert = this.alerts.get(alertKey);
    
    // Check cooldown (5 minutes)
    if (lastAlert && Date.now() - lastAlert < 5 * 60 * 1000) {
      return;
    }

    // Log alert
    console.error(`\n🚨 SECURITY ALERT [${level}] 🚨`);
    console.error(`Message: ${message}`);
    console.error(`Time: ${new Date().toISOString()}\n`);
    
    this.logger.error('SECURITY ALERT', { level, message });
    
    // Update alert timestamp
    this.alerts.set(alertKey, Date.now());

    // In production, this would send to external services
    // this.sendToSlack(level, message);
    // this.sendToEmail(level, message);
    // this.sendToPagerDuty(level, message);
  }

  checkErrorRate() {
    const recentErrors = this.getRecentEvents('server_error', 60000);
    
    if (recentErrors.length >= this.alertThresholds.serverErrors) {
      this.triggerAlert('HIGH', `High error rate detected: ${recentErrors.length} errors/minute`);
    }
  }

  updateMetrics(eventType) {
    const severity = this.getEventSeverity(eventType);
    
    if (severity === 'high' || severity === 'critical') {
      this.metrics.suspiciousActivities++;
    }
    
    if (eventType.includes('block') || eventType.includes('ban')) {
      this.metrics.blockedAttempts++;
    }
  }

  getMetrics() {
    return {
      ...this.metrics,
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      memory: process.memoryUsage()
    };
  }

  // Analyze patterns for anomaly detection
  analyzePatterns(userId) {
    const userEvents = [];
    
    // Collect all events for this user
    for (const [eventType, events] of this.events.entries()) {
      const userSpecificEvents = events.filter(e => e.userId === userId);
      userEvents.push(...userSpecificEvents);
    }

    // Sort by timestamp
    userEvents.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

    // Look for suspicious patterns
    const patterns = {
      rapidActions: this.detectRapidActions(userEvents),
      unusualTiming: this.detectUnusualTiming(userEvents),
      suspiciousCombinations: this.detectSuspiciousCombinations(userEvents)
    };

    return patterns;
  }

  detectRapidActions(events) {
    const rapidThreshold = 100; // milliseconds
    const rapid = [];

    for (let i = 1; i < events.length; i++) {
      const timeDiff = new Date(events[i].timestamp) - new Date(events[i-1].timestamp);
      if (timeDiff < rapidThreshold) {
        rapid.push({
          event1: events[i-1].type,
          event2: events[i].type,
          timeDiff
        });
      }
    }

    return rapid;
  }

  detectUnusualTiming(events) {
    // Check for actions at unusual hours (e.g., automated bots)
    const unusual = events.filter(e => {
      const hour = new Date(e.timestamp).getHours();
      return hour >= 3 && hour <= 5; // 3-5 AM
    });

    return unusual.length > events.length * 0.5; // More than 50% at unusual hours
  }

  detectSuspiciousCombinations(events) {
    // Look for suspicious event combinations
    const suspicious = [];
    
    for (let i = 0; i < events.length - 1; i++) {
      const current = events[i];
      const next = events[i + 1];
      
      // Failed login followed immediately by successful login (credential stuffing)
      if (current.type === 'failed_login' && next.type === 'login_success') {
        const timeDiff = new Date(next.timestamp) - new Date(current.timestamp);
        if (timeDiff < 1000) { // Less than 1 second
          suspicious.push({
            pattern: 'rapid_login_retry',
            events: [current, next]
          });
        }
      }
      
      // Multiple different hack attempts from same user
      const hackTypes = ['speed_hack', 'aimbot', 'wallhack', 'teleport_hack'];
      if (hackTypes.includes(current.type) && hackTypes.includes(next.type) && 
          current.type !== next.type) {
        suspicious.push({
          pattern: 'multiple_hack_types',
          events: [current, next]
        });
      }
    }

    return suspicious;
  }

  // Clean up old events periodically
  startCleanup() {
    setInterval(() => {
      const cutoff = Date.now() - 24 * 60 * 60 * 1000; // 24 hours
      
      for (const [eventType, events] of this.events.entries()) {
        const filtered = events.filter(e => {
          const eventTime = new Date(e.timestamp).getTime();
          return eventTime > cutoff;
        });
        
        if (filtered.length !== events.length) {
          this.events.set(eventType, filtered);
        }
      }
      
      // Clean up old alerts
      for (const [key, timestamp] of this.alerts.entries()) {
        if (Date.now() - timestamp > 60 * 60 * 1000) { // 1 hour
          this.alerts.delete(key);
        }
      }
    }, 60 * 60 * 1000); // Run every hour
  }

  // Generate security report
  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      metrics: this.getMetrics(),
      severityBreakdown: {},
      topEvents: [],
      recentAlerts: []
    };

    // Count events by severity
    for (const [eventType, events] of this.events.entries()) {
      const severity = this.getEventSeverity(eventType);
      report.severityBreakdown[severity] = (report.severityBreakdown[severity] || 0) + events.length;
    }

    // Get top event types
    const eventCounts = [];
    for (const [eventType, events] of this.events.entries()) {
      eventCounts.push({ type: eventType, count: events.length });
    }
    report.topEvents = eventCounts
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);

    // Get recent alerts
    for (const [key, timestamp] of this.alerts.entries()) {
      if (Date.now() - timestamp < 60 * 60 * 1000) { // Last hour
        report.recentAlerts.push({
          alert: key,
          timestamp: new Date(timestamp).toISOString()
        });
      }
    }

    return report;
  }
}