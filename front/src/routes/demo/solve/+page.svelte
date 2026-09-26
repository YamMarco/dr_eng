<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import AppBar from '$lib/components/AppBar.svelte';
	import SolveWalkthrough from '$lib/solve-walkthrough/SolveWalkthrough.svelte';
	import { greenAfricaDemo } from '$lib/solve-walkthrough/demo';
</script>

<div class="fixed inset-0 z-50 flex flex-col bg-canvas">
	<AppBar title="ככה פותרים: Give TWO" back="/" />
	<SolveWalkthrough walkthrough={greenAfricaDemo} onDone={() => goto(resolve('/'))} />
</div>
