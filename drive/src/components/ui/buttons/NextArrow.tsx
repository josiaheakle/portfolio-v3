import * as React from "react";
import { DownArrow } from "../icons/DownArrow";
import "./NextArrow.css";

interface NextArrowProps extends React.SVGAttributes<SVGElement> {}

const NextArrow: React.FC<NextArrowProps> = ({ className, ...props }) => {
	return (
		<svg
			className={`NextArrow ${className || ""}`}
			width="20"
			height="42"
			viewBox="0 0 20 42"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path d="M0 7.5L0 0C0 0 20 18.5 20 21C20 23.5 0 42 0 42L0 34.5L13.5 21L0 7.5Z" />
		</svg>
	);
};

export { NextArrow };
