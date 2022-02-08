import * as React from "react";

import { ServicesList } from "./ServicesList";
import { ServicesListTab } from "./ServicesListTab";
import { MenuCard } from "../../ui/cards/MenuCard";

import { useIsMobile } from "../../../hooks/ReactiveHooks";

import { Group } from "../../../types/Project.type";
import { Hamburger } from "../../ui/buttons/Hamburger";

// import * as css from './ServicesMenu.module.css';

interface ServicesMenuProps {
	groups: Array<Group>;
}

const ServicesMenu: React.FC<ServicesMenuProps> = ({ groups }) => {
	const [activeList, setActiveList] = React.useState<number>(-1);
	const [hideTabs, setHideTabs] = React.useState<boolean>(false);
	const isMobile = useIsMobile();

	React.useEffect(() => {
		if (!isMobile) setHideTabs(false);
	}, [isMobile]);

	return (
		<MenuCard className={`ServicesMenu ${activeList === -1 ? "start" : ""}`}>
			{isMobile ? (
				<>
					<h2 className="active-group-title">Projects</h2>
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
			<div className="ServicesListContainer">
				<div>
					{activeList > -1 ? (
						<ServicesList
							services={groups[activeList].services}
							serviceTitle={groups[activeList].title}
						/>
					) : null}
				</div>
				<div className={`ServicesTabContainer ${hideTabs ? "hidden" : ""}`}>
					<h3 className="heading-bottom blue-text"></h3>
					{groups.map((group, i) => (
						<ServicesListTab
							key={i}
							group={group}
							isActive={activeList === i}
							onClick={() => {
								setHideTabs(true);
								setActiveList(i);
							}}
						>
							{group.title}
						</ServicesListTab>
					))}
				</div>
			</div>
		</MenuCard>
	);
};

export { ServicesMenu };
export type { Group };
