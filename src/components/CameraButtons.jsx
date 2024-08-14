import React from "react";

import state from "../state";

const style = {
	zIndex: 1,
	position: "absolute",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	bottom: "5vh",
	height: "40px",
	width: "40px",
	backgroundColor: "rgb(30, 75, 93)",
	color: "black",
	borderRadius: "50%",
	fontSize: 20,
	fontWeight: "bold",
	border: "1px solid black",
	cursor: "pointer",
};

const CameraButtons = () => {
	const sets = [

		// Roadster
		{
		  cameraPos: [-7, 2, 5],
		  target: [-12, 0, 0],
		  name: "Object_6",
		},

		// model_s
		{
		  cameraPos: [1, 2, 5],
		  target: [-4, 0, 0],
		  name: "object005_bod_0",
		},

		// model_3
		{
		  cameraPos: [9, 2, 4],
		  target: [4, 0, 0],
		  name: "Capot001_CAR_PAINT_0",
		},
	];

	let focusIndex = 2;

	const handleClick = (direction) => {
		if (direction === "right" && focusIndex < sets.length - 1) {
		  focusIndex += 1;
		}

		if (direction === "left" && focusIndex > 0) {
		  focusIndex -= 1;
		}

		const num = focusIndex;
		state.cameraPos.set(...sets[num].cameraPos);
		state.target.set(...sets[num].target);
		state.activeMeshName = sets[num].name;
		state.shouldUpdate = true;
	};

	return (
		<>
			<button
				onClick={() => handleClick("left")}
				className="button_controls _left"
			>
				{"<"}
			</button>

			<button
				onClick={() => handleClick("right")}
				className="button_controls _right"
			>
				{">"}
			</button>
		</>
	);
};

export default CameraButtons;
