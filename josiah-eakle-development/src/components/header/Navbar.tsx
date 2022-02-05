import * as React from "react";
import { useIsMobile } from "../../hooks/ReactiveHooks";

import { Button } from "../ui/buttons/Button";
import { Hamburger } from "../ui/buttons/Hamburger";

import * as css from "./Navbar.module.css";

interface NavbarProps {
	links: Array<{
		title: string;
		link?: string; // '/route'
		elemId?: string;
	}>;
	setOpen?: (n: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ links, setOpen }) => {
	const [isOpen, setIsOpen] = React.useState(false);
	const isMobile = useIsMobile();

	const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();

		setIsOpen(false);

		//@ts-ignore
		const href: string = e.target.href;
		const elemId: string | false = href.includes("#")
			? href.split("#")[1]
			: false;
		if (elemId) {
			document.getElementById(elemId)?.scrollIntoView({ behavior: "smooth" });
		}
	};

	React.useEffect(() => {
		if (setOpen) setOpen(isOpen);
	}, [isOpen]);

	return isMobile ? (
		<nav>
			<ul className={`${css.Navbar} ${isOpen ? "open" : "hidden"}`}>
				{links.map((link, index) => (
					<li className={`${css.MobileNavLink}`} key={index}>
						<a
							onClick={handleClick}
							key={index}
							href={link.link ? link.link : `#${link.elemId}`}
						>
							{link.title}
						</a>
					</li>
				))}
				<Button>Call Me</Button>
			</ul>
			<Hamburger
				onOpenUpdate={(open) => {
					setIsOpen(open);
				}}
			/>
		</nav>
	) : (
		<nav>
			<ul className={`${css.Navbar}`}>
				{links.map((link, index) => (
					<li key={index}>
						<a
							onClick={handleClick}
							key={index}
							href={link.link ? link.link : `#${link.elemId}`}
						>
							{link.title}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};
