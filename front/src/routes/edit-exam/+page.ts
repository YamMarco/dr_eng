import { dev } from '$app/environment';
import type { PageLoad } from './$types';

// Dev-flavoured exam-authoring workspace, scoped to one module. Query params
// seed the initial selection: /edit-exam?module=c&exam=module-c-exam-3
export const load: PageLoad = ({ url }) => {
	return {
		dev,
		module: url.searchParams.get('module') ?? 'c',
		exam: url.searchParams.get('exam') ?? ''
	};
};
