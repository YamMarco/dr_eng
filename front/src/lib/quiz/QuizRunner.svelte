<script lang="ts">
	import { untrack } from 'svelte';
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import AppBar from '$lib/components/AppBar.svelte';
	import Button from '$lib/components/Button.svelte';
	import Sheet from '$lib/components/Sheet.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import { screenComponents } from '$lib/lesson-screens/registry';
	import { createScreenMode } from '$lib/lesson-screens/mode.svelte';
	import { createLessonScore } from '$lib/lesson-screens/score.svelte';
	import { createLessonSession } from '$lib/lesson-screens/session.svelte';
	import { provideQuizAnswerSlot, type QuizAnswerSlot } from './answers.svelte';
	import { screensWithIds } from './screenIds';
	import { scoreQuiz, type QuizScore } from './scoring';
	import { saveAttempt, saveInProgress, getInProgress, clearInProgress } from './progress';
	import QuizReport from './QuizReport.svelte';
	import QuizTimer from './QuizTimer.svelte';
	import QuestionNavigator from './QuestionNavigator.svelte';
	import type { QuizNode } from './types';

	let {
		quiz,
		onExit,
		// Content-edit "play from here": jumps straight to a screen and skips
		// resume/progress/attempt persistence entirely, so testing an in-progress
		// edit never touches (or gets confused by) a real student's saved
		// progress for the same quiz id.
		preview = false,
		startPartIndex = 0,
		startScreenIndex = 0
	}: {
		quiz: QuizNode;
		onExit: () => void;
		preview?: boolean;
		startPartIndex?: number;
		startScreenIndex?: number;
	} = $props();

	// Screens read `mode` via context to skip the check/feedback step and
	// record straight into the answers bag instead of the lesson score.
	createScreenMode('quiz');
	// Defensive: any existing screen type that unconditionally calls
	// getLessonScore()/getLessonSession() (not yet made quiz-mode-aware)
	// still finds a context here instead of throwing. total=0 keeps
	// ScoreBadge from rendering anything.
	createLessonScore(0);
	createLessonSession();

	// One-time read at mount: is there an unfinished attempt to offer resuming?
	const savedProgress = untrack(() => (preview ? null : getInProgress(quiz.id)));
	const startedAt = savedProgress?.startedAt ?? Date.now();

	// Parts are a cosmetic grouping only (section headings + scoring buckets) -
	// the student plays through every screen from every part as one continuous
	// sequence, and can jump to any of them from the navigator.
	let allEntries = $derived(
		quiz.parts.flatMap((part, pi) =>
			screensWithIds(part).map((entry, ei) => ({ ...entry, partIndex: pi, isFirstOfPart: ei === 0 }))
		)
	);
	function entryIndexFor(partIdx: number, screenIdx: number): number {
		let index = 0;
		for (let i = 0; i < partIdx; i++) index += screensWithIds(quiz.parts[i]).length;
		return index + screenIdx;
	}

	const answers = $state<Record<string, unknown>>({});
	let entryIndex = $state(untrack(() => entryIndexFor(startPartIndex, startScreenIndex)));
	let submitted = $state(false);
	let score = $state<QuizScore | null>(null);
	let showExitPrompt = $state(false);
	let showResumePrompt = $state(savedProgress !== null);
	let footerDisabled = $state(false);
	// Screens still write to this (their own two-phase label), but the quiz
	// footer's visible text is computed below instead - a screen doesn't know
	// about parts or "submit" vs "next".
	let screenLabel = $state('');
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let screenInstance = $state<any>(null);
	let direction = $state(1);

	let currentEntry = $derived(allEntries[entryIndex]);
	let currentPart = $derived(currentEntry ? quiz.parts[currentEntry.partIndex] : quiz.parts[0]);
	let isLastScreen = $derived(entryIndex === allEntries.length - 1);
	let ScreenComponent = $derived(
		currentEntry ? screenComponents[currentEntry.screen.type] : undefined
	);

	let showNavigator = $derived(quiz.options.showNavigator ?? true);
	let answeredIndices = $derived(
		new Set(allEntries.flatMap((entry, i) => (entry.id in answers ? [i] : [])))
	);
	let passageIndices = $derived(
		new Set(allEntries.flatMap((entry, i) => (entry.screen.type === 'passage' ? [i] : [])))
	);
	let partBreaks = $derived(
		new Set(allEntries.flatMap((entry, i) => (entry.isFirstOfPart ? [i] : [])))
	);

	let showTimer = $derived(quiz.options.showTimer ?? quiz.options.durationMinutes !== undefined);
	// One-time read: durationMinutes is a fixed prop for this runner's lifetime.
	let remainingSeconds = $state(untrack(() => (quiz.options.durationMinutes ?? 0) * 60));
	let timerWarning = $derived(remainingSeconds <= (quiz.options.warnAtMinutes ?? 5) * 60);
	let timerLabel = $derived(quiz.options.showTimerLabel ? i18n.dict.quiz.timeLeftLabel : undefined);

	let footerLabel = $derived(isLastScreen ? i18n.dict.quiz.submitButton : i18n.dict.quiz.nextButton);

	const slot: QuizAnswerSlot = {
		get id() {
			return currentEntry?.id ?? '';
		},
		get() {
			return answers[currentEntry?.id ?? ''];
		},
		set(value: unknown) {
			if (currentEntry) answers[currentEntry.id] = value;
		}
	};
	provideQuizAnswerSlot(slot);

	function submit() {
		if (submitted) return;
		score = scoreQuiz(quiz, answers);
		submitted = true;
		if (preview) return;
		saveAttempt({
			quizId: quiz.id,
			startedAt,
			submittedAt: Date.now(),
			answers: { ...answers },
			score
		});
	}

	function resume() {
		if (!savedProgress) return;
		entryIndex = savedProgress.entryIndex;
		Object.assign(answers, savedProgress.answers);
		remainingSeconds = savedProgress.remainingSeconds;
		showResumePrompt = false;
	}

	function startOver() {
		clearInProgress(quiz.id);
		showResumePrompt = false;
	}

	function advance() {
		direction = 1;
		if (!isLastScreen) {
			entryIndex += 1;
		} else {
			submit();
		}
	}

	function jump(index: number) {
		if (index === entryIndex) return;
		if (index > entryIndex && quiz.options.allowSkip === false) return;
		if (index < entryIndex && quiz.options.allowBackWithinPart === false) return;
		direction = index > entryIndex ? 1 : -1;
		entryIndex = index;
	}

	// Waits out the resume prompt (depends on showResumePrompt so it re-runs
	// exactly once when that closes) and otherwise runs once, since
	// durationMinutes is a fixed prop. Starts from the current
	// remainingSeconds (read via untrack so the effect itself doesn't
	// depend on it - resume() may have already set it to a mid-quiz value).
	// The interval checks `submitted` itself each tick rather than the effect
	// depending on it, so a manual submit just lets the next tick stop it.
	$effect(() => {
		const minutes = quiz.options.durationMinutes;
		if (!minutes || showResumePrompt) return;
		const startSeconds = untrack(() => remainingSeconds);
		const endsAt = Date.now() + startSeconds * 1000;
		const interval = setInterval(() => {
			if (submitted) {
				clearInterval(interval);
				return;
			}
			const left = Math.max(0, Math.round((endsAt - Date.now()) / 1000));
			remainingSeconds = left;
			if (left === 0) {
				clearInterval(interval);
				submit();
			}
		}, 250);
		return () => clearInterval(interval);
	});

	// Persists on every screen move and timer tick so a refresh mid-quiz can
	// offer to resume. Skipped while the resume decision hasn't been made yet
	// (nothing has actually started), and once submitted (saveAttempt already
	// clears the in-progress record).
	$effect(() => {
		if (preview || submitted || showResumePrompt) return;
		saveInProgress({
			quizId: quiz.id,
			startedAt,
			entryIndex,
			answers: { ...answers },
			remainingSeconds
		});
	});

	function requestExit() {
		if (Object.keys(answers).length > 0) {
			showExitPrompt = true;
		} else {
			onExit();
		}
	}
</script>

<div class="fixed inset-0 z-50 flex flex-col overscroll-none bg-canvas">
	{#if submitted && score}
		<QuizReport {quiz} {score} onBack={onExit} />
	{:else}
		<AppBar title={quiz.titleHe} onback={requestExit} backLabel={i18n.dict.quiz.exitLabel}>
			{#snippet trailing()}
				{#if showTimer}
					<QuizTimer seconds={remainingSeconds} warning={timerWarning} label={timerLabel} />
				{/if}
			{/snippet}
		</AppBar>

		<div class="mx-auto w-full max-w-lg border-b border-line/70 px-4 pt-2 pb-2">
			<div class="flex flex-wrap items-center gap-1.5">
				{#if showNavigator && allEntries.length > 1}
					<QuestionNavigator
						total={allEntries.length}
						currentIndex={entryIndex}
						answered={answeredIndices}
						onJump={jump}
						style={quiz.options.navigatorStyle ?? 'numbers'}
						{passageIndices}
						{partBreaks}
					/>
				{:else if allEntries.length > 1}
					<p class="text-xs font-semibold text-muted tabular">
						{i18n.dict.quiz.questionProgress(entryIndex + 1, allEntries.length)}
					</p>
				{/if}
			</div>
		</div>

		<main class="mx-auto w-full max-w-lg flex-1 overflow-y-auto overscroll-contain px-4 pt-3 pb-6">
			{#if currentEntry?.isFirstOfPart}
				<h3 class="mb-1 text-sm font-bold text-muted">{currentPart.titleHe}</h3>
				{#if currentPart.instructionsHe}
					<p class="mb-4 text-sm leading-relaxed text-muted">{currentPart.instructionsHe}</p>
				{/if}
			{/if}
			{#if currentEntry && ScreenComponent}
				{#key entryIndex}
					<div in:fly={{ x: direction * 16, duration: 150, easing: cubicOut }}>
						<ScreenComponent
							screen={currentEntry.screen}
							onAdvance={advance}
							bind:disabled={footerDisabled}
							bind:label={screenLabel}
							bind:this={screenInstance}
						/>
					</div>
				{/key}
			{/if}
		</main>

		<div class="sticky bottom-0 border-t border-line/70 bg-canvas/90 px-4 py-3 backdrop-blur">
			<div class="mx-auto max-w-lg">
				<Button onclick={() => screenInstance?.primaryAction()} disabled={footerDisabled}>
					{footerLabel}
				</Button>
			</div>
		</div>

		<Sheet
			bind:open={showExitPrompt}
			title={i18n.dict.quiz.exitPromptTitle}
			description={i18n.dict.quiz.exitPromptDesc}
		>
			<Button onclick={onExit}>{i18n.dict.quiz.exitConfirm}</Button>
			<Button variant="ghost" onclick={() => (showExitPrompt = false)}>
				{i18n.dict.quiz.exitCancel}
			</Button>
		</Sheet>

		<Sheet
			bind:open={showResumePrompt}
			title={i18n.dict.quiz.resumePromptTitle}
			description={i18n.dict.quiz.resumePromptDesc}
		>
			<Button onclick={resume}>{i18n.dict.quiz.resumeConfirm}</Button>
			<Button variant="ghost" onclick={startOver}>{i18n.dict.quiz.resumeRestart}</Button>
		</Sheet>
	{/if}
</div>
