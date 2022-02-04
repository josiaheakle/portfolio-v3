import * as React from "react";
import Wave from "react-wavify";

import "./WaveBackground.css";

interface WaveBackgroundProps {
	activeCard: 0 | 1 | 2 | 3;
}

const WaveBackground: React.FC<WaveBackgroundProps> = ({ activeCard }) => {
	return (
		<div className="WaveBackground top">
			<Wave
				className={`wave three ${activeCard > 0 ? "open" : ""} ${
					activeCard === 3 ? "locked" : ""
				}`}
				fill="var(--primary-green-trans)"
				options={{
					height: 25,
					amplitude: 50,
					speed: 0.07,
					points: 8,
				}}
			></Wave>

			<Wave
				className={`wave two ${activeCard > 0 ? "open" : ""} ${
					activeCard === 2 ? "locked" : ""
				}`}
				fill="var(--contrast-blue-trans)"
				options={{
					height: 25,
					amplitude: 50,
					speed: 0.06,
					points: 7,
				}}
			></Wave>
			<Wave
				className={`wave one ${activeCard > 0 ? "open" : ""} ${
					activeCard === 1 ? "locked" : ""
				}`}
				fill="var(--primary-blue-trans)"
				options={{
					height: 25,
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
