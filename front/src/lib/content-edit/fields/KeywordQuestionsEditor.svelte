<script lang="ts">
	// The questions list inside passage-quiz: typed-answer, marked correct
	// when every keyword shows up in what the student typed.
	import StringListEditor from './StringListEditor.svelte';

	type Question = { prompt: string; keywords: string[]; answerHint: string; points?: number };

	let { questions = $bindable([]) }: { questions: Question[] } = $props();

	function add() {
		questions.push({ prompt: '', keywords: [''], answerHint: '' });
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
		<p class="mb-1 text-xs font-bold text-muted">
			מילות מפתח — כולן חייבות להופיע בתשובה כדי שתיחשב נכונה
		</p>
		<StringListEditor bind:items={questions[qi].keywords} addLabel="+ הוסף מילת מפתח" dir="ltr" />
		<input
			bind:value={questions[qi].answerHint}
			dir="auto"
			placeholder="התשובה המלאה (מוצג לתלמיד אם טעה)"
			class="mt-2 w-full rounded-lg border-2 border-line bg-canvas p-2 text-sm"
		/>
		<label class="mt-2 flex items-center gap-2 text-xs text-muted">
			ניקוד (אופציונלי)
			<input
				type="number"
				min="0"
				value={questions[qi].points ?? ''}
				oninput={(e) => {
					const v = e.currentTarget.value;
					questions[qi].points = v ? Number(v) : undefined;
				}}
				class="w-16 rounded-lg border-2 border-line bg-canvas p-1 text-sm"
			/>
		</label>
	</div>
{/each}
<button type="button" class="text-xs font-semibold text-brand" onclick={add}>+ הוסף שאלה</button>
