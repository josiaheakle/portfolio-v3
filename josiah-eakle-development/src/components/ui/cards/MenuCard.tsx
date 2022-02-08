import * as React from "react";

import * as css from "./Card.module.css";

interface MenuCardProps extends React.HTMLProps<HTMLDivElement> {}

const MenuCard: React.FC<MenuCardProps> = (props) => {
	return (
		<div {...props} className={`${css.MenuCard} ${props.className}`}></div>
	);
};

export { MenuCard };
