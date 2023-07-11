"use client";
import { useState, useEffect, Suspense } from "react";
import CanvasLoader from "../Loader";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

type mediaQueryType = {
  matches: boolean;
};

const Computers = () => {
  const Computer = useGLTF("/desktop_pc/scene.gltf");

  const [isSmallSCreen, setSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1270px)");
    setSmallScreen(mediaQuery.matches);

    const handleMediaQueryChange = (event: mediaQueryType) => {
      setSmallScreen(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <mesh>
      <hemisphereLight groundColor="black" intensity={0.15} />
      <pointLight intensity={2} />
      <spotLight
        position={[-20, 15, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        position={[0, -3, -1]}
        object={Computer.scene}
        scale={isSmallSCreen ? 0.6 : 0.8}
        rotatiom={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputerCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          enableZoom={false}
          enablePan={false}
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
