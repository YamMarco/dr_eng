<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import AppBar from '$lib/components/AppBar.svelte';
	import Button from '$lib/components/Button.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import { staggerDelay } from '$lib/motion';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let quiz = $derived(data.quiz);
	let examBase = $derived(`/unit/${data.group.id}/module/${data.mod.id}/exam`);
</script>

<AppBar title={quiz.titleHe} back={examBase} />

<main class="mx-auto w-full max-w-lg flex-1 px-4 pt-6 pb-12">
	<div
		in:fly={{ y: 12, duration: 300, delay: staggerDelay(0), easing: cubicOut }}
		class="rounded-3xl bg-surface p-6 shadow-md ring-1 shadow-overlay/5 ring-line/70"
	>
		{#if quiz.kind === 'assorted'}
			<span
				class="inline-flex items-center rounded-full bg-accent-soft px-3 py-1 text-sm font-semibold text-ink/70"
			>
				{quiz.twistHe}
			</span>
		{:else}
			<span
				class="inline-flex items-center rounded-full bg-accent-soft px-3 py-1 text-sm font-semibold text-ink/70"
			>
				{i18n.dict.quizzes.yearPrefix}
				{quiz.year}
			</span>
		{/if}
		<p class="mt-4 leading-relaxed text-muted">{quiz.descriptionHe}</p>
	</div>

	<div
		in:fly={{ y: 12, duration: 300, delay: staggerDelay(1), easing: cubicOut }}
		class="mt-8 flex flex-col gap-3"
	>
		<Button disabled>{i18n.dict.common.comingSoon}</Button>
		<Button variant="secondary" href={examBase}>{i18n.dict.common.back}</Button>
	</div>
</main>
