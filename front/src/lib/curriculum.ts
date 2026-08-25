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

const partReception: CurriculumSection = { id: 'part-1', label: 'PART I: WRITTEN RECEPTION' };
const partProduction: CurriculumSection = { id: 'part-2', label: 'PART II: WRITTEN PRODUCTION' };
const partLexical: CurriculumSection = { id: 'part-2', label: 'PART II: LEXICAL KNOWLEDGE' };

export const modules: Record<string, CurriculumModule> = {
	a: { id: 'a', letter: 'A', sections: [] },
	b: { id: 'b', letter: 'B', sections: [{ id: 'main', label: 'WRITTEN RECEPTION' }] },
	c: { id: 'c', letter: 'C', sections: [partReception, partProduction] },
	d: { id: 'd', letter: 'D', sections: [partReception, partProduction] },
	e: { id: 'e', letter: 'E', sections: [partReception, partLexical] },
	f: { id: 'f', letter: 'F', sections: [partReception, partProduction] },
	g: { id: 'g', letter: 'G', sections: [partReception, partProduction] }
};

export const unitGroups: UnitGroup[] = [
	{ id: '3', units: 3, moduleIds: ['a', 'b', 'c'] },
	{ id: '4', units: 4, moduleIds: ['c', 'd', 'e'] },
	{ id: '5', units: 5, moduleIds: ['e', 'f', 'g'] }
];

export function getUnitGroup(id: string): UnitGroup | undefined {
	return unitGroups.find((group) => group.id === id);
}

export function getModule(id: string): CurriculumModule | undefined {
	return modules[id.toLowerCase()];
}

export function getSection(
	mod: CurriculumModule,
	sectionId: string
): CurriculumSection | undefined {
	return mod.sections.find((section) => section.id === sectionId);
}

export const EXAM_MINUTES = 30;
