import React, { Suspense, useState } from "react";
import { Canvas } from '@react-three/fiber'
import InvactCity from './3d/InvactCity';
import InvactCityGLB from './3d/InvactCityGLB';
import Player from './3d/Player';
import { OrbitControls, PerspectiveCamera, Sky } from '@react-three/drei';
import "./App.css";

function App() {
  const [animation, setAnimation] = useState(null);
  return (
    <div style={{position: 'relative'}}>
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
            <Player animation={animation}/>
          </Suspense>
        </Canvas>
      </div>
      <div id="controlPanel">
        <button onClick={() => setAnimation('wave')}>Wave</button>
        <button onClick={() => setAnimation('sit')}>Sit</button>
        <button onClick={() => setAnimation('walk')}>Walk</button>
      </div>
    </div>
  );
}

export default App;
