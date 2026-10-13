<script lang="ts">
	import { BookOpen, Languages } from '@lucide/svelte';
	import type { Component } from 'svelte';
	import type { CurriculumModule } from '$lib/curriculum';
	import { i18n } from '$lib/i18n/index.svelte';
	import type { ExamStats } from '$lib/quiz/stats';
	import type { Progress } from './data';
	import ExamNugget from './ExamNugget.svelte';

	// One Bagrut module on the home row, status only. Every tile has the same
	// three slots in the same order - lessons, words, exam - so tiles compare at
	// a glance. Tapping opens its panel.
	type Props = {
		mod: CurriculumModule;
		exams: ExamStats;
		lessons: Progress;
		/** The word engine (E) or the vocabulary section (C); absent when the module has neither. */
		words?: Progress;
		selected: boolean;
		/** Nothing to study yet - shown muted, not tappable. */
		comingSoon?: boolean;
		onclick?: () => void;
	};

	let { mod, exams, lessons, words, selected, comingSoon = false, onclick }: Props = $props();

	let t = $derived(i18n.dict.home);
</script>

{#snippet progressRow(Icon: Component, label: string, p: Progress | undefined)}
	{#if p?.total}
		<span class="flex flex-col gap-1">
			<span class="flex items-center gap-1.5 text-[13px] font-bold">
				<Icon size={13} class="shrink-0 text-brand" aria-hidden="true" />
				<span class="sr-only">{label}</span>
				<span class="tabular" dir="ltr">{p.done}/{p.total}</span>
			</span>
			<span class="h-1 overflow-hidden rounded-full bg-line" aria-hidden="true">
				<span
					class="block h-full rounded-full bg-brand transition-[width] duration-500"
					style="width: {(p.done / p.total) * 100}%"
				></span>
			</span>
		</span>
	{/if}
{/snippet}

<button
	type="button"
	{onclick}
	disabled={comingSoon}
	aria-expanded={comingSoon ? undefined : selected}
	class="flex min-w-0 flex-col gap-2 rounded-2xl p-2.5 text-start transition active:scale-[0.98] disabled:pointer-events-none {selected
		? 'bg-surface shadow-md ring-2 ring-brand'
		: 'bg-surface/70 ring-1 ring-line/70'} {comingSoon ? 'opacity-60' : ''}"
>
	<span
		class="flex h-7 min-w-7 items-center justify-center self-start rounded-lg bg-brand-soft px-2 text-sm font-extrabold text-brand"
		dir="ltr"
	>
		{mod.letter}
	</span>
	{#if comingSoon}
		<span class="text-xs font-semibold text-muted">{i18n.dict.common.comingSoon}</span>
	{:else}
		{@render progressRow(BookOpen, t.tileLessons, lessons)}
		{@render progressRow(Languages, t.tileWords, words)}
		<!-- Pinned to the bottom: the exam sits on the same line in every tile. -->
		<span class="mt-auto"><ExamNugget {exams} /></span>
	{/if}
</button>
