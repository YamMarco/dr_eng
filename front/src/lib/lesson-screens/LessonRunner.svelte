<script lang="ts">
	import { untrack } from 'svelte';
	import AppBar from '$lib/components/AppBar.svelte';
	import Button from '$lib/components/Button.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import { screenComponents } from './registry';
	import { createLessonSession } from './session.svelte';
	import { createLessonScore } from './score.svelte';
	import { isScreenEmpty, countQuestions } from './types';
	import { debugStore } from '$lib/debug.svelte';
	import { editStore } from '$lib/content-edit/editStore.svelte';
	import ScreenForm from '$lib/content-edit/ScreenForm.svelte';
	import { formatScreenLocation, type ScreenPath } from '$lib/content-edit/screenPath';
	import { copyText } from '$lib/content-edit/clipboard';
	import type { LessonScreen } from './types';

	const PASS_THRESHOLD = 0.8;

	type Props = {
		/** One round's worth of screens (see the lessons path page — a lesson can have several rounds). */
		screens: LessonScreen[];
		/** Same length/order as `screens` — where each one lives in the lesson's content.
		    Only given when the caller also passes `lessonId`; powers the dev-only live edit button. */
		screenPaths?: ScreenPath[];
		lessonId?: string;
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
		screens: allScreens,
		screenPaths: allScreenPaths,
		lessonId,
		lessonLabel,
		hasNextLesson,
		onExit,
		onFinish,
		onFinishAndContinue
	}: Props = $props();

	const session = createLessonSession();

	// A screen left with no real content (empty message, no options, ...) is
	// skipped entirely rather than shown blank. Kept indices are carried over
	// to `screenPaths` in lockstep, so the two stay aligned by position.
	let keptIndices = $derived(
		allScreens.flatMap((screen, i) => (isScreenEmpty(screen) ? [] : [i]))
	);
	let screens = $derived(keptIndices.map((i) => allScreens[i]));
	let screenPaths = $derived(allScreenPaths ? keptIndices.map((i) => allScreenPaths![i]) : undefined);
	// Fixed upfront so the badge reads 1/3, 1/3, 2/3 as questions are
	// answered — never a growing denominator like 1/1, 1/2, 2/3.
	const totalQuestions = untrack(() =>
		screens.reduce((sum, screen) => sum + countQuestions(screen), 0)
	);
	let score = createLessonScore(totalQuestions);

	let screenIndex = $state(0);
	// Bound down into whichever screen component is active. It decides when
	// the single primary button is allowed (disabled) and what it should say
	// (label; '' = fall back to the default continue/done label below) — and
	// exposes primaryAction(), which the button actually calls. A screen with
	// its own internal steps (check an answer, then move to the next one) can
	// run several of those before ever calling onAdvance to leave the screen.
	let footerDisabled = $state(false);
	let footerLabel = $state('');
	// The registry is loosely typed (see registry.ts), so the bound instance
	// can't be typed more precisely than this without losing that genericity.
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let screenInstance = $state<any>(null);
	// One-time read: `screens` is fixed for this instance's lifetime (the
	// parent remounts the whole runner on a new round — see the lessons path
	// page), so only the initial emptiness matters here.
	let justFinished = $state(untrack(() => screens.length === 0));

	let currentScreen = $derived(screens[screenIndex]);
	let currentPath = $derived(screenPaths?.[screenIndex]);
	let currentLocation = $derived(currentPath ? formatScreenLocation(lessonId, currentPath) : undefined);
	let locationCopied = $state(false);

	async function copyLocation() {
		if (!currentLocation) return;
		const ok = await copyText(currentLocation);
		if (!ok) return;
		locationCopied = true;
		setTimeout(() => (locationCopied = false), 1200);
	}

	// Dev-only: edit the screen currently on-screen, without leaving the
	// runner. See src/lib/content-edit/README.md.
	let editSheetOpen = $state(false);

	async function saveCurrentScreen(next: LessonScreen) {
		if (!lessonId || !currentPath) return;
		const res = await fetch('/api/content-edit', {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify({ lessonId, ...currentPath, op: 'set', screen: next })
		});
		if (!res.ok) throw new Error(await res.text());
	}

	async function deleteCurrentScreen() {
		if (!lessonId || !currentPath) return;
		const res = await fetch('/api/content-edit', {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify({ lessonId, ...currentPath, op: 'delete' })
		});
		if (!res.ok) throw new Error(await res.text());
		// The round's screen list just shifted under us — safest is to leave
		// rather than keep playing with a stale index.
		editSheetOpen = false;
		onExit();
	}
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
				{/if}
			{:else}
				<Button onclick={() => screenInstance?.primaryAction()} disabled={footerDisabled}>
					{primaryLabel}
				</Button>
			{/if}
		</div>
	</div>

	{#if editStore.available && currentLocation && !justFinished}
		<!-- Dev-only: shows where the on-screen content lives, and opens its
		     editor. Detachable — see src/lib/content-edit/README.md. -->
		<div class="absolute inset-s-4 bottom-24 z-10 flex items-center gap-1.5">
			<button
				type="button"
				onclick={copyLocation}
				title="העתק מזהה מסך"
				dir="ltr"
				class="max-w-[70vw] truncate rounded-full bg-ink/80 px-3 py-1.5 font-mono text-xs font-semibold text-white shadow-lg"
			>
				{locationCopied ? 'הועתק ✓' : currentLocation}
			</button>
			<button
				type="button"
				onclick={() => (editSheetOpen = true)}
				title="ערוך מסך זה (דיבוג)"
				class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-white shadow-lg transition active:scale-95"
			>
				✏️
			</button>
		</div>
	{/if}

	{#if debugStore.enabled && !justFinished}
		<!-- Floating, absolutely positioned so it never affects the footer's
		     layout — a dev-only shortcut, not part of the real lesson UI. -->
		<button
			type="button"
			onclick={advance}
			class="absolute inset-e-4 bottom-24 z-10 rounded-full bg-ink px-3 py-1.5 text-xs font-semibold text-white shadow-lg transition active:scale-95"
		>
			דלג על מסך (דיבוג)
		</button>
	{/if}
</div>

{#if editSheetOpen && currentPath && currentScreen}
	<!-- svelte-ignore a11y_no_static_element_interactions, a11y_click_events_have_key_events -->
	<div
		class="fixed inset-0 z-60 flex items-end bg-black/40"
		onclick={() => (editSheetOpen = false)}
	>
		<div
			class="mx-auto max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-t-3xl bg-canvas p-4"
			onclick={(e) => e.stopPropagation()}
		>
			<div class="mb-2 flex items-center justify-between">
				<p class="text-sm font-bold">עריכת המסך הנוכחי</p>
				<button
					type="button"
					onclick={() => (editSheetOpen = false)}
					class="rounded-full px-2 py-1 text-xs font-semibold text-muted hover:bg-line/60"
				>
					סגור
				</button>
			</div>
			{#key screenIndex}
				<ScreenForm
					screen={currentScreen}
					{lessonId}
					bucket={currentPath.bucket}
					index={currentPath.index}
					onSave={saveCurrentScreen}
					onDelete={deleteCurrentScreen}
				/>
			{/key}
		</div>
	</div>
{/if}
