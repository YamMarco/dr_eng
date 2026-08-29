<script lang="ts">
	import AppBar from '$lib/components/AppBar.svelte';
	import LessonRunner from '$lib/lesson-screens/LessonRunner.svelte';
	import { getLessons } from '$lib/lessons';
	import { getLessonContent, type LessonIntro, type LessonPart } from '$lib/lessonContent';
	import { themeForZoneIndex, type ZoneTheme } from '$lib/zones';
	import { debugStore } from '$lib/debug.svelte';
	import { lessonProgress } from '$lib/lessonProgress.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let group = $derived(data.group);
	let mod = $derived(data.mod);
	let base = $derived(`/unit/${group.id}/module/${mod.id}`);

	type PathNode = {
		part: LessonPart;
		lessonId: number;
		partIndexInLesson: number;
		isFirstOfLesson: boolean;
		zoneTitle: string;
		zoneIntro?: LessonIntro;
		theme: ZoneTheme;
	};

	// The whole module as one continuous path: every lesson's non-empty parts,
	// back to back. A lesson with no content yet contributes nothing — same
	// "empty = skipped" rule as within a single lesson. Each lesson acts as one
	// colored zone; its parts are the actual clickable nodes.
	let nodes = $derived.by(() => {
		const result: PathNode[] = [];
		let zoneIndex = 0;
		for (const lesson of getLessons(mod.id)) {
			const content = getLessonContent(mod.id, lesson.id);
			const parts = content?.parts.filter((part) => part.screens.length > 0) ?? [];
			if (parts.length === 0) continue;
			const theme = themeForZoneIndex(zoneIndex);
			zoneIndex += 1;
			parts.forEach((part, partIndexInLesson) => {
				result.push({
					part,
					lessonId: lesson.id,
					partIndexInLesson,
					isFirstOfLesson: partIndexInLesson === 0,
					zoneTitle: lesson.titleHe,
					zoneIntro: partIndexInLesson === 0 ? content?.intro : undefined,
					theme
				});
			});
		}
		return result;
	});

	function lessonKeyOf(node: PathNode) {
		return `${mod.id}-${node.lessonId}`;
	}

	function isDone(index: number) {
		const node = nodes[index];
		return lessonProgress.isCompleted(lessonKeyOf(node), node.partIndexInLesson);
	}

	function isUnlocked(index: number) {
		return debugStore.unlockAll || index === 0 || isDone(index - 1);
	}

	// Which node is currently open in the runner (null = showing the path).
	let activeIndex = $state<number | null>(null);

	let activeNode = $derived(activeIndex !== null ? nodes[activeIndex] : undefined);
	let hasNextPart = $derived(activeIndex !== null && activeIndex < nodes.length - 1);

	function openNode(index: number) {
		activeIndex = index;
	}

	function closeNode() {
		activeIndex = null;
	}

	function finishNode() {
		if (activeIndex !== null) {
			const node = nodes[activeIndex];
			lessonProgress.markCompleted(lessonKeyOf(node), node.partIndexInLesson);
		}
		activeIndex = null;
	}

	function finishNodeAndContinue() {
		if (activeIndex === null) return;
		const node = nodes[activeIndex];
		lessonProgress.markCompleted(lessonKeyOf(node), node.partIndexInLesson);
		activeIndex += 1;
	}

	// A repeating left/right wave so the whole module reads as one continuous
	// winding path, with zone banners just breaking it up visually.
	const WAVE = [0, 64, 96, 64, 0, -64, -96, -64];
	function waveOffset(index: number): number {
		return WAVE[index % WAVE.length];
	}
</script>

<AppBar title="{i18n.dict.lessons.titlePrefix} {mod.letter}" back={base} />

<main class="mx-auto w-full max-w-lg flex-1 px-4 pt-6 pb-12">
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
			{#each nodes as node, i (node.lessonId + '-' + node.partIndexInLesson)}
				{@const unlocked = isUnlocked(i)}
				{@const done = isDone(i)}

				{#if node.isFirstOfLesson}
					<div
						class="mt-8 w-full max-w-xs rounded-2xl px-4 py-3 text-center shadow-md first:mt-0 {node
							.theme.banner}"
					>
						<span class="text-sm font-bold">{node.zoneTitle}</span>
					</div>
					{#if node.zoneIntro}
						<div
							class="mt-4 w-full rounded-3xl bg-surface p-5 shadow-md ring-1 shadow-ink/5 ring-line/70"
						>
							<p class="leading-relaxed">{node.zoneIntro.greeting}</p>
							<p class="mt-3 leading-relaxed font-semibold">{node.zoneIntro.goal}</p>
						</div>
					{/if}
				{/if}

				<div
					class="mt-6 flex flex-col items-center transition-opacity {unlocked || done
						? ''
						: 'opacity-40'}"
					style="margin-inline-start: {waveOffset(i)}px"
				>
					<button
						type="button"
						disabled={!unlocked}
						title={unlocked ? undefined : i18n.dict.lesson.partLocked}
						onclick={() => openNode(i)}
						class="flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-2xl font-extrabold shadow-md transition {unlocked
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
					<span class="mt-2 max-w-32 text-center text-sm font-semibold">{node.part.titleHe}</span>
				</div>
			{/each}
		</div>
	{/if}
</main>

{#if activeNode}
	<!-- Keyed so "continue to next part" forces a full remount instead of just
	     handing the same runner instance a new `part` prop. -->
	{#key activeIndex}
		<LessonRunner
			part={activeNode.part}
			partLabel={i18n.dict.lesson.partLabel((activeIndex ?? 0) + 1)}
			{hasNextPart}
			onExit={closeNode}
			onFinish={finishNode}
			onFinishAndContinue={finishNodeAndContinue}
		/>
	{/key}
{/if}
