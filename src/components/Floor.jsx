import React from "react";
import { useBox } from "@react-three/cannon";

const Floor = (props) => {
	const [ref] = useBox(() => ({ args: [20, 1, 10] }));

	return (
		<mesh
			receiveShadow
			ref={ref}
			{...props}
		>
			<boxGeometry args={[200, 1, 200]} />
			<meshPhysicalMaterial color="black" opacity={1} />
		</mesh>
	);
};

export default Floor;
