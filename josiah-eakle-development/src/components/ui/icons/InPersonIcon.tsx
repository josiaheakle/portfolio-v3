import * as React from "react";

interface InPersonIconProps extends React.SVGAttributes<SVGElement> {}

const InPersonIcon: React.FC<InPersonIconProps> = (props) => {
	return (
		<i title="This can be done on premesis.">
			<svg
				{...props}
				width="1rem"
				height="1.5rem"
				viewBox="0 0 20 64"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g clip-path="url(#clip0_128:2)">
					<ellipse cx="10" cy="9.5" rx="10" ry="9.5" fill="#0072B7" />
					<path
						d="M20 44C20 55.0457 15.5228 64 10 64C4.47715 64 0 55.0457 0 44C0 32.9543 4.47715 24 10 24C15.5228 24 20 32.9543 20 44Z"
						fill="#0072B7"
					/>
				</g>
				<defs>
					<clipPath id="clip0_128:2">
						<rect width="20" height="64" fill="white" />
					</clipPath>
				</defs>
			</svg>
		</i>
	);
};

export { InPersonIcon };
