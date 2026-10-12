// Feedback framework: rule cascade and the Layer-1 / Layer-2 mark plumbing.
// Run: npm test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { clearBelow, resolveRules } from '../src/lib/feedback/rules.ts';
import { applyFixes, locateMarks, mergeMarks } from '../src/lib/feedback/merge.ts';
import type { Mark } from '../src/lib/feedback/types.ts';

test('nearest level wins, screen overrides section', () => {
	const r = resolveRules([{ llmGrade: true, maxTypos: 3 }, undefined, { maxTypos: 0 }, {}]);
	assert.equal(r.llmGrade, true);
	assert.equal(r.maxTypos, 0);
	assert.equal(r.maxAttempts, 2);
});

test('bulk clear spares locked levels', () => {
	const kids = [{ maxTypos: 2 }, { maxTypos: 5, lock: true }];
	clearBelow(kids, ['maxTypos']);
	assert.equal(kids[0].maxTypos, undefined);
	assert.equal(kids[1].maxTypos, 5);
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
