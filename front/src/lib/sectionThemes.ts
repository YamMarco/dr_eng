// Color theming for the continuous lesson path (see
// routes/.../lessons/+page.svelte). Each section's lessons share one node
// color, cycled by the section's position among sections that actually have
// content. Purely visual, scoped to that one page.

export type SectionTheme = {
	/** Node circle background + text when unlocked. */
	node: string;
	/** Node circle background + text once completed. */
	nodeDone: string;
};

// nodeDone uses Tailwind's fixed palette (not our [data-theme] color tokens),
// so it needs an explicit dark: pair — otherwise completed nodes stay a pale
// light-mode pastel that sticks out against a dark path.
const PALETTE: SectionTheme[] = [
	{
		node: 'bg-teal-500 text-white',
		nodeDone: 'bg-teal-100 text-teal-700 dark:bg-teal-950 dark:text-teal-300'
	},
	{
		node: 'bg-violet-500 text-white',
		nodeDone: 'bg-violet-100 text-violet-700 dark:bg-violet-950 dark:text-violet-300'
	},
	{
		node: 'bg-amber-500 text-white',
		nodeDone: 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300'
	},
	{
		node: 'bg-rose-500 text-white',
		nodeDone: 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300'
	},
	{
		node: 'bg-sky-500 text-white',
		nodeDone: 'bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300'
	}
];

export function themeForSectionIndex(index: number): SectionTheme {
	return PALETTE[index % PALETTE.length];
}
