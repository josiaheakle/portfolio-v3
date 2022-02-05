import * as React from "react";

import * as css from "./Button.module.css";

interface ButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = (props) => {
	return (
		<button
			className={`${css.Button} ${props.className ? props.className : ""}`}
			{...props}
		></button>
	);
};

export { Button };
