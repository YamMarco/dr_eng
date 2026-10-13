<script lang="ts">
	import { ClipboardCheck } from '@lucide/svelte';
	import { resolve } from '$app/paths';
	import StatTile from '$lib/components/StatTile.svelte';
	import type { CurriculumModule } from '$lib/curriculum';
	import { i18n } from '$lib/i18n/index.svelte';
	import type { ExamStats } from '$lib/quiz/stats';

	// A module's practice exams on the home page: real results, and the next one to take.
	type Props = { mod: CurriculumModule; groupId: string; stats: ExamStats };

	let { mod, groupId, stats }: Props = $props();

	let t = $derived(i18n.dict.home);
	let params = $derived({ unitId: groupId, moduleId: mod.id });
	let listHref = $derived(resolve('/unit/[unitId]/module/[moduleId]/exam', params));
	let nextHref = $derived(
		stats.next
			? resolve('/unit/[unitId]/module/[moduleId]/exam/[quizId]', {
					...params,
					quizId: stats.next.id
				})
			: listHref
	);
</script>

<section
	class="flex flex-col gap-3 rounded-3xl bg-surface p-4 shadow-md ring-1 shadow-overlay/5 ring-line/70"
>
	<header class="flex items-center gap-2">
		<ClipboardCheck size={20} class="text-brand" aria-hidden="true" />
		<h2 class="me-auto font-bold">{t.examsTitle}</h2>
		<span class="text-xs font-semibold text-muted">{i18n.dict.unit.modulePrefix} {mod.letter}</span>
	</header>

	{#if stats.taken === 0}
		<p class="text-sm leading-relaxed text-muted">{t.examsEmpty}</p>
	{:else}
		<div class="grid grid-cols-3 gap-2">
			<StatTile plain value={String(stats.best)} label={t.examsBest} />
			<StatTile plain value={String(stats.avgPercent ?? '-')} label={t.examsAvg} />
			<StatTile plain value="{stats.taken}/{stats.total}" label={t.examsTaken} />
		</div>
	{/if}

	<div class="flex flex-wrap items-center gap-3">
		<a
			href={nextHref}
			class="flex min-h-11 items-center rounded-full bg-brand px-5 text-sm font-bold text-white transition active:scale-95"
		>
			{stats.taken === 0 ? t.examsFirst : stats.next ? t.examsNext : t.examsBeatBest}
		</a>
		{#if stats.taken > 0}
			<a href={listHref} class="text-sm font-semibold text-brand">{t.examsAll}</a>
		{/if}
	</div>
</section>
