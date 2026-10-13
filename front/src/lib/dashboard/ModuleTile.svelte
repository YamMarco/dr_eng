<script lang="ts">
	import { BookOpen, ClipboardCheck } from '@lucide/svelte';
	import type { CurriculumModule } from '$lib/curriculum';
	import { i18n } from '$lib/i18n/index.svelte';
	import type { ExamStats } from '$lib/quiz/stats';

	// One Bagrut module on the home row, status only: lessons done and the best
	// exam score, both always visible. Tapping opens its panel.
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
</script>

<button
	type="button"
	{onclick}
	disabled={comingSoon}
	aria-expanded={comingSoon ? undefined : selected}
	class="flex min-w-0 flex-col gap-2.5 rounded-3xl p-3 text-start transition active:scale-[0.98] disabled:pointer-events-none {selected
		? 'bg-surface shadow-md ring-2 ring-brand'
		: 'bg-surface/70 ring-1 ring-line/70'} {comingSoon ? 'opacity-60' : ''}"
>
	<span
		class="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-soft font-extrabold text-brand"
		dir="ltr"
	>
		{mod.letter}
	</span>
	{#if comingSoon}
		<span class="text-xs font-semibold text-muted">{i18n.dict.common.comingSoon}</span>
	{:else}
		{#if total}
			<span class="flex flex-col gap-1">
				<span class="flex items-center gap-1.5 text-sm font-bold">
					<BookOpen size={14} class="shrink-0 text-brand" aria-hidden="true" />
					<span class="sr-only">{t.tileLessons}</span>
					<span class="tabular" dir="ltr">{done}/{total}</span>
				</span>
				<span class="h-1.5 overflow-hidden rounded-full bg-line" aria-hidden="true">
					<span
						class="block h-full rounded-full bg-brand transition-[width] duration-500"
						style="width: {(done / total) * 100}%"
					></span>
				</span>
			</span>
		{/if}
		{#if exams.total}
			<span class="flex items-center gap-1.5 text-sm font-bold">
				<ClipboardCheck size={14} class="shrink-0 text-brand" aria-hidden="true" />
				<span class="sr-only">{t.tileExam}</span>
				{#if exams.best !== undefined}
					<span class="tabular" dir="ltr">{exams.best}</span>
				{:else}
					<span class="font-semibold text-muted">{t.tileUntested}</span>
				{/if}
			</span>
		{/if}
	{/if}
</button>
