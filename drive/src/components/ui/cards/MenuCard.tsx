import * as React from "react";

import "./Card.css";

interface MenuCardProps extends React.HTMLProps<HTMLDivElement> {}

const MenuCard: React.FC<MenuCardProps> = (props) => {
	return <div {...props} className={`MenuCard ${props.className}`}></div>;
};

export { MenuCard };
