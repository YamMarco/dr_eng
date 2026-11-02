<script module lang="ts">
	export type DemoKind = 'anchor' | 'rescue' | 'vocab' | 'essay';
</script>

<script lang="ts">
	import { i18n } from '$lib/i18n/index.svelte';

	// A looping demo of each exam technique (site.css: .m-*). Decorative: the card says it in words.
	let { kind }: { kind: DemoKind } = $props();
	let d = $derived(i18n.dict.site.home.methodDemo);
</script>

<div
	dir="ltr"
	class="flex h-48 flex-col justify-center gap-3 rounded-2xl bg-canvas p-4 text-start text-sm"
	aria-hidden="true"
>
	{#if kind === 'anchor'}
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
	{:else if kind === 'vocab'}
		<!-- The same word, met again at growing gaps, a new form each time; the meter fills with it. -->
		<div class="flex items-center gap-2">
			<span class="text-xl font-black text-brand-dark">{d.vocab.word}</span>
			<span class="font-semibold text-muted" dir="rtl">{d.vocab.gloss}</span>
			<span class="ms-auto flex gap-1">
				{#each d.vocab.contexts as [day], i (day)}
					<span class="h-2 w-5 overflow-hidden rounded-full bg-line">
						<span class="m-step m-step-{i + 1} block h-full bg-brand"></span>
					</span>
				{/each}
			</span>
		</div>
		<ol class="flex flex-col gap-1.5 border-s-2 border-dashed border-line ps-3">
			{#each d.vocab.contexts as [day, before, form, after], i (day)}
				<li class="m-step m-step-{i + 1} relative flex items-baseline gap-2">
					<span
						class="absolute -start-[1.05rem] top-1.5 h-2 w-2 rounded-full bg-brand ring-2 ring-canvas"
					></span>
					<span class="w-10 shrink-0 text-xs font-bold text-muted">{day}</span>
					<span class="rounded-lg bg-surface px-2 py-1 ring-1 ring-line"
						>{before}<mark class="rounded bg-mark-yellow px-0.5 font-bold text-mark-ink"
							>{form}</mark
						>{after}</span
					>
				</li>
			{/each}
		</ol>
	{:else if kind === 'essay'}
		{#each d.essay as line, i (line)}
			<span
				class="m-step m-step-{i +
					1} flex items-center gap-2 rounded-xl bg-surface px-3 py-1.5 ring-1 ring-line"
			>
				<span class="font-bold text-muted tabular-nums">{i + 1}</span>
				<span class="font-semibold">{line}</span>
				<span class="ms-auto h-1.5 w-1/4 rounded-full bg-line"></span>
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
