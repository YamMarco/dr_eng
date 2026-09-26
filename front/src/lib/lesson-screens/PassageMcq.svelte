<script lang="ts">
	import type { PassageMcqScreen } from './types';
	import Md from '$lib/components/Md.svelte';
	import PassageMark from './PassageMark.svelte';
	import { stripLineAttrs } from './miniMarkdown';
	import ExerciseKindBadge from './ExerciseKindBadge.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import { getLessonScore, recordAnswer } from './score.svelte';
	import { getLessonSession } from './session.svelte';

	const score = getLessonScore();

	let {
		screen,
		onAdvance,
		// eslint-disable-next-line no-useless-assignment
		disabled = $bindable(true),
		// eslint-disable-next-line no-useless-assignment
		label = $bindable('')
	}: {
		screen: PassageMcqScreen;
		onAdvance: () => void;
		disabled?: boolean;
		label?: string;
	} = $props();

	const session = getLessonSession();
	const startedAt = performance.now();
	let now = $state(startedAt);
	let finished = $state(false);

	// One question at a time: pick -> check (reveals right/wrong) -> next,
	// regardless of whether the answer was correct. With `timerKey` set, a
	// stopwatch runs until the last question is checked.
	let qi = $state(0);
	let picked = $state<number | null>(null);
	let checked = $state(false);

	let question = $derived(screen.questions[qi]);
	let isLastQuestion = $derived(qi === screen.questions.length - 1);

	// Passage text as markable lines (split on paragraph/line breaks) so
	// students can select-and-highlight it, same tool as the standalone
	// Passage screen - see PassageMark. `stripLineAttrs` drops any authored
	// `{a:center}`-style block token, since these lines only run through
	// inline markdown (PassageMark renders each line's plain text).
	let passageLines = $derived.by(() => {
		const result: { key: number; text: string; lineNumber: number; rowClass?: string }[] = [];
		let n = 0;
		screen.text.split('\n\n').forEach((paragraph) => {
			paragraph.split('\n').forEach((raw, li) => {
				const text = stripLineAttrs(raw);
				if (!text.trim()) return;
				n += 1;
				result.push({ key: n, text, lineNumber: n, rowClass: li === 0 ? 'mt-3' : '' });
			});
		});
		return result;
	});

	// eslint-disable-next-line no-useless-assignment
	label = i18n.dict.exerciseKind.submitButton;

	// Ticks (and keeps the session's running total updated) until the last
	// question is checked.
	$effect(() => {
		const key = screen.timerKey;
		if (!key || finished) return;
		const interval = setInterval(() => {
			now = performance.now();
			session[key] = now - startedAt;
		}, 100);
		return () => clearInterval(interval);
	});

	function pick(optionIndex: number) {
		if (checked) return;
		picked = optionIndex;
		disabled = false;
	}

	export function primaryAction() {
		if (!checked) {
			if (picked === null) return;
			checked = true;
			recordAnswer(score, picked === question.correctIndex);
			if (isLastQuestion) {
				finished = true;
				if (screen.timerKey) session[screen.timerKey] = performance.now() - startedAt;
				label = '';
			} else {
				label = i18n.dict.lesson.nextQuestionButton;
			}
		} else if (!isLastQuestion) {
			qi += 1;
			picked = null;
			checked = false;
			label = i18n.dict.exerciseKind.submitButton;
			disabled = true;
		} else {
			onAdvance();
		}
	}
</script>

<ExerciseKindBadge
	label={screen.timerKey ? i18n.dict.exerciseKind.timedReading : i18n.dict.exerciseKind.mcq}
/>
{#if screen.timerKey}
	<div class="flex items-center justify-between">
		<span class="font-semibold text-muted"><Md text={screen.label ?? ''} /></span>
		<span
			class="rounded-full bg-brand-soft px-3 py-1 text-sm font-bold text-brand-dark tabular"
			dir="ltr"
		>
			{((now - startedAt) / 1000).toFixed(1)}s
		</span>
	</div>
{/if}
<PassageMark lines={passageLines}>
	{#snippet leading(line)}
		<span class="w-5 shrink-0 text-start text-xs text-muted tabular">
			{line.lineNumber % 5 === 0 ? line.lineNumber : ''}
		</span>
	{/snippet}
</PassageMark>

<div class="mt-6">
	{#if screen.questions.length > 1}
		<p class="mb-2 text-sm font-semibold text-muted">
			{i18n.dict.lesson.questionProgress(qi + 1, screen.questions.length)}
		</p>
	{/if}
	<div class="text-lg leading-relaxed font-semibold">
		<Md block text={question.prompt} />
	</div>
	<div class="mt-3 flex flex-col gap-3">
		{#each question.options as option, oi (oi)}
			{@const isCorrect = oi === question.correctIndex}
			{@const isSelected = picked === oi}
			{@const feedback =
				checked && isSelected
					? isCorrect
						? 'motion-safe:animate-pop-correct'
						: 'motion-safe:animate-shake-wrong'
					: ''}
			<button
				type="button"
				disabled={checked}
				onclick={() => pick(oi)}
				dir="auto"
				class="rounded-2xl border-2 px-4 py-3 text-start font-semibold transition active:scale-[0.97] {feedback} {checked
					? isCorrect
						? 'border-brand bg-brand-soft text-brand-dark'
						: isSelected
							? 'border-danger bg-danger-soft text-danger'
							: 'border-line bg-surface opacity-50'
					: isSelected
						? 'border-brand bg-brand-soft/60'
						: 'border-line bg-surface hover:border-brand'}"
			>
				<Md text={option} />
			</button>
		{/each}
	</div>
</div>
