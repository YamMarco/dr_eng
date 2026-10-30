<script lang="ts">
	import type { ClozePickScreen } from './types';
	import Md from '$lib/components/Md.svelte';
	import ExerciseKindBadge from './ExerciseKindBadge.svelte';
	import PickFeedback from './PickFeedback.svelte';
	import TryAgain from './TryAgain.svelte';
	import { getRuleChain } from '$lib/feedback/context';
	import { resolveRules } from '$lib/feedback/rules';
	import { optFeedback, optText } from './option';
	import { i18n } from '$lib/i18n/index.svelte';
	import { getLessonScore, recordAnswer } from './score.svelte';
	import { getScreenMode } from './mode.svelte';
	import { getQuizAnswerSlot } from '$lib/quiz/answers.svelte';

	const mode = getScreenMode();
	const score = mode === 'lesson' ? getLessonScore() : undefined;
	const answerSlot = mode === 'quiz' ? getQuizAnswerSlot() : undefined;

	let {
		screen,
		onAdvance,
		// eslint-disable-next-line no-useless-assignment
		disabled = $bindable(true),
		// eslint-disable-next-line no-useless-assignment
		label = $bindable('')
	}: {
		screen: ClozePickScreen;
		onAdvance: () => void;
		disabled?: boolean;
		label?: string;
	} = $props();

	// Revisiting via the quiz navigator restores whatever was picked before.
	const restoredAnswer = mode === 'quiz' ? (answerSlot!.get() as number | undefined) : undefined;
	let selected = $state<number | null>(restoredAnswer ?? null);
	let checked = $state(false);

	// Tries before the verdict (lesson rules, then this screen); see Mcq.svelte.
	const ruleChain = getRuleChain();
	let tries = $derived(
		mode === 'lesson' ? resolveRules([...ruleChain, { tries: screen.tries }]).tries : 1
	);
	let missed = $state<number[]>([]);
	let lastMiss = $derived(missed.at(-1));

	// eslint-disable-next-line no-useless-assignment
	label = i18n.dict.exerciseKind.submitButton;
	// Disabled until a pick in both modes - the runner's footer starts enabled.
	// eslint-disable-next-line no-useless-assignment
	disabled = restoredAnswer === undefined;

	function pick(i: number) {
		if (checked || missed.includes(i)) return;
		selected = i;
		disabled = false;
	}

	export function primaryAction() {
		if (mode === 'quiz') {
			if (selected === null) return;
			answerSlot!.set(selected);
			onAdvance();
			return;
		}
		if (!checked) {
			if (selected === null) return;
			const ok = screen.correctIndices.includes(selected);
			if (!ok && missed.length + 1 < tries) {
				missed = [...missed, selected];
				selected = null;
				disabled = true;
				return;
			}
			checked = true;
			recordAnswer(score!, ok);
			label = i18n.dict.lesson.nextQuestionButton;
		} else {
			onAdvance();
		}
	}
</script>

{#if mode === 'lesson'}
	<ExerciseKindBadge label={i18n.dict.exerciseKind.clozePick} />
{/if}

<p class="leading-relaxed font-semibold" dir="ltr">
	{#if selected !== null}<span class="rounded-md bg-brand-soft px-1 text-brand-dark"
			><Md text={optText(screen.options[selected])} /></span
		>{:else}__________{/if}
	<Md text={screen.clause} />
</p>

<div class="mt-5 flex flex-wrap gap-2" dir="ltr">
	{#each screen.options as opt, i (i)}
		{@const isCorrect = screen.correctIndices.includes(i)}
		{@const isSelected = selected === i}
		{@const isMissed = !checked && missed.includes(i)}
		{@const feedback =
			checked && isSelected
				? isCorrect
					? 'motion-safe:animate-pop-correct'
					: 'motion-safe:animate-shake-wrong'
				: ''}
		<button
			type="button"
			disabled={checked || isMissed}
			onclick={() => pick(i)}
			class="rounded-xl border-2 px-3 py-2 text-base font-semibold transition active:scale-[0.97] {feedback} {checked
				? isCorrect
					? 'border-brand bg-brand-soft text-brand-dark'
					: isSelected
						? 'border-miss bg-miss-soft text-miss'
						: 'border-line bg-surface opacity-50'
				: isMissed
					? 'border-miss bg-miss-soft/60 text-miss line-through opacity-70'
					: isSelected
						? 'border-brand bg-brand-soft/60'
						: 'border-line bg-surface hover:border-brand'}"
		>
			<Md text={optText(opt)} />
		</button>
	{/each}
</div>

{#if !checked && lastMiss !== undefined}
	{#key lastMiss}
		<TryAgain feedback={optFeedback(screen.options[lastMiss])} left={tries - missed.length} />
	{/key}
{/if}

{#if checked && selected !== null && optFeedback(screen.options[selected])}
	<PickFeedback
		text={optFeedback(screen.options[selected])}
		correct={screen.correctIndices.includes(selected)}
	/>
{/if}

{#if checked && screen.explanation}
	<div class="mt-4 rounded-2xl bg-accent-soft p-3">
		<p class="mb-1 text-xs font-bold text-ink/60">{i18n.dict.exerciseKind.answerKeyLabel}</p>
		<div class="leading-relaxed"><Md block text={screen.explanation} /></div>
	</div>
{/if}
