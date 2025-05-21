"use client";

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Model = () => {
  const gltf = useGLTF('/3d.glb'); 
  return <primitive object={gltf.scene} />;
};

const ModelViewer = () => {
  return (
    <Canvas camera={{ position: [0, 1, 3], fov: 60 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 3, 3]} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default ModelViewer;
