// LLM client (OpenAI-compatible HTTP). Callers pick a role, not a vendor; the
// role's models and their order are in llmModels.ts. Vercel AI Gateway first,
// Gemini's own API as the safety net while the gateway is new.
import { env } from '$env/dynamic/private';
import type { z } from 'zod';
import { llmTargets, type LlmRole } from './llmModels';

export type { LlmRole };

export interface LlmResult {
	text: string;
	/** The model that actually answered (differs from the role's first choice after a fallback). */
	model: string;
	inputTokens: number;
	outputTokens: number;
}

const keys = () => ({ gateway: env.AI_GATEWAY_API_KEY, gemini: env.GEMINI_API_KEY });

export function llmConfigured(): boolean {
	return Boolean(env.AI_GATEWAY_API_KEY || env.GEMINI_API_KEY);
}

type ChatOptions = {
	role: LlmRole;
	system: string;
	user: string;
	image?: string;
	audio?: string;
	json?: boolean;
	maxTokens?: number;
};

/**
 * One system + user turn. `json` asks for a JSON object back (the caller parses and validates it).
 * `image` (a data: URL) is sent alongside `user` for vision roles, `audio` (base64 WAV) for
 * listening roles.
 */
export async function chat(opts: ChatOptions): Promise<LlmResult> {
	const targets = llmTargets(opts.role, keys());
	if (!targets.length) throw new Error('LLM is not configured');
	const body = (model: string) =>
		JSON.stringify({
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
						: opts.audio
							? [
									{ type: 'text', text: opts.user },
									{ type: 'input_audio', input_audio: { data: opts.audio, format: 'wav' } }
								]
							: opts.user
				}
			],
			max_tokens: opts.maxTokens ?? 1500,
			...(opts.json && { response_format: { type: 'json_object' } })
		});
	const calls = targets.flatMap((t) => t.models.map((model) => ({ ...t, model })));
	let res: Response | undefined;
	let failure = '';
	// Everything overloaded: one more round after a short wait (exam submits fire ~10 calls at once).
	for (const [i, call] of [...calls, ...calls].entries()) {
		if (i === calls.length) await new Promise((r) => setTimeout(r, 2000));
		try {
			res = await fetch(`${call.url}/chat/completions`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${call.key}` },
				body: body(call.model),
				signal: AbortSignal.timeout(60_000)
			});
		} catch (e) {
			failure = `${call.model}: ${e instanceof Error ? e.message : e}`;
			console.warn(`${opts.role}: ${failure}`);
			continue;
		}
		if (res.ok) break;
		failure = `${call.model} ${res.status}: ${(await res.text()).slice(0, 300)}`;
		// The gateway is new: any failure there moves on (next model, then Gemini direct).
		// Direct, only overloaded or rate-limited does; anything else is final.
		if (call.gateway || res.status === 429 || res.status >= 500) {
			console.warn(`${opts.role}: ${failure}`);
			continue;
		}
		break;
	}
	if (!res?.ok) throw new Error(`LLM error ${failure}`);
	const data = await res.json();
	return {
		text: data.choices?.[0]?.message?.content ?? '',
		model: data.model ?? opts.role,
		inputTokens: data.usage?.prompt_tokens ?? 0,
		outputTokens: data.usage?.completion_tokens ?? 0
	};
}

/**
 * `chat` with a JSON reply validated against `schema` (LLM output is untrusted).
 * A cut-off, malformed or off-schema reply gets one more try; so does a valid first
 * reply that `retryIf` rejects (the second one is then accepted as is).
 */
export async function chatJson<S extends z.ZodType>(
	opts: Omit<ChatOptions, 'json'>,
	schema: S,
	retryIf?: (reply: z.output<S>) => boolean
): Promise<z.output<S>> {
	for (let attempt = 0; ; attempt++) {
		const result = await chat({ ...opts, json: true });
		console.info(
			`${opts.role}: ${result.model} in=${result.inputTokens} out=${result.outputTokens}`
		);
		try {
			const reply = schema.parse(JSON.parse(result.text));
			if (attempt === 0 && retryIf?.(reply)) continue;
			return reply;
		} catch (e) {
			if (attempt > 0) throw e;
		}
	}
}
