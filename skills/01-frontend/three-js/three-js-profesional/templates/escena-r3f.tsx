"use client";

import { Suspense, useMemo } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import type { Group } from "three";

function Modelo({ url }: { url: string }) {
  const gltf = useLoader(GLTFLoader, url, (loader) => {
    const draco = new DRACOLoader();
    draco.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.7/");
    loader.setDRACOLoader(draco);
  });

  const grupo = gltf.scene as Group;
  return <primitive object={grupo} scale={1.5} />;
}

export default function EscenaR3F({ url, calidad }: { url: string; calidad: "alta" | "baja" }) {
  const pixelRatio = useMemo(() => (calidad === "alta" ? 2 : 1), [calidad]);

  return (
    <Canvas camera={{ position: [5, 4, 7], fov: 60 }} dpr={pixelRatio}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[6, 10, 4]} intensity={2.2} />
      <Suspense fallback={null}>
        <Modelo url={url} />
      </Suspense>
      <OrbitControls enableDamping />
    </Canvas>
  );
}