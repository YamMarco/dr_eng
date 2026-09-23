<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { assortedQuizzes, ministryQuizzes, type Quiz } from '$lib/quizzes';
	import { i18n } from '$lib/i18n/index.svelte';
	import { staggerDelay } from '$lib/motion';

	function subtitle(quiz: Quiz) {
		return quiz.kind === 'assorted' ? quiz.twistHe : `${i18n.dict.quizzes.yearPrefix} ${quiz.year}`;
	}
</script>

{#snippet quizList(quizzes: Quiz[], startAt: number)}
	<ul class="flex flex-col gap-4">
		{#each quizzes as quiz, i (quiz.id)}
			<li in:fly={{ y: 12, duration: 300, delay: staggerDelay(startAt + i), easing: cubicOut }}>
				<a
					href="/quizzes/{quiz.id}"
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

<main class="mx-auto w-full max-w-lg flex-1 px-4 pt-10 pb-12 sm:pt-14">
	<div class="mb-8">
		<h1 class="text-3xl font-extrabold tracking-tight sm:text-4xl">{i18n.dict.quizzes.title}</h1>
		<p class="mt-2 leading-relaxed text-muted">{i18n.dict.quizzes.subtitle}</p>
	</div>

	<section class="mb-8">
		<h2 class="mb-3 text-lg font-bold">{i18n.dict.quizzes.assortedTitle}</h2>
		{@render quizList(assortedQuizzes, 0)}
	</section>

	<section>
		<h2 class="mb-3 text-lg font-bold">{i18n.dict.quizzes.ministryTitle}</h2>
		{@render quizList(ministryQuizzes, assortedQuizzes.length)}
	</section>
</main>
