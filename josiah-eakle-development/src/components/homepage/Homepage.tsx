// dependencies
import * as React from "react";

// components
import { MainSection } from "./main/MainSection";
import { ServicesSection } from "./services/ServicesSection";
import { ContactSection } from "./contact/ContactSection";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { AboutSection } from "./about/AboutSection";

// css
import * as css from "./Homepage.module.css";
import { Hero } from "./hero/Hero";
import { ServicesMenu } from "./services/ServicesMenu";

interface HomepageProps {}

const Homepage: React.FC<HomepageProps> = ({}) => {
	return (
		<main id="Homepage" className={`${css.Homepage}`}>
			<Header
				title="Josiah Eakle"
				subtitle="Subtitle"
				pages={[
					{ title: "hello", elemId: "Hello" },
					{ title: "hello", elemId: "Hello" },
					{ title: "hello", elemId: "Hello" },
					{ title: "hello", elemId: "Hello" },
				]}
			></Header>
			<Hero
				title="I create clean, secure web applications built with modern JavaScript frameworks, with a love for TypeScript and Linux."
				subtitle="Hi, I am Josiah"
			/>
			<AboutSection />
			<ServicesSection />
			<ContactSection />
			<Footer />
		</main>
	);
};

export { Homepage };
