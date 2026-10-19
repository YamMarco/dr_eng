// The shell every LLM endpoint shares: configured -> guardLlm (auth, plan, quotas) ->
// the handler -> JSON. A failure that isn't an HTTP error the handler threw on purpose
// (400, 413...) is logged and becomes a 502.
import * as Sentry from '@sentry/sveltekit';
import { error, isHttpError, json, type RequestEvent, type RequestHandler } from '@sveltejs/kit';
import type { z } from 'zod';
import { llmConfigured } from './llm';
import { guardLlm } from './llmGuard';

export function llmRoute(
	failure: string,
	handle: (event: RequestEvent) => Promise<unknown>
): RequestHandler {
	return async (event) => {
		if (!llmConfigured()) throw error(503, 'LLM is not configured');
		await guardLlm(event.locals, event.getClientAddress());
		try {
			return json(await handle(event));
		} catch (e) {
			if (isHttpError(e)) throw e;
			console.error(`${failure}:`, e);
			Sentry.captureException(e);
			throw error(502, failure);
		}
	};
}

/** The request's JSON body validated against `schema`, or a 400. */
export async function jsonBody<S extends z.ZodType>(
	request: Request,
	schema: S
): Promise<z.output<S>> {
	const parsed = schema.safeParse(await request.json().catch(() => null));
	if (!parsed.success) throw error(400, 'bad request');
	return parsed.data;
}
