// Drive Header

// dependencies
import React, { useState } from "react";

// components
import { Navbar } from "./Navbar";
import { DriveLogo } from "../icons/DriveLogo";

// hooks
import { useIsMobile } from "../../../hooks/ReactiveHooks";
import { useScrollYPosition } from "react-use-scroll-position";

// css
import "./Header.css";
import { animated, useSpring } from "react-spring";

// types
interface HeaderProps {
	hidden?: boolean;
	title?: string;
	subtitle?: string;
	icon?: {
		src: string;
		alt: string;
	};
	pages?: Array<{
		title: string;
		link?: string;
		elemId?: string;
	}>;
}

export const Header: React.FC<HeaderProps> = ({ pages, hidden }) => {
	const [isSmall, setIsSmall] = React.useState(false);
	const [isOpen, setIsOpen] = React.useState(false);
	const [isMobileHidden, setIsMobileHidden] = React.useState(false);
	const [lastScroll, setLastScroll] = React.useState<number>(0);
	const isMobile = useIsMobile();

	const scrollY = useScrollYPosition();

	const checkScroll = () => {
		if (scrollY > lastScroll) {
			if (!isOpen) setIsMobileHidden(true);
		} else {
			setIsMobileHidden(false);
		}
		if (scrollY > 100) {
			if (!isOpen) setIsSmall(true);
		} else setIsSmall(false);
	};

	React.useEffect(() => {
		checkScroll();
		setLastScroll(scrollY);
	}, [scrollY]);

	const headerAnimMobile = useSpring({
		to: { opacity: 1 },
		from: { opacity: 0 },
		delay: 1800,
		config: { duration: 500 },
	});

	const headerAnim = useSpring({
		to: { opacity: 1 },
		from: { opacity: 0 },
		delay: 3300,
		config: { duration: 500 },
	});

	return (
		<animated.header
			style={isMobile ? headerAnimMobile : headerAnim}
			className={`Header  ${isMobile ? "mobile" : ""} ${
				isMobileHidden || hidden ? "hidden" : ""
			} ${!isSmall ? "large" : ""} ${isOpen ? "mobile-open" : ""}`}
		>
			<a className="header-container" href="/">
				<DriveLogo />
				<span className="header-text-container">
					<h3 className="main-header">DRIVE VENTURES</h3>
					<h5
						className={`secondary-header ${
							isSmall && !isMobile ? "small" : ""
						}`}
					>
						the <strong>TRANSFORMATION</strong> company
					</h5>
				</span>
			</a>
			{pages ? (
				<nav>
					<Navbar
						setOpen={(open) => {
							setIsOpen(open);
						}}
						isMobile={isMobile}
						links={pages}
					/>
				</nav>
			) : null}
		</animated.header>
	);
};
