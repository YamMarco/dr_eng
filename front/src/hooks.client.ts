import * as Sentry from '@sentry/sveltekit';
import { MOBILE_BUILD } from '$lib/platform';
import { sentryOptions } from '$lib/sentry';

const host = location.hostname;
Sentry.init(
	sentryOptions(
		MOBILE_BUILD
			? 'mobile'
			: host === 'www.engup.co.il'
				? 'production'
				: host === 'dev.engup.co.il'
					? 'dev'
					: 'local'
	)
);

export const handleError = Sentry.handleErrorWithSentry();
