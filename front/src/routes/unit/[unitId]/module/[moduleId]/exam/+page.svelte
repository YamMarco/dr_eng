<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import AppBar from '$lib/components/AppBar.svelte';
	import { getQuizzesForModule, type Quiz } from '$lib/quizzes';
	import { i18n } from '$lib/i18n/index.svelte';
	import { staggerDelay } from '$lib/motion';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let group = $derived(data.group);
	let mod = $derived(data.mod);
	let base = $derived(`/unit/${group.id}/module/${mod.id}`);
	let quizzes = $derived(getQuizzesForModule(mod.id));

	function subtitle(quiz: Quiz) {
		return quiz.kind === 'assorted' ? quiz.twistHe : `${i18n.dict.quizzes.yearPrefix} ${quiz.year}`;
	}
</script>

{#snippet quizList(list: Quiz[], startAt: number)}
	<ul class="flex flex-col gap-4">
		{#each list as quiz, i (quiz.id)}
			<li in:fly={{ y: 12, duration: 300, delay: staggerDelay(startAt + i), easing: cubicOut }}>
				<a
					href="{base}/exam/{quiz.id}"
					class="group flex items-center gap-4 rounded-3xl bg-surface p-5 shadow-md ring-1 shadow-overlay/5 ring-line/70 transition duration-150 hover:shadow-lg active:scale-[0.99]"
				>
					<span class="min-w-0 flex-1">
						<span class="block text-lg font-bold">{quiz.titleHe}</span>
						<span class="mt-1 block text-sm leading-relaxed text-muted">{subtitle(quiz)}</span>
					</span>

					<svg
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="h-5 w-5 shrink-0 text-muted transition group-hover:text-brand rtl:rotate-180"
						aria-hidden="true"
					>
						<path d="m9 18 6-6-6-6" />
					</svg>
				</a>
			</li>
		{/each}
	</ul>
{/snippet}

<AppBar title="{i18n.dict.module.examTitle} — {mod.letter}" back={base} />

<main class="mx-auto w-full max-w-lg flex-1 px-4 pt-6 pb-12">
	<section class="mb-8">
		<h2 class="mb-3 text-lg font-bold">{i18n.dict.quizzes.assortedTitle}</h2>
		{#if quizzes.assorted.length}
			{@render quizList(quizzes.assorted, 0)}
		{:else}
			<p class="text-muted">{i18n.dict.common.comingSoon}</p>
		{/if}
	</section>

	<section>
		<h2 class="mb-3 text-lg font-bold">{i18n.dict.quizzes.ministryTitle}</h2>
		{#if quizzes.ministry.length}
			{@render quizList(quizzes.ministry, quizzes.assorted.length)}
		{:else}
			<p class="text-muted">{i18n.dict.common.comingSoon}</p>
		{/if}
	</section>
</main>
