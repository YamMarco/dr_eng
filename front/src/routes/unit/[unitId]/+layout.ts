import { error } from '@sveltejs/kit';
import { i18n } from '$lib/i18n/index.svelte';
import { getUnitGroup } from '$lib/curriculum';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = ({ params }) => {
	const group = getUnitGroup(params.unitId);
	if (!group) error(404, i18n.dict.error.unitNotFound);
	return { group };
};
