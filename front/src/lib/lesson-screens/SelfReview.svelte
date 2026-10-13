<script lang="ts">
	// After a writing task is checked: a model answer to compare with, and a
	// checklist the student ticks about their own text. Not scored - the
	// automatic checks only judge structure, so this is where "is my reason
	// specific?" gets asked. One section, collapsed until the student opens it.
	import Md from '$lib/components/Md.svelte';
	import { i18n } from '$lib/i18n/index.svelte';

	let { modelAnswer, checklist = [] }: { modelAnswer?: string; checklist?: string[] } = $props();

	let ticked = $state<boolean[]>([]);
</script>

{#if modelAnswer || checklist.length > 0}
	<details class="group mt-4 rounded-2xl border border-line bg-surface">
		<summary
			class="flex cursor-pointer list-none items-center justify-between gap-2 p-3 text-sm font-bold text-ink/80"
		>
			{i18n.dict.writingTask.reviewToggle}
			<span class="text-muted transition group-open:rotate-180">▾</span>
		</summary>
		<div class="flex flex-col gap-3 px-3 pb-3">
			{#if modelAnswer}
				<div class="rounded-xl bg-accent-soft p-3">
					<p class="mb-1 text-xs font-bold text-ink/60">{i18n.dict.selfCheck.modelAnswerLabel}</p>
					<div class="leading-relaxed" dir="ltr"><Md block text={modelAnswer} /></div>
				</div>
			{/if}
			{#if checklist.length > 0}
				<div>
					<p class="mb-2 text-xs font-bold text-muted">{i18n.dict.writingTask.checklistTitle}</p>
					<ul class="flex flex-col gap-2 text-sm">
						{#each checklist as item, i (i)}
							<li>
								<label class="flex items-start gap-2">
									<input type="checkbox" class="mt-1" bind:checked={ticked[i]} />
									<span><Md text={item} /></span>
								</label>
							</li>
						{/each}
					</ul>
					{#if checklist.every((_, i) => ticked[i])}
						<p class="mt-2 text-xs font-semibold text-brand-dark">
							{i18n.dict.writingTask.checklistDone}
						</p>
					{/if}
				</div>
			{/if}
		</div>
	</details>
{/if}
