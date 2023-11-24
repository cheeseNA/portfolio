"use client";

import { CheeseScene } from "@/components/Cheese";
import { Canvas } from "@react-three/fiber";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex flex-row justify-center min-h-screen py-20">
        <div id="canvas-container">
          <Canvas>
            <CheeseScene />
          </Canvas>
        </div>
      </div>
    </main>
  );
}
