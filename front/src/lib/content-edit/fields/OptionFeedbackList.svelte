<script lang="ts">
	// Side-panel list of a question's options; expanding one opens its
	// custom-feedback input (shown to the student only when it is not empty).
	import MarkdownInput from '../MarkdownInput.svelte';
	import { optFeedback, optText, type Option } from '$lib/lesson-screens/option';

	let {
		options,
		correct,
		onChange
	}: {
		options: Option[];
		correct: number[];
		onChange: (index: number, feedback: string) => void;
	} = $props();

	let openIndex = $state<number | null>(null);
</script>

<ul class="space-y-1">
	{#each options as opt, i (i)}
		{@const feedback = optFeedback(opt)}
		<li class="rounded-xl border {correct.includes(i) ? 'border-brand' : 'border-line'}">
			<button
				type="button"
				class="flex w-full items-center gap-2 p-1.5 text-start text-xs"
				aria-expanded={openIndex === i}
				onclick={() => (openIndex = openIndex === i ? null : i)}
			>
				<span class="inline-block text-[9px] transition {openIndex === i ? '' : 'rotate-90'}"
					>▼</span
				>
				<span class="min-w-0 flex-1 truncate" dir="auto">{optText(opt) || '(ריקה)'}</span>
				{#if feedback.trim()}<span class="h-2 w-2 shrink-0 rounded-full bg-brand"></span>{/if}
			</button>
			{#if openIndex === i}
				<div class="p-1.5 pt-0">
					<MarkdownInput bare minRows={2} value={feedback} onInput={(v) => onChange(i, v)} />
				</div>
			{/if}
		</li>
	{/each}
</ul>
