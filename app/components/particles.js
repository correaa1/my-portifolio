'use client'
import React, { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import {
    CameraShake,
    OrbitControls,
    Shadow,
    ShadowAlpha,
    Sky,
    Sparkles,
    SpotLight,
    Stars,
    Text
} from '@react-three/drei';


const Background = () => {
    return (
        <Canvas style={{width:'1500px'}}>
            <Stars/>
            <CameraShake
                radius={100}
                depth={50}
                count={5000}
                factor={4}
                opacity={0.7}
            />

            <Text
                position={[0, 1, 0]}
                scale={[1, 1, 1]}
                color="white"
                anchorX="center"
                anchorY="middle"
                fontSize={0.5}
            >
                Olá meu nome é Bruno Correa Dos Santos
            </Text>

            <Text
                position={[0, 0, 0]}
                scale={[1, 1, 1]}
                color="white"
                anchorX="center"
                anchorY="middle"
                fontSize={0.5}
            >
                e sou desenvolvedor web freelancer
            </Text>
            <ambientLight intensity={0.4} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <Suspense fallback={null}>

            </Suspense>

            <OrbitControls />
        </Canvas>
    );
};

export default Background;

