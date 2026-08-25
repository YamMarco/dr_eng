import { error } from '@sveltejs/kit';
import { getSection } from '$lib/curriculum';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ params, parent }) => {
	const { mod } = await parent();
	const section = getSection(mod, params.sectionId);
	if (!section) error(404, 'החלק המבוקש לא נמצא');
	return { section };
};
