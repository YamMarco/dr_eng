import { error } from '@sveltejs/kit';
import { i18n } from '$lib/i18n/index.svelte';
import { getQuiz } from '$lib/quizzes';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const quiz = getQuiz(params.quizId);
	if (!quiz || quiz.moduleId !== params.moduleId) error(404, i18n.dict.error.examNotFound);
	return { quiz };
};
