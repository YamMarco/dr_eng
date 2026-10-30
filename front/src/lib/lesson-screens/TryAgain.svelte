<script lang="ts">
	// A miss with tries left: the picked option's feedback, and how many tries remain.
	import { fly } from 'svelte/transition';
	import Md from '$lib/components/Md.svelte';
	import { i18n } from '$lib/i18n/index.svelte';

	let { feedback, left }: { feedback: string; left: number } = $props();
</script>

<div
	in:fly={{ y: 8, duration: 240 }}
	class="mt-4 rounded-2xl border-s-4 border-miss bg-miss-soft/60 p-3"
	role="status"
>
	<p class="text-sm font-bold text-miss">{i18n.dict.exerciseKind.tryAgain(left)}</p>
	{#if feedback}
		<div class="mt-1 leading-relaxed"><Md block text={feedback} /></div>
	{/if}
</div>
