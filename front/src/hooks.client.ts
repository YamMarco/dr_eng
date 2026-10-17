// Error reporting (Sentry), on web and in the mobile app. Off until VITE_SENTRY_DSN
// is set. Students are minors: no session replay or tracing (the SDK sends no PII by default).
import * as Sentry from '@sentry/sveltekit';
import { MOBILE_BUILD } from '$lib/platform';

const dsn = import.meta.env.VITE_SENTRY_DSN;
if (dsn) Sentry.init({ dsn, environment: MOBILE_BUILD ? 'mobile' : import.meta.env.MODE });

export const handleError = Sentry.handleErrorWithSentry();
