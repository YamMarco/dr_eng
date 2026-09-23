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
		return quiz.kind === 'ministry' ? `${i18n.dict.quizzes.yearPrefix} ${quiz.year}` : undefined;
	}
</script>

{#snippet quizList(list: Quiz[])}
	<ul class="flex flex-col gap-3">
		{#each list as quiz (quiz.id)}
			<li>
				<a
					href="{base}/exam/{quiz.id}"
					class="group flex flex-col gap-1 rounded-2xl bg-surface p-3 shadow-md ring-1 shadow-overlay/5 ring-line/70 transition duration-150 hover:shadow-lg active:scale-[0.99]"
				>
					<span class="text-sm font-bold">{quiz.titleHe}</span>
					{#if subtitle(quiz)}
						<span class="text-xs leading-snug text-muted">{subtitle(quiz)}</span>
					{/if}
				</a>
			</li>
		{/each}
	</ul>
{/snippet}

<AppBar title="{i18n.dict.module.examTitle} — {mod.letter}" back={base} />

<main class="mx-auto w-full max-w-lg flex-1 px-4 pt-6 pb-12">
	<!-- Mock scoreboard - real numbers land once quiz attempts are tracked -->
	<section
		in:fly={{ y: 12, duration: 300, delay: staggerDelay(0), easing: cubicOut }}
		class="mb-6 grid grid-cols-2 gap-3"
	>
		<div
			class="rounded-3xl bg-surface p-4 text-center shadow-md ring-1 shadow-overlay/5 ring-line/70"
		>
			<p class="text-2xl font-extrabold tabular" dir="ltr">18:42</p>
			<p class="mt-1 text-sm text-muted">{i18n.dict.quizzes.avgTimeLabel}</p>
		</div>
		<div
			class="rounded-3xl bg-surface p-4 text-center shadow-md ring-1 shadow-overlay/5 ring-line/70"
		>
			<p class="text-2xl font-extrabold tabular">78</p>
			<p class="mt-1 text-sm text-muted">{i18n.dict.quizzes.avgGradeLabel}</p>
		</div>
	</section>

	<div
		in:fly={{ y: 12, duration: 300, delay: staggerDelay(1), easing: cubicOut }}
		class="grid grid-cols-2 gap-3"
	>
		<section>
			<h2 class="mb-3 text-base font-bold">{i18n.dict.quizzes.assortedTitle}</h2>
			{#if quizzes.assorted.length}
				{@render quizList(quizzes.assorted)}
			{:else}
				<p class="text-sm text-muted">{i18n.dict.common.comingSoon}</p>
			{/if}
		</section>

		<section>
			<h2 class="mb-3 text-base font-bold">{i18n.dict.quizzes.ministryTitle}</h2>
			{#if quizzes.ministry.length}
				{@render quizList(quizzes.ministry)}
			{:else}
				<p class="text-sm text-muted">{i18n.dict.common.comingSoon}</p>
			{/if}
		</section>
	</div>
</main>
