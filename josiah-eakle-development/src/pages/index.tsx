import * as React from "react";

import { Homepage } from "../components/home/Homepage";

import "../assets/index.css";

interface IndexProps {}

const Index: React.FC<IndexProps> = ({}) => {
	return (
		<main>
			<Homepage />
		</main>
	);
};

export default Index;
