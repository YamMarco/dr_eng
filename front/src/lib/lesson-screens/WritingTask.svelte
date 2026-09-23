<script lang="ts">
	import { untrack } from 'svelte';
	import Md from '$lib/components/Md.svelte';
	import type { WritingTaskScreen } from './types';
	import ExerciseKindBadge from './ExerciseKindBadge.svelte';
	import ScoreBadge from './ScoreBadge.svelte';
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
		screen: WritingTaskScreen;
		onAdvance: () => void;
		disabled?: boolean;
		label?: string;
	} = $props();

	// eslint-disable-next-line no-useless-assignment
	label = i18n.dict.exerciseKind.submitButton;

	// --- Lesson mode: one input per required sentence, gated on wordBank use
	// and light punctuation checking. Unchanged from before quiz mode existed;
	// lesson content always supplies minSentences/minWordsUsed/wordBank. ---
	let minSentences = $derived(screen.minSentences ?? 1);
	let minWordsUsedReq = $derived(screen.minWordsUsed ?? 0);
	let wordBank = $derived(screen.wordBank ?? []);

	let lines = $state<string[]>(untrack(() => Array.from({ length: minSentences }, () => '')));
	let checked = $state(false);

	let allFilled = $derived(lines.every((line) => line.trim().length > 0));

	let maxTypos = $derived(Number.isFinite(screen.maxTypos) ? screen.maxTypos! : 1);
	let capitalIsError = $derived(screen.capitalIsError ?? true);
	// `{sentences}` / `{words}` in the prompt follow the rule numbers.
	let prompt = $derived(
		screen.prompt
			.replaceAll('{sentences}', i18n.dict.writingTask.sentencesPhrase(minSentences))
			.replaceAll('{words}', i18n.dict.writingTask.wordsPhrase(minWordsUsedReq))
	);
	let minorIssues = $derived(
		lines.reduce((count, line) => {
			const trimmed = line.trim();
			if (!trimmed) return count;
			let issues = 0;
			if (capitalIsError && !/^[A-Z]/.test(trimmed)) issues++;
			if (!/[.!?]$/.test(trimmed)) issues++;
			return count + issues;
		}, 0)
	);
	let punctuationOk = $derived(minorIssues <= maxTypos);
	let combinedText = $derived(lines.join(' ').toLowerCase());
	let wordsUsed = $derived(
		wordBank.filter((word) => combinedText.includes(word.toLowerCase())).length
	);
	let wordBankOk = $derived(wordsUsed >= minWordsUsedReq);
	let allOk = $derived(allFilled && punctuationOk && wordBankOk);

	// --- Quiz mode: a single free-text essay, no auto-check. Word count is
	// just a live counter against minWords/maxWords, not a hard gate beyond
	// minWords (report shows the raw text for manual review). ---
	// Revisiting via the quiz navigator restores whatever was typed before.
	let essayText = $state(mode === 'quiz' ? ((answerSlot!.get() as string | undefined) ?? '') : '');
	let essayWords = $derived(essayText.trim() ? essayText.trim().split(/\s+/).length : 0);
	let essayOk = $derived(essayWords >= (screen.minWords ?? 1));

	$effect(() => {
		if (checked) return;
		disabled = mode === 'quiz' ? !essayOk : !allFilled;
	});

	export function primaryAction() {
		if (mode === 'quiz') {
			if (!essayOk) return;
			answerSlot!.set(essayText);
			onAdvance();
			return;
		}
		if (!checked) {
			if (!allFilled) return;
			checked = true;
			recordAnswer(score!, allOk);
			label = i18n.dict.lesson.nextQuestionButton;
		} else {
			onAdvance();
		}
	}
</script>

{#if mode === 'lesson'}
	<div class="flex flex-wrap items-center gap-2">
		<ExerciseKindBadge label={i18n.dict.exerciseKind.writingTask} />
	</div>
{/if}
{#if score}
	<ScoreBadge {score} />
{/if}
<div class="leading-relaxed font-semibold">
	<Md block text={mode === 'quiz' ? screen.prompt : prompt} />
</div>

{#if screen.wordBank && screen.wordBank.length > 0}
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
{/if}

{#if mode === 'quiz'}
	<textarea
		dir="ltr"
		rows="6"
		bind:value={essayText}
		placeholder={i18n.dict.selfCheck.placeholder}
		class="mt-4 w-full rounded-xl border-2 border-line bg-surface p-3 leading-relaxed focus:border-brand"
	></textarea>
	{#if screen.minWords !== undefined || screen.maxWords !== undefined}
		<p class="mt-2 text-xs font-semibold text-muted tabular" dir="ltr">
			{i18n.dict.selfCheck.wordCount(essayWords)}
			· {i18n.dict.selfCheck.wordTarget(screen.minWords ?? 0, screen.maxWords ?? 0)}
		</p>
	{/if}
{:else}
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
						? 'border-brand bg-brand-soft/40 motion-safe:animate-pop-correct'
						: 'border-danger bg-danger-soft/40 motion-safe:animate-shake-wrong'
					: 'border-line bg-surface focus:border-brand'}"
			/>
		{/each}
	</div>

	{#if checked}
		<ul class="mt-3 flex flex-col gap-1.5 text-sm">
			<li class="flex items-center gap-2 {allFilled ? 'text-brand-dark' : 'text-danger'}">
				<span>{allFilled ? '✓' : '✗'}</span>
				{i18n.dict.writingTask.checkSentences(minSentences)}
			</li>
			<li class="flex items-center gap-2 {punctuationOk ? 'text-brand-dark' : 'text-danger'}">
				<span>{punctuationOk ? '✓' : '✗'}</span>
				{i18n.dict.writingTask.checkPunctuation(capitalIsError, maxTypos)}
			</li>
			<li class="flex items-center gap-2 {wordBankOk ? 'text-brand-dark' : 'text-danger'}">
				<span>{wordBankOk ? '✓' : '✗'}</span>
				{i18n.dict.writingTask.checkWordBank(minWordsUsedReq)}
			</li>
		</ul>
	{/if}
{/if}
