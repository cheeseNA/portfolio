import {
  ContactShadows,
  OrbitControls,
  PerspectiveCamera,
  SoftShadows,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { CheeseModel } from "./CheeseModel";
import { Environment } from "@react-three/drei";
import { Suspense } from "react";

export const CheeseView = () => {
  return (
    <div id="canvas-container" className="w-full">
      <Canvas shadows>
        <Suspense fallback={null}>
          <PerspectiveCamera
            makeDefault
            position={[0, 4, 5]}
            fov={50}
            // rotation={[0, 80, 0]}
          >
            {/* <pointLight position-z={-15} intensity={1.0} color="#F8C069" /> */}
          </PerspectiveCamera>
          <ambientLight intensity={1.0} />
          <CheeseModel position={[0, -1.5, 0]} />
          <SoftShadows />
          <ContactShadows
            rotation={[Math.PI / 2, 0, 0]}
            position={[0, -1.6, 0]}
            opacity={0.8}
            width={15}
            height={15}
            blur={2.5}
            far={1.6}
          />
          <Environment preset="sunset" />
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};