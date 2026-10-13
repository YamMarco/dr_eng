// Feedback framework: rule cascade and the Layer-1 / Layer-2 mark plumbing.
// Run: npm test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { clearBelow, resolveRules } from '../src/lib/feedback/rules.ts';
import { applyFixes, locateMarks, mergeMarks } from '../src/lib/feedback/merge.ts';
import { FATAL_TAGS, TAGS, TAG_IDS } from '../src/lib/feedback/tags.ts';
import type { Mark } from '../src/lib/feedback/types.ts';
import { readFileSync } from 'node:fs';

test('nearest level wins, screen overrides section', () => {
	const r = resolveRules([{ llmGrade: true, maxTypos: 3 }, undefined, { maxTypos: 0 }, {}]);
	assert.equal(r.llmGrade, true);
	assert.equal(r.maxTypos, 0);
	assert.equal(r.capitalIsError, true);
});

test('bulk clear spares locked levels', () => {
	const kids = [{ maxTypos: 2 }, { maxTypos: 5, rulesLock: true }, { llmGrade: true }];
	assert.equal(clearBelow(kids, ['maxTypos']), 1);
	assert.equal(kids[0].maxTypos, undefined);
	assert.equal(kids[1].maxTypos, 5);
	assert.equal(kids[2].llmGrade, true);
});

test('prompt files, tag list and Hebrew labels stay in step', () => {
	const short = readFileSync('src/lib/server/prompts/grade-short.md', 'utf8');
	const essay = readFileSync('src/lib/server/prompts/grade-essay.md', 'utf8');
	const he = readFileSync('src/lib/i18n/locales/he.ts', 'utf8');
	// the bullet block right after "use only these ids:"
	const listed = (md: string) => {
		const block = md.split('use only these ids:\n')[1].split('\n\n')[0];
		return [...block.matchAll(/^- ([a-z-]+)( \(FATAL\))?:/gm)];
	};
	const ids = TAGS.map((t) => t.id).sort();
	assert.equal(TAG_IDS.size, ids.length);
	for (const md of [short, essay])
		assert.deepEqual(
			listed(md)
				.map((m) => m[1])
				.sort(),
			ids
		);
	assert.deepEqual(
		listed(short)
			.filter((m) => m[2])
			.map((m) => m[1])
			.sort(),
		[...FATAL_TAGS].sort()
	);
	for (const id of ids) assert.ok(he.includes(`'${id}':`) || he.includes(`${id}:`), id);
});

const typo = (start: number, end: number, text: string, fix: string): Mark => ({
	tag: 'typo',
	source: 'l1',
	start,
	end,
	text,
	suggestions: [fix]
});

test('LLM spans map back onto the original text across a length-changing fix', () => {
	const text = 'I recieve a gift form my friend';
	const l1 = [typo(2, 9, 'recieve', 'receive')];
	const corrected = applyFixes(text, l1);
	assert.equal(corrected.text, 'I receive a gift form my friend');
	const [m] = locateMarks(text, corrected, [{ span: 'form', tag: 'wrong-word' }]);
	assert.equal(text.slice(m.start, m.end), 'form');
	// a span that contains the fixed word snaps to the original word's edges
	const [w] = locateMarks(text, corrected, [{ span: 'receive a gift', tag: 'unclear' }]);
	assert.equal(text.slice(w.start, w.end), 'recieve a gift');
});

test('nth picks the right repeat; unknown spans are dropped', () => {
	const text = 'I like it and I like her';
	const c = applyFixes(text, []);
	const out = locateMarks(text, c, [
		{ span: 'I like', tag: 'repeats', nth: 2 },
		{ span: 'nowhere', tag: 'unclear' }
	]);
	assert.equal(out.length, 1);
	assert.equal(out[0].start, 14);
});

test('merge keeps the local mark where both cover the same spot', () => {
	const l1: Mark[] = [typo(0, 3, 'teh', 'the')];
	const l2: Mark[] = [
		{ tag: 'wrong-word', source: 'l2', start: 1, end: 2, text: 'e' },
		{ tag: 'tense', source: 'l2', start: 10, end: 14, text: 'went' }
	];
	const merged = mergeMarks(l1, l2);
	assert.deepEqual(
		merged.map((m) => m.tag),
		['typo', 'tense']
	);
});
