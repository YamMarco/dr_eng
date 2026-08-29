<script lang="ts">
	import AppBar from '$lib/components/AppBar.svelte';
	import LessonRunner from '$lib/lesson-screens/LessonRunner.svelte';
	import { getSections } from '$lib/sections';
	import {
		getSectionContent,
		getModulePreface,
		type SectionIntro,
		type Lesson
	} from '$lib/sectionContent';
	import { themeForSectionIndex, type SectionTheme } from '$lib/sectionThemes';
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
		isFirstOfSection: boolean;
		sectionTitle: string;
		sectionIntro?: SectionIntro;
		theme: SectionTheme;
	};

	// A neutral, non-palette color so this doesn't shift the section color
	// cycling — it isn't really a section, just the module's opening node.
	const introTheme: SectionTheme = {
		node: 'bg-brand text-white',
		nodeDone: 'bg-brand-soft text-brand-dark',
		banner: ''
	};

	// The whole module as one continuous path: an optional module-preface
	// node first, then every section's non-empty lessons, back to back. A
	// section with no content yet contributes nothing — same "empty =
	// skipped" rule as within a single section. Each section acts as one
	// colored zone; its lessons are the actual clickable nodes.
	let nodes = $derived.by(() => {
		const result: PathNode[] = [];

		const preface = getModulePreface(mod.id);
		if (preface) {
			const prefaceLesson: Lesson = {
				id: 'module-preface',
				titleHe: 'לפני שמתחילים',
				screens: [{ type: 'preface', text: preface.text }]
			};
			result.push({
				lesson: prefaceLesson,
				sectionId: 0,
				lessonIndexInSection: 0,
				isFirstOfSection: false,
				sectionTitle: '',
				sectionIntro: undefined,
				theme: introTheme
			});
		}

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
					isFirstOfSection: lessonIndexInSection === 0,
					sectionTitle: section.titleHe,
					sectionIntro: lessonIndexInSection === 0 ? content?.intro : undefined,
					theme
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

	// Which node is currently open in the runner (null = showing the path).
	let activeIndex = $state<number | null>(null);

	let activeNode = $derived(activeIndex !== null ? nodes[activeIndex] : undefined);
	let hasNextLesson = $derived(activeIndex !== null && activeIndex < nodes.length - 1);

	function openNode(index: number) {
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
	// winding path, with section banners just breaking it up visually.
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
			{#each nodes as node, i (node.sectionId + '-' + node.lessonIndexInSection)}
				{@const unlocked = isUnlocked(i)}
				{@const done = isDone(i)}

				{#if node.isFirstOfSection}
					<div
						class="mt-8 w-full max-w-xs rounded-2xl px-4 py-3 text-center shadow-md first:mt-0 {node
							.theme.banner}"
					>
						<span class="text-sm font-bold">{node.sectionTitle}</span>
					</div>
					{#if node.sectionIntro}
						<div
							class="mt-4 w-full rounded-3xl bg-surface p-5 shadow-md ring-1 shadow-ink/5 ring-line/70"
						>
							<p class="leading-relaxed">{node.sectionIntro.greeting}</p>
							{#if node.sectionIntro.goal}
								<p class="mt-3 leading-relaxed font-semibold">{node.sectionIntro.goal}</p>
							{/if}
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
						title={unlocked ? undefined : i18n.dict.lesson.lessonLocked}
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
					<span class="mt-2 max-w-32 text-center text-sm font-semibold">{node.lesson.titleHe}</span>
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
