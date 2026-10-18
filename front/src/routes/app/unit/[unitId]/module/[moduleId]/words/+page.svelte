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
	import { dayKey } from '$lib/deck/scheduler';
	import { buildSession, EXAM_BOX, wordResults, type DeckSession } from '$lib/deck/session';
	import { deckStats, deckToday, dueToday, localizeDeck, type Deck } from '$lib/deck';
	import { lastEngagement } from '$lib/lastEngagement.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let t = $derived(i18n.dict.deck);
	let mod = $derived(data.mod);

	const today = dayKey(new Date());
	let lists = $derived(
		data.decks.map((deck) => ({ deck, stats: deckStats(deck), today: deckToday(deck) }))
	);
	let due = $derived(dueToday(mod.id));
	let known = $derived(
		data.decks.reduce(
			(sum, d) =>
				sum + Object.values(deckProgress.get(d.id)).filter((s) => s.box > EXAM_BOX).length,
			0
		)
	);
	let seen = $derived(lists.reduce((sum, l) => sum + l.stats.seen, 0));
	// The one suggested next step: a started list with work today, else the first
	// list with work, else the first list.
	let next = $derived(
		lists.find((l) => l.stats.seen && l.today.reviews + l.today.fresh) ??
			lists.find((l) => l.today.reviews + l.today.fresh) ??
			lists[0]
	);

	let session = $state<{ deck: Deck; built: DeckSession } | null>(null);
	// Answers per screen index, filled by the runner as each screen is left.
	let results: Record<number, boolean[]> = {};

	function start(deck: Deck) {
		results = {};
		const t = i18n.dict.deck;
		const progress = deckProgress.get(deck.id);
		const { reviews, fresh } = deckToday(deck);
		const built = buildSession(localizeDeck(mod.id, deck.words, i18n.language), progress, today, {
			// Nothing left today: practice the soonest-due words anyway.
			extra: !(reviews + fresh),
			prompts: {
				meaning: t.promptMeaning,
				context: t.promptContext,
				definition: t.promptDefinition
			}
		});
		session = { deck, built };
		lastEngagement.record({ kind: 'words', moduleId: mod.id });
	}

	// Leaving early still saves what was answered; unanswered words stay as they were.
	function finish() {
		if (session)
			deckProgress.apply(session.deck.id, wordResults(session.built.targets, results), today);
		session = null;
	}

	function listTitle(deck: Deck): string {
		return `${t.listTitle(deck.letter)} · ${t.listExam(deck.season, deck.year)}`;
	}
</script>

<AppBar title="{t.title} — {mod.letter}" back="/app/unit/{data.group.id}/module/{mod.id}" />

<main class="app-col flex-1 px-4 pt-6 pb-12">
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
		<StatTile value={String(seen - known)} label={t.statLearning} />
		<StatTile value={String(known)} label={t.statKnown} />
	</section>

	{#if next}
		<div in:fly={{ y: 12, duration: 300, delay: staggerDelay(2), easing: cubicOut }} class="mb-6">
			<Button onclick={() => start(next.deck)}>
				{next.today.reviews + next.today.fresh ? t.start : t.extra} · {t.listTitle(
					next.deck.letter
				)}
			</Button>
		</div>
	{/if}

	<section class="mb-6">
		<h2 class="mb-1 text-base font-bold">{t.listsTitle}</h2>
		<p class="mb-3 text-sm text-muted">{t.listsNote}</p>
		<ul class="flex flex-col gap-3">
			{#each lists as { deck, stats, today: work }, i (deck.id)}
				<li in:fly={{ y: 12, duration: 300, delay: staggerDelay(i + 3), easing: cubicOut }}>
					<button
						type="button"
						onclick={() => start(deck)}
						class="w-full rounded-3xl bg-surface p-4 text-start shadow-md ring-1 shadow-overlay/5 transition duration-100 hover:ring-brand/40 active:scale-[0.98] {deck ===
						next?.deck
							? 'ring-brand/50'
							: 'ring-line/70'}"
					>
						<span class="flex items-baseline justify-between gap-3">
							<span class="font-bold">{listTitle(deck)}</span>
							<span class="text-sm text-muted tabular" dir="ltr">{stats.seen}/{stats.total}</span>
						</span>
						<span
							class="my-2.5 block h-1.5 overflow-hidden rounded-full bg-line"
							aria-hidden="true"
						>
							<span
								class="block h-full rounded-full bg-brand transition-[width] duration-500"
								style="width: {(stats.seen / stats.total) * 100}%"
							></span>
						</span>
						<span class="block text-sm text-muted">
							{work.reviews + work.fresh ? t.sessionSize(work.reviews, work.fresh) : t.allDoneTitle}
						</span>
					</button>
				</li>
			{/each}
		</ul>
	</section>

	<section
		in:fly={{ y: 12, duration: 300, delay: staggerDelay(lists.length + 3), easing: cubicOut }}
	>
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
		screens={session.built.screens}
		lessonLabel="{t.sessionLabel} · {t.listTitle(session.deck.letter)}"
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
