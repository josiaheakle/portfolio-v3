import * as React from "react";

import * as css from "./Footer.module.css";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
	return (
		<footer className={css.Footer}>
			<span id="brand-copyright" className={css.Text}>
				© 2022 Josiah Eakle Development.
				<br /> All Rights Reserved.
			</span>
			<span id="created-by" className={css.Text}>
				Website created by{" "}
				<a className={css.Link} href="josiaheakle.com">
					Josiah Eakle
				</a>
			</span>
		</footer>
	);
};

export { Footer };
