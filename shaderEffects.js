import * as THREE from 'three';

export class ShaderEffects {
  static createHolographicMaterial(color = '#00ffff', intensity = 0.5) {
    return new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color: { value: new THREE.Color(color) },
        intensity: { value: intensity },
        scanlineSpeed: { value: 2.0 },
        glowPower: { value: 2.0 }
      },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vPosition;
        varying vec2 vUv;
        
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPosition = position;
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 color;
        uniform float time;
        uniform float intensity;
        uniform float scanlineSpeed;
        uniform float glowPower;
        
        varying vec3 vNormal;
        varying vec3 vPosition;
        varying vec2 vUv;
        
        void main() {
          // Fresnel effect for edge glow
          vec3 viewDirection = normalize(cameraPosition - vPosition);
          float fresnel = pow(1.0 - dot(viewDirection, vNormal), glowPower);
          
          // Scanline effect
          float scanline = sin(vPosition.y * 10.0 + time * scanlineSpeed) * 0.1 + 0.9;
          
          // Digital noise
          float noise = fract(sin(dot(vUv.xy + time * 0.1, vec2(12.9898, 78.233))) * 43758.5453);
          noise = noise * 0.05 + 0.95;
          
          // Combine effects
          vec3 finalColor = color * (0.5 + fresnel * intensity) * scanline * noise;
          float alpha = 0.8 + fresnel * 0.2;
          
          gl_FragColor = vec4(finalColor, alpha);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending
    });
  }
  
  static createOutlineEffect(mesh, color = '#00ffff', thickness = 1.03) {
    // Create an outline mesh
    const outlineMaterial = new THREE.MeshBasicMaterial({
      color: color,
      side: THREE.BackSide,
      transparent: true,
      opacity: 0.3
    });
    
    const outlineMesh = mesh.clone();
    outlineMesh.material = outlineMaterial;
    outlineMesh.scale.multiplyScalar(thickness);
    
    // Group the original mesh and outline
    const group = new THREE.Group();
    group.add(outlineMesh);
    group.add(mesh);
    
    return group;
  }
  
  static createEnergyShield(radius = 2, color = '#00ffff') {
    const geometry = new THREE.SphereGeometry(radius, 32, 32);
    
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color: { value: new THREE.Color(color) },
        hitPoint: { value: new THREE.Vector3() },
        hitTime: { value: 0 }
      },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vPosition;
        
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPosition = (modelMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 color;
        uniform float time;
        uniform vec3 hitPoint;
        uniform float hitTime;
        
        varying vec3 vNormal;
        varying vec3 vPosition;
        
        void main() {
          // Fresnel effect
          vec3 viewDirection = normalize(cameraPosition - vPosition);
          float fresnel = pow(1.0 - abs(dot(viewDirection, vNormal)), 2.0);
          
          // Hexagonal pattern
          float hex = sin(vPosition.x * 10.0) * sin(vPosition.y * 10.0) * sin(vPosition.z * 10.0);
          hex = hex * 0.1 + 0.9;
          
          // Hit ripple effect
          float ripple = 0.0;
          if (hitTime > 0.0) {
            float dist = distance(vPosition, hitPoint);
            float wave = 1.0 - smoothstep(0.0, 2.0, dist - (time - hitTime) * 5.0);
            wave *= exp(-(time - hitTime) * 2.0); // Fade out
            ripple = wave * 0.5;
          }
          
          // Energy flow
          float flow = sin(vPosition.y * 5.0 - time * 3.0) * 0.1 + 0.9;
          
          // Combine effects
          vec3 finalColor = color * (fresnel + 0.1) * hex * flow;
          finalColor += color * ripple * 2.0;
          
          float alpha = (fresnel * 0.8 + 0.1) + ripple;
          
          gl_FragColor = vec4(finalColor, alpha);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    
    const shield = new THREE.Mesh(geometry, material);
    
    // Add update method
    shield.update = function(deltaTime) {
      material.uniforms.time.value += deltaTime;
    };
    
    // Add hit effect method
    shield.hit = function(point) {
      material.uniforms.hitPoint.value.copy(point);
      material.uniforms.hitTime.value = material.uniforms.time.value;
    };
    
    return shield;
  }
  
  static createDigitalDissolveEffect(mesh) {
    const dissolveMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        dissolveAmount: { value: 0 },
        color: { value: new THREE.Color('#00ff00') },
        edgeColor: { value: new THREE.Color('#ff0000') },
        noiseScale: { value: 10.0 }
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vPosition;
        
        void main() {
          vUv = uv;
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform float dissolveAmount;
        uniform vec3 color;
        uniform vec3 edgeColor;
        uniform float noiseScale;
        
        varying vec2 vUv;
        varying vec3 vPosition;
        
        // Simple noise function
        float noise(vec3 p) {
          return fract(sin(dot(p, vec3(12.9898, 78.233, 45.164))) * 43758.5453);
        }
        
        void main() {
          // Generate noise pattern
          float n = noise(vPosition * noiseScale + time);
          
          // Create dissolve effect
          if (n < dissolveAmount) {
            discard;
          }
          
          // Edge glow near dissolve boundary
          float edgeWidth = 0.1;
          vec3 finalColor = color;
          
          if (n < dissolveAmount + edgeWidth) {
            float edgeFactor = (n - dissolveAmount) / edgeWidth;
            finalColor = mix(edgeColor, color, edgeFactor);
          }
          
          gl_FragColor = vec4(finalColor, 1.0);
        }
      `,
      side: THREE.DoubleSide
    });
    
    // Store original material
    const originalMaterial = mesh.material;
    
    // Add dissolve methods
    mesh.startDissolve = function(duration = 1.0) {
      mesh.material = dissolveMaterial;
      const startTime = Date.now();
      
      const updateDissolve = () => {
        const elapsed = (Date.now() - startTime) / 1000;
        const progress = Math.min(elapsed / duration, 1.0);
        
        dissolveMaterial.uniforms.dissolveAmount.value = progress;
        dissolveMaterial.uniforms.time.value = elapsed;
        
        if (progress < 1.0) {
          requestAnimationFrame(updateDissolve);
        } else {
          mesh.visible = false;
        }
      };
      
      updateDissolve();
    };
    
    mesh.resetDissolve = function() {
      mesh.material = originalMaterial;
      mesh.visible = true;
      dissolveMaterial.uniforms.dissolveAmount.value = 0;
    };
    
    return mesh;
  }
  
  static applyGlowToPlayer(playerModel, color = null, intensity = 1.0) {
    const glowColor = color || (playerModel.team === 'ct' ? '#5DADE2' : '#F39C12');
    
    // Apply glow to specific parts
    playerModel.root.traverse((child) => {
      if (child.isMesh) {
        // Add emissive glow
        if (child.material && !child.material.isShaderMaterial) {
          child.material.emissive = new THREE.Color(glowColor);
          child.material.emissiveIntensity = intensity * 0.2;
        }
        
        // Create outline effect for important parts
        if (child === playerModel.head || child.parent === playerModel.upperBody) {
          const outline = new THREE.Mesh(
            child.geometry,
            new THREE.MeshBasicMaterial({
              color: glowColor,
              side: THREE.BackSide,
              transparent: true,
              opacity: 0.2
            })
          );
          outline.scale.multiplyScalar(1.05);
          child.parent.add(outline);
        }
      }
    });
  }
  
  static createRespawnEffect(position) {
    const particleCount = 50;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      // Random position around spawn point
      positions[i * 3] = (Math.random() - 0.5) * 2;
      positions[i * 3 + 1] = Math.random() * 2;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2;
      
      // Upward velocity
      velocities[i * 3] = (Math.random() - 0.5) * 0.1;
      velocities[i * 3 + 1] = Math.random() * 0.2 + 0.1;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.1;
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3));
    
    const material = new THREE.PointsMaterial({
      color: '#00ffff',
      size: 0.1,
      transparent: true,
      opacity: 1.0,
      blending: THREE.AdditiveBlending
    });
    
    const particles = new THREE.Points(geometry, material);
    particles.position.copy(position);
    
    // Add update method
    particles.update = function(deltaTime) {
      const positions = geometry.attributes.position.array;
      const velocities = geometry.attributes.velocity.array;
      
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] += velocities[i * 3] * deltaTime;
        positions[i * 3 + 1] += velocities[i * 3 + 1] * deltaTime;
        positions[i * 3 + 2] += velocities[i * 3 + 2] * deltaTime;
        
        // Apply gravity
        velocities[i * 3 + 1] -= deltaTime * 0.5;
      }
      
      geometry.attributes.position.needsUpdate = true;
      
      // Fade out
      material.opacity -= deltaTime * 0.5;
      if (material.opacity <= 0) {
        return false; // Signal to remove
      }
      return true;
    };
    
    return particles;
  }
}