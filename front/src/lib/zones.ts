// Color theming for the continuous lesson path (see
// routes/.../lessons/+page.svelte). Each lesson acts as one "zone" — its
// parts are the path nodes, its title is the zone banner — so this is just a
// small palette cycled by the lesson's position among lessons that actually
// have content. Purely visual, scoped to that one page.

export type ZoneTheme = {
	/** Node circle background + text when unlocked. */
	node: string;
	/** Node circle background + text once completed. */
	nodeDone: string;
	/** Zone header banner background + text. */
	banner: string;
};

const PALETTE: ZoneTheme[] = [
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

export function themeForZoneIndex(index: number): ZoneTheme {
	return PALETTE[index % PALETTE.length];
}
