import * as React from "react";
import { useIsMobile } from "../../../hooks/ReactiveHooks";

// import { WaveBackground } from "../../ui/backgrounds/WaveBackground";
import { Button } from "../../ui/buttons/Button";
// import { LearnMoreButton } from "../../ui/buttons/LearnMoreButton";
import { Hero } from "../hero/Hero";

import { useSpring, animated } from "react-spring";

import "./Main.css";
import { MenuCard } from "../../ui/cards/MenuCard";

interface MainSectionProps {
	activeCard: 0 | 1 | 2 | 3;
	setActiveCard: (card: 0 | 1 | 2 | 3) => void;
}

const MainSection: React.FC<MainSectionProps> = ({
	activeCard,
	setActiveCard,
}) => {
	const [menuClicked, setMenuClicked] = React.useState(false);

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

	const updateActiveCard = (card: 0 | 1 | 2 | 3) => {
		setMenuClicked(true);
		setActiveCard(card);
	};

	React.useEffect(() => {
		console.log({ activeCard });
	}, [activeCard]);

	return (
		<main id="Main" className="Section">
			{activeCard === 0 || isMobile ? (
				<Hero
					title="My name is Josiah and I am a Full Stack Web Developer"
					subtitle="Looking for web solutions?"
				/>
			) : null}

			{isMobile ? null : (
				<div id="MainCards">
					<animated.div
						onClick={() => updateActiveCard(3)}
						style={cardOneProps}
						className={`MainCard three ${activeCard > 0 ? "open" : ""} ${
							activeCard === 3 ? "locked" : ""
						}`}
					>
						Skills
					</animated.div>
					<animated.div
						onClick={() => updateActiveCard(2)}
						style={cardTwoProps}
						className={`MainCard two ${activeCard > 0 ? "open" : ""} ${
							activeCard === 2 ? "locked" : ""
						}`}
					>
						Projects
					</animated.div>
					<animated.div
						onClick={() => updateActiveCard(1)}
						style={cardThreeProps}
						className={`MainCard one ${activeCard > 0 ? "open" : ""} ${
							activeCard === 1 ? "locked" : ""
						}`}
					>
						Contact
					</animated.div>
				</div>
			)}
			<div className="wave-background-container main">
				{/* <WaveBackground activeCard={activeCard} /> */}
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
