import * as React from "react";

import { Skill } from "./Skill";

import { Skill as SkillType } from "../../../../types/Skill.type";

import * as css from "./Skill.module.css";

interface SkillListProps {
	skills?: Array<string>;
	title: string;
	description: Array<string>;
}

const SkillList: React.FC<SkillListProps> = ({
	skills,
	title,
	description,
}) => {
	return (
		<>
			<div className={`${css.SkillList}`}>
				<div>
					{description.map((d, i) => (
						<p key={i}>{d}</p>
					))}
				</div>
				{skills ? (
					<div className={`${css.SkillTech}`}>
						Related Tech
						<ul className={`${css.SkillTechList}`}>
							{skills.map((s, i) => (
								<li className={`${css.SkillTechItem}`} key={i}>
									{s}
									{i < skills.length - 1 ? "," : ""}
								</li>
							))}
						</ul>
					</div>
				) : null}
			</div>
		</>
	);
};

export { SkillList };
