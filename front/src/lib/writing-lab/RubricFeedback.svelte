<script lang="ts">
	import type { WritingAnalysis } from './analysis';

	let { analysis, compact = false }: { analysis: WritingAnalysis; compact?: boolean } = $props();
</script>

<section class="mt-5 space-y-3" aria-live="polite">
	<div class="rounded-2xl bg-accent-soft p-4">
		<div class="flex items-center justify-between gap-3">
			<div>
				<p class="text-xs font-bold text-ink/60">אומדן לתרגול בלבד</p>
				<p class="mt-1 text-xl font-extrabold" dir="ltr">{analysis.total}/30</p>
			</div>
			<p class="text-sm font-semibold text-ink/75">{analysis.wordCount} מילים</p>
		</div>
	</div>

	<div class={compact ? 'grid grid-cols-2 gap-2' : 'space-y-2'}>
		{#each analysis.criteria as criterion (criterion.key)}
			<article class="rounded-2xl border border-line bg-surface p-3">
				<div class="flex items-center justify-between gap-2">
					<h3 class="text-sm font-bold">{criterion.label}</h3>
					<span
						class="rounded-full bg-brand-soft px-2 py-0.5 text-sm font-extrabold text-brand-dark"
						dir="ltr"
					>
						{criterion.score}/{criterion.max}
					</span>
				</div>
				{#if !compact}
					<p class="mt-2 text-sm leading-relaxed text-muted">{criterion.feedback}</p>
				{/if}
			</article>
		{/each}
	</div>

	<div class="rounded-2xl border-2 border-brand bg-brand-soft/50 p-4">
		<p class="text-xs font-bold text-brand-dark">התיקון הבא שלכם</p>
		<p class="mt-1 font-semibold">{analysis.priority}</p>
	</div>
</section>
