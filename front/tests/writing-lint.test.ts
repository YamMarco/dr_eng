// Word-bank matching for writing tasks.
// Run: npm test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { usesWord } from '../src/lib/lesson-screens/writingLint.ts';

test('bank entries: whole words, and entries ending in punctuation', () => {
	assert.equal(usesWord('Second, phones distract us.', 'Second,'), true);
	assert.equal(usesWord('In conclusion, a ban helps.', 'In conclusion,'), true);
	assert.equal(usesWord('It is a function.', 'fun'), false);
	assert.equal(usesWord('I travel a lot', 'travel / לטייל'), true);
	assert.equal(usesWord('Some people  argue that', 'Some people argue that'), true);
});
