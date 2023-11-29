"use client";

import { CheeseScene } from "@/components/Cheese";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex flex-row justify-center min-h-screen py-20">
        <div id="canvas-container" className="w-full">
          <Canvas shadows>
            <CheeseScene />
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
          </Canvas>
        </div>
      </div>
    </main>
  );
}
