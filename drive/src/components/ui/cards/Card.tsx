import * as React from "react";

import "./Card.css";

interface CardProps extends React.HTMLAttributes<HTMLElement> {}

const Card: React.FC<CardProps> = (props) => {
	return (
		<article {...props} className={`Card ${props.className || ""}`}></article>
	);
};

export { Card };
