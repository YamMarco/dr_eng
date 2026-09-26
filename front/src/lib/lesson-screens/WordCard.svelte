<script lang="ts">
	import type { WordCardScreen } from './types';
	import { i18n } from '$lib/i18n/index.svelte';
	import { mdBlock, mdInline } from './miniMarkdown';
	import SpeakButtons from './SpeakButtons.svelte';
	import WordImage from './WordImage.svelte';

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

<div
	class="flex min-h-0 flex-1 flex-col items-center text-center {screen.image
		? ''
		: 'justify-center'}"
>
	{#if screen.image}
		<!-- Natural 16:9 height, but shrinks (keeping 16:9) so the card fits the
		     screen without scrolling on short phones. -->
		<div class="@container-size flex aspect-video min-h-20 w-full shrink justify-center">
			<div class="w-[min(100%,calc(100cqh*16/9))]">
				<WordImage src={screen.image} alt={screen.imageAlt || screen.word} />
			</div>
		</div>
	{/if}

	<div class="flex items-center gap-2 {screen.image ? 'mt-5' : ''}" dir="ltr">
		<p class="text-3xl font-extrabold">{screen.word}</p>
		<SpeakButtons text={screen.word} />
	</div>

	{#if screen.translationHe}
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		<p class="mt-2 text-lg text-muted" dir="auto">{@html mdInline(screen.translationHe)}</p>
	{/if}

	{#if screen.exampleEn}
		<div class="mt-5 w-full rounded-2xl bg-accent-soft p-3 text-start">
			<p class="mb-1 text-xs font-bold text-ink/60">{i18n.dict.wordCard.exampleLabel}</p>
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			<p class="leading-relaxed" dir="auto">{@html mdInline(screen.exampleEn)}</p>
			{#if screen.exampleHe}
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				<p class="mt-1 text-sm text-muted" dir="auto">{@html mdInline(screen.exampleHe)}</p>
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
