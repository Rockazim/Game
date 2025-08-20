# 🎮 Secure Multiplayer FPS Game

## 🚀 Quick Start Guide

### Prerequisites
- Node.js 18+ installed
- Docker & Docker Compose (optional, for containerized deployment)

### 🏃 Running Locally (Development)

#### 1. Start the Game Server
```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Start the server
npm start
```
Server will run on `http://localhost:3000`

#### 2. Start the Game Client
```bash
# In the root directory
npm install
npm run dev
```
Game will be available at `http://localhost:5173`

### 🐳 Running with Docker (Recommended)

```bash
# Build and start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

## 🔐 Security Features Implemented

### Server Security
- ✅ **JWT Authentication** - Secure token-based auth
- ✅ **Rate Limiting** - Prevents spam and DDoS
- ✅ **Input Validation** - All inputs sanitized and validated
- ✅ **SQL Injection Prevention** - Parameterized queries
- ✅ **XSS Protection** - Content sanitization
- ✅ **CORS Configuration** - Restricted origins
- ✅ **Session Management** - Redis-backed sessions
- ✅ **Password Hashing** - Bcrypt with salt rounds
- ✅ **HTTPS Support** - SSL/TLS encryption ready

### Anti-Cheat System
- ✅ **Server-Authoritative Movement** - Physics validated server-side
- ✅ **Speed Hack Detection** - Movement speed validation
- ✅ **Teleport Detection** - Position validation
- ✅ **Aimbot Detection** - Statistical analysis of accuracy
- ✅ **Wallhack Prevention** - Line-of-sight validation
- ✅ **No-Recoil Detection** - Weapon recoil pattern analysis
- ✅ **Rapid Fire Detection** - Fire rate validation
- ✅ **Damage Manipulation Prevention** - Server-side damage calculation

### Network Security
- ✅ **WebSocket Security** - WSS with authentication
- ✅ **DDoS Protection** - Rate limiting and connection limits
- ✅ **IP Blocking** - Automatic blocking of suspicious IPs
- ✅ **Packet Validation** - All network packets validated
- ✅ **Encrypted Communication** - TLS/SSL support

## 🎯 Game Features

### Multiplayer Features
- Real-time multiplayer gameplay
- Room/lobby system
- Player matchmaking
- In-game chat (sanitized)
- Spectator mode
- Kill notifications
- Scoreboard

### Gameplay
- First-person shooter mechanics
- Multiple weapons (Pistol, AK-47, Knife)
- Health and armor system
- Respawn system
- Movement mechanics (sprint, crouch, jump)
- Hit detection with headshot multiplier

## 📊 Monitoring & Administration

### Health Check
```bash
curl http://localhost:3000/health
```

### View Logs
```bash
# Server logs
docker-compose logs game-server

# Security events
tail -f server/logs/security-combined.log
```

### Performance Monitoring
Access Grafana dashboard (if monitoring profile enabled):
```bash
docker-compose --profile monitoring up -d
# Access at http://localhost:3001 (admin/admin)
```

## 🌐 Public Deployment

### 1. Get a Domain
Register a domain (e.g., yourgame.com)

### 2. Set Up SSL
```bash
# Install certbot
sudo apt install certbot python3-certbot-nginx

# Get SSL certificate
sudo certbot --nginx -d yourgame.com
```

### 3. Configure Environment
Edit `.env` file with production values:
```env
NODE_ENV=production
JWT_SECRET=<generate-strong-secret>
ALLOWED_ORIGINS=https://yourgame.com
```

### 4. Deploy with Docker
```bash
docker-compose -f docker-compose.yml up -d
```

### 5. Configure Firewall
```bash
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable
```

## 🛡️ Security Best Practices

### For Production Deployment

1. **Change all default passwords and secrets**
2. **Enable HTTPS only**
3. **Set up a Web Application Firewall (WAF)**
4. **Use a CDN (CloudFlare recommended)**
5. **Enable rate limiting**
6. **Regular security audits**
7. **Automated backups**
8. **Monitor logs for suspicious activity**
9. **Keep dependencies updated**
10. **Use environment variables for secrets**

### Security Checklist
- [ ] Changed default JWT secrets
- [ ] Configured CORS properly
- [ ] SSL certificate installed
- [ ] Rate limiting enabled
- [ ] Firewall configured
- [ ] Redis password set
- [ ] Monitoring enabled
- [ ] Backup strategy in place
- [ ] DDoS protection configured
- [ ] Security headers enabled

## 🎮 How to Play

### Creating an Account
1. Open the game in your browser
2. Click "Register"
3. Enter username, email, and strong password
4. Click "Create Account"

### Joining a Game
1. Login with your credentials
2. Browse available rooms or create your own
3. Click "Join Room"
4. Wait for other players
5. Game starts automatically with 2+ players

### Controls
- **WASD** - Movement
- **Mouse** - Look around
- **Left Click** - Shoot
- **Right Click** - Aim
- **R** - Reload
- **Shift** - Sprint
- **C** - Crouch
- **Space** - Jump
- **1/2/3** - Switch weapons
- **Tab** - Scoreboard
- **Enter** - Chat

## 🚨 Troubleshooting

### WebSocket Connection Failed
- Check if server is running
- Verify firewall allows WebSocket connections
- Check browser console for errors

### High Latency
- Ensure Redis is running
- Check server resources
- Consider using a CDN

### Authentication Issues
- Clear browser cookies
- Check JWT token expiry
- Verify server time is correct

## 📈 Performance Optimization

### Server Optimization
- Use PM2 for process management
- Enable Node.js cluster mode
- Implement Redis connection pooling
- Use CDN for static assets

### Client Optimization
- Enable compression
- Minimize bundle size
- Use WebSocket binary frames
- Implement client-side prediction

## 📝 API Documentation

### Authentication Endpoints
- `POST /auth/register` - Register new user
- `POST /auth/login` - Login user
- `POST /auth/refresh` - Refresh token

### Game Endpoints
- `GET /api/rooms` - List available rooms
- `POST /api/create-room` - Create new room
- `GET /health` - Server health check

### WebSocket Events
- `connect` - Initial connection
- `move` - Player movement
- `shoot` - Fire weapon
- `chat` - Send message
- `joinRoom` - Join game room
- `leaveRoom` - Leave current room

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Implement security-first code
4. Add tests
5. Submit pull request

## 📄 License

This project is configured with security best practices for multiplayer gaming.

## 🆘 Support

- Report security vulnerabilities privately
- Use GitHub Issues for bugs
- Join our Discord for community support

---

**⚠️ Security Notice**: This game implements comprehensive security measures including anti-cheat, rate limiting, and input validation. Any attempt to exploit or hack the game will result in permanent ban.