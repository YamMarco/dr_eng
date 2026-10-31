<script lang="ts">
	// The author's message for one picked option, shown after checking.
	import Md from '$lib/components/Md.svelte';
	import AnswerMark from './AnswerMark.svelte';

	let { text, correct }: { text: string; correct: boolean } = $props();
</script>

<div
	class="mt-4 flex items-start gap-2 rounded-2xl p-3 {correct
		? 'bg-brand-soft text-brand-dark'
		: 'bg-miss-soft text-miss'}"
>
	<span class="mt-1"><AnswerMark right={correct} /></span>
	<div class="min-w-0 flex-1 leading-relaxed text-ink"><Md block {text} /></div>
</div>
