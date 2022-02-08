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
			className={`${css.Header}  ${isMobile ? css.mobile : ""} ${
				isMobileHidden || hidden ? css.hidden : ""
			} ${!isSmall ? css.large : ""} ${isOpen ? "mobile-open" : ""}`}
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
							isSmall && !isMobile ? "small" : ""
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
