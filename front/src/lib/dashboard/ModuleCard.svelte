<script lang="ts">
	import { slide } from 'svelte/transition';
	import { ChevronDown } from '@lucide/svelte';
	import { resolve } from '$app/paths';
	import { moduleSummary, type CurriculumModule } from '$lib/curriculum';
	import { i18n } from '$lib/i18n/index.svelte';
	import type { RouteSection } from './data';
	import RouteMap from './RouteMap.svelte';

	// One module of the student's unit level: tap to expand its own track
	// and lesson counts. A module with no lesson path yet stays closed.
	type Props = {
		mod: CurriculumModule;
		groupId: string;
		sections: RouteSection[];
		examDone: boolean;
		defaultOpen?: boolean;
	};

	let { mod, groupId, sections, examDone, defaultOpen = false }: Props = $props();

	// svelte-ignore state_referenced_locally
	let open = $state(defaultOpen);

	let t = $derived(i18n.dict.home);
	let hasPath = $derived(sections.length > 0);
	let ready = $derived(sections.reduce((sum, s) => sum + s.total, 0));
	let done = $derived(sections.reduce((sum, s) => sum + s.done, 0));
	let gold = $derived(sections.reduce((sum, s) => sum + s.gold, 0));
	let percent = $derived(ready ? Math.round((done / ready) * 100) : 0);
</script>

<section class="rounded-3xl bg-surface shadow-md ring-1 shadow-overlay/5 ring-line/70">
	<button
		type="button"
		disabled={!hasPath}
		aria-expanded={hasPath ? open : undefined}
		onclick={() => (open = !open)}
		class="flex w-full items-center gap-4 p-5 text-start disabled:cursor-default"
	>
		<span
			class="flex h-11 min-w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-soft px-2 font-extrabold text-brand"
			dir="ltr"
		>
			{mod.letter}
		</span>
		<span class="min-w-0 flex-1">
			<span class="block font-bold">{i18n.dict.unit.modulePrefix} {mod.letter}</span>
			<span class="block text-sm text-muted">
				{hasPath ? moduleSummary(mod) : i18n.dict.common.comingSoon}
			</span>
		</span>
		{#if hasPath}
			<span class="text-sm font-bold text-muted" dir="ltr">{percent}%</span>
			<ChevronDown
				size={20}
				class="shrink-0 text-muted transition-transform duration-200 {open ? 'rotate-180' : ''}"
				aria-hidden="true"
			/>
		{/if}
	</button>

	{#if hasPath && open}
		<div transition:slide={{ duration: 200 }} class="flex flex-col gap-5 px-5 pb-5">
			<dl class="grid grid-cols-3 gap-2 text-center">
				{#each [{ label: t.statReady, value: ready, tone: 'bg-canvas text-ink' }, { label: t.statDone, value: done, tone: 'bg-brand-soft text-brand' }, { label: t.statGold, value: gold, tone: 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300' }] as stat (stat.label)}
					<div class="rounded-2xl px-2 py-2 {stat.tone}">
						<dt class="text-xs font-semibold">{stat.label}</dt>
						<dd class="text-xl font-extrabold">{stat.value}</dd>
					</div>
				{/each}
			</dl>

			<RouteMap {sections} {examDone} />

			<a
				href={resolve('/unit/[unitId]/module/[moduleId]/lessons', {
					unitId: groupId,
					moduleId: mod.id
				})}
				class="flex min-h-11 items-center justify-center rounded-2xl bg-brand-soft font-bold text-brand transition active:scale-[0.98]"
			>
				{t.toLessons}
			</a>
		</div>
	{/if}
</section>
