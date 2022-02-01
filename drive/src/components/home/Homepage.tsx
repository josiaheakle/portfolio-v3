// dependencies
import * as React from "react";

// components
import { MainSection } from "./sections/main/MainSection";
import { ServicesSection } from "./sections/services/ServicesSection";
import { ResultsSection } from "./sections/results/ResultsSection";
import { ContactSection } from "./sections/contact/ContactSection";

// css
import "./Homepage.css";
import { Footer } from "../ui/footer/Footer";
import { Header } from "../ui/header/Header";

interface HomepageProps {}

const Homepage: React.FC<HomepageProps> = ({}) => {
	return (
		<div id="Homepage">
			<Header
				pages={[
					{ title: "HOME", elemId: "Main" },
					{ title: "SERVICES", elemId: "Services" },
					{ title: "OUR RESULTS", elemId: "Results" },
					{ title: "CONTACT US", elemId: "Contact" },
				]}
			/>
			<MainSection />
			<ServicesSection />
			<ResultsSection />
			<ContactSection />
			<Footer />
		</div>
	);
};

export { Homepage };
