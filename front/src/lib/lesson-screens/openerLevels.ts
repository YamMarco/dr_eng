// Round presets for the opener card: each level up gets its own emoji and badge
// colors, so the climb from warm-up to exam level is visible at a glance.
// `name` is editor-only (never shown to students).

export type OpenerLevel = { emoji: string; from: string; to: string; name: string };

export const OPENER_LEVELS: OpenerLevel[] = [
	{ emoji: '🌱', from: '#34d399', to: '#059669', name: 'חימום' },
	{ emoji: '🌟', from: '#fbbf24', to: '#d97706', name: 'צוברים ביטחון' },
	{ emoji: '🔥', from: '#fb923c', to: '#dc2626', name: 'מעלים הילוך' },
	{ emoji: '💎', from: '#38bdf8', to: '#2563eb', name: 'רמת בחינה' },
	{ emoji: '🏆', from: '#fde047', to: '#ca8a04', name: 'אתגר' },
	{ emoji: '👑', from: '#c4b5fd', to: '#7c3aed', name: 'מאסטר' }
];

/** The preset for a 1-based level, if any. */
export const openerLevel = (level: number | undefined) =>
	level ? OPENER_LEVELS[level - 1] : undefined;
