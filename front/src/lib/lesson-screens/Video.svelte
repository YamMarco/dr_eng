<script lang="ts">
	// A clip to watch before answering (COBE Part C). Without `src` it marks the
	// clip's place, so lessons can be authored before the clips exist.
	import { fly } from 'svelte/transition';
	import { Clapperboard } from '@lucide/svelte';
	import type { VideoScreen } from './types';
	import Md from '$lib/components/Md.svelte';
	import ExerciseKindBadge from './ExerciseKindBadge.svelte';
	import { i18n } from '$lib/i18n/index.svelte';

	let {
		screen,
		onAdvance,
		// eslint-disable-next-line no-useless-assignment
		disabled = $bindable(false),
		// eslint-disable-next-line no-useless-assignment
		label = $bindable('')
	}: {
		screen: VideoScreen;
		onAdvance: () => void;
		disabled?: boolean;
		label?: string;
	} = $props();

	export function primaryAction() {
		onAdvance();
	}
</script>

<ExerciseKindBadge label={i18n.dict.exerciseKind.video} />

<div in:fly={{ y: 10, duration: 250 }}>
	{#if screen.src}
		<!-- svelte-ignore a11y_media_has_caption -->
		<video controls playsinline src={screen.src} class="aspect-video w-full rounded-2xl bg-ink"
		></video>
	{:else}
		<div
			class="flex aspect-video w-full flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-line bg-surface p-4 text-center"
		>
			<Clapperboard size={36} class="text-ink/40" aria-hidden="true" />
			<p class="font-bold text-ink/70">{i18n.dict.video.placeholderTitle}</p>
			<p class="max-w-xs text-sm text-muted">{i18n.dict.video.placeholderNote}</p>
		</div>
	{/if}

	{#if screen.caption}
		<div class="mt-3 leading-relaxed text-ink/80"><Md block text={screen.caption} /></div>
	{/if}
</div>
