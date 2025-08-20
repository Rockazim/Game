# Secure Multiplayer FPS Game Deployment Guide

## 🔒 Security-First Deployment

This guide provides comprehensive instructions for deploying your multiplayer FPS game with enterprise-grade security.

## Prerequisites

- Node.js 18+ installed
- Docker and Docker Compose (for containerized deployment)
- SSL certificate (for HTTPS)
- Domain name (for public access)
- Redis server (for session management)

## Quick Start (Development)

1. **Install Server Dependencies**
```bash
cd server
npm install
```

2. **Configure Environment**
```bash
cp .env.example .env
# Edit .env with your configuration
```

3. **Start Server**
```bash
npm start
```

4. **Start Client**
```bash
cd ..
npm run dev
```

## Production Deployment Options

### Option 1: Docker Deployment (Recommended)

1. **Build Docker Image**
```bash
docker-compose build
```

2. **Start Services**
```bash
docker-compose up -d
```

### Option 2: Cloud Platform Deployment

#### AWS EC2 / DigitalOcean

1. **Set up Ubuntu 22.04 server**
2. **Install dependencies:**
```bash
sudo apt update
sudo apt install nodejs npm nginx certbot python3-certbot-nginx redis-server
```

3. **Configure Nginx** (see nginx.conf below)
4. **Set up SSL:**
```bash
sudo certbot --nginx -d yourgame.com
```

5. **Start with PM2:**
```bash
npm install -g pm2
pm2 start server/server.js --name fps-game
pm2 save
pm2 startup
```

#### Heroku Deployment

1. **Create Heroku app:**
```bash
heroku create your-fps-game
```

2. **Add Redis addon:**
```bash
heroku addons:create heroku-redis:hobby-dev
```

3. **Set environment variables:**
```bash
heroku config:set JWT_SECRET=your-secret-key
heroku config:set NODE_ENV=production
```

4. **Deploy:**
```bash
git push heroku main
```

## Security Configuration

### 1. Environment Variables (Production)

```env
NODE_ENV=production
PORT=3000

# Security Keys (Use strong, unique values!)
JWT_SECRET=<generate-with-openssl-rand-base64-32>
REFRESH_SECRET=<generate-with-openssl-rand-base64-32>
SESSION_SECRET=<generate-with-openssl-rand-base64-32>

# CORS (Restrict to your domain)
ALLOWED_ORIGINS=https://yourgame.com

# Rate Limiting
MAX_REQUESTS_PER_MINUTE=60
MAX_WEBSOCKET_CONNECTIONS=1000

# Redis (Use Redis Cloud or AWS ElastiCache in production)
REDIS_HOST=redis.yourgame.com
REDIS_PORT=6379
REDIS_PASSWORD=<strong-password>

# Monitoring
LOG_LEVEL=warn
ENABLE_MONITORING=true
```

### 2. Nginx Configuration

```nginx
server {
    listen 80;
    server_name yourgame.com www.yourgame.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name yourgame.com www.yourgame.com;

    ssl_certificate /etc/letsencrypt/live/yourgame.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/yourgame.com/privkey.pem;
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    
    # Rate limiting
    limit_req_zone $binary_remote_addr zone=api:10m rate=10r/s;
    limit_req zone=api burst=20 nodelay;

    # Static files
    location / {
        root /var/www/game;
        try_files $uri $uri/ /index.html;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # API proxy
    location /api/ {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # WebSocket proxy
    location /socket.io/ {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_read_timeout 86400;
    }
}
```

### 3. Firewall Configuration

```bash
# UFW firewall rules
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow 22/tcp    # SSH
sudo ufw allow 80/tcp    # HTTP
sudo ufw allow 443/tcp   # HTTPS
sudo ufw enable
```

### 4. Docker Compose Configuration

```yaml
version: '3.8'

services:
  game-server:
    build: ./server
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - REDIS_HOST=redis
    depends_on:
      - redis
    restart: unless-stopped
    networks:
      - game-network
    deploy:
      resources:
        limits:
          cpus: '2'
          memory: 2G

  redis:
    image: redis:7-alpine
    command: redis-server --requirepass ${REDIS_PASSWORD}
    volumes:
      - redis-data:/data
    networks:
      - game-network
    restart: unless-stopped

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - ./dist:/usr/share/nginx/html
      - ./ssl:/etc/nginx/ssl
    depends_on:
      - game-server
    networks:
      - game-network
    restart: unless-stopped

networks:
  game-network:
    driver: bridge

volumes:
  redis-data:
```

## Security Checklist

### Pre-Deployment

- [ ] Change all default passwords and secrets
- [ ] Configure environment variables securely
- [ ] Enable HTTPS/SSL certificates
- [ ] Set up firewall rules
- [ ] Configure rate limiting
- [ ] Enable security headers
- [ ] Set up monitoring and logging
- [ ] Configure backup strategy
- [ ] Review code for security vulnerabilities

### Post-Deployment

- [ ] Monitor server logs for suspicious activity
- [ ] Set up automated security updates
- [ ] Configure DDoS protection (Cloudflare)
- [ ] Implement regular security audits
- [ ] Set up intrusion detection system
- [ ] Configure automated backups
- [ ] Test disaster recovery plan
- [ ] Monitor performance metrics

## Monitoring & Maintenance

### Health Monitoring

```bash
# Check server health
curl https://yourgame.com/health

# Monitor logs
pm2 logs fps-game

# Check metrics
pm2 monit
```

### Security Monitoring

1. **Set up alerts for:**
   - Failed login attempts > 10/minute
   - High CPU/Memory usage
   - Unusual traffic patterns
   - Error rate spikes

2. **Regular audits:**
```bash
# Check for vulnerabilities
npm audit

# Update dependencies
npm update

# Review security logs
grep "SECURITY" /var/log/game/security.log
```

### Backup Strategy

```bash
# Automated daily backups
0 2 * * * /usr/local/bin/backup-game.sh

# Backup script example
#!/bin/bash
DATE=$(date +%Y%m%d)
tar -czf /backups/game-$DATE.tar.gz /var/www/game
redis-cli --rdb /backups/redis-$DATE.rdb
aws s3 cp /backups/ s3://your-backup-bucket/ --recursive
```

## Performance Optimization

### CDN Configuration

1. **CloudFlare Setup:**
   - Enable CDN for static assets
   - Configure firewall rules
   - Enable DDoS protection
   - Set up rate limiting

2. **Asset Optimization:**
   - Compress JavaScript/CSS
   - Optimize images
   - Enable Brotli compression
   - Set cache headers

### Database Optimization

```javascript
// Redis connection pooling
const redis = new Redis({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASSWORD,
  maxRetriesPerRequest: 3,
  enableReadyCheck: true,
  lazyConnect: true
});
```

## Scaling Strategy

### Horizontal Scaling

1. **Load Balancer Setup:**
```nginx
upstream game_servers {
    least_conn;
    server server1.yourgame.com:3000;
    server server2.yourgame.com:3000;
    server server3.yourgame.com:3000;
}
```

2. **Redis Cluster:**
   - Set up Redis Sentinel for high availability
   - Configure Redis Cluster for sharding

3. **Auto-scaling (AWS):**
```yaml
# AWS Auto Scaling Group configuration
MinSize: 2
MaxSize: 10
DesiredCapacity: 3
TargetGroupARNs:
  - !Ref GameServerTargetGroup
HealthCheckType: ELB
HealthCheckGracePeriod: 300
```

## Troubleshooting

### Common Issues

1. **WebSocket Connection Failed**
   - Check firewall rules
   - Verify Nginx proxy configuration
   - Check CORS settings

2. **High Latency**
   - Enable Redis connection pooling
   - Optimize database queries
   - Use CDN for static assets

3. **Memory Leaks**
   - Monitor with `pm2 monit`
   - Set memory limits in Docker
   - Implement proper cleanup

### Debug Commands

```bash
# Check server status
systemctl status fps-game

# View real-time logs
tail -f /var/log/game/error.log

# Test WebSocket connection
wscat -c wss://yourgame.com/socket.io/

# Check SSL certificate
openssl s_client -connect yourgame.com:443
```

## Support & Updates

- Report security issues: security@yourgame.com
- Community Discord: discord.gg/yourgame
- Documentation: docs.yourgame.com

## License

This deployment is configured for production use with security best practices.
Ensure compliance with your local regulations and data protection laws.