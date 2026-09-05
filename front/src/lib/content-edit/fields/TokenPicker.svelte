<script lang="ts">
	// Click-the-word picker for mark-word / mark-all, instead of typing a raw
	// token index. Splits the same way the runtime screen does (caller passes
	// the matching splitPattern) so tapped positions line up exactly.
	let {
		text,
		splitPattern = / /,
		selected,
		onToggle
	}: {
		text: string;
		splitPattern?: RegExp;
		/** Indices currently marked correct — just for highlighting, caller owns the state. */
		selected: number[];
		onToggle: (index: number) => void;
	} = $props();

	let words = $derived(text.split(splitPattern));
</script>

<div class="flex flex-wrap gap-1.5" dir="ltr">
	{#each words as word, i (i)}
		{@const isOn = selected.includes(i)}
		<button
			type="button"
			onclick={() => onToggle(i)}
			class="rounded-lg border-2 px-2 py-1 text-sm font-semibold transition {isOn
				? 'border-brand bg-brand-soft text-brand-dark'
				: 'border-line bg-surface hover:border-brand'}"
		>
			{word || '⎵'}
		</button>
	{/each}
</div>
