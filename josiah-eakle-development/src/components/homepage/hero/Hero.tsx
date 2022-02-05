import * as React from "react";

import { animated, useSpring } from "react-spring";
import { Section } from "../../section/Section";

import "./Hero.css";

interface HeroProps extends React.HTMLProps<HTMLDivElement> {
	title: string;
	subtitle: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, ...props }) => {
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
		<Section id="Hero" {...props}>
			<animated.h5 style={subtitleProps} id="HeroSubtitle">
				{subtitle}
			</animated.h5>
			<animated.h2 style={titleProps} id="HeroTitle">
				{title}
			</animated.h2>
		</Section>
	);
};

export { Hero };
