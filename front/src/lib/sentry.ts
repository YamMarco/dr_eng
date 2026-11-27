// Error monitoring (Sentry, EU region): errors only, no tracing, replay or feedback.
// Users are minors: nothing is collected automatically (no IP, headers, bodies, query
// strings, local variables); the server tags the account id only (hooks.server.ts).
// The DSN is public by design: it only lets clients send events to the project.
import type { BrowserOptions } from '@sentry/sveltekit';

export const SENTRY_DSN =
	'https://7c97f084986684ce7768f7379b211014@o4512270900592640.ingest.de.sentry.io/4512502164226128';
export const SENTRY_INGEST = 'https://o4512270900592640.ingest.de.sentry.io';

export const sentryOptions = (environment: string) =>
	({
		dsn: SENTRY_DSN,
		environment,
		// The dev server stays quiet; a local `npm run preview` reports as 'local'.
		enabled: !import.meta.env.DEV,
		// Console breadcrumbs can hold student text; keep clicks, navigation and fetch URLs.
		integrations: (defaults: { name: string }[]) => defaults.filter((i) => i.name !== 'Console'),
		dataCollection: {
			userInfo: false,
			cookies: false,
			httpHeaders: false,
			httpBodies: [],
			urlQueryParams: false,
			genAI: { inputs: false, outputs: false },
			databaseQueryData: false,
			stackFrameVariables: false
		}
	}) satisfies BrowserOptions;
