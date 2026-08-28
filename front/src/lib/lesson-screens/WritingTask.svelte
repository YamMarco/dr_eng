<script lang="ts">
	import { untrack } from 'svelte';
	import type { WritingTaskScreen } from './types';
	import ExerciseKindBadge from './ExerciseKindBadge.svelte';
	import ScoreBadge from './ScoreBadge.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import { getLessonScore, recordAnswer } from './score.svelte';

	const score = getLessonScore();

	let {
		screen,
		onAdvance,
		// eslint-disable-next-line no-useless-assignment
		disabled = $bindable(true),
		// eslint-disable-next-line no-useless-assignment
		label = $bindable('')
	}: {
		screen: WritingTaskScreen;
		onAdvance: () => void;
		disabled?: boolean;
		label?: string;
	} = $props();

	// One input per required sentence, rather than a single free-form
	// textarea. One-time read: `screen` is fixed for this instance's lifetime.
	let lines = $state<string[]>(
		untrack(() => Array.from({ length: screen.minSentences }, () => ''))
	);
	let checked = $state(false);

	// eslint-disable-next-line no-useless-assignment
	label = i18n.dict.exerciseKind.submitButton;

	let allFilled = $derived(lines.every((line) => line.trim().length > 0));
	let punctuationOk = $derived(
		lines.every((line) => {
			const trimmed = line.trim();
			return trimmed.length > 0 && /^[A-Z]/.test(trimmed) && /[.!?]$/.test(trimmed);
		})
	);
	let combinedText = $derived(lines.join(' ').toLowerCase());
	let wordsUsed = $derived(
		screen.wordBank.filter((word) => combinedText.includes(word.toLowerCase())).length
	);
	let wordBankOk = $derived(wordsUsed >= screen.minWordsUsed);
	let allOk = $derived(allFilled && punctuationOk && wordBankOk);

	$effect(() => {
		if (!checked) disabled = !allFilled;
	});

	export function primaryAction() {
		if (!checked) {
			if (!allFilled) return;
			checked = true;
			recordAnswer(score, allOk);
			label = i18n.dict.lesson.nextQuestionButton;
		} else {
			onAdvance();
		}
	}
</script>

<ExerciseKindBadge label={i18n.dict.exerciseKind.writingTask} />
<ScoreBadge {score} />
<p class="leading-relaxed font-semibold">{screen.prompt}</p>

<div class="mt-3">
	<p class="mb-1 text-xs font-semibold text-muted">{i18n.dict.writingTask.wordBankLabel}</p>
	<div class="flex flex-wrap gap-1.5" dir="ltr">
		{#each screen.wordBank as word (word)}
			<span class="rounded-full bg-accent-soft px-2.5 py-1 text-xs font-semibold text-ink/70">
				{word}
			</span>
		{/each}
	</div>
</div>

<div class="mt-4 flex flex-col gap-3">
	{#each lines as line, i (i)}
		<input
			type="text"
			dir="ltr"
			disabled={checked}
			value={line}
			oninput={(e) => (lines[i] = e.currentTarget.value)}
			placeholder={i18n.dict.writingTask.linePlaceholder(i + 1)}
			class="w-full rounded-xl border-2 px-3 py-2 leading-relaxed transition {checked
				? allOk
					? 'border-brand bg-brand-soft/40'
					: 'border-danger bg-danger-soft/40'
				: 'border-line bg-surface focus:border-brand'}"
		/>
	{/each}
</div>

{#if checked}
	<ul class="mt-3 flex flex-col gap-1.5 text-sm">
		<li class="flex items-center gap-2 {allFilled ? 'text-brand-dark' : 'text-danger'}">
			<span>{allFilled ? '✓' : '✗'}</span>
			{i18n.dict.writingTask.checkSentences(screen.minSentences)}
		</li>
		<li class="flex items-center gap-2 {punctuationOk ? 'text-brand-dark' : 'text-danger'}">
			<span>{punctuationOk ? '✓' : '✗'}</span>
			{i18n.dict.writingTask.checkPunctuation}
		</li>
		<li class="flex items-center gap-2 {wordBankOk ? 'text-brand-dark' : 'text-danger'}">
			<span>{wordBankOk ? '✓' : '✗'}</span>
			{i18n.dict.writingTask.checkWordBank(screen.minWordsUsed)}
		</li>
	</ul>
{/if}
