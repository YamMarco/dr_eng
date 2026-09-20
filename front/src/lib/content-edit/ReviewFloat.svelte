<script lang="ts">
	// QA checklist floating beside a node on the GraphEditor map: preface done,
	// a master "all questions" box that ticks every round at once, one box per
	// round, and a comment field. State lives in reviewNotes.svelte.ts, synced
	// across devices via /api/content-edit/review.
	import { reviewNotes } from './reviewNotes.svelte';

	let { nodeId, roundCount }: { nodeId: string; roundCount: number } = $props();

	let note = $derived(reviewNotes.notes[nodeId] ?? { preface: false, rounds: [], comment: '' });
	let allDone = $derived(reviewNotes.allRoundsDone(nodeId, roundCount));
	let expanded = $state(false);
	let minimized = $state(false);

	// Keeps clicks/drags inside the float from reaching the canvas (node
	// drag, marquee select).
	function stop(e: Event) {
		e.stopPropagation();
	}
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	class="w-60 space-y-1 rounded-lg border-2 border-brand/40 bg-white p-2 text-xs shadow-lg"
	onpointerdown={stop}
	ondblclick={stop}
>
	<div class="flex items-center justify-between gap-1">
		<span class="font-bold text-muted">בדיקה</span>
		<button
			type="button"
			class="px-1 text-muted"
			title={minimized ? 'הרחב' : 'מזער'}
			aria-expanded={!minimized}
			onclick={() => (minimized = !minimized)}
		>
			{minimized ? '▢' : '—'}
		</button>
	</div>
	{#if !minimized}
		<label class="flex cursor-pointer items-center gap-1">
			<input
				type="checkbox"
				checked={note.preface}
				onchange={() => reviewNotes.togglePreface(nodeId)}
			/>
			תקציר
		</label>
		<div class="flex items-center gap-1">
			<label class="flex flex-1 cursor-pointer items-center gap-1 font-bold">
				<input
					type="checkbox"
					checked={allDone}
					onchange={() => reviewNotes.toggleAllRounds(nodeId, roundCount)}
				/>
				כל השאלות
			</label>
			{#if roundCount > 1}
				<button
					type="button"
					class="px-0.5 text-muted"
					title={expanded ? 'כווץ סבבים' : 'הרחב סבבים'}
					onclick={() => (expanded = !expanded)}
				>
					{expanded ? '▾' : '▸'}
				</button>
			{/if}
		</div>
		{#if roundCount > 1 && expanded}
			<div class="ms-3 flex flex-col gap-0.5">
				{#each Array.from({ length: roundCount }) as _, i (i)}
					<label class="flex cursor-pointer items-center gap-1 text-muted">
						<input
							type="checkbox"
							checked={note.rounds[i] ?? false}
							onchange={() => reviewNotes.toggleRound(nodeId, i)}
						/>
						סבב {i + 1}
					</label>
				{/each}
			</div>
		{/if}
		<textarea
			rows="3"
			placeholder="הערה…"
			value={note.comment}
			oninput={(e) =>
				reviewNotes.setComment(nodeId, (e.currentTarget as HTMLTextAreaElement).value)}
			class="w-full resize-y rounded border border-line bg-white px-1.5 py-1 text-sm"></textarea>
	{/if}
</div>
