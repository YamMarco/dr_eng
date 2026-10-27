// Which models each LLM role uses, in fallback order: swapping or reordering a
// model is an edit here. Prompts live next to it in prompts/<role>.md.
// Names are Vercel AI Gateway ids (`<vendor>/<model>`); `google/` ones also run on
// Gemini's own API, the safety net while the gateway is new.
//
// PRICES (Oct 2026, per 1M tokens in / out): gemini-3.8-flash 0.75 / 3.75 is an intro
// rate that doubles to 1.50 / 7.50 on 2027-01-01 (COBE cost ~x2); gemini-3.1-flash-lite
// 0.25 / 1.50; gpt-5.4-nano 0.20 / 1.25. Re-check before 2027; cheaper option then:
// chat-speaking on a flash-lite model.

export type LlmRole =
	'grade-short' | 'grade-reading' | 'grade-essay' | 'grade-speaking' | 'chat-speaking' | 'ocr';

export const LLM_MODELS: Record<LlmRole, string[]> = {
	'grade-short': [
		'google/gemini-3.1-flash-lite',
		'google/gemini-3.5-flash-lite',
		'openai/gpt-5.4-nano'
	],
	'grade-reading': [
		'google/gemini-3.1-flash-lite',
		'google/gemini-3.5-flash-lite',
		'openai/gpt-5.4-nano'
	],
	'grade-essay': ['google/gemini-3.8-flash', 'anthropic/claude-sonnet-5.5'],
	// audio in: Gemini only
	'grade-speaking': ['google/gemini-3.8-flash', 'google/gemini-3.5-flash'],
	'chat-speaking': ['google/gemini-3.8-flash', 'google/gemini-3.5-flash'],
	ocr: ['google/gemini-3.8-flash', 'anthropic/claude-sonnet-5.5']
};

export const GATEWAY_URL = 'https://ai-gateway.vercel.sh/v1';
export const GEMINI_URL = 'https://generativelanguage.googleapis.com/v1beta/openai';

export type LlmTarget = { url: string; key: string; models: string[]; gateway: boolean };

/** Where to send a role's call, in order: the gateway, then Gemini direct (its `google/` models). */
export function llmTargets(
	role: LlmRole,
	keys: { gateway?: string; gemini?: string }
): LlmTarget[] {
	const models = LLM_MODELS[role];
	const gemini = models
		.filter((m) => m.startsWith('google/'))
		.map((m) => m.slice('google/'.length));
	return [
		...(keys.gateway ? [{ url: GATEWAY_URL, key: keys.gateway, models, gateway: true }] : []),
		...(keys.gemini && gemini.length
			? [{ url: GEMINI_URL, key: keys.gemini, models: gemini, gateway: false }]
			: [])
	];
}
