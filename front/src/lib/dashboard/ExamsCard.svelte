<script lang="ts">
	import { ChevronLeft } from '@lucide/svelte';
	import { resolve } from '$app/paths';
	import type { CurriculumModule } from '$lib/curriculum';
	import { i18n } from '$lib/i18n/index.svelte';
	import type { ExamStats } from './data';

	// Exams across the student's modules: one row each, into that module's exam list.
	type Props = { groupId: string; rows: { mod: CurriculumModule; stats: ExamStats }[] };

	let { groupId, rows }: Props = $props();

	let t = $derived(i18n.dict.home);
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
				class="flex min-h-16 items-center gap-3 px-4 py-3 transition active:scale-[0.99]"
			>
				<span class="min-w-0 flex-1">
					<span class="block font-semibold">{i18n.dict.unit.modulePrefix} {mod.letter}</span>
					<span class="block text-sm text-muted">
						{t.examsTaken(stats.taken, stats.total)}{#if stats.lastPercent !== undefined}
							· {t.examLast(stats.lastPercent)}{/if}
					</span>
				</span>
				<ChevronLeft size={20} class="shrink-0 text-muted ltr:rotate-180" aria-hidden="true" />
			</a>
		</li>
	{/each}
</ul>
