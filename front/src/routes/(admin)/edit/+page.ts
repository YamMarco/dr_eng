import { dev } from '$app/environment';
import type { PageLoad } from './$types';

// Dev-flavoured authoring workspace. Query params seed the initial selection:
//   /edit?section=c-1&lesson=l06&round=2&screen=1
export const load: PageLoad = ({ url }) => {
	const num = (k: string, d: number) => {
		const v = Number(url.searchParams.get(k));
		return Number.isFinite(v) ? v : d;
	};
	return {
		dev,
		section: url.searchParams.get('section') ?? 'c-1',
		lesson: url.searchParams.get('lesson') ?? '',
		round: num('round', 0),
		screen: num('screen', -1)
	};
};
