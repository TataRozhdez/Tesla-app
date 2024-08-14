import React, { useRef } from "react";

import { DoubleSide } from "three";
import { useFrame, extend } from "@react-three/fiber";

const Spinner = () => {
	const ref = useRef();

	useFrame(() => {
		if (ref.current.rotation) {
		  ref.current.rotation.y += .1;
		  ref.current.rotation.x += .1;
		}
	});

	return (
		<mesh ref={ref} position={[0, 3, 0]}>
			<dodecahedronGeometry args={[1, 1]} />

			<meshPhysicalMaterial
				color="rgb(30, 75, 93)"
				opacity={.5}
				side={DoubleSide}
			/>
		</mesh>
	);
};

export default Spinner;
