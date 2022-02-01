import * as React from "react";
import Wave from "react-wavify";

import "./WaveBackground.css";

interface WaveBackgroundProps {}

const WaveBackground: React.FC<WaveBackgroundProps> = ({}) => {
	return (
		<div className="WaveBackground top">
			<Wave
				className="wave three"
				fill="var(--primary-green)"
				options={{
					height: 25,
					amplitude: 25,
					speed: 0.07,
					points: 8,
				}}
			></Wave>

			<Wave
				className="wave two"
				fill="var(--contrast-blue)"
				options={{
					height: 50,
					amplitude: 25,
					speed: 0.06,
					points: 7,
				}}
			></Wave>
			<Wave
				className="wave one"
				fill="var(--primary-blue)"
				options={{
					height: 75,
					amplitude: 50,
					speed: 0.05,
					points: 6,
				}}
			></Wave>
			{/* </div> */}
		</div>
	);
};

export { WaveBackground };
