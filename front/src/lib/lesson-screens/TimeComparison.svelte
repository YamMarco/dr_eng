<script lang="ts">
	import type { TimeComparisonScreen } from './types';
	import { getLessonSession } from './session.svelte';

	let {
		screen,
		onAdvance,
		// eslint-disable-next-line no-useless-assignment
		disabled = $bindable(false),
		// eslint-disable-next-line no-useless-assignment
		label = $bindable('')
	}: {
		screen: TimeComparisonScreen;
		onAdvance: () => void;
		disabled?: boolean;
		label?: string;
	} = $props();

	const session = getLessonSession();
	let aMs = $derived(session[screen.aKey] ?? 0);
	let bMs = $derived(session[screen.bKey] ?? 0);

	export function primaryAction() {
		onAdvance();
	}
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
