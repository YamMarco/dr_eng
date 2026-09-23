<script lang="ts">
	import Md from '$lib/components/Md.svelte';
	import type { PassageScreen } from './types';

	// Teaching content, like preface/summary — never scored, always advances
	// immediately. disabled/label are write-only (never overridden).
	let {
		screen,
		onAdvance,
		// eslint-disable-next-line no-useless-assignment
		disabled = $bindable(false),
		// eslint-disable-next-line no-useless-assignment
		label = $bindable('')
	}: {
		screen: PassageScreen;
		onAdvance: () => void;
		disabled?: boolean;
		label?: string;
	} = $props();

	const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];

	export function primaryAction() {
		onAdvance();
	}
</script>

{#if screen.title}
	<h2 class="mb-3 text-lg font-bold" dir="ltr"><Md text={screen.title} /></h2>
{/if}

<div class="flex flex-col gap-4" dir="ltr">
	{#each screen.paragraphs as paragraph, i (paragraph.id)}
		<div class="flex gap-3">
			<span
				class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-soft text-xs font-bold text-ink/70"
			>
				{ROMAN[i] ?? i + 1}
			</span>
			<p class="leading-relaxed"><Md text={paragraph.text} /></p>
		</div>
	{/each}
</div>
