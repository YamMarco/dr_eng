<script lang="ts">
	import type { SummaryScreen } from './types';

	// disabled is write-only here: always allowed, we just need it declared
	// bindable so the runner's footer resets correctly on every screen.
	// eslint-disable-next-line no-useless-assignment
	let { screen, disabled = $bindable(false) }: { screen: SummaryScreen; disabled?: boolean } =
		$props();
</script>

<div class="rounded-3xl bg-brand-soft p-5 ring-1 ring-brand/20">
	<h2 class="text-lg font-bold text-brand-dark">{screen.title}</h2>
	<ul class="mt-3 flex flex-col gap-2 text-sm leading-relaxed">
		{#each screen.lines as line (line)}
			<li>• {line}</li>
		{/each}
	</ul>
</div>
