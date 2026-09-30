<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import RubricFeedback from './RubricFeedback.svelte';
	import { analyzeWriting, type WritingAnalysis } from './analysis';

	type Step = 'plan' | 'draft' | 'feedback';

	let step = $state<Step>('plan');
	let stance = $state<'yes' | 'no' | null>(null);
	let reason = $state('');
	let example = $state('');
	let text = $state('');
	let firstDraft = $state('');
	let result = $state<WritingAnalysis | null>(null);
	let wordCount = $derived(text.trim() ? text.trim().split(/\s+/).length : 0);

	function startDraft() {
		step = 'draft';
	}

	function checkDraft() {
		if (!firstDraft) firstDraft = text;
		result = analyzeWriting(text);
		step = 'feedback';
	}

	function revise() {
		step = 'draft';
	}
</script>

<div class="rounded-3xl bg-surface p-5 shadow-md ring-1 shadow-overlay/5 ring-line/70">
	<div class="mb-4 flex items-center justify-between gap-3">
		<div>
			<p class="text-xs font-bold text-muted">אב־טיפוס GPT</p>
			<h2 class="text-xl font-extrabold">מאמן כתיבה בשלבים</h2>
		</div>
		<span class="rounded-full bg-brand-soft px-3 py-1 text-xs font-bold text-brand-dark">
			{step === 'plan' ? '1 · תכנון' : step === 'draft' ? '2 · כתיבה' : '3 · תיקון'}
		</span>
	</div>

	<p class="font-semibold" dir="ltr">
		Should students get homework every day? Give reasons to explain your opinion.
	</p>

	{#if step === 'plan'}
		<div class="mt-5 space-y-4">
			<fieldset>
				<legend class="mb-2 text-sm font-bold">מה העמדה שלכם?</legend>
				<div class="grid grid-cols-2 gap-2">
					<button
						type="button"
						onclick={() => (stance = 'yes')}
						class="rounded-2xl border-2 px-4 py-3 font-bold transition {stance === 'yes'
							? 'border-brand bg-brand-soft text-brand-dark'
							: 'border-line'}">כן</button
					>
					<button
						type="button"
						onclick={() => (stance = 'no')}
						class="rounded-2xl border-2 px-4 py-3 font-bold transition {stance === 'no'
							? 'border-brand bg-brand-soft text-brand-dark'
							: 'border-line'}">לא</button
					>
				</div>
			</fieldset>
			<label class="block text-sm font-bold">
				הסיבה החזקה ביותר
				<input
					dir="auto"
					bind:value={reason}
					placeholder="כתבו את הסיבה באנגלית..."
					class="mt-2 w-full rounded-2xl border-2 border-line bg-canvas px-3 py-2 font-normal focus:border-brand"
				/>
			</label>
			<label class="block text-sm font-bold">
				דוגמה שמוכיחה את הסיבה
				<input
					dir="auto"
					bind:value={example}
					placeholder="כתבו את הדוגמה באנגלית..."
					class="mt-2 w-full rounded-2xl border-2 border-line bg-canvas px-3 py-2 font-normal focus:border-brand"
				/>
			</label>
			<Button onclick={startDraft} disabled={!stance || !reason.trim() || !example.trim()}>
				עברו לכתיבה
			</Button>
		</div>
	{:else if step === 'draft'}
		<div class="mt-4 rounded-2xl bg-accent-soft p-3 text-sm">
			<p><strong>עמדה:</strong> {stance === 'yes' ? 'כן' : 'לא'}</p>
			<p class="mt-1"><strong>סיבה:</strong> <span dir="auto">{reason}</span></p>
			<p class="mt-1"><strong>דוגמה:</strong> <span dir="auto">{example}</span></p>
		</div>
		<textarea
			dir="auto"
			rows="9"
			bind:value={text}
			placeholder="כתבו כאן באנגלית..."
			class="mt-4 w-full rounded-2xl border-2 border-line bg-canvas p-3 leading-relaxed focus:border-brand"
		></textarea>
		<div class="mb-4 flex items-center justify-between text-xs font-semibold text-muted">
			<span>{wordCount} מילים</span>
			<span class={wordCount >= 70 && wordCount <= 90 ? 'text-brand-dark' : ''}>יעד: 70–90</span>
		</div>
		<Button onclick={checkDraft} disabled={wordCount < 10}>
			{firstDraft ? 'בדקו את התיקון' : 'קבלו משוב'}
		</Button>
	{:else if result}
		<RubricFeedback analysis={result} compact />
		<div class="mt-4">
			<Button onclick={revise}>תקנו את הטיוטה</Button>
		</div>
		{#if firstDraft && firstDraft !== text}
			<p class="mt-3 text-center text-xs font-semibold text-brand-dark">
				הטיוטה כבר השתנתה מאז הבדיקה הראשונה.
			</p>
		{/if}
	{/if}
</div>
