import type { CheckIssue } from './types';

/** Language Use (rubric: tenses, subject-verb agreement, structure, word
 *  order, pronouns, prepositions) plus common Israeli-student errors. Only
 *  patterns that are wrong (or almost always wrong) are here: a false flag
 *  on correct English costs more trust than a missed error. */

const issue = (
	rule: string,
	m: RegExpMatchArray | { index: number; 0: string },
	suggestions: string[],
	confidence: CheckIssue['confidence'] = 'sure'
): CheckIssue => ({
	rule,
	area: 'language',
	confidence,
	start: m.index!,
	end: m.index! + m[0].length,
	text: m[0],
	suggestions
});

const MODALS = new Set(
	`can could will would should shall may might must do does did let why how what when where who to`.split(
		/\s+/
	)
);
const VERBS = `go have do like want need think know say make take get help learn play study love hate work live use try give find feel become keep write read eat watch spend`;
const THIRD: Record<string, string> = {
	go: 'goes',
	have: 'has',
	do: 'does'
};
const third = (v: string) =>
	THIRD[v] ??
	(/(s|sh|ch|x|z)$/.test(v) ? v + 'es' : /[^aeiou]y$/.test(v) ? v.slice(0, -1) + 'ies' : v + 's');
const base = (v: string) =>
	v === 'goes'
		? 'go'
		: v === 'has'
			? 'have'
			: v === 'does'
				? 'do'
				: v
						.replace(/ies$/, 'y')
						.replace(/(s|sh|ch|x|z)es$/, '$1')
						.replace(/s$/, '');

const PAST: Record<string, string> = {
	go: 'went',
	goes: 'went',
	have: 'had',
	has: 'had',
	do: 'did',
	does: 'did',
	eat: 'ate',
	see: 'saw',
	take: 'took',
	make: 'made',
	come: 'came',
	get: 'got',
	buy: 'bought',
	play: 'played',
	like: 'liked',
	want: 'wanted',
	think: 'thought',
	am: 'was',
	is: 'was',
	are: 'were'
};

/** Words that start with a vowel letter but a consonant sound, and the reverse. */
const A_BEFORE_VOWEL = /^(uni\w*|use\w*|usual\w*|one|once|eu\w*|ut\w*)$/i;
const AN_BEFORE_CONSONANT = /^(hour\w*|honest\w*|honou?r\w*|heir\w*)$/i;

const UNCOUNTABLE: Record<string, string> = {
	peoples: 'people',
	informations: 'information',
	advices: 'advice',
	homeworks: 'homework',
	furnitures: 'furniture',
	equipments: 'equipment',
	knowledges: 'knowledge',
	researches: 'research',
	childrens: 'children',
	mens: 'men',
	womens: 'women'
};

/** [pattern, rule, suggestion(match)] */
const PHRASES: [RegExp, string, (m: RegExpMatchArray) => string[]][] = [
	[
		/\bmore (better|bigger|easier|harder|faster|cheaper|healthier|happier|worse)\b/gi,
		'double-comparative',
		(m) => [m[1]]
	],
	[/\bmost (best|biggest|easiest|worst)\b/gi, 'double-comparative', (m) => [m[1]]],
	[/\b(depend|depends|depended) (of|from)\b/gi, 'preposition', (m) => [`${m[1]} on`]],
	[
		/\bgood (in|on) (?=(?:the |a )?(?:english|math|maths|sport|sports|school|studying|learning|\w+ing)\b)/gi,
		'preposition',
		() => ['good at ']
	],
	[/\b(afraid|scared) from\b/gi, 'preposition', (m) => [`${m[1]} of`]],
	[/\binterested (of|on|at|about)\b/gi, 'preposition', () => ['interested in']],
	[/\b(listen) (music|the music|to the radio)\b/gi, 'preposition', () => ['listen to']],
	[/\b(discuss|discussed|discusses) about\b/gi, 'preposition', (m) => [m[1]]],
	[/\b(explain|explained|explains) me\b/gi, 'preposition', (m) => [`${m[1]} to me`]],
	[/\b(arrive|arrived|arrives) to\b/gi, 'preposition', (m) => [`${m[1]} at`]],
	[/\b(enter|entered|enters) to\b/gi, 'preposition', (m) => [m[1]]],
	[/\bmarried with\b/gi, 'preposition', () => ['married to']],
	[
		/\bi very (like|love|want|enjoy|hate)\b/gi,
		'word-order',
		(m) => [`I like it very much`.replace('like', m[1])]
	],
	[/\bi have (\d+) years?\b/gi, 'hebrew-ism', (m) => [`I am ${m[1]} years old`]],
	[
		/\bmake (my |your |his |her |our |their |the )?homework\b/gi,
		'hebrew-ism',
		(m) => [`do ${m[1] ?? ''}homework`]
	],
	[/\bdo (sport|sports)\b/gi, 'hebrew-ism', () => ['play sports', 'exercise']],
	[/\bsay me\b/gi, 'hebrew-ism', () => ['tell me']],
	[/\b(he|she|it) (are)\b/gi, 'be-agreement', (m) => [`${m[1]} is`]],
	[/\b(they|we|you) (is|am)\b/gi, 'be-agreement', (m) => [`${m[1]} are`]],
	[
		/\b(people|students|teachers|children|parents|friends|teenagers|kids) (is|was)\b/gi,
		'be-agreement',
		(m) => [`${m[1]} ${m[2].toLowerCase() === 'is' ? 'are' : 'were'}`]
	],
	[
		/\b(he|she|it|everyone|everybody) (don't|haven't)\b/gi,
		'agreement',
		(m) => [`${m[1]} ${m[2] === "don't" ? "doesn't" : "hasn't"}`]
	],
	[
		/\b(will|can|could|should|would|must|might|shall|to) (goes|has|does|makes|takes|gets)\b/gi,
		'verb-form',
		(m) => [`${m[1]} ${base(m[2].toLowerCase())}`]
	],
	[
		/\b(will|can|could|should|would|must|might|shall) (?!bring|sing|ring|spring|swing|string|cling|sting)(\w{2,}ing)\b/gi,
		'verb-form',
		(m) => [`${m[1]} ${m[2].slice(0, -3)}`]
	],
	[
		/\b(will|can|could|should|would|must|might|shall) (to) \w+/gi,
		'verb-form',
		(m) => [m[0].replace(/ to /, ' ')]
	],
	[
		/\b(students|people|teachers|children|parents|friends|teenagers|kids|schools) (they|it) (?=(?:learn|study|need|have|are|can|will|should|do|get|go|make|want|like|help|think)\b)/gi,
		'pronoun-repeat',
		(m) => [m[1] + ' ']
	]
];

export function languageIssues(text: string): CheckIssue[] {
	const out: CheckIssue[] = [];

	for (const [re, rule, sug] of PHRASES) {
		for (const m of text.matchAll(re)) {
			// "he go" after an auxiliary ("does he go") is a question, not an error
			out.push(issue(rule, m, sug(m)));
		}
	}

	// he/she/it + base verb: "he go", "she like"
	const subj = new RegExp(`\\b(he|she|it)\\s+(${VERBS.split(' ').join('|')})\\b`, 'gi');
	for (const m of text.matchAll(subj)) {
		const before = text
			.slice(0, m.index)
			.match(/(\p{L}+)\s*$/u)?.[1]
			?.toLowerCase();
		if (before && MODALS.has(before)) continue;
		out.push(issue('agreement', m, [`${m[1]} ${third(m[2].toLowerCase())}`]));
	}

	// plural subject + 3rd-person verb: "they goes", "students likes"
	const plural =
		/\b(they|we|you|i|students|people|teachers|children|parents|friends|teenagers|kids)\s+(goes|has|does|likes|wants|needs|thinks|knows|says|makes|takes|gets|helps|learns|plays|studies|loves|hates|works|lives|uses|tries|gives|finds|feels|keeps|writes|reads|eats|watches|spends)\b/gi;
	for (const m of text.matchAll(plural)) {
		if (m[1].toLowerCase() === 'i' && /^(has|does)$/i.test(m[2])) continue;
		out.push(issue('agreement', m, [`${m[1]} ${base(m[2].toLowerCase())}`]));
	}

	// a / an
	for (const m of text.matchAll(/\b(a|an)\s+(\p{L}+)/giu)) {
		const art = m[1].toLowerCase();
		const next = m[2];
		const vowel = /^[aeiou]/i.test(next);
		const wantsAn = (vowel && !A_BEFORE_VOWEL.test(next)) || AN_BEFORE_CONSONANT.test(next);
		if (art === 'a' && wantsAn) out.push(issue('article', m, [`an ${next}`]));
		else if (art === 'an' && !wantsAn) out.push(issue('article', m, [`a ${next}`]));
	}

	// uncountable / irregular plurals
	for (const m of text.matchAll(/\p{L}+/gu)) {
		const fix = UNCOUNTABLE[m[0].toLowerCase()];
		if (fix) out.push(issue('plural', m, [fix]));
	}

	// past-time marker + present verb in the same sentence
	for (const s of text.matchAll(/[^.!?\n]+/g)) {
		if (
			!/\b(yesterday|last (?:week|year|night|month|summer|weekend)|\w+ (?:days?|weeks?|years?|months?) ago)\b/i.test(
				s[0]
			)
		)
			continue;
		for (const m of s[0].matchAll(
			/\b(I|we|they|he|she|it|you)\s+(go|goes|have|has|do|does|eat|see|take|make|come|get|buy|play|like|want|think|am|is|are)\b/gi
		)) {
			const past = PAST[m[2].toLowerCase()];
			out.push(
				issue('past-tense', { index: s.index + m.index, 0: m[0] }, [`${m[1]} ${past}`], 'maybe')
			);
		}
	}

	return out;
}
