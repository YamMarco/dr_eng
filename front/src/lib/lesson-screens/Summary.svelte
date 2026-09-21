<script lang="ts">
	import type { SummaryScreen } from './types';
	import Md from '$lib/components/Md.svelte';
	import { mdBlock } from './miniMarkdown';

	let {
		screen,
		onAdvance,
		// eslint-disable-next-line no-useless-assignment
		disabled = $bindable(false),
		// eslint-disable-next-line no-useless-assignment
		label = $bindable('')
	}: {
		screen: SummaryScreen;
		onAdvance: () => void;
		disabled?: boolean;
		label?: string;
	} = $props();

	export function primaryAction() {
		onAdvance();
	}
</script>

<div class="rounded-3xl bg-brand-soft p-5 ring-1 ring-brand/20">
	<h2 class="text-lg font-bold text-brand-dark" dir="auto"><Md text={screen.title} /></h2>
	<ul class="mt-3 flex flex-col gap-2 text-sm leading-relaxed">
		{#each screen.lines as line (line)}
			<li class="flex gap-1.5">
				<span>•</span>
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				<div class="flex-1">{@html mdBlock(line)}</div>
			</li>
		{/each}
	</ul>
</div>
