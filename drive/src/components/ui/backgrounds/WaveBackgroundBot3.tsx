import * as React from "react";
import Wave from "react-wavify";
import { useIsMobile } from "../../../hooks/ReactiveHooks";

interface WaveBackgroundBot3Props {}

const WaveBackgroundBot3: React.FC<WaveBackgroundBot3Props> = ({}) => {
	return (
		<div className="WaveBackground bottom three">
			<Wave
				className="wave one"
				fill="var(--white)"
				options={{
					height: 25,
					amplitude: 50,
					speed: 0.05,
					points: 6,
				}}
			/>
		</div>
	);
};

export { WaveBackgroundBot3 };
