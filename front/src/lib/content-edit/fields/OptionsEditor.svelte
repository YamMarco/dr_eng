<script lang="ts">
	// Multiple-choice options + which one is correct — the shared shape behind
	// mcq, and each question inside timed-passage / passage-mcq.
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
		<input
			bind:value={options[oi]}
			dir="auto"
			class="w-full rounded-lg border-2 border-line bg-canvas p-2 text-sm"
		/>
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
