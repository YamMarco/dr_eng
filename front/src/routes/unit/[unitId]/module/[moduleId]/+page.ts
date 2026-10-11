import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

// Merged into the home dashboard (modules, tracks and exams all live there).
export const load: PageLoad = () => {
	redirect(307, '/');
};
