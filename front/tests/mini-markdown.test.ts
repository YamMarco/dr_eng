// Mini-markdown: lang runs in mixed text; teaching text as blocks (auto reading cards, merged boxes).
// Run: npm test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mdBlock, mdInline } from '../src/lib/lesson-screens/miniMarkdown.ts';

test('mixed text: each language run gets its lang', () => {
	assert.equal(
		mdInline('המילה **however** היא מילת ניגוד'),
		'<span lang="he">המילה</span> <strong><span lang="en">however</span></strong> <span lang="he">היא מילת ניגוד</span>'
	);
});

test('single-language text is untouched; entities and attributes survive', () => {
	assert.equal(mdInline("Don't stop."), 'Don&#39;t stop.');
	assert.equal(mdInline('רק עברית.'), 'רק עברית.');
	assert.equal(
		mdInline('ראו [link](https://a.co/x_y) & זהו'),
		'<span lang="he">ראו</span> <a href="https://a.co/x_y" target="_blank" rel="noopener noreferrer" class="underline"><span lang="en">link</span></a> &amp; <span lang="he">זהו</span>'
	);
});

test('teaching text: English-only sentences become one merged reading card', () => {
	const html = mdBlock(
		'קראו:\nDogs are popular pets.\nThey came from wolves.\nforests → destroyed',
		{
			cards: true
		}
	);
	assert.equal(html.match(/data-p="text"/g)?.length, 1);
	assert.match(html, /data-p="text"><div dir="auto" lang="en">Dogs are popular pets\.<\/div><div/);
	assert.doesNotMatch(html, /data-p="text"[^>]*>forests/);
});

test('mixed lines, prompts and the editor are left as they are', () => {
	const mixed = 'השאלה: When were dogs first tamed? - מה המילה?';
	assert.equal(mdBlock(mixed, { cards: true }), mdBlock(mixed));
	assert.doesNotMatch(mdBlock('Dogs are popular pets.'), /data-p/);
	const edit = mdBlock('{p:text}One two three.\n{p:text}Four five six.', {
		cards: true,
		edit: true
	});
	assert.equal(edit.match(/data-p="text"/g)?.length, 2);
});

test('a reading card is an English sentence only: starts and ends in English, nothing else', () => {
	const card = (line: string) => /data-p="text"/.test(mdBlock(line, { cards: true }));
	for (const yes of ['Dogs are popular pets.', '*What should change…?*', '"What does it mean?"'])
		assert.ok(card(yes), yes);
	for (const no of [
		'1. **Complete the sentence**: People left the island.',
		'started a project',
		'look up → search.',
		'Find the word. רמז: כאן.',
		'Why was it built? (paragraph 2)'
	])
		assert.ok(!card(no), no);
});
