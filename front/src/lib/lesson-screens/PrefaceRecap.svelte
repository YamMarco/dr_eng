<script lang="ts">
	// Read-only, one-screen-at-a-time replay of a lesson's teaching preface,
	// shown inside a Sheet. The parent remounts it per open (via {#if}), so
	// paging always starts from the first screen.
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { i18n } from '$lib/i18n/index.svelte';
	import Button from '$lib/components/Button.svelte';
	import { screenComponents } from './registry';
	import type { LessonScreen } from './types';

	let { screens, onclose }: { screens: LessonScreen[]; onclose: () => void } = $props();

	let index = $state(0);
	let direction = $state(1);
	let isLast = $derived(index === screens.length - 1);
	let Current = $derived(screenComponents[screens[index].type]);

	function go(delta: number) {
		direction = delta;
		index += delta;
	}
</script>

<div class="max-h-[45dvh] overflow-y-auto">
	{#key index}
		<div in:fly={{ x: direction * 16, duration: 150, easing: cubicOut }}>
			<Current screen={screens[index]} onAdvance={() => {}} />
		</div>
	{/key}
</div>

{#if screens.length > 1}
	<div class="flex justify-center gap-1.5" aria-hidden="true">
		{#each screens as _, i (i)}
			<span
				class="h-1.5 rounded-full transition-all {i === index ? 'w-5 bg-brand' : 'w-1.5 bg-line'}"
			></span>
		{/each}
	</div>
{/if}

<div class="flex gap-3">
	{#if index > 0}
		<Button variant="secondary" onclick={() => go(-1)}>{i18n.dict.lesson.prefacePrev}</Button>
	{/if}
	{#if isLast}
		<Button onclick={onclose}>{i18n.dict.lesson.prefaceBack}</Button>
	{:else}
		<Button onclick={() => go(1)}>{i18n.dict.lesson.prefaceNext}</Button>
	{/if}
</div>
