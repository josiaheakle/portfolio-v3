import * as React from "react";

import { Homepage } from "../components/homepage/Homepage";

import "../assets/index.css";

interface IndexProps {}

const Index: React.FC<IndexProps> = ({}) => {
	return (
		<main>
			<canvas id="AnimatedBackground"></canvas>
			<Homepage />
		</main>
	);
};

export default Index;
