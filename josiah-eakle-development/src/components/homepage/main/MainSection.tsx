import * as React from "react";

import { Hero } from "../hero/Hero";

import * as css from "./MainSection.module.css";

interface MainSectionProps {}

const MainSection: React.FC<MainSectionProps> = ({}) => {
	return (
		<main id="Main" className={css.Main}>
			<Hero
				title="My name is Josiah and I am a Full Stack Web Developer"
				subtitle="Looking for web solutions?"
			/>
		</main>
	);
};

export { MainSection };
