<script lang="ts">
	import { Check, Play, Target, Trophy } from '@lucide/svelte';
	import { i18n } from '$lib/i18n/index.svelte';

	// A still of the app's home screen (continue bar + module rows), drawn for the site.
	// Not the live dashboard components: those read the student's stores.
	let t = $derived(i18n.dict.site.home.mock);
	const tiers = [Trophy, Check, Target];
</script>

<div
	role="img"
	aria-label={t.label}
	class="w-[17rem] rounded-[2.6rem] bg-overlay p-2.5 shadow-2xl ring-1 shadow-black/30 ring-white/10 sm:w-[19rem]"
>
	<div class="flex flex-col gap-3 overflow-hidden rounded-[2.1rem] bg-canvas px-3.5 pt-3 pb-5">
		<div class="mx-auto h-5 w-20 rounded-full bg-overlay" aria-hidden="true"></div>
		<div class="flex items-baseline justify-between px-1">
			<span class="text-lg font-extrabold">{t.greeting}</span>
			<span class="flex items-center gap-1 text-[0.7rem] font-semibold text-muted">
				{#each [0, 1, 2, 3] as d (d)}
					<span class="h-1.5 w-1.5 rounded-full {d < 3 ? 'bg-brand' : 'bg-line'}"></span>
				{/each}
			</span>
		</div>
		<div class="flex items-center gap-2.5 rounded-[22px] bg-overlay py-1.5 ps-1.5 pe-3 text-white">
			<span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand">
				<Play size={16} class="fill-current" aria-hidden="true" />
			</span>
			<span class="flex min-w-0 flex-col leading-tight">
				<span dir="ltr" class="truncate text-start text-sm font-bold">{t.continueTitle}</span>
				<span class="truncate text-[0.7rem] text-white/70">{t.continueSub}</span>
			</span>
		</div>
		{#each t.modules as mod, i (mod.name)}
			{@const Tier = tiers[i]}
			<div class="flex flex-col gap-2 rounded-2xl bg-surface p-3 shadow-sm ring-1 ring-line/70">
				<div class="flex items-center justify-between">
					<span class="text-sm font-bold">{mod.name}</span>
					<span
						class="flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-bold {mod.score
							? i === 0
								? 'bg-accent-soft text-ink'
								: 'bg-brand-soft text-brand-dark'
							: 'border border-dashed border-line text-muted'}"
					>
						{#if mod.score}
							<Tier size={12} aria-hidden="true" />
							<span class="tabular" dir="ltr">{mod.score}</span>
						{:else}
							{t.untested}
						{/if}
					</span>
				</div>
				<span class="h-1.5 overflow-hidden rounded-full bg-line">
					<span
						class="mock-bar block h-full rounded-full bg-brand"
						style="width: {mod.bar}%; animation-delay: {500 + i * 120}ms"
					></span>
				</span>
				<span class="truncate text-[0.7rem] text-muted">{mod.hook}</span>
			</div>
		{/each}
	</div>
</div>
