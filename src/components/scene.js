import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";
import { VRButton, ARButton, XR } from "@react-three/xr";

function Scene() {
  const { scene } = useGLTF("./scene.glb");
  const canvas = useRef(null);

  useEffect(() => {
    console.log(canvas.current);
  }, []);

  const windowResize = (e) => {};

  return (
    <>
      <VRButton />
      <Canvas
        style={{ background: "#ff4500" }}
        ref={canvas}
        resize={{ scroll: true, debounce: { scroll: 50, resize: 0 } }}
        camera={{
          position: [-36, 1, 0.05],
          fov: 90,
          near: 1,
          far: 100,
          zoom: 25,
        }}
        orthographic={true}
      >
        <XR>
        <ambientLight></ambientLight>
        <pointLight position={[0, 20, 20]}></pointLight>
        <SceneCamera></SceneCamera>
        <mesh>
          <Suspense fallback={<p></p>}>
            <primitive object={scene}></primitive>
          </Suspense>
        </mesh>
        </XR>
      </Canvas>
    </>
  );
}

function SceneCamera() {
  useFrame((state) => {
    // state?.camera?.lerp({ x: 10, y: 30, z: 40 }, 0.1);
    // state.camera.lookAt(0, 0, 0);
    console.log(state);
  });
}
export default Scene;
