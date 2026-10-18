import { error } from '@sveltejs/kit';
import { i18n } from '$lib/i18n/index.svelte';
import { getDecks } from '$lib/deck';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent }) => {
	const { mod } = await parent();
	const decks = getDecks(mod.id);
	if (!decks) error(404, i18n.dict.error.noDeck);
	return { decks };
};
