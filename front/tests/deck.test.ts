// Word deck: scheduler, session builder and the word lists.
// Run: npm test (node's built-in runner, no extra deps).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { addDays, dueWords, review } from '../src/lib/deck/scheduler.ts';
import {
	blankedExample,
	buildSession,
	EXAM_BOX,
	MAX_REVIEWS,
	NEW_PER_SESSION,
	printed,
	wordResults
} from '../src/lib/deck/session.ts';
import { listA } from '../src/lib/content/e/list-a.ts';
import { listB } from '../src/lib/content/e/list-b.ts';
import { listC } from '../src/lib/content/e/list-c.ts';
import { listD } from '../src/lib/content/e/list-d.ts';

const eWords = listA;
import type { DeckProgress } from '../src/lib/deck/types.ts';

const today = '2026-10-12';
// Deterministic "random" so shuffles are repeatable.
function seeded(seed = 1) {
	return () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646;
}

test('addDays crosses month and year ends', () => {
	assert.equal(addDays('2026-10-31', 1), '2026-11-01');
	assert.equal(addDays('2026-12-31', 1), '2027-01-01');
});

test('review: new word starts in box 1 either way, due tomorrow', () => {
	assert.deepEqual(review(undefined, true, today), { box: 1, due: '2026-10-13', lapses: 0 });
	assert.deepEqual(review(undefined, false, today), { box: 1, due: '2026-10-13', lapses: 0 });
});

test('review: right climbs a box, first lapse drops one box, later lapses drop to box 1, box caps at 5', () => {
	assert.deepEqual(review({ box: 2, due: today, lapses: 0 }, true, today), {
		box: 3,
		due: '2026-10-19',
		lapses: 0
	});
	assert.deepEqual(review({ box: 5, due: today, lapses: 0 }, false, today), {
		box: 4,
		due: '2026-10-13',
		lapses: 1
	});
	assert.deepEqual(review({ box: 1, due: today, lapses: 0 }, false, today).box, 1);
	assert.deepEqual(review({ box: 4, due: today, lapses: 1 }, false, today), {
		box: 1,
		due: '2026-10-13',
		lapses: 2
	});
	assert.equal(review({ box: 5, due: today, lapses: 0 }, true, today).box, 5);
});

test('dueWords: only due or overdue, most overdue first', () => {
	const progress: DeckProgress = {
		a: { box: 1, due: '2026-10-12', lapses: 0 },
		b: { box: 2, due: '2026-10-01', lapses: 0 },
		c: { box: 1, due: '2026-10-20', lapses: 0 }
	};
	assert.deepEqual(dueWords(progress, today), ['b', 'a']);
});

test('lists: unique ids, every field filled, bold in every example', () => {
	for (const [name, list] of Object.entries({ listA, listB, listC, listD })) {
		assert.ok(list.length > 200, name);
		assert.equal(new Set(list.map((w) => w.id)).size, list.length, name);
		for (const w of list) {
			assert.ok(w.word && w.defEn && w.he, w.id);
			assert.match(w.exampleEn, /\*\*.+?\*\*/, w.id);
			assert.doesNotMatch(w.defEn + w.he + w.exampleEn, /—|--/, w.id);
		}
		// Most examples must work as fill-the-blank.
		assert.ok(list.filter((w) => blankedExample(w)).length >= list.length * 0.9, name);
	}
});

test('first session: new words only, taught like Module C', () => {
	const { screens, targets } = buildSession(eWords, {}, today, { random: seeded() });
	assert.equal(screens.length, targets.length);
	assert.equal(screens.filter((s) => s.type === 'word-card').length, NEW_PER_SESSION);
	// Each new word is graded once, by its meaning question.
	assert.deepEqual(
		targets.flat(),
		eWords.slice(0, NEW_PER_SESSION).map((w) => w.id)
	);
	// A card always comes before the word's question.
	const first = screens.findIndex((s) => s.type === 'mcq');
	assert.equal(screens[first - 1].type, 'word-card');
	assert.ok(screens.some((s) => s.type === 'match-pairs'));
});

test('reviews: due words only, harder screens for higher boxes, exam sets of 3', () => {
	const progress: DeckProgress = {};
	const nouns = eWords.filter((w) => w.pos === 'noun');
	const reviewed = [...eWords.slice(0, 6), ...nouns.slice(10, 16)];
	reviewed.forEach((w, i) => {
		progress[w.id] = { box: i < 3 ? 1 : i < 6 ? 2 : EXAM_BOX, due: today, lapses: 0 };
	});
	progress[nouns[20].id] = { box: 1, due: '2026-10-30', lapses: 0 };
	const { screens, targets } = buildSession(eWords, progress, today, { random: seeded() });
	const graded = targets.flat();
	assert.ok(!graded.includes(nouns[20].id), 'not due');
	const sets = screens.filter((s) => s.type === 'match-definitions');
	assert.equal(sets.length, 2);
	for (const set of sets) {
		assert.equal(set.items.length, 6);
		assert.equal(set.definitions.length, 3);
		assert.equal(new Set(set.items).size, 6);
		// One class, like the exam: six nouns.
		const pos = set.items.map((item) => eWords.find((w) => printed(w) === item)?.pos);
		assert.ok(
			pos.every((p) => p === 'noun'),
			set.items.join(', ')
		);
	}
	// Every review word is graded exactly once.
	const reviewIds = reviewed.map((w) => w.id);
	assert.deepEqual(graded.filter((id) => reviewIds.includes(id)).sort(), [...reviewIds].sort());
});

test('exam sets are one class; mixed or too-small classes go to single questions', () => {
	const pick = (pos: string, n: number) => eWords.filter((w) => w.pos === pos).slice(0, n);
	const due = [...pick('noun', 2), ...pick('adj', 1)];
	const progress: DeckProgress = Object.fromEntries(
		due.map((w) => [w.id, { box: EXAM_BOX, due: today, lapses: 0 }])
	);
	const { screens } = buildSession(eWords, progress, today, { random: seeded() });
	assert.equal(screens.filter((s) => s.type === 'match-definitions').length, 0);
	// A class with fewer than 6 words can't fill a set.
	const tiny = [...pick('adv', 4), ...pick('noun', 20)];
	const advs = Object.fromEntries(
		pick('adv', 3).map((w) => [w.id, { box: EXAM_BOX, due: today, lapses: 0 }])
	);
	const built = buildSession(tiny, advs, today, { random: seeded() });
	assert.equal(built.screens.filter((s) => s.type === 'match-definitions').length, 0);
	// Each adverb still gets its own question.
	assert.equal(built.targets.flat().filter((id) => id in advs).length, 3);
});

test('printed: words as the exam prints them', () => {
	const find = (list: typeof eWords, word: string) => printed(list.find((w) => w.word === word)!);
	assert.equal(find(listA, 'cope'), 'to cope');
	assert.equal(find(listA, 'essay'), 'an essay');
	assert.equal(find(listA, 'salary'), 'a salary');
	assert.equal(find(listA, 'advertising'), 'advertising');
	assert.equal(find(listA, 'reliable'), 'reliable');
	assert.equal(find(listA, 'focus on'), 'to focus on');
	assert.equal(find(listA, 'at least'), 'at least');
	assert.equal(find(listC, 'union'), 'a union');
	assert.equal(find(listD, 'mix up'), 'to mix up');
});

test('mcq answers point at the right word', () => {
	const progress: DeckProgress = {};
	eWords.slice(0, 6).forEach((w) => (progress[w.id] = { box: 2, due: today, lapses: 0 }));
	const { screens, targets } = buildSession(eWords, progress, today, { random: seeded(7) });
	screens.forEach((s, i) => {
		if (s.type !== 'mcq' || targets[i].length !== 1) return;
		const word = eWords.find((w) => w.id === targets[i][0])!;
		const answer = s.options[s.correctIndex!];
		assert.ok(answer === printed(word) || answer === word.he, word.id);
		assert.equal(new Set(s.options).size, s.options.length, `duplicate options for ${word.id}`);
	});
});

test('no new words when the review cap is reached', () => {
	const progress: DeckProgress = {};
	eWords
		.slice(0, MAX_REVIEWS + 2)
		.forEach((w) => (progress[w.id] = { box: 1, due: today, lapses: 0 }));
	const { screens } = buildSession(eWords, progress, today, { random: seeded() });
	assert.equal(screens.filter((s) => s.type === 'word-card').length, 0);
});

test('extra practice works when nothing is due', () => {
	const progress: DeckProgress = { [eWords[0].id]: { box: 2, due: '2026-10-15', lapses: 0 } };
	assert.equal(
		buildSession(eWords, progress, today).screens.filter((s) => s.type === 'word-card').length,
		NEW_PER_SESSION
	);
	const extra = buildSession(eWords, progress, today, { extra: true });
	assert.deepEqual(extra.targets.flat(), [eWords[0].id]);
});

test('wordResults: per definition for sets, all-or-nothing for single screens', () => {
	const targets = [['a'], ['b', 'c', 'd'], [], ['a']];
	assert.deepEqual(wordResults(targets, { 0: [true], 1: [true, false, true], 2: [], 3: [false] }), {
		a: false,
		b: true,
		c: false,
		d: true
	});
});
