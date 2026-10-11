<script lang="ts">
	// A SettingsGroup for an optional feature: while absent it is just one
	// "+ add" line (no title or hint), so unused options cost almost no height.
	import type { Snippet } from 'svelte';
	import SettingsGroup from './SettingsGroup.svelte';

	let {
		title,
		hint,
		addLabel,
		present,
		onAdd,
		children
	}: {
		title: string;
		hint?: string;
		addLabel: string;
		present: boolean;
		onAdd: () => void;
		children: Snippet;
	} = $props();
</script>

{#if present}
	<SettingsGroup {title} {hint}>{@render children()}</SettingsGroup>
{:else}
	<button type="button" class="text-xs font-semibold text-brand" onclick={onAdd}>
		{addLabel}
	</button>
{/if}
