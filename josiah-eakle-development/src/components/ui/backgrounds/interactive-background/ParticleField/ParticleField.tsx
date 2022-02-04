import * as React from "react";
import * as THREE from "three";
import * as Three from "@react-three/fiber";
import { useScrollYPosition } from "../../../../../hooks/ReactiveHooks";
import { Particle } from "./Particle";

interface ParticleFieldProps {}

const ParticleField: React.FC<ParticleFieldProps> = () => {
	const genRandPos = (): [x: number, y: number, z: number] => {
		return [
			Math.floor(Math.random() * 100) - 50,
			Math.floor(Math.random() * 50) - 25,
			Math.floor(Math.random() * 100) - 50,
		];
	};

	Three.useFrame(({ camera, mouse }) => {
		// mouse.
	});

	return (
		<>
			{Array.apply(null, Array(1000)).map((v, i) => {
				return <Particle position={genRandPos()} />;
			})}
		</>
	);
};

export { ParticleField };
