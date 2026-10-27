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
			[true, ['google/gemini-3.8-flash', 'anthropic/claude-sonnet-5.5']],
			[false, ['gemini-3.8-flash']]
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

test('every role starts on Gemini, so the direct safety net always applies', () => {
	for (const role of Object.keys(LLM_MODELS) as LlmRole[])
		assert.ok(LLM_MODELS[role][0].startsWith('google/'), role);
});
