// Shared tokenisation for mark-all, used by both the runtime screen and the
// editor's TextMarker so a tapped/selected word maps to the same index the
// scoring uses (`text.split(/\s+/)`).

export type MarkAllSegment = {
	/** true = a word (tappable), false = the whitespace between words. */
	token: boolean;
	/** index into text.split(/\s+/) — only meaningful when `token` is true. */
	index: number;
	text: string;
};

export function markAllSegments(text: string): MarkAllSegment[] {
	// Split keeping the separators: even parts are words (part/2 == the index
	// in text.split(/\s+/)), odd parts are whitespace runs.
	const parts = text.split(/(\s+)/);
	const out: MarkAllSegment[] = [];
	for (let p = 0; p < parts.length; p++) {
		if (parts[p] === '') continue;
		out.push({ token: p % 2 === 0, index: p / 2, text: parts[p] });
	}
	return out;
}

/** token index -> [start, end) char offsets in `text` (non-empty tokens only). */
export function markAllTokenSpans(text: string): Map<number, [number, number]> {
	const parts = text.split(/(\s+)/);
	const m = new Map<number, [number, number]>();
	let offset = 0;
	for (let p = 0; p < parts.length; p++) {
		if (p % 2 === 0 && parts[p] !== '') m.set(p / 2, [offset, offset + parts[p].length]);
		offset += parts[p].length;
	}
	return m;
}
