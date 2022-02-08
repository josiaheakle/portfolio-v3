import * as React from "react";

import { Homepage } from "../components/homepage/Homepage";

import "../assets/index.css";
import Background from "../components/ui/backgrounds/Background";
import { Header } from "../components/header/Header";
import { AboutSection } from "../components/homepage/about/AboutSection";
import { ServicesMenu } from "../components/homepage/services/ServicesMenu";

interface IndexProps {}

const Index: React.FC<IndexProps> = ({}) => {
	const background = new Background(0x808080, 0xffffff, 0x0d1021);
	background.start();

	return <Homepage />;
};

export default Index;
