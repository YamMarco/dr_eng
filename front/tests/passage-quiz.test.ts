// Lesson typed reading answers: keyword fallback and the LLM verdict mapping.
// Run: npm test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { keywordMatch, quizResults, readingRequest } from '../src/lib/lesson-screens/passageQuiz.ts';
import type { PassageQuizScreen } from '../src/lib/lesson-screens/types.ts';

const screen: PassageQuizScreen = {
	type: 'passage-quiz',
	text: 'Birds near roads changed the pitch of their calls.',
	questions: [
		{ prompt: 'What did Rosen discover?', keywords: ['chang|higher'], answerHint: 'They changed their calls.' },
		{ prompt: 'TWO advantages?', keywords: ['money', 'waste'], answerHint: 'Money and waste.' }
	]
};

test('keywords: all required, a|b alternatives, case and punctuation ignored', () => {
	assert.equal(keywordMatch('They use HIGHER sounds.', ['chang|higher']), true);
	assert.equal(keywordMatch('They sing louder', ['chang|higher']), false);
	assert.equal(keywordMatch('saves money', ['money', 'waste']), false);
	assert.equal(keywordMatch('saves money, less waste', ['money', 'waste']), true);
	// a typed "|" is not an alternative
	assert.equal(keywordMatch('x|chang', ['higher']), false);
});

test('request: passage once, 2 points per answer, hint as notes', () => {
	const req = readingRequest(screen, [' a ', 'b']);
	assert.equal(req.passage, screen.text);
	assert.deepEqual(
		req.items.map((it) => [it.id, it.points, it.text]),
		[
			['q1', 2, 'a'],
			['q2', 2, 'b']
		]
	);
	assert.match(req.items[0].notes!, /They changed their calls/);
});

test('verdict: full points only; missing answer or no verdict falls back to keywords', () => {
	const answers = ['higher calls', 'money'];
	assert.deepEqual(
		quizResults(screen, answers, null).map((r) => r.correct),
		[true, false]
	);
	const verdict = {
		answers: [{ id: 'q1', score: 1, marks: [{ span: '', tag: 'incomplete' }, { span: 'x', tag: 'tense' }] }]
	};
	const r = quizResults(screen, answers, verdict);
	assert.deepEqual(r[0], { correct: false, tags: ['incomplete'] });
	assert.deepEqual(r[1], { correct: false, tags: [] });
});
