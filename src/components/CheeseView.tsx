import {
  ContactShadows,
  PresentationControls,
  PerspectiveCamera,
  SoftShadows,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { CheeseModel } from "./CheeseModel";
import { Environment } from "@react-three/drei";
import { Suspense } from "react";

export const CheeseView = () => {
  return (
    <div
      id="canvas-container"
      className="h-full w-full object-cover object-center"
    >
      <Canvas shadows>
        <Suspense fallback={null}>
          <PerspectiveCamera
            makeDefault
            position={[0, 2, 5]}
            fov={40}
            rotation={[-Math.PI / 10, 0, 0]}
          />
          {/* <pointLight position-z={-15} intensity={1.0} color="#F8C069" /> */}
          <ambientLight intensity={1} />
          <spotLight
            intensity={0.5}
            angle={0.1}
            penumbra={1}
            position={[10, 15, -5]}
            castShadow
          />
          <PresentationControls
            global={false}
            speed={1}
            config={{ mass: 1, tension: 170, friction: 26 }}
            polar={[0, 0]}
          >
            <CheeseModel position={[0, 0, 0]} />
          </PresentationControls>
          <Environment preset="sunset" blur={1} />
          <ContactShadows
            resolution={512}
            position={[0, -0.7, 0]}
            opacity={1}
            scale={10}
            blur={4}
            far={0.8}
          />
          {/* <OrbitControls
            enablePan={false}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          /> */}
        </Suspense>
      </Canvas>
    </div>
  );
};
