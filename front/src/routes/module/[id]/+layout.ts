import { error } from '@sveltejs/kit';
import { getModule } from '$lib/modules';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = ({ params }) => {
	const mod = getModule(params.id);
	if (!mod) error(404, 'המודול המבוקש לא נמצא');
	return { module: mod };
};
