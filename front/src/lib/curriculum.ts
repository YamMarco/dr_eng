import { i18n } from '$lib/i18n/index.svelte';

export type CurriculumSection = {
	id: string;
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

const textSection: CurriculumSection = { id: 'text' };
const wordsSection: CurriculumSection = { id: 'words' };
const writingSection: CurriculumSection = { id: 'writing' };

export const modules: Record<string, CurriculumModule> = {
	c: { id: 'c', letter: 'C', sections: [textSection, writingSection] },
	d: { id: 'd', letter: 'D', sections: [textSection, writingSection] },
	e: { id: 'e', letter: 'E', sections: [textSection, wordsSection] },
	f: { id: 'f', letter: 'F', sections: [textSection, writingSection] },
	g: { id: 'g', letter: 'G', sections: [textSection, writingSection] },
	cobe: { id: 'cobe', letter: 'COBE', sections: [] }
};

export const unitGroups: UnitGroup[] = [
	{ id: '4', units: 4, moduleIds: ['c', 'd', 'e', 'cobe'] },
	{ id: '5', units: 5, moduleIds: ['e', 'f', 'g', 'cobe'] }
];

const literatureModules = new Set(['d', 'f']);

/** "מודול C", "מודול D - ספרות"; COBE is the oral exam, not a lettered module. */
export function moduleName(
	mod: CurriculumModule,
	unit: { modulePrefix: string; cobeName: string }
): string {
	if (mod.id === 'cobe') return unit.cobeName;
	const name = `${unit.modulePrefix} ${mod.letter}`;
	return literatureModules.has(mod.id) ? `${name} - ${i18n.dict.home.skills.literature}` : name;
}

export function getUnitGroup(id: string): UnitGroup | undefined {
	return unitGroups.find((group) => group.id === id);
}

export function getModule(id: string): CurriculumModule | undefined {
	return modules[id.toLowerCase()];
}
