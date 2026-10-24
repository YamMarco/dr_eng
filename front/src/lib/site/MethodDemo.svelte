<script lang="ts">
	import { Check } from '@lucide/svelte';
	import { i18n } from '$lib/i18n/index.svelte';

	// A looping demo of each exam technique (site.css: .m-*). Decorative: the card says it in words.
	let { kind }: { kind: number } = $props();
	let d = $derived(i18n.dict.site.home.methodDemo);
</script>

<div
	dir="ltr"
	class="flex h-48 flex-col justify-center gap-3 rounded-2xl bg-canvas p-4 text-start text-sm"
	aria-hidden="true"
>
	{#if kind === 0}
		<p class="font-bold">
			{d.question[0]} <mark class="m-anchor rounded px-0.5">{d.question[1]}</mark>
			{d.question[2]}
		</p>
		<p class="leading-relaxed text-muted">
			<span class="m-dim">The village sits high in the hills. Fewer people stayed each year.</span>
			{d.passage[0]}
			<mark class="m-anchor rounded px-0.5 text-ink">{d.passage[1]}</mark>
			{d.passage[2]}
			<span class="m-answer rounded px-0.5 font-semibold text-ink">{d.passage[3]}</span>
		</p>
	{:else if kind === 1}
		<p class="text-base font-bold">
			{d.instruction[0]}
			<span class="relative inline-block px-1">
				{d.instruction[1]}
				<svg
					class="absolute -inset-x-1.5 -inset-y-2 h-[calc(100%+1rem)] w-[calc(100%+0.75rem)] overflow-visible"
					viewBox="0 0 100 50"
					preserveAspectRatio="none"
				>
					<ellipse
						class="m-circle"
						cx="50"
						cy="25"
						rx="48"
						ry="22"
						fill="none"
						pathLength="1"
						stroke-width="3"
						vector-effect="non-scaling-stroke"
					/>
				</svg>
			</span>
			{d.instruction[2]}
		</p>
		{#each d.slots as slot, i (slot)}
			<span class="flex items-center gap-2 rounded-xl bg-surface px-3 py-2 ring-1 ring-line">
				<span class="font-bold text-muted">{i + 1}.</span>
				<span class="m-slot m-slot-{i + 1} flex-1">{slot}</span>
				<Check size={15} class="m-tick m-tick-{i + 1} text-brand" />
			</span>
		{/each}
	{:else}
		<span
			class="max-w-[85%] self-start rounded-2xl rounded-ss-sm bg-surface px-3 py-2 ring-1 ring-line"
		>
			{d.stuck}
		</span>
		<span class="relative self-end">
			<span
				class="m-typing absolute inset-e-0 top-0 flex gap-1 rounded-2xl rounded-se-sm bg-brand px-3 py-3"
			>
				<span class="h-1.5 w-1.5 rounded-full bg-white"></span>
				<span class="h-1.5 w-1.5 rounded-full bg-white"></span>
				<span class="h-1.5 w-1.5 rounded-full bg-white"></span>
			</span>
			<span
				class="m-pivot block max-w-64 rounded-2xl rounded-se-sm bg-brand px-3 py-2 font-semibold text-white"
			>
				{d.pivot}
			</span>
		</span>
	{/if}
</div>
