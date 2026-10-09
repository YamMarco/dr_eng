// Accepted-answer check for fixed-shape writing tasks (a one-sentence stance,
// say). Each pattern is a whole sentence; `(a|b)` stands for "a or b", and
// several groups in one pattern multiply out:
//   "(I think|I believe) schools should (open|close) early."
// Matching ignores case, punctuation and apostrophes ("don't" = "dont").

function normalize(value: string) {
	return value
		.toLowerCase()
		.replace(/['‘’]/g, '')
		.replace(/[^a-z0-9\s]/g, ' ')
		.split(/\s+/)
		.filter(Boolean)
		.join(' ');
}

/** Every sentence a pattern stands for. */
export function expandPattern(pattern: string): string[] {
	const group = pattern.match(/\(([^()]*)\)/);
	if (!group) return [pattern];
	return group[1].split('|').flatMap((option) => expandPattern(pattern.replace(group[0], option)));
}

export function expandAccepted(patterns: string[]): string[] {
	return [...new Set(patterns.flatMap(expandPattern))];
}

export function matchesAccepted(given: string, patterns: string[]): boolean {
	const g = normalize(given);
	return g.length > 0 && expandAccepted(patterns).some((a) => normalize(a) === g);
}
