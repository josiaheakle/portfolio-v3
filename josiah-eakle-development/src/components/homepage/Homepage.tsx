// dependencies
import * as React from "react";

// components
import { MainSection } from "./main/MainSection";
import { ServicesSection } from "./services/ServicesSection";
import { ContactSection } from "./contact/ContactSection";

// css
import "./Homepage.css";
import { Footer } from "../ui/footer/Footer";
import { Header } from "../ui/header/Header";
import { AboutSection } from "./about/AboutSection";
import { useIsMobile } from "../../hooks/ReactiveHooks";

interface HomepageProps {}

const Homepage: React.FC<HomepageProps> = ({}) => {
	const [activeCard, setActiveCard] = React.useState<0 | 1 | 2 | 3>(0);
	const isMobile = useIsMobile();

	React.useEffect(() => {
		if (isMobile) setActiveCard(0);
	}, [isMobile]);

	return (
		<div id="Homepage">
			{isMobile ? (
				<>
					<Header
						pages={[
							{ title: "Home", elemId: "Main" },
							{ title: "Skills", elemId: "About" },
							{ title: "My Projects", elemId: "Services" },
							{ title: "Contact Me", elemId: "Contact" },
						]}
					/>
					<MainSection activeCard={activeCard} setActiveCard={setActiveCard} />
					<AboutSection />
					<ServicesSection />
					<ContactSection />
					<Footer />
				</>
			) : (
				<>
					<MainSection activeCard={activeCard} setActiveCard={setActiveCard} />
					{activeCard === 1 ? <AboutSection /> : null}
					{activeCard === 2 ? <ServicesSection /> : null}
					{activeCard === 3 ? <ContactSection /> : null}
					<Footer />
				</>
			)}
		</div>
	);
};

export { Homepage };
