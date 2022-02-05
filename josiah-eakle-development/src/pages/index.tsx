import * as React from "react";

import { Homepage } from "../components/homepage/Homepage";

import "../assets/index.css";
import Background from "../components/ui/backgrounds/Background";
import { Header } from "../components/header/Header";

interface IndexProps {}

const Index: React.FC<IndexProps> = ({}) => {
	const background = new Background(0x0a1138, 0xbf5f00, 0x0f1223);
	background.start();

	return (
		<main>
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
		</main>
	);
};

export default Index;
