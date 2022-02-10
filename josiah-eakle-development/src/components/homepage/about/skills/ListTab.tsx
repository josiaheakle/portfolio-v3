import * as React from "react";

import { Group } from "../../../../types/Skill.type";

import * as css from "./Skill.module.css";

interface SkillTabProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
	group: Group;
	isActive: boolean;
	onClick: () => void;
}

const SkillTab: React.FC<SkillTabProps> = ({ isActive, group, ...props }) => {
	return (
		<button
			className={`${css.SkillTab} ${css.ribbon} ${
				isActive ? css.selected : ""
			}`}
			{...props}
		>
			{group.title}
		</button>
	);
};

export { SkillTab };
