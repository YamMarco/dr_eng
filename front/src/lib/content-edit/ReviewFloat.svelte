<script lang="ts">
	// QA checklist floating beside a node on the GraphEditor map: preface done,
	// a master "all questions" box that ticks every round at once, one box per
	// round, and a comment field. State lives in reviewNotes.svelte.ts, synced
	// across devices via /api/content-edit/review.
	import { reviewNotes } from './reviewNotes.svelte';

	let { nodeId, roundCount }: { nodeId: string; roundCount: number } = $props();

	let note = $derived(reviewNotes.notes[nodeId] ?? { preface: false, rounds: [], comment: '' });
	let allDone = $derived(reviewNotes.allRoundsDone(nodeId, roundCount));

	// Keeps clicks/drags inside the float from reaching the canvas (node
	// drag, marquee select).
	function stop(e: Event) {
		e.stopPropagation();
	}
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	class="w-28 space-y-0.5 rounded-lg border border-line/70 bg-white p-1.5 text-[10px] shadow-md"
	onpointerdown={stop}
	ondblclick={stop}
>
	<label class="flex cursor-pointer items-center gap-1">
		<input
			type="checkbox"
			checked={note.preface}
			onchange={() => reviewNotes.togglePreface(nodeId)}
		/>
		תקציר
	</label>
	<label class="flex cursor-pointer items-center gap-1 font-bold">
		<input
			type="checkbox"
			checked={allDone}
			onchange={() => reviewNotes.toggleAllRounds(nodeId, roundCount)}
		/>
		כל השאלות
	</label>
	{#if roundCount > 1}
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
	<input
		type="text"
		placeholder="הערה…"
		value={note.comment}
		oninput={(e) => reviewNotes.setComment(nodeId, (e.currentTarget as HTMLInputElement).value)}
		class="w-full rounded border border-line/70 bg-white px-1 py-0.5 text-[10px]"
	/>
</div>
