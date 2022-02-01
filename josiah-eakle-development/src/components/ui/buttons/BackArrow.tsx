import * as React from "react";

interface BackArrowProps extends React.SVGAttributes<SVGElement> {}

const BackArrow: React.FC<BackArrowProps> = ({ className, ...props }) => {
	return (
		<svg
			className={`BackArrow ${className || ""}`}
			width="20"
			height="42"
			viewBox="0 0 20 42"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path d="M20 7.5V0C20 0 0 18.5 0 21C0 23.5 20 42 20 42V34.5L6.5 21L20 7.5Z" />
		</svg>
	);
};

export { BackArrow };
