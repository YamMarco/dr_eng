<script lang="ts">
	import type { CurriculumModule } from '$lib/curriculum';
	import { i18n } from '$lib/i18n/index.svelte';
	import type { ExamStats } from '$lib/quiz/stats';

	// One Bagrut module on the home row: its best exam score up front (the
	// exam is the point), a ring for the lesson path. Tapping opens its panel.
	type Props = {
		mod: CurriculumModule;
		exams: ExamStats;
		done: number;
		total: number;
		selected: boolean;
		/** Nothing to study yet - shown muted, not tappable. */
		comingSoon?: boolean;
		onclick?: () => void;
	};

	let { mod, exams, done, total, selected, comingSoon = false, onclick }: Props = $props();

	let t = $derived(i18n.dict.home);
	const R = 15;
	const C = 2 * Math.PI * R;
	let ratio = $derived(total ? done / total : 0);
</script>

<button
	type="button"
	{onclick}
	disabled={comingSoon}
	aria-expanded={comingSoon ? undefined : selected}
	class="relative flex min-w-0 flex-col items-center gap-1.5 rounded-3xl p-3 text-center transition active:scale-[0.98] disabled:pointer-events-none {selected
		? 'bg-surface shadow-md ring-2 ring-brand'
		: 'bg-surface/70 ring-1 ring-line/70'} {comingSoon ? 'opacity-60' : ''}"
>
	<span class="relative flex h-12 w-12 items-center justify-center">
		{#if total}
			<svg viewBox="0 0 36 36" class="absolute inset-0 h-full w-full -rotate-90" aria-hidden="true">
				<circle cx="18" cy="18" r={R} fill="none" class="stroke-line" stroke-width="3" />
				<circle
					cx="18"
					cy="18"
					r={R}
					fill="none"
					class="stroke-brand transition-[stroke-dashoffset] duration-500"
					stroke-width="3"
					stroke-linecap="round"
					stroke-dasharray={C}
					stroke-dashoffset={C * (1 - ratio)}
				/>
			</svg>
		{/if}
		<span class="font-extrabold text-brand" dir="ltr">{mod.letter}</span>
	</span>
	{#if comingSoon}
		<span class="text-xs font-semibold text-muted">{i18n.dict.common.comingSoon}</span>
	{:else if exams.best !== undefined}
		<span class="text-lg leading-none font-extrabold tabular">{exams.best}</span>
		<span class="text-xs text-muted">{t.tileBest}</span>
	{:else if exams.total}
		<span class="text-sm leading-tight font-bold">{t.tileUntested}</span>
		<span class="text-xs text-muted">{t.tileFirstExam}</span>
	{:else}
		<span class="text-lg leading-none font-extrabold tabular" dir="ltr">{done}/{total}</span>
		<span class="text-xs text-muted">{t.tileLessons}</span>
	{/if}
</button>
