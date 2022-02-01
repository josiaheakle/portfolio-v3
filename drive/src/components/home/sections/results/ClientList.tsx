import * as React from "react";
import { useIsMobile, useWindowSize } from "../../../../hooks/ReactiveHooks";

import { Client as ClientType } from "./Client.type";

import Marquee from "react-fast-marquee";

interface ClientListProps {
	clients: Array<ClientType>;
}

/**
 * Row of logos constantly moving to the left
 * when logo is offscreen unload it, and load next in line
 */
const ClientList: React.FC<ClientListProps> = ({ clients }) => {
	return (
		<div id="ClientList">
			<Marquee className="client-marquee" gradient={false}>
				{clients.map((client, i) => (
					<img
						className="client-logo"
						key={i}
						src={client.logo.src}
						alt={client.logo.alt}
					/>
				))}
			</Marquee>
		</div>
	);
};

export { ClientList };
