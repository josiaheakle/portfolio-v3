import * as React from "react";
import { Button } from "../../ui/buttons/Button";

import { Project as ServiceType } from "../../types/Project.type";

import { InPersonIcon } from "../../ui/icons/InPersonIcon";
import { RemoteIcon } from "../../ui/icons/RemoteIcon";

interface ServiceProps extends ServiceType {}

const Service: React.FC<ServiceProps> = (props) => {
	return (
		<div className="Service">
			<div className="ServiceTitle">
				<h4 className="top">{props.title}</h4>
				<h5 className="bottom">
					{props.inPerson && props.remote
						? "Onsite / Remote"
						: props.inPerson
						? "Onsite"
						: props.remote
						? "Remote"
						: null}
				</h5>
			</div>
			<Button>Learn More</Button>
		</div>
	);
};

export { Service };
