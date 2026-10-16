<script lang="ts">
	import { resolve } from '$app/paths';
	import AppBar from '$lib/components/AppBar.svelte';
	import StreakFlame from '$lib/dashboard/StreakFlame.svelte';
	import { activity, WEEKLY_GOAL } from '$lib/activity.svelte';
	import { i18n } from '$lib/i18n/index.svelte';

	// The streak dashboard, opened from home's flame: this week against the goal,
	// the streaks, and the last 12 weeks at a glance.
	const HISTORY_WEEKS = 12;

	let t = $derived(i18n.dict.streak);
	let days = $derived(activity.daysThisWeek);
	let left = $derived(Math.max(0, WEEKLY_GOAL - days));

	// Fixed dates for this view, not reactive state.
	// eslint-disable-next-line svelte/prefer-svelte-reactivity
	const today = new Date();
	today.setHours(0, 0, 0, 0);
	// eslint-disable-next-line svelte/prefer-svelte-reactivity
	const weekStart = new Date(today);
	weekStart.setDate(today.getDate() - today.getDay());

	function dayAt(weeksBack: number, weekday: number): Date {
		// eslint-disable-next-line svelte/prefer-svelte-reactivity
		const d = new Date(weekStart);
		d.setDate(d.getDate() - weeksBack * 7 + weekday);
		return d;
	}

	/** Oldest week first; each week Sunday to Saturday. */
	const history = Array.from({ length: HISTORY_WEEKS }, (_, i) =>
		Array.from({ length: 7 }, (_, d) => dayAt(HISTORY_WEEKS - 1 - i, d))
	);
	const thisWeek = history[HISTORY_WEEKS - 1];

	let stats = $derived([
		{ value: activity.streak, label: t.dayStreak },
		{ value: activity.weeksAtGoal, label: t.weekStreak },
		{ value: activity.totalDays, label: t.totalDays }
	]);

	const card = 'rounded-3xl bg-surface p-3.5 shadow-md ring-1 shadow-overlay/5 ring-line/70';
</script>

<AppBar title={t.title} back={resolve('/app')} />

<main class="app-col flex flex-1 flex-col gap-3 px-4 pt-3 pb-3 sm:pt-4 sm:pb-6">
	<section class="{card} flex flex-col items-center gap-2 text-center">
		<StreakFlame {days} goal={WEEKLY_GOAL} size={48} />
		<div class="flex flex-col gap-0.5">
			<h1 class="text-lg font-extrabold">{t.thisWeek(days, WEEKLY_GOAL)}</h1>
			<p class="text-sm {left ? 'text-muted' : 'font-bold text-brand-dark'}">
				{left ? t.toGoal(left) : t.goalMet}
			</p>
		</div>
		<ol class="flex w-full justify-between gap-1">
			{#each thisWeek as date, d (d)}
				{@const done = activity.practiced(date)}
				{@const isToday = date.getTime() === today.getTime()}
				<li class="flex flex-1 flex-col items-center gap-1 text-xs text-muted">
					<span
						class="flex h-8 w-8 items-center justify-center rounded-full {done
							? 'bg-orange-400 text-white'
							: 'bg-line/60'} {isToday
							? 'ring-2 ring-brand ring-offset-2 ring-offset-surface'
							: ''}"
						aria-hidden="true"
					>
						{#if done}✓{/if}
					</span>
					<span class={isToday ? 'font-bold text-ink' : ''}>{t.weekDays[d]}</span>
				</li>
			{/each}
		</ol>
	</section>

	<section class="grid grid-cols-3 gap-3">
		{#each stats as s (s.label)}
			<div class="{card} flex flex-col items-center gap-0.5 !p-2.5">
				<span class="text-2xl font-extrabold tabular" dir="ltr">{s.value}</span>
				<span class="text-xs text-muted">{s.label}</span>
			</div>
		{/each}
	</section>

	<section class="{card} flex flex-col gap-3">
		<h2 class="text-sm font-bold">{t.history}</h2>
		<!-- Columns are weeks (newest at the start edge), rows are weekdays. -->
		<div class="flex justify-between gap-1" aria-hidden="true">
			{#each history.toReversed() as week, w (w)}
				<div class="flex flex-1 flex-col gap-1">
					{#each week as date (date.getTime())}
						<span
							class="h-3 w-full rounded-sm {date > today
								? 'bg-transparent'
								: activity.practiced(date)
									? 'bg-orange-400'
									: 'bg-line/60'}"
						></span>
					{/each}
				</div>
			{/each}
		</div>
		<p class="text-xs text-muted">{t.rule}</p>
	</section>
</main>
