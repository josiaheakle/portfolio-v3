import * as React from "react";

interface MailIconProps extends React.SVGAttributes<SVGElement> {}

const MailIcon: React.FC<MailIconProps> = (props) => {
	return (
		<svg
			{...props}
			width="1.8rem"
			viewBox="0 0 67 48"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M4.99997 5.00002C3 7.00002 3.00001 41 4.99998 43M4.99997 5.00002C6.99994 3.00002 26 28 33.5 28C41 28 62 4.99998 62 4.99998M4.99997 5.00002C6.99997 3.00002 60 2.99998 62 4.99998M62 4.99998C64 7.00002 64 41 62 43M62 43C60 45 6.99998 45 4.99998 43M62 43L43.0049 23M4.99998 43C12 36 24.8143 23 24.8143 23"
				stroke-width="6"
			></path>
		</svg>
	);
};

export { MailIcon };
