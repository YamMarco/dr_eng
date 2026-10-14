import { error } from '@sveltejs/kit';
import { i18n } from '$lib/i18n/index.svelte';
import { getModule } from '$lib/curriculum';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = ({ params, parent }) => {
	const mod = getModule(params.moduleId);
	if (!mod) error(404, i18n.dict.error.moduleNotFound);
	return { mod };
};
