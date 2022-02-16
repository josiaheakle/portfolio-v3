interface Project {
	title: string;
	description: string;
	myRole: Array<string>;
	link: string;
	ghLink?: string;
	titleLogo?: string; // this will replace an icon and title
	icon?: string; // this will render with the title
	isDsf?: boolean; // is a digital storefront website (will change font face)
	techStack?: Array<string>; // array of dependent tech
	isSmall?: boolean; // is a smaller project (will render smaller)
}

export type { Project };
