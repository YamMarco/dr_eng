// Client for the LiteLLM proxy in /llm-gateway (OpenAI-compatible HTTP).
// Callers pick a role from config.yaml, not a vendor.
import { env } from '$env/dynamic/private';

export type LlmRole = 'grade-short' | 'grade-essay' | 'ocr';

export interface LlmResult {
	text: string;
	/** The model that actually answered (differs from the role's first choice after a fallback). */
	model: string;
	inputTokens: number;
	outputTokens: number;
}

export function llmConfigured(): boolean {
	return Boolean(env.LLM_GATEWAY_URL && env.LLM_GATEWAY_KEY);
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
	if (!llmConfigured()) throw new Error('LLM gateway is not configured');
	const res = await fetch(`${env.LLM_GATEWAY_URL!.replace(/\/$/, '')}/v1/chat/completions`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${env.LLM_GATEWAY_KEY}` },
		body: JSON.stringify({
			model: opts.role,
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
	if (!res.ok) throw new Error(`LLM gateway error ${res.status}`);
	const data = await res.json();
	return {
		text: data.choices?.[0]?.message?.content ?? '',
		model: data.model ?? opts.role,
		inputTokens: data.usage?.prompt_tokens ?? 0,
		outputTokens: data.usage?.completion_tokens ?? 0
	};
}
