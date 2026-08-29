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

	// The whole module as one continuous path: every section's non-empty
	// lessons, back to back. A section with no content yet contributes
	// nothing — same "empty = skipped" rule as within a single section. Each
	// section's lessons share one color (cycled per section) but no
	// banner/text is shown for it.
	let nodes = $derived.by(() => {
		const result: PathNode[] = [];

		let zoneIndex = 0;
		for (const section of getSections(mod.id)) {
			const content = getSectionContent(mod.id, section.id);
			const lessons = content?.lessons.filter((lesson) => lesson.screens.length > 0) ?? [];
			if (lessons.length === 0) continue;
			const theme = themeForSectionIndex(zoneIndex);
			zoneIndex += 1;
			lessons.forEach((lesson, lessonIndexInSection) => {
				result.push({
					lesson,
					sectionId: section.id,
					lessonIndexInSection,
					theme,
					isBig: isBigNode(lesson)
				});
			});
		}
		return result;
	});

	function sectionKeyOf(node: PathNode) {
		return `${mod.id}-${node.sectionId}`;
	}

	function isDone(index: number) {
		const node = nodes[index];
		return lessonProgress.isCompleted(sectionKeyOf(node), node.lessonIndexInSection);
	}

	function isUnlocked(index: number) {
		return debugStore.unlockAll || index === 0 || isDone(index - 1);
	}

	// Which node's title+start label is showing (click to toggle, not hover).
	let openLabelIndex = $state<number | null>(null);

	function toggleLabel(index: number) {
		openLabelIndex = openLabelIndex === index ? null : index;
	}

	// Which node is currently open in the runner (null = showing the path).
	let activeIndex = $state<number | null>(null);

	let activeNode = $derived(activeIndex !== null ? nodes[activeIndex] : undefined);
	let hasNextLesson = $derived(activeIndex !== null && activeIndex < nodes.length - 1);

	function openNode(index: number) {
		openLabelIndex = null;
		activeIndex = index;
	}

	function closeNode() {
		activeIndex = null;
	}

	function finishNode() {
		if (activeIndex !== null) {
			const node = nodes[activeIndex];
			lessonProgress.markCompleted(sectionKeyOf(node), node.lessonIndexInSection);
		}
		activeIndex = null;
	}

	function finishNodeAndContinue() {
		if (activeIndex === null) return;
		const node = nodes[activeIndex];
		lessonProgress.markCompleted(sectionKeyOf(node), node.lessonIndexInSection);
		activeIndex += 1;
	}

	// A repeating left/right wave so the whole module reads as one continuous
	// winding path.
	const WAVE = [0, 64, 96, 64, 0, -64, -96, -64];
	function waveOffset(index: number): number {
		return WAVE[index % WAVE.length];
	}

	function dismissLabelOnOutsideClick(event: MouseEvent) {
		if (openLabelIndex === null) return;
		const target = event.target as HTMLElement;
		if (!target.closest('[data-lesson-node]')) openLabelIndex = null;
	}
</script>

<svelte:window onclick={dismissLabelOnOutsideClick} />

<AppBar title="{i18n.dict.lessons.titlePrefix} {mod.letter}" back={base} />

<main class="mx-auto w-full max-w-lg flex-1 px-4 pt-36 pb-12">
	{#if nodes.length === 0}
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
		<div class="flex flex-col items-center">
			{#each nodes as node, i (node.sectionId + '-' + node.lessonIndexInSection)}
				{@const unlocked = isUnlocked(i)}
				{@const done = isDone(i)}
				{@const size = node.isBig ? 'h-20 w-20 text-3xl' : 'h-16 w-16 text-2xl'}
				<div
					data-lesson-node
					class="relative mt-6 flex flex-col items-center transition-opacity first:mt-0 {unlocked ||
					done
						? ''
						: 'opacity-40'} {openLabelIndex === i ? 'z-10' : ''}"
					style="margin-inline-start: {waveOffset(i)}px"
				>
					<button
						type="button"
						disabled={!unlocked}
						title={unlocked ? undefined : i18n.dict.lesson.lessonLocked}
						onclick={() => toggleLabel(i)}
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

					{#if unlocked && openLabelIndex === i}
						<!-- Click-triggered label instead of a full-screen modal: title + start. -->
						<div
							class="absolute bottom-full left-1/2 z-10 mb-3 flex w-44 -translate-x-1/2 flex-col gap-3 rounded-2xl bg-surface p-4 text-center shadow-xl ring-1 ring-line/70"
						>
							<p class="text-sm font-bold">{node.lesson.titleHe}</p>
							<Button onclick={() => openNode(i)}>{i18n.dict.lesson.startButton}</Button>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	{/if}
</main>

{#if activeNode}
	<!-- Keyed so "continue to next lesson" forces a full remount instead of
	     just handing the same runner instance a new `lesson` prop. -->
	{#key activeIndex}
		<LessonRunner
			lesson={activeNode.lesson}
			lessonLabel={i18n.dict.lesson.lessonLabel((activeIndex ?? 0) + 1)}
			{hasNextLesson}
			onExit={closeNode}
			onFinish={finishNode}
			onFinishAndContinue={finishNodeAndContinue}
		/>
	{/key}
{/if}
