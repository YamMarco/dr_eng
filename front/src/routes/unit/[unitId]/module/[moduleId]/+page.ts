import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, parent }) => {
	const { mod } = await parent();

	if (mod.sections.length === 1) {
		redirect(307, `/unit/${params.unitId}/module/${params.moduleId}/section/${mod.sections[0].id}`);
	}

	return {};
};
