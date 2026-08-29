// Groups a module's lessons into themed "zones" for the Duolingo-style
// continuous path (see routes/.../lessons/+page.svelte). Purely a display
// grouping — it doesn't change how lessons themselves are loaded or run.
// Zone color theming is scoped to that one selection page only.

export type ZoneTheme = {
	/** Node circle background + text when unlocked. */
	node: string;
	/** Node circle background + text once completed. */
	nodeDone: string;
	/** Zone header banner background + text. */
	banner: string;
};

export type Zone = {
	id: string;
	titleHe: string;
	theme: ZoneTheme;
	lessonIds: number[];
};

const moduleCZones: Zone[] = [
	{
		id: 'my-day',
		titleHe: 'היום שלי',
		theme: {
			node: 'bg-teal-500 text-white',
			nodeDone: 'bg-teal-100 text-teal-700',
			banner: 'bg-teal-500 text-white'
		},
		lessonIds: [1, 2, 3]
	},
	{
		id: 'actions-and-feelings',
		titleHe: 'פעולות ורגשות',
		theme: {
			node: 'bg-violet-500 text-white',
			nodeDone: 'bg-violet-100 text-violet-700',
			banner: 'bg-violet-500 text-white'
		},
		lessonIds: [4, 5, 6]
	},
	{
		id: 'reading-like-a-detective',
		titleHe: 'קוראים כמו בלשים',
		theme: {
			node: 'bg-amber-500 text-white',
			nodeDone: 'bg-amber-100 text-amber-700',
			banner: 'bg-amber-500 text-white'
		},
		lessonIds: [7, 8, 9]
	}
];

const zonesByModule: Record<string, Zone[]> = {
	c: moduleCZones
};

export function getZones(moduleId: string): Zone[] {
	return zonesByModule[moduleId.toLowerCase()] ?? [];
}
