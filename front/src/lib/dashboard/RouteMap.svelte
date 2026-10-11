<script lang="ts">
	import { Check } from '@lucide/svelte';
	import { sectionMeta } from '$lib/content';
	import { i18n } from '$lib/i18n/index.svelte';
	import { themeForSectionIndex } from '$lib/sectionThemes';
	import type { RouteSection } from './data';

	// A module's finite track: its sections in study order, the current one
	// highlighted. Seeing the whole thing (and where you are on it) is the point.
	type Props = { sections: RouteSection[] };

	let { sections }: Props = $props();

	let currentIndex = $derived(sections.findIndex((s) => s.done < s.total));
</script>

<ol class="grid" style="grid-template-columns: repeat({sections.length}, minmax(0, 1fr))">
	{#each sections as section, i (section.id)}
		{@const done = section.total > 0 && section.done === section.total}
		{@const current = i === currentIndex}
		{@const theme = themeForSectionIndex(sectionMeta.findIndex((m) => m.id === section.id))}
		<li class="relative flex flex-col items-center gap-1.5 text-center">
			{#if i < sections.length - 1}
				<!-- Connector from this stop's center to the next one's (RTL-safe via inset-s). -->
				<span
					class="absolute inset-s-1/2 top-4 h-0.5 w-full {done ? 'bg-brand' : 'bg-line'}"
					aria-hidden="true"
				></span>
			{/if}
			<span
				class="relative flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold {done
					? theme.node
					: current
						? 'border-2 border-brand bg-surface text-brand ring-4 ring-brand/20'
						: 'bg-line text-muted'}"
				aria-current={current ? 'step' : undefined}
			>
				{#if done}
					<Check size={16} strokeWidth={3} aria-hidden="true" />
				{:else}
					{i + 1}
				{/if}
			</span>
			<span class="text-xs leading-tight font-semibold {current ? 'text-ink' : 'text-muted'}">
				{i18n.dict.home.sectionShort[section.id] ?? i18n.title(section.id)}
			</span>
			<span class="text-[11px] text-muted" dir="ltr">{section.done}/{section.total}</span>
		</li>
	{/each}
</ol>
