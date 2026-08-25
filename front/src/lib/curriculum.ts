export type CurriculumSection = {
	id: string;
	label: string;
};

export type CurriculumModule = {
	id: string;
	letter: string;
	/** Empty = content not written yet (shown as "coming soon"). */
	sections: CurriculumSection[];
};

export type UnitGroup = {
	id: string;
	units: number;
	moduleIds: string[];
};

const textSection: CurriculumSection = { id: 'text', label: 'טקסט' };
const wordsSection: CurriculumSection = { id: 'words', label: 'מילים' };
const writingSection: CurriculumSection = { id: 'writing', label: 'חיבור' };

export const modules: Record<string, CurriculumModule> = {
	c: { id: 'c', letter: 'C', sections: [textSection, writingSection] },
	e: { id: 'e', letter: 'E', sections: [textSection, wordsSection] },
	g: { id: 'g', letter: 'G', sections: [textSection, writingSection] },
	cobe: { id: 'cobe', letter: 'COBE', sections: [] }
};

export const unitGroups: UnitGroup[] = [
	{ id: '4', units: 4, moduleIds: ['c', 'e', 'cobe'] },
	{ id: '5', units: 5, moduleIds: ['e', 'g', 'cobe'] }
];

export function getUnitGroup(id: string): UnitGroup | undefined {
	return unitGroups.find((group) => group.id === id);
}

export function getModule(id: string): CurriculumModule | undefined {
	return modules[id.toLowerCase()];
}

export const EXAM_MINUTES = 30;
