// Spell check: hyphenated words are checked as a whole, real typos still flagged.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import NSpell from 'nspell';
import { typoIssues } from '../src/lib/checks/typos.ts';

const file = (name: string) =>
	readFileSync(new URL(`../static/dict/${name}`, import.meta.url), 'utf8');
const spellers = ['en-US', 'en-GB'].map((d) => NSpell(file(`${d}.aff`), file(`${d}.dic`)));
const typos = (text: string) => typoIssues(spellers, text).map((i) => i.text);

test('prefixed and compound hyphenated words are not typos', () => {
	for (const text of [
		'This was pre-approved by the Ministry.',
		'We need to re-read it and co-operate.',
		'My ex-teacher is non-native and anti-war.',
		'A well-known, part-time, self-taught, twenty-one year old student.',
		'The semi-final was a mid-week game.'
	])
		assert.deepEqual(typos(text), [], text);
});

test('real typos are still flagged, also next to a hyphen', () => {
	assert.deepEqual(typos('I recieve it.'), ['recieve']);
	assert.deepEqual(typos('A well-knwon person.'), ['knwon']);
	assert.deepEqual(typos('It was pre-aproved.'), ['aproved']);
	assert.deepEqual(typos('A xyzq-like thing.'), ['xyzq']);
});
