<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { CalendarClock, Flame } from '@lucide/svelte';
	import { resolve } from '$app/paths';
	import { getUnitGroup } from '$lib/curriculum';
	import { i18n } from '$lib/i18n/index.svelte';
	import { staggerDelay } from '$lib/motion';
	import { profile } from '$lib/profile.svelte';
	import { activity } from '$lib/activity.svelte';
	import { lessonProgress } from '$lib/lessonProgress.svelte';
	import { lastExamPercent, moduleRoute, todayLesson } from '$lib/dashboard/data';
	import Onboarding from '$lib/dashboard/Onboarding.svelte';
	import TodayCard from '$lib/dashboard/TodayCard.svelte';
	import RouteMap from '$lib/dashboard/RouteMap.svelte';
	import ExamCard from '$lib/dashboard/ExamCard.svelte';

	let t = $derived(i18n.dict.home);
	let group = $derived(getUnitGroup(profile.unitGroupId)!);

	// The group's first module that has a lesson path - only Module C today.
	let main = $derived.by(() => {
		for (const moduleId of group.moduleIds) {
			const sections = moduleRoute(moduleId);
			if (sections.length === 0) continue;
			const base = `/unit/${group.id}/module/${moduleId}`;
			const lesson = todayLesson(moduleId);
			const done = sections.reduce((sum, s) => sum + s.done, 0);
			const total = sections.reduce((sum, s) => sum + s.total, 0);
			const lastPercent = lastExamPercent(moduleId);
			return {
				base,
				sections,
				lesson,
				roundsCompleted: lesson ? lessonProgress.completedRounds(moduleId, lesson.id) : 0,
				todayHref: lesson ? `${base}/lessons?lesson=${lesson.id}` : `${base}/exam`,
				progress: total ? done / total : 0,
				lastPercent
			};
		}
		return undefined;
	});

	let goalLine = $derived(
		profile.value?.units === 'undecided' ? t.goalUndecided : t.goalLine(group.id)
	);
</script>

{#if !profile.value}
	<Onboarding />
{:else}
	<main class="mx-auto flex w-full max-w-lg flex-1 flex-col gap-5 px-4 pt-8 pb-12 sm:pt-12">
		<header class="flex items-start justify-between gap-3">
			<div>
				<h1 class="text-3xl font-extrabold tracking-tight">{t.greeting}</h1>
				<p class="mt-1 text-muted">{goalLine}</p>
			</div>
			<div class="flex shrink-0 flex-col items-end gap-1.5 text-sm font-bold">
				<span
					class="flex items-center gap-1 rounded-full bg-surface px-3 py-1 ring-1 ring-line/70"
					title={t.streak(activity.streak)}
				>
					<Flame
						size={16}
						class={activity.streak > 0 ? 'text-orange-500' : 'text-muted'}
						aria-hidden="true"
					/>
					<span class="sr-only">{t.streak(activity.streak)}</span>
					<span aria-hidden="true">{activity.streak}</span>
				</span>
				{#if profile.daysToExam !== undefined}
					<span
						class="flex items-center gap-1 rounded-full bg-surface px-3 py-1 ring-1 ring-line/70"
					>
						<CalendarClock size={16} class="text-brand" aria-hidden="true" />
						{t.daysToExam(profile.daysToExam)}
					</span>
				{/if}
			</div>
		</header>

		{#if main}
			<TodayCard
				lesson={main.lesson}
				roundsCompleted={main.roundsCompleted}
				href={main.todayHref}
			/>
			<div in:fly={{ y: 12, duration: 300, delay: staggerDelay(1), easing: cubicOut }}>
				<RouteMap
					sections={main.sections}
					examDone={main.lastPercent !== undefined}
					href="{main.base}/lessons"
				/>
			</div>
			<div in:fly={{ y: 12, duration: 300, delay: staggerDelay(2), easing: cubicOut }}>
				<ExamCard
					href="{main.base}/exam"
					routeProgress={main.progress}
					lastPercent={main.lastPercent}
				/>
			</div>
		{:else}
			<div class="rounded-3xl bg-surface p-5 shadow-md ring-1 shadow-overlay/5 ring-line/70">
				<p class="font-bold">{t.noRouteTitle}</p>
				<p class="mt-1 text-sm text-muted">{t.noRouteDesc}</p>
			</div>
		{/if}

		<a
			href={resolve('/unit/[unitId]', { unitId: group.id })}
			class="group mt-2 flex min-h-11 items-center justify-between gap-3 rounded-2xl px-2 font-semibold text-muted transition hover:text-ink"
		>
			{t.allModules(group.units)}
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="h-5 w-5 shrink-0 transition group-hover:text-brand rtl:rotate-180"
				aria-hidden="true"
			>
				<path d="m9 18 6-6-6-6" />
			</svg>
		</a>
	</main>
{/if}
