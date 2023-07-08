import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("/planet/scene.gltf");
  return (
    <primitive
      scale={2.5}
      object={earth.scene}
      rotation-y={0}
      position-y={0}
    ></primitive>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
    >
      <OrbitControls
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        enableZoom={false}
        enablePan={false}
        autoRotate
      />
      <Earth />
      <Suspense fallback={<CanvasLoader />} />
    </Canvas>
  );
};

export default EarthCanvas;
