// The student shell reads generated indexes (lessons, exams, word lists) and loads the content
// on entry: the generator's file lists must match the loader maps, and no content leaks in.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import {
	buildDeckMeta,
	buildLessonMeta,
	buildQuizMeta,
	DECK_FILES,
	QUIZ_FILES,
	SECTION_FILES
} from '../scripts/lesson-meta.mjs';

const read = (path: string) => readFileSync(new URL(path, import.meta.url), 'utf8');

test('the loader map, the generator and the content index list the same files', () => {
	const generator = SECTION_FILES.map((entry) => entry[0]).sort();
	const loader = [...read('../src/lib/content/load.ts').matchAll(/^\t'([\w/-]+)': \(\)/gm)]
		.map((m) => m[1])
		.sort();
	const index = [...read('../src/lib/content/index.ts').matchAll(/from '\.\/([\w/-]+)';/g)]
		.map((m) => m[1])
		.filter((p) => /^[a-z]+\/[a-z]+-\d$/.test(p))
		.sort();
	assert.deepEqual(loader, generator);
	assert.deepEqual(index, generator);
});

test('lesson metadata: unique ids, prerequisites exist, no content leaks in', async () => {
	const meta = await buildLessonMeta();
	const ids = new Set(meta.map((l: { id: string }) => l.id));
	assert.equal(ids.size, meta.length, 'duplicate lesson ids');
	for (const l of meta) {
		for (const req of l.required) assert.ok(ids.has(req), `${l.id} requires unknown ${req}`);
		assert.ok(l.rounds >= 1, `${l.id} has no round`);
		assert.equal('content' in l, false);
	}
	// All of it is small: the point is the shell not carrying the screens.
	assert.ok(JSON.stringify(meta).length < 120_000, 'metadata grew too large');
});

test('the 5-point version has the same round count (the metadata holds one number)', async () => {
	for (const [file, name] of SECTION_FILES) {
		const mod = await import(new URL(`../src/lib/content/${file}.ts`, import.meta.url).href);
		for (const l of mod[name])
			if (l.content5)
				assert.equal(l.content5.rounds.length, l.content.rounds.length, `${l.id}: rounds differ`);
	}
});

/** The keys of a loader map: the `name: () =>` lines of its first object literal. */
const loaderKeys = (path: string, name: string) => {
	const text = read(path);
	const block = text.slice(
		text.indexOf(`${name}:`),
		text.indexOf('\n};', text.indexOf(`${name}:`))
	);
	return [...block.matchAll(/^\t'?([\w/-]+)'?: \(\) =>/gm)].map((m) => m[1]).sort();
};

test('exams: the loader map and the generator list the same files; no parts in the index', async () => {
	assert.deepEqual(
		loaderKeys('../src/lib/quiz/load.ts', 'QUIZ_FILES'),
		QUIZ_FILES.map((e) => e[0]).sort()
	);
	const meta = await buildQuizMeta();
	assert.equal(
		new Set(meta.map((q: { id: string }) => q.id)).size,
		meta.length,
		'duplicate exam ids'
	);
	assert.ok(meta.length > 0);
	for (const q of meta) assert.equal('parts' in q, false);
	assert.ok(JSON.stringify(meta).length < 10_000, 'exam index grew too large');
});

test('word lists: the loader map and the generator list the same decks; ids only in the index', async () => {
	assert.deepEqual(
		loaderKeys('../src/lib/deck/load.ts', 'DECK_FILES'),
		DECK_FILES.map((d) => d[1]).sort()
	);
	const decks = Object.values(await buildDeckMeta()).flat();
	assert.equal(decks.length, DECK_FILES.length);
	for (const d of decks as { wordIds: unknown[] }[]) {
		assert.ok(d.wordIds.length > 0);
		for (const id of d.wordIds) assert.equal(typeof id, 'string');
	}
});
