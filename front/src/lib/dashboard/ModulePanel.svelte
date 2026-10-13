<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { MediaQuery } from 'svelte/reactivity';
	import { ChevronLeft, ClipboardCheck, Languages, Laptop, Play } from '@lucide/svelte';
	import type { Component } from 'svelte';
	import type { CurriculumModule } from '$lib/curriculum';
	import { deckToday, getDeck } from '$lib/deck';
	import { i18n } from '$lib/i18n/index.svelte';
	import { roundsCompleted } from '$lib/lessonPath';
	import type { ExamStats } from '$lib/quiz/stats';
	import { moduleLocation } from '$lib/moduleLocation.svelte';
	import { isWritingLesson, nextStep, todayLesson } from './data';

	// The open module's actions: its exams, the lesson to continue and today's
	// words. nextStep's reason (diagnostic, section done, ...) drives the exam's copy.
	type Props = { mod: CurriculumModule; groupId: string; exams: ExamStats; hasPath: boolean };

	let { mod, groupId, exams, hasPath }: Props = $props();

	type Action = {
		kind: 'exam' | 'lesson' | 'words';
		icon: Component;
		title: string;
		sub?: string;
		note?: string;
		cta: string;
		href: string;
	};

	let t = $derived(i18n.dict.home);
	let base = $derived(`/unit/${groupId}/module/${mod.id}`);
	// Touch-first device: a writing lesson gets a "better on a computer" note.
	const phone = new MediaQuery('pointer: coarse');

	let step = $derived(nextStep(mod.id));

	let examAction = $derived.by((): Action | undefined => {
		if (!exams.total) return undefined;
		const next = exams.next;
		const reason = step.kind === 'exam' ? step.reason : undefined;
		const summary = exams.taken ? t.examsSummary(exams.taken, exams.total, exams.best!) : undefined;
		return {
			kind: 'exam',
			icon: ClipboardCheck,
			title: t.examsTitle,
			sub: reason ? t.examReason[reason] : (summary ?? t.examReason.diagnostic),
			cta:
				reason === 'resume'
					? i18n.dict.quizzes.resumeButton
					: !exams.taken
						? t.examsFirst
						: next
							? t.examsNext
							: t.examsBeatBest,
			href: next ? `${base}/exam/${next.id}` : `${base}/exam`
		};
	});

	let lessonAction = $derived.by((): Action | undefined => {
		const lesson = todayLesson(mod.id);
		if (!lesson) return undefined;
		const done = roundsCompleted(lesson.id);
		const rounds = lesson.content.rounds.length;
		return {
			kind: 'lesson',
			icon: Play,
			title: i18n.title(lesson.id),
			sub: [
				done ? t.lessonMidway : t.lessonNext,
				rounds > 1 ? i18n.dict.lesson.roundLabel(Math.min(done + 1, rounds), rounds) : ''
			]
				.filter(Boolean)
				.join(' · '),
			note: phone.current && isWritingLesson(lesson) ? t.desktopNote : undefined,
			cta: done ? t.todayContinue : t.todayStart,
			href: `${base}/lessons?lesson=${lesson.id}`
		};
	});

	let wordsAction = $derived.by((): Action | undefined => {
		if (!getDeck(mod.id)) return undefined;
		const today = deckToday(mod.id);
		const has = today.reviews + today.fresh > 0;
		return {
			kind: 'words',
			icon: Languages,
			title: i18n.dict.deck.title,
			sub: has ? i18n.dict.deck.sessionSize(today.reviews, today.fresh) : t.wordsDone,
			cta: t.wordsCta,
			href: `${base}/words`
		};
	});

	// The exam is the module's big card. Without exams, a module not yet started
	// leads with its first lesson; once started, continuing is a small row (the
	// big "continue" lives in home's top bar).
	let started = $derived(!!moduleLocation.get(mod.id));
	let primaryKind = $derived(examAction ? 'exam' : started ? undefined : 'lesson');
	let actions = $derived([examAction, lessonAction, wordsAction].filter((a) => !!a));
	let primary = $derived(actions.find((a) => a.kind === primaryKind));
	let rows = $derived(actions.filter((a) => a !== primary));
</script>

<!-- hrefs are runtime-built paths and query strings into module pages, not typed routes -->
<!-- eslint-disable svelte/no-navigation-without-resolve -->
<section
	in:fly={{ y: 8, duration: 220, easing: cubicOut }}
	class="flex flex-col gap-2 rounded-3xl bg-surface p-3 shadow-md ring-1 shadow-overlay/5 ring-line/70"
>
	{#if primary}
		<div class="flex flex-col gap-3 rounded-2xl bg-brand p-4 text-white">
			<div class="flex items-start gap-3">
				<primary.icon size={22} class="mt-0.5 shrink-0" aria-hidden="true" />
				<div class="flex min-w-0 flex-col gap-0.5">
					<h2 class="font-extrabold">{primary.title}</h2>
					{#if primary.sub}<p class="text-sm leading-snug text-white/85">{primary.sub}</p>{/if}
					{#if primary.note}
						<p class="mt-1 flex items-center gap-1.5 text-sm text-white/85">
							<Laptop size={15} aria-hidden="true" />{primary.note}
						</p>
					{/if}
				</div>
			</div>
			<a
				href={primary.href}
				class="flex min-h-11 items-center justify-center rounded-full bg-white px-6 font-bold text-brand-dark shadow-sm transition active:scale-[0.98]"
			>
				{primary.cta}
			</a>
		</div>
	{/if}

	{#each rows as row (row.kind)}
		<a
			href={row.href}
			class="flex min-h-14 items-center gap-3 rounded-2xl px-3 py-2 transition hover:bg-brand-soft/60 active:scale-[0.99]"
		>
			<span
				class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand"
			>
				<row.icon size={18} aria-hidden="true" />
			</span>
			<span class="flex min-w-0 flex-1 flex-col">
				<span class="truncate text-sm font-bold">{row.title}</span>
				{#if row.sub}<span class="truncate text-xs text-muted">{row.sub}</span>{/if}
			</span>
			<ChevronLeft size={18} class="shrink-0 text-muted" aria-hidden="true" />
		</a>
	{/each}

	{#if hasPath}
		<a
			href="{base}/lessons"
			class="self-end px-3 py-1 text-sm font-semibold text-brand hover:underline"
		>
			{t.toPath}
		</a>
	{/if}
</section>
<!-- eslint-enable svelte/no-navigation-without-resolve -->
