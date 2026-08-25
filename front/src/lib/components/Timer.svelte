<script lang="ts">
	import { formatTime } from '$lib/exam.svelte';

	type Props = { seconds: number; warning?: boolean; size?: 'sm' | 'lg' };
	let { seconds, warning = false, size = 'sm' }: Props = $props();
</script>

<div
	role="timer"
	aria-live="off"
	aria-label="זמן שנותר"
	class="inline-flex items-center gap-2 rounded-full font-bold tabular transition-colors {size ===
	'lg'
		? 'px-5 py-2.5 text-3xl'
		: 'px-3.5 py-1.5 text-base'} {warning
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
		class={size === 'lg' ? 'h-7 w-7' : 'h-4 w-4'}
		aria-hidden="true"
	>
		<circle cx="12" cy="12" r="9" />
		<path d="M12 7v5l3 2" />
	</svg>
	<span dir="ltr">{formatTime(seconds)}</span>
</div>
