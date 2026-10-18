import { error } from '@sveltejs/kit';
import { i18n } from '$lib/i18n/index.svelte';
import type { PageLoad } from './$types';

// The AI chat belongs to the oral exam module only.
export const load: PageLoad = async ({ parent }) => {
	const { mod } = await parent();
	if (mod.id !== 'cobe') error(404, i18n.dict.error.moduleNotFound);
	return {};
};
