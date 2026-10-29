<script lang="ts">
	import Paywall from '$lib/components/Paywall.svelte';
	import { access } from '$lib/access.svelte';

	// The app and COBE are sold apart: a module the plan lacks shows a lock.
	let { data, children } = $props();

	let lock = $derived<'app' | 'cobe' | null>(
		data.mod.id === 'cobe' ? (access.cobe ? null : 'cobe') : access.active ? null : 'app'
	);
</script>

{#if lock}
	<Paywall {lock} />
{:else}
	{@render children()}
{/if}
