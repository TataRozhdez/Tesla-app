import React from "react";

import Bulb from "./Bulb";

const Lights = () => (
	<>
		<ambientLight intensity={0.2} />

		<directionalLight
			intensity={0.5}
			position={[6, 3, 0]}
		/>

		<Bulb position={[-6, 3, 0]} />
		<Bulb position={[0, 3, 0]} />
		<Bulb position={[6, 3, 0]} />
	</>
);

export default Lights;
