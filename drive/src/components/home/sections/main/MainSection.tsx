import * as React from "react";
import { useIsMobile } from "../../../../hooks/ReactiveHooks";

import { WaveBackground } from "../../../ui/backgrounds/WaveBackground";
import { Button } from "../../../ui/buttons/Button";
import { LearnMoreButton } from "../../../ui/buttons/LearnMoreButton";
import { Hero } from "./hero/Hero";

import { useSpring, animated } from "react-spring";

import "./Main.css";

interface MainSectionProps {}

const MainSection: React.FC<MainSectionProps> = ({}) => {
	const isMobile = useIsMobile();

	const cardOneProps = useSpring({
		to: { opacity: 1 },
		from: { opacity: 0 },
		delay: 1800,
		config: { duration: 500 },
	});

	const cardTwoProps = useSpring({
		to: { opacity: 1 },
		from: { opacity: 0 },
		delay: 2300,
		config: { duration: 500 },
	});

	const cardThreeProps = useSpring({
		to: { opacity: 1 },
		from: { opacity: 0 },
		delay: 2800,
		config: { duration: 500 },
	});

	return (
		<main id="Main" className="Section">
			<Hero
				title="OUR TEAM OF EXPERTS ARE EXCITED TO DRIVE YOU TO YOUR BUISNESS GOALS"
				subtitle="NEED DIRECTION?"
			/>

			{isMobile ? null : (
				<div id="MainCards">
					<animated.div style={cardOneProps} className="MainCard one">
						Start Ups
					</animated.div>
					<animated.div style={cardTwoProps} className="MainCard two">
						Manufacturing
					</animated.div>
					<animated.div style={cardThreeProps} className="MainCard three">
						Training & Hiring
					</animated.div>
				</div>
			)}
			<animated.div
				id="learn-more-button-container"
				className={isMobile ? "mobile" : ""}
			>
				<LearnMoreButton scrollTo="Services" />
			</animated.div>
			<div className="wave-background-container main">
				<WaveBackground />
			</div>
		</main>
	);
};

export { MainSection };

/**
 * 
 * 			 <Card className={isMobile ? "margin-top" : ""}>
				<h1 className="heading-top blue-text">DRIVE VENTURES</h1>
				<h5 className="heading-bottom green-text">
					the TRANSFORMATION company
				</h5>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus a
					saepe nostrum porro commodi nobis iusto qui est? Cum error magnam
					corrupti tempore ex? Blanditiis repudiandae ipsam nobis tenetur
					temporibus!
				</p>
				<div id="main-card-button-container">
					<Button>SCHEDULE A CONSULTATION</Button>
				</div>
			</Card> 
 * 
 * 
 */
