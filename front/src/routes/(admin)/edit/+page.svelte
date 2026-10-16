<script lang="ts">
	import EditWorkspace from '$lib/content-edit/EditWorkspace.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<svelte:head><title>עריכת תוכן</title></svelte:head>

<EditWorkspace
	module={data.module}
	lesson={data.lesson}
	round={data.round}
	screen={data.screen}
/>
