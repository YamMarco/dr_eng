<script lang="ts">
	import { ChevronLeft } from '@lucide/svelte';
	import type { CurriculumModule } from '$lib/curriculum';
	import { i18n } from '$lib/i18n/index.svelte';
	import type { ExamStats } from '$lib/quiz/stats';
	import type { HomeMeters, ModuleHook, Progress } from './data';
	import ExamNugget from './ExamNugget.svelte';

	// One Bagrut module on home, as concise as it gets: its exam nugget, a single
	// hook line - the reason to open the module page - and the same two bars for
	// every module: vocabulary, then the other lessons.
	type Props = {
		mod: CurriculumModule;
		exams: ExamStats;
		meters: HomeMeters;
		hook: ModuleHook;
		href: string;
		/** Nothing to study yet - shown muted, not a link. */
		comingSoon?: boolean;
	};

	let { mod, exams, meters, hook, href, comingSoon = false }: Props = $props();

	let t = $derived(i18n.dict.home);
	const ratio = (p: Progress) => (p.total ? p.done / p.total : 0);
</script>

{#snippet meter(label: string, p: Progress)}
	<span class="flex flex-col gap-1 text-xs">
		<span class="flex items-center gap-2">
			<span class="me-auto truncate text-muted">{label}</span>
			<span class="shrink-0 font-bold tabular" dir="ltr">{p.done}/{p.total}</span>
		</span>
		<span class="h-2 overflow-hidden rounded-full bg-line" aria-hidden="true">
			<span
				class="barber block h-full rounded-full transition-[width] duration-500"
				style="width: {ratio(p) * 100}%"
			></span>
		</span>
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
			<span class="mt-1 flex flex-col gap-2">
				{#if meters.vocab}
					{@const { today } = meters.vocab}
					{@render meter(
						today === undefined
							? t.skills.vocab
							: today
								? t.hookWords(today)
								: `${t.skills.vocab} · ${t.wordsDone}`,
						meters.vocab
					)}
				{/if}
				{#if meters.lessons}{@render meter(t.meterLessons, meters.lessons)}{/if}
			</span>
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

<style>
	/* Barber-pole fill: brand and accent stripes rolling forward. */
	.barber {
		background: repeating-linear-gradient(
			-45deg,
			var(--color-brand-dark) 0 6px,
			#facc15 6px 12px
		);
		background-size: 17px 100%;
		animation: barber 0.8s linear infinite;
	}
	@keyframes barber {
		to {
			background-position: 17px 0;
		}
	}
	:global([dir='rtl']) .barber {
		animation-direction: reverse;
	}
	@media (prefers-reduced-motion: reduce) {
		.barber {
			animation: none;
		}
	}
</style>
