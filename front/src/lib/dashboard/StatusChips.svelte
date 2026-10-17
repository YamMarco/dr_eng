<script lang="ts">
	import { CalendarClock } from '@lucide/svelte';
	import { resolve } from '$app/paths';
	import { i18n } from '$lib/i18n/index.svelte';
	import { profile } from '$lib/profile.svelte';
	import { activity, WEEKLY_GOAL } from '$lib/activity.svelte';
	import StreakFlame from './StreakFlame.svelte';

	// Global status: days to the exam and the weekly goal. On phone it sits in
	// home's header, on desktop in the top bar.
	let { class: className = '' }: { class?: string } = $props();

	let t = $derived(i18n.dict.home);

	const chip =
		'flex min-h-8 items-center gap-1.5 rounded-full bg-surface px-3 text-sm font-bold ring-1 ring-line/70';
</script>

<div class="flex items-center gap-2 {className}">
	{#if profile.daysToExam !== undefined}
		<span class={chip} title={t.daysToExam(profile.daysToExam)}>
			<CalendarClock size={16} class="text-brand" aria-hidden="true" />
			<span class="sr-only">{t.daysToExam(profile.daysToExam)}</span>
			<span aria-hidden="true">{t.daysShort(profile.daysToExam)}</span>
		</span>
	{/if}
	<a
		href={resolve('/app/streak')}
		class="{chip} transition hover:bg-brand-soft active:scale-95"
		title={t.weekly(activity.daysThisWeek, WEEKLY_GOAL)}
	>
		<StreakFlame days={activity.daysThisWeek} goal={WEEKLY_GOAL} />
		<span class="sr-only">{t.weekly(activity.daysThisWeek, WEEKLY_GOAL)}</span>
		<span aria-hidden="true" dir="ltr">{activity.daysThisWeek}/{WEEKLY_GOAL}</span>
	</a>
</div>
