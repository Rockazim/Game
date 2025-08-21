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

The game is designed to be deployed on **hyperfps.xyz** for online multiplayer gaming!

### For Players
Simply visit `https://hyperfps.xyz` in your browser to play online with others around the world.

### For Deployment (Server Admin)

1. **Deploy the server** on your hosting service:
```bash
cd server
npm install
PORT=3000 npm start  # or use npm run simple for no-auth version
```

2. **Build and deploy the client**:
```bash
npm run build
# Upload contents of 'dist' folder to your web server
```

3. **Configure your domain**:
- Point hyperfps.xyz to your web server
- Ensure port 3000 is open for WebSocket connections
- Use HTTPS for production (configure SSL certificates)

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