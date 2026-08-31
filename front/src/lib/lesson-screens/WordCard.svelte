<script lang="ts">
	import { Image, Volume2 } from 'lucide-svelte';
	import type { WordCardScreen } from './types';
	import { i18n } from '$lib/i18n/index.svelte';

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
		<p class="mt-2 text-lg text-muted">{screen.translationHe}</p>
	{/if}
</div>
