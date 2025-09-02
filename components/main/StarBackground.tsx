"use client";

import React, { useState, Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial} from "@react-three/drei";
import type { Points as ThreePoints } from "three";
import type { ComponentProps } from "react";


type StarBackgroundProps = ComponentProps<typeof Points>;
const StarBackground = (props: StarBackgroundProps) => {
  const ref = useRef<ThreePoints | null>(null);
  const [sphere] = useState(() => {
    // Create a new Float32Array with all zeros first
    const positions = new Float32Array(5000 * 3);
    
    // Generate random positions using a safer approach
    for (let i = 0; i < positions.length; i += 3) {
      // Generate random coordinates between -1.2 and 1.2
      positions[i] = (Math.random() - 0.5) * 2.4;
      positions[i+1] = (Math.random() - 0.5) * 2.4;
      positions[i+2] = (Math.random() - 0.5) * 2.4;
      
      // Normalize to create a sphere distribution
      const distance = Math.sqrt(
        positions[i] * positions[i] + 
        positions[i+1] * positions[i+1] + 
        positions[i+2] * positions[i+2]
      );
      
      if (distance > 0) {
        const scale = 1.2 * Math.random() / distance;
        positions[i] *= scale;
        positions[i+1] *= scale;
        positions[i+2] *= scale;
      }
    }
    
    return positions;
  });

  useFrame((state, delta) => {
    const obj = ref.current;
    if (!obj) return;
    obj.rotation.x -= delta / 10;
    obj.rotation.y -= delta / 15;
  });


  return (
    <group rotation={[0,0, Math.PI / 4]}>
        <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled
        {...props}
        >
            <PointMaterial
                transparent
                color="#fff"
                size={0.002}
                sizeAttenuation={true}
                depthWrite={false}
            />
        </Points>
    </group>
  )
};

const StarsCanvas = () => (
    <div className="pointer-events-none w-full h-auto fixed inset-0 -z-10">
        <Canvas camera={{position: [0, 0, 1]}}>
        <Suspense fallback={null}>
            <StarBackground />
        </Suspense>
        </Canvas>
    </div>
)

export default StarsCanvas;