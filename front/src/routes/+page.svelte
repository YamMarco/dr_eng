<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { CalendarClock, Flame, GraduationCap } from '@lucide/svelte';
	import { resolve } from '$app/paths';
	import { getUnitGroup, modules } from '$lib/curriculum';
	import { i18n } from '$lib/i18n/index.svelte';
	import { staggerDelay } from '$lib/motion';
	import { profile } from '$lib/profile.svelte';
	import { activity } from '$lib/activity.svelte';
	import { lessonProgress } from '$lib/lessonProgress.svelte';
	import { moduleRoute, todayLesson } from '$lib/dashboard/data';
	import { examStats } from '$lib/quiz/stats';
	import Onboarding from '$lib/dashboard/Onboarding.svelte';
	import TodayCard from '$lib/dashboard/TodayCard.svelte';
	import ModuleCard from '$lib/dashboard/ModuleCard.svelte';
	import ExamsCard from '$lib/dashboard/ExamsCard.svelte';

	let t = $derived(i18n.dict.home);
	let group = $derived(getUnitGroup(profile.unitGroupId)!);

	// Every module of the chosen unit level, with its track and exam stats.
	let moduleRows = $derived(
		group.moduleIds.map((id) => ({
			mod: modules[id],
			sections: moduleRoute(id),
			exams: examStats(id)
		}))
	);

	// Today's lesson comes from the first module that has a lesson path.
	let main = $derived.by(() => {
		const row = moduleRows.find((r) => r.sections.length > 0);
		if (!row) return undefined;
		const base = `/unit/${group.id}/module/${row.mod.id}`;
		const lesson = todayLesson(row.mod.id);
		return {
			moduleId: row.mod.id,
			lesson,
			roundsCompleted: lesson ? lessonProgress.completedRounds(row.mod.id, lesson.id) : 0,
			href: lesson ? `${base}/lessons?lesson=${lesson.id}` : `${base}/exam`
		};
	});

	let pathRows = $derived(moduleRows.filter((r) => r.sections.length > 0));
	let comingSoon = $derived(
		moduleRows
			.filter((r) => r.sections.length === 0)
			.map((r) => `${i18n.dict.unit.modulePrefix} ${r.mod.letter}`)
	);
	let examRows = $derived(
		moduleRows.filter((r) => r.exams.total > 0).map((r) => ({ mod: r.mod, stats: r.exams }))
	);

	let unitsChip = $derived(
		profile.value?.units === 'undecided' ? t.unitsUndecided : `${group.units} ${t.unitsSuffix}`
	);

	const chip =
		'flex min-h-9 items-center gap-1.5 rounded-full bg-surface px-3 text-sm font-bold ring-1 ring-line/70';
</script>

{#if !profile.value}
	<Onboarding />
{:else}
	<main class="mx-auto flex w-full max-w-lg flex-1 flex-col gap-5 px-4 pt-8 pb-12 sm:pt-12">
		<header class="flex flex-col gap-3">
			<h1 class="text-3xl font-extrabold tracking-tight">{t.greeting}</h1>
			<div class="flex flex-wrap gap-2">
				<a href={resolve('/settings')} class="{chip} transition hover:ring-brand/50">
					<GraduationCap size={16} class="text-brand" aria-hidden="true" />
					{unitsChip}
				</a>
				<span class={chip} title={t.streak(activity.streak)}>
					<Flame
						size={16}
						class={activity.streak > 0 ? 'text-orange-500' : 'text-muted'}
						aria-hidden="true"
					/>
					<span class="sr-only">{t.streak(activity.streak)}</span>
					<span aria-hidden="true">{activity.streak}</span>
				</span>
				{#if profile.daysToExam !== undefined}
					<span class={chip}>
						<CalendarClock size={16} class="text-brand" aria-hidden="true" />
						{t.daysToExam(profile.daysToExam)}
					</span>
				{/if}
			</div>
		</header>

		{#if main}
			<TodayCard lesson={main.lesson} roundsCompleted={main.roundsCompleted} href={main.href} />
		{/if}

		{#if moduleRows.length}
			<section class="flex flex-col gap-3">
				<h2 class="px-1 text-sm font-bold text-muted">{t.modulesTitle}</h2>
				{#each pathRows as row, i (row.mod.id)}
					<div in:fly={{ y: 12, duration: 300, delay: staggerDelay(i + 1), easing: cubicOut }}>
						<ModuleCard
							mod={row.mod}
							groupId={group.id}
							sections={row.sections}
							defaultOpen={row.mod.id === main?.moduleId}
						/>
					</div>
				{/each}
				{#if comingSoon.length}
					<p class="px-1 text-sm text-muted">{t.comingSoonModules(comingSoon.join(' · '))}</p>
				{/if}
			</section>
		{/if}

		{#if examRows.length}
			<section
				class="flex flex-col gap-3"
				in:fly={{
					y: 12,
					duration: 300,
					delay: staggerDelay(pathRows.length + 1),
					easing: cubicOut
				}}
			>
				<h2 class="px-1 text-sm font-bold text-muted">{t.examsTitle}</h2>
				<ExamsCard groupId={group.id} rows={examRows} />
			</section>
		{/if}
	</main>
{/if}
