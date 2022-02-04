import * as React from "react";

interface MenuItemProps extends React.HTMLProps<HTMLDivElement> {
	index: number;
	totalItems: number;
	title: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
	index,
	totalItems,
	title,
	...props
}) => {
	return <section></section>;
};

export { MenuItem };
