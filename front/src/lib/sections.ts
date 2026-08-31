// A "section" is a themed group of lessons within a module — it's the zone
// banner on the continuous path (see routes/.../lessons/+page.svelte). The
// actual clickable path nodes are "lessons" (lib/sectionContent.ts).
// Cascade: unit → module → section → lesson → screen.

export type Section = {
	id: number;
	titleEn: string | null;
	titleHe: string;
};

// The real module C roster — kept for later, not currently served (see
// getSections below). Do not delete: this is the actual curriculum plan.
export const archivedModuleCSections: Section[] = [
	{ id: 1, titleEn: 'My School Day', titleHe: 'יום הלימודים שלי' },
	{ id: 2, titleEn: 'People Around Me', titleHe: 'האנשים סביבי' },
	{ id: 3, titleEn: 'Time & My Home', titleHe: 'זמן והבית שלי' },
	{ id: 4, titleEn: 'Things We Do', titleHe: 'דברים שאנחנו עושים' },
	{ id: 5, titleEn: 'Feelings & Words', titleHe: 'רגשות ומה שאומרים' },
	{ id: 6, titleEn: 'Places & Directions', titleHe: 'מקומות ותנועה' },
	{ id: 7, titleEn: 'How Much? How Many?', titleHe: 'כמויות ומלכודות' },
	{ id: 8, titleEn: 'Food, Body & Nature', titleHe: 'אוכל, גוף וטבע' },
	{ id: 9, titleEn: null, titleHe: 'הטקסט האמיתי הראשון' }
];

// The previous 3-mock-section roster ("Eye Catchers" + 2 mockups) — set
// aside while the module is rebuilt around docs/lessons frame.csv. Not
// currently served (see getSections below). Do not delete.
export const archivedMockModuleCSections: Section[] = [
	{ id: 1, titleEn: 'Eye Catchers', titleHe: 'Eye Catchers' },
	{ id: 2, titleEn: null, titleHe: '(מוקאפ) יחידה ב׳' },
	{ id: 3, titleEn: null, titleHe: '(מוקאפ) יחידה ג׳' }
];

// The live roster, built from docs/lessons frame.csv. Only section 1 is
// currently served; the rest of the module is set aside for now.
const currentModuleCSections: Section[] = [
	{ id: 1, titleEn: 'Vocabulary Foundation', titleHe: 'יסודות אוצר מילים' }
];

const sectionsByModule: Record<string, Section[]> = {
	c: currentModuleCSections
};

export function getSections(moduleId: string): Section[] {
	return sectionsByModule[moduleId] ?? [];
}

export function getSection(moduleId: string, sectionId: number): Section | undefined {
	return getSections(moduleId).find((section) => section.id === sectionId);
}
