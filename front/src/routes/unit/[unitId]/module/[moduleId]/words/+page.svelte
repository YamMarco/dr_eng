<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import AppBar from '$lib/components/AppBar.svelte';
	import Button from '$lib/components/Button.svelte';
	import StatTile from '$lib/components/StatTile.svelte';
	import LessonRunner from '$lib/lesson-screens/LessonRunner.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import { staggerDelay } from '$lib/motion';
	import { deckProgress } from '$lib/deck/deckProgress.svelte';
	import { dayKey, dueWords } from '$lib/deck/scheduler';
	import {
		buildSession,
		EXAM_BOX,
		MAX_REVIEWS,
		NEW_PER_SESSION,
		wordResults,
		type DeckSession
	} from '$lib/deck/session';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let t = $derived(i18n.dict.deck);
	let mod = $derived(data.mod);
	let words = $derived(data.words);

	const today = dayKey(new Date());
	let progress = $derived(deckProgress.get(mod.id));
	let seen = $derived(words.filter((w) => progress[w.id]));
	let due = $derived(dueWords(progress, today).length);
	let known = $derived(seen.filter((w) => progress[w.id].box > EXAM_BOX).length);
	let fresh = $derived(
		due >= MAX_REVIEWS ? 0 : Math.min(NEW_PER_SESSION, words.length - seen.length)
	);
	let reviews = $derived(Math.min(due, MAX_REVIEWS));

	let session = $state<DeckSession | null>(null);
	// Answers per screen index, filled by the runner as each screen is left.
	let results: Record<number, boolean[]> = {};

	function start(extra = false) {
		results = {};
		session = buildSession(words, progress, today, { extra });
	}

	// Leaving early still saves what was answered; unanswered words stay as they were.
	function finish() {
		if (session) deckProgress.apply(mod.id, wordResults(session.targets, results), today);
		session = null;
	}
</script>

<AppBar title="{t.title} — {mod.letter}" back="/" />

<main class="mx-auto w-full max-w-lg flex-1 px-4 pt-6 pb-12">
	<p
		in:fly={{ y: 12, duration: 300, delay: staggerDelay(0), easing: cubicOut }}
		class="mb-4 leading-relaxed text-muted"
	>
		{t.intro}
	</p>

	<section
		in:fly={{ y: 12, duration: 300, delay: staggerDelay(1), easing: cubicOut }}
		class="mb-6 grid grid-cols-3 gap-3"
	>
		<StatTile value={String(due)} label={t.statDue} />
		<StatTile value={String(seen.length - known)} label={t.statLearning} />
		<StatTile value={String(known)} label={t.statKnown} />
	</section>

	<section
		in:fly={{ y: 12, duration: 300, delay: staggerDelay(2), easing: cubicOut }}
		class="mb-6 rounded-3xl bg-surface p-5 shadow-md ring-1 shadow-overlay/5 ring-line/70"
	>
		<div class="mb-4 h-1.5 overflow-hidden rounded-full bg-line" aria-hidden="true">
			<span
				class="block h-full rounded-full bg-brand transition-[width] duration-500"
				style="width: {(seen.length / words.length) * 100}%"
			></span>
		</div>
		<p class="mb-4 text-sm text-muted">{t.progress(seen.length, words.length)}</p>
		{#if reviews || fresh}
			<p class="mb-3 font-bold">{t.sessionSize(reviews, fresh)}</p>
			<Button onclick={() => start()}>{t.start}</Button>
		{:else}
			<h2 class="font-bold">{t.allDoneTitle}</h2>
			<p class="mt-1 mb-3 text-sm text-muted">{t.allDoneDesc}</p>
			<Button variant="secondary" onclick={() => start(true)}>{t.extra}</Button>
		{/if}
	</section>

	<section in:fly={{ y: 12, duration: 300, delay: staggerDelay(3), easing: cubicOut }}>
		<h2 class="mb-2 text-base font-bold">{t.howTitle}</h2>
		<ul class="flex list-disc flex-col gap-1.5 ps-5 text-sm leading-relaxed text-muted">
			{#each t.how as line (line)}
				<li>{line}</li>
			{/each}
		</ul>
	</section>
</main>

{#if session}
	<LessonRunner
		screens={session.screens}
		lessonLabel={t.sessionLabel}
		hasNextLesson={false}
		retryMissed
		alwaysPass
		onScreenResult={(index, answers) => (results[index] = answers)}
		onExit={finish}
		onFinish={finish}
		onFinishAndContinue={finish}
		onNextRound={finish}
	/>
{/if}
