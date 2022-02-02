import * as React from "react";
import { WaveBackgroundBot1 } from "../../ui/backgrounds/WaveBackgroundBot1";

import * as css from "./AboutSection.module.css";

interface AboutSectionProps {}

const AboutSection: React.FC<AboutSectionProps> = ({}) => {
	return (
		<section id="About" className={`Section ${css.About}`}>
			<h2>About Me</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
				dignissimos, doloribus libero recusandae illo voluptates tenetur non
				voluptatem iusto, deserunt voluptate dolor accusamus mollitia.
				Assumenda, ea eaque. At, quia corporis.
			</p>
			<WaveBackgroundBot1 />
		</section>
	);
};

export { AboutSection };
