<script lang="ts">
	import { Image, Volume2 } from '@lucide/svelte';
	import type { WordCardScreen } from './types';
	import { i18n } from '$lib/i18n/index.svelte';
	import { mdBlock, mdInline } from './miniMarkdown';

	// Not scored — pure teaching, like preface/summary — so disabled/label
	// are write-only here (never overridden): the runner reads them through
	// the bindable props to size and gate its single button.
	let {
		screen,
		onAdvance,
		// eslint-disable-next-line no-useless-assignment
		disabled = $bindable(false),
		// eslint-disable-next-line no-useless-assignment
		label = $bindable('')
	}: {
		screen: WordCardScreen;
		onAdvance: () => void;
		disabled?: boolean;
		label?: string;
	} = $props();

	export function primaryAction() {
		onAdvance();
	}
</script>

<div class="flex flex-col items-center text-center">
	<div class="flex h-40 w-full items-center justify-center rounded-3xl bg-accent-soft text-ink/40">
		<!-- Placeholder — a real image per word comes later. -->
		<Image size={48} aria-hidden="true" />
	</div>

	<div class="mt-5 flex items-center gap-2" dir="ltr">
		<p class="text-3xl font-extrabold">{screen.word}</p>
		<button
			type="button"
			title={i18n.dict.wordCard.listenLabel}
			aria-label={i18n.dict.wordCard.listenLabel}
			class="flex h-9 w-9 items-center justify-center rounded-full bg-accent-soft text-ink/60 transition active:scale-95"
		>
			<!-- Placeholder — no audio wired up yet. -->
			<Volume2 size={18} aria-hidden="true" />
		</button>
	</div>

	{#if screen.translationHe}
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		<p class="mt-2 text-lg text-muted">{@html mdInline(screen.translationHe)}</p>
	{/if}

	{#if screen.exampleEn}
		<div class="mt-5 w-full rounded-2xl bg-accent-soft p-3 text-start">
			<p class="mb-1 text-xs font-bold text-ink/60">{i18n.dict.wordCard.exampleLabel}</p>
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			<p class="leading-relaxed" dir="ltr">{@html mdInline(screen.exampleEn)}</p>
			{#if screen.exampleHe}
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				<p class="mt-1 text-sm text-muted">{@html mdInline(screen.exampleHe)}</p>
			{/if}
		</div>
	{/if}

	{#if screen.hookHe}
		<div class="mt-3 w-full rounded-2xl border-2 border-dashed border-brand/40 p-3 text-start">
			<p class="mb-1 text-xs font-bold text-brand-dark">💡 {i18n.dict.wordCard.hookLabel}</p>
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			<div class="leading-relaxed">{@html mdBlock(screen.hookHe)}</div>
		</div>
	{/if}
</div>
