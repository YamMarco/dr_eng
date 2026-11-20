import { error } from '@sveltejs/kit';
import { i18n } from '$lib/i18n/index.svelte';
import { loadDecks } from '$lib/deck/load';
import type { PageLoad } from './$types';

// The words load here, on entering the page (the shell only has their ids).
export const load: PageLoad = async ({ parent }) => {
	const { mod } = await parent();
	const loaded = await loadDecks(mod.id);
	if (!loaded) error(404, i18n.dict.error.noDeck);
	return loaded;
};
