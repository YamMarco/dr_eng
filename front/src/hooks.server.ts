import { redirect, type Handle } from '@sveltejs/kit';

// The app moved under /app; old bookmarks and installed shortcuts land there.
const MOVED = /^\/(unit|settings|streak|book)(\/|$)/;

export const handle: Handle = async ({ event, resolve }) => {
	const { pathname } = event.url;
	// url.search is off-limits while prerendering, so only read it on a match.
	if (MOVED.test(pathname)) redirect(308, `/app${pathname}${event.url.search}`);
	return resolve(event);
};
