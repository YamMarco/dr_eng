<script lang="ts">
	import { setContext, untrack } from 'svelte';
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { SvelteMap, SvelteSet } from 'svelte/reactivity';
	import { PASSAGE_MARKS, type PassageMarksStore } from '$lib/lesson-screens/passageMarks';
	import { MediaQuery } from 'svelte/reactivity';
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
	import { applyGrades, scoreQuiz, scoreScreen, type QuizScore } from './scoring';
	import AnswerReview from './AnswerReview.svelte';
	import { gradeExam } from '$lib/feedback/gradeExam';
	import type { ExamGrade } from '$lib/feedback/types';
	import { saveAttempt, saveInProgress } from './progress';
	import QuizReport from './QuizReport.svelte';
	import QuizTimer from './QuizTimer.svelte';
	import QuestionNavigator from './QuestionNavigator.svelte';
	import PassageBody from '$lib/lesson-screens/PassageBody.svelte';
	import type { QuizNode } from './types';
	import { screenContext } from '$lib/screenContext.svelte';

	let {
		quiz,
		onExit,
		// Content-edit "play from here": jumps straight to a screen and skips
		// resume/progress/attempt persistence entirely, so testing an in-progress
		// edit never touches (or gets confused by) a real student's saved
		// progress for the same quiz id.
		preview = false,
		// Practice: each question's feedback right after it is answered, a retry
		// when it wasn't fully right (the first answer is the one scored), no
		// timer, and the attempt isn't saved as an exam result.
		practice = false,
		startPartIndex = 0,
		startScreenIndex = 0
	}: {
		quiz: QuizNode;
		onExit: () => void;
		preview?: boolean;
		practice?: boolean;
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

	const startedAt = Date.now();

	// Parts are a cosmetic grouping only (section headings + scoring buckets) -
	// the student plays through every screen from every part as one continuous
	// sequence, and can jump to any of them from the navigator.
	let allEntries = $derived(
		quiz.parts.flatMap((part, pi) =>
			screensWithIds(part).map((entry, ei) => ({
				...entry,
				partIndex: pi,
				isFirstOfPart: ei === 0
			}))
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
	// Open answers (writing tasks) are LLM-graded after submit; see feedback/gradeExam.
	let autoScore: QuizScore | null = null;
	let grades = $state<Record<string, ExamGrade>>({});
	let grading = $state(false);
	let submittedAt = 0;
	let showExitPrompt = $state(false);
	let footerDisabled = $state(false);
	// Screens still write to this (their own two-phase label), but the quiz
	// footer's visible text is computed below instead - a screen doesn't know
	// about parts or "submit" vs "next".
	let screenLabel = $state('');
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let screenInstance = $state<any>(null);
	let direction = $state(1);

	// Practice: questions answered and shown with their feedback, and the
	// first answer to each (what the score counts, whatever the retries).
	const reviewed = new SvelteSet<string>();
	// The question types AnswerReview can show; others (a COBE recording) just move on.
	const REVIEWED_TYPES = new Set(['mcq', 'match-definitions', 'writing-task']);
	const firstAnswers: Record<string, unknown> = {};
	let retries = $state(0);

	let currentEntry = $derived(allEntries[entryIndex]);

	// Feedback reports name the screen the student is on.
	$effect(() => {
		if (!currentEntry) return;
		screenContext.label = `${quiz.id} · ${currentEntry.id}`;
		return () => (screenContext.label = '');
	});
	let reviewing = $derived(practice && !!currentEntry && reviewed.has(currentEntry.id));
	let reviewScore = $derived(
		reviewing && currentEntry
			? scoreScreen(currentEntry.screen, answers[currentEntry.id])
			: undefined
	);
	// Auto-scored and not fully right: worth another go.
	let canRetry = $derived(
		!!reviewScore && reviewScore.auto && reviewScore.earned < reviewScore.max
	);
	let currentPart = $derived(currentEntry ? quiz.parts[currentEntry.partIndex] : quiz.parts[0]);
	let isLastScreen = $derived(entryIndex === allEntries.length - 1);
	let ScreenComponent = $derived(
		currentEntry ? screenComponents[currentEntry.screen.type] : undefined
	);

	// The passage a question belongs to: the nearest `passage` screen before
	// it in the same part. Shown beside the question (pinned on wide screens,
	// collapsible on phones) so the student never has to navigate away from
	// the text to answer. Its index keys the panel, so highlights survive
	// moving between that passage's questions.
	let passageEntryIndex = $derived.by(() => {
		if (!currentEntry || currentEntry.screen.type === 'passage') return -1;
		for (let i = entryIndex - 1; i >= 0; i--) {
			const entry = allEntries[i];
			if (entry.partIndex !== currentEntry.partIndex) return -1;
			if (entry.screen.type === 'passage') return i;
		}
		return -1;
	});
	let activePassage = $derived.by(() => {
		const screen = allEntries[passageEntryIndex]?.screen;
		return screen?.type === 'passage' ? screen : undefined;
	});
	let passageOpen = $state(false);

	// Highlights per passage, shared by its own screen and the in-question panel.
	setContext<PassageMarksStore>(PASSAGE_MARKS, new SvelteMap());

	let showNavigator = $derived(quiz.options.showNavigator ?? true);
	let answeredIndices = $derived(
		new Set(allEntries.flatMap((entry, i) => (entry.id in answers ? [i] : [])))
	);
	let passageIndices = $derived(
		new Set(allEntries.flatMap((entry, i) => (entry.screen.type === 'passage' ? [i] : [])))
	);
	// lg+ pins the passage beside its questions, so the standalone passage
	// screen is redundant there: it's skipped in navigation and hidden from the
	// navigator. Phones keep it as the first, full-width read.
	const wide = new MediaQuery('min-width: 1024px');
	let hiddenIndices = $derived(wide.current ? passageIndices : undefined);
	let quizHasPassage = $derived(passageIndices.size > 0);
	// Runs before the DOM updates, so a skipped passage never flashes.
	$effect.pre(() => {
		if (!hiddenIndices?.has(entryIndex)) return;
		const forward = untrack(() => direction) > 0 || entryIndex === 0;
		let i = entryIndex;
		while (hiddenIndices.has(i)) i += forward ? 1 : -1;
		if (i < 0) i = entryIndex + 1;
		if (i < allEntries.length) entryIndex = i;
	});
	let partBreaks = $derived(
		new Set(allEntries.flatMap((entry, i) => (entry.isFirstOfPart ? [i] : [])))
	);

	let showTimer = $derived(
		!practice && (quiz.options.showTimer ?? quiz.options.durationMinutes !== undefined)
	);
	// One-time read: durationMinutes is a fixed prop for this runner's lifetime.
	let remainingSeconds = $state(untrack(() => (quiz.options.durationMinutes ?? 0) * 60));
	let timerWarning = $derived(remainingSeconds <= (quiz.options.warnAtMinutes ?? 5) * 60);
	let timerLabel = $derived(quiz.options.showTimerLabel ? i18n.dict.quiz.timeLeftLabel : undefined);

	let footerLabel = $derived(
		isLastScreen ? i18n.dict.quiz.submitButton : i18n.dict.quiz.nextButton
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

	/** What the score counts: in practice, each question's first answer. */
	function scoredAnswers(): Record<string, unknown> {
		return practice ? { ...$state.snapshot(answers), ...firstAnswers } : $state.snapshot(answers);
	}

	function submit() {
		if (submitted) return;
		autoScore = scoreQuiz(quiz, scoredAnswers());
		score = autoScore;
		submitted = true;
		submittedAt = Date.now();
		persist(); // saved before grading too, so closing the page mid-grading keeps the attempt
		void gradeOpen();
	}

	/** Grades the open answers (all, or only `ids` on a retry) and folds them into the score. */
	async function gradeOpen(ids?: Set<string>) {
		if (!autoScore || autoScore.manual.items.length === 0) return;
		grading = true;
		const fresh = await gradeExam(quiz, scoredAnswers(), ids);
		grades = { ...grades, ...fresh };
		score = applyGrades(quiz, autoScore, grades);
		grading = false;
		persist();
	}

	/** A COBE recording judged in the report: folded in like an LLM grade. */
	function selfGrade(screenId: string, grade: ExamGrade) {
		if (!autoScore) return;
		grades = { ...grades, [screenId]: grade };
		score = applyGrades(quiz, autoScore, grades);
		persist();
	}

	function retryGrading() {
		void gradeOpen(new Set(Object.keys(grades).filter((id) => grades[id].status === 'failed')));
	}

	function persist() {
		if (preview || practice || !score) return;
		saveAttempt({
			quizId: quiz.id,
			startedAt,
			submittedAt,
			answers: { ...answers },
			score,
			grades: $state.snapshot(grades)
		});
	}

	function advance() {
		// Practice: a just-answered question stops for its feedback first.
		const entry = currentEntry;
		if (practice && entry && !reviewing && REVIEWED_TYPES.has(entry.screen.type)) {
			if (!(entry.id in firstAnswers)) firstAnswers[entry.id] = $state.snapshot(answers[entry.id]);
			reviewed.add(entry.id);
			return;
		}
		direction = 1;
		if (!isLastScreen) {
			entryIndex += 1;
		} else {
			submit();
		}
	}

	/** Practice: answer the shown question again from scratch (the first answer stays scored). */
	function retry() {
		if (!currentEntry) return;
		delete answers[currentEntry.id];
		reviewed.delete(currentEntry.id);
		retries += 1;
	}

	function jump(index: number) {
		if (index === entryIndex) return;
		if (index > entryIndex && quiz.options.allowSkip === false) return;
		if (index < entryIndex && quiz.options.allowBackWithinPart === false) return;
		direction = index > entryIndex ? 1 : -1;
		entryIndex = index;
	}

	// Runs once, since durationMinutes is a fixed prop.
	// The interval checks `submitted` itself each tick rather than the effect
	// depending on it, so a manual submit just lets the next tick stop it.
	$effect(() => {
		const minutes = quiz.options.durationMinutes;
		if (!minutes || practice) return;
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

	// An exam can't be resumed: leaving it loses the answers. This marker only
	// drives the "unfinished exam" badge until the next attempt is submitted
	// (saveAttempt clears it).
	$effect(() => {
		if (preview || practice || submitted) return;
		saveInProgress({ quizId: quiz.id, startedAt });
	});

	function requestExit() {
		showExitPrompt = true;
	}
</script>

{#snippet navigator()}
	<QuestionNavigator
		total={allEntries.length}
		currentIndex={entryIndex}
		answered={answeredIndices}
		onJump={jump}
		style={quiz.options.navigatorStyle ?? 'numbers'}
		{passageIndices}
		{hiddenIndices}
		{partBreaks}
	/>
{/snippet}

{#snippet barTimer()}
	<QuizTimer seconds={remainingSeconds} warning={timerWarning} label={timerLabel} />
{/snippet}

<div class="fixed inset-0 z-50 flex flex-col overscroll-none bg-canvas">
	{#if submitted && score}
		<QuizReport
			{quiz}
			{score}
			{grades}
			{grading}
			{answers}
			onGrade={selfGrade}
			onRetry={retryGrading}
			onBack={onExit}
		/>
	{:else}
		<!-- No exam title: it tells the student nothing mid-exam and clips on a phone.
		     The bar holds the question navigator, or a plain count when there is none. -->
		<AppBar
			title={!showNavigator && allEntries.length > 1
				? i18n.dict.quiz.questionProgress(entryIndex + 1, allEntries.length)
				: ''}
			onback={requestExit}
			backLabel={i18n.dict.quiz.exitLabel}
			overlay={showTimer ? barTimer : undefined}
		></AppBar>

		<!-- One strip under the bar: the question navigator, then passage toggle (phones)
		     and the part's title on a row, the part's instructions beneath on its first question. -->
		<div class="border-b border-line/70">
			<div
				class="app-col flex flex-col gap-1 px-4 pt-3 pb-3 {quizHasPassage ? 'lg:max-w-5xl' : ''}"
			>
				{#if showNavigator && allEntries.length > 1}
					<div class="min-w-0">{@render navigator()}</div>
				{/if}
				<div class="flex min-h-9 items-center gap-2">
					{#if activePassage}
						<button
							type="button"
							aria-expanded={passageOpen}
							onclick={() => (passageOpen = !passageOpen)}
							class="shrink-0 rounded-full bg-accent-soft px-3 py-1.5 text-sm font-semibold text-ink/80 transition active:scale-95 lg:hidden"
						>
							{passageOpen ? i18n.dict.quiz.hidePassage : i18n.dict.quiz.showPassage}
						</button>
					{/if}
					{#if currentEntry?.isFirstOfPart}
						<h3 class="min-w-0 truncate text-sm font-bold text-muted">
							{i18n.title(`${quiz.id}.${currentPart.id}`)}
						</h3>
					{/if}
				</div>
				{#if currentEntry?.isFirstOfPart && currentPart.instructionsHe}
					<p class="-mt-1.5 text-sm leading-relaxed text-muted">{currentPart.instructionsHe}</p>
				{/if}
			</div>
		</div>

		<!-- With a passage: phones stack [toggle, passage (collapsible), question];
		     lg+ splits into two independently scrolling columns - question on the
		     start (right) side, passage pinned on the end (left) side. A quiz with
		     any passage keeps the lg frame at 5xl on every screen, so moving to a
		     passage-less one (e.g. writing) only widens the column from the same
		     start edge instead of re-centering everything. -->
		<main
			class="app-col flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain px-4 pt-3 pb-6 {quizHasPassage
				? 'lg:max-w-5xl'
				: ''} {activePassage
				? 'lg:grid lg:grid-cols-2 lg:grid-rows-[minmax(0,1fr)] lg:gap-8 lg:overflow-hidden lg:pb-0'
				: ''}"
		>
			{#if activePassage}
				{#key passageEntryIndex}
					<!-- Phones: grid-rows 0fr -> 1fr animates the collapse; lg: always shown. -->
					<div
						class="grid shrink-0 transition-[grid-template-rows,visibility] duration-150 ease-out {passageOpen
							? 'grid-rows-[1fr]'
							: 'invisible grid-rows-[0fr]'} lg:visible lg:col-start-2 lg:row-start-1 lg:block lg:min-h-0"
					>
						<div class="min-h-0 overflow-hidden lg:h-full lg:pb-6">
							<aside
								dir="ltr"
								class="mb-4 max-h-[45dvh] overflow-y-auto overscroll-contain rounded-2xl bg-surface p-4 ring-1 ring-line/70 lg:mb-0 lg:h-full lg:max-h-none"
							>
								<PassageBody passage={activePassage} />
							</aside>
						</div>
					</div>
				{/key}
			{/if}
			<div
				class={activePassage
					? 'lg:col-start-1 lg:row-start-1 lg:min-h-0 lg:overflow-y-auto lg:overscroll-contain lg:pb-6'
					: ''}
			>
				{#if currentEntry && reviewing}
					{#key entryIndex}
						<div in:fly={{ y: 8, duration: 200, easing: cubicOut }}>
							<AnswerReview screen={currentEntry.screen} answer={answers[currentEntry.id]} />
						</div>
					{/key}
				{:else if currentEntry && ScreenComponent}
					{#key `${entryIndex}-${retries}`}
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
			</div>
		</main>

		<div class="sticky bottom-0 border-t border-line/70 bg-canvas/90 px-4 py-3 backdrop-blur">
			<!-- Lines up under the question column, wherever the passage is. -->
			<div
				class="app-col flex gap-2 {quizHasPassage ? 'lg:max-w-5xl lg:*:w-[calc(50%-1rem)]' : ''}"
			>
				{#if reviewing}
					{#if canRetry}
						<Button variant="secondary" onclick={retry}>{i18n.dict.quiz.retryButton}</Button>
					{/if}
					<Button onclick={advance}>{footerLabel}</Button>
				{:else}
					<Button onclick={() => screenInstance?.primaryAction()} disabled={footerDisabled}>
						{footerLabel}
					</Button>
				{/if}
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
