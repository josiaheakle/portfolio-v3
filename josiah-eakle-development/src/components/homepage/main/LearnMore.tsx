import * as React from "react";
import * as Spring from "react-spring";
import { useOpacityAnim } from "../../../hooks/AnimHooks";

import { DownArrow } from "../../ui/icons/DownArrow";

import * as css from "./MainSection.module.css";

interface LearnMoreProps {}

const LearnMore: React.FC<LearnMoreProps> = ({}) => {
	const animProps = useOpacityAnim(2000);
	return (
		<Spring.animated.div
			style={animProps}
			onClick={() => {
				document
					.getElementById("About")
					?.scrollIntoView({ behavior: "smooth" });
			}}
			className={`${css.Container}`}
		>
			<span>Learn More</span>
			<DownArrow className={css.Arrow} color={"white"} />
		</Spring.animated.div>
	);
};

export { LearnMore };
