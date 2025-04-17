// components/main/StarBackground.tsx
"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
// @ts-ignore - Use this if the module doesn't have type definitions
import * as random from "maath/random/dist/maath-random.esm";

interface StarBackgroundProps {
  [key: string]: any;
}

const StarBackground: React.FC<StarBackgroundProps> = (props) => {
    const ref = useRef<any>(null);
    const [sphere] = useState(() =>
        random.inSphere(new Float32Array(5000 * 3), { radius: 1.2 })
    );

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
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
    );
};

const StarsCanvas: React.FC = () => (
    <div className="w-full h-full absolute inset-0 z-[-20]">
        <Canvas camera={{ position: [0, 0, 1] }}>
            <Suspense fallback={null}>
                <StarBackground />
            </Suspense>
            <Preload all />
        </Canvas>
    </div>
);

export default StarsCanvas;