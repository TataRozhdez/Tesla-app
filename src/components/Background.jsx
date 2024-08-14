import React, { useMemo } from "react";
import { useLoader, useThree } from "@react-three/fiber";
import { TextureLoader, WebGLCubeRenderTarget } from "three";

const Background = () => {
	const texture = useLoader(
	  TextureLoader,
	  `${process.env.PUBLIC_URL }/modern-background-gray.jpeg`
	);

	const { gl } = useThree();

	const formatted = useMemo(() => new WebGLCubeRenderTarget(
		texture.image.height
	  ).fromEquirectangularTexture(gl, texture), [gl, texture]);

	return (
		<primitive
			attach="background"
			object={formatted}
		/>
	);
};

export default Background;
