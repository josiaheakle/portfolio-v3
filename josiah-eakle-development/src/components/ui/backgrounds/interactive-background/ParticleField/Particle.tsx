import * as React from "react";
import * as THREE from "three";
import * as Three from "@react-three/fiber";
// import { useScrollYPosition } from "../../../../../hooks/ReactiveHooks";

interface ParticleProps {
	position: [number, number, number];
}

const Particle: React.FC<ParticleProps> = (props) => {
	const mesh = React.useRef<THREE.Mesh>();

	const [hovered, setHover] = React.useState(false);
	const [active, setActive] = React.useState(false);
	// const scrollYPos = useScrollYPosition();

	console.log({ props });

	const getRandColor = (): THREE.ColorRepresentation => {
		const rand = Math.floor(Math.random() * 3);
		switch (rand) {
			// case 0:
			// 	return "#a0474a";
			// case 1:
			// 	return "#316985";
			// case 2:
			// 	return "#00724c";
			default:
				return "#5f5f5f";
		}
	};

	Three.useFrame(({ camera, mouse }) => {
		if (mesh.current) {
			if (mesh.current.position.z < -50) mesh.current.position.z = 50;
			mesh.current.position.z = mesh.current.position.z -= 0.01;
		}
	});

	return (
		<mesh
			{...props}
			ref={mesh}
			scale={[0.05, 0.05, 0.05]}
			onClick={(e) => setActive(!active)}
			onPointerOver={(e) => setHover(true)}
			onPointerOut={(e) => setHover(false)}
		>
			<sphereGeometry attach="geometry" args={[1, 100]} />
			<meshStandardMaterial
				attach="material"
				color={new THREE.Color(getRandColor())}
			/>
		</mesh>
	);
};

export { Particle };
