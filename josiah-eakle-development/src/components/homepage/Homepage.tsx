// dependencies
import * as React from "react";

// components
import { MainSection } from "./main/MainSection";
import { ContactSection } from "./contact/ContactSection";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { AboutSection } from "./about/AboutSection";

// css
import * as css from "./Homepage.module.css";
import { Hero } from "./main/hero/Hero";
import { ServicesMenu } from "./services/ServicesMenu";

interface HomepageProps {}

const Homepage: React.FC<HomepageProps> = ({}) => {
	return (
		<main id="Homepage" className={`${css.Homepage}`}>
			<Header
				title="Josiah Eakle"
				subtitle="Subtitle"
				pages={[
					{ title: "Home", elemId: "Hero" },
					{ title: "About Me", elemId: "About" },
					{ title: "My Projects", elemId: "Projects" },
					{ title: "Contact Me", elemId: "Contact" },
				]}
			></Header>
			<MainSection />
			<AboutSection />
			<ContactSection />
			<Footer />
		</main>
	);
};

export { Homepage };
