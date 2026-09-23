<script lang="ts">
	import { formatTime } from './time';

	let {
		seconds,
		warning = false,
		label
	}: { seconds: number; warning?: boolean; label?: string } = $props();
</script>

<div
	role="timer"
	aria-live="off"
	class="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-bold tabular transition-colors {warning
		? 'bg-danger-soft text-danger'
		: 'bg-brand-soft text-brand-dark'}"
>
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		class="h-4 w-4"
		aria-hidden="true"
	>
		<circle cx="12" cy="12" r="9" />
		<path d="M12 7v5l3 2" />
	</svg>
	{#if label}
		<span class="font-semibold">{label}</span>
	{/if}
	<span dir="ltr">{formatTime(seconds)}</span>
</div>
