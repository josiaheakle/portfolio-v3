import * as React from "react";
import { Project as ServiceType } from "../../../types/Project.type";
import { Service } from "./Service";

interface ServicesListProps {
	services: Array<ServiceType>;
	serviceTitle?: string;
}

const ServicesList: React.FC<ServicesListProps> = ({
	services,
	serviceTitle,
}) => {
	return (
		<ul className="ServicesList">
			{serviceTitle ? (
				<h4 className="center-text heading-bottom blue-text">{serviceTitle}</h4>
			) : null}
			{services.map((service, i) => (
				<Service key={i} {...service} />
			))}
		</ul>
	);
};

export { ServicesList };
