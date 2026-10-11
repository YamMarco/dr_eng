<script lang="ts">
	import { Check } from '@lucide/svelte';
	import { sectionMeta } from '$lib/content';
	import { i18n } from '$lib/i18n/index.svelte';
	import { themeForSectionIndex } from '$lib/sectionThemes';
	import type { RouteSection } from '$lib/dashboard/data';

	// The finite route through a module: its sections in study order, then
	// the exam. Seeing the whole thing (and where you are on it) is the point.
	type Props = { sections: RouteSection[]; examDone: boolean; href: string };

	let { sections, examDone, href }: Props = $props();

	type Stop = { id: string; label: string; progress?: string; done: boolean; theme?: string };

	let stops = $derived<Stop[]>([
		...sections.map((s) => ({
			id: s.id,
			label: i18n.dict.home.sectionShort[s.id] ?? i18n.title(s.id),
			progress: `${s.done}/${s.total}`,
			done: s.total > 0 && s.done === s.total,
			theme: themeForSectionIndex(sectionMeta.findIndex((m) => m.id === s.id)).node
		})),
		{ id: 'exam', label: i18n.dict.home.routeExam, done: examDone }
	]);

	let currentIndex = $derived(stops.findIndex((s) => !s.done));
</script>

<!-- href is built by the dashboard from runtime ids, not a typed route -->
<!-- eslint-disable svelte/no-navigation-without-resolve -->
<a
	{href}
	class="block rounded-3xl bg-surface p-5 shadow-md ring-1 shadow-overlay/5 ring-line/70 transition duration-150 hover:shadow-lg active:scale-[0.99]"
>
	<h2 class="mb-4 font-bold">{i18n.dict.home.routeTitle}</h2>
	<ol class="grid" style="grid-template-columns: repeat({stops.length}, minmax(0, 1fr))">
		{#each stops as stop, i (stop.id)}
			{@const current = i === currentIndex}
			<li class="relative flex flex-col items-center gap-1.5 text-center">
				{#if i < stops.length - 1}
					<!-- Connector from this stop's center to the next one's (RTL-safe via start-*). -->
					<span
						class="absolute inset-s-1/2 top-4 h-0.5 w-full {stop.done ? 'bg-brand' : 'bg-line'}"
						aria-hidden="true"
					></span>
				{/if}
				<span
					class="relative flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold {stop.done
						? (stop.theme ?? 'bg-brand text-white')
						: current
							? 'border-2 border-brand bg-surface text-brand ring-4 ring-brand/20'
							: 'bg-line text-muted'}"
					aria-current={current ? 'step' : undefined}
				>
					{#if stop.done}
						<Check size={16} strokeWidth={3} aria-hidden="true" />
					{:else}
						{i + 1}
					{/if}
				</span>
				<span class="text-xs leading-tight font-semibold {current ? 'text-ink' : 'text-muted'}">
					{stop.label}
				</span>
				{#if stop.progress}
					<span class="text-[11px] text-muted" dir="ltr">{stop.progress}</span>
				{/if}
			</li>
		{/each}
	</ol>
</a>
<!-- eslint-enable svelte/no-navigation-without-resolve -->
