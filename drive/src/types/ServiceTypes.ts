interface Service {
	title: string;
	description: string;
	remote: boolean;
	inPerson: boolean;
}

interface Group {
	title: string;
	description?: string;
	services: Array<Service>;
}

export type { Service, Group };
