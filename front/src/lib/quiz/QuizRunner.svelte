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

	let { quiz, onExit }: { quiz: QuizNode; onExit: () => void } = $props();

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
	const savedProgress = untrack(() => getInProgress(quiz.id));
	const startedAt = savedProgress?.startedAt ?? Date.now();

	const answers = $state<Record<string, unknown>>({});
	let partIndex = $state(0);
	let screenIndex = $state(0);
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

	let currentPart = $derived(quiz.parts[partIndex]);
	let playedScreens = $derived(screensWithIds(currentPart));
	let currentEntry = $derived(playedScreens[screenIndex]);
	let isLastScreenInPart = $derived(screenIndex === playedScreens.length - 1);
	let isLastPart = $derived(partIndex === quiz.parts.length - 1);
	let ScreenComponent = $derived(
		currentEntry ? screenComponents[currentEntry.screen.type] : undefined
	);

	let showNavigator = $derived(quiz.options.showNavigator ?? true);
	let answeredIndices = $derived(
		new Set(playedScreens.flatMap((entry, i) => (entry.id in answers ? [i] : [])))
	);

	let showTimer = $derived(
		quiz.options.showTimer ?? quiz.options.durationMinutes !== undefined
	);
	// One-time read: durationMinutes is a fixed prop for this runner's lifetime.
	let remainingSeconds = $state(untrack(() => (quiz.options.durationMinutes ?? 0) * 60));
	let timerWarning = $derived(remainingSeconds <= (quiz.options.warnAtMinutes ?? 5) * 60);
	let timerLabel = $derived(quiz.options.showTimerLabel ? i18n.dict.quiz.timeLeftLabel : undefined);

	let footerLabel = $derived(
		!isLastScreenInPart
			? i18n.dict.quiz.nextButton
			: isLastPart
				? i18n.dict.quiz.submitButton
				: i18n.dict.quiz.nextPartButton(quiz.parts[partIndex + 1]?.titleHe ?? '')
	);

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
		partIndex = savedProgress.partIndex;
		screenIndex = savedProgress.screenIndex;
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
		if (!isLastScreenInPart) {
			screenIndex += 1;
		} else if (!isLastPart) {
			partIndex += 1;
			screenIndex = 0;
		} else {
			submit();
		}
	}

	function jump(index: number) {
		if (index === screenIndex) return;
		if (index > screenIndex && quiz.options.allowSkip === false) return;
		if (index < screenIndex && quiz.options.allowBackWithinPart === false) return;
		direction = index > screenIndex ? 1 : -1;
		screenIndex = index;
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
		if (submitted || showResumePrompt) return;
		saveInProgress({
			quizId: quiz.id,
			startedAt,
			partIndex,
			screenIndex,
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
		<AppBar
			title="{partIndex + 1} - {currentPart.titleHe}"
			onback={requestExit}
			backLabel={i18n.dict.quiz.exitLabel}
		>
			{#snippet trailing()}
				{#if showTimer}
					<QuizTimer seconds={remainingSeconds} warning={timerWarning} label={timerLabel} />
				{/if}
			{/snippet}
		</AppBar>

		<div class="mx-auto w-full max-w-lg border-b border-line/70 px-4 pt-2 pb-2">
			<div class="flex flex-wrap items-center gap-1.5">
				{#if showNavigator && playedScreens.length > 1}
					<QuestionNavigator
						total={playedScreens.length}
						currentIndex={screenIndex}
						answered={answeredIndices}
						onJump={jump}
						style={quiz.options.navigatorStyle ?? 'numbers'}
					/>
				{:else if playedScreens.length > 1}
					<p class="text-xs font-semibold text-muted tabular">
						{i18n.dict.quiz.questionProgress(screenIndex + 1, playedScreens.length)}
					</p>
				{/if}
			</div>
		</div>

		<main class="mx-auto w-full max-w-lg flex-1 overflow-y-auto overscroll-contain px-4 pt-3 pb-6">
			{#if currentPart.instructionsHe && screenIndex === 0}
				<p class="mb-4 text-sm leading-relaxed text-muted">{currentPart.instructionsHe}</p>
			{/if}
			{#if currentEntry && ScreenComponent}
				{#key `${partIndex}-${screenIndex}`}
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
