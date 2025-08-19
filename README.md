# 3D Game

A 3D web game built with Three.js and Vite.

## Features

- Interactive 3D scene with multiple animated objects
- Orbit camera controls (click and drag to rotate, scroll to zoom)
- Dynamic lighting with shadows
- Responsive design that adapts to window size
- Smooth animations and visual effects

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:3000`

## Development

The project uses:
- **Three.js** for 3D graphics
- **Vite** for fast development and building
- **OrbitControls** for camera interaction

### Project Structure

```
Game/
├── index.html          # Main HTML file
├── main.js            # Game logic and Three.js setup
├── package.json       # Project dependencies
├── vite.config.js     # Vite configuration
└── basic/             # Original basic Three.js example
    ├── index.html
    └── main.js
```

## Controls

- **Left Click + Drag**: Rotate camera around the scene
- **Scroll**: Zoom in/out
- **Right Click + Drag**: Pan camera

## Building for Production

```bash
npm run build
```

This will create a `dist` folder with optimized files ready for deployment.

## Preview Production Build

```bash
npm run preview
```

## Next Steps

- Add game mechanics (player control, objectives)
- Implement physics system
- Add sound effects and music
- Create UI/HUD elements
- Add more complex 3D models
- Implement game states (menu, gameplay, game over)