// Every file the editor saves into must be a plain literal it can evaluate
// (no top-level consts or imports used inside it). Word lists: content-edit-words.test.ts.
// Run: npm test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import {
	extractArrayLiteral,
	parseArrayLiteral,
	splitArrayHead
} from '../src/lib/content-edit/fileEmit.ts';

const lib = new URL('../src/lib/', import.meta.url).pathname;
const dirs = (p: string) =>
	readdirSync(lib + p, { withFileTypes: true })
		.filter((d) => d.isDirectory())
		.map((d) => d.name);

const files: [string, string][] = [];
for (const m of dirs('content'))
	for (const f of readdirSync(`${lib}content/${m}`)) {
		const id = /^([a-z]+)-(\d+)\.ts$/.exec(f);
		if (id) files.push([`content/${m}/${f}`, `${id[1]}${id[2]}Lessons`]);
	}
for (const m of dirs('quiz'))
	if (existsSync(`${lib}quiz/${m}/index.ts`)) files.push([`quiz/${m}/index.ts`, `${m}Quizzes`]);

for (const [path, name] of files)
	test(`editor can parse ${path}`, () => {
		const raw = readFileSync(lib + path, 'utf8');
		const { arrayText } = extractArrayLiteral(raw, splitArrayHead(raw, name));
		assert.ok(Array.isArray(parseArrayLiteral(arrayText)));
	});

test('editor can parse i18n/locales/titles.he.ts', () => {
	const raw = readFileSync(`${lib}i18n/locales/titles.he.ts`, 'utf8');
	const open = raw.indexOf('{', raw.indexOf('export const titlesHe'));
	const close = raw.lastIndexOf('}');
	const [titles] = parseArrayLiteral(`[${raw.slice(open, close + 1)}]`);
	assert.equal(typeof titles, 'object');
});
