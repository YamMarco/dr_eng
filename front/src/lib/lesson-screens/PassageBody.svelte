<script lang="ts">
	import Md from '$lib/components/Md.svelte';
	import type { PassageScreen } from './types';

	// Pure display, shared by the `passage` screen and QuizRunner's
	// "read the passage again" overlay - no advance/disabled contract here.
	let { passage }: { passage: PassageScreen } = $props();

	const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
</script>

{#if passage.title}
	<h2 class="mb-3 text-lg font-bold" dir="ltr"><Md text={passage.title} /></h2>
{/if}

<div class="flex flex-col gap-4" dir="ltr">
	{#each passage.paragraphs as paragraph, i (paragraph.id)}
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
