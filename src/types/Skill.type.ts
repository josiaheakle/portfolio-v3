interface Skill {
	title: string;
	tech?: Array<string>;
}

interface Group {
	title: string;
	description: Array<string>;
	skills?: Array<string>;
}

export type { Skill, Group };
