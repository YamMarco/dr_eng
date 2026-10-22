import { error } from '@sveltejs/kit';
import { getDecks } from '$lib/deck';
import type { PageLoad } from './$types';

// One word list's editor: /edit-words?deck=e-a&unit=4 (unit = the words page to go back to).
export const ssr = false;

export const load: PageLoad = ({ url }) => {
	const deck = getDecks('e')?.find((d) => d.id === url.searchParams.get('deck'));
	if (!deck) error(404, 'אין רשימה כזאת');
	const unit = url.searchParams.get('unit') ?? '';
	return { deck, back: /^\d+$/.test(unit) ? `/app/unit/${unit}/module/e/words` : '/app' };
};
