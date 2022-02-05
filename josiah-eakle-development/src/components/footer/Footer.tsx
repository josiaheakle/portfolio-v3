import * as React from "react";

import "./Footer.css";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
	return (
		<footer className="Footer">
			<span id="brand-copyright" className="footer-text">
				© 2022 Josiah Eakle Development.
				<br /> All Rights Reserved.
			</span>
			<span id="created-by" className="footer-text">
				Website created by{" "}
				<a className="created-by-link" href="josiaheakle.com">
					Josiah Eakle
				</a>
			</span>
		</footer>
	);
};

export { Footer };
