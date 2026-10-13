<script lang="ts">
	// One open exam answer in the report: its score, the answer with the errors
	// highlighted in place, and for the essay the rubric breakdown.
	import MarkedText from '$lib/feedback/MarkedText.svelte';
	import { essayRubric } from '$lib/content/rubrics';
	import type { ExamGrade } from '$lib/feedback/types';
	import { i18n } from '$lib/i18n/index.svelte';

	let {
		label,
		prompt,
		points,
		grade
	}: { label: string; prompt: string; points: number; grade?: ExamGrade } = $props();

	const q = $derived(i18n.dict.quiz);
	const scoreTone = $derived(
		!grade || grade.status === 'failed'
			? 'text-muted'
			: grade.earned === grade.max
				? 'text-brand-dark'
				: grade.earned === 0
					? 'text-miss'
					: 'text-ink'
	);
</script>

<li class="flex flex-col gap-2 py-4 first:pt-0 last:pb-0">
	<div class="flex items-baseline justify-between gap-3">
		<span class="text-sm font-bold">{label}</span>
		<span class="font-bold tabular {scoreTone}" dir="ltr">
			{grade?.status === 'graded' ? grade.earned : '-'}/{grade?.max ?? points}
		</span>
	</div>
	<p class="text-sm text-muted" dir="ltr">{prompt}</p>

	{#if !grade}
		<p class="text-xs font-semibold text-muted">{q.grading}</p>
	{:else}
		{#if grade.text.trim()}
			<MarkedText
				text={grade.text}
				marks={grade.marks}
				class="rounded-xl border border-line bg-canvas p-3 text-sm"
			/>
		{/if}
		{#if grade.status === 'failed'}
			<p class="text-xs font-semibold text-muted">{q.notGraded}</p>
		{:else if grade.gate}
			<p class="text-xs font-semibold text-miss">{q.gateZero[grade.gate] ?? ''}</p>
		{/if}
		{#each grade.general ?? [] as tag (tag)}
			<p class="text-xs font-semibold text-miss">• {i18n.dict.feedback.tag[tag] ?? tag}</p>
		{/each}
		{#if grade.criteria}
			<ul class="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
				{#each essayRubric.criteria as c (c.id)}
					<li class="flex justify-between gap-2">
						<span class="text-muted">{q.criterion[c.id] ?? c.name}</span>
						<span class="font-semibold tabular" dir="ltr">{grade.criteria[c.id] ?? 0}/{c.max}</span>
					</li>
				{/each}
			</ul>
			{#if grade.lengthDeduction}
				<p class="text-xs font-semibold text-miss">
					{q.lengthDeduction(grade.lengthDeduction, grade.validWords ?? 0)}
				</p>
			{/if}
		{/if}
		{#if grade.marks.length > 0}
			<p class="text-xs text-muted">{i18n.dict.feedback.tapHint}</p>
		{/if}
	{/if}
</li>
