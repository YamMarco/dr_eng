<script lang="ts">
	import AppBar from '$lib/components/AppBar.svelte';
	import LessonRunner from '$lib/lesson-screens/LessonRunner.svelte';
	import { getLessonContent } from '$lib/lessonContent';
	import { i18n } from '$lib/i18n/index.svelte';
	import { debugStore } from '$lib/debug.svelte';
	import { lessonProgress } from '$lib/lessonProgress.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let group = $derived(data.group);
	let mod = $derived(data.mod);
	let lesson = $derived(data.lesson);
	let content = $derived(getLessonContent(mod.id, lesson.id));
	// Parts with no screens yet aren't shown at all — nothing to lowlight.
	let visibleParts = $derived(content?.parts.filter((part) => part.screens.length > 0) ?? []);
	let lessonKey = $derived(`${mod.id}-${lesson.id}`);

	// Which part is currently open in the runner (null = showing the path).
	let activePartIndex = $state<number | null>(null);

	let activePart = $derived(activePartIndex !== null ? visibleParts[activePartIndex] : undefined);
	let hasNextPart = $derived(activePartIndex !== null && activePartIndex < visibleParts.length - 1);

	function openPart(index: number) {
		activePartIndex = index;
	}

	function closePart() {
		activePartIndex = null;
	}

	function finishPart() {
		if (activePartIndex !== null) lessonProgress.markCompleted(lessonKey, activePartIndex);
		activePartIndex = null;
	}

	function finishPartAndContinue() {
		if (activePartIndex === null) return;
		lessonProgress.markCompleted(lessonKey, activePartIndex);
		activePartIndex += 1;
	}
</script>

<AppBar
	title="{i18n.dict.lesson.titlePrefix} {lesson.id}"
	back="/unit/{group.id}/module/{mod.id}/lessons"
/>

<main class="mx-auto w-full max-w-lg flex-1 px-4 pt-6 pb-12">
	<h1 class="text-2xl font-extrabold">
		{#if lesson.titleEn}
			<span dir="ltr">{lesson.titleEn}</span> ({lesson.titleHe})
		{:else}
			{lesson.titleHe}
		{/if}
	</h1>

	{#if !content || visibleParts.length === 0}
		<div
			class="mt-6 flex flex-col items-center rounded-3xl border-2 border-dashed border-line bg-surface/60 px-6 py-14 text-center"
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
					<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
					<path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
				</svg>
			</span>
			<p class="mt-4 font-semibold">{i18n.dict.lesson.placeholderTitle}</p>
			<p class="mt-1 text-sm leading-relaxed text-muted">{i18n.dict.lesson.placeholderDesc}</p>
		</div>
	{:else}
		{#if content.intro}
			<div class="mt-4 rounded-3xl bg-surface p-5 shadow-md ring-1 shadow-ink/5 ring-line/70">
				<p class="leading-relaxed">{content.intro.greeting}</p>
				<p class="mt-3 leading-relaxed font-semibold">{content.intro.goal}</p>
			</div>
		{/if}

		<p class="mt-6 leading-relaxed text-muted">{i18n.dict.lesson.pathIntro}</p>

		<!-- Duolingo-style path: a vertical row of nodes, one per part. -->
		<ol class="mt-8 flex flex-col items-center">
			{#each visibleParts as part, i (part.id)}
				{@const unlocked =
					debugStore.unlockAll || i === 0 || lessonProgress.isCompleted(lessonKey, i - 1)}
				{@const done = lessonProgress.isCompleted(lessonKey, i)}
				<li
					class="flex flex-col items-center transition-opacity {unlocked || done
						? ''
						: 'opacity-40'}"
				>
					{#if i > 0}
						<div class="h-8 w-1 rounded-full bg-line"></div>
					{/if}
					<button
						type="button"
						disabled={!unlocked}
						title={unlocked ? undefined : i18n.dict.lesson.partLocked}
						onclick={() => openPart(i)}
						class="flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-2xl font-extrabold shadow-md transition {unlocked
							? done
								? 'bg-brand-soft text-brand-dark active:scale-95'
								: 'bg-brand text-white active:scale-95'
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
					<span class="mt-2 max-w-40 text-center text-sm font-semibold">{part.titleHe}</span>
				</li>
			{/each}
		</ol>
	{/if}
</main>

{#if activePart}
	<!-- Keyed on the index so "continue to next part" forces a full remount
	     instead of just handing the same runner instance a new `part` prop. -->
	{#key activePartIndex}
		<LessonRunner
			part={activePart}
			partLabel={i18n.dict.lesson.partLabel((activePartIndex ?? 0) + 1)}
			{hasNextPart}
			onExit={closePart}
			onFinish={finishPart}
			onFinishAndContinue={finishPartAndContinue}
		/>
	{/key}
{/if}
