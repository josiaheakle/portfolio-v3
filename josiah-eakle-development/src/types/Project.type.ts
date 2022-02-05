interface Project {
	title: string;
	description: string;
	inPerson: boolean;
	remote: boolean;
}

interface Group {
	title: string;
	description?: string;
	services: Array<Project>;
}

export type { Project, Group };
