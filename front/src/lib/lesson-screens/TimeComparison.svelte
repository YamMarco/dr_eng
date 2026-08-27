<script lang="ts">
	import type { TimeComparisonScreen } from './types';
	import { getLessonSession } from './session.svelte';

	// disabled is write-only here: always allowed, we just need it declared
	// bindable so the runner's footer resets correctly on every screen.
	let {
		screen,
		// eslint-disable-next-line no-useless-assignment
		disabled = $bindable(false)
	}: { screen: TimeComparisonScreen; disabled?: boolean } = $props();

	const session = getLessonSession();
	let aMs = $derived(session[screen.aKey] ?? 0);
	let bMs = $derived(session[screen.bKey] ?? 0);
</script>

<div class="flex flex-col gap-3">
	<div
		class="flex items-center justify-between rounded-2xl bg-surface p-4 ring-1 shadow-ink/5 ring-line/70"
	>
		<span>{screen.aLabel}</span>
		<span class="font-bold tabular" dir="ltr">{(aMs / 1000).toFixed(1)}s</span>
	</div>
	<div
		class="flex items-center justify-between rounded-2xl bg-surface p-4 ring-1 shadow-ink/5 ring-line/70"
	>
		<span>{screen.bLabel}</span>
		<span class="font-bold tabular" dir="ltr">{(bMs / 1000).toFixed(1)}s</span>
	</div>
	<p class="mt-2 leading-relaxed text-muted">
		{aMs > 0 && bMs > 0 && bMs < aMs ? screen.fasterMessage : screen.tieMessage}
	</p>
</div>
