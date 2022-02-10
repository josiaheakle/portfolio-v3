import * as React from "react";

import { Button } from "../../../ui/buttons/Button";

import { Skill as SkillType } from "../../../../types/Skill.type";

import * as css from "./Skill.module.css";

interface SkillProps extends SkillType {}

const Skill: React.FC<SkillProps> = ({ title, tech }) => {
	return (
		<div className={css.Skill}>
			<h4 className={css.SkillTitle}>{title}</h4>
			<ul className={`${css.SkillTech}`}>
				{tech.map((t, i) => (
					<li key={i}>{t}</li>
				))}
			</ul>
		</div>
	);
};

export { Skill };
