import * as React from "react";
import { useIsMobile } from "../../../../hooks/ReactiveHooks";
import { Group } from "../../../../types/ServiceTypes";
import { MenuCard } from "../../../ui/cards/MenuCard";
import { DriveLogo } from "../../../ui/icons/DriveLogo";
import { ServicesList } from "./ServicesList";
import { ServicesListTab } from "./ServicesListTab";

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
					<h2 className="active-group-title">SERVICES</h2>
					{activeList > -1 ? (
						<div
							onClick={() => setHideTabs(!hideTabs)}
							className={`mobile-navbar-icon services-menu-icon ${
								hideTabs ? "" : "open"
							}`}
						>
							<div className="top"></div>
							<div className="middle"></div>
							<div className="bottom"></div>
						</div>
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
					<h3 className="heading-bottom blue-text">
						What are you looking for?
					</h3>
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
							{group.title.toUpperCase()}
						</ServicesListTab>
					))}
				</div>
			</div>
		</MenuCard>
	);
};

export { ServicesMenu };
export type { Group };
