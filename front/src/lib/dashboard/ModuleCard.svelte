<script lang="ts">
	import { slide } from 'svelte/transition';
	import { Check, ChevronDown, Star } from '@lucide/svelte';
	import { resolve } from '$app/paths';
	import type { CurriculumModule } from '$lib/curriculum';
	import { i18n } from '$lib/i18n/index.svelte';
	import type { RouteSection } from './data';
	import RouteMap from './RouteMap.svelte';

	// One module with a lesson path: a progress bar when closed; tap to see
	// its track and done / gold counts.
	type Props = {
		mod: CurriculumModule;
		groupId: string;
		sections: RouteSection[];
		defaultOpen?: boolean;
	};

	let { mod, groupId, sections, defaultOpen = false }: Props = $props();

	// svelte-ignore state_referenced_locally
	let open = $state(defaultOpen);

	let t = $derived(i18n.dict.home);
	let total = $derived(sections.reduce((sum, s) => sum + s.total, 0));
	let done = $derived(sections.reduce((sum, s) => sum + s.done, 0));
	let gold = $derived(sections.reduce((sum, s) => sum + s.gold, 0));
</script>

<section class="rounded-3xl bg-surface shadow-md ring-1 shadow-overlay/5 ring-line/70">
	<button
		type="button"
		aria-expanded={open}
		onclick={() => (open = !open)}
		class="flex w-full items-center gap-4 p-4 text-start"
	>
		<span
			class="flex h-11 min-w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-soft px-2 font-extrabold text-brand"
			dir="ltr"
		>
			{mod.letter}
		</span>
		<span class="flex min-w-0 flex-1 flex-col gap-2">
			<span class="font-bold">{i18n.dict.unit.modulePrefix} {mod.letter}</span>
			<span class="h-1.5 overflow-hidden rounded-full bg-line" aria-hidden="true">
				<span
					class="block h-full rounded-full bg-brand transition-[width] duration-500"
					style="width: {total ? (done / total) * 100 : 0}%"
				></span>
			</span>
		</span>
		<ChevronDown
			size={20}
			class="shrink-0 text-muted transition-transform duration-200 {open ? 'rotate-180' : ''}"
			aria-hidden="true"
		/>
	</button>

	{#if open}
		<div transition:slide={{ duration: 200 }} class="flex flex-col gap-4 px-4 pb-4">
			<div class="flex items-center gap-2 text-sm font-semibold">
				<span class="flex items-center gap-1 rounded-full bg-brand-soft px-3 py-1 text-brand">
					<Check size={14} strokeWidth={3} aria-hidden="true" />
					<span dir="ltr">{done}/{total}</span>
					{t.statDone}
				</span>
				<span
					class="flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1 text-amber-700 dark:bg-amber-950 dark:text-amber-300"
				>
					<Star size={14} fill="currentColor" aria-hidden="true" />
					{gold}
					{t.statGold}
				</span>
				<a
					href={resolve('/unit/[unitId]/module/[moduleId]/lessons', {
						unitId: groupId,
						moduleId: mod.id
					})}
					class="ms-auto flex min-h-11 items-center px-1 text-brand hover:underline"
				>
					{t.toPath}
				</a>
			</div>

			<RouteMap {sections} />
		</div>
	{/if}
</section>
