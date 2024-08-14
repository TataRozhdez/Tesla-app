import React from "react";

import * as THREE from "three";
import state from "../state";

const ColorPicker = () => {
	const handleClick = e => {
		if (!state.activeMesh) {
			return;
		}

		state.activeMesh.material.color = new THREE.Color(e.target.style.background);
	};

	return (
		<div
			style={{
				position: "absolute",
				zIndex: 1,
				left: 0,
				right: 0,
				margin: "auto",
				width: "fit-content",
				display: "flex",
				top: "20px",
			}}
		>
			<div
				onClick={handleClick}
				className="color_picker"
				style={{ background: "rgb(243, 246, 247)" }}
			/>

			<div
				onClick={handleClick}
				className="color_picker"
				style={{ background: "purple" }}
			/>

			<div
				onClick={handleClick}
				className="color_picker"
				style={{ background: "red" }}
			/>

			<div
				onClick={handleClick}
				className="color_picker"
				style={{ background: "yellow" }}
			/>

			<div
				onClick={handleClick}
				className="color_picker"
				style={{ background: "#000d89" }}
			/>

			<div
				onClick={handleClick}
				style={{ background: "#175421" }}
			/>
		</div>
	);
};

export default ColorPicker;
