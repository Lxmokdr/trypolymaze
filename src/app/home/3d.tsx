"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const Model = () => {
  const gltf = useGLTF("/3d.glb");
  return <primitive object={gltf.scene} />;
};

const ModelViewer = () => {
  return (
    <>
      <style>
        {`
          .model-container {
            position: fixed;
            top: 0;
            left: -390px;
            width: 100vw;
            height: 100vh;
            z-index: 9999;
          }

          /* Responsive adjustments */
          @media (max-width: 1200px) {
            .model-container {
              left: -150px; /* reduce offset on medium screens */
            }
          }

          @media (max-width: 768px) {
            .model-container {
              left: -50px; /* smaller offset on tablets */
            }
          }

          @media (max-width: 480px) {
            .model-container {
              left: 0; /* no offset on small/mobile screens */
              width: 100vw;
            }
          }
        `}
      </style>

      <div className="model-container">
        <Canvas camera={{ position: [0, 1, 5], fov: 60 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[0, 3, 10]} />
          <Suspense fallback={null}>
            <Model />
          </Suspense>
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>
    </>
  );
};

export default ModelViewer;
