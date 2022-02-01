import * as React from "react";

import "./Button.css";

interface GreenButtonProps
	extends React.HtmlHTMLAttributes<HTMLButtonElement> {}

const GreenButton: React.FC<GreenButtonProps> = (props) => {
	return (
		<button
			className={`Button green ${props.className ? props.className : ""}`}
			{...props}
		></button>
	);
};

export { GreenButton };
