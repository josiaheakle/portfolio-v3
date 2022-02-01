import React, { useEffect, useRef, useState } from "react";
import { Button } from "../buttons/Button";
import { GreenButton } from "../buttons/GreenButton";

interface NavbarProps {
	links: Array<{
		title: string;
		link?: string; // '/route'
		elemId?: string;
	}>;
	isMobile?: boolean;
	setOpen?: (n: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ links, isMobile, setOpen }) => {
	const [isOpen, setIsOpen] = React.useState(false);

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

	useEffect(() => {
		if (setOpen) setOpen(isOpen);
	}, [isOpen]);

	return (
		<>
			{isMobile ? (
				<div>
					<ul className={`navbar ${isOpen ? "open" : "hidden"}`}>
						{links.map((link, index) => (
							<li className="mobile-nav-link" key={index}>
								<a
									onClick={handleClick}
									key={index}
									href={link.link ? link.link : `#${link.elemId}`}
								>
									{link.title}
								</a>
							</li>
						))}
						<GreenButton>SCHEDULE A CONSULTATION</GreenButton>
					</ul>
					<div
						onClick={() => {
							setIsOpen(false);
						}}
						className={`NavbarOpenContainer ${!isOpen ? "hidden" : ""}`}
					></div>
					<div
						onClick={() => {
							setIsOpen(!isOpen);
						}}
						className={`mobile-navbar-icon ${isOpen ? "open" : ""}`}
					>
						<div className="top"></div>
						<div className="middle"></div>
						<div className="bottom"></div>
					</div>
				</div>
			) : (
				<ul className={`navbar`}>
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
			)}
		</>
	);
};
