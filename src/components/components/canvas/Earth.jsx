// import { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
// import CanvasLoader from "../Loader";

// const Earth = () => {
//   const earth = useGLTF('/public/planet/scene.gltf')

//   return (
//     <primitive
//       object={earth.scene}
//       scale={2.5}
//       position-y={0}
//       rotation-y={0}
//     />
//   )
// }

// const EarthCanvas = () => {
//   return (
//     <Canvas
//       shadows
//       frameloop="demand"
//       gl={{ preserveDrawingBuffer: true }}
//       camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6]}}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls
//           autoRotate
//           enableZoom={false}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 2}
//         />

//         <Earth />
//       </Suspense>
//     </Canvas>
//   )
// }

// export default EarthCanvas;

import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF('/public/planet/scene.gltf');
  const [scale, setScale] = useState(2.5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScale(1.5); // Smaller scale for small devices
      } else {
        setScale(2.5); // Default scale for larger devices
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call the function initially to set the scale based on the initial window size

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <primitive
      object={earth.scene}
      scale={scale}
      position-y={0}
      rotation-y={0}
    />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
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