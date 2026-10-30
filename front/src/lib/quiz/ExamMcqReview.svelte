<script lang="ts">
	// One closed exam question in the report: the options with the student's
	// picks and the right answer marked, then the feedback (exams show none
	// before submit).
	import Md from '$lib/components/Md.svelte';
	import McqFeedback from '$lib/lesson-screens/McqFeedback.svelte';
	import { textDir } from '$lib/lesson-screens/miniMarkdown';
	import { mcqCorrect, type McqScreen } from '$lib/lesson-screens/types';
	import { i18n } from '$lib/i18n/index.svelte';

	let {
		label,
		screen,
		answer,
		earned,
		max
	}: { label: string; screen: McqScreen; answer: unknown; earned: number; max: number } = $props();

	const q = $derived(i18n.dict.quiz);
	const right = $derived(mcqCorrect(screen));
	const picks = $derived(answer === undefined ? [] : [answer as number | number[]].flat());
</script>

<li class="flex flex-col gap-2 py-4 first:pt-0 last:pb-0">
	<div class="flex items-baseline justify-between gap-3">
		<span class="text-sm font-bold">{label}</span>
		<span
			class="font-bold tabular {earned === max
				? 'text-brand-dark'
				: earned === 0
					? 'text-miss'
					: 'text-ink'}"
			dir="ltr">{Math.round(earned * 10) / 10}/{max}</span
		>
	</div>
	<div class="text-sm text-muted"><Md block text={screen.prompt} /></div>
	<ul class="flex flex-col gap-1.5">
		{#each screen.options as option, i (i)}
			{@const ok = right.includes(i)}
			{@const picked = picks.includes(i)}
			<li
				class="rounded-xl border-2 px-3 py-2 text-sm {ok
					? 'border-brand bg-brand-soft/50 text-brand-dark'
					: picked
						? 'border-miss bg-miss-soft/50 text-miss'
						: 'border-line text-muted'}"
				dir={textDir(option)}
			>
				<Md text={option} />
			</li>
		{/each}
	</ul>
	{#if picks.length === 0}
		<p class="text-xs font-semibold text-miss">{q.unanswered}</p>
	{/if}
	<McqFeedback {screen} {picks} />
	{#if screen.explanation}
		<div class="rounded-2xl bg-accent-soft p-3 text-sm leading-relaxed">
			<p class="mb-1 text-xs font-bold text-ink/60">{i18n.dict.exerciseKind.answerKeyLabel}</p>
			<Md block text={screen.explanation} />
		</div>
	{/if}
</li>
