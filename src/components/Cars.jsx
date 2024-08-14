import React, { Suspense } from "react";

import { BoundingBox, Draggable, Model } from "./index";

const Cars = () => {
	return (
		<Suspense fallback={null}>
			<Draggable transformGroup>
				<BoundingBox
					position={[4, 4, 0]}
					dims={[3, 2, 6]}
					offset={[0, -0.4, 0.8]}
				>
					<Model
						path="/tesla_model_3/scene.gltf"
						scale={new Array(3).fill(0.01)}
					/>
				</BoundingBox>
			</Draggable>

			<Draggable transformGroup>
				<BoundingBox
					position={[-4, 4, 0]}
					dims={[3, 2, 7]}
					offset={[0, -0.8, 0.2]}
				>
					<Model
						path="/tesla_model_s/scene.gltf"
						scale={new Array(3).fill(0.013)}
					/>
				</BoundingBox>
			</Draggable>
		</Suspense>
	);
};

export default Cars;
