// Exam open answers, graded on final submit, all at once:
//   - a short writing-task in the reading part -> 'reading': scored 0..points against
//     the paragraph it refers to (like a lesson task, but a score instead of pass/fail);
//   - the writing-task with minWords -> 'essay': the official rubric, then the length
//     deduction in code.
// Empty / not-English / under-25-words answers score 0 by rule, with no LLM call.
import { checkWriting } from '$lib/checks';
import { browserDictionaries } from '$lib/checks/dictionaries';
import { essayRubric } from '$lib/content/rubrics';
import { screensWithIds } from '$lib/quiz/screenIds';
import type { QuizNode } from '$lib/quiz/types';
import type { WritingTaskScreen } from '$lib/lesson-screens/types';
import { applyLength, mechanicsCount, paragraphIndex } from './exam';
import { postGrade } from './grade';
import { issuesToMarks } from './layer1';
import { applyFixes, locateMarks, mergeMarks } from './merge';
import type { EssayVerdict, ExamGrade, ReadingVerdict } from './types';

type OpenAnswer = {
	id: string;
	kind: ExamGrade['kind'];
	screen: WritingTaskScreen;
	text: string;
	/** reading: the paragraph(s) asked about. essay: every passage, for copy detection. */
	passage: string;
};

const paragraphsText = (paragraphs: { text: string }[]) =>
	paragraphs.map((p) => p.text).join('\n\n');

/** Every writing-task in the exam with the passage text it needs. */
export function openAnswers(quiz: QuizNode, answers: Record<string, unknown>): OpenAnswer[] {
	const allPassages = quiz.parts
		.flatMap((p) => p.screens)
		.flatMap((s) => (s.type === 'passage' ? [paragraphsText(s.paragraphs)] : []))
		.join('\n\n');
	const out: OpenAnswer[] = [];
	for (const part of quiz.parts) {
		let passage: { text: string }[] = [];
		for (const { id, screen } of screensWithIds(part)) {
			if (screen.type === 'passage') passage = screen.paragraphs;
			if (screen.type !== 'writing-task') continue;
			const text = typeof answers[id] === 'string' ? (answers[id] as string) : '';
			if (screen.minWords !== undefined) {
				out.push({ id, kind: 'essay', screen, text, passage: allPassages });
				continue;
			}
			const at = screen.paragraphRef ? paragraphIndex(screen.paragraphRef) : -1;
			const asked = at >= 0 && passage[at] ? [passage[at]] : passage;
			out.push({ id, kind: 'reading', screen, text, passage: paragraphsText(asked) });
		}
	}
	return out;
}

export async function gradeAnswer(a: OpenAnswer): Promise<ExamGrade> {
	const max = a.screen.points ?? (a.kind === 'essay' ? essayRubric.totalPoints : 1);
	const base = { kind: a.kind, max, text: a.text, status: 'graded' as const };
	if (!a.text.trim()) return { ...base, earned: 0, marks: [], gate: 'empty' };

	const report = await checkWriting(a.text, browserDictionaries, {
		prompt: a.screen.prompt,
		source: a.kind === 'essay' ? a.passage : undefined
	});
	const l1 = issuesToMarks(report.issues);
	if (report.notEnglish) return { ...base, earned: 0, marks: l1, gate: 'not-english' };
	if (a.kind === 'essay' && report.length.zero)
		return {
			...base,
			earned: 0,
			marks: l1,
			gate: 'too-short',
			validWords: report.length.valid
		};

	const corrected = applyFixes(a.text, l1);
	const request = {
		question: a.screen.prompt,
		text: corrected.text,
		notes: a.screen.gradingNotes
	};
	try {
		if (a.kind === 'reading') {
			const v = await postGrade<ReadingVerdict>({
				...request,
				kind: 'reading',
				passage: a.passage,
				points: max
			});
			return { ...base, earned: v.score, ...llmMarks(a.text, corrected, l1, v.marks) };
		}
		const v = await postGrade<EssayVerdict>({
			...request,
			kind: 'essay',
			mechanics: mechanicsCount(report.issues)
		});
		const order = essayRubric.criteria.map((c) => c.id);
		const criteria = applyLength(v.scores, order, report.length.deduction);
		const raw = order.reduce((sum, id) => sum + (criteria[id] ?? 0), 0);
		// a screen worth other than 30 points scales the rubric total
		const earned = Math.round((raw * max) / essayRubric.totalPoints);
		return {
			...base,
			earned,
			criteria,
			lengthDeduction: report.length.deduction,
			validWords: report.length.valid,
			...llmMarks(a.text, corrected, l1, v.marks)
		};
	} catch {
		return { ...base, status: 'failed', earned: 0, marks: l1 };
	}
}

function llmMarks(
	text: string,
	corrected: ReturnType<typeof applyFixes>,
	l1: ExamGrade['marks'],
	marks: { span: string; tag: string; nth?: number }[]
) {
	return {
		marks: mergeMarks(l1, locateMarks(text, corrected, marks)),
		general: marks.filter((m) => !m.span.trim()).map((m) => m.tag)
	};
}

/** At most this many grading calls in flight: the Gemini free tier allows only a few per minute. */
const CONCURRENCY = 3;

/** Grades every open answer (or only `ids`, for a retry), a few at a time. */
export async function gradeExam(
	quiz: QuizNode,
	answers: Record<string, unknown>,
	ids?: Set<string>
): Promise<Record<string, ExamGrade>> {
	const todo = openAnswers(quiz, answers).filter((a) => !ids || ids.has(a.id));
	const graded: ExamGrade[] = [];
	let next = 0;
	const worker = async () => {
		while (next < todo.length) {
			const i = next++;
			graded[i] = await gradeAnswer(todo[i]);
		}
	};
	await Promise.all(Array.from({ length: Math.min(CONCURRENCY, todo.length) }, worker));
	return Object.fromEntries(todo.map((a, i) => [a.id, graded[i]]));
}
