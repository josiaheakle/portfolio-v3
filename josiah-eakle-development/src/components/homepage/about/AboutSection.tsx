import * as React from "react";
import { Section } from "../../ui/section/Section";

import * as css from "./AboutSection.module.css";

interface AboutSectionProps {}

const AboutSection: React.FC<AboutSectionProps> = ({}) => {
	return (
		<Section id="About" className={`${css.About}`}>
			<h2>My Skills</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
				dignissimos, doloribus libero recusandae illo voluptates tenetur non
				voluptatem iusto, deserunt voluptate dolor accusamus mollitia.
				Assumenda, ea eaque. At, quia corporis.
			</p>
		</Section>
	);
};

export { AboutSection };
