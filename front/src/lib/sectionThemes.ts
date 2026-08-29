// Color theming for the continuous lesson path (see
// routes/.../lessons/+page.svelte). Each section is one colored zone — its
// lessons are the path nodes, its title is the zone banner — so this is just
// a small palette cycled by the section's position among sections that
// actually have content. Purely visual, scoped to that one page.

export type SectionTheme = {
	/** Node circle background + text when unlocked. */
	node: string;
	/** Node circle background + text once completed. */
	nodeDone: string;
	/** Zone header banner background + text. */
	banner: string;
};

const PALETTE: SectionTheme[] = [
	{
		node: 'bg-teal-500 text-white',
		nodeDone: 'bg-teal-100 text-teal-700',
		banner: 'bg-teal-500 text-white'
	},
	{
		node: 'bg-violet-500 text-white',
		nodeDone: 'bg-violet-100 text-violet-700',
		banner: 'bg-violet-500 text-white'
	},
	{
		node: 'bg-amber-500 text-white',
		nodeDone: 'bg-amber-100 text-amber-700',
		banner: 'bg-amber-500 text-white'
	},
	{
		node: 'bg-rose-500 text-white',
		nodeDone: 'bg-rose-100 text-rose-700',
		banner: 'bg-rose-500 text-white'
	},
	{
		node: 'bg-sky-500 text-white',
		nodeDone: 'bg-sky-100 text-sky-700',
		banner: 'bg-sky-500 text-white'
	}
];

export function themeForSectionIndex(index: number): SectionTheme {
	return PALETTE[index % PALETTE.length];
}
