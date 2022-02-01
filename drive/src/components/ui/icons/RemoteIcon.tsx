import * as React from "react";

interface RemoteIconProps extends React.SVGAttributes<SVGElement> {}

const RemoteIcon: React.FC<RemoteIconProps> = (props) => {
	return (
		<svg
			{...props}
			viewBox="0 0 57 57"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M25 18.5C25 16.5 18.5 3.5 16.5 3.5C14.5 3.5 3.5 16.5 3.5 18.5C4 26.5 30.5 54 38.5 54C42 54 53.5 42.5 53.5 40.5C53.5 38.5 40.5 32.5 38.5 32.5C36.5 32.5 35 37 34 37.5C33 38 19.5 24 19.5 23C19.5 22 25 20.5 25 18.5Z"
				// stroke="#0072B7"
				strokeWidth="6"
			/>
		</svg>
	);
};

export { RemoteIcon };
