import { dev } from '$app/environment';
import { getLesson } from '$lib/content';
import { getModule } from '$lib/curriculum';
import { ownerModule } from '$lib/content/rules';
import type { PageLoad } from './$types';

// Dev-flavoured authoring workspace for one module's lesson map. Query params
// seed the module and the initial selection:
//   /edit?module=cobe
//   /edit?section=c-1&lesson=c-l06&round=2&screen=1  (module = the section's owner)
export const load: PageLoad = ({ url }) => {
	const lesson = url.searchParams.get('lesson') ?? '';
	const section = url.searchParams.get('section') ?? getLesson(lesson)?.section;
	const requested = url.searchParams.get('module');
	const num = (k: string, d: number) => {
		const v = Number(url.searchParams.get(k));
		return Number.isFinite(v) ? v : d;
	};
	return {
		dev,
		module: (requested && getModule(requested)?.id) || (section && ownerModule(section)) || 'c',
		lesson,
		round: num('round', 0),
		screen: num('screen', -1)
	};
};
