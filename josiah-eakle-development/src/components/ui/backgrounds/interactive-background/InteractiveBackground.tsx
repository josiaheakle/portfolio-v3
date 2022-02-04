import * as React from "react";
import * as Three from "@react-three/fiber";

import * as css from "./InteractiveBackground.module.css";

import { ParticleField } from "./ParticleField/ParticleField";
import { WaveForm } from "./WaveForm/WaveForm";

interface InteractiveBackgroundProps {}

const InteractiveBackground: React.FC<InteractiveBackgroundProps> = ({}) => {
	return (
		<Three.Canvas className={`${css.InteractiveBg}`}>
			<gridHelper />
			<pointLight position={[0, 0, 50]} power={5} />
			<WaveForm />
			{/* <ParticleField /> */}
		</Three.Canvas>
	);
};

export { InteractiveBackground };
