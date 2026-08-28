<script lang="ts">
	import type { LessonScore } from './score.svelte';

	let { score }: { score: LessonScore } = $props();
</script>

{#if score.total > 0}
	<span
		class="ms-2 mb-3 inline-flex items-center rounded-full bg-brand-soft px-2.5 py-1 text-xs font-bold text-brand-dark tabular"
		dir="ltr"
	>
		{score.correct}/{score.total}
	</span>
{/if}
