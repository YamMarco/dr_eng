<script lang="ts">
	// The author's message for one picked option, shown after checking.
	import Md from '$lib/components/Md.svelte';

	let { text, correct }: { text: string; correct: boolean } = $props();
</script>

<div class="mt-4 rounded-2xl p-3 {correct ? 'bg-brand-soft' : 'bg-miss-soft'}">
	<div class="leading-relaxed"><Md block {text} /></div>
</div>
