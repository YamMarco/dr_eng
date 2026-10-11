<script lang="ts">
	import { ChevronLeft } from '@lucide/svelte';
	import { resolve } from '$app/paths';
	import type { CurriculumModule } from '$lib/curriculum';
	import { i18n } from '$lib/i18n/index.svelte';
	import StatTile from '$lib/components/StatTile.svelte';
	import { formatExamStats, type ExamStats } from '$lib/quiz/stats';

	// Exams across the student's modules: one row each with the same stats as
	// that module's exam page, tapping into it.
	type Props = { groupId: string; rows: { mod: CurriculumModule; stats: ExamStats }[] };

	let { groupId, rows }: Props = $props();
</script>

<ul
	class="flex flex-col divide-y divide-line/70 rounded-3xl bg-surface shadow-md ring-1 shadow-overlay/5 ring-line/70"
>
	{#each rows as { mod, stats } (mod.id)}
		<li>
			<a
				href={resolve('/unit/[unitId]/module/[moduleId]/exam', {
					unitId: groupId,
					moduleId: mod.id
				})}
				class="flex flex-col gap-3 p-4 transition active:scale-[0.99]"
			>
				<span class="flex items-center justify-between gap-3">
					<span class="font-bold">{i18n.dict.unit.modulePrefix} {mod.letter}</span>
					<ChevronLeft size={20} class="shrink-0 text-muted ltr:rotate-180" aria-hidden="true" />
				</span>
				<div class="grid grid-cols-3 gap-2">
					{#each formatExamStats(stats) as tile (tile.label)}
						<StatTile plain value={tile.value} label={tile.label} />
					{/each}
				</div>
			</a>
		</li>
	{/each}
</ul>
