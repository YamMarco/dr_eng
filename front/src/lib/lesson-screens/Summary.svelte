<script lang="ts">
	import type { SummaryScreen } from './types';
	import { mdInline } from './miniMarkdown';

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
	<h2 class="text-lg font-bold text-brand-dark">{screen.title}</h2>
	<ul class="mt-3 flex flex-col gap-2 text-sm leading-relaxed">
		{#each screen.lines as line (line)}
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			<li>• {@html mdInline(line)}</li>
		{/each}
	</ul>
</div>
