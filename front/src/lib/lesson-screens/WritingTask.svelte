<script lang="ts">
	import { untrack } from 'svelte';
	import Md from '$lib/components/Md.svelte';
	import type { WritingTaskScreen } from './types';
	import ExerciseKindBadge from './ExerciseKindBadge.svelte';
	import SelfReview from './SelfReview.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import { getLessonScore, recordAnswer } from './score.svelte';
	import { getScreenMode } from './mode.svelte';
	import { getQuizAnswerSlot } from '$lib/quiz/answers.svelte';
	import { lintWriting, usesWord, type LintIssue } from './writingLint';
	import { expandAccepted, matchesAccepted } from './acceptedAnswers';
	import WritingCheck from '$lib/checks/WritingCheck.svelte';
	import HandwritingScanButton from '$lib/ocr/HandwritingScanButton.svelte';
	import { splitSentences } from '$lib/ocr/scan';
	import { countValidWords } from '$lib/checks/length';

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
	// and light punctuation checking; lesson content always supplies
	// minSentences/minWordsUsed/wordBank. With `minWords` it is one paragraph
	// box instead (the exam's shape): the same checks run on its sentences,
	// plus the length rule. ---
	let minSentences = $derived(screen.minSentences ?? 1);
	let minWordsUsedReq = $derived(screen.minWordsUsed ?? 0);
	let wordBank = $derived(screen.wordBank ?? []);
	const paragraph = mode === 'lesson' && untrack(() => screen.minWords !== undefined);
	// The text of the single box (quiz essay or lesson paragraph). Revisiting
	// via the quiz navigator restores whatever was typed before.
	let essayText = $state(mode === 'quiz' ? ((answerSlot!.get() as string | undefined) ?? '') : '');
	let essayWords = $derived(essayText.trim() ? essayText.trim().split(/\s+/).length : 0);

	let inputLines = $state<string[]>(untrack(() => Array.from({ length: minSentences }, () => '')));
	let checked = $state(false);
	let lines = $derived(paragraph ? splitSentences(essayText) : inputLines);

	let allFilled = $derived(
		paragraph
			? lines.length >= minSentences
			: inputLines.every((line) => line.trim().length > 0)
	);
	// A copied question doesn't count, as in the exam's word count.
	let paragraphWords = $derived(paragraph ? countValidWords(essayText, { prompt: screen.prompt }) : 0);
	let lengthOk = $derived(!paragraph || paragraphWords >= (screen.minWords ?? 0));

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
	// Per-screen switch for the capital/period check and the advice panel.
	// Quiz mode (exams) never auto-checks, so it doesn't read this.
	let autoCheck = $derived(screen.autoCheck ?? true);
	let punctuationOk = $derived(!autoCheck || minorIssues <= maxTypos);
	let combinedText = $derived(lines.join(' '));
	let wordsUsed = $derived(wordBank.filter((word) => usesWord(combinedText, word)).length);
	let wordBankOk = $derived(wordsUsed >= minWordsUsedReq);
	let lintIssues = $derived(lintWriting(lines, wordBank));
	let contentOk = $derived(lintIssues.length === 0);
	// Fixed-shape task: the line must be one of the author's accepted sentences,
	// which replaces the punctuation / word-bank / content checks.
	let accepted = $derived(screen.acceptedAnswers ?? []);
	let hasAccepted = $derived(accepted.length > 0);
	let acceptedOk = $derived(lines.every((line) => matchesAccepted(line, accepted)));
	let allOk = $derived(
		hasAccepted
			? allFilled && acceptedOk
			: allFilled && lengthOk && punctuationOk && wordBankOk && contentOk
	);

	// A scanned page fills the inputs in order; extra sentences go on the last one.
	function fillFromScan(text: string) {
		const sentences = splitSentences(text);
		inputLines = inputLines.map((_, i) =>
			i < inputLines.length - 1 ? (sentences[i] ?? '') : sentences.slice(i).join(' ')
		);
	}

	function appendScan(text: string) {
		essayText = essayText.trim() ? `${essayText.trimEnd()}\n${text}` : text;
	}

	function lintMessage(issue: LintIssue): string {
		const t = i18n.dict.writingTask;
		const n = issue.line + 1;
		switch (issue.kind) {
			case 'vague':
				return t.lintVague(n, issue.word);
			case 'repeat':
				return t.lintRepeat(n, issue.of + 1);
			case 'short':
				return t.lintShort(n);
			case 'no-detail':
				return t.lintNoDetail(n);
		}
	}

	// --- Quiz mode: a single free-text essay, no auto-check. Word count is
	// just a live counter against minWords/maxWords, not a hard gate beyond
	// minWords (report shows the raw text for manual review). ---
	let essayOk = $derived(essayWords >= (screen.minWords ?? 1));

	$effect(() => {
		if (checked) return;
		disabled = mode === 'quiz' ? !essayOk : paragraph ? essayWords === 0 : !allFilled;
	});

	export function primaryAction() {
		if (mode === 'quiz') {
			if (!essayOk) return;
			answerSlot!.set(essayText);
			onAdvance();
			return;
		}
		if (!checked) {
			if (paragraph ? essayWords === 0 : !allFilled) return;
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

{#if mode === 'quiz' || paragraph}
	<textarea
		dir="ltr"
		rows="7"
		disabled={checked}
		bind:value={essayText}
		placeholder={i18n.dict.selfCheck.placeholder}
		class="mt-4 w-full rounded-xl border-2 p-3 leading-relaxed transition {checked
			? allOk
				? 'border-brand bg-brand-soft/40'
				: 'border-danger bg-danger-soft/40'
			: 'border-line bg-surface focus:border-brand'}"
	></textarea>
	{#if !checked}
		<HandwritingScanButton onText={appendScan} />
	{/if}
	{#if screen.minWords !== undefined || screen.maxWords !== undefined}
		<p class="mt-2 text-xs font-semibold text-muted tabular" dir="ltr">
			{i18n.dict.selfCheck.wordCount(essayWords)}
			· {i18n.dict.selfCheck.wordTarget(screen.minWords ?? 0, screen.maxWords ?? 0)}
		</p>
	{/if}
{:else}
	<div class="mt-4 flex flex-col gap-3">
		{#each inputLines as line, i (i)}
			<input
				type="text"
				dir="ltr"
				disabled={checked}
				value={line}
				oninput={(e) => (inputLines[i] = e.currentTarget.value)}
				placeholder={i18n.dict.writingTask.linePlaceholder(i + 1)}
				class="w-full rounded-xl border-2 px-3 py-2 leading-relaxed transition {checked
					? allOk
						? 'border-brand bg-brand-soft/40 motion-safe:animate-pop-correct'
						: 'border-danger bg-danger-soft/40 motion-safe:animate-shake-wrong'
					: 'border-line bg-surface focus:border-brand'}"
			/>
		{/each}
	</div>
	{#if !checked}
		<HandwritingScanButton onText={fillFromScan} />
	{/if}
{/if}

{#if mode === 'lesson'}
	{#if autoCheck}
		<WritingCheck
			text={paragraph ? essayText : lines.join('\n')}
			options={{ prompt, extraWords: wordBank }}
			showLength={paragraph}
		/>
	{/if}

	{#if checked}
		<ul class="mt-3 flex flex-col gap-1.5 text-sm">
			<li class="flex items-center gap-2 {allFilled ? 'text-brand-dark' : 'text-danger'}">
				<span>{allFilled ? '✓' : '✗'}</span>
				{paragraph
					? i18n.dict.writingTask.checkMinSentences(minSentences)
					: i18n.dict.writingTask.checkSentences(minSentences)}
			</li>
			{#if paragraph}
				<li class="flex items-center gap-2 {lengthOk ? 'text-brand-dark' : 'text-danger'}">
					<span>{lengthOk ? '✓' : '✗'}</span>
					{i18n.dict.writingTask.checkLength(screen.minWords ?? 0, paragraphWords)}
				</li>
			{/if}
			{#if hasAccepted}
				<li class="flex items-center gap-2 {acceptedOk ? 'text-brand-dark' : 'text-danger'}">
					<span>{acceptedOk ? '✓' : '✗'}</span>
					{i18n.dict.writingTask.checkAccepted}
				</li>
				{#if !acceptedOk}
					<li class="ms-6 text-xs font-semibold text-muted" dir="ltr">
						{i18n.dict.writingTask.acceptedExamples}
						{expandAccepted(accepted).slice(0, 3).join(' / ')}
					</li>
				{/if}
			{:else}
				{#if autoCheck}
					<li class="flex items-center gap-2 {punctuationOk ? 'text-brand-dark' : 'text-danger'}">
						<span>{punctuationOk ? '✓' : '✗'}</span>
						{i18n.dict.writingTask.checkPunctuation(capitalIsError, maxTypos)}
					</li>
				{/if}
				<li class="flex items-center gap-2 {wordBankOk ? 'text-brand-dark' : 'text-danger'}">
					<span>{wordBankOk ? '✓' : '✗'}</span>
					{i18n.dict.writingTask.checkWordBank(minWordsUsedReq)}
				</li>
				<li class="flex items-center gap-2 {contentOk ? 'text-brand-dark' : 'text-danger'}">
					<span>{contentOk ? '✓' : '✗'}</span>
					{i18n.dict.writingTask.checkContent}
				</li>
				{#each lintIssues as issue (issue.line)}
					<li class="ms-6 text-xs font-semibold text-danger">{lintMessage(issue)}</li>
				{/each}
			{/if}
		</ul>
		<SelfReview modelAnswer={screen.modelAnswer} checklist={screen.checklist} />
	{/if}
{/if}
