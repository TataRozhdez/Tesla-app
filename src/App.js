import { useRef } from "react";
import {OrbitControls} from "three/addons";
import {Canvas, extend, useFrame, useThree} from "@react-three/fiber";

import "./App.css"

const Box = (props) => {
    const ref = useRef();

    useFrame((state) => {
        ref.current.rotation.x += 0.01;
        ref.current.rotation.y += 0.01;
    })

    return (
        <mesh ref={ref}>
            <boxGeometry />
            <meshBasicMaterial color="blue" />
        </mesh>
    )
}

extend({ OrbitControls });
const Orbit = () => {
    const { camera, gl } = useThree();

    return (
        <orbitControls
            attach='orbitControls'
            args={[camera, gl.domElement]}
        />
    )
}

const App = () => {

  return (
    <div className="App">
      <Canvas camera={{ position: [3, 3, 3] }}>
          <Box position={[3, 3, 3]} />
          <Orbit />
          <axesHelper args={[5]} />
      </Canvas>
    </div>
  );
}

export default App;
