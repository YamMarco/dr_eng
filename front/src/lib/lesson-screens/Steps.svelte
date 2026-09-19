<script lang="ts">
	import type { StepsScreen } from './types';
	import { mdBlock } from './miniMarkdown';

	let {
		screen,
		onAdvance,
		// eslint-disable-next-line no-useless-assignment
		disabled = $bindable(false),
		// eslint-disable-next-line no-useless-assignment
		label = $bindable('')
	}: {
		screen: StepsScreen;
		onAdvance: () => void;
		disabled?: boolean;
		label?: string;
	} = $props();

	export function primaryAction() {
		onAdvance();
	}
</script>

<ol class="flex flex-col gap-4">
	{#each screen.steps as step, i (i)}
		<li
			class="flex items-start gap-3 rounded-2xl bg-surface p-4 leading-relaxed shadow-sm ring-1 shadow-overlay/5 ring-line/70"
		>
			{#if screen.ordered}
				<span
					class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-soft text-sm font-bold text-brand-dark tabular"
				>
					{i + 1}
				</span>
			{/if}
			<div class="min-w-0 flex-1">
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html mdBlock(step)}
			</div>
		</li>
	{/each}
</ol>
