<script lang="ts">
	import { CircleCheck, ClipboardCheck, Target, Trophy } from '@lucide/svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import { examTier, type ExamStats } from '$lib/quiz/stats';

	// A module's exam status in one small pill: best score with a tier icon
	// (trophy / check / target), and a dot per exam, filled once taken.
	type Props = { exams: ExamStats };

	let { exams }: Props = $props();

	const MAX_DOTS = 6;

	let t = $derived(i18n.dict.home);
	let tier = $derived(exams.best === undefined ? undefined : examTier(exams.best));
	let look = $derived(
		tier === 'great'
			? { icon: Trophy, box: 'bg-accent-soft text-ink', iconClass: 'text-accent' }
			: tier === 'pass'
				? { icon: CircleCheck, box: 'bg-brand-soft text-ink', iconClass: 'text-brand' }
				: tier === 'low'
					? { icon: Target, box: 'bg-miss-soft text-ink', iconClass: 'text-miss' }
					: {
							icon: ClipboardCheck,
							box: 'border border-dashed border-line text-muted',
							iconClass: 'text-muted'
						}
	);
</script>

<span
	class="flex items-center gap-1.5 rounded-full px-2 py-1 text-sm font-bold {look.box}"
	title={tier ? t.tileExam : t.tileUntested}
>
	<look.icon size={15} class="shrink-0 {look.iconClass}" aria-hidden="true" />
	<span class="sr-only">{t.tileExam}</span>
	{#if exams.total === 0}
		<span class="text-xs font-semibold">{t.examSoon}</span>
	{:else if exams.best !== undefined}
		<span class="tabular" dir="ltr">{exams.best}</span>
	{:else}
		<span class="text-xs font-semibold">{t.tileUntested}</span>
	{/if}
	{#if exams.total > 0 && exams.total <= MAX_DOTS}
		<span class="ms-auto flex gap-0.5" dir="ltr" aria-hidden="true">
			{#each { length: exams.total } as _, i (i)}
				<span class="h-1.5 w-1.5 rounded-full {i < exams.taken ? 'bg-brand' : 'bg-line'}"></span>
			{/each}
		</span>
	{/if}
</span>
