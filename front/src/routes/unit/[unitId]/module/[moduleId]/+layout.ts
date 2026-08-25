import { error } from '@sveltejs/kit';
import { getModule } from '$lib/curriculum';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = ({ params, parent }) => {
	const mod = getModule(params.moduleId);
	if (!mod) error(404, 'המודול המבוקש לא נמצא');
	return { mod };
};
