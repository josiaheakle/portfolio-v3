import * as React from "react";

import * as css from "./Footer.module.css";

import JEIcon from "../../assets/icon.png";
import { GitHubIcon } from "../ui/icons/GitHubIcon";
import { TwitterIcon } from "../ui/icons/TwitterIcon";
import { LinkedInIcon } from "../ui/icons/LinkedInIcon";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
	return (
		<footer className={css.Footer}>
			<img className={`${css.Icon}`} src={JEIcon}></img>

			<span className={css.Text}>
				Designed, developed and deployed by Josiah Eakle.
			</span>
			<span>
				<a
					title="Github Profile"
					className={css.Link}
					href="https://github.com/josiaheakle"
				>
					<GitHubIcon className={`${css.LinkIcon}`} fill="var(--white)" />
				</a>
				<a
					title="LinkedIn Profile"
					className={css.Link}
					href="https://www.linkedin.com/in/josiah-eakle-10a7a6204/"
				>
					<LinkedInIcon className={`${css.LinkIcon}`} fill="var(--white)" />
				</a>
				<a
					title="Twitter Profile"
					className={css.Link}
					href="https://twitter.com/JosiahEakle"
				>
					<TwitterIcon className={`${css.LinkIcon}`} fill="var(--white)" />
				</a>
			</span>
		</footer>
	);
};

export { Footer };
