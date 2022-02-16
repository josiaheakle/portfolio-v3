// dependencies
import React from "react";
import { animated, useSpring } from "react-spring";

// components
import { Navbar } from "./Navbar";

// hooks
import { useIsMobile } from "../../hooks/ReactiveHooks";
import { useScrollYPosition } from "react-use-scroll-position";

// assets
import LogoIcon from "../../assets/icon.png";
import * as css from "./Header.module.css";
import { useOpacityAnim } from "../../hooks/AnimHooks";

// types
interface HeaderProps {
	hidden?: boolean;
	title?: string;
	subtitle?: string;
	pages?: Array<{
		title: string;
		link?: string;
		elemId?: string;
	}>;
}

export const Header: React.FC<HeaderProps> = ({
	title,
	subtitle,
	pages,
	hidden,
}) => {
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

	const headerAnim = useOpacityAnim(2500, true);

	return (
		<animated.header
			style={headerAnim}
			className={`${css.Header}  ${isMobile ? css.mobile : ""} ${
				isMobileHidden || hidden ? css.hidden : ""
			} ${!isSmall ? css.large : ""}`}
		>
			<a className={`${css.HeaderContainer}`} href="/">
				<img
					className={`${css.HeaderLogo}`}
					src={LogoIcon}
					alt="Josiah Eakle Development"
				/>
				<span className={`${css.HeaderTextContainer}`}>
					<span className={`${css.HeadingTop}`}>{title}</span>
					<span
						className={`${css.HeadingBottom} ${
							isSmall && !isMobile ? css.small : ""
						}`}
					>
						{subtitle}
					</span>
				</span>
			</a>
			{pages ? (
				<Navbar
					setOpen={(open) => {
						setIsOpen(open);
					}}
					links={pages}
				/>
			) : null}
		</animated.header>
	);
};
