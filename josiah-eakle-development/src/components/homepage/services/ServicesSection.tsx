import { posix, relative } from "path";
import * as React from "react";
import { ServicesMenu } from "./ServicesMenu";

import { useIsMobile } from "../../../hooks/ReactiveHooks";
import { WaveBackgroundBot1 } from "../../ui/backgrounds/WaveBackgroundBot1";
import { WaveBackgroundBot2 } from "../../ui/backgrounds/WaveBackgroundBot2";

interface ServicesSectionProps {}

const ServicesSection: React.FC<ServicesSectionProps> = ({}) => {
	const isMobile = useIsMobile();
	return (
		<section className="Section" id="Services">
			<div id="ServicesMenuContainer">
				<ServicesMenu
					groups={[
						{
							title: "React",
							services: [
								{
									title: "",
									description: "Lorem ipsum",
									inPerson: true,
									remote: true,
								},
							],
						},
						{
							title: "WordPress",
							services: [
								{
									title: "Creating Continuous Flow",
									description: "a continuous workflow",
									inPerson: true,
									remote: false,
								},
								{
									title: "Problem Solving",
									description: "solving problems",
									inPerson: false,
									remote: true,
								},
								{
									title: "Single Minute exchange of Die",
									description: "we help develop a better exchange with you",
									inPerson: false,
									remote: true,
								},
								{
									title: "Management Alignment",
									description: "we help develop a better exchange with you",
									inPerson: false,
									remote: true,
								},
								{
									title: "Value Stream Mapping",
									description: "we help develop a better exchange with you",
									inPerson: false,
									remote: true,
								},
								{
									title: "Value Stream Mapping",
									description: "we help develop a better exchange with you",
									inPerson: false,
									remote: true,
								},
								{
									title: "Value Stream Mapping",
									description: "we help develop a better exchange with you",
									inPerson: false,
									remote: true,
								},
								{
									title: "Value Stream Mapping",
									description: "we help develop a better exchange with you",
									inPerson: false,
									remote: true,
								},
							],
						},
						{
							title: "JamStack",
							services: [
								{
									title: "Eden Prairie Remodelers",
									description:
										"A digital storefront for home remodelers in Eden Prairie, MN.",
									inPerson: false,
									remote: true,
								},
								{
									title: "Hendersonville Home Remodel",
									description:
										"A digital storefront for home remodelers in Hendersonville, TN.",
									inPerson: false,
									remote: true,
								},
								{
									title: "Managing Daily Improvement",
									description: "dddd asdfasdf",
									inPerson: false,
									remote: true,
								},
							],
						},
					]}
				/>
			</div>
			<WaveBackgroundBot2 />
		</section>
	);
};

export { ServicesSection };
