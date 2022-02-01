import { posix, relative } from "path";
import * as React from "react";
import { ServicesMenu } from "./ServicesMenu";

import { useIsMobile } from "../../../../hooks/ReactiveHooks";
import { WaveBackgroundBot1 } from "../../../ui/backgrounds/WaveBackgroundBot1";

interface ServicesSectionProps {}

const ServicesSection: React.FC<ServicesSectionProps> = ({}) => {
	const isMobile = useIsMobile();
	return (
		<section className="Section" id="Services">
			{!isMobile ? (
				<h2 className="heading">OUR SERVICES</h2>
			) : (
				<h2 className="heading-bottom" />
			)}
			<div id="ServicesMenuContainer">
				<ServicesMenu
					groups={[
						{
							title: "start up",
							services: [
								{
									title: "Buisness Plans",
									description: "Lorem ipsum",
									inPerson: true,
									remote: true,
								},
								{
									title: "Product Development",
									description: "we help develop a product with you",
									inPerson: true,
									remote: true,
								},
							],
						},
						{
							title: "training",
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
							title: "MDI",
							services: [
								{
									title: "Managing Daily Improvement",
									description: "dddd asdfasdf",
									inPerson: false,
									remote: true,
								},
							],
						},
						{
							title: "Plant Layouts",
							services: [
								{
									title: "Plant Layout Restructuring",
									description: "Establish Most Effective Plant Layout",
									inPerson: true,
									remote: true,
								},
							],
						},
					]}
				/>
			</div>
			<WaveBackgroundBot1 />
		</section>
	);
};

export { ServicesSection };
