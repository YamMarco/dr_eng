// Module E exam import: source feedback -> per-answer feedback, and the Core I sets.
// Run: npm test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
	clean,
	deckSets,
	explanationOnly,
	parseRomans,
	parseWordBank,
	readingScreen,
	rightExplanation,
	splitIncorrectOptions,
	tipOnly
} from '../scripts/module-e-import.ts';
import { clashes, wordClass } from '../src/lib/deck/session.ts';
import { listA } from '../src/lib/content/e/list-a.ts';
import { listB } from '../src/lib/content/e/list-b.ts';
import { listC } from '../src/lib/content/e/list-c.ts';
import { listD } from '../src/lib/content/e/list-d.ts';
import { eQuizzes } from '../src/lib/quiz/e/index.ts';

const json = {
	exam: 1,
	question: 4,
	section: 'reading' as const,
	correct_answer: 'iii',
	explanation_he: 'הסבר קצר. יש לקרוא תחילה את השאלה במלואה: משהו.',
	evidence: 'chatbots sometimes provide information that sounds correct',
	incorrect_options_he:
		'(i) נאמר שאפשר לבקש הסבר; (ii) לא נאמר שספרים לעולם אינם טועים; (iv) אין איסור.',
	tip_he:
		'קודם קוראים את כל השאלה ומבררים בדיוק מה צריך למצוא. רק אז חוזרים לפסקה הרלוונטית; תשובה שנשמעת הגיונית אך אינה עונה לדרישה אינה מספיקה. חפשו For this reason.',
	question_keywords: 'Why',
	evidence_keywords: 'actually wrong'
};

test('rejections split onto their options by roman numeral', () => {
	const out = splitIncorrectOptions(json.incorrect_options_he);
	assert.deepEqual(Object.keys(out).map(Number), [0, 1, 3]);
	assert.equal(out[1], 'לא נאמר שספרים לעולם אינם טועים.');
	assert.deepEqual(splitIncorrectOptions('לא רלוונטי - זו שאלת תשובה פתוחה.'), {});
});

test('answer keys, explanation and tip cleaned', () => {
	assert.deepEqual(parseRomans('ii, iv'), [1, 3]);
	assert.deepEqual(parseRomans('Option iii'), [2]);
	assert.equal(explanationOnly(json.explanation_he), 'הסבר קצר.');
	assert.equal(tipOnly(json.tip_he), 'חפשו For this reason.');
	assert.equal(clean('questions 1–7 — now'), 'questions 1-7 - now');
	assert.equal(rightExplanation('iii) אחד; v) שניים.', 4), 'שניים.');
});

test('decoy glosses come from the word bank, in item order', () => {
	assert.deepEqual(parseWordBank('Word bank: 1. to attach — לחבר; 2. to put off — לדחות'), [
		'לחבר',
		'לדחות'
	]);
});

test('mcq: each option gets its own feedback, the right one the evidence', () => {
	const screen = readingScreen(
		{
			n: 4,
			text: 'Why?',
			points: 8,
			paragraph: 'III',
			options: ['a', 'b', 'c', 'd'],
			tickTwo: false,
			stems: []
		},
		json
	);
	assert.equal(screen.type, 'mcq');
	if (screen.type !== 'mcq') return;
	assert.equal('correctIndex' in screen ? screen.correctIndex : undefined, 2);
	assert.equal(screen.optionFeedback.length, 4);
	assert.match(screen.optionFeedback[2]!, /^הסבר קצר\.\n"chatbots/);
	assert.equal(screen.optionFeedback[0], 'נאמר שאפשר לבקש הסבר.');
});

test('Core I sets: one class each, 6 items, 3 definitions, no clashes, no repeats', () => {
	const words = [...listA, ...listB, ...listC, ...listD];
	const used = new Set<string>();
	const sets = [...deckSets(words, 1, used), ...deckSets(words, 2, used)];
	const seen = new Set<string>();
	for (const set of sets) {
		assert.equal(set.items.length, 6);
		assert.equal(set.definitions.length, 3);
		assert.equal(new Set(set.definitions.map((d) => d.itemIndex)).size, 3);
		const picked = set.items.map((item) =>
			words.find((w) => set.itemGlosses.includes(w.he) && item.endsWith(w.word))!
		);
		assert.equal(new Set(picked.map(wordClass)).size, 1);
		for (const a of picked) {
			assert.ok(!seen.has(a.id), `${a.word} repeated`);
			seen.add(a.id);
			for (const b of picked) if (a !== b) assert.ok(!clashes(a, b), `${a.word} / ${b.word}`);
		}
	}
});

test('the generated exams add up: 70 reading + 30 vocabulary, feedback on every option', () => {
	assert.equal(eQuizzes.length, 4);
	for (const quiz of eQuizzes) {
		const [reading, vocab] = quiz.parts;
		const points = (screens: typeof reading.screens) =>
			screens.reduce((n, s) => n + ('points' in s && s.points ? s.points : 0), 0);
		assert.equal(points(reading.screens), 70, quiz.id);
		assert.equal(points(vocab.screens), 30, quiz.id);
		for (const s of reading.screens)
			if (s.type === 'mcq') assert.equal(s.optionFeedback?.length, s.options.length, quiz.id);
		for (const s of vocab.screens)
			if (s.type === 'match-definitions') {
				assert.equal(s.itemGlosses?.length, s.items.length, quiz.id);
				assert.ok(
					s.definitions.every((d) => d.feedback),
					quiz.id
				);
			}
	}
});
