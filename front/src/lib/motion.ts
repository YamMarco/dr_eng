// Shared entrance-stagger helper for menu/list screens (home, unit, module,
// settings, book, ...) — small delay per item, capped so a long list doesn't
// drag the whole screen's appearance out. Mirrors the pattern already used
// for the lesson path's node cascade.
export const reducedMotion =
	typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function staggerDelay(index: number, base = 60, step = 45, cap = 400): number {
	return reducedMotion ? 0 : base + Math.min(index * step, cap);
}
