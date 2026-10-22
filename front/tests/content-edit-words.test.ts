// /edit-words saves: patching a word list file and the Arabic meanings.
// Run: npm test.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import prettier from 'prettier';
import { patchGlosses, patchWordList } from '../src/lib/content-edit/wordsFile.ts';

const format = async (src: string, path: string) =>
	prettier.format(src, {
		...((await prettier.resolveConfig(path)) ?? {}),
		parser: 'typescript'
	});

test('an empty patch leaves every list file as it is', async () => {
	for (const letter of ['a', 'b', 'c', 'd']) {
		const path = `src/lib/content/e/list-${letter}.ts`;
		const raw = readFileSync(path, 'utf8');
		assert.equal(await format(patchWordList(raw, `list${letter.toUpperCase()}`, []), path), raw);
	}
});

test('a patch changes only that word, keeping word, pos and form', async () => {
	const path = 'src/lib/content/e/list-a.ts';
	const raw = readFileSync(path, 'utf8');
	const out = await format(
		patchWordList(raw, 'listA', [
			{ id: 'advertising', defEn: 'ads', he: "פרסום'", exampleEn: "It's **advertising**." }
		]),
		path
	);
	assert.match(
		out,
		/'advertising',\s*'noun',\s*'ads',\s*"פרסום'",\s*"It's \*\*advertising\*\*\.",\s*'-'/
	);
	// Patching the original text back restores the file exactly: nothing else moved.
	const original = {
		id: 'advertising',
		defEn: 'telling people about products so that they buy them',
		he: 'פרסום',
		exampleEn: 'Companies spend millions on **advertising**.'
	};
	assert.equal(await format(patchWordList(out, 'listA', [original]), path), raw);
});

test('an unknown word is refused', () => {
	const raw = readFileSync('src/lib/content/e/list-a.ts', 'utf8');
	assert.throws(() =>
		patchWordList(raw, 'listA', [{ id: 'nope', defEn: 'x', he: 'x', exampleEn: '**x**' }])
	);
});

test('Arabic: set, replace and clear by id', async () => {
	const path = 'src/lib/content/e/words.ar.ts';
	const raw = readFileSync(path, 'utf8');
	assert.equal(await format(patchGlosses(raw, 'eGlossAr', {}), path), raw);
	const out = await format(patchGlosses(raw, 'eGlossAr', { acquire: '', addition: 'إضافة' }), path);
	assert.doesNotMatch(out, /\bacquire:/);
	assert.match(out, /addition: 'إضافة'/);
	assert.match(out, /barrier: 'حاجز'/);
});
