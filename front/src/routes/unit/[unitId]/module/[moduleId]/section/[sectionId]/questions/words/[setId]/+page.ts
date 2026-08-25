import { error } from '@sveltejs/kit';
import { getWordSet, wordSets } from '$lib/wordSets';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const set = getWordSet(params.setId);
	if (!set) error(404, 'הסט המבוקש לא נמצא');

	const index = wordSets.findIndex((s) => s.id === set.id);
	const next = wordSets[index + 1] ?? null;

	return { set, next };
};
