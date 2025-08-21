# FPS Game - Multiplayer Shooter

A browser-based multiplayer first-person shooter game inspired by CS:GO and Krunker.io, built with Three.js and Socket.io.

## Features

### Single Player
- First-person shooter gameplay with CS:GO-inspired Dust 2 map
- WASD movement, sprint (Shift), crouch (C), jump (Space)
- Multiple weapons: Pistol (1), AK-47 (2), Knife (3)
- Reload system (R key)
- Crosshair with dynamic spread
- HUD with health, ammo, and weapon info

### Multiplayer (NEW!)
- Real-time multiplayer support with Socket.io
- Create and join game rooms
- See other players moving in real-time
- Synchronized shooting and combat
- Player name tags above characters
- Death and respawn system
- Simple room management UI

## Setup

### Install Dependencies

1. Install client dependencies:
```bash
npm install
```

2. Install server dependencies:
```bash
cd server
npm install
cd ..
```

## Running the Game

### For Multiplayer (Recommended)

1. Start the multiplayer server:
```bash
cd server
npm run simple
```
The server will run on `http://localhost:3000`

2. In a new terminal, start the game client:
```bash
npm run dev
```
The game will be available at `http://localhost:5173`

3. Open the game in your browser and you'll be prompted for a username

4. Create a room or join an existing one to play with others

### For Single Player Only

Just run the client:
```bash
npm run dev
```

## Playing on HyperFPS.xyz

🎮 **Play Now: [https://hyperfps.xyz](https://hyperfps.xyz)**

The game is live and running on hyperfps.xyz! Join other players online for multiplayer FPS action.

## Production Server (Digital Ocean VPS)

This repository is deployed on a Digital Ocean VPS that hosts both the game client and multiplayer server.

### Server Architecture
- **Web Server**: Nginx with SSL (serves game files and proxies WebSocket)
- **Game Files**: Deployed to `/var/www/fps-game/`
- **Multiplayer Server**: Node.js running on port 3000 (localhost only)
- **Domain**: hyperfps.xyz with Let's Encrypt SSL certificate

### For Developers - Updating the Live Game

1. **SSH into the server**:
```bash
ssh root@hyperfps.xyz
cd /root/Game
```

2. **Pull latest changes**:
```bash
git pull origin main
```

3. **Deploy the update**:
```bash
./deploy.sh
```

This will automatically:
- Build the production version
- Deploy to `/var/www/fps-game/`
- Restart the multiplayer server
- Clear CDN cache (if applicable)

### Manual Deployment Steps

If you need to deploy manually:

```bash
# 1. Build the game
npm run build

# 2. Deploy to web directory
sudo cp -r dist/* /var/www/fps-game/
sudo chown -R www-data:www-data /var/www/fps-game/

# 3. Restart the multiplayer server
sudo systemctl restart hyperfps-server

# 4. Check server status
sudo systemctl status hyperfps-server
```

### Server Management

**Check server logs**:
```bash
sudo journalctl -u hyperfps-server -f
```

**Restart server**:
```bash
sudo systemctl restart hyperfps-server
```

**Stop server**:
```bash
sudo systemctl stop hyperfps-server
```

**Start server**:
```bash
sudo systemctl start hyperfps-server
```

## How to Test Multiplayer Locally

### Testing with 2 Players on Same Machine

1. Start both the server and client as described above
2. Open two browser windows/tabs to `http://localhost:5173`
3. In the first window:
   - Enter a username (e.g., "Player1")
   - Click "Create Room" and give it a name
4. In the second window:
   - Enter a different username (e.g., "Player2")
   - You should see the room created by Player1
   - Click "Join" next to the room
5. Both players should now be in the same game and can see each other move!

### Testing with Multiple Computers on LAN

1. Start the server on one machine
2. Find your local IP address (e.g., `192.168.1.100`)
3. Other players can connect by:
   - Opening their browser to `http://[YOUR-IP]:5173`
   - The game will automatically connect to the server

## Game Controls

### Movement
- **W/A/S/D**: Move forward/left/backward/right
- **Mouse**: Look around (click to lock pointer)
- **Space**: Jump
- **Shift**: Sprint
- **C**: Crouch
- **ESC**: Release pointer lock

### Combat
- **Left Click**: Shoot/Attack
- **Right Click**: Aim (hold)
- **1**: Switch to Pistol
- **2**: Switch to AK-47
- **3**: Switch to Knife
- **R**: Reload
- **G**: Toggle collision debug view
- **H**: Toggle hand preference

## Project Structure

```
Game/
├── main.js              # Main game logic
├── src/
│   ├── simple-multiplayer.js  # Multiplayer client
│   └── multiplayer.js         # Advanced multiplayer (with auth)
├── server/
│   ├── simple-server.js       # Simple multiplayer server (no auth)
│   ├── server.js             # Full server with authentication
│   └── game/                 # Game server logic
├── weaponSystem.js      # Weapon handling
├── bulletSystem.js      # Bullet physics and hit detection
├── mapLoader.js         # Map loading system
├── map.js              # Dust 2 map implementation
├── crosshair.js        # Dynamic crosshair
└── hud.js              # HUD/UI elements
```

## Building for Production

```bash
npm run build
```

This will create a `dist` folder with optimized files ready for deployment.

## Preview Production Build

```bash
npm run preview
```

## Troubleshooting

### "Connection Failed" Error
- Make sure the server is running (`cd server && npm run simple`)
- Check that port 3000 is not blocked by firewall
- Verify the server URL in the browser console

### Players Can't See Each Other
- Ensure both players are in the same room
- Check browser console for any errors
- Verify both clients are connected (green "Connected" status)

### Performance Issues
- Lower browser graphics settings
- Close unnecessary tabs/applications
- Try using Chrome or Firefox for best performance

## Known Issues

- Hit detection between players is client-side only (will be improved)
- No persistent scores or stats yet
- Room list doesn't auto-refresh (refresh page to see new rooms)
- Basic player models (capsules) - full character models coming soon

## Next Steps

- Implement server-side hit validation
- Add more maps (Mirage, Inferno, etc.)
- Team-based gameplay (Terrorists vs Counter-Terrorists)
- Weapon purchasing system
- Round-based matches
- Voice chat support
- Leaderboards and statistics
- Custom skins and cosmetics