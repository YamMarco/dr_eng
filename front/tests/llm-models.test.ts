// LLM routing: gateway first, then OpenAI direct with its openai/ models.
// Run: npm test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { LLM_MODELS, llmTargets, type LlmRole } from '../src/lib/server/llmModels.ts';

test('gateway first, then OpenAI direct without the vendor prefix', () => {
	const t = llmTargets('grade-essay', { gateway: 'g', openai: 'k' });
	assert.deepEqual(
		t.map((x) => [x.gateway, x.models]),
		[
			[true, ['openai/gpt-6.1-terra']],
			[false, ['gpt-6.1-terra']]
		]
	);
});

test('one key is enough; none means not configured', () => {
	assert.deepEqual(
		llmTargets('ocr', { openai: 'k' }).map((x) => x.gateway),
		[false]
	);
	assert.deepEqual(
		llmTargets('ocr', { gateway: 'g' }).map((x) => x.gateway),
		[true]
	);
	assert.equal(llmTargets('ocr', {}).length, 0);
});

test('a role without a model has no target (COBE today)', () => {
	assert.equal(llmTargets('grade-speaking', { gateway: 'g', openai: 'k' }).length, 0);
});

test('OpenAI models only (the privacy policy names no other AI provider)', () => {
	for (const role of Object.keys(LLM_MODELS) as LlmRole[])
		for (const model of LLM_MODELS[role]) assert.ok(model.startsWith('openai/'), model);
});
