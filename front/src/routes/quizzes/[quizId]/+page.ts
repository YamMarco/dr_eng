import { error } from '@sveltejs/kit';
import { getQuiz } from '$lib/quizzes';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const quiz = getQuiz(params.quizId);
	if (!quiz) error(404, 'המבחן המבוקש לא נמצא');
	return { quiz };
};
