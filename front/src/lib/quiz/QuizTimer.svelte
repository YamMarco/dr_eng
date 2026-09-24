<script lang="ts">
	import { formatTime } from './time';
	import { i18n } from '$lib/i18n/index.svelte';

	let {
		seconds,
		warning = false,
		label
	}: { seconds: number; warning?: boolean; label?: string } = $props();

	// Keeps counting in the background either way - this only hides the
	// digits from view, e.g. so a passer-by can't read how much time is left.
	let hidden = $state(false);
</script>

<button
	type="button"
	aria-live="off"
	aria-label={i18n.dict.quiz.timeLeftLabel}
	onclick={() => (hidden = !hidden)}
	class="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-bold tabular transition-colors active:scale-95 {warning
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
	{#if !hidden}
		{#if label}
			<span class="font-semibold">{label}</span>
		{/if}
		<span dir="ltr">{formatTime(seconds)}</span>
	{/if}
</button>
