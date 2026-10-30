<script lang="ts">
	// An open exam answer's model answer and explanation (practice mode and the report).
	import Md from '$lib/components/Md.svelte';
	import { i18n } from '$lib/i18n/index.svelte';

	let { modelAnswer, explanation }: { modelAnswer?: string; explanation?: string } = $props();
</script>

{#if modelAnswer}
	<div class="rounded-2xl bg-brand-soft/60 p-3 text-sm leading-relaxed">
		<p class="mb-1 text-xs font-bold text-brand-dark">{i18n.dict.quiz.modelAnswerLabel}</p>
		<div dir="ltr"><Md block text={modelAnswer} /></div>
	</div>
{/if}
{#if explanation}
	<div class="rounded-2xl bg-accent-soft p-3 text-sm leading-relaxed">
		<Md block text={explanation} />
	</div>
{/if}
