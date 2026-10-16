<script lang="ts">
	// After a lesson take: this question's first take next to the one just
	// recorded, so the student hears and sees the progress. A first try is
	// saved as the starting point.
	import { onDestroy } from 'svelte';
	import { fly } from 'svelte/transition';
	import { TrendingUp } from '@lucide/svelte';
	import type { SavedTake } from '$lib/takeHistory';
	import { i18n } from '$lib/i18n/index.svelte';

	let {
		first,
		seconds,
		targetSeconds
	}: { first?: SavedTake; seconds: number; targetSeconds: number } = $props();

	const t = $derived(i18n.dict.takeCompare);
	// svelte-ignore state_referenced_locally
	const firstUrl = first?.blob ? URL.createObjectURL(first.blob) : undefined;
	onDestroy(() => firstUrl && URL.revokeObjectURL(firstUrl));

	const firstSeconds = $derived(Math.floor(first?.seconds ?? 0));
	const delta = $derived(seconds - firstSeconds);
	// Reached the target now, and hadn't the first time.
	const newlyReached = $derived(
		!!first && firstSeconds < targetSeconds && seconds >= targetSeconds
	);
</script>

<div
	class="mt-4 rounded-2xl border border-line bg-surface p-3 text-sm"
	in:fly={{ y: 8, duration: 250 }}
>
	{#if !first}
		<p class="text-muted">{t.firstTry}</p>
	{:else}
		<p class="mb-2 flex items-center gap-1.5 text-xs font-bold text-ink/70">
			<TrendingUp size={14} aria-hidden="true" />{t.title}
		</p>
		<div class="flex items-center justify-between gap-3">
			<span class="text-muted">{t.then(firstSeconds)}</span>
			<span class="font-bold">{t.now(seconds)}</span>
			{#if delta !== 0}
				<span
					class="rounded-full px-2 py-0.5 text-xs font-bold tabular {delta > 0
						? 'bg-brand-soft text-brand-dark motion-safe:animate-pop-correct'
						: 'bg-line/60 text-ink/70'}"
					dir="ltr">{delta > 0 ? '+' : ''}{delta}s</span
				>
			{/if}
		</div>
		{#if newlyReached}
			<p class="mt-2 font-semibold text-brand-dark">{t.reachedNow}</p>
		{/if}
		{#if firstUrl}
			<p class="mt-2 mb-1 text-xs text-muted">{t.listenFirst}</p>
			<audio controls src={firstUrl} class="w-full"></audio>
		{/if}
	{/if}
</div>
