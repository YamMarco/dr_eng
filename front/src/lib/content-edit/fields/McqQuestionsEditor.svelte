<script lang="ts">
	// The questions list inside timed-passage / passage-mcq: each one an
	// mcq-shaped {prompt, options, correctIndex}.
	import OptionsEditor from './OptionsEditor.svelte';

	type Question = { prompt: string; options: string[]; correctIndex: number };

	let { questions = $bindable([]) }: { questions: Question[] } = $props();

	function add() {
		questions.push({ prompt: '', options: ['', ''], correctIndex: 0 });
	}
</script>

{#each questions as _q, qi (qi)}
	<div class="mb-3 rounded-xl border border-line/70 p-3">
		<div class="mb-2 flex items-center justify-between">
			<span class="text-xs font-bold text-muted">שאלה {qi + 1}</span>
			<button
				type="button"
				class="text-xs font-semibold text-danger"
				onclick={() => questions.splice(qi, 1)}
			>
				מחק שאלה
			</button>
		</div>
		<textarea
			bind:value={questions[qi].prompt}
			rows="2"
			dir="auto"
			placeholder="השאלה"
			class="mb-2 w-full rounded-lg border-2 border-line bg-canvas p-2 text-sm"
		></textarea>
		<OptionsEditor
			bind:options={questions[qi].options}
			bind:correctIndex={questions[qi].correctIndex}
			name={`mcq-q-${qi}`}
		/>
	</div>
{/each}
<button type="button" class="text-xs font-semibold text-brand" onclick={add}>+ הוסף שאלה</button>
