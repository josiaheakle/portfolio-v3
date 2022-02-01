import * as React from "react";
import Wave from "react-wavify";

interface WaveBackgroundBot1Props {}

const WaveBackgroundBot1: React.FC<WaveBackgroundBot1Props> = ({}) => {
	return (
		<div className="WaveBackground bottom one">
			<Wave
				className="wave one"
				fill="var(--contrast-blue)"
				options={{
					height: 400,
					amplitude: 100,
					speed: 0.05,
					points: 6,
				}}
			/>
		</div>
	);
};

export { WaveBackgroundBot1 };
