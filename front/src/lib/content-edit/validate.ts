// Pure structural checks over a section's LessonNode[], surfaced in the /edit
// workspace (red dots in the outline + a "בעיות" list in the header).
// Detachable — part of src/lib/content-edit/.

import type { LessonNode, LessonScreen } from '$lib/content';
import { isScreenEmpty, countQuestions } from '$lib/lesson-screens/types';
import { markAllSegments } from '$lib/lesson-screens/markAllTokens';
import type { QuizNode } from '$lib/quiz';
import type { ScreenPath } from './screenPath';

export type Issue = {
	nodeId: string;
	/** Present when the issue is about one screen. */
	path?: ScreenPath;
	severity: 'error' | 'warn';
	message: string;
};

const bucketLabel = (b: ScreenPath['bucket']) =>
	b === 'preface' ? 'פתיח' : typeof b === 'number' ? `סבב ${b + 1}` : String(b);

function screenIssues(node: LessonNode, path: ScreenPath, screen: LessonScreen): Issue[] {
	const out: Issue[] = [];
	const at = `${bucketLabel(path.bucket)}[${path.index}]`;

	if (isScreenEmpty(screen)) {
		out.push({ nodeId: node.id, path, severity: 'warn', message: `${at}: מסך ריק (ידולג בנגן)` });
	}

	if (screen.type === 'mark-all') {
		const n = markAllSegments(screen.text).filter((s) => s.token).length;
		const ids = [...screen.correctIndices, ...(screen.categories ?? []).flatMap((c) => c.indices)];
		const bad = ids.filter((i) => !Number.isInteger(i) || i < 0 || i >= n);
		if (bad.length)
			out.push({
				nodeId: node.id,
				path,
				severity: 'error',
				message: `${at}: mark-all - אינדקסים מחוץ לטווח (0..${n - 1}): ${[...new Set(bad)].join(', ')}`
			});
	}

	if (screen.type === 'time-result' || screen.type === 'time-comparison') {
		const keys = screen.type === 'time-result' ? [screen.timerKey] : [screen.aKey, screen.bKey];
		const produced = new Set<string>();
		for (const r of node.content.rounds)
			for (const s of r.screens)
				if (
					(s.type === 'timed-reading' || s.type === 'passage-mcq' || s.type === 'mark-all') &&
					s.timerKey
				)
					produced.add(s.timerKey);
		for (const k of keys)
			if (k && !produced.has(k))
				out.push({
					nodeId: node.id,
					path,
					severity: 'warn',
					message: `${at}: timerKey "${k}" - אין מסך שמודד אותו בשיעור`
				});
	}

	return out;
}

export function validateSection(nodes: LessonNode[]): Issue[] {
	const out: Issue[] = [];
	const ids = new Set(nodes.map((n) => n.id));
	const seenId = new Set<string>();

	for (const node of nodes) {
		if (seenId.has(node.id))
			out.push({ nodeId: node.id, severity: 'error', message: `מזהה כפול: ${node.id}` });
		seenId.add(node.id);

		for (const r of node.required)
			if (!ids.has(r))
				out.push({ nodeId: node.id, severity: 'error', message: `דרישה קדם לא קיימת: ${r}` });
		if (node.required.includes(node.id))
			out.push({ nodeId: node.id, severity: 'error', message: 'הצומת דורש את עצמו' });

		if (node.content.rounds.length === 0)
			out.push({ nodeId: node.id, severity: 'error', message: 'אין סבבים' });

		node.content.preface.forEach((s, index) =>
			out.push(...screenIssues(node, { bucket: 'preface', index }, s))
		);
		node.content.rounds.forEach((round, ri) => {
			round.screens.forEach((s, index) =>
				out.push(...screenIssues(node, { bucket: ri, index }, s))
			);
			const scored = round.screens.reduce((sum, s) => sum + countQuestions(s), 0);
			if (ri === 0 && scored === 0 && !node.big)
				out.push({
					nodeId: node.id,
					path: { bucket: 0, index: 0 },
					severity: 'warn',
					message: 'סבב 1 בלי שאלות מדורגות - השלמה מיידית'
				});
		});
	}
	return out;
}

/** Same structural checks as validateSection, scoped to exams: duplicate exam
 *  ids and per-screen issues (empty screen, mark-all index ranges) across
 *  every part. No graph/round checks (exams have neither), and no
 *  timerKey-producer check yet (parts, not rounds, would need their own
 *  scan). `nodeId` on the returned issues is the quiz id. */
export function validateExam(quizzes: QuizNode[]): Issue[] {
	const out: Issue[] = [];
	const seenId = new Set<string>();

	for (const quiz of quizzes) {
		if (seenId.has(quiz.id))
			out.push({ nodeId: quiz.id, severity: 'error', message: `מזהה כפול: ${quiz.id}` });
		seenId.add(quiz.id);

		if (quiz.parts.length === 0)
			out.push({ nodeId: quiz.id, severity: 'error', message: 'אין חלקים' });

		quiz.parts.forEach((part) => {
			part.screens.forEach((s, index) => {
				const at = `${part.titleHe}[${index}]`;
				if (isScreenEmpty(s))
					out.push({
						nodeId: quiz.id,
						path: { bucket: part.id, index },
						severity: 'warn',
						message: `${at}: מסך ריק (ידולג בנגן)`
					});
				if (s.type === 'mark-all') {
					const n = markAllSegments(s.text).filter((seg) => seg.token).length;
					const ids = [...s.correctIndices, ...(s.categories ?? []).flatMap((c) => c.indices)];
					const bad = ids.filter((i) => !Number.isInteger(i) || i < 0 || i >= n);
					if (bad.length)
						out.push({
							nodeId: quiz.id,
							path: { bucket: part.id, index },
							severity: 'error',
							message: `${at}: mark-all - אינדקסים מחוץ לטווח (0..${n - 1}): ${[...new Set(bad)].join(', ')}`
						});
				}
			});
		});
	}
	return out;
}

/** Issues grouped by node id, for the outline's red dots. */
export function issuesByNode(issues: Issue[]): Map<string, Issue[]> {
	const m = new Map<string, Issue[]>();
	for (const i of issues) {
		const arr = m.get(i.nodeId) ?? [];
		arr.push(i);
		m.set(i.nodeId, arr);
	}
	return m;
}
