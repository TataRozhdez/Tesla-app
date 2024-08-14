import React from "react";
import * as THREE from "three";
import { useBox } from "@react-three/cannon";
import { useLoader } from "@react-three/fiber";

const Box = (props) => {
	const [ref, api] = useBox(() => ({ mass: 1 }));

	const texture = useLoader(
		THREE.TextureLoader,
		`${process.env.PUBLIC_URL }/wood.jpg`
	);

	const handlePointerDown = e => {
		e.object.active = true;

		if (window.activeMesh) {
			scaleDown(window.activeMesh);
			window.activeMesh.active = false;
		}

		window.activeMesh = e.object;
	};

	const handlePointerEnter = e => {
		e.object.scale.x = 1.5;
		e.object.scale.y = 1.5;
		e.object.scale.z = 1.5;
	};

	const handlePointerLeave = e => {
		if (!e.object.active) {
			scaleDown(e.object);
		}
	};

	const scaleDown = object => {
		object.scale.x = 1;
		object.scale.y = 1;
		object.scale.z = 1;
	};

	return (
		<mesh
			castShadow
			ref={ref}
			api={api}
			onPointerDown={handlePointerDown}
			onPointerEnter={handlePointerEnter}
			onPointerLeave={handlePointerLeave}
			{...props}
		>
			<boxBufferGeometry args={[1, 1, 1]} />
			<meshPhysicalMaterial map={texture} />
		</mesh>
	);
};

export default Box;
