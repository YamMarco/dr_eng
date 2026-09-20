<script lang="ts">
	// Two listen buttons: a big one at normal speed, a small one slower.
	// Renders nothing where the browser has no speech (e.g. in-app browsers).
	import { onMount } from 'svelte';
	import { Turtle, Volume2 } from '@lucide/svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import { RATE, speak, speechSupported } from '$lib/speech';

	let {
		text,
		size = 'md',
		disabled = false
	}: { text: string; size?: 'md' | 'lg'; disabled?: boolean } = $props();

	let supported = $state(false);
	onMount(() => (supported = speechSupported()));

	const base =
		'flex items-center justify-center rounded-full bg-accent-soft text-ink/60 transition active:scale-95 disabled:opacity-50';
</script>

{#if supported}
	<div class="flex items-center gap-2">
		<button
			type="button"
			{disabled}
			title={i18n.dict.wordCard.listenLabel}
			aria-label={i18n.dict.wordCard.listenLabel}
			onclick={() => speak(text, RATE.normal)}
			class="{base} {size === 'lg' ? 'h-14 w-14' : 'h-10 w-10'}"
		>
			<Volume2 size={size === 'lg' ? 24 : 20} aria-hidden="true" />
		</button>
		<button
			type="button"
			{disabled}
			title={i18n.dict.wordCard.listenSlowLabel}
			aria-label={i18n.dict.wordCard.listenSlowLabel}
			onclick={() => speak(text, RATE.slow)}
			class="{base} h-8 w-8"
		>
			<Turtle size={16} aria-hidden="true" />
		</button>
	</div>
{/if}
