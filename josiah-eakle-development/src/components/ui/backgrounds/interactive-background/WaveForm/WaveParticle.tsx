import * as React from "react";
import * as THREE from "three";

interface WaveParticleProps {
	position: [x: number, y: number, z: number];
	scale: number;
}

const WaveParticle: React.FC<WaveParticleProps> = ({ position, scale }) => {
	const sphereGeometry = new THREE.SphereGeometry(1, 100, 100);
	const sphereMaterial = new THREE.MeshLambertMaterial({
		color: 0xffffff,
	});
	return (
		<mesh
			scale={[0.5 * scale, 0.5 * scale, 0.5 * scale]}
			position={position}
			geometry={sphereGeometry}
			material={sphereMaterial}
			castShadow={true}
		></mesh>
	);
};

export { WaveParticle };
