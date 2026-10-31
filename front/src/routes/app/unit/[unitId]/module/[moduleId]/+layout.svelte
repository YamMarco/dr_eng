<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import Paywall from '$lib/components/Paywall.svelte';
	import { access } from '$lib/access.svelte';
	import { cobeVisible } from '$lib/alpha';
	import { auth } from '$lib/auth.svelte';

	// The app and COBE are sold apart: a module the plan lacks shows a lock.
	let { data, children } = $props();

	// Staff-only COBE (alpha): everyone else goes home.
	let hidden = $derived(data.mod.id === 'cobe' && !cobeVisible(auth.isAdmin));
	$effect(() => {
		if (auth.ready && hidden) goto(resolve('/app'), { replaceState: true });
	});

	let lock = $derived<'app' | 'cobe' | null>(
		data.mod.id === 'cobe' ? (access.cobe ? null : 'cobe') : access.active ? null : 'app'
	);
</script>

{#if hidden}
	<!-- redirecting -->
{:else if lock}
	<Paywall {lock} />
{:else}
	{@render children()}
{/if}
