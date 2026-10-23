<script lang="ts">
	// Listening first: English the student hears, not reads, until `revealed`
	// (after the check / the take). Plays once on arrival; the buttons replay.
	// Where the browser can't speak, the text simply shows.
	import { onMount, untrack } from 'svelte';
	import { fade } from 'svelte/transition';
	import { Ear } from '@lucide/svelte';
	import Md from '$lib/components/Md.svelte';
	import SpeakButtons from './SpeakButtons.svelte';
	import { RATE, speak, speechSupported } from '$lib/speech';

	let {
		text,
		hint,
		revealed = false,
		disabled = false
	}: { text: string; hint: string; revealed?: boolean; disabled?: boolean } = $props();

	let canSpeak = $state(false);
	onMount(() => {
		canSpeak = speechSupported();
		if (canSpeak)
			speak(
				untrack(() => text),
				RATE.normal
			);
	});
</script>

<div class="flex items-start gap-3 rounded-2xl bg-accent-soft p-3">
	<div class="min-w-0 flex-1">
		{#if revealed || !canSpeak}
			<div in:fade={{ duration: 200 }} class="text-lg leading-relaxed font-semibold" dir="ltr">
				<Md block {text} />
			</div>
		{:else}
			<p class="flex items-center gap-2 py-2 text-sm font-semibold text-muted">
				<Ear size={18} aria-hidden="true" />{hint}
			</p>
		{/if}
	</div>
	<SpeakButtons {text} size="lg" {disabled} />
</div>
