<script lang="ts">
	/** One number + caption. `plain` drops the card chrome, for use inside a card. */
	type Props = { value: string; label: string; plain?: boolean };

	let { value, label, plain = false }: Props = $props();
</script>

<div
	class="rounded-2xl p-3 text-center {plain
		? 'bg-canvas'
		: 'bg-surface shadow-md ring-1 shadow-overlay/5 ring-line/70'}"
>
	<p class="text-xl font-extrabold tabular" dir="ltr">{value}</p>
	<p class="mt-0.5 text-xs text-muted">{label}</p>
</div>
