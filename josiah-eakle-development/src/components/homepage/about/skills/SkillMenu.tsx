import * as React from "react";

import { SkillTab } from "./ListTab";
import { SkillList } from "./SkillList";
import { MenuCard } from "../../../ui/cards/MenuCard";
import { Hamburger } from "../../../ui/buttons/Hamburger";

import { useIsMobile } from "../../../../hooks/ReactiveHooks";

import { Group } from "../../../../types/Skill.type";

import * as css from "./Skill.module.css";
import { group } from "console";

interface SkillMenuProps {
	groups: Array<Group>;
}

const SkillMenu: React.FC<SkillMenuProps> = ({ groups }) => {
	const [activeList, setActiveList] = React.useState<number>(-1);
	const [hideTabs, setHideTabs] = React.useState<boolean>(false);
	const isMobile = useIsMobile();

	React.useEffect(() => {
		if (!isMobile) setHideTabs(false);
	}, [isMobile]);

	return (
		<MenuCard
			className={`${css.SkillMenu} ${activeList === -1 ? css.start : ""}`}
		>
			{isMobile ? (
				<>
					<h2 className={`${css.GroupTitle}`}>
						{activeList > -1 ? groups[activeList].title : "My Skills"}
					</h2>
					{activeList > -1 ? (
						<Hamburger
							onClick={() => {
								setHideTabs(!hideTabs);
							}}
							open={!hideTabs}
						/>
					) : null}
				</>
			) : null}
			<div className={`${css.SkillListContainer}`}>
				<div>
					{activeList > -1 ? (
						<>
							<SkillList
								skills={groups[activeList].skills}
								title={groups[activeList].title}
								description={groups[activeList].description}
							/>
						</>
					) : null}
				</div>
				<div
					className={`${css.SkillTabContainer} ${hideTabs ? css.hidden : ""}`}
				>
					{groups.map((g, i) => (
						<SkillTab
							key={i}
							group={g}
							isActive={activeList === i}
							onClick={() => {
								setHideTabs(true);
								setActiveList(i);
							}}
						/>
					))}
				</div>
			</div>
		</MenuCard>
	);
};

export { SkillMenu };
