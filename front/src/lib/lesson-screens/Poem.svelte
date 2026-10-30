<script lang="ts">
	import type { PoemScreen } from './types';
	import { mdBlock } from './miniMarkdown';
	import { i18n } from '$lib/i18n/index.svelte';

	// Not scored: the runner reads disabled/label through the bindable props.
	let {
		screen,
		onAdvance,
		// eslint-disable-next-line no-useless-assignment
		disabled = $bindable(false),
		// eslint-disable-next-line no-useless-assignment
		label = $bindable('')
	}: {
		screen: PoemScreen;
		onAdvance: () => void;
		disabled?: boolean;
		label?: string;
	} = $props();

	// Line numbers whose Hebrew is showing.
	let open = $state<number[]>([]);
	let hasHebrew = $derived(screen.stanzas.some((s) => s.lines.some((l) => l.en.trim() && l.he)));

	function toggle(n: number) {
		open = open.includes(n) ? open.filter((x) => x !== n) : [...open, n];
	}

	export function primaryAction() {
		onAdvance();
	}
</script>

{#if screen.title}
	<p class="mb-1 text-lg font-bold" dir="auto">{screen.title}</p>
{/if}
{#if hasHebrew}
	<p class="mb-3 text-sm text-muted">{i18n.dict.poem.tapHint}</p>
{/if}

<div class="flex flex-col gap-3">
	{#each screen.stanzas as stanza, s (s)}
		<section class="rounded-2xl bg-surface p-3 shadow-sm ring-1 shadow-overlay/5 ring-line/70">
			{#if stanza.label}
				<p class="mb-1 text-xs font-bold tracking-wide text-muted uppercase" dir="ltr">
					{stanza.label}
				</p>
			{/if}
			<ol class="flex flex-col" dir="ltr">
				{#each stanza.lines.filter((l) => l.en.trim()) as line (line.n)}
					{@const shown = open.includes(line.n)}
					<li>
						<button
							type="button"
							disabled={!line.he}
							aria-expanded={line.he ? shown : undefined}
							onclick={() => toggle(line.n)}
							class="flex w-full items-baseline gap-3 rounded-lg px-1 py-1 text-start transition enabled:hover:bg-brand-soft/40 {shown
								? 'bg-brand-soft/40'
								: ''}"
						>
							<span class="w-5 shrink-0 text-end text-xs text-muted tabular">{line.n}</span>
							<span class="font-serif leading-relaxed">{line.en}</span>
						</button>
						{#if shown && line.he}
							<p class="mb-1 ml-9 text-sm leading-relaxed text-brand-dark" dir="rtl">{line.he}</p>
						{/if}
					</li>
				{/each}
			</ol>
			{#if stanza.note}
				<div class="mt-1 text-sm leading-relaxed">
					<!-- eslint-disable-next-line svelte/no-at-html-tags -->
					{@html mdBlock(stanza.note)}
				</div>
			{/if}
		</section>
	{/each}
</div>
