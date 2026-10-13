<script lang="ts">
	import { BookOpen, Languages } from '@lucide/svelte';
	import type { Component } from 'svelte';
	import type { CurriculumModule } from '$lib/curriculum';
	import { i18n } from '$lib/i18n/index.svelte';
	import type { ExamStats } from '$lib/quiz/stats';
	import ExamNugget from './ExamNugget.svelte';

	// One Bagrut module on the home row, status only: lessons done, the word
	// engine's progress (modules that have one - it isn't part of the lesson
	// path) and the exam nugget. Tapping opens its panel.
	type Props = {
		mod: CurriculumModule;
		exams: ExamStats;
		done: number;
		total: number;
		/** The module's word deck, when it has one. */
		words?: { seen: number; total: number };
		selected: boolean;
		/** Nothing to study yet - shown muted, not tappable. */
		comingSoon?: boolean;
		onclick?: () => void;
	};

	let { mod, exams, done, total, words, selected, comingSoon = false, onclick }: Props = $props();

	let t = $derived(i18n.dict.home);
</script>

{#snippet progressRow(Icon: Component, label: string, value: number, max: number)}
	<span class="flex flex-col gap-1">
		<span class="flex items-center gap-1.5 text-sm font-bold">
			<Icon size={14} class="shrink-0 text-brand" aria-hidden="true" />
			<span class="sr-only">{label}</span>
			<span class="tabular" dir="ltr">{value}/{max}</span>
		</span>
		<span class="h-1.5 overflow-hidden rounded-full bg-line" aria-hidden="true">
			<span
				class="block h-full rounded-full bg-brand transition-[width] duration-500"
				style="width: {(value / max) * 100}%"
			></span>
		</span>
	</span>
{/snippet}

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
		class="flex h-9 min-w-9 items-center justify-center self-start rounded-xl bg-brand-soft px-2 font-extrabold text-brand"
		dir="ltr"
	>
		{mod.letter}
	</span>
	{#if comingSoon}
		<span class="text-xs font-semibold text-muted">{i18n.dict.common.comingSoon}</span>
	{:else}
		{#if total}{@render progressRow(BookOpen, t.tileLessons, done, total)}{/if}
		{#if words?.total}{@render progressRow(Languages, t.tileWords, words.seen, words.total)}{/if}
		<ExamNugget {exams} />
	{/if}
</button>
