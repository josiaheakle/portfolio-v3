import * as React from "react";

import { SkillMenu } from "./skills/SkillMenu";
import { Section } from "../../ui/section/Section";

import { Group } from "../../../types/Skill.type";

import * as css from "./AboutSection.module.css";

interface AboutSectionProps {
	groups: Array<Group>;
}

const AboutSection: React.FC<AboutSectionProps> = ({ groups }) => {
	return (
		<Section id="About" className={`${css.About}`}>
			<span className={`${css.Subtitle}`}>My Skill and Experience</span>
			<h2 className={`${css.Title}`}>About Me</h2>
			<SkillMenu groups={groups} />
		</Section>
	);
};

export { AboutSection };
