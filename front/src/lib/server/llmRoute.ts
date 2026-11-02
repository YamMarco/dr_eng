// The shell every LLM endpoint shares: configured -> parse the request -> guardLlm (auth, plan,
// the activity's quotas) -> run -> JSON. The activity comes from the parsed request, so the
// call is charged for what actually runs. An HTTP error thrown on purpose (401, 429, 400...)
// is logged as a warning and passed on; any other failure is logged and becomes a 502.
import { error, isHttpError, json, type RequestEvent, type RequestHandler } from '@sveltejs/kit';
import type { z } from 'zod';
import { llmConfigured } from './llm';
import { guardLlm } from './llmGuard';
import type { Activity } from './llmLimits';

export function llmRoute<T>(route: {
	failure: string;
	parse: (event: RequestEvent) => Promise<T>;
	activity: Activity | ((req: T) => Activity);
	run: (req: T) => Promise<unknown>;
}): RequestHandler {
	const { failure, parse, activity, run } = route;
	return async (event) => {
		try {
			if (!llmConfigured()) throw error(503, 'LLM is not configured');
			const req = await parse(event);
			const charged = typeof activity === 'function' ? activity(req) : activity;
			await guardLlm(event.locals, event.getClientAddress(), charged);
			return json(await run(req));
		} catch (e) {
			if (isHttpError(e)) {
				// A rejection (auth, plan, quota, bad body) leaves no other trace in the logs.
				console.warn(`${event.url.pathname}: ${e.status} ${e.body.message}`);
				throw e;
			}
			console.error(`${failure}:`, e);
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
