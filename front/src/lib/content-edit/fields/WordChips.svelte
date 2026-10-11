<script lang="ts">
	// Editable pill chips, shaped like the word bank the student sees. Each
	// chip is its own input; empty chips are dropped when focus leaves them.
	let { items = $bindable([]), addLabel = '+ מילה' }: { items: string[]; addLabel?: string } =
		$props();
</script>

<div class="flex flex-wrap items-center gap-1.5" dir="ltr">
	{#each items as _w, i (i)}
		<span
			class="inline-flex items-center gap-1 rounded-full bg-accent-soft px-2.5 py-1 text-xs font-semibold text-ink/70"
		>
			<input
				bind:value={items[i]}
				dir="ltr"
				aria-label="מילה"
				class="m-0 field-sizing-content min-w-4 border-0 bg-transparent p-0 text-xs leading-normal font-semibold outline-none"
				onblur={() => {
					if (!items[i].trim()) items.splice(i, 1);
				}}
			/>
			<button
				type="button"
				class="text-danger"
				aria-label="הסר מילה"
				onclick={() => items.splice(i, 1)}>✕</button
			>
		</span>
	{/each}
	<button
		type="button"
		class="rounded-full border border-dashed border-brand px-2.5 py-1 text-xs font-semibold text-brand"
		dir="rtl"
		onclick={() => items.push('')}>{addLabel}</button
	>
</div>
