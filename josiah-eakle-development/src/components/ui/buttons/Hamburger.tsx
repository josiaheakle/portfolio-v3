import * as React from "react";
import * as css from "./Hamburger.module.css";

interface HamburgerProps extends React.HTMLProps<HTMLDivElement> {
	open?: boolean;
}

const Hamburger: React.FC<HamburgerProps> = ({ open, ...props }) => {
	// const [isOpen, setIsOpen] = React.useState(open)

	return (
		<>
			<div
				{...props}
				className={`${css.Hamburger} ${open ? css.open : ""} ${
					props.className ? props.className : ""
				}`}
			>
				<div className={`${css.top} ${open ? css.open : ""}`}></div>
				<div className={`${css.middle} ${open ? css.open : ""}`}></div>
				<div className={`${css.bottom} ${open ? css.open : ""}`}></div>
			</div>
			{open ? <div className={`${css.OpenContainer}`}></div> : null}
		</>
	);
};

export { Hamburger };
