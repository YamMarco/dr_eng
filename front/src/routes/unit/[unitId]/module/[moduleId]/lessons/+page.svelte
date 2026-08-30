<script lang="ts">
	import AppBar from '$lib/components/AppBar.svelte';
	import Button from '$lib/components/Button.svelte';
	import LessonRunner from '$lib/lesson-screens/LessonRunner.svelte';
	import { getSections } from '$lib/sections';
	import { getSectionContent, type Lesson } from '$lib/sectionContent';
	import { themeForSectionIndex, type SectionTheme } from '$lib/sectionThemes';
	import { isScreenEmpty, countQuestions } from '$lib/lesson-screens/types';
	import { debugStore } from '$lib/debug.svelte';
	import { lessonProgress } from '$lib/lessonProgress.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let group = $derived(data.group);
	let mod = $derived(data.mod);
	let base = $derived(`/unit/${group.id}/module/${mod.id}`);

	type PathNode = {
		lesson: Lesson;
		sectionId: number;
		sectionTitleHe: string;
		lessonIndexInSection: number;
		theme: SectionTheme;
		/** No scored questions at all (or explicitly forced via `lesson.big`). Shown bigger. */
		isBig: boolean;
	};

	function isBigNode(lesson: Lesson): boolean {
		if (lesson.big !== undefined) return lesson.big;
		return lesson.screens
			.filter((screen) => !isScreenEmpty(screen))
			.every((screen) => countQuestions(screen) === 0);
	}

	/** No screens written yet — the node still shows (title only) but never unlocks. */
	function hasContent(lesson: Lesson): boolean {
		return lesson.screens.length > 0;
	}

	function buildTrack(sectionIndex: number, zoneIndex: number): PathNode[] {
		const section = getSections(mod.id)[sectionIndex];
		if (!section) return [];
		const content = getSectionContent(mod.id, section.id);
		const theme = themeForSectionIndex(zoneIndex);
		return (content?.lessons ?? []).map((lesson, lessonIndexInSection) => ({
			lesson,
			sectionId: section.id,
			sectionTitleHe: section.titleHe,
			lessonIndexInSection,
			theme,
			isBig: isBigNode(lesson)
		}));
	}

	// Sections 1 and 2 are learned side by side, as two independent path
	// tracks — everything from section 3 onward continues as one flattened
	// path below them, unlocked once both tracks are complete.
	let trackA = $derived(buildTrack(0, 0));
	let trackB = $derived(buildTrack(1, 1));
	let restNodes = $derived.by(() => {
		const result: PathNode[] = [];
		const sectionCount = getSections(mod.id).length;
		for (let sectionIndex = 2; sectionIndex < sectionCount; sectionIndex++) {
			result.push(...buildTrack(sectionIndex, sectionIndex));
		}
		return result;
	});
	let totalNodeCount = $derived(trackA.length + trackB.length + restNodes.length);

	type ListId = 'a' | 'b' | 'rest';

	function listFor(listId: ListId): PathNode[] {
		if (listId === 'a') return trackA;
		if (listId === 'b') return trackB;
		return restNodes;
	}

	function sectionKeyOf(node: PathNode) {
		return `${mod.id}-${node.sectionId}`;
	}

	function isDone(list: PathNode[], index: number): boolean {
		const node = list[index];
		return !!node && lessonProgress.isCompleted(sectionKeyOf(node), node.lessonIndexInSection);
	}

	// Tracks A and B unlock independently of each other (race ahead in
	// either). The "rest" path only starts once both are fully done. The
	// debug "unlock all" flag is a full override — it comes before every
	// other check, content-availability included, so it always does what it
	// says regardless of what's been authored yet.
	function isUnlocked(listId: ListId, index: number): boolean {
		const list = listFor(listId);
		const node = list[index];
		if (!node) return false;
		if (debugStore.unlockAll) return true;
		if (!hasContent(node.lesson)) return false;
		if (listId === 'rest' && index === 0) {
			return (
				trackA.length > 0 &&
				isDone(trackA, trackA.length - 1) &&
				trackB.length > 0 &&
				isDone(trackB, trackB.length - 1)
			);
		}
		if (index === 0) return true;
		return isDone(list, index - 1);
	}

	// Which node's title+start label is showing (click to toggle, not hover).
	let openLabelKey = $state<string | null>(null);

	function keyOf(listId: ListId, index: number) {
		return `${listId}-${index}`;
	}

	function toggleLabel(listId: ListId, index: number) {
		const key = keyOf(listId, index);
		openLabelKey = openLabelKey === key ? null : key;
	}

	// Which node is currently open in the runner (null = showing the path).
	let activeRef = $state<{ listId: ListId; index: number } | null>(null);

	let activeNode = $derived(activeRef ? listFor(activeRef.listId)[activeRef.index] : undefined);
	let hasNextLesson = $derived(
		activeRef ? activeRef.index < listFor(activeRef.listId).length - 1 : false
	);

	function openNode(listId: ListId, index: number) {
		openLabelKey = null;
		activeRef = { listId, index };
	}

	function closeNode() {
		activeRef = null;
	}

	function finishNode() {
		if (activeRef) {
			const node = listFor(activeRef.listId)[activeRef.index];
			lessonProgress.markCompleted(sectionKeyOf(node), node.lessonIndexInSection);
		}
		activeRef = null;
	}

	function finishNodeAndContinue() {
		if (!activeRef) return;
		const node = listFor(activeRef.listId)[activeRef.index];
		lessonProgress.markCompleted(sectionKeyOf(node), node.lessonIndexInSection);
		activeRef = { listId: activeRef.listId, index: activeRef.index + 1 };
	}

	// A repeating left/right wave so each path reads as one continuous
	// winding trail. A smaller amplitude for the side-by-side tracks keeps
	// them from overlapping their narrower columns.
	const WAVE = [0, 64, 96, 64, 0, -64, -96, -64];
	const WAVE_NARROW = [0, 20, 30, 20, 0, -20, -30, -20];
	function waveOffset(index: number, wave: number[]): number {
		return wave[index % wave.length];
	}

	function dismissLabelOnOutsideClick(event: MouseEvent) {
		if (openLabelKey === null) return;
		const target = event.target as HTMLElement;
		if (!target.closest('[data-lesson-node]')) openLabelKey = null;
	}
</script>

<svelte:window onclick={dismissLabelOnOutsideClick} />

<AppBar title="{i18n.dict.lessons.titlePrefix} {mod.letter}" back={base} />

{#snippet trackPath(list: PathNode[], listId: ListId, wave: number[])}
	<div class="flex flex-col items-center">
		{#each list as node, i (node.sectionId + '-' + node.lessonIndexInSection)}
			{@const unlocked = isUnlocked(listId, i)}
			{@const done = isDone(list, i)}
			{@const size = node.isBig ? 'h-20 w-20 text-3xl' : 'h-16 w-16 text-2xl'}
			{@const key = keyOf(listId, i)}
			<div
				data-lesson-node
				class="relative mt-6 flex flex-col items-center transition-opacity first:mt-0 {unlocked ||
				done
					? ''
					: 'opacity-40'} {openLabelKey === key ? 'z-10' : ''}"
				style="margin-inline-start: {waveOffset(i, wave)}px"
			>
				<button
					type="button"
					disabled={!unlocked}
					title={unlocked ? undefined : i18n.dict.lesson.lessonLocked}
					onclick={() => toggleLabel(listId, i)}
					class="flex shrink-0 items-center justify-center rounded-full font-extrabold shadow-md transition {size} {unlocked
						? done
							? node.theme.nodeDone
							: `${node.theme.node} active:scale-95`
						: 'cursor-not-allowed bg-line/60 text-muted shadow-none'}"
				>
					{#if done}
						<svg
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2.5"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="h-7 w-7"
							aria-hidden="true"
						>
							<path d="M20 6 9 17l-5-5" />
						</svg>
					{:else if unlocked}
						{i + 1}
					{:else}
						<svg
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="h-6 w-6"
							aria-hidden="true"
						>
							<rect x="4" y="10" width="16" height="10" rx="2" />
							<path d="M8 10V7a4 4 0 0 1 8 0v3" />
						</svg>
					{/if}
				</button>

				{#if unlocked && openLabelKey === key}
					<!-- Click-triggered label instead of a full-screen modal: title + start. -->
					<div
						class="absolute bottom-full left-1/2 z-10 mb-3 flex w-44 -translate-x-1/2 flex-col gap-3 rounded-2xl bg-surface p-4 text-center shadow-xl ring-1 ring-line/70"
					>
						<p class="text-sm font-bold">{node.lesson.titleHe}</p>
						<Button onclick={() => openNode(listId, i)}>{i18n.dict.lesson.startButton}</Button>
					</div>
				{/if}
			</div>
		{/each}
	</div>
{/snippet}

<main class="mx-auto w-full max-w-2xl flex-1 px-4 pt-36 pb-12">
	{#if totalNodeCount === 0}
		<div
			class="flex flex-col items-center rounded-3xl border-2 border-dashed border-line bg-surface/60 px-6 py-14 text-center"
		>
			<span
				class="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-soft text-ink/60"
			>
				<svg
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="h-7 w-7"
					aria-hidden="true"
				>
					<circle cx="12" cy="12" r="9" />
					<path d="M12 8v4l2.5 2.5" />
				</svg>
			</span>
			<p class="mt-4 font-semibold">{i18n.dict.lessons.emptyTitle(mod.letter)}</p>
		</div>
	{:else}
		{#if trackA.length > 0 || trackB.length > 0}
			<div class="flex justify-center gap-8">
				{#if trackA.length > 0}
					<div class="flex flex-1 flex-col items-center">
						<p class="mb-4 text-xs font-bold text-muted">{trackA[0].sectionTitleHe}</p>
						{@render trackPath(trackA, 'a', WAVE_NARROW)}
					</div>
				{/if}
				{#if trackB.length > 0}
					<div class="flex flex-1 flex-col items-center">
						<p class="mb-4 text-xs font-bold text-muted">{trackB[0].sectionTitleHe}</p>
						{@render trackPath(trackB, 'b', WAVE_NARROW)}
					</div>
				{/if}
			</div>
		{/if}
		{#if restNodes.length > 0}
			<div class="mt-10">
				{@render trackPath(restNodes, 'rest', WAVE)}
			</div>
		{/if}
	{/if}
</main>

{#if activeNode}
	<!-- Keyed so "continue to next lesson" forces a full remount instead of
	     just handing the same runner instance a new `lesson` prop. -->
	{#key activeRef?.listId + '-' + activeRef?.index}
		<LessonRunner
			lesson={activeNode.lesson}
			lessonLabel={i18n.dict.lesson.lessonLabel((activeRef?.index ?? 0) + 1)}
			{hasNextLesson}
			onExit={closeNode}
			onFinish={finishNode}
			onFinishAndContinue={finishNodeAndContinue}
		/>
	{/key}
{/if}
