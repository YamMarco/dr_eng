import { error } from '@sveltejs/kit';

// Hidden for now: the organizations page is kept in code but not served.
// Organizations reach us by email from the /plans enterprise card.
// To restore: delete this file and re-add the nav/footer links in (site)/+layout.svelte.
export const prerender = false;

export const load = () => {
	error(404);
};
