<script lang="ts">
	// A reorderless list of free-text strings with add/remove — summary
	// lines, question-preview prompts, word banks, passage-quiz keywords, ...
	import MarkdownInput from '../MarkdownInput.svelte';

	let {
		items = $bindable([]),
		addLabel = '+ הוסף',
		markdown = false,
		placeholder = '',
		dir = 'auto'
	}: {
		items: string[];
		addLabel?: string;
		/** Use the rich MarkdownInput field instead of a plain input (prose lines). */
		markdown?: boolean;
		placeholder?: string;
		dir?: 'rtl' | 'ltr' | 'auto';
	} = $props();
</script>

{#each items as _item, i (i)}
	<div class="mb-1 flex items-start gap-2">
		{#if markdown}
			<div class="w-full"><MarkdownInput bind:value={items[i]} {dir} minRows={2} /></div>
		{:else}
			<input
				bind:value={items[i]}
				{dir}
				{placeholder}
				class="w-full rounded-lg border-2 border-line bg-canvas p-2 text-sm"
			/>
		{/if}
		<button
			type="button"
			class="mt-2 px-1 text-xs text-danger"
			onclick={() => items.splice(i, 1)}
		>
			✕
		</button>
	</div>
{/each}
<button type="button" class="text-xs font-semibold text-brand" onclick={() => items.push('')}>
	{addLabel}
</button>
