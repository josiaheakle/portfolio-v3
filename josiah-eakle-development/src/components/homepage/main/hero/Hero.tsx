import * as React from "react";

import { animated, useSpring } from "react-spring";
import { useOpacityAnim } from "../../../../hooks/AnimHooks";
import { Section } from "../../../ui/section/Section";

import * as css from "./Hero.module.css";

interface HeroProps extends React.HTMLProps<HTMLDivElement> {
	title: string;
	subtitle: string;
}

const Hero: React.FC<HeroProps> = ({
	title,
	subtitle,
	className,
	...props
}) => {
	const subtitleProps = useOpacityAnim(250);
	const titleProps = useOpacityAnim(1250);

	return (
		<Section
			id="Hero"
			className={`${css.Hero} ${className ? className : ""}`}
			{...props}
		>
			<div>
				<animated.span
					className={`${css.Subtitle}`}
					style={subtitleProps}
					id="HeroSubtitle"
				>
					{subtitle}
				</animated.span>
				<animated.h1
					className={`${css.Title}`}
					style={titleProps}
					id="HeroTitle"
				>
					{title}
				</animated.h1>
			</div>
		</Section>
	);
};

export { Hero };
