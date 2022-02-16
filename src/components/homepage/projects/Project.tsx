import * as React from "react";
import { BooleanKeyframeTrack, NotEqualStencilFunc } from "three";

import { Project as ProjectType } from "../../../types/Project.type";
import { GitHubIcon } from "../../ui/icons/GitHubIcon";

import * as css from "./Project.module.css";

interface ProjectProps {
	project: ProjectType;
	small?: boolean;
	active?: boolean;
	onActiveUpdate: (active: boolean) => void;
}

const Project: React.FC<ProjectProps> = ({
	project,
	small,
	active,
	onActiveUpdate,
}) => {
	const [isActive, setIsActive] = React.useState(false);
	const [isRoleActive, setIsRoleActive] = React.useState(true);

	React.useEffect(() => {
		if (active !== undefined) {
			setIsActive(active);
		}
	}, [active]);

	return (
		<article
			tabIndex={0}
			onFocus={() => {
				onActiveUpdate(true);
			}}
			className={`${css.Project} ${isActive ? css.active : ""} ${
				small ? css.small : ""
			}`}
		>
			<div className={`${css.Content} ${!isActive ? css.hidden : ""}`}>
				<div className={`${css.HeaderContainer}`}>
					<span className={`${css.Header}`}>
						<a className={`${css.TitleLink}`} href={project.link}>
							<h3 className={`${css.Title}`}>{project.title}</h3>
						</a>
						{project.ghLink ? (
							<a
								title="See the code!"
								className={`${css.GitHubLink}`}
								href={project.ghLink}
							>
								<GitHubIcon className={`${css.GitHubIcon}`} />
							</a>
						) : null}
					</span>
					<p className={`${css.Description}`}>{project.description}</p>
				</div>
				<div className={`${css.ListContainer}`}>
					{project.techStack ? (
						<span
							className={`${css.ProjectButtonContainer} ${
								project.isSmall ? css.small : ""
							}`}
						>
							<button
								className={`${css.ProjectButton} ${
									isRoleActive ? css.active : ""
								}`}
								onClick={() => setIsRoleActive(true)}
							>
								My Role
							</button>
							|
							<button
								className={`${css.ProjectButton} ${
									isRoleActive ? "" : css.active
								}`}
								onClick={() => setIsRoleActive(false)}
							>
								Tech Stack
							</button>
						</span>
					) : (
						<h4 className={`${css.ProjectButtonPlaceholder}`}>My Role</h4>
					)}
					<ul className={`${css.List}`}>
						{isRoleActive || !project.techStack
							? project.myRole.map((skill, i) => (
									<li className={`${css.ListItem}`} key={i}>
										{skill}
									</li>
							  ))
							: project.techStack.map((tech, i) => (
									<li className={`${css.ListItem}`} key={i}>
										{tech}
									</li>
							  ))}
					</ul>
				</div>
			</div>
			<div className={`${css.IdleBackground} ${isActive ? css.hidden : ""}`}>
				{project.titleLogo ? (
					<img
						className={`${css.BackgroundLogo}`}
						src={project.titleLogo}
					></img>
				) : (
					<span className={`${css.BackgroundHeader}`}>
						{project.icon ? (
							<img
								className={css.BackgroundIcon}
								src={project.icon}
								alt={project.title}
							/>
						) : null}
						<h3
							className={`${css.BackgroundTitle} ${
								project.isDsf ? css.dsf : ""
							}`}
						>
							{project.title}
						</h3>
					</span>
				)}
			</div>
		</article>
	);
};

export { Project };
