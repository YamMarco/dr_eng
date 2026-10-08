// Client for the LiteLLM proxy in /llm-gateway (OpenAI-compatible HTTP).
// Callers pick a role from config.yaml, not a vendor.
// Without a gateway (the Vercel MVP), falls back to Gemini's own
// OpenAI-compatible endpoint with GEMINI_API_KEY: same request, and the
// next model in GEMINI_MODELS is tried when one is overloaded.
import { env } from '$env/dynamic/private';

export type LlmRole = 'grade-short' | 'grade-essay' | 'ocr';

export interface LlmResult {
	text: string;
	/** The model that actually answered (differs from the role's first choice after a fallback). */
	model: string;
	inputTokens: number;
	outputTokens: number;
}

const GEMINI_URL = 'https://generativelanguage.googleapis.com/v1beta/openai';
// Direct mode only; keep in step with llm-gateway/config.yaml.
const GEMINI_MODELS: Record<LlmRole, string[]> = {
	'grade-short': ['gemini-3.1-flash-lite', 'gemini-3.5-flash-lite'],
	'grade-essay': ['gemini-3.8-flash', 'gemini-3.5-flash'],
	ocr: ['gemini-3.8-flash', 'gemini-3.5-flash']
};

function endpoint(role: LlmRole): { url: string; key: string; models: string[] } | undefined {
	if (env.LLM_GATEWAY_URL && env.LLM_GATEWAY_KEY)
		return {
			url: `${env.LLM_GATEWAY_URL.replace(/\/$/, '')}/v1`,
			key: env.LLM_GATEWAY_KEY,
			models: [role] // the gateway does its own fallbacks
		};
	if (env.GEMINI_API_KEY)
		return { url: GEMINI_URL, key: env.GEMINI_API_KEY, models: GEMINI_MODELS[role] };
}

export function llmConfigured(): boolean {
	return Boolean(env.LLM_GATEWAY_URL && env.LLM_GATEWAY_KEY) || Boolean(env.GEMINI_API_KEY);
}

/**
 * One system + user turn. `json` asks for a JSON object back (the caller parses and validates it).
 * `image` (a data: URL) is sent alongside `user` for vision roles.
 */
export async function chat(opts: {
	role: LlmRole;
	system: string;
	user: string;
	image?: string;
	json?: boolean;
	maxTokens?: number;
}): Promise<LlmResult> {
	const target = endpoint(opts.role);
	if (!target) throw new Error('LLM is not configured');
	let res!: Response;
	for (const model of target.models) {
		res = await fetch(`${target.url}/chat/completions`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${target.key}` },
			body: JSON.stringify({
				model,
				messages: [
					{ role: 'system', content: opts.system },
					{
						role: 'user',
						content: opts.image
							? [
									{ type: 'text', text: opts.user },
									{ type: 'image_url', image_url: { url: opts.image } }
								]
							: opts.user
					}
				],
				max_tokens: opts.maxTokens ?? 1500,
				...(opts.json && { response_format: { type: 'json_object' } })
			}),
			signal: AbortSignal.timeout(60_000)
		});
		// Overloaded or rate-limited: try the next model; anything else is final.
		if (res.status !== 429 && res.status < 500) break;
	}
	if (!res.ok) throw new Error(`LLM error ${res.status}: ${(await res.text()).slice(0, 300)}`);
	const data = await res.json();
	return {
		text: data.choices?.[0]?.message?.content ?? '',
		model: data.model ?? opts.role,
		inputTokens: data.usage?.prompt_tokens ?? 0,
		outputTokens: data.usage?.completion_tokens ?? 0
	};
}
