/** Icons a `{p:callout}` line can show, picked in the editor. Authored as
 *  `{i:name}` on the line; no token = the default (`bulb`). */
export const CALLOUT_ICONS: Record<string, string> = {
	bulb: '💡',
	warn: '⚠️',
	check: '✅',
	cross: '❌',
	star: '⭐',
	fire: '🔥',
	pin: '📌',
	ask: '❓'
};

export const DEFAULT_CALLOUT_ICON = 'bulb';

export function calloutIconName(emoji: string): string {
	return Object.keys(CALLOUT_ICONS).find((k) => CALLOUT_ICONS[k] === emoji) ?? DEFAULT_CALLOUT_ICON;
}
