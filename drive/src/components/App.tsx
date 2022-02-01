import * as React from "react";

import { WaveBackground } from "./ui/backgrounds/WaveBackground";
import { Header } from "./ui/header/Header";

import DriveLogo from "../media/drive-logo.svg";
import { Homepage } from "./home/Homepage";

interface AppProps {}

const App: React.FC<AppProps> = ({}) => {
	return (
		<div id="App">
			<Homepage />
		</div>
	);
};

export { App };
