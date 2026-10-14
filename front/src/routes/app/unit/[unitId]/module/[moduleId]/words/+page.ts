import { error } from '@sveltejs/kit';
import { i18n } from '$lib/i18n/index.svelte';
import { getDeck } from '$lib/deck';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent }) => {
	const { mod } = await parent();
	const words = getDeck(mod.id);
	if (!words) error(404, i18n.dict.error.noDeck);
	return { words };
};
