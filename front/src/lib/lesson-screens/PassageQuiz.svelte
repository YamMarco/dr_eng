<script lang="ts">
	import { MAX_TEXT, type ReadingVerdict } from '$lib/feedback/types';
	import ReadingPaper from './ReadingPaper.svelte';
	import { untrack } from 'svelte';
	import Md from '$lib/components/Md.svelte';
	import type { PassageQuizScreen } from './types';
	import ExerciseKindBadge from './ExerciseKindBadge.svelte';
	import AnswerLang from './AnswerLang.svelte';
	import PassageText, { hasParagraphMarkers } from './PassageText.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import { getLessonScore, recordAnswer } from './score.svelte';
	import { getRuleChain } from '$lib/feedback/context';
	import { resolveRules } from '$lib/feedback/rules';
	import { postGrade } from '$lib/feedback/grade';
	import { quizResults, readingRequest, type QuizResult } from './passageQuiz';

	const score = getLessonScore();
	const useLlm = resolveRules(getRuleChain()).llmGrade;

	let {
		screen,
		onAdvance,
		// eslint-disable-next-line no-useless-assignment
		disabled = $bindable(true),
		// eslint-disable-next-line no-useless-assignment
		label = $bindable('')
	}: {
		screen: PassageQuizScreen;
		onAdvance: () => void;
		disabled?: boolean;
		label?: string;
	} = $props();

	// One-time read: the runner remounts this component fresh per screen, so
	// `screen` is fixed for this instance's lifetime.
	let answers = $state<string[]>(untrack(() => screen.questions.map(() => '')));
	let checked = $state(false);
	let grading = $state(false);
	let results = $state<QuizResult[]>([]);

	let allAnswered = $derived(answers.every((answer) => answer.trim().length > 0));

	// eslint-disable-next-line no-useless-assignment
	label = i18n.dict.exerciseKind.submitButton;

	$effect(() => {
		if (!checked) disabled = grading || !allAnswered;
	});

	async function check() {
		grading = true;
		label = i18n.dict.feedback.checking;
		// LLM off, down or rate-limited: no verdict, the keywords decide
		const verdict = useLlm
			? await postGrade<ReadingVerdict>(readingRequest(screen, answers)).catch(() => null)
			: null;
		results = quizResults(screen, answers, verdict);
		results.forEach((r) => recordAnswer(score, r.correct));
		grading = false;
		checked = true;
		label = i18n.dict.lesson.nextQuestionButton;
		disabled = false; // the effect stops updating once `checked` is set
	}

	export function primaryAction() {
		if (grading) return;
		if (!checked) {
			if (allAnswered) check();
		} else {
			onAdvance();
		}
	}
</script>

<div
	class="lg:-mx-40 lg:grid lg:min-h-0 lg:flex-1 lg:grid-cols-2 lg:grid-rows-[minmax(0,1fr)] lg:gap-10"
>
	<ReadingPaper>
		<ExerciseKindBadge label={i18n.dict.exerciseKind.passageQuiz} />
		{#if hasParagraphMarkers(screen.text)}
			<PassageText text={screen.text} lineNumbers={screen.lineNumbers} />
		{:else}
			<div class="leading-relaxed"><Md block text={screen.text} /></div>
		{/if}
	</ReadingPaper>

	<div class="mt-6 flex flex-col gap-5 lg:mt-0 lg:min-h-0 lg:overflow-y-auto">
		<div class="-mt-3"><AnswerLang /></div>
		{#each screen.questions as question, i (i)}
			{@const correct = results[i]?.correct}
			<div>
				<div class="leading-relaxed font-semibold">
					<Md block text={question.prompt} />
					{#if question.points}
						<span class="text-sm font-normal text-muted" dir="auto"
							>({i18n.dict.quiz.pointsShort(question.points)})</span
						>
					{/if}
				</div>
				<input
					type="text"
					dir="ltr"
					lang="en"
					disabled={checked || grading}
					maxlength={MAX_TEXT}
					bind:value={answers[i]}
					aria-label={i18n.dict.a11y.yourAnswer}
					class="mt-2 w-full rounded-xl border-2 px-3 py-2 font-semibold transition {checked
						? correct
							? 'border-brand bg-brand-soft text-brand-dark motion-safe:animate-pop-correct'
							: 'border-miss bg-miss-soft text-miss motion-safe:animate-shake-wrong'
						: 'border-line bg-surface focus:border-brand'}"
				/>
				{#if checked && !correct}
					{#each results[i].tags as tag (tag)}
						<p class="mt-1 text-sm font-semibold text-miss">{i18n.dict.feedback.tag[tag] ?? tag}</p>
					{/each}
					<p class="mt-1 text-sm text-muted">
						{i18n.dict.exerciseKind.answerLabel}
						<Md text={question.answerHint} />
					</p>
				{/if}
			</div>
		{/each}
	</div>
</div>
