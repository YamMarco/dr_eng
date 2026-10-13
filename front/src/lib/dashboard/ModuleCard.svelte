<script lang="ts">
	import { slide } from 'svelte/transition';
	import { Check, ChevronDown, Star } from '@lucide/svelte';
	import { resolve } from '$app/paths';
	import type { CurriculumModule } from '$lib/curriculum';
	import { i18n } from '$lib/i18n/index.svelte';
	import type { RouteSection } from './data';
	import RouteMap from './RouteMap.svelte';

	// One module's lesson path: progress when closed; tap for its track,
	// done / gold counts and the link in. Exams and words have their own cards.
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
	let params = $derived({ unitId: groupId, moduleId: mod.id });
</script>

<section class="rounded-3xl bg-surface shadow-md ring-1 shadow-overlay/5 ring-line/70">
	<button
		type="button"
		aria-expanded={open}
		onclick={() => (open = !open)}
		class="flex w-full items-center gap-3 p-4 text-start"
	>
		<span
			class="flex h-11 min-w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-soft px-2 font-extrabold text-brand"
			dir="ltr"
		>
			{mod.letter}
		</span>
		<span class="flex min-w-0 flex-1 flex-col gap-1.5">
			<span class="flex items-baseline gap-2">
				<span class="me-auto font-bold">{i18n.dict.unit.modulePrefix} {mod.letter}</span>
				<span class="text-xs text-muted" dir="ltr">{done}/{total}</span>
			</span>
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
			<RouteMap {sections} />
			<div class="flex flex-wrap items-center gap-2 text-sm font-semibold">
				<span class="flex items-center gap-1">
					<Check size={14} strokeWidth={3} class="text-brand" aria-hidden="true" />
					<span dir="ltr">{done}/{total}</span>
					<span class="font-normal text-muted">{t.statDone}</span>
				</span>
				<span class="flex items-center gap-1">
					<Star size={14} fill="currentColor" class="text-amber-500" aria-hidden="true" />
					{gold}
					<span class="font-normal text-muted">{t.statGold}</span>
				</span>
				<a
					href={resolve('/unit/[unitId]/module/[moduleId]/lessons', params)}
					class="ms-auto flex min-h-11 items-center rounded-full bg-brand-soft px-4 text-sm font-bold text-brand transition active:scale-95"
				>
					{t.toPath}
				</a>
			</div>
		</div>
	{/if}
</section>
