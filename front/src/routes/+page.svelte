<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { CalendarClock } from '@lucide/svelte';
	import { getUnitGroup, modules } from '$lib/curriculum';
	import { i18n } from '$lib/i18n/index.svelte';
	import { staggerDelay } from '$lib/motion';
	import { profile } from '$lib/profile.svelte';
	import { activity, WEEKLY_GOAL } from '$lib/activity.svelte';
	import { resolve } from '$app/paths';
	import { homeMeters, moduleHook, moduleRoute, resumeItem } from '$lib/dashboard/data';
	import { examStats } from '$lib/quiz/stats';
	import { getDeck } from '$lib/deck';
	import Onboarding from '$lib/dashboard/Onboarding.svelte';
	import ContinueBar from '$lib/dashboard/ContinueBar.svelte';
	import ModuleRow from '$lib/dashboard/ModuleRow.svelte';
	import StreakFlame from '$lib/dashboard/StreakFlame.svelte';

	// Home = where the student stands, and a reason to go in: a way back to the
	// latest thing done, and one concise row per Bagrut module. Every action lives
	// on the module's own page.

	let t = $derived(i18n.dict.home);
	let group = $derived(getUnitGroup(profile.unitGroupId)!);

	let rows = $derived(
		group.moduleIds.map((id) => {
			const route = moduleRoute(id);
			const exams = examStats(id);
			return {
				mod: modules[id],
				exams,
				meters: homeMeters(id, route),
				hook: moduleHook(id, route),
				href: `/unit/${group.id}/module/${id}`,
				comingSoon: !route.length && !exams.total && !getDeck(id)
			};
		})
	);

	// Back into the latest thing done, in any module of this unit level.
	let resume = $derived(resumeItem(group.moduleIds));

	const chip =
		'flex min-h-8 items-center gap-1.5 rounded-full bg-surface px-3 text-sm font-bold ring-1 ring-line/70';
</script>

{#if !profile.value}
	<Onboarding />
{:else}
	<main
		class="mx-auto flex w-full max-w-lg flex-1 flex-col gap-3 px-4 pt-3 pb-3 sm:pt-10 sm:pb-6 md:max-w-2xl"
	>
		<header class="flex flex-wrap items-center gap-2">
			<h1 class="me-auto text-xl font-extrabold tracking-tight sm:text-2xl">{t.greeting}</h1>
			{#if profile.daysToExam !== undefined}
				<span class={chip} title={t.daysToExam(profile.daysToExam)}>
					<CalendarClock size={16} class="text-brand" aria-hidden="true" />
					<span class="sr-only">{t.daysToExam(profile.daysToExam)}</span>
					<span aria-hidden="true">{t.daysShort(profile.daysToExam)}</span>
				</span>
			{/if}
			<a
				href={resolve('/streak')}
				class="{chip} transition hover:bg-brand-soft active:scale-95"
				title={t.weekly(activity.daysThisWeek, WEEKLY_GOAL)}
			>
				<StreakFlame days={activity.daysThisWeek} goal={WEEKLY_GOAL} />
				<span class="sr-only">{t.weekly(activity.daysThisWeek, WEEKLY_GOAL)}</span>
				<span aria-hidden="true" dir="ltr">{activity.daysThisWeek}/{WEEKLY_GOAL}</span>
			</a>
		</header>

		{#if resume}
			<div class="mb-4"><ContinueBar item={resume} groupId={group.id} /></div>
		{/if}

		{#each rows as row, i (row.mod.id)}
			<div in:fly={{ y: 12, duration: 300, delay: staggerDelay(i + 1), easing: cubicOut }}>
				<ModuleRow {...row} />
			</div>
		{/each}
	</main>
{/if}
