<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>בגרות באנגלית — תרגול</title>
</svelte:head>

<div class="flex min-h-dvh flex-col bg-canvas">
	{@render children()}
</div>
