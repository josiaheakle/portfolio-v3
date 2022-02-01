import * as React from "react";

import "./Button.css";

interface ButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = (props) => {
	return (
		<button
			className={`Button ${props.className ? props.className : ""}`}
			{...props}
		></button>
	);
};

export { Button };
