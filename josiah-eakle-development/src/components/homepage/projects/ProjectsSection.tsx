import * as React from "react";

import { Section } from "../../ui/section/Section";
import { Project } from "./Project";

import { Project as ProjectType } from "../../../types/Project.type";

import * as css from "./ProjectsSection.module.css";

interface ProjectsSectionProps {
	projects: Array<ProjectType>;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
	const [activeProject, setActiveProject] = React.useState(-1);

	return (
		<Section className={`${css.Section}`} id="Projects">
			<div>
				<span className={`${css.Subtitle}`}>
					Professional & Personal Projects
				</span>
				<h2 className={`${css.Title}`}>My Projects</h2>
			</div>
			<div className={`${css.Projects}`}>
				{projects.map((p, i) => (
					<Project
						onActiveUpdate={(active) => {
							if (active === true) setActiveProject(i);
						}}
						active={activeProject === i}
						key={i}
						project={p}
						small={p.isSmall || false}
					/>
				))}
			</div>
		</Section>
	);
};

export { ProjectsSection };
