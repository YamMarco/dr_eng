<script lang="ts">
	import { untrack } from 'svelte';
	import type { LessonScore } from './score.svelte';

	let { score }: { score: LessonScore } = $props();

	// Bumps once whenever the count actually changes (not on first mount).
	let bump = $state(false);
	let prevCorrect = untrack(() => score.correct);
	$effect(() => {
		if (score.correct === prevCorrect) return;
		prevCorrect = score.correct;
		bump = true;
		const timer = setTimeout(() => (bump = false), 350);
		return () => clearTimeout(timer);
	});
</script>

{#if score.total > 0}
	<span
		class="ms-2 mb-3 inline-flex items-center rounded-full bg-brand-soft px-2.5 py-1 text-xs font-bold text-brand-dark tabular {bump
			? 'motion-safe:animate-pop-correct'
			: ''}"
		dir="ltr"
	>
		{score.correct}/{score.total}
	</span>
{/if}
