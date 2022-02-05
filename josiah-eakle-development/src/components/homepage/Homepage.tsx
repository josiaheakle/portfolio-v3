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
import "./Homepage.css";
import { Hero } from "./hero/Hero";

interface HomepageProps {}

const Homepage: React.FC<HomepageProps> = ({}) => {
	return (
		<div id="Homepage">
			{/* <MainSection activeCard={0} setActiveCard={() => {}}></MainSection> */}
			{/* <Hero title="Hello" subtitle="Hi"></Hero> */}
		</div>
	);
};

export { Homepage };
