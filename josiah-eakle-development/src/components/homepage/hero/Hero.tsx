import * as React from "react";

import { animated, useSpring } from "react-spring";
import { Section } from "../../section/Section";

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
	const subtitleProps = useSpring({
		to: { opacity: 1 },
		from: { opacity: 0 },
		delay: 250,
	});

	const titleProps = useSpring({
		to: { opacity: 1 },
		from: { opacity: 0 },
		delay: 1000,
		config: { duration: 500 },
	});

	return (
		<Section
			id="Hero"
			className={`${css.Hero} ${className ? className : ""}`}
			{...props}
		>
			<div className={`${css.HeroBg}`}>
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
