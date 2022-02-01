import * as React from "react";
import { Button } from "../../../ui/buttons/Button";

import { Service as ServiceType } from "../../../../types/ServiceTypes";

import { InPersonIcon } from "../../../ui/icons/InPersonIcon";
import { RemoteIcon } from "../../../ui/icons/RemoteIcon";

interface ServiceProps extends ServiceType {}

const Service: React.FC<ServiceProps> = (props) => {
	return (
		<div className="Service">
			<div className="ServiceTitle">
				<h4 className="top">{props.title}</h4>
				<h5 className="bottom">
					{props.inPerson && props.remote
						? "IN PERSON / REMOTE"
						: props.inPerson
						? "IN PERSON"
						: props.remote
						? "REMOTE"
						: null}
				</h5>
			</div>
			<Button>LEARN MORE</Button>
		</div>
	);
};

export { Service };
