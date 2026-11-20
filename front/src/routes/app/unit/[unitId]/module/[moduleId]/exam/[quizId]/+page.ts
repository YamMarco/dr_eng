import { error } from '@sveltejs/kit';
import { i18n } from '$lib/i18n/index.svelte';
import { getQuiz } from '$lib/quizzes';
import { loadQuizNode } from '$lib/quiz/load';
import type { PageLoad } from './$types';

// The exam's content loads here, on entering its page (the shell only has the list).
export const load: PageLoad = async ({ params }) => {
	const quiz = getQuiz(params.quizId);
	if (!quiz || quiz.moduleId !== params.moduleId) error(404, i18n.dict.error.examNotFound);
	const node = await loadQuizNode(quiz.id);
	if (!node) error(404, i18n.dict.error.examNotFound);
	return { quiz, node };
};
