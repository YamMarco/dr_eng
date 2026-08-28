<script lang="ts">
	import type { StepsScreen } from './types';

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
			class="rounded-2xl bg-surface p-4 leading-relaxed shadow-sm ring-1 shadow-ink/5 ring-line/70"
		>
			{step}
		</li>
	{/each}
</ol>
