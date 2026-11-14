<script lang="ts">
	import { Check, Lightbulb, Target, Trophy } from '@lucide/svelte';
	import { i18n } from '$lib/i18n/index.svelte';

	// A still of the teacher's class view, drawn for /schools (sample data, marked as such).
	// Score tiers match the student app: trophy 85+, check 60+, target below, never red.
	let t = $derived(i18n.dict.site.schools.mock);
	const tier = (score: number) => (score >= 85 ? Trophy : score >= 60 ? Check : Target);
</script>

<div
	role="img"
	aria-label={t.label}
	class="w-full max-w-md overflow-hidden rounded-3xl bg-surface shadow-2xl ring-1 shadow-black/15 ring-line"
>
	<div class="flex items-center gap-1.5 border-b border-line/70 px-4 py-2.5" aria-hidden="true">
		{#each [0, 1, 2] as d (d)}
			<span class="h-2.5 w-2.5 rounded-full bg-line"></span>
		{/each}
		<span class="ms-auto rounded-full bg-accent-soft px-2 py-0.5 text-[0.7rem] font-bold text-ink">
			{t.sample}
		</span>
	</div>
	<div class="flex flex-col gap-3 p-4">
		<div class="flex items-baseline justify-between gap-2">
			<span class="text-lg font-extrabold">{t.className}</span>
			<span class="text-xs font-semibold text-muted">{t.classMeta}</span>
		</div>
		<div class="grid grid-cols-3 gap-2">
			{#each t.stats as stat (stat.label)}
				<div class="flex flex-col rounded-2xl bg-canvas px-2.5 py-2">
					<span dir="ltr" class="text-start text-lg leading-tight font-black tabular">
						{stat.value}
					</span>
					<span class="text-[0.7rem] leading-tight font-semibold text-muted">{stat.label}</span>
				</div>
			{/each}
		</div>
		<div
			class="flex items-center gap-2 rounded-2xl bg-brand-soft px-3 py-2 text-xs font-bold text-brand-dark"
		>
			<Lightbulb size={14} class="shrink-0" aria-hidden="true" />
			{t.focus}
		</div>
		<ul class="flex flex-col">
			{#each t.students as student, i (student.name)}
				{@const Tier = tier(student.score)}
				<li class="flex items-center gap-3 border-t border-line/60 py-2">
					<span class="w-16 shrink-0 truncate text-sm font-bold">{student.name}</span>
					<span class="flex min-w-0 flex-1 flex-col gap-1">
						<span class="h-1.5 overflow-hidden rounded-full bg-line">
							<span
								class="mock-bar block h-full rounded-full bg-brand"
								style="width: {student.bar}%; animation-delay: {500 + i * 120}ms"
							></span>
						</span>
						<span class="truncate text-[0.7rem] text-muted">{student.note}</span>
					</span>
					<span
						class="flex shrink-0 items-center gap-1 rounded-full px-2 py-0.5 text-xs font-bold {student.score
							? student.score >= 85
								? 'bg-accent-soft text-ink'
								: 'bg-brand-soft text-brand-dark'
							: 'border border-dashed border-line text-muted'}"
					>
						{#if student.score}
							<Tier size={12} aria-hidden="true" />
							<span class="tabular" dir="ltr">{student.score}</span>
						{:else}
							{t.untested}
						{/if}
					</span>
				</li>
			{/each}
		</ul>
	</div>
</div>
