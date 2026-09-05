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
	import { formatScreenLocation, screenPathsForRound, screensForRound } from '$lib/content-edit/screenPath';
	import { copyText } from '$lib/content-edit/clipboard';
	import { saveLessonContent } from '$lib/content-edit/api';
	import type { LessonNode } from '$lib/content';
	import type { LessonScreen } from './types';

	const PASS_THRESHOLD = 0.8;

	type Props = {
		/** Used as-is when `lesson` isn't given (e.g. the debug vocab-test runner, which has no editable content). */
		screens?: LessonScreen[];
		/** When given (with `roundIndex`), the runner derives its own screens from
		    the lesson's content and enables live editing — add/edit/delete without
		    leaving this view, one lesson-wide save. */
		lesson?: LessonNode;
		roundIndex?: number;
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
		lessonLabel,
		hasNextLesson,
		onExit,
		onFinish,
		onFinishAndContinue
	}: Props = $props();

	const session = createLessonSession();

	// Local, mutable working copy of the lesson's content. Nothing here
	// touches the server until the "save lesson" button is pressed — one save
	// = one commit, however many screens were edited/added/removed meanwhile.
	// Editing this instead of re-deriving from `lesson` each time means
	// add/delete render immediately without leaving this view.
	// `lesson` flows through a $derived in the lessons page, so it's reactively
	// proxied — $state.snapshot() unwraps that to a plain, independently
	// mutable value (structuredClone alone throws on the proxy).
	let draftContent = $state(
		untrack(() => (lesson ? $state.snapshot(lesson.content) : undefined))
	);
	let dirty = $state(false);

	let allScreens = $derived(
		lesson && draftContent ? screensForRound(draftContent, roundIndex ?? 0) : (staticScreens ?? [])
	);
	let allScreenPaths = $derived(
		lesson && draftContent
			? screenPathsForRound(
					draftContent.preface.length,
					roundIndex ?? 0,
					draftContent.rounds[roundIndex ?? 0]?.screens.length ?? 0
				)
			: undefined
	);

	// A screen left with no real content (empty message, no options, ...) is
	// skipped entirely rather than shown blank. Kept indices are carried over
	// to `screenPaths` in lockstep, so the two stay aligned by position.
	let keptIndices = $derived(
		allScreens.flatMap((screen, i) => (isScreenEmpty(screen) ? [] : [i]))
	);
	let screens = $derived(keptIndices.map((i) => allScreens[i]));
	let screenPaths = $derived(allScreenPaths ? keptIndices.map((i) => allScreenPaths![i]) : undefined);
	// Fixed upfront so the badge reads 1/3, 1/3, 2/3 as questions are
	// answered — never a growing denominator like 1/1, 1/2, 2/3. (Editing the
	// round's scored screens away mid-preview can make this stale — an
	// acceptable edge case for an authoring action, not real play.)
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

	// Deleting the currently-viewed screen shifts the list under us — stay in
	// place (clamped) instead of exiting to the node map.
	$effect(() => {
		if (screens.length > 0 && screenIndex >= screens.length) screenIndex = screens.length - 1;
	});

	let currentScreen = $derived(screens[screenIndex]);
	let currentPath = $derived(screenPaths?.[screenIndex]);
	let currentLocation = $derived(currentPath ? formatScreenLocation(lesson?.id, currentPath) : undefined);
	let locationCopied = $state(false);

	async function copyLocation() {
		if (!currentLocation) return;
		const ok = await copyText(currentLocation);
		if (!ok) return;
		locationCopied = true;
		setTimeout(() => (locationCopied = false), 1200);
	}

	// Edit the screen currently on-screen without leaving the runner (gated
	// by editStore.available). See src/lib/content-edit/README.md.
	let editSheetOpen = $state(false);
	let saveState = $state<'idle' | 'saving' | 'saved' | 'error'>('idle');
	let saveError = $state('');

	function applyCurrentScreen(next: LessonScreen) {
		if (!draftContent || !currentPath) return;
		const list =
			currentPath.bucket === 'preface'
				? draftContent.preface
				: draftContent.rounds[currentPath.bucket].screens;
		list[currentPath.index] = next;
		dirty = true;
		saveState = 'idle';
	}

	function deleteCurrentScreen() {
		if (!draftContent || !currentPath) return;
		const list =
			currentPath.bucket === 'preface'
				? draftContent.preface
				: draftContent.rounds[currentPath.bucket].screens;
		list.splice(currentPath.index, 1);
		dirty = true;
		saveState = 'idle';
		editSheetOpen = false;
	}

	async function saveDraft() {
		if (!lesson || !draftContent) return;
		saveState = 'saving';
		saveError = '';
		try {
			await saveLessonContent(lesson.id, draftContent);
			dirty = false;
			saveState = 'saved';
		} catch (e) {
			saveState = 'error';
			saveError = e instanceof Error ? e.message : String(e);
		}
	}

	function confirmDiscard(): boolean {
		return !dirty || confirm('יש שינויים שלא נשמרו בשיעור. לצאת בכל זאת?');
	}
	function guardedExit() {
		if (confirmDiscard()) onExit();
	}
	function guardedFinish() {
		if (confirmDiscard()) onFinish();
	}
	function guardedFinishAndContinue() {
		if (confirmDiscard()) onFinishAndContinue();
	}
	function handleBeforeUnload(e: BeforeUnloadEvent) {
		if (!dirty) return;
		e.preventDefault();
		e.returnValue = '';
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

<svelte:window onbeforeunload={handleBeforeUnload} />

<div class="fixed inset-0 z-50 flex flex-col bg-canvas">
	<AppBar title={lessonLabel} onback={guardedExit} backLabel={i18n.dict.lesson.exitLabel} />

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
						<Button onclick={guardedFinishAndContinue}>{i18n.dict.lesson.continueNextLesson}</Button>
					{/if}
					<Button variant={hasNextLesson ? 'secondary' : 'primary'} onclick={guardedFinish}>
						{i18n.dict.lesson.backToPath}
					</Button>
				{:else}
					<Button onclick={retry}>{i18n.dict.lesson.retryButton}</Button>
					<Button variant="secondary" onclick={guardedExit}>{i18n.dict.lesson.backToPath}</Button>
				{/if}
			{:else}
				<Button onclick={() => screenInstance?.primaryAction()} disabled={footerDisabled}>
					{primaryLabel}
				</Button>
			{/if}
		</div>
	</div>

	{#if editStore.available && currentLocation && !justFinished}
		<!-- Shows where the on-screen content lives, and opens its editor.
		     Detachable — see src/lib/content-edit/README.md. -->
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
				title="ערוך מסך זה"
				class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-white shadow-lg transition active:scale-95"
			>
				✏️
			</button>
			{#if dirty}
				<button
					type="button"
					onclick={saveDraft}
					disabled={saveState === 'saving'}
					title="שמור שינויים בשיעור"
					class="flex h-9 items-center justify-center rounded-full bg-brand px-3 text-xs font-bold text-white shadow-lg transition active:scale-95 disabled:opacity-60"
				>
					{saveState === 'saving' ? '…' : '💾 שמור'}
				</button>
			{/if}
		</div>
	{/if}

	{#if saveState === 'saved'}
		<p
			class="absolute inset-x-4 bottom-40 z-10 rounded-xl bg-brand-soft px-3 py-2 text-center text-xs font-semibold text-brand-dark shadow-lg"
		>
			השינויים נשלחו. המתן כדקה ורענן את הדף כדי לראות אותם.
		</p>
	{:else if saveState === 'error'}
		<p
			class="absolute inset-x-4 bottom-40 z-10 rounded-xl bg-danger-soft px-3 py-2 text-center text-xs font-semibold text-danger"
			dir="ltr"
		>
			{saveError}
		</p>
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
					lessonId={lesson?.id}
					bucket={currentPath.bucket}
					index={currentPath.index}
					onApply={applyCurrentScreen}
					onDelete={deleteCurrentScreen}
				/>
			{/key}
		</div>
	</div>
{/if}
