import * as React from "react";
import * as css from "./Section.module.css";

interface SectionProps extends React.HTMLProps<HTMLDivElement> {}

const Section: React.FC<SectionProps> = ({ className, ...props }) => {
	return (
		<section
			{...props}
			className={`${css.Section} ${className ? className : ""}`}
		>
			{props.children}
		</section>
	);
};

export { Section };
