// Helper for `mark-all` screens: given the screen's `text` and a list of
// target phrases, returns the token indices (in `text.split(/\s+/)`) that
// count as correct. Punctuation- and case-insensitive; a multi-word phrase
// must appear as a consecutive run of tokens.

const STRIP = /[.,;:!?"'()‘’“”]/g;

export function markTargets(text: string, phrases: string[]): number[] {
	const norm = (w: string) => w.replace(STRIP, '').toLowerCase();
	const tokens = text.split(/\s+/).map(norm);
	const hits = new Set<number>();
	for (const phrase of phrases) {
		const words = phrase.split(/\s+/).map(norm);
		for (let i = 0; i + words.length <= tokens.length; i++) {
			if (words.every((w, j) => tokens[i + j] === w)) {
				for (let j = 0; j < words.length; j++) hits.add(i + j);
			}
		}
	}
	return [...hits].sort((a, b) => a - b);
}
