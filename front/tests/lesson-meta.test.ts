// The student shell reads generated lesson metadata and loads lesson content per file: all three
// lists of lesson files (generator, loader map, content index) must agree, and the metadata
// must match what the lesson files say.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { buildLessonMeta, SECTION_FILES } from '../scripts/lesson-meta.mjs';

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
