import * as React from "react";

import { Homepage } from "../components/homepage/Homepage";

import "../assets/index.css";
import Background from "../components/ui/backgrounds/Background";

interface IndexProps {}

const Index: React.FC<IndexProps> = ({}) => {
	React.useEffect(() => {
		const background = new Background(0x808080, 0xffffff, 0x0d1021);
		background.start();
	}, []);

	return <Homepage />;
};

export default Index;
