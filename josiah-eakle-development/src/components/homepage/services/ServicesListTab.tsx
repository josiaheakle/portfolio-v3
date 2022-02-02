import * as React from "react";

import "./Services.css";
import { Group } from "./ServicesMenu";

interface ServicesListTabProps
	extends React.HtmlHTMLAttributes<HTMLButtonElement> {
	group: Group;
	isActive: boolean;
	onClick: () => void;
}

const ServicesListTab: React.FC<ServicesListTabProps> = ({
	isActive,
	group,
	...props
}) => {
	return (
		<button
			className={`ServiceTab ribbon ${isActive ? "selected" : ""}`}
			{...props}
		></button>
	);
};

export { ServicesListTab };
