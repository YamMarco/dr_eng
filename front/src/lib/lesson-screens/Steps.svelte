<script lang="ts">
	import type { StepsScreen } from './types';

	// disabled is write-only here: always allowed, we just need it declared
	// bindable so the runner's footer resets correctly on every screen.
	// eslint-disable-next-line no-useless-assignment
	let { screen, disabled = $bindable(false) }: { screen: StepsScreen; disabled?: boolean } =
		$props();
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
