// LLM routing: gateway first, then Gemini direct with its google/ models.
// Run: npm test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { LLM_MODELS, llmTargets, type LlmRole } from '../src/lib/server/llmModels.ts';

test('gateway first, then Gemini direct without the vendor prefix', () => {
	const t = llmTargets('grade-essay', { gateway: 'g', gemini: 'k' });
	assert.deepEqual(
		t.map((x) => [x.gateway, x.models]),
		[
			[true, ['google/gemini-3.8-flash', 'google/gemini-3.5-flash']],
			[false, ['gemini-3.8-flash', 'gemini-3.5-flash']]
		]
	);
});

test('one key is enough; none means not configured', () => {
	assert.deepEqual(
		llmTargets('ocr', { gemini: 'k' }).map((x) => x.gateway),
		[false]
	);
	assert.deepEqual(
		llmTargets('ocr', { gateway: 'g' }).map((x) => x.gateway),
		[true]
	);
	assert.equal(llmTargets('ocr', {}).length, 0);
});

test('Google models only (the privacy policy names no other AI provider)', () => {
	for (const role of Object.keys(LLM_MODELS) as LlmRole[])
		for (const model of LLM_MODELS[role]) assert.ok(model.startsWith('google/'), model);
});
