import * as React from "react";

import * as css from "./Card.module.css";

interface CardProps extends React.HTMLAttributes<HTMLElement> {}

const Card: React.FC<CardProps> = (props) => {
	return (
		<article
			{...props}
			className={`${css.Card} ${props.className || ""}`}
		></article>
	);
};

export { Card };
