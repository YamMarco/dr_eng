// Mixed Hebrew/English text: each run carries its own lang (screen-reader voice).
// Run: npm test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mdInline } from '../src/lib/lesson-screens/miniMarkdown.ts';

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
