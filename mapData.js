// Map data in JSON-like format
export const maps = {
  simple_arena: {
    name: "Simple Arena",
    skyColor: "#87CEEB",
    fogColor: "#87CEEB",
    fogNear: 10,
    fogFar: 100,
    spawn: [8, 1, 5],
    objects: [
      // Ground
      { type: "box", pos: [0, -0.5, 0], size: [100, 1, 100], color: "#404040" },
      
      // Arena walls
      { type: "box", pos: [0, 5, -20], size: [40, 10, 2], color: "#808080" },
      { type: "box", pos: [0, 5, 20], size: [40, 10, 2], color: "#808080" },
      { type: "box", pos: [20, 5, 0], size: [2, 10, 40], color: "#808080" },
      { type: "box", pos: [-20, 5, 0], size: [2, 10, 40], color: "#808080" },
      
      // Central platform
      { type: "box", pos: [0, 1, 0], size: [10, 2, 10], color: "#4169e1" },
      
      // Corner platforms
      { type: "box", pos: [15, 1.5, 15], size: [6, 3, 6], color: "#606060" },
      { type: "box", pos: [-15, 1.5, 15], size: [6, 3, 6], color: "#606060" },
      { type: "box", pos: [15, 1.5, -15], size: [6, 3, 6], color: "#606060" },
      { type: "box", pos: [-15, 1.5, -15], size: [6, 3, 6], color: "#606060" },
      
      // Side platforms
      { type: "box", pos: [0, 0.5, 12], size: [8, 1, 4], color: "#606060" },
      { type: "box", pos: [0, 0.5, -12], size: [8, 1, 4], color: "#606060" },
      
      // Obstacles
      { type: "box", pos: [8, 1, 0], size: [2, 2, 2], color: "#8B4513" },
      { type: "box", pos: [-8, 1, 0], size: [2, 2, 2], color: "#8B4513" },
      { type: "box", pos: [0, 0.75, 8], size: [3, 1.5, 1.5], color: "#8B4513" },
      { type: "box", pos: [0, 0.75, -8], size: [3, 1.5, 1.5], color: "#8B4513" },
      { type: "box", pos: [10, 1.25, 5], size: [1.5, 2.5, 1.5], color: "#8B4513" },
      { type: "box", pos: [-10, 1.25, -5], size: [1.5, 2.5, 1.5], color: "#8B4513" },
      
      // Ramps (stairs)
      { type: "ramp", pos: [0, 1, 6.5], size: [3, 2, 3], rot: [0, 0, 0], color: "#606060" },
      { type: "ramp", pos: [0, 1, -6.5], size: [3, 2, 3], rot: [0, 180, 0], color: "#606060" },
      { type: "ramp", pos: [6.5, 1, 0], size: [3, 2, 3], rot: [0, 90, 0], color: "#606060" },
      { type: "ramp", pos: [-6.5, 1, 0], size: [3, 2, 3], rot: [0, -90, 0], color: "#606060" },
      
      // Corner ramps
      { type: "ramp", pos: [15, 1.5, 11.5], size: [3, 3, 4], rot: [0, 0, 0], color: "#606060" },
      { type: "ramp", pos: [-15, 1.5, 11.5], size: [3, 3, 4], rot: [0, 0, 0], color: "#606060" },
      { type: "ramp", pos: [15, 1.5, -11.5], size: [3, 3, 4], rot: [0, 180, 0], color: "#606060" },
      { type: "ramp", pos: [-15, 1.5, -11.5], size: [3, 3, 4], rot: [0, 180, 0], color: "#606060" }
    ]
  },
  
  krunker_style: {
    name: "Krunker Style",
    skyColor: "#a0d8ef",
    fogColor: "#a0d8ef",
    fogNear: 50,
    fogFar: 200,
    spawn: [0, 1, 0],
    objects: [
      // Ground
      { type: "box", pos: [0, -0.5, 0], size: [80, 1, 80], color: "#3a3a3a" },
      
      // Main building
      { type: "box", pos: [0, 5, -20], size: [30, 10, 2], color: "#666666" },
      { type: "box", pos: [15, 5, -10], size: [2, 10, 20], color: "#666666" },
      { type: "box", pos: [-15, 5, -10], size: [2, 10, 20], color: "#666666" },
      
      // Sniper tower
      { type: "box", pos: [25, 7.5, 25], size: [8, 15, 8], color: "#4a4a4a" },
      { type: "box", pos: [25, 1, 20], size: [2, 2, 2], color: "#8B4513" },
      { type: "box", pos: [25, 2, 18], size: [2, 2, 2], color: "#8B4513" },
      { type: "box", pos: [25, 3, 16], size: [2, 2, 2], color: "#8B4513" },
      
      // Central structure
      { type: "box", pos: [0, 2, 0], size: [15, 4, 15], color: "#5c5c5c" },
      { type: "box", pos: [0, 4.5, 0], size: [10, 1, 10], color: "#ff0000" },
      
      // Cover boxes
      { type: "box", pos: [10, 1, 10], size: [3, 2, 3], color: "#8B4513" },
      { type: "box", pos: [-10, 1, 10], size: [3, 2, 3], color: "#8B4513" },
      { type: "box", pos: [10, 1, -10], size: [3, 2, 3], color: "#8B4513" },
      { type: "box", pos: [-10, 1, -10], size: [3, 2, 3], color: "#8B4513" },
      
      // Ramps
      { type: "ramp", pos: [0, 2, 10], size: [5, 4, 5], rot: [0, 0, 0], color: "#606060" },
      { type: "ramp", pos: [20, 3.5, 20], size: [4, 7, 5], rot: [0, -45, 0], color: "#606060" }
    ]
  }
};