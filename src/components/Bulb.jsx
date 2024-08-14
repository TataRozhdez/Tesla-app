import React, { useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";

const Bulb = (props) => {
	const ref = useRef();
	const { scene } = useThree();

	useEffect(() => {
		if (scene.lights) {
			scene.lights.push(ref);
		} else {
			scene.lights = [ref];
		}
	}, [scene]);

	return (
		<mesh {...props} ref={ref}>
			<pointLight
				castShadow
				shadow-radius={10}
			/>

			<sphereGeometry args={[0.2, 20, 20]} />
			<meshPhongMaterial emissive="white" />
		</mesh>
	);
};

export default Bulb;
