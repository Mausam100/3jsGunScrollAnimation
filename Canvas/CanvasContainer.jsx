
import React, { useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, ScrollControls, useScroll } from "@react-three/drei";

function Model(props) {
  const { scene } = useGLTF("/mp5.gltf");
  const modelRef = useRef();
  const scroll = useScroll();

  const initialRotation = [0, Math.PI / 3, 0]
 

  useFrame(() => {
    const scrollOffset = scroll.offset;

    if (modelRef.current) {
      // Update position and rotation based on scroll offset
      modelRef.current.position.x = scrollOffset * 150;
      modelRef.current.rotation.y = initialRotation[1] + Math.PI * 3 * scrollOffset;
    }
  });

  return (
    <group ref={modelRef} position={[0, -40, 0]} rotation={initialRotation}>
      <primitive object={scene} {...props} />
    </group>
  );
}


 

const CanvasContainer = () => {
  return (
    <Canvas camera={{ position: [0, 0, -150], fov: 60 }}>
      <OrbitControls enableZoom={false} enableRotate={false}   />
      <ScrollControls pages={5} damping={0.25}>
        <ambientLight intensity={2} />
        <directionalLight position={[5, 5, 5]} />
        <directionalLight intensity={10} color={"red"} position={[50, 0, 0]} />
        <directionalLight intensity={10} color={"green"} position={[0, 0, 50]} />
        <directionalLight intensity={10} color={"grey"} position={[0, -50, 0]} />
        <Model scale={0.5} />
      </ScrollControls>
    </Canvas>
  );
};

export default CanvasContainer;
