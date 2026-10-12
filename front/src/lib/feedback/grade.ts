// Client side of the loop: Layer 1 -> (gate | /api/grade) -> one Feedback.
import { applyFixes, locateMarks, mergeMarks } from './merge';
import { runLayer1, type Layer1Options } from './layer1';
import type { RuleSet } from './rules';
import type { Feedback, GradeRequest, LessonVerdict } from './types';

export async function gradeLesson(
	text: string,
	rules: RuleSet,
	task: Layer1Options & { question: string; notes?: string }
): Promise<Feedback> {
	const l1 = await runLayer1(text, rules, task);
	if (l1.gate) return { stage: 'l1-gate', pass: false, gate: l1.gate, marks: l1.marks };

	const corrected = applyFixes(text, l1.marks);
	const body: GradeRequest = {
		kind: 'lesson',
		question: task.question,
		text: corrected.text,
		notes: task.notes
	};
	let verdict: LessonVerdict;
	try {
		const res = await fetch('/api/grade', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(body)
		});
		if (!res.ok) throw new Error(`grade ${res.status}`);
		verdict = await res.json();
	} catch {
		// LLM down or rate-limited: the local marks alone, no verdict
		return { stage: 'partial', pass: false, marks: l1.marks };
	}
	const marks = mergeMarks(l1.marks, locateMarks(text, corrected, verdict.marks));
	return { stage: 'llm', pass: verdict.pass, marks };
}
