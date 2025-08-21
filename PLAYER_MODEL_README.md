# Player Model System Documentation

## Overview
The game now features an improved player model system inspired by Krunker.io and Roblox, with unique tactical/holographic visual elements.

## Key Features

### 1. **Improved Player Models**
- **Krunker/Roblox-style blocky aesthetic** with beveled edges
- **Tactical gear details**: vests, knee pads, belt buckles
- **Team-based colors**: CT (blue accents) vs T (orange accents)
- **Procedural animations**: walking, crouching, death ragdoll

### 2. **Advanced Hit Detection System**
- **Multi-hitbox collision**: Different body parts have different damage multipliers
  - Head: 2.0x damage (headshots)
  - Chest: 1.0x damage
  - Stomach: 0.9x damage
  - Arms: 0.7x damage
  - Legs: 0.8x damage
- **Visual hit markers** with damage numbers
- **Hit statistics tracking** for testing

### 3. **Performance Optimization**
- **LOD (Level of Detail) System**:
  - Full detail: 0-20 units
  - Medium detail: 20-50 units
  - Low detail: 50-100 units
  - Billboard sprite: 100+ units
- **Instanced rendering** for multiple players
- **Optimized materials** based on distance

### 4. **Visual Effects**
- **Team glow effects** for easy identification
- **Holographic shader effects** (in shaderEffects.js)
- **Digital dissolve effect** on death
- **Energy shield effects** available

## Debug Controls (Testing)

Press these keys during gameplay to test the new system:

- **H** - Toggle hitbox visibility (see collision boxes)
- **T** - Spawn a test dummy player at random position
- **G** - Toggle glow effects on/off
- **P** - Print hit statistics to console

## Usage in Code

### Creating a Player Model
```javascript
import { PlayerModel } from './playerModel.js';

// Create local player
const localPlayer = new PlayerModel({
  team: 'ct',           // or 't'
  isLocalPlayer: true,  // Hides certain parts in first-person
  showArms: false       // Whether to show arms in first-person
});

// Add to scene
scene.add(localPlayer.getModel());
```

### Using the Hitbox System
```javascript
import { HitboxSystem } from './hitboxSystem.js';

// Initialize
const hitboxSystem = new HitboxSystem();

// Register players
hitboxSystem.registerPlayer('player1', playerModel);

// Check for hits
const hitResult = hitboxSystem.checkHit(origin, direction, range);
if (hitResult.hit) {
  console.log(`Hit ${hitResult.bodyPart} for ${hitResult.damage} damage!`);
}

// Toggle debug mode
hitboxSystem.setDebugMode(true); // Shows hitboxes
```

### Animations
The player model automatically handles animations based on:
- Movement velocity (walking animation)
- Crouch state (compression animation)
- Death state (ragdoll effect)

Update animations in your game loop:
```javascript
playerModel.update(deltaTime, velocity);
playerModel.setCrouching(isCrouching);
```

## Integration Notes

1. **BulletSystem** has been updated to use the new hitbox system automatically
2. **Remote players** use the same PlayerModel class for consistency
3. **LOD system** activates automatically for remote players based on distance
4. **Hit detection** is now per-body-part instead of whole-player

## Testing Recommendations

1. Press **T** to spawn test dummies
2. Press **H** to see hitboxes
3. Shoot different body parts to verify damage multipliers
4. Press **P** to see accuracy and hit statistics
5. Test at different distances to see LOD changes

## Files Modified/Created

- `playerModel.js` - Main player model class
- `hitboxSystem.js` - Advanced hit detection system
- `shaderEffects.js` - Holographic and glow effects
- `main.js` - Updated to use new systems
- `bulletSystem.js` - Updated for new hit detection

## Performance Impact

The new system is optimized for performance:
- LOD reduces polygon count for distant players
- Hitboxes are invisible by default
- Animations are simple and procedural
- Materials use basic shaders at distance

The system can handle 20+ players without significant performance impact.