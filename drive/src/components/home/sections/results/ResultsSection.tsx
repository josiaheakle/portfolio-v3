import * as React from "react";
import { animated, useSpring } from "react-spring";
import VisibilitySensor from "react-visibility-sensor";

import { WaveBackgroundBot2 } from "../../../ui/backgrounds/WaveBackgroundBot2";
import { Client } from "./Client.type";
import { ClientList } from "./ClientList";

import AirTractorLogo from "../../../../media/air-tractor-logo.png";
import BaeSystemsLogo from "../../../../media/bae-systems-logo.png";
import BoschLogo from "../../../../media/bosch-logo.png";
import BussmanLogo from "../../../../media/bussman-logo.png";
import CumminsLogo from "../../../../media/cummins-logo.png";
import LittleDebbieLogo from "../../../../media/little-debbie-logo.png";
import SelectComfortLogo from "../../../../media/select-comfort-logo.png";
import TraneLogo from "../../../../media/trane-logo.png";

import "./Results.css";
import { ResultsCard } from "./ResultsCard";
import { Result } from "./Result.type";

interface ResultsSectionProps {}

const results: Array<Result> = [
	{
		description:
			"In our 18+ years of independent manufacturing excellence	transformations, we maintain a stellar track record of value (2880% avg initial ROI) focused on the people, processes, and products.",
	},
	{
		description:
			"This is a hands-on, intense focus utilizing TPS principles, concepts and practices to sustainably grow organizations in our quest to regain US manufacturing superiority.",
	},
	{
		description:
			"We’ve had success where others haven’t. Survey data validates that only 5% of all “lean programs” can boast sustained success",
	},
];

const clients: Array<Client> = [
	{ title: "Air Tractor", logo: { src: AirTractorLogo, alt: "Air Tractor" } },
	{ title: "BAE Systems", logo: { src: BaeSystemsLogo, alt: "BAE Systems" } },
	{
		title: "Little Debbie",
		logo: { src: LittleDebbieLogo, alt: "Little Debbie" },
	},
	{ title: "Bussman", logo: { src: BussmanLogo, alt: "Bussman" } },
	{
		title: "Select Comfort",
		logo: { src: SelectComfortLogo, alt: "Select Comfort" },
	},
	{ title: "Cummins", logo: { src: CumminsLogo, alt: "Cummins" } },
	{ title: "Bosch", logo: { src: BoschLogo, alt: "Bosch" } },
	{ title: "Trane", logo: { src: TraneLogo, alt: "Trane" } },
];

const ResultsSection: React.FC<ResultsSectionProps> = () => {
	return (
		<section id="Results" className="Section">
			<h3 className={`ResultsHeading`}>
				With worldwide results, we are the proven solution to guide you to your
				buisness goals.
			</h3>
			<ResultsCard results={results} />
			<ClientList clients={clients} />
			<WaveBackgroundBot2 />
		</section>
	);
};

export { ResultsSection };
