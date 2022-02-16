import * as React from "react";
import { useOpacityAnim } from "../../../hooks/AnimHooks";

import { Hero } from "./hero/Hero";
import { LearnMore } from "./LearnMore";

import * as css from "./MainSection.module.css";

interface MainSectionProps {}

const MainSection: React.FC<MainSectionProps> = ({}) => {
	return (
		<main id="Main" className={css.Main}>
			<Hero
				title="I create clean, secure web applications built with modern JavaScript frameworks, with a love for TypeScript and Linux."
				subtitle="Hi, I am Josiah"
			/>
			<LearnMore />
		</main>
	);
};

export { MainSection };
