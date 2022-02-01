import * as React from "react";
import Wave from "react-wavify";

interface WaveBackgroundBot2Props {}

const WaveBackgroundBot2: React.FC<WaveBackgroundBot2Props> = ({}) => {
	return (
		<div className="WaveBackground bottom two">
			<Wave
				className="wave one"
				fill="var(--primary-green)"
				options={{
					height: 500,
					amplitude: 100,
					speed: 0.05,
					points: 6,
				}}
			/>
		</div>
	);
};

export { WaveBackgroundBot2 };
