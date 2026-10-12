import { error } from '@sveltejs/kit';
import { getDeck } from '$lib/deck';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent }) => {
	const { mod } = await parent();
	const words = getDeck(mod.id);
	if (!words) error(404, 'אין אוצר מילים למודול הזה');
	return { words };
};
