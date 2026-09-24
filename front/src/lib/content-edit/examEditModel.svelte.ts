// The in-memory working copy for the exam editor (/edit-exam), scoped to one
// module's exams - the exam-side sibling of editModel.svelte.ts. Holds
// QuizNode[] instead of LessonNode[]; a QuizPart plays the role a lesson node
// plays for editModel (one screen-bucket picker level up from a screen), so
// there's no preface/graph concept here, just a flat list of exams and each
// exam's parts. Unlike lessons, an exam's routing/list metadata (uuid, kind,
// year) lives directly on the QuizNode itself (see $lib/quiz/types.ts) - the
// $lib/quizzes registry is a derived view, not a second file to save.
//
// Detachable — part of src/lib/content-edit/. See README.md.

import { getQuizNodesByModule } from '$lib/quiz';
import type { QuizNode, QuizOptions, QuizPart, QuizKind } from '$lib/quiz';
import type { LessonScreen } from '$lib/lesson-screens/types';
import { blankScreen } from './screenSkeletons';
import type { ScreenPath } from './screenPath';
import type { Bucket, EditModelLike } from './editModelTypes';

function clone<T>(v: T): T {
	return JSON.parse(JSON.stringify(v)) as T;
}

class ExamEditModel implements EditModelLike {
	moduleId = $state('');
	quizzes = $state<QuizNode[]>([]);
	dirty = $state(false);
	selectedQuizId = $state<string | null>(null);
	selectedPath = $state<ScreenPath | null>(null);

	#baseline = '';

	load(moduleId: string) {
		this.moduleId = moduleId;
		this.quizzes = clone(getQuizNodesByModule(moduleId));
		this.#snapshotBaseline();
		this.dirty = false;
		this.selectedQuizId = this.quizzes[0]?.id ?? null;
		this.selectedPath = null;
	}

	#snapshotBaseline() {
		this.#baseline = JSON.stringify(this.quizzes);
	}

	markClean() {
		this.#snapshotBaseline();
		this.dirty = false;
	}

	touch() {
		this.dirty = true;
	}

	/** Node-level diff against the last-loaded/saved baseline - same
	 *  "untouched entries pass through" merge contract editModel uses for
	 *  lesson sections. */
	changes(): { upserts: QuizNode[]; deletes: string[] } {
		const baseline: QuizNode[] = JSON.parse(this.#baseline || '[]');
		const baseById = new Map(baseline.map((q) => [q.id, q]));
		const upserts = this.quizzes
			.filter((q) => JSON.stringify(q) !== JSON.stringify(baseById.get(q.id)))
			.map((q) => clone(q));
		const currentIds = new Set(this.quizzes.map((q) => q.id));
		const deletes = baseline.map((q) => q.id).filter((id) => !currentIds.has(id));
		return { upserts, deletes };
	}

	node(id: string): QuizNode | undefined {
		return this.quizzes.find((q) => q.id === id);
	}

	get selectedQuiz(): QuizNode | undefined {
		return this.selectedQuizId ? this.node(this.selectedQuizId) : undefined;
	}

	select(quizId: string, path: ScreenPath | null = null) {
		this.selectedQuizId = quizId;
		this.selectedPath = path;
	}

	private shortId(): string {
		let id = `${this.moduleId}-exam-${crypto.randomUUID().slice(0, 6)}`;
		while (this.node(id)) id = `${this.moduleId}-exam-${crypto.randomUUID().slice(0, 6)}`;
		return id;
	}

	private shortPartId(quiz: QuizNode): string {
		let id = `part-${crypto.randomUUID().slice(0, 6)}`;
		while (quiz.parts.some((p) => p.id === id)) id = `part-${crypto.randomUUID().slice(0, 6)}`;
		return id;
	}

	// -------------------------------------------------------------- exams --
	addExam(): QuizNode {
		const id = this.shortId();
		const node: QuizNode = {
			id,
			module: this.moduleId,
			uuid: `${this.moduleId}-t-${crypto.randomUUID().slice(0, 4)}`,
			kind: 'assorted',
			titleHe: 'מבחן חדש',
			options: {},
			parts: [{ id: 'part-1', titleHe: 'חלק 1', screens: [] }]
		};
		this.quizzes.push(node);
		this.dirty = true;
		this.selectedQuizId = id;
		this.selectedPath = null;
		return node;
	}

	deleteExam(id: string) {
		this.quizzes = this.quizzes.filter((q) => q.id !== id);
		if (this.selectedQuizId === id) {
			this.selectedQuizId = this.quizzes[0]?.id ?? null;
			this.selectedPath = null;
		}
		this.dirty = true;
	}

	setExamMeta(id: string, patch: Partial<Pick<QuizNode, 'titleHe' | 'titleEn' | 'descriptionHe'>>) {
		const q = this.node(id);
		if (!q) return;
		Object.assign(q, patch);
		this.dirty = true;
	}

	setExamOptions(id: string, patch: Partial<QuizOptions>) {
		const q = this.node(id);
		if (!q) return;
		Object.assign(q.options, patch);
		this.dirty = true;
	}

	setExamKind(id: string, kind: QuizKind, year?: number) {
		const q = this.node(id);
		if (!q) return;
		q.kind = kind;
		q.year = kind === 'ministry' ? (year ?? q.year ?? new Date().getFullYear()) : undefined;
		this.dirty = true;
	}

	// --------------------------------------------------- EditModelLike (generic) --
	readonly addBucketLabel = '➕ הוספת חלק';

	bucketsOf(quizId: string): Bucket[] {
		const q = this.node(quizId);
		if (!q) return [];
		return q.parts.map((p, i) => ({
			key: p.id,
			label: p.titleHe || `חלק ${i + 1}`,
			note: p.points != null ? `${p.points} נק'` : undefined,
			screens: p.screens
		}));
	}

	private part(quizId: string, bucket: ScreenPath['bucket']): QuizPart | undefined {
		return this.node(quizId)?.parts.find((p) => p.id === bucket);
	}

	screenAt(quizId: string, path: ScreenPath): LessonScreen | undefined {
		return this.part(quizId, path.bucket)?.screens[path.index];
	}

	addScreen(
		quizId: string,
		bucket: ScreenPath['bucket'],
		at = -1,
		type: LessonScreen['type'] = 'mcq'
	) {
		const part = this.part(quizId, bucket);
		if (!part) return;
		const idx = at < 0 ? part.screens.length : at;
		part.screens.splice(idx, 0, blankScreen(type));
		this.dirty = true;
		this.selectedPath = { bucket, index: idx };
	}

	deleteScreen(quizId: string, path: ScreenPath) {
		const part = this.part(quizId, path.bucket);
		if (!part) return;
		part.screens.splice(path.index, 1);
		this.dirty = true;
		if (
			this.selectedPath &&
			this.selectedPath.bucket === path.bucket &&
			this.selectedPath.index === path.index
		)
			this.selectedPath = null;
	}

	applyScreen(quizId: string, path: ScreenPath, screen: LessonScreen) {
		const part = this.part(quizId, path.bucket);
		if (!part) return;
		part.screens[path.index] = screen;
		this.dirty = true;
	}

	/** Swap a screen's type, carrying over any prose fields both shapes share
	 *  - same rule editModel uses for lesson screens. */
	setScreenType(quizId: string, path: ScreenPath, type: LessonScreen['type']) {
		const part = this.part(quizId, path.bucket);
		if (!part) return;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const old = part.screens[path.index] as any;
		if (old?.type === type) return;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const next = blankScreen(type) as any;
		for (const k of ['text', 'prompt', 'instruction', 'title', 'label', 'modelAnswer', 'dir']) {
			if (typeof old?.[k] === 'string' && k in next) next[k] = old[k];
		}
		part.screens[path.index] = next;
		this.dirty = true;
	}

	/** Move a screen within an exam, across parts. */
	moveScreen(quizId: string, from: ScreenPath, to: ScreenPath) {
		const src = this.part(quizId, from.bucket);
		if (!src) return;
		const [screen] = src.screens.splice(from.index, 1);
		if (!screen) return;
		const dst = this.part(quizId, to.bucket);
		if (!dst) return;
		let idx = to.index;
		if (from.bucket === to.bucket && from.index < to.index) idx -= 1;
		idx = Math.max(0, Math.min(idx, dst.screens.length));
		dst.screens.splice(idx, 0, screen);
		this.dirty = true;
		this.selectedPath = { bucket: to.bucket, index: idx };
	}

	// -------------------------------------------------------------- parts --
	addBucket(quizId: string, at = -1) {
		const q = this.node(quizId);
		if (!q) return;
		const idx = at < 0 ? q.parts.length : at;
		q.parts.splice(idx, 0, { id: this.shortPartId(q), titleHe: `חלק ${idx + 1}`, screens: [] });
		this.dirty = true;
	}

	duplicateBucket(quizId: string, bucketIndex: number) {
		const q = this.node(quizId);
		if (!q) return;
		const src = q.parts[bucketIndex];
		if (!src) return;
		q.parts.splice(bucketIndex + 1, 0, { ...clone(src), id: this.shortPartId(q) });
		this.dirty = true;
	}

	deleteBucket(quizId: string, bucketIndex: number) {
		const q = this.node(quizId);
		if (!q || q.parts.length <= 1) return;
		q.parts.splice(bucketIndex, 1);
		this.dirty = true;
	}

	moveBucket(quizId: string, from: number, to: number) {
		const q = this.node(quizId);
		if (!q || from === to) return;
		const [p] = q.parts.splice(from, 1);
		q.parts.splice(to, 0, p);
		this.dirty = true;
	}

	setPartMeta(
		quizId: string,
		partId: string,
		patch: Partial<Pick<QuizPart, 'titleHe' | 'instructionsHe' | 'points'>>
	) {
		const part = this.part(quizId, partId);
		if (!part) return;
		Object.assign(part, patch);
		this.dirty = true;
	}

	setBucketLabel(quizId: string, bucketIndex: number, label: string) {
		const part = this.node(quizId)?.parts[bucketIndex];
		if (!part) return;
		part.titleHe = label;
		this.dirty = true;
	}
}

/** One shared instance; `load(moduleId)` seeds it with that module's exams. */
export const examEditModel = new ExamEditModel();
