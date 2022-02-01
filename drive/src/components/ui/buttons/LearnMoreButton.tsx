import * as React from "react";

import { Link } from "react-scroll";
import { DownArrow } from "../icons/DownArrow";

import { animated, useSpring } from "react-spring";

import "./LearnMoreButton.css";
import { useIsMobile } from "../../../hooks/ReactiveHooks";

interface LearnMoreButtonProps {
	scrollTo: string;
}

const LearnMoreButton: React.FC<LearnMoreButtonProps> = ({ scrollTo }) => {
	const [isHover, setIsHover] = React.useState(false);
	const isMobile = useIsMobile();

	const animProps = useSpring({
		to: { zIndex: 10, opacity: 1 },
		from: { zIndex: 10, opacity: 0 },
		delay: 3300,
		config: { duration: 500 },
	});

	const animPropsMobile = useSpring({
		to: { zIndex: 10, opacity: 1 },
		from: { zIndex: 10, opacity: 0 },
		delay: 1800,
		config: { duration: 500 },
	});

	return (
		<animated.div style={isMobile ? animPropsMobile : animProps}>
			<Link
				to={scrollTo}
				smooth={true}
				className={`LearnMoreButtonContainer ${isHover ? "isHover" : ""}`}
				onMouseEnter={() => {
					setIsHover(true);
				}}
				onMouseLeave={() => {
					setIsHover(false);
				}}
			>
				GET STARTED
				<DownArrow
					width="3rem"
					className={`LearnMoreButton ${isHover ? "isHover" : ""}`}
				/>
			</Link>
		</animated.div>
	);
};

export { LearnMoreButton };
