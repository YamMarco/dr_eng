// Colour palette for mark-all categories (e.g. "names", "negatives",
// "numbers"). Stored on the screen as a `key` string; both the runtime
// screen and the editor look up the actual bg/fg here. Inline styles, so it
// doesn't depend on which Tailwind colour classes happen to be generated.

export type MarkAllSwatch = { key: string; bg: string; fg: string };

export const MARK_ALL_PALETTE: MarkAllSwatch[] = [
	{ key: 'amber', bg: '#fde68a', fg: '#78350f' },
	{ key: 'sky', bg: '#bae6fd', fg: '#0c4a6e' },
	{ key: 'rose', bg: '#fecdd3', fg: '#881337' },
	{ key: 'violet', bg: '#ddd6fe', fg: '#4c1d95' },
	{ key: 'emerald', bg: '#a7f3d0', fg: '#064e3b' },
	{ key: 'orange', bg: '#fed7aa', fg: '#7c2d12' }
];

/** Colour for uncategorised marks (a correct token with no category). */
export const MARK_ALL_DEFAULT: MarkAllSwatch = { key: '', bg: '#bbf7d0', fg: '#065f46' };

export function markAllSwatch(colorKey: string | undefined): MarkAllSwatch {
	return MARK_ALL_PALETTE.find((s) => s.key === colorKey) ?? MARK_ALL_DEFAULT;
}
