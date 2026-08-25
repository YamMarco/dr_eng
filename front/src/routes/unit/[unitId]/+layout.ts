import { error } from '@sveltejs/kit';
import { getUnitGroup } from '$lib/curriculum';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = ({ params }) => {
	const group = getUnitGroup(params.unitId);
	if (!group) error(404, 'רמת היחידות המבוקשת לא נמצאה');
	return { group };
};
