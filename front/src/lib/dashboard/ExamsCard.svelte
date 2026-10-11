<script lang="ts">
	import { ClipboardCheck } from '@lucide/svelte';
	import { resolve } from '$app/paths';
	import type { CurriculumModule } from '$lib/curriculum';
	import { i18n } from '$lib/i18n/index.svelte';
	import type { ExamStats } from './data';

	// Exams across the student's modules: one row each, into that module's exam list.
	type Props = { groupId: string; rows: { mod: CurriculumModule; stats: ExamStats }[] };

	let { groupId, rows }: Props = $props();

	let t = $derived(i18n.dict.home);
</script>

<section class="rounded-3xl bg-surface p-5 shadow-md ring-1 shadow-overlay/5 ring-line/70">
	<h2 class="mb-3 flex items-center gap-2 font-bold">
		<ClipboardCheck size={20} class="text-brand" aria-hidden="true" />
		{t.examsTitle}
	</h2>
	<ul class="flex flex-col divide-y divide-line/70">
		{#each rows as { mod, stats } (mod.id)}
			<li>
				<a
					href={resolve('/unit/[unitId]/module/[moduleId]/exam', {
						unitId: groupId,
						moduleId: mod.id
					})}
					class="flex min-h-14 items-center gap-3 py-2 transition active:scale-[0.99]"
				>
					<span class="min-w-0 flex-1">
						<span class="block font-semibold">{i18n.dict.unit.modulePrefix} {mod.letter}</span>
						<span class="block text-sm text-muted">
							{t.examsTaken(stats.taken, stats.total)}{#if stats.lastPercent !== undefined}
								· {t.examLast(stats.lastPercent)}{/if}
						</span>
					</span>
					<span class="shrink-0 rounded-full bg-brand-soft px-4 py-2 text-sm font-bold text-brand">
						{stats.taken ? t.examsMore : t.examStart}
					</span>
				</a>
			</li>
		{/each}
	</ul>
</section>
