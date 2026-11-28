// Which models each LLM role uses, in fallback order: swapping or reordering a
// model is an edit here. Prompts live next to it in prompts/<role>.md.
// Names are Vercel AI Gateway ids (`<vendor>/<model>`); `openai/` ones also run on
// OpenAI's own API, the safety net when the gateway fails.
// The privacy policy names OpenAI as the only AI provider: another vendor needs a policy update first.
//
// PRICES (Nov 2026, per 1M tokens in / out): gpt-6-luna 0.10 / 0.50, gpt-6.1-terra 1.00 / 5.00.
// COBE (audio in) has no model yet: docs/handoffs/cobe-audio.md.

export type LlmRole =
	'grade-short' | 'grade-reading' | 'grade-essay' | 'grade-speaking' | 'chat-speaking' | 'ocr';

export const LLM_MODELS: Record<LlmRole, string[]> = {
	'grade-short': ['openai/gpt-6-luna'],
	'grade-reading': ['openai/gpt-6-luna'],
	'grade-essay': ['openai/gpt-6.1-terra'],
	'grade-speaking': [],
	'chat-speaking': [],
	ocr: ['openai/gpt-6.1-terra']
};

export const GATEWAY_URL = 'https://ai-gateway.vercel.sh/v1';
export const OPENAI_URL = 'https://api.openai.com/v1';

export type LlmTarget = { url: string; key: string; models: string[]; gateway: boolean };

/** Where to send a role's call, in order: the gateway, then OpenAI direct (its `openai/` models). */
export function llmTargets(
	role: LlmRole,
	keys: { gateway?: string; openai?: string }
): LlmTarget[] {
	const models = LLM_MODELS[role];
	const openai = models
		.filter((m) => m.startsWith('openai/'))
		.map((m) => m.slice('openai/'.length));
	return [
		...(keys.gateway && models.length
			? [{ url: GATEWAY_URL, key: keys.gateway, models, gateway: true }]
			: []),
		...(keys.openai && openai.length
			? [{ url: OPENAI_URL, key: keys.openai, models: openai, gateway: false }]
			: [])
	];
}
