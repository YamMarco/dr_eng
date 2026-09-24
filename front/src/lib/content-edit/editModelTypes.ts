// The shared contract EditableScreen/SlideStage/SlideFilmstrip need from
// whatever's editing them - implemented by editModel.svelte.ts (lessons) and
// examEditModel.svelte.ts (exams), so those three components never need to
// know which one they're talking to, or what a "node" even is (a LessonNode
// or a QuizNode).
import type { LessonScreen } from '$lib/lesson-screens/types';
import type { ScreenPath } from './screenPath';

export type Bucket = {
	key: ScreenPath['bucket'];
	label: string;
	note?: string;
	screens: LessonScreen[];
};

export interface EditModelLike {
	readonly selectedPath: ScreenPath | null;
	select(nodeId: string, path: ScreenPath | null): void;
	touch(): void;

	/** Every screen-bucket of `nodeId`, in order - rounds+preface for a lesson,
	 *  parts for an exam. */
	bucketsOf(nodeId: string): Bucket[];
	screenAt(nodeId: string, path: ScreenPath): LessonScreen | undefined;

	addScreen(
		nodeId: string,
		bucket: ScreenPath['bucket'],
		at: number,
		type: LessonScreen['type']
	): void;
	deleteScreen(nodeId: string, path: ScreenPath): void;
	applyScreen(nodeId: string, path: ScreenPath, screen: LessonScreen): void;
	setScreenType(nodeId: string, path: ScreenPath, type: LessonScreen['type']): void;
	moveScreen(nodeId: string, from: ScreenPath, to: ScreenPath): void;

	/** Bucket-level ops - "round" for lessons, "part" for exams. */
	addBucketLabel: string;
	addBucket(nodeId: string, at?: number): void;
	duplicateBucket(nodeId: string, bucketIndex: number): void;
	deleteBucket(nodeId: string, bucketIndex: number): void;
	moveBucket(nodeId: string, from: number, to: number): void;
	/** Only meaningful where a bucket has its own display name (exam parts) -
	 *  lesson rounds don't, so editModel leaves this unimplemented. */
	setBucketLabel?(nodeId: string, bucketIndex: number, label: string): void;
}
