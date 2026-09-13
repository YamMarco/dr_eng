// Fixed character-color palette for {c:name}...{/c} markdown tokens (see
// miniMarkdown.ts). Kept small and named (not free hex) so authored content
// stays visually consistent. Shared between the runtime renderer and the
// content-edit toolbar's color buttons.

export const TEXT_COLOR_PALETTE: Record<string, string> = {
	black: '#000000',
	white: '#ffffff',
	red: '#dc2626',
	blue: '#2563eb',
	green: '#16a34a',
	orange: '#ea580c',
	purple: '#9333ea',
	gray: '#6b7280'
};

export type TextColorName = keyof typeof TEXT_COLOR_PALETTE;

const HEX_TO_NAME = Object.fromEntries(
	Object.entries(TEXT_COLOR_PALETTE).map(([name, hex]) => [hex.toLowerCase(), name])
) as Record<string, TextColorName>;

export function colorNameFromHex(hex: string): TextColorName | null {
	return HEX_TO_NAME[hex.toLowerCase()] ?? null;
}
