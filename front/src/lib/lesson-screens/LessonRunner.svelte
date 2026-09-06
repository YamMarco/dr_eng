<script lang="ts">
	import { untrack } from 'svelte';
	import { dev } from '$app/environment';
	import AppBar from '$lib/components/AppBar.svelte';
	import Button from '$lib/components/Button.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import { screenComponents } from './registry';
	import { createLessonSession } from './session.svelte';
	import { createLessonScore } from './score.svelte';
	import { isScreenEmpty, countQuestions } from './types';
	import { debugStore } from '$lib/debug.svelte';
	import { screenPathsForRound, screensForRound } from '$lib/content-edit/screenPath';
	import type { LessonNode } from '$lib/content';
	import type { LessonScreen } from './types';

	const PASS_THRESHOLD = 0.8;

	type Props = {
		/** Used as-is when `lesson` isn't given (e.g. the debug vocab-test runner). */
		screens?: LessonScreen[];
		/** When given (with `roundIndex`) the runner derives its own screens from
		    the lesson's content. Editing happens in the /edit workspace now. */
		lesson?: LessonNode;
		roundIndex?: number;
		/** Start the round on this index into the played list (used by /edit's "play from here"). */
		startScreenIndex?: number;
		lessonLabel: string;
		hasNextLesson: boolean;
		/** Leaving mid-exercise (or after a failed attempt) — never marks the round complete. */
		onExit: () => void;
		/** Finished with a passing score — parent marks the round complete and closes the runner. */
		onFinish: () => void;
		/** Finished with a passing score and there's a next lesson — marks complete and opens it. */
		onFinishAndContinue: () => void;
	};

	let {
		screens: staticScreens,
		lesson,
		roundIndex,
		startScreenIndex = 0,
		lessonLabel,
		hasNextLesson,
		onExit,
		onFinish,
		onFinishAndContinue
	}: Props = $props();

	const session = createLessonSession();

	let allScreens = $derived(
		lesson ? screensForRound(lesson.content, roundIndex ?? 0) : (staticScreens ?? [])
	);
	let allScreenPaths = $derived(
		lesson
			? screenPathsForRound(
					lesson.content.preface.length,
					roundIndex ?? 0,
					lesson.content.rounds[roundIndex ?? 0]?.screens.length ?? 0
				)
			: undefined
	);

	// A screen left with no real content is skipped rather than shown blank.
	let keptIndices = $derived(allScreens.flatMap((screen, i) => (isScreenEmpty(screen) ? [] : [i])));
	let screens = $derived(keptIndices.map((i) => allScreens[i]));
	let screenPaths = $derived(
		allScreenPaths ? keptIndices.map((i) => allScreenPaths![i]) : undefined
	);
	// Fixed upfront so the badge reads 1/3, 1/3, 2/3 as questions are answered.
	const totalQuestions = untrack(() =>
		screens.reduce((sum, screen) => sum + countQuestions(screen), 0)
	);
	let score = createLessonScore(totalQuestions);

	let screenIndex = $state(
		untrack(() => Math.max(0, Math.min(startScreenIndex, Math.max(0, screens.length - 1))))
	);
	let footerDisabled = $state(false);
	let footerLabel = $state('');
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let screenInstance = $state<any>(null);
	let justFinished = $state(untrack(() => screens.length === 0));

	let currentScreen = $derived(screens[screenIndex]);
	let currentPath = $derived(screenPaths?.[screenIndex]);
	let editHref = $derived.by(() => {
		if (!dev || !lesson || !currentPath) return undefined;
		const round = currentPath.bucket === 'preface' ? 0 : currentPath.bucket;
		return `/edit?section=${lesson.section}&lesson=${lesson.id}&round=${round}&screen=${currentPath.index}`;
	});

	let isLastScreen = $derived(screenIndex === screens.length - 1);
	let ScreenComponent = $derived(currentScreen ? screenComponents[currentScreen.type] : undefined);
	let primaryLabel = $derived(
		footerLabel || (isLastScreen ? i18n.dict.lesson.doneButton : i18n.dict.lesson.continueButton)
	);
	// A lesson with no scored questions (pure teaching content) can't be failed.
	let passed = $derived(score.total === 0 || score.correct / score.total >= PASS_THRESHOLD);

	function advance() {
		if (isLastScreen) {
			justFinished = true;
		} else {
			screenIndex += 1;
		}
	}

	function retry() {
		screenIndex = 0;
		footerDisabled = false;
		footerLabel = '';
		justFinished = false;
		score.correct = 0;
		score.total = totalQuestions;
		for (const key of Object.keys(session)) delete session[key];
	}
</script>

<div class="fixed inset-0 z-50 flex flex-col bg-canvas">
	<AppBar title={lessonLabel} onback={onExit} backLabel={i18n.dict.lesson.exitLabel} />

	<main class="mx-auto w-full max-w-lg flex-1 overflow-y-auto px-4 pt-6 pb-6">
		{#if justFinished}
			<div class="flex flex-col items-center pt-10 text-center">
				<span
					class="flex h-16 w-16 items-center justify-center rounded-2xl {passed
						? 'bg-brand-soft text-brand'
						: 'bg-danger-soft text-danger'}"
				>
					{#if passed}
						<svg
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="h-8 w-8"
							aria-hidden="true"
						>
							<path d="M12 2 4 6v6c0 5 3.4 8.4 8 10 4.6-1.6 8-5 8-10V6l-8-4Z" />
							<path d="m9 12 2 2 4-4" />
						</svg>
					{:else}
						<svg
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="h-8 w-8"
							aria-hidden="true"
						>
							<circle cx="12" cy="12" r="9" />
							<path d="M12 8v5M12 16v.01" />
						</svg>
					{/if}
				</span>
				<h2 class="mt-4 text-2xl font-extrabold">
					{passed ? i18n.dict.lesson.completeTitle : i18n.dict.lesson.failTitle}
				</h2>
				<p class="mt-2 leading-relaxed text-muted">
					{passed ? i18n.dict.lesson.completeDesc : i18n.dict.lesson.failDesc(PASS_THRESHOLD * 100)}
				</p>
				{#if score.total > 0}
					<p class="mt-4 text-lg font-bold text-brand-dark tabular" dir="ltr">
						{score.correct}/{score.total}
					</p>
					<p class="mt-1 text-sm text-muted">{i18n.dict.lesson.scoreLabel}</p>
				{/if}
			</div>
		{:else if currentScreen && ScreenComponent}
			<!-- Force a full remount per screen so each component's own local
			     state (selected answer, timers, ...) starts fresh every time. -->
			{#key screenIndex}
				<ScreenComponent
					screen={currentScreen}
					onAdvance={advance}
					bind:disabled={footerDisabled}
					bind:label={footerLabel}
					bind:this={screenInstance}
				/>
			{/key}
		{/if}
	</main>

	<div class="sticky bottom-0 border-t border-line/70 bg-canvas/90 px-4 py-3 backdrop-blur">
		<div class="mx-auto flex max-w-lg flex-col gap-3">
			{#if justFinished}
				{#if passed}
					{#if hasNextLesson}
						<Button onclick={onFinishAndContinue}>{i18n.dict.lesson.continueNextLesson}</Button>
					{/if}
					<Button variant={hasNextLesson ? 'secondary' : 'primary'} onclick={onFinish}>
						{i18n.dict.lesson.backToPath}
					</Button>
				{:else}
					<Button onclick={retry}>{i18n.dict.lesson.retryButton}</Button>
					<Button variant="secondary" onclick={onExit}>{i18n.dict.lesson.backToPath}</Button>
					{#if debugStore.enabled}
						{#if hasNextLesson}
							<Button variant="ghost" onclick={onFinishAndContinue}>
								השלם והמשך לשיעור הבא (דיבוג)
							</Button>
						{/if}
						<Button variant="ghost" onclick={onFinish}>סמן סבב כהושלם (דיבוג)</Button>
					{/if}
				{/if}
			{:else}
				<Button onclick={() => screenInstance?.primaryAction()} disabled={footerDisabled}>
					{primaryLabel}
				</Button>
			{/if}
		</div>
	</div>

	{#if editHref && !justFinished}
		<!-- Dev-only deep link into the /edit workspace, focused on this screen.
		     Detachable — see src/lib/content-edit/README.md. -->
		<a
			href={editHref}
			title="ערוך מסך זה"
			class="absolute inset-s-4 bottom-24 z-10 rounded-full bg-ink/85 px-3 py-1.5 text-xs font-semibold text-white shadow-lg"
		>
			✏️ ערוך מסך זה
		</a>
	{/if}

	{#if debugStore.enabled && !justFinished}
		<!-- Floating, absolutely positioned so it never affects the footer's
		     layout — a dev-only shortcut, not part of the real lesson UI. -->
		<div class="absolute inset-e-4 bottom-24 z-10 flex flex-col items-end gap-1.5">
			<button
				type="button"
				onclick={() => (screenIndex = Math.max(0, screenIndex - 1))}
				disabled={screenIndex === 0}
				class="rounded-full bg-ink px-3 py-1.5 text-xs font-semibold text-white shadow-lg transition active:scale-95 disabled:opacity-40"
			>
				חזור מסך (דיבוג)
			</button>
			<button
				type="button"
				onclick={advance}
				class="rounded-full bg-ink px-3 py-1.5 text-xs font-semibold text-white shadow-lg transition active:scale-95"
			>
				דלג על מסך (דיבוג)
			</button>
			<button
				type="button"
				onclick={hasNextLesson ? onFinishAndContinue : onFinish}
				class="rounded-full bg-ink px-3 py-1.5 text-xs font-semibold text-white shadow-lg transition active:scale-95"
			>
				דלג על סבב (דיבוג)
			</button>
		</div>
	{/if}
</div>
