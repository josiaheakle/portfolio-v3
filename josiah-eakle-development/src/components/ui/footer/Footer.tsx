import * as React from "react";
import { DriveLogo } from "../icons/DriveLogo";

import "./Footer.css";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
	return (
		<footer className="Footer">
			<span id="brand-copyright" className="footer-text">
				© 2021 DRIVE VENTURES.
				<br /> ALL RIGHTS RESERVED.
			</span>
			<span id="created-by" className="footer-text">
				WEBSITE CREATED BY{" "}
				<a className="created-by-link" href="josiaheakle.com">
					JOSIAH EAKLE
				</a>
			</span>
		</footer>
	);
};

export { Footer };
