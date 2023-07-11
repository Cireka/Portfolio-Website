import React from "react";
import { Suspense } from "react";
import { Float } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Decal, OrbitControls, Preload, useTexture } from "@react-three/drei";
import CanvasLoader from "../Loader";


const Ball = (props: any) => {
  const decal = useTexture<any>(props.imgUrl.src);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
          color={"#70198A"}
        />
        <Decal
          map={decal}
          rotation={[2 * Math.PI, 0, 6.25]}
          position={[0, 0, 1]}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }: any) => {
  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} enablePan={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
