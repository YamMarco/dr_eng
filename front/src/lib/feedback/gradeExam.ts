// Exam open answers, graded on final submit in one request, a part each (quiz/examParts):
//   - every short writing-task of a reading part, with its passage sent once
//     -> 'reading': each scored 0..points (like a lesson task, but a score);
//   - the writing-task with minWords -> 'essay': the official rubric, then the
//     length deduction in code.
// The server grades the parts in parallel, each with its own prompt.
// Empty / not-English / under-25-words answers score 0 by rule and are never sent.
import { checkWriting, type CheckReport } from '$lib/checks';
import { browserDictionaries } from '$lib/checks/dictionaries';
import { writingRubricId, writingRubrics, type WritingRubricId } from '$lib/content/rubrics';
import { partIdOf } from '$lib/quiz/examParts';
import { screensWithIds } from '$lib/quiz/screenIds';
import { countedIds } from '$lib/quiz/scoring';
import type { QuizNode } from '$lib/quiz/types';
import type { WritingTaskScreen } from '$lib/lesson-screens/types';
import { applyLength, mechanicsCount } from './exam';
import { isLimit } from '$lib/api';
import { postGrade } from './grade';
import { issuesToMarks } from './layer1';
import { applyFixes, locateMarks, mergeMarks, type Corrected } from './merge';
import type {
	EssayVerdict,
	ExamGrade,
	ExamPart,
	ExamRef,
	ExamVerdicts,
	LlmMark,
	Mark,
	ReadingVerdict
} from './types';

type OpenAnswer = {
	id: string;
	kind: ExamGrade['kind'];
	screen: WritingTaskScreen;
	text: string;
	/** Its grading part (quiz/examParts): the reading part's id, or the essay's own id. */
	group: string;
	/** reading: the part's passage, paragraphs labelled [I], [II]... essay: every passage, for copy detection. */
	passage: string;
	/** essay: the exam module's writing rubric. */
	rubric: WritingRubricId;
};

/** An answer after the local checks: either finished (scored 0 by rule) or ready to send. */
type Checked =
	| { a: OpenAnswer; done: ExamGrade }
	| { a: OpenAnswer; report: CheckReport; l1: Mark[]; corrected: Corrected; done?: undefined };
type Ready = Extract<Checked, { done?: undefined }>;

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
const labelled = (paragraphs: { text: string }[]) =>
	paragraphs.map((p, i) => `[${ROMAN[i] ?? i + 1}] ${p.text}`).join('\n\n');

/** Every writing-task in the exam with the passage text it needs. */
export function openAnswers(quiz: QuizNode, answers: Record<string, unknown>): OpenAnswer[] {
	const allPassages = quiz.parts
		.flatMap((p) => p.screens)
		.flatMap((s) => (s.type === 'passage' ? [s.paragraphs.map((p) => p.text).join('\n\n')] : []))
		.join('\n\n');
	const out: OpenAnswer[] = [];
	for (const part of quiz.parts) {
		let passage = '';
		const counted = countedIds(part, answers);
		for (const { id, screen } of screensWithIds(part)) {
			if (screen.type === 'passage') passage = labelled(screen.paragraphs);
			// Answers beyond a part's `choose` aren't scored, so never sent.
			if (screen.type !== 'writing-task' || !counted.has(id)) continue;
			const text = typeof answers[id] === 'string' ? (answers[id] as string) : '';
			const essay = screen.minWords !== undefined;
			out.push({
				id,
				kind: essay ? 'essay' : 'reading',
				screen,
				text,
				group: partIdOf(part.id, id, essay),
				passage: essay ? allPassages : passage,
				rubric: writingRubricId(quiz.module)
			});
		}
	}
	return out;
}

const maxOf = (a: OpenAnswer) =>
	a.screen.points ?? (a.kind === 'essay' ? writingRubrics[a.rubric].totalPoints : 1);

async function check(a: OpenAnswer): Promise<Checked> {
	const base = { kind: a.kind, max: maxOf(a), text: a.text, status: 'graded' as const };
	if (!a.text.trim()) return { a, done: { ...base, earned: 0, marks: [], gate: 'empty' } };
	const { minWords, maxWords } = a.screen;
	const report = await checkWriting(a.text, browserDictionaries, {
		prompt: a.screen.prompt,
		source: a.kind === 'essay' ? a.passage : undefined,
		range:
			a.kind === 'essay' && minWords !== undefined && maxWords !== undefined
				? { min: minWords, max: maxWords }
				: undefined
	});
	const l1 = issuesToMarks(report.issues);
	if (report.notEnglish) return { a, done: { ...base, earned: 0, marks: l1, gate: 'not-english' } };
	if (a.kind === 'essay' && report.length.zero)
		return {
			a,
			done: { ...base, earned: 0, marks: l1, gate: 'too-short', validWords: report.length.valid }
		};
	return { a, report, l1, corrected: applyFixes(a.text, l1) };
}

/** The student's own marks plus the model's, both pointing into the original text. */
function withLlmMarks(c: Ready, marks: LlmMark[]) {
	return {
		marks: mergeMarks(c.l1, locateMarks(c.a.text, c.corrected, marks)),
		general: marks.filter((m) => !m.span.trim()).map((m) => m.tag)
	};
}

const failed = (c: Ready, e?: unknown): ExamGrade => ({
	kind: c.a.kind,
	status: 'failed',
	...(isLimit(e) && { limit: true }),
	earned: 0,
	max: maxOf(c.a),
	text: c.a.text,
	marks: c.l1
});

// Reading: short ids keep the prompt small; they map back by position.
const readingId = (i: number) => `q${i + 1}`;

/** A passage's reading answers as one exam part; the passage is sent once. */
const readingPart = (group: Ready[]): ExamPart => ({
	id: group[0].a.group,
	kind: 'reading',
	passage: group[0].a.passage,
	items: group.map((c, i) => ({
		id: readingId(i),
		question: c.a.screen.prompt,
		paragraph: c.a.screen.paragraphRef,
		points: maxOf(c.a),
		text: c.corrected.text,
		notes: c.a.screen.gradingNotes
	}))
});

const essayPart = (c: Ready): ExamPart => ({
	id: c.a.group,
	kind: 'essay',
	question: c.a.screen.prompt,
	text: c.corrected.text,
	notes: c.a.screen.gradingNotes,
	mechanics: mechanicsCount(c.report.issues),
	rubric: c.a.rubric
});

function readingGrades(group: Ready[], verdict: ReadingVerdict): ExamGrade[] {
	const byId = new Map(verdict.answers.map((v) => [v.id, v]));
	return group.map((c, i) => {
		const v = byId.get(readingId(i));
		if (!v) return failed(c);
		return {
			kind: 'reading',
			status: 'graded',
			earned: v.score,
			max: maxOf(c.a),
			text: c.a.text,
			...withLlmMarks(c, v.marks)
		};
	});
}

function essayGrade(c: Ready, v: EssayVerdict): ExamGrade {
	const rubric = writingRubrics[c.a.rubric];
	const order = rubric.criteria.map((cr) => cr.id);
	const criteria = applyLength(v.scores, order, c.report.length.deduction);
	const raw = order.reduce((sum, id) => sum + (criteria[id] ?? 0), 0);
	const max = maxOf(c.a);
	return {
		kind: 'essay',
		status: 'graded',
		// a screen worth other than the rubric total scales it
		earned: Math.round((raw * max) / rubric.totalPoints),
		max,
		text: c.a.text,
		criteria,
		rubric: c.a.rubric,
		lengthDeduction: c.report.length.deduction,
		validWords: c.report.length.valid,
		...withLlmMarks(c, v.marks)
	};
}

/**
 * Grades every open answer (or only `ids`, for a retry) in one request for the attempt. The
 * server grades each part once, stores it, and locks the exam (24h) when every part came back.
 */
export async function gradeExam(
	quiz: QuizNode,
	answers: Record<string, unknown>,
	attempt: ExamRef,
	ids?: Set<string>
): Promise<Record<string, ExamGrade>> {
	const wanted = openAnswers(quiz, answers).filter((a) => !ids || ids.has(a.id));
	// The check fetches its dictionaries: offline it fails, and the answer is "not graded" (retry).
	const checked = await Promise.all(
		wanted.map((a) =>
			check(a).catch((): Checked => ({
				a,
				done: { kind: a.kind, status: 'failed', earned: 0, max: maxOf(a), text: a.text, marks: [] }
			}))
		)
	);
	const out: Record<string, ExamGrade> = {};
	const byGroup = new Map<string, Ready[]>();
	for (const c of checked) {
		if (c.done) out[c.a.id] = c.done;
		else byGroup.set(c.a.group, [...(byGroup.get(c.a.group) ?? []), c]);
	}
	if (!byGroup.size) return out;
	const groups = [...byGroup.values()];
	let results: ExamVerdicts['results'];
	try {
		({ results } = await postGrade<ExamVerdicts>({
			kind: 'exam',
			...attempt,
			parts: groups.map((g) => (g[0].a.kind === 'essay' ? essayPart(g[0]) : readingPart(g)))
		}));
	} catch (e) {
		for (const g of groups) for (const c of g) out[c.a.id] = failed(c, e);
		return out;
	}
	for (const group of groups) {
		const v = results[group[0].a.group];
		const graded = !v
			? group.map((c) => failed(c))
			: group[0].a.kind === 'essay'
				? [essayGrade(group[0], v as EssayVerdict)]
				: readingGrades(group, v as ReadingVerdict);
		group.forEach((c, i) => (out[c.a.id] = graded[i]));
	}
	return out;
}
