import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { hebrewMarkAllTexts } from '../scripts/content-strings.mjs';

// Content translation tables (src/lib/content/translations/*.json) must keep
// what the player relies on: markup tokens, line structure, and for mark-all
// the token positions the answer key points at.
const langs = ['ar'];
const table = (lang: string): Record<string, string> =>
	JSON.parse(
		readFileSync(new URL(`../src/lib/content/translations/${lang}.json`, import.meta.url), 'utf8')
	);

const tokens = (s: string) => (s.match(/\{[a-z]:[^}]*\}|\{\/c\}|\*\*|\+\+|~~|`|^---$|^#{1,3} /gm) ?? []).sort();
const lines = (s: string) => s.split('\n').length;
const words = (s: string) => s.split(/\s+/).filter(Boolean).length;

for (const lang of langs) {
	const t = table(lang);

	test(`${lang}: markup tokens and line count match the Hebrew`, () => {
		for (const [he, tr] of Object.entries(t)) {
			assert.deepEqual(tokens(tr), tokens(he), `tokens differ: ${he.slice(0, 60)}`);
			assert.equal(lines(tr), lines(he), `line count differs: ${he.slice(0, 60)}`);
		}
	});

	test(`${lang}: no long dashes`, () => {
		for (const [he, tr] of Object.entries(t))
			assert.ok(!/—|–|--/.test(tr) || /—|–|--/.test(he), `long dash in: ${tr.slice(0, 60)}`);
	});

	test(`${lang}: mark-all texts keep their token count`, async () => {
		for (const he of await hebrewMarkAllTexts())
			if (t[he]) assert.equal(words(t[he]), words(he), `token count differs: ${he.slice(0, 60)}`);
	});
}
