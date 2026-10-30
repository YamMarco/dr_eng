<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { MediaQuery } from 'svelte/reactivity';
	import { staggerDelay } from '$lib/motion';
	import {
		BookOpen,
		ClipboardCheck,
		Feather,
		Film,
		FolderOpen,
		Languages,
		MessagesSquare,
		Mic,
		PenLine,
		Play,
		User
	} from '@lucide/svelte';
	import type { Component } from 'svelte';
	import AppBar from '$lib/components/AppBar.svelte';
	import type { Skill } from '$lib/content';
	import { moduleDeckToday } from '$lib/deck';
	import { i18n } from '$lib/i18n/index.svelte';
	import { examStats } from '$lib/quiz/stats';
	import {
		examAdvice,
		lessonSubtitle,
		moduleRoute,
		moduleSkills,
		todayLesson
	} from '$lib/dashboard/data';
	import ExamNugget from '$lib/dashboard/ExamNugget.svelte';
	import HubRow from '$lib/dashboard/HubRow.svelte';
	import ProgressValue from '$lib/dashboard/ProgressValue.svelte';
	import { speakingSummary } from '$lib/takeHistory';
	import { chatCount } from '$lib/feedback/chatAi';
	import NextStepHero from '$lib/dashboard/NextStepHero.svelte';
	import type { PageProps } from './$types';

	// A module's page: everything about one Bagrut module, in the same order for
	// every module - the next step, then exams, vocabulary, reading, writing, speaking.
	let { data }: PageProps = $props();

	let mod = $derived(data.mod);
	let base = $derived(`/app/unit/${data.group.id}/module/${mod.id}`);
	let t = $derived(i18n.dict.home);
	// Touch-first device: writing is better on a computer.
	const phone = new MediaQuery('pointer: coarse');

	let route = $derived(moduleRoute(mod.id));
	let exams = $derived(examStats(mod.id));
	let advice = $derived(examAdvice(mod.id));
	let lesson = $derived(todayLesson(mod.id));
	let skills = $derived(moduleSkills(mod.id, route));
	const chats = chatCount();
	const speaking = speakingSummary();
	// COBE: a row per exam part (its lesson section), in path order.
	const partIcons = [User, FolderOpen, Film];

	// The one big card: an exam worth taking now, else the next lesson.
	let hero = $derived.by(() => {
		if (advice && exams.next)
			return {
				icon: ClipboardCheck,
				title: i18n.title(exams.next.id),
				sub: t.examReason[advice],
				cta:
					advice === 'resume'
						? i18n.dict.quizzes.resumeButton
						: exams.taken
							? t.examsNext
							: t.examsFirst,
				href: `${base}/exam/${exams.next.id}`
			};
		if (lesson)
			return {
				icon: Play,
				title: i18n.title(lesson.id),
				sub: lessonSubtitle(lesson, phone.current),
				cta: t.todayStart,
				href: `${base}/lessons?lesson=${lesson.id}`
			};
		return undefined;
	});

	const card =
		'flex flex-col rounded-3xl bg-surface p-1.5 shadow-md ring-1 shadow-overlay/5 ring-line/70';

	const skillIcon: Record<Skill, Component> = {
		vocab: Languages,
		reading: BookOpen,
		writing: PenLine,
		speaking: Mic,
		literature: Feather
	};

	function skillSub(skill: Skill, kind: 'engine' | 'path'): string | undefined {
		if (kind === 'engine') {
			const today = moduleDeckToday(mod.id);
			return today.reviews + today.fresh
				? i18n.dict.deck.sessionSize(today.reviews, today.fresh)
				: t.wordsDone;
		}
		return skill === 'writing' && phone.current ? t.desktopNote : undefined;
	}
</script>

<AppBar title="{i18n.dict.unit.modulePrefix} {mod.letter}" back="/app" />

<main class="app-col flex flex-1 flex-col gap-2.5 px-4 pt-3 pb-3 sm:gap-3 sm:pt-4 sm:pb-6">
	{#if hero}
		<NextStepHero {...hero} />
	{/if}

	<section in:fly={{ y: 12, duration: 300, delay: staggerDelay(1), easing: cubicOut }} class={card}>
		<HubRow
			icon={ClipboardCheck}
			title={t.examsTitle}
			sub={exams.total
				? exams.taken
					? t.examsSummary(exams.taken, exams.total, exams.best!)
					: t.examsOpen(exams.total)
				: t.examsSoonDesc}
			href={exams.total ? `${base}/exam` : undefined}
		>
			{#snippet trailing()}<ExamNugget {exams} />{/snippet}
		</HubRow>
	</section>

	{#if mod.id === 'cobe'}
		<!-- COBE: chat first, then the lessons by exam part in one card, then speaking practice. -->
		<div
			in:fly={{ y: 12, duration: 300, delay: staggerDelay(2), easing: cubicOut }}
			class="mt-2 flex flex-col gap-2.5 sm:gap-3"
		>
			<section class={card}>
				<HubRow
					icon={MessagesSquare}
					title={i18n.dict.chat.title}
					sub={chats ? i18n.dict.chat.rowCount(chats) : i18n.dict.chat.rowSub}
					href="{base}/chat"
				/>
			</section>
			<section class={card}>
				{#each route as part, i (part.id)}
					<HubRow
						icon={partIcons[i] ?? Mic}
						title={i18n.title(part.id, mod.id)}
						progress={part.total ? part.done / part.total : 0}
						href="{base}/lessons?section={part.id}"
					>
						{#snippet trailing()}
							<span class="shrink-0 text-end text-sm font-bold tabular"
								><ProgressValue p={part} /></span
							>
						{/snippet}
					</HubRow>
				{/each}
			</section>
			{#if speaking.questions}
				<section class={card}>
					<HubRow
						icon={Mic}
						title={t.skills.speaking}
						sub={i18n.dict.cobeReview.practiced(speaking.questions, speaking.reachedPercent)}
					/>
				</section>
			{/if}
			{@render pathLink()}
		</div>
	{:else}
		<div
			in:fly={{ y: 12, duration: 300, delay: staggerDelay(2), easing: cubicOut }}
			class="mt-2 flex flex-col gap-2.5 sm:gap-3"
		>
			<section class={card}>
				{#each skills as row (row.skill)}
					{@const { done, total } = row.progress}
					<HubRow
						icon={skillIcon[row.skill]}
						title={t.skills[row.skill]}
						sub={skillSub(row.skill, row.kind)}
						progress={total ? done / total : 0}
						href={row.kind === 'engine' ? `${base}/words` : `${base}/lessons?section=${row.section}`}
					>
						{#snippet trailing()}
							<span class="shrink-0 text-end text-sm font-bold tabular"
								><ProgressValue p={row.progress} /></span
							>
						{/snippet}
					</HubRow>
				{/each}
			</section>
			{@render pathLink()}
		</div>
	{/if}
</main>

{#snippet pathLink()}
	{#if route.length}
		<a
			href="{base}/lessons"
			class="px-2 py-1.5 text-center text-sm font-semibold text-brand hover:underline"
		>
			{t.toPath}
		</a>
	{/if}
{/snippet}
