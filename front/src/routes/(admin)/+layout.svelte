<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { auth } from '$lib/auth.svelte';
	import UnlockDialog from '$lib/content-edit/UnlockDialog.svelte';

	// Authoring tools are staff-only. Everyone else (and signed-out visitors,
	// who meet the login screen there) is sent to the app.

	let { children } = $props();

	$effect(() => {
		if (auth.ready && !auth.isAdmin) goto(resolve('/app'), { replaceState: true });
	});
</script>

{#if auth.ready && auth.isAdmin}
	{@render children()}
	<UnlockDialog />
{/if}
