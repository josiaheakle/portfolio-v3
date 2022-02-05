import * as React from "react";
import * as css from "./Hamburger.module.css";

interface HamburgerProps {
	onOpenUpdate: (isOpen: boolean) => void;
}

const Hamburger: React.FC<HamburgerProps> = ({ onOpenUpdate }) => {
	const [isOpen, setIsOpen] = React.useState(false);
	React.useEffect(() => {
		onOpenUpdate(isOpen);
	}, [isOpen]);
	return (
		<>
			<div
				onClick={() => {
					setIsOpen(!isOpen);
				}}
				className={`${css.Hamburger} ${isOpen ? css.open : ""}`}
			>
				<div className={`${css.top} ${isOpen ? css.open : ""}`}></div>
				<div className={`${css.middle} ${isOpen ? css.open : ""}`}></div>
				<div className={`${css.bottom} ${isOpen ? css.open : ""}`}></div>
			</div>
			{isOpen ? <div className={`${css.OpenContainer}`}></div> : null}
		</>
	);
};

export { Hamburger };
