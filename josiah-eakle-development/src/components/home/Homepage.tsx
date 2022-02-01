// dependencies
import * as React from "react";

// components
import { MainSection } from "./sections/main/MainSection";
import { ServicesSection } from "./sections/services/ServicesSection";
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
					{ title: "home", elemId: "Main" },
					{ title: "project", elemId: "Services" },
					// { title: "OUR RESULTS", elemId: "Results" },
					{ title: "contact", elemId: "Contact" },
				]}
			/>
			<MainSection />
			<ServicesSection />
			<ContactSection />
			<Footer />
		</div>
	);
};

export { Homepage };
