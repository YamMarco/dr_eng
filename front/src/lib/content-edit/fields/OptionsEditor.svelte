<script lang="ts">
	// Multiple-choice options + which one is correct — the shared shape behind
	// mcq, and each question inside passage-mcq.
	import MarkdownInput from '../MarkdownInput.svelte';
	let {
		options = $bindable([]),
		correctIndex = $bindable(0),
		name
	}: { options: string[]; correctIndex: number; name: string } = $props();
</script>

{#each options as _option, oi (oi)}
	<div class="mb-1 flex items-center gap-2">
		<input
			type="radio"
			{name}
			checked={correctIndex === oi}
			onchange={() => (correctIndex = oi)}
			aria-label="תשובה נכונה"
		/>
		<div class="w-full"><MarkdownInput bind:value={options[oi]} minRows={1} /></div>
		<button
			type="button"
			class="px-1 text-xs text-danger"
			onclick={() => {
				options.splice(oi, 1);
				if (correctIndex >= options.length) correctIndex = 0;
			}}
		>
			✕
		</button>
	</div>
{/each}
<button type="button" class="text-xs font-semibold text-brand" onclick={() => options.push('')}>
	+ הוסף אופציה
</button>
