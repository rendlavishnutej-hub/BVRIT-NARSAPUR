'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Grid } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedGrid() {
  const gridRef = useRef<THREE.Group>(null!);
  
  useFrame((state) => {
    if (gridRef.current) {
      // Gentle floating animation
      const t = state.clock.getElapsedTime();
      gridRef.current.position.y = Math.sin(t * 0.5) * 0.3;
      gridRef.current.rotation.x = Math.PI / 2.5 + Math.sin(t * 0.2) * 0.02;
      
      // Moving grid effect
      gridRef.current.position.z = (t * 0.5) % 1;
    }
  });

  return (
    <group ref={gridRef} position={[0, -2, 0]} rotation={[Math.PI / 2.5, 0, 0]}>
      <Grid
        position={[0, 0, 0]}
        args={[30, 30]}
        cellSize={1}
        cellThickness={1}
        cellColor="#FFBE91"
        sectionSize={3}
        sectionThickness={1.5}
        sectionColor="#FFDDB0"
        fadeDistance={20}
        fadeStrength={1}
      />
    </group>
  );
}

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 bg-ivory overflow-hidden opacity-60">
      <Canvas camera={{ position: [0, 2, 8], fov: 45 }}>
        <fog attach="fog" args={['#FFFCE1', 5, 20]} />
        <AnimatedGrid />
      </Canvas>
    </div>
  );
}
