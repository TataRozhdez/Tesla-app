import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";

import "./App.css";
import {
	Floor,
	Orbit,
	Spinner,
	Lights,
	Background,
	CameraControls,
	CameraButtons,
	Effects,
	Cars,
	ColorPicker,
} from "./components";

const App = () => {
	const [windowDimensions, setWindowDimensions] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});

	const handleResize = () => setWindowDimensions({
		width: window.innerWidth,
		height: window.innerHeight,
	});

	useEffect(() => {
		window.addEventListener("resize", handleResize);
	}, [windowDimensions]);

	return (
		<div className="App">
			<ColorPicker />
			<CameraButtons />

			<Canvas
				gl={{
				  powerPreference: "high-performance",
				  antialias: false,
				  stencil: false,
				  depth: false,
				}}
				shadowMap
				style={{background: "gray"}}
				camera={{ position: [7, 7, 7] }}
			>
				<Suspense fallback={<Spinner />}>
					<Background windowDimensions={windowDimensions} />
				</Suspense>

				<CameraControls />
				<Lights />
				<Orbit />

				<Physics>
					<Cars />
					<Floor position={[0, -1, 0]} />
				</Physics>

				<Effects />
			</Canvas>
		</div>
	);
};

export default App;
