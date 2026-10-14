// Client side of the loop: Layer 1 -> (gate | /api/grade) -> one Feedback.
import { apiFetch } from '$lib/api';
import { applyFixes, locateMarks, mergeMarks } from './merge';
import { runLayer1, type Layer1Options } from './layer1';
import type { RuleSet } from './rules';
import type { Feedback, GradeRequest, LessonVerdict } from './types';

/** POST /api/grade; throws when the LLM is unavailable, rate-limited or the reply is bad. */
export async function postGrade<T>(body: GradeRequest): Promise<T> {
	const res = await apiFetch('/api/grade', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(body)
	});
	if (!res.ok) throw new Error(`grade ${res.status}`);
	return res.json();
}

export async function gradeLesson(
	text: string,
	rules: RuleSet,
	task: Layer1Options & { question: string; notes?: string; fixes?: boolean }
): Promise<Feedback> {
	const l1 = await runLayer1(text, rules, task);
	if (l1.gate) return { stage: 'l1-gate', pass: false, gate: l1.gate, marks: l1.marks };

	const corrected = applyFixes(text, l1.marks);
	let verdict: LessonVerdict;
	try {
		verdict = await postGrade<LessonVerdict>({
			kind: 'lesson',
			question: task.question,
			text: corrected.text,
			notes: task.notes,
			fixes: task.fixes
		});
	} catch {
		// LLM down or rate-limited: the local marks alone, no verdict
		return { stage: 'partial', pass: false, marks: l1.marks };
	}
	const marks = mergeMarks(l1.marks, locateMarks(text, corrected, verdict.marks));
	const general = verdict.marks.filter((m) => !m.span.trim()).map((m) => m.tag);
	return { stage: 'llm', pass: verdict.pass, marks, general };
}
