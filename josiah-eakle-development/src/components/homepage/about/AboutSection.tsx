import * as React from "react";
import { Section } from "../../ui/section/Section";

import * as css from "./AboutSection.module.css";
import { SkillMenu } from "./skills/SkillMenu";

interface AboutSectionProps {}

const AboutSection: React.FC<AboutSectionProps> = ({}) => {
	return (
		<Section id="About" className={`${css.About}`}>
			<h2>About Me</h2>
			<SkillMenu
				groups={[
					{
						title: "About Me",
						description: [
							"Based in Knoxville TN, I help small buisnesses and individuals design, develop, and deploy their dream websites. Equiped with powerful content managment solutions, my applications provide streamlined experiences for both administrators and users.",
							"Based in Knoxville TN, I help small buisnesses and individuals design, develop, and deploy their dream websites. Equiped with powerful content managment solutions, my applications provide streamlined experiences for both administrators and users.",
						],
					},
					{
						title: "Front End",
						description: [
							"With over two years of experience developing client side web applications, I have worked with an array of different frameworks and languages.",
						],
						skills: ["React", "Gatsby"],
					},
				]}
			/>
		</Section>
	);
};

export { AboutSection };
