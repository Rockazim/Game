# FPS Game Project - krunker.io/CS:GO Style

## Project Overview
This is a browser-based first-person shooter game inspired by krunker.io and CS:GO, built with Three.js and Vite.

## Core Game Features
- **Genre**: Fast-paced FPS with CS:GO-inspired maps
- **Perspective**: First-person with view model arms
- **Map**: Currently featuring Dust 2 layout
- **Movement**: WASD movement, sprint (Shift), crouch (C), jump (Space)
- **Controls**: Mouse look, pointer lock for FPS controls

## Important Files to Reference
- **STEPS.md** - Development roadmap and current phase tracking
- **README.md** - Setup instructions and project structure
- **main.js** - Core game logic and player controller
- **map.js** - Dust 2 map implementation

## Current Development Status
- ✅ Phase 1-3: Character, Movement, and Map completed
- 🚧 Phase 4: Weapon System (current focus)
- ⏳ Phase 5: UI/HUD
- ⏳ Phase 6: Game Mechanics

## Technical Stack
- **Three.js** - 3D graphics engine
- **Vite** - Build tool and dev server
- **JavaScript** - Core language
- **First-person controls** - Pointer lock API

## Development Guidelines
1. Follow FPS game conventions (e.g., responsive controls, low latency)
2. Maintain 60+ FPS performance
3. Keep weapon mechanics similar to CS:GO/krunker.io
4. Use existing map.js patterns when adding new map elements
5. Test with pointer lock enabled