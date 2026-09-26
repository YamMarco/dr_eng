<script lang="ts">
	import { untrack } from 'svelte';
	import { Tween } from 'svelte/motion';
	import { fly } from 'svelte/transition';
	import { cubicOut, backOut } from 'svelte/easing';
	import { BookOpen } from '@lucide/svelte';
	import { dev } from '$app/environment';
	import AppBar from '$lib/components/AppBar.svelte';
	import Button from '$lib/components/Button.svelte';
	import Confetti from '$lib/components/Confetti.svelte';
	import LessonProgressBar from '$lib/components/LessonProgressBar.svelte';
	import Sheet from '$lib/components/Sheet.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import { screenComponents } from './registry';
	import PrefaceRecap from './PrefaceRecap.svelte';
	import { createLessonSession } from './session.svelte';
	import { createLessonScore } from './score.svelte';
	import { isScreenEmpty, countQuestions } from './types';
	import { debugStore } from '$lib/debug.svelte';
	import { lockScroll } from '$lib/scrollLock';
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
		/** Finished with a passing score and it's not the lesson's last round — marks complete and opens the next round. */
		onNextRound: () => void;
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
		onFinishAndContinue,
		onNextRound
	}: Props = $props();

	const session = createLessonSession();

	$effect(() => lockScroll());

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
	let baseScreens = $derived(keptIndices.map((i) => allScreens[i]));
	// Rounds with `retryMissed` replay each wrongly-answered scored screen once,
	// at the end. The replay is practice only — it never changes the score.
	let retryMissed = $derived(!!lesson?.content.rounds[roundIndex ?? 0]?.retryMissed);
	let retryQueue = $state<LessonScreen[]>([]);
	let screens = $derived([...baseScreens, ...retryQueue]);
	let correctAtScreenStart = 0;
	let screenPaths = $derived(
		allScreenPaths ? keptIndices.map((i) => allScreenPaths![i]) : undefined
	);
	// Groups consecutive screens sharing a bucket (preface, round N) into one bar
	// each, so the progress row visibly separates preface from the round itself.
	let progressSegments = $derived.by(() => {
		if (!screenPaths || screenPaths.length === 0) return [screens.length];
		const lengths: number[] = [];
		let bucket: NonNullable<typeof screenPaths>[number]['bucket'] | undefined;
		for (const path of screenPaths) {
			if (path.bucket !== bucket) {
				lengths.push(0);
				bucket = path.bucket;
			}
			lengths[lengths.length - 1] += 1;
		}
		if (retryQueue.length > 0) lengths.push(retryQueue.length);
		return lengths;
	});
	// Fixed upfront so the badge reads 1/3, 1/3, 2/3 as questions are answered.
	const totalQuestions = untrack(() =>
		baseScreens.reduce((sum, screen) => sum + countQuestions(screen), 0)
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
	// 1 = advancing (next screen slides in from the leading edge), -1 = the
	// dev-only back shortcut (slides in from the trailing edge instead).
	let direction = $state(1);

	// Counts up from 0 to the final score once the finish screen appears,
	// instead of the number just appearing — reset instantly on retry so the
	// next finish animates fresh rather than from wherever it last landed.
	const scoreTween = new Tween(0, { duration: 400, easing: cubicOut });
	$effect(() => {
		if (justFinished) scoreTween.set(score.correct);
	});

	let currentScreen = $derived(screens[screenIndex]);
	let currentPath = $derived(screenPaths?.[screenIndex]);
	let editHref = $derived.by(() => {
		if (!dev || !lesson || !currentPath) return undefined;
		const round = currentPath.bucket === 'preface' ? 0 : currentPath.bucket;
		return `/edit?section=${lesson.section}&lesson=${lesson.id}&round=${round}&screen=${currentPath.index}`;
	});

	// "Glance back" sheet: the lesson's teaching preface, viewable over any
	// exercise without leaving it (the runner's state — screen, score, timers'
	// bags — is untouched while it's open). Scored screens are left out: the
	// sheet is read-only.
	let prefaceOpen = $state(false);
	let debugOpen = $state(false);
	let prefaceScreens = $derived(
		(lesson?.content.preface ?? []).filter((s) => !isScreenEmpty(s) && countQuestions(s) === 0)
	);
	// Redundant while the preface itself is what's on screen.
	let canRecapPreface = $derived(
		prefaceScreens.length > 0 && !justFinished && currentPath?.bucket !== 'preface'
	);

	let isLastScreen = $derived(screenIndex === screens.length - 1);
	let ScreenComponent = $derived(currentScreen ? screenComponents[currentScreen.type] : undefined);
	let primaryLabel = $derived(
		footerLabel || (isLastScreen ? i18n.dict.lesson.doneButton : i18n.dict.lesson.continueButton)
	);
	// A lesson with no scored questions (pure teaching content) can't be failed.
	let passed = $derived(score.total === 0 || score.correct / score.total >= PASS_THRESHOLD);
	// Static-screen runs (e.g. the debug vocab test) have no rounds of their own —
	// treat them as always "last round" so they keep the old finish/next-lesson flow.
	let isLastRound = $derived(!lesson || (roundIndex ?? 0) >= lesson.content.rounds.length - 1);

	function advance() {
		direction = 1;
		if (retryMissed && currentScreen) {
			if (screenIndex >= baseScreens.length) {
				score.correct = correctAtScreenStart;
			} else if (score.correct - correctAtScreenStart < countQuestions(currentScreen)) {
				retryQueue.push(currentScreen);
			}
		}
		correctAtScreenStart = score.correct;
		if (isLastScreen) {
			justFinished = true;
		} else {
			screenIndex += 1;
		}
	}

	function retry() {
		direction = 1;
		screenIndex = 0;
		footerDisabled = false;
		footerLabel = '';
		justFinished = false;
		retryQueue = [];
		correctAtScreenStart = 0;
		score.correct = 0;
		score.total = totalQuestions;
		scoreTween.set(0, { duration: 0 });
		for (const key of Object.keys(session)) delete session[key];
	}
</script>

<div class="fixed inset-0 z-50 flex flex-col overscroll-none bg-canvas">
	<AppBar title={lessonLabel} onback={onExit} backLabel={i18n.dict.lesson.exitLabel}>
		{#snippet trailing()}
			{#if canRecapPreface}
				<button
					type="button"
					onclick={() => (prefaceOpen = true)}
					class="inline-flex h-9 items-center gap-1.5 rounded-full bg-brand-soft px-3 text-sm font-semibold text-brand-dark transition active:scale-95"
				>
					<BookOpen size={16} aria-hidden="true" />
					{i18n.dict.lesson.prefaceButton}
				</button>
			{/if}
		{/snippet}
	</AppBar>
	{#if !justFinished}
		<LessonProgressBar segments={progressSegments} current={screenIndex} />
	{/if}

	<main
		class="mx-auto flex w-full max-w-lg flex-1 flex-col overflow-y-auto overscroll-contain px-4 pt-6 pb-6"
	>
		{#if justFinished}
			<div class="relative flex flex-col items-center pt-10 text-center">
				{#if passed}
					<Confetti />
				{/if}
				<span
					in:fly={{ y: -12, duration: 280, delay: 0, easing: backOut }}
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
						{Math.round(scoreTween.current)}/{score.total}
					</p>
					<p class="mt-1 text-sm text-muted">{i18n.dict.lesson.scoreLabel}</p>
				{/if}
			</div>
		{:else if currentScreen && ScreenComponent}
			<!-- Force a full remount per screen so each component's own local
			     state (selected answer, timers, ...) starts fresh every time. -->
			{#key screenIndex}
				<!-- flex-1: lets a screen fill (and fit) the viewport height. -->
				<div
					class="flex min-h-0 flex-1 flex-col"
					in:fly={{ x: direction * 12, duration: 100, easing: cubicOut }}
				>
					<ScreenComponent
						screen={currentScreen}
						onAdvance={advance}
						bind:disabled={footerDisabled}
						bind:label={footerLabel}
						bind:this={screenInstance}
					/>
				</div>
			{/key}
		{/if}
	</main>

	<div class="sticky bottom-0 border-t border-line/70 bg-canvas/90 px-4 py-3 backdrop-blur">
		<div class="mx-auto flex max-w-lg flex-col gap-3">
			{#if justFinished}
				{#if passed}
					{#if isLastRound}
						{#if hasNextLesson}
							<Button onclick={onFinishAndContinue}>{i18n.dict.lesson.continueNextLesson}</Button>
						{/if}
						<Button variant={hasNextLesson ? 'secondary' : 'primary'} onclick={onFinish}>
							{i18n.dict.lesson.backToPath}
						</Button>
					{:else}
						<Button onclick={onNextRound}>{i18n.dict.lesson.continueNextRound}</Button>
						<Button variant="secondary" onclick={onFinish}>
							{i18n.dict.lesson.backToPath}
						</Button>
					{/if}
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

	<Sheet
		bind:open={prefaceOpen}
		title={i18n.dict.lesson.prefaceTitle}
		description={i18n.dict.lesson.prefaceHint}
	>
		<PrefaceRecap screens={prefaceScreens} onclose={() => (prefaceOpen = false)} />
	</Sheet>

	{#if editHref && !justFinished}
		<!-- Dev-only deep link into the /edit workspace, focused on this screen.
		     Detachable — see src/lib/content-edit/README.md. -->
		<a
			href={editHref}
			title="ערוך מסך זה"
			class="absolute inset-s-4 bottom-24 z-10 rounded-full bg-overlay/85 px-3 py-1.5 text-xs font-semibold text-white shadow-lg"
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
				aria-label="כלי דיבוג"
				aria-expanded={debugOpen}
				onclick={() => (debugOpen = !debugOpen)}
				class="flex h-9 w-9 items-center justify-center rounded-full bg-overlay text-base text-white shadow-lg transition active:scale-95"
			>
				🐞
			</button>
			{#if debugOpen}
				<button
					type="button"
					onclick={() => {
						direction = -1;
						screenIndex = Math.max(0, screenIndex - 1);
					}}
					disabled={screenIndex === 0}
					class="rounded-full bg-overlay px-3 py-1.5 text-xs font-semibold text-white shadow-lg transition active:scale-95 disabled:opacity-40"
				>
					חזור מסך (דיבוג)
				</button>
				<button
					type="button"
					onclick={advance}
					class="rounded-full bg-overlay px-3 py-1.5 text-xs font-semibold text-white shadow-lg transition active:scale-95"
				>
					דלג על מסך (דיבוג)
				</button>
				<button
					type="button"
					onclick={hasNextLesson ? onFinishAndContinue : onFinish}
					class="rounded-full bg-overlay px-3 py-1.5 text-xs font-semibold text-white shadow-lg transition active:scale-95"
				>
					דלג על סבב (דיבוג)
				</button>
			{/if}
		</div>
	{/if}
</div>
