import { error } from '@sveltejs/kit';
import { getLesson } from '$lib/lessons';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const lessonId = Number(params.lessonId);
	const lesson = Number.isFinite(lessonId) ? getLesson(params.moduleId, lessonId) : undefined;
	if (!lesson) error(404, 'השיעור המבוקש לא נמצא');
	return { lesson };
};
