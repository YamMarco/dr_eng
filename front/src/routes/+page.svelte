<script lang="ts">
	import { CalendarClock, Flame } from '@lucide/svelte';
	import { getUnitGroup, modules } from '$lib/curriculum';
	import { i18n } from '$lib/i18n/index.svelte';
	import { profile } from '$lib/profile.svelte';
	import { activity } from '$lib/activity.svelte';
	import { continueHref, lessonStats, moduleRoute, resumeItem } from '$lib/dashboard/data';
	import ContinueBar from '$lib/dashboard/ContinueBar.svelte';
	import { examStats } from '$lib/quiz/stats';
	import { getDeck } from '$lib/deck';
	import { moduleLocation } from '$lib/moduleLocation.svelte';
	import Onboarding from '$lib/dashboard/Onboarding.svelte';
	import ModuleTile from '$lib/dashboard/ModuleTile.svelte';
	import ModulePanel from '$lib/dashboard/ModulePanel.svelte';

	// Home = a "continue" bar for the latest thing done, the Bagrut modules side
	// by side (each one is an exam), and the open module's actions below. One
	// screen on a phone, no scrolling.
	const WEEKLY_GOAL = 4;

	let t = $derived(i18n.dict.home);
	let group = $derived(getUnitGroup(profile.unitGroupId)!);

	let rows = $derived(
		group.moduleIds.map((id) => {
			const route = moduleRoute(id);
			const exams = examStats(id);
			return {
				mod: modules[id],
				exams,
				hasPath: route.length > 0,
				...lessonStats(route),
				comingSoon: !route.length && !exams.total && !getDeck(id)
			};
		})
	);

	// Opens on the module last studied, else the first one with something in it.
	let chosenId = $state<string | undefined>();
	let openId = $derived(
		chosenId ??
			rows.find((r) => !r.comingSoon && moduleLocation.get(r.mod.id))?.mod.id ??
			rows.find((r) => !r.comingSoon)?.mod.id
	);
	let open = $derived(rows.find((r) => r.mod.id === openId));

	// Back into the latest thing done, in any module of this unit level.
	let resume = $derived(resumeItem(group.moduleIds));

	const chip =
		'flex min-h-9 items-center gap-1.5 rounded-full bg-surface px-3 text-sm font-bold ring-1 ring-line/70';
</script>

{#if !profile.value}
	<Onboarding />
{:else}
	<main
		class="mx-auto flex w-full max-w-lg flex-1 flex-col gap-3 px-4 pt-5 pb-6 sm:pt-10 md:max-w-2xl"
	>
		<header class="flex flex-wrap items-center gap-2">
			<h1 class="me-auto text-2xl font-extrabold tracking-tight">{t.greeting}</h1>
			{#if profile.daysToExam !== undefined}
				<span class={chip} title={t.daysToExam(profile.daysToExam)}>
					<CalendarClock size={16} class="text-brand" aria-hidden="true" />
					<span class="sr-only">{t.daysToExam(profile.daysToExam)}</span>
					<span aria-hidden="true">{t.daysShort(profile.daysToExam)}</span>
				</span>
			{/if}
			<span class={chip} title={t.weekly(activity.daysThisWeek, WEEKLY_GOAL)}>
				<Flame
					size={16}
					class={activity.daysThisWeek >= WEEKLY_GOAL
						? 'text-orange-500'
						: activity.daysThisWeek
							? 'text-orange-400'
							: 'text-muted'}
					aria-hidden="true"
				/>
				<span class="sr-only">{t.weekly(activity.daysThisWeek, WEEKLY_GOAL)}</span>
				<span aria-hidden="true" dir="ltr">{activity.daysThisWeek}/{WEEKLY_GOAL}</span>
			</span>
		</header>

		{#if resume}
			<ContinueBar item={resume} groupId={group.id} />
		{/if}

		<div class="grid gap-2" style="grid-template-columns: repeat({rows.length}, minmax(0, 1fr))">
			{#each rows as row (row.mod.id)}
				<ModuleTile
					mod={row.mod}
					exams={row.exams}
					done={row.done}
					total={row.total}
					comingSoon={row.comingSoon}
					selected={row.mod.id === openId}
					onclick={() => (chosenId = row.mod.id)}
				/>
			{/each}
		</div>

		{#if open}
			{#key open.mod.id}
				<ModulePanel
					mod={open.mod}
					groupId={group.id}
					exams={open.exams}
					hasPath={open.hasPath}
					covered={resume && continueHref(resume, group.id)}
				/>
			{/key}
		{/if}
	</main>
{/if}
