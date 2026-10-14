<script lang="ts">
	import { ChevronLeft } from '@lucide/svelte';
	import type { CurriculumModule } from '$lib/curriculum';
	import { i18n } from '$lib/i18n/index.svelte';
	import type { ExamStats } from '$lib/quiz/stats';
	import { EXAM_READY, type DeckSummary, type ModuleHook, type Progress } from './data';
	import ExamNugget from './ExamNugget.svelte';

	// One Bagrut module on home, as concise as it gets: its exam nugget, how far
	// the lessons are (with a notch where exams become worth taking) and a single
	// hook line - the reason to open the module page.
	type Props = {
		mod: CurriculumModule;
		exams: ExamStats;
		lessons: Progress;
		hook: ModuleHook;
		/** Module has a word deck (E): lessons and words each get a labeled bar. */
		deck?: DeckSummary;
		href: string;
		/** Nothing to study yet - shown muted, not a link. */
		comingSoon?: boolean;
	};

	let { mod, exams, lessons, hook, deck, href, comingSoon = false }: Props = $props();

	let t = $derived(i18n.dict.home);
	const ratio = (p: Progress) => (p.total ? p.done / p.total : 0);
</script>

{#snippet bar(p: Progress, notch: boolean)}
	<span class="relative h-1.5 flex-1 rounded-full bg-line" aria-hidden="true">
		<span
			class="absolute inset-y-0 start-0 rounded-full bg-brand transition-[width] duration-500"
			style="width: {ratio(p) * 100}%"
		></span>
		{#if notch}
			<!-- Where exams become worth taking. -->
			<span
				class="absolute -inset-y-0.5 w-0.5 rounded-full bg-ink/40"
				style="inset-inline-start: {EXAM_READY * 100}%"
			></span>
		{/if}
	</span>
{/snippet}

{#snippet meter(label: string, p: Progress, notch: boolean)}
	<span class="flex flex-col gap-1 text-xs">
		<span class="flex items-center gap-2">
			<span class="me-auto truncate text-muted">{label}</span>
			<span class="shrink-0 font-bold tabular" dir="ltr">{p.done}/{p.total}</span>
		</span>
		<span class="flex">{@render bar(p, notch)}</span>
	</span>
{/snippet}

{#snippet body()}
	<span
		class="flex h-11 min-w-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft px-2 text-lg font-extrabold text-brand"
		dir="ltr"
	>
		{mod.letter}
	</span>
	<span class="flex min-w-0 flex-1 flex-col gap-1">
		<span class="flex items-center gap-2">
			<span class="me-auto font-bold">{i18n.dict.unit.modulePrefix} {mod.letter}</span>
			{#if !comingSoon}<ExamNugget {exams} />{/if}
		</span>
		{#if comingSoon}
			<span class="text-xs text-muted">{i18n.dict.common.comingSoon}</span>
		{:else}
			<span
				class="truncate text-xs {hook.tone === 'go' ? 'font-bold text-brand-dark' : 'text-muted'}"
			>
				{hook.text}
			</span>
			{#if deck}
				<span class="mt-1 flex flex-col gap-2">
					{#if lessons.total}{@render meter(t.meterLessons, lessons, exams.total > 0)}{/if}
					{@render meter(
						deck.today ? t.hookWords(deck.today) : `${t.meterWords} · ${t.wordsDone}`,
						deck.progress,
						false
					)}
				</span>
			{:else if lessons.total}
				<span class="flex">{@render bar(lessons, exams.total > 0)}</span>
			{/if}
		{/if}
	</span>
	{#if !comingSoon}<ChevronLeft size={18} class="shrink-0 text-muted" aria-hidden="true" />{/if}
{/snippet}

<!-- href is a runtime-built module path, not a typed route -->
<!-- eslint-disable svelte/no-navigation-without-resolve -->
{#if comingSoon}
	<div class="flex items-center gap-3 rounded-3xl bg-surface/70 p-3 opacity-60 ring-1 ring-line/70">
		{@render body()}
	</div>
{:else}
	<a
		{href}
		class="flex items-center gap-3 rounded-3xl bg-surface p-3 shadow-md ring-1 shadow-overlay/5 ring-line/70 transition hover:shadow-lg active:scale-[0.99]"
	>
		{@render body()}
	</a>
{/if}
<!-- eslint-enable svelte/no-navigation-without-resolve -->
