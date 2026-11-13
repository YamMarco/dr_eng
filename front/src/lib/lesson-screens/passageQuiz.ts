// Typed reading answers in a lesson (`passage-quiz`): the LLM reading grader when the
// rules allow it (`llmGrade`), else - or when it is down - the screen's keywords.
import type { ReadingRequest, ReadingVerdict } from '$lib/feedback/types';
import type { PassageQuizScreen } from './types';

/** Points per answer: 2 lets the grader give part credit, which a lesson counts as a miss. */
const POINTS = 2;

export type QuizResult = { correct: boolean; tags: string[] };

const normalize = (value: string) =>
	value
		.toLowerCase()
		.replace(/[^a-z0-9|\s]/g, ' ')
		.replace(/\s+/g, ' ')
		.trim();

/** Every keyword must appear in the answer; `a|b` = either one. */
export function keywordMatch(answer: string, keywords: string[]): boolean {
	const given = normalize(answer.replaceAll('|', ' '));
	return keywords.every((k) =>
		normalize(k)
			.split('|')
			.some((alt) => alt.trim() !== '' && given.includes(alt.trim()))
	);
}

export function readingRequest(screen: PassageQuizScreen, answers: string[]): ReadingRequest {
	return {
		kind: 'reading',
		passage: screen.text,
		items: screen.questions.map((q, i) => ({
			id: `q${i + 1}`,
			question: q.prompt,
			points: POINTS,
			text: answers[i].trim(),
			notes: `Expected answer: ${q.answerHint} Any wording with the same meaning gets full points.`
		}))
	};
}

/** The grader's verdict per question; the keyword check where there is none (LLM off or down). */
export function quizResults(
	screen: PassageQuizScreen,
	answers: string[],
	verdict: ReadingVerdict | null
): QuizResult[] {
	const byId = new Map(verdict?.answers.map((a) => [a.id, a]));
	return screen.questions.map((q, i) => {
		const a = byId.get(`q${i + 1}`);
		if (!a) return { correct: keywordMatch(answers[i], q.keywords), tags: [] };
		return {
			correct: a.score === POINTS,
			tags: a.marks.filter((m) => !m.span.trim()).map((m) => m.tag)
		};
	});
}
