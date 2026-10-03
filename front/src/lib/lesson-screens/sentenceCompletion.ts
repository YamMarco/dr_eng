// Shared answer check for sentence-completion, used by the lesson screen and
// by quiz scoring. Ignores case, punctuation and small filler words, so
// "books, signs, screens" matches "books, signs, and screens".

const FILLER = new Set(['and', 'or', 'the', 'a', 'an']);

function normalize(value: string) {
	return value
		.toLowerCase()
		.replace(/[^a-z0-9\s]/g, ' ')
		.split(/\s+/)
		.filter((w) => w && !FILLER.has(w))
		.join(' ');
}

export function isSentenceCompletionMatch(given: string, modelAnswers: string[]) {
	const g = normalize(given);
	return g.length > 0 && modelAnswers.some((m) => normalize(m) === g);
}
