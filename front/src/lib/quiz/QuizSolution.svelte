<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import AppBar from '$lib/components/AppBar.svelte';
	import Md from '$lib/components/Md.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import { screensWithIds } from './screenIds';
	import type { QuizNode } from './types';

	let { quiz, onBack }: { quiz: QuizNode; onBack: () => void } = $props();
</script>

<div class="fixed inset-0 z-50 flex flex-col overscroll-none bg-canvas">
	<AppBar title={i18n.dict.quiz.solutionTitle} onback={onBack} />

	<main class="mx-auto w-full max-w-lg flex-1 overflow-y-auto overscroll-contain px-4 pt-4 pb-12">
		{#each quiz.parts as part (part.id)}
			<h2 class="mb-3 text-base font-bold">{part.titleHe}</h2>
			<ul class="mb-6 flex flex-col gap-4">
				{#each screensWithIds(part) as { id, screen } (id)}
					{#if screen.type === 'mcq'}
						<li class="rounded-2xl bg-surface p-4 shadow-md ring-1 shadow-overlay/5 ring-line/70">
							<p class="font-semibold" dir="ltr"><Md text={screen.prompt} /></p>
							<p class="mt-2 text-sm text-brand-dark" dir="ltr">
								{i18n.dict.quiz.correctAnswerLabel}: {screen.options[screen.correctIndex]}
							</p>
						</li>
					{:else if screen.type === 'sentence-completion'}
						<li class="rounded-2xl bg-surface p-4 shadow-md ring-1 shadow-overlay/5 ring-line/70">
							<p dir="ltr">{screen.before} ____ {screen.after}</p>
							<p class="mt-2 text-sm text-brand-dark" dir="ltr">
								{i18n.dict.quiz.correctAnswerLabel}: {screen.modelAnswers[0]}
							</p>
						</li>
					{:else if screen.type === 'writing-task'}
						<li class="rounded-2xl bg-surface p-4 shadow-md ring-1 shadow-overlay/5 ring-line/70">
							<p class="font-semibold" dir="ltr"><Md text={screen.prompt} /></p>
							<p class="mt-2 text-sm text-muted">{i18n.dict.quiz.manualTitle}</p>
						</li>
					{/if}
				{/each}
			</ul>
		{/each}

		<Button onclick={onBack}>{i18n.dict.quiz.backToQuizzes}</Button>
	</main>
</div>
