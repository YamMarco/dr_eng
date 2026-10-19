<script lang="ts">
	import { Check, RotateCcw, Timer, Trophy } from '@lucide/svelte';
	import { i18n } from '$lib/i18n/index.svelte';

	// The small product still on each "how it works" card. Animations play once the
	// card scrolls in (paused under [data-reveal='hidden'] in site.css).
	let { step }: { step: number } = $props();
	let t = $derived(i18n.dict.site.home.vignette);
	let mods = $derived(i18n.dict.site.home.mock.modules);
</script>

<div class="flex h-44 flex-col justify-center gap-2 rounded-2xl bg-canvas p-4" aria-hidden="true">
	{#if step === 0}
		<p dir="ltr" class="text-start text-sm font-bold">{t.question}</p>
		{#each t.options as option, i (option)}
			<span
				dir="ltr"
				class="flex items-center justify-between rounded-xl px-3 py-1.5 text-sm ring-1 {i === 0
					? 'vig-pick bg-brand-soft font-semibold text-brand-dark ring-brand'
					: 'bg-surface ring-line'}"
			>
				{option}
				{#if i === 0}<Check size={14} class="vig-pop" />{/if}
			</span>
		{/each}
	{:else if step === 1}
		<div class="vig-flip relative mx-auto w-full max-w-56">
			<div
				class="flex flex-col items-center gap-1 rounded-2xl bg-surface px-4 py-5 shadow-md ring-1 ring-line"
			>
				<span dir="ltr" class="text-lg font-extrabold">{t.cardWord}</span>
				<span class="text-sm text-muted">{t.cardMeaning}</span>
			</div>
		</div>
		<span class="mx-auto flex items-center gap-1 text-xs font-semibold text-brand-dark">
			<RotateCcw size={12} />
			{t.cardDue}
		</span>
	{:else if step === 2}
		<div class="flex items-center justify-between text-xs font-semibold text-muted">
			<span>{t.timerLabel}</span>
			<span>{t.timerQuestion}</span>
		</div>
		<div class="flex items-center gap-3">
			<span
				class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-overlay text-white"
			>
				<Timer size={22} class="vig-tick" />
			</span>
			<span dir="ltr" class="text-4xl font-black tracking-tight tabular">41:07</span>
		</div>
		<span class="flex gap-1" dir="ltr">
			{#each Array.from({ length: 9 }, (_, i) => i) as q (q)}
				<span
					class="vig-dot h-2 flex-1 rounded-full {q < 5 ? 'bg-brand' : 'bg-line'}"
					style="animation-delay: {q * 70}ms"
				></span>
			{/each}
		</span>
	{:else}
		{#each mods.slice(0, 2) as mod, i (mod.name)}
			<div class="flex items-center gap-3 rounded-xl bg-surface px-3 py-2 ring-1 ring-line">
				<span class="w-14 shrink-0 text-sm font-bold">{mod.name}</span>
				<span class="h-1.5 flex-1 overflow-hidden rounded-full bg-line">
					<span
						class="mock-bar block h-full rounded-full bg-brand"
						style="width: {mod.bar}%; animation-delay: {200 + i * 150}ms"
					></span>
				</span>
				<span class="flex items-center gap-1 text-sm font-bold">
					{#if i === 0}<Trophy size={13} class="text-accent" />{/if}
					<span dir="ltr" class="tabular">{mod.score}</span>
				</span>
			</div>
		{/each}
		<span class="text-center text-xs font-semibold text-muted">{t.standLabel}</span>
	{/if}
</div>
