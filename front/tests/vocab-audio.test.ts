import { test } from 'node:test';
import assert from 'node:assert/strict';
import { vocabAudioKey } from '../src/lib/vocabAudio.ts';

test('vocab audio key: lower-case words joined by dashes, markup and punctuation dropped', () => {
	assert.equal(vocabAudioKey('Look forward to'), 'look-forward-to');
	assert.equal(vocabAudioKey('increase / decrease'), 'increase-decrease');
	assert.equal(vocabAudioKey('**Who cares?**'), 'who-cares');
	assert.equal(vocabAudioKey('volunteer(s)'), 'volunteer-s');
	assert.equal(vocabAudioKey('...'), '');
});
