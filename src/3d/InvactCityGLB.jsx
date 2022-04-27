import { useGLTF } from '@react-three/drei';

function City() {
  const { scene } = useGLTF('/assets/invactCity.glb');

  return (
    <>
      <primitive object={scene} visible={true} />
    </>
  );
}

export default City;

useGLTF.preload('/assets/maps/invactCity.glb');
