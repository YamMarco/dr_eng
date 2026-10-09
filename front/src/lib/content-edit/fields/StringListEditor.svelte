<script lang="ts">
	// A reorderless list of free-text strings with add/remove — summary
	// lines, question-preview prompts, word banks, passage-quiz keywords, ...
	import MarkdownInput from '../MarkdownInput.svelte';

	let {
		items = $bindable([]),
		addLabel = '+ הוסף',
		markdown = false,
		multiline = false,
		compact = false,
		placeholder = '',
		dir = 'auto'
	}: {
		items: string[];
		addLabel?: string;
		/** Use the rich MarkdownInput field instead of a plain input (prose lines). */
		markdown?: boolean;
		/** Plain wrapping textarea, for long entries that don't fit one line. */
		multiline?: boolean;
		/** Short entries (single words): small inputs side by side instead of one per row. */
		compact?: boolean;
		placeholder?: string;
		dir?: 'rtl' | 'ltr' | 'auto';
	} = $props();
</script>

<div class={compact ? 'flex flex-wrap items-center gap-x-3 gap-y-1' : ''}>
	{#each items as _item, i (i)}
		<div class={compact ? 'flex items-center gap-1' : 'mb-1 flex items-start gap-2'}>
			{#if markdown}
				<div class="w-full"><MarkdownInput bind:value={items[i]} {dir} minRows={2} /></div>
			{:else if multiline}
				<textarea
					bind:value={items[i]}
					{dir}
					{placeholder}
					rows="4"
					class="w-full resize-none rounded-lg border-2 border-line bg-canvas p-2 text-sm"
				></textarea>
			{:else}
				<input
					bind:value={items[i]}
					{dir}
					{placeholder}
					class="{compact
						? 'w-32 p-1'
						: 'w-full p-2'} rounded-lg border-2 border-line bg-canvas text-sm"
				/>
			{/if}
			<button
				type="button"
				class="{compact ? '' : 'mt-2'} px-1 text-xs text-danger"
				onclick={() => items.splice(i, 1)}
			>
				✕
			</button>
		</div>
	{/each}
	<button type="button" class="text-xs font-semibold text-brand" onclick={() => items.push('')}>
		{addLabel}
	</button>
</div>
