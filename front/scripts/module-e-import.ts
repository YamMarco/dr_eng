// Builds the Module E mock exams (src/lib/quiz/e/index.ts) from the practice
// papers in the main repo's `new/` folder (not tracked):
//   node scripts/module-e-import.ts <folder with Module_E_Exam_{1..4}_*.txt> <Module_E_App_Keyword_Feedback.json>
// The .txt files are the papers' .docx text (word/document.xml, one paragraph a line).
// Passages and questions come from the papers, feedback and answers from the JSON.
// Exam 1 keeps its own vocabulary; exams 2-4 shared one set in the source, so
// theirs are drawn from the Core I decks, one word class per set like the exam.
// Pure helpers are exported for tests/module-e-import.test.ts.
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { clashes, printed, wordClass } from '../src/lib/deck/session.ts';
import { listA } from '../src/lib/content/e/list-a.ts';
import { listB } from '../src/lib/content/e/list-b.ts';
import { listC } from '../src/lib/content/e/list-c.ts';
import { listD } from '../src/lib/content/e/list-d.ts';
import type { DeckWord } from '../src/lib/deck/types.ts';

const ROMAN = ['i', 'ii', 'iii', 'iv', 'v', 'vi'];
const GENERIC_TIP =
	'קודם קוראים את כל השאלה ומבררים בדיוק מה צריך למצוא. רק אז חוזרים לפסקה הרלוונטית; תשובה שנשמעת הגיונית אך אינה עונה לדרישה אינה מספיקה.';

/** Content dashes: a single `-` at most. */
export function clean(s: string): string {
	return s
		.replace(/\s*[—–]\s*/g, (m) => (m.trim() === m ? '-' : ' - '))
		.replace(/--+/g, '-')
		.replace(/\s+/g, ' ')
		.trim();
}

/** `(i) ...; (iii) ...` -> option index -> its rejection. Anything else (open questions) -> {}. */
export function splitIncorrectOptions(text: string): Record<number, string> {
	const out: Record<number, string> = {};
	for (const part of text.split(/;\s*(?=\([ivx]+\))/)) {
		const m = part.trim().match(/^\(([ivx]+)\)\s*(.+?)\.?$/);
		if (m && ROMAN.includes(m[1])) out[ROMAN.indexOf(m[1])] = clean(m[2]) + '.';
	}
	return out;
}

/** `ii, iv` / `Option iii` -> option indices. */
export function parseRomans(text: string): number[] {
	return [...text.matchAll(/\b([ivx]+)\b/g)].map((m) => ROMAN.indexOf(m[1])).filter((i) => i >= 0);
}

/** The explanation without the generic "read the whole question" tail (keywords are shown apart). */
export function explanationOnly(text: string): string {
	return clean(text.split('יש לקרוא תחילה')[0]);
}

/** A tick-two explanation written per option (`iii) ...; v) ...`) -> just option `i`'s part. */
export function rightExplanation(text: string, i: number): string {
	const parts = text.split(/;\s*(?=[ivx]+\))/);
	const own = parts.find((p) => p.trim().startsWith(`${ROMAN[i]})`));
	return own
		? own
				.trim()
				.replace(/^[ivx]+\)\s*/, '')
				.replace(/\.?$/, '.')
		: text;
}

/** The tip without the sentence every tip starts with. */
export function tipOnly(text: string): string {
	return clean(text.startsWith(GENERIC_TIP) ? text.slice(GENERIC_TIP.length) : text);
}

/** `Word bank: 1. to attach — לחבר; 2. ...` -> Hebrew per item, in order. */
export function parseWordBank(line: string): string[] {
	return line
		.replace(/^Word bank:\s*/, '')
		.split(/;\s*(?=\d+\.)/)
		.map((part) =>
			clean(
				part
					.split(/\s+[—–-]\s+/)
					.slice(1)
					.join(' - ')
			)
		);
}

type Json = {
	exam: number;
	question: number;
	subquestion?: number;
	section: 'reading' | 'vocabulary';
	correct_answer?: string;
	correct_number?: number;
	explanation_he: string;
	evidence: string;
	incorrect_options_he: string;
	tip_he: string;
	question_keywords?: string;
	evidence_keywords?: string;
};

type Question = {
	n: number;
	text: string;
	points: number;
	paragraph?: string;
	options: string[];
	tickTwo: boolean;
	stems: string[];
};

type Paper = {
	title: string;
	paragraphs: string[];
	glossary: { term: string; he: string }[];
	questions: Question[];
	sets: { items: string[]; definitions: string[]; glosses: string[] }[];
	/** Teacher key line per reading question (other accepted wording). */
	key: Record<number, string>;
};

export function parsePaper(raw: string): Paper {
	const lines = raw.split('\n').map((l) => l.replace(/\s+$/, ''));
	const at = (re: RegExp, from = 0) => lines.findIndex((l, i) => i >= from && re.test(l));
	const title = lines[at(/^Read the article/) + 1].trim();
	const paragraphs = lines
		.map((l) => l.match(/^(I|II|III|IV|V)\s{2,}(.+)/)?.[2])
		.filter((p): p is string => !!p)
		.map(clean);
	const glossary = lines[at(/^GLOSSARY:/)]
		.replace(/^GLOSSARY:\s*/, '')
		.split(/;\s*/)
		.map((entry) => {
			const [term, ...he] = entry.split(/\s+[—–]\s+/);
			return { term: term.trim(), he: clean(he.join(' - ')) };
		});

	const partII = at(/^PART II/);
	const keyStart = at(/ANSWER KEY|^Part I: Reading comprehension/);
	const questions: Question[] = [];
	for (let i = at(/^QUESTIONS/) + 1; i < partII; i++) {
		const m = lines[i].match(/^(\d+)\.\s+(.+)/);
		if (!m) continue;
		const q: Question = {
			n: Number(m[1]),
			text: '',
			points: 0,
			options: [],
			tickTwo: false,
			stems: []
		};
		const head = m[2];
		q.points = Number([...head.matchAll(/(\d+)\s*points\)/g)].at(-1)?.[1] ?? 8);
		q.tickTwo = /TWO CORRECT ANSWERS/.test(head);
		q.text = clean(
			head.replace(/\([^)]*points\)/g, '').replace(/PUT A ✓ BY THE TWO CORRECT ANSWERS\./, '')
		);
		q.paragraph = head.match(/paragraph ([IVX]+)\b/)?.[1];
		for (let j = i + 1; j < partII && !/^\d+\.\s/.test(lines[j]); j++) {
			const line = lines[j].trim();
			const para = line.match(/^Paragraph ([IVX]+)$/);
			const option = line.match(/^[□○]\s*([ivx]+)\)\s*(.+)/);
			if (para) q.paragraph = para[1];
			else if (option) {
				q.options.push(clean(option[2]));
				if (line.startsWith('□')) q.tickTwo = true;
			} else if (/_{3,}/.test(line)) q.stems.push(clean(line.replace(/_{3,}/g, '____________')));
			else if (/TWO CORRECT ANSWERS/.test(line)) q.tickTwo = true;
		}
		questions.push(q);
	}

	const sets: Paper['sets'] = [];
	for (let i = partII; i < keyStart; i++) {
		if (!/^\d+\.\s*\(6 points\)/.test(lines[i])) continue;
		const set = { items: [] as string[], definitions: [] as string[], glosses: [] as string[] };
		for (let j = i + 1; j < keyStart && !/^\d+\.\s*\(/.test(lines[j]); j++) {
			const item = lines[j].match(/^\s+\d\.\s+(.+)/);
			const def = lines[j].match(/^\s*_{3,}\s+(.+)/);
			if (item) set.items.push(item[1].trim());
			else if (def) set.definitions.push(def[1].trim());
		}
		sets.push(set);
	}
	const banks = lines.filter((l) => l.startsWith('Word bank:'));
	banks.forEach((line, i) => sets[i] && (sets[i].glosses = parseWordBank(line)));

	const key: Record<number, string> = {};
	const keyEnd = at(/^Vocabulary|^Part II: Vocabulary/, keyStart);
	for (let i = keyStart; i < keyEnd; i++) {
		const m = lines[i].match(/^(\d)\.\s+(.+?)\s+(?:[—–]|\()/);
		if (m) key[Number(m[1])] = clean(m[2].replace(/^Options?\s+/, '').replace(/[[\]']/g, ''));
	}
	return { title, paragraphs, glossary, questions, sets, key };
}

const wrap = (text: string, width = 52) => {
	const out: string[] = [];
	let line = '';
	for (const word of text.split(' ')) {
		if (line && (line + ' ' + word).length > width) {
			out.push(line);
			line = word;
		} else line = line ? `${line} ${word}` : word;
	}
	return [...out, line].join('\n');
};

function keywords(j: Json): string {
	return [
		j.question_keywords && `מילות מפתח בשאלה: ${clean(j.question_keywords)}`,
		j.evidence_keywords && `מילות מפתח בטקסט: ${clean(j.evidence_keywords)}`
	]
		.filter(Boolean)
		.join('\n');
}

/** One reading question as an exam screen, with its feedback. */
export function readingScreen(q: Question, j: Json, teacherKey?: string) {
	const evidence = `"${clean(j.evidence)}"`;
	const tip = tipOnly(j.tip_he);
	const keyBlock = [keywords(j), tip && `טיפ: ${tip}`].filter(Boolean).join('\n\n');
	const ref = q.paragraph ? { paragraphRef: q.paragraph } : {};
	if (q.options.length) {
		const right = parseRomans(j.correct_answer ?? '');
		const wrong = splitIncorrectOptions(j.incorrect_options_he);
		return {
			type: 'mcq' as const,
			prompt: q.text,
			options: q.options,
			...(q.tickTwo || right.length > 1 ? { correctIndices: right } : { correctIndex: right[0] }),
			optionFeedback: q.options.map((_, i) =>
				right.includes(i)
					? `${rightExplanation(explanationOnly(j.explanation_he), i)}\n${evidence}`
					: (wrong[i] ?? null)
			),
			...(keyBlock && { explanation: keyBlock }),
			points: q.points,
			...ref
		};
	}
	const answers = [clean(j.correct_answer ?? ''), teacherKey].filter(
		(a, i, all): a is string => !!a && all.indexOf(a) === i
	);
	return {
		type: 'writing-task' as const,
		prompt: [q.text, ...q.stems].join('\n\n'),
		modelAnswer: answers[0],
		explanation: [`${explanationOnly(j.explanation_he)}\n${evidence}`, keyBlock]
			.filter(Boolean)
			.join('\n\n'),
		gradingNotes:
			`Accept any wording with the same meaning, supported by the passage. Expected: ${answers.join(' | ')}. Evidence: ${evidence}` +
			(q.stems.length > 1 ? ` ${q.points / q.stems.length} points per answer.` : ''),
		points: q.points,
		...ref
	};
}

/** Exam 1's own vocabulary set, with the JSON's feedback per definition. */
function sourceSet(set: Paper['sets'][number], js: Json[]) {
	return {
		type: 'match-definitions' as const,
		items: set.items,
		definitions: set.definitions.map((text, d) => {
			const j = js.find((x) => x.subquestion === d + 1)!;
			return { text, itemIndex: j.correct_number! - 1, feedback: clean(j.explanation_he) };
		}),
		itemGlosses: set.glosses,
		points: 6
	};
}

/** Seeded, so the import is reproducible. */
function rng(seed: number) {
	return () => {
		seed = (seed + 0x6d2b79f5) | 0;
		let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
		t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
		return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
	};
}

const SET_CLASSES = ['verb', 'noun', 'adj', 'adv', 'phrasal'];

/** Five Core I sets (verbs, nouns, adjectives, adverbs, phrasal chunks), 6 items and 3
 *  definitions each: one class per set, no two items that clash, words in `used` skipped. */
export function deckSets(words: DeckWord[], seed: number, used: Set<string>) {
	const random = rng(seed);
	const shuffled = <T>(a: T[]) =>
		a
			.map((x) => [random(), x] as const)
			.sort((p, q) => p[0] - q[0])
			.map((p) => p[1]);
	return SET_CLASSES.map((cls) => {
		const picked: DeckWord[] = [];
		for (const w of shuffled(words.filter((x) => wordClass(x) === cls && !used.has(x.id)))) {
			if (picked.some((p) => p.he === w.he || clashes(p, w))) continue;
			picked.push(w);
			if (picked.length === 6) break;
		}
		if (picked.length < 6) throw new Error(`not enough ${cls} words`);
		picked.forEach((w) => used.add(w.id));
		const targets = picked.slice(0, 3);
		const items = shuffled(picked);
		return {
			type: 'match-definitions' as const,
			items: items.map(printed),
			definitions: targets.map((t) => ({
				text: t.defEn,
				itemIndex: items.indexOf(t),
				feedback: `הביטוי **${printed(t)}** פירושו ${t.he}, ולכן הוא מתאים להגדרה.`
			})),
			itemGlosses: items.map((w) => w.he),
			points: 6
		};
	});
}

const UUIDS = ['e-t-2741', 'e-t-5386', 'e-t-9014', 'e-t-6627'];

function buildExam(n: number, paper: Paper, json: Json[], vocab: unknown[]) {
	const reading = json.filter((j) => j.exam === n && j.section === 'reading');
	return {
		id: `e-exam-${n}`,
		module: 'e',
		uuid: UUIDS[n - 1],
		kind: 'assorted',
		options: { passThreshold: 0.6, durationMinutes: 75, warnAtMinutes: 10 },
		parts: [
			{
				id: 'reading',
				instructionsHe: 'קראו את הכתבה וענו על שאלות 1-7 באנגלית, לפי הטקסט. בלי מילון.',
				points: 70,
				screens: [
					{
						type: 'passage',
						title: `{a:center}**${paper.title}**`,
						paragraphs: paper.paragraphs.map((text, i) => ({ id: `p${i + 1}`, text: wrap(text) })),
						glossary: paper.glossary
					},
					...paper.questions.map((q) =>
						readingScreen(
							q,
							reading.find((j) => j.question === q.n)!,
							paper.key[q.n]
						)
					)
				]
			},
			{
				id: 'vocabulary',
				instructionsHe:
					'בכל קבוצה שש מילים ושלוש הגדרות. התאימו לכל הגדרה את המילה שלה (2 נק׳ לכל התאמה).',
				points: 30,
				screens: vocab
			}
		]
	};
}

function main([folder, jsonPath, outPath]: string[]) {
	const json = (JSON.parse(readFileSync(jsonPath, 'utf8')) as { items: Json[] }).items;
	const papers = [1, 2, 3, 4].map((n) => {
		const file = readdirSync(folder).find(
			(f) => f.startsWith(`Module_E_Exam_${n}_`) && f.endsWith('.txt')
		)!;
		return parsePaper(readFileSync(join(folder, file), 'utf8'));
	});
	const words = [...listA, ...listB, ...listC, ...listD];
	// Exam 1's words stay out of the new sets, as do each new set's.
	const used = new Set(
		papers[0].sets
			.flatMap((s) => s.items)
			.flatMap((item) => {
				const w = words.find((x) => printed(x) === item);
				return w ? [w.id] : [];
			})
	);
	const exams = papers.map((paper, i) => {
		const n = i + 1;
		const vocab =
			n === 1
				? paper.sets.map((set, s) =>
						sourceSet(
							set,
							json.filter((j) => j.exam === 1 && j.section === 'vocabulary' && j.question === s + 8)
						)
					)
				: deckSets(words, n * 1009, used);
		return buildExam(n, paper, json, vocab);
	});
	const head =
		"import type { QuizNode } from '../types';\n\n" +
		'// One array literal of every Module E exam (same shape as quiz/c/index.ts).\n' +
		'// Generated by scripts/module-e-import.ts from the practice papers; edit freely after.\n';
	writeFileSync(
		outPath,
		`${head}export const eQuizzes: QuizNode[] = ${JSON.stringify(exams, null, '\t')};\n`
	);
	for (const p of papers)
		console.log(p.title, '|', p.questions.length, 'questions,', p.sets.length, 'sets');
}

if (process.argv[1]?.endsWith('module-e-import.ts')) main(process.argv.slice(2));
