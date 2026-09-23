<script lang="ts">
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
	import QuizReport from './QuizReport.svelte';
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

	const answers = $state<Record<string, unknown>>({});
	let partIndex = $state(0);
	let screenIndex = $state(0);
	let submitted = $state(false);
	let score = $state<QuizScore | null>(null);
	let showExitPrompt = $state(false);
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

	function advance() {
		direction = 1;
		if (!isLastScreenInPart) {
			screenIndex += 1;
		} else if (!isLastPart) {
			partIndex += 1;
			screenIndex = 0;
		} else {
			score = scoreQuiz(quiz, answers);
			submitted = true;
		}
	}

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
		<AppBar title={currentPart.titleHe} onback={requestExit} backLabel={i18n.dict.quiz.exitLabel} />

		<div class="mx-auto w-full max-w-lg px-4 pt-3">
			<p class="text-xs font-semibold text-muted">
				{i18n.dict.quiz.partProgress(partIndex + 1, quiz.parts.length)}
				{#if playedScreens.length > 1}
					· {i18n.dict.quiz.questionProgress(screenIndex + 1, playedScreens.length)}
				{/if}
			</p>
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
	{/if}
</div>
