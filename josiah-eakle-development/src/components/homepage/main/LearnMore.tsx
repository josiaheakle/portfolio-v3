import * as React from "react";
import { DownArrow } from "../../ui/icons/DownArrow";

import * as css from "./MainSection.module.css";

interface LearnMoreProps {}

const LearnMore: React.FC<LearnMoreProps> = ({}) => {
	return (
		<div
			onClick={() => {
				document
					.getElementById("About")
					?.scrollIntoView({ behavior: "smooth" });
			}}
			className={`${css.Container}`}
		>
			<span>Learn More</span>
			<DownArrow className={css.Arrow} color={"white"} />
		</div>
	);
};

export { LearnMore };
