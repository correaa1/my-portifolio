'use client'
import React, { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import {OrbitControls, Sky, Stars, Text} from '@react-three/drei';

// Defina seu componente 3D
const Background = () => {
    return (
        <Canvas style={{width:'1500px'}}>
            {/* Adicione seus componentes 3D aqui */}
            <Stars
                radius={100} // raio maior
                depth={50}   // profundidade maior
                count={5000} // mais estrelas
                factor={4}   // espaçamento menor
                opacity={0.7} // opacidade um pouco menor
            />
            <Text
                position={[0, 1, 0]}
                scale={[1, 1, 1]}
                color="white" // default
                anchorX="center" // default
                anchorY="middle" // default
                fontSize={0.5}
            >
                Olá meu nome é Bruno Correa
            </Text>

            <Text
                position={[0, 0, 0]}
                scale={[1, 1, 1]}
                color="white" // default
                anchorX="center" // default
                anchorY="middle" // default
                fontSize={0.5}
            >
                trabalho como desenvolvedor freelancer
            </Text>


            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <Suspense fallback={null}>

            </Suspense>

            <OrbitControls />
        </Canvas>
    );
};

export default Background;

