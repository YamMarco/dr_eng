// Color theming for the continuous lesson path (see
// routes/.../lessons/+page.svelte). Each section's lessons share one node
// color, cycled by the section's position among sections that actually have
// content. Also reused for a module's own identity color elsewhere (unit
// page module chips, module page icon chip) so a module's color carries
// through into its own path.

export type SectionTheme = {
	/** Node circle background + text when unlocked. */
	node: string;
	/** The node's own fill, as a CSS var — the .puck-3d lip color (--puck-lip)
	 *  for an unlocked node, matching `node`'s Tailwind shade. */
	nodeFace: string;
	/** Darker shade for the .puck-3d ring/border (--puck-border) under an
	 *  unlocked node. */
	nodeShadow: string;
	/** Soft pastel background + text — completed nodes, and reused as a
	 *  module/unit identity chip elsewhere. */
	soft: string;
};

// `soft` uses Tailwind's fixed palette (not our [data-theme] color tokens),
// so it needs an explicit dark: pair — otherwise it stays a pale light-mode
// pastel that sticks out against a dark canvas.
const PALETTE: SectionTheme[] = [
	{
		node: 'bg-teal-500 text-white',
		nodeFace: 'var(--color-teal-500)',
		nodeShadow: 'var(--color-teal-700)',
		soft: 'bg-teal-100 text-teal-700 dark:bg-teal-950 dark:text-teal-300'
	},
	{
		node: 'bg-violet-500 text-white',
		nodeFace: 'var(--color-violet-500)',
		nodeShadow: 'var(--color-violet-700)',
		soft: 'bg-violet-100 text-violet-700 dark:bg-violet-950 dark:text-violet-300'
	},
	{
		node: 'bg-amber-500 text-white',
		nodeFace: 'var(--color-amber-500)',
		nodeShadow: 'var(--color-amber-700)',
		soft: 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300'
	},
	{
		node: 'bg-rose-500 text-white',
		nodeFace: 'var(--color-rose-500)',
		nodeShadow: 'var(--color-rose-700)',
		soft: 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300'
	},
	{
		node: 'bg-sky-500 text-white',
		nodeFace: 'var(--color-sky-500)',
		nodeShadow: 'var(--color-sky-700)',
		soft: 'bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300'
	}
];

export function themeForSectionIndex(index: number): SectionTheme {
	return PALETTE[index % PALETTE.length];
}
