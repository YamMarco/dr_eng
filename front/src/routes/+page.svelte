<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { MediaQuery } from 'svelte/reactivity';
	import { CalendarClock, Flame, GraduationCap } from '@lucide/svelte';
	import { resolve } from '$app/paths';
	import { getUnitGroup, modules } from '$lib/curriculum';
	import { i18n } from '$lib/i18n/index.svelte';
	import { staggerDelay } from '$lib/motion';
	import { profile } from '$lib/profile.svelte';
	import { activity } from '$lib/activity.svelte';
	import { roundsCompleted } from '$lib/lessonPath';
	import { isWritingLesson, moduleRoute, nextStep } from '$lib/dashboard/data';
	import { examStats } from '$lib/quiz/stats';
	import { deckToday, getDeck } from '$lib/deck';
	import Onboarding from '$lib/dashboard/Onboarding.svelte';
	import NextStepCard from '$lib/dashboard/NextStepCard.svelte';
	import ExamsCard from '$lib/dashboard/ExamsCard.svelte';
	import WordsCard from '$lib/dashboard/WordsCard.svelte';
	import ModuleCard from '$lib/dashboard/ModuleCard.svelte';

	let t = $derived(i18n.dict.home);
	let group = $derived(getUnitGroup(profile.unitGroupId)!);
	// Touch-first device: steps with a writing task get a "better on a computer" note.
	const phone = new MediaQuery('pointer: coarse');

	// Every module of the chosen unit level, with its track and exam stats.
	let moduleRows = $derived(
		group.moduleIds.map((id) => ({
			mod: modules[id],
			sections: moduleRoute(id),
			exams: examStats(id),
			hasDeck: !!getDeck(id)
		}))
	);
	let pathRows = $derived(moduleRows.filter((r) => r.sections.length > 0));
	let examRows = $derived(moduleRows.filter((r) => r.exams.total > 0));
	let deckRows = $derived(moduleRows.filter((r) => r.hasDeck));
	let comingSoon = $derived(
		moduleRows
			.filter((r) => !r.sections.length && !r.exams.total && !r.hasDeck)
			.map((r) => `${i18n.dict.unit.modulePrefix} ${r.mod.letter}`)
	);

	// The next step comes from the first module that has a lesson path.
	let mainModuleId = $derived(pathRows[0]?.mod.id);
	let step = $derived.by(() => {
		if (!mainModuleId) return undefined;
		const base = `/unit/${group.id}/module/${mainModuleId}`;
		const next = nextStep(mainModuleId);
		if (next.kind === 'lesson') {
			const { lesson } = next;
			const done = roundsCompleted(lesson.id);
			const writing = isWritingLesson(lesson);
			const onPhone = writing && phone.current;
			const words = onPhone
				? deckRows.find((r) => {
						const today = deckToday(r.mod.id);
						return today.reviews + today.fresh > 0;
					})
				: undefined;
			return {
				title: i18n.title(lesson.id),
				cta: done > 0 ? t.todayContinue : t.todayStart,
				href: `${base}/lessons?lesson=${lesson.id}`,
				rounds: { done, total: lesson.content.rounds.length },
				desktopNote: onPhone ? t.desktopNote : undefined,
				alt: words
					? { label: t.phoneAlt, href: `/unit/${group.id}/module/${words.mod.id}/words` }
					: undefined
			};
		}
		if (next.kind === 'exam')
			return {
				title: i18n.title(next.quiz.id),
				desc: t.examReason[next.reason],
				cta: next.reason === 'resume' ? i18n.dict.quizzes.resumeButton : t.examStart,
				href: `${base}/exam/${next.quiz.id}`
			};
		return { title: t.allDoneTitle, desc: t.allDoneDesc, cta: t.toExams, href: `${base}/exam` };
	});

	let unitsChip = $derived(
		profile.value?.units === 'undecided' ? t.unitsUndecided : `${group.units} ${t.unitsSuffix}`
	);

	const chip =
		'flex min-h-9 items-center gap-1.5 rounded-full bg-surface px-3 text-sm font-bold ring-1 ring-line/70';
	const enter = (i: number) => ({ y: 12, duration: 300, delay: staggerDelay(i), easing: cubicOut });
</script>

{#if !profile.value}
	<Onboarding />
{:else}
	<main
		class="mx-auto flex w-full max-w-lg flex-1 flex-col gap-4 px-4 pt-6 pb-12 sm:pt-10 md:max-w-3xl"
	>
		<header class="flex flex-wrap items-center gap-2">
			<h1 class="me-auto text-2xl font-extrabold tracking-tight">{t.greeting}</h1>
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
				<span class={chip} title={t.daysToExam(profile.daysToExam)}>
					<CalendarClock size={16} class="text-brand" aria-hidden="true" />
					<span class="sr-only">{t.daysToExam(profile.daysToExam)}</span>
					<span aria-hidden="true">{t.daysShort(profile.daysToExam)}</span>
				</span>
			{/if}
		</header>

		{#if step}
			<NextStepCard {...step} />
		{/if}

		<div class="grid gap-4 md:grid-cols-2">
			{#each examRows as row, i (row.mod.id)}
				<div in:fly={enter(i + 1)}>
					<ExamsCard mod={row.mod} groupId={group.id} stats={row.exams} />
				</div>
			{/each}
			{#each deckRows as row, i (row.mod.id)}
				<div in:fly={enter(examRows.length + i + 1)}>
					<WordsCard mod={row.mod} groupId={group.id} />
				</div>
			{/each}
		</div>

		{#if pathRows.length}
			<h2 class="mt-2 px-1 text-sm font-bold text-muted">{t.pathsTitle}</h2>
			{#each pathRows as row, i (row.mod.id)}
				<div in:fly={enter(examRows.length + deckRows.length + i + 1)}>
					<ModuleCard
						mod={row.mod}
						groupId={group.id}
						sections={row.sections}
						defaultOpen={row.mod.id === mainModuleId}
					/>
				</div>
			{/each}
		{/if}
		{#if comingSoon.length}
			<p class="px-1 text-sm text-muted">{t.comingSoonModules(comingSoon.join(' · '))}</p>
		{/if}
	</main>
{/if}
