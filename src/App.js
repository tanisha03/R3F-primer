import React, { Suspense } from "react";
import { Canvas } from '@react-three/fiber'
import InvactCity from './InvactCity.js';
import InvactCityGLB from './InvactCityGLB.js';
import { OrbitControls, PerspectiveCamera, Sky } from '@react-three/drei';

function App() {
  return (
    <div id="canvas-container" style={{width: '100%', height: '100vh'}}>
      <Canvas>
        <OrbitControls
            enableDamping
            enableZoom={false}
            enablePan={false}
            minDistance={8}
            maxDistance={8}
            maxPolarAngle={Math.PI / 2 - 0.05}
            minPolarAngle={Math.PI / 3 - 0.1}
            makeDefault
            target={[
              0,
              3.9,
              -62,
            ]}
          />
          <PerspectiveCamera fov={45} near={0.8} far={500} makeDefault />
          <ambientLight intensity={0.5} />
          <directionalLight intensity={0.5} position={[0, 1, 1]} />
          <Sky
            distance={4500}
            sunPosition={[0, 1, 1]}
            inclination={0}
            azimuth={0.25}
          />
        <Suspense fallback={null}>
          {/* <InvactCity/> */}
          <InvactCityGLB/>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
