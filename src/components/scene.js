import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";

function Scene() {
  const { scene } = useGLTF("./scene.glb");
  const canvas = useRef(null);

  useEffect(() => {
    window.addEventListener("resize", windowResize);
  }, []);

  const windowResize = (e) => {
    console.log(e);
  };

  return (
    <>
      <Canvas
        ref={canvas}
        resize={{ scroll: true, debounce: { scroll: 50, resize: 0 } }}
        camera={{
          position: [-51.366700187507824, 8, 2.6010219330894104],
          near: 0.5,
          fov: 90,
          far: 1000,
          rotation: [0, 0, 0],
        }}
      >
        <OrbitControls></OrbitControls>
        <ambientLight></ambientLight>
        <pointLight position={[0, 20, 20]}></pointLight>
        <SceneCamera></SceneCamera>
        <mesh>
          <Suspense fallback={<p></p>}>
            <primitive object={scene}></primitive>
          </Suspense>
          <meshStandardMaterial color="orange" />
        </mesh>
        <axesHelper args={[5]} />
      </Canvas>
    </>
  );
}

function SceneCamera() {
  useFrame((state) => {
    // state?.camera?.lerp({ x: 10, y: 30, z: 40 }, 0.1);
    // state.camera.lookAt(0, 0, 0);
    console.log(state.camera);
  });
}
export default Scene;
