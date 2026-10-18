// COBE chat: turn counting, when a chat ends, the Part A draw, the prompt contract.
// Run: npm test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import {
	MAX_TURNS,
	MIN_TURNS,
	chatEnds,
	drawTwo,
	turnNumber,
	type ChatLine
} from '../src/lib/feedback/chat.ts';
import { mergeItems } from '../src/lib/progressMerge.ts';

const ai = (text = 'q') => ({ who: 'ai', text }) as ChatLine;
const me = (text = 'a') => ({ who: 'me', text }) as ChatLine;

test('turn number counts the turn being sent', () => {
	assert.equal(turnNumber([ai()]), 1);
	assert.equal(turnNumber([ai(), me(), ai()]), 2);
});

test('a chat always ends on its last turn, earlier only with a summary from MIN on', () => {
	assert.equal(chatEnds('banter', MAX_TURNS.banter, false, false), true);
	assert.equal(chatEnds('banter', MIN_TURNS.banter - 1, true, true), false);
	assert.equal(chatEnds('banter', MIN_TURNS.banter, true, false), false);
	assert.equal(chatEnds('banter', MIN_TURNS.banter, true, true), true);
	assert.equal(chatEnds('cobe-a', 3, true, true), false);
	assert.equal(chatEnds('cobe-b', 4, false, false), true);
});

test('drawTwo never repeats a pick', () => {
	const list = ['a', 'b', 'c'];
	for (const [x, y] of [
		[0, 0],
		[0, 0.99],
		[0.99, 0.99],
		[0.5, 0.5]
	]) {
		const r = [x, y];
		const [p, q] = drawTwo(list, () => r.shift()!);
		assert.notEqual(p, q);
		assert.ok(list.includes(p) && list.includes(q));
	}
});

test('chat count syncs as the higher number', () => {
	assert.equal(mergeItems('chat-count', { value: 3, at: 2 }, { value: 5, at: 1 }).value, 5);
	assert.equal(mergeItems('chat-count', { value: 4, at: 1 }, { value: 'x', at: 2 }).value, 4);
});

test('chat prompt: JSON contract, recasts, safety, no em dash', () => {
	const prompt = readFileSync('src/lib/server/prompts/chat-speaking.md', 'utf8');
	for (const key of [
		'"heard"',
		'"reply"',
		'"done"',
		'"summary"',
		'"strengths"',
		'"phrases"',
		'"closing"'
	])
		assert.ok(prompt.includes(key), key);
	assert.ok(prompt.includes('FINAL TURN'));
	assert.match(prompt, /recast/i);
	assert.match(prompt, /personal details/);
	assert.ok(!prompt.includes('—'));
});
