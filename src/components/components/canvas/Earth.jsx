import { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF('/public/planet/scene.gltf');
  const [scale, setScale] = useState(2.5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScale(2.5); 
      } else {
        setScale(2.5); 
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useFrame((state, delta) => {
    if (earth.scene) {
      earth.scene.rotation.y += delta * 0.5; 
    }
  });

  return (
    <primitive
      object={earth.scene}
      scale={scale}
      rotation-y={0}
    />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="always"
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls />
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;