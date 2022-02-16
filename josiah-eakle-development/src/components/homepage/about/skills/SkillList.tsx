import * as React from "react";

import { Skill } from "./Skill";

import { Skill as SkillType } from "../../../../types/Skill.type";

import * as css from "./Skill.module.css";
import { useIsMobile } from "../../../../hooks/ReactiveHooks";

interface SkillListProps {
	skills?: Array<string>;
	title?: string;
	description?: Array<string>;
}

const SkillList: React.FC<SkillListProps> = ({
	skills,
	title,
	description,
}) => {
	const isMobile = useIsMobile();

	return (
		<>
			<div
				className={`${css.SkillList} ${
					!(title && description) ? css.start : ""
				}`}
			>
				{title && description ? (
					<>
						{!isMobile ? <h3 className={`${css.Header}`}>{title}</h3> : null}
						<div>
							{description.map((d, i) => (
								<p key={i}>{d}</p>
							))}
						</div>
						<div className={`${css.SkillTech}`}>
							{skills ? (
								<>
									<hr className={`${css.Line}`} />
									<h4 className={`${css.SkillTechHeader}`}>Related Tech</h4>
									<ul className={`${css.SkillTechList}`}>
										{skills.map((s, i) => (
											<li className={`${css.SkillTechItem}`} key={i}>
												{s}
												{i < skills.length - 1 ? "," : ""}
											</li>
										))}
									</ul>
								</>
							) : null}
						</div>
					</>
				) : null}
			</div>
		</>
	);
};

export { SkillList };
