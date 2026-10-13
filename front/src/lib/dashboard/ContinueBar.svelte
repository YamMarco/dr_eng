<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { ClipboardCheck, Languages, Play } from '@lucide/svelte';
	import { modules } from '$lib/curriculum';
	import { deckToday } from '$lib/deck';
	import { i18n } from '$lib/i18n/index.svelte';
	import { roundsCompleted } from '$lib/lessonPath';
	import type { ContinueItem } from './data';

	// Home's top bar: one tap back into whatever the student did last, in any module.
	type Props = { item: ContinueItem; groupId: string };

	let { item, groupId }: Props = $props();

	let t = $derived(i18n.dict.home);
	let base = $derived(`/unit/${groupId}/module/${item.moduleId}`);
	let moduleLabel = $derived(`${i18n.dict.unit.modulePrefix} ${modules[item.moduleId].letter}`);

	let view = $derived.by(() => {
		if (item.kind === 'exam')
			return {
				icon: ClipboardCheck,
				title: i18n.title(item.quiz.id),
				sub: t.examMidway,
				href: `${base}/exam/${item.quiz.id}`
			};
		if (item.kind === 'words') {
			const today = deckToday(item.moduleId);
			return {
				icon: Languages,
				title: i18n.dict.deck.title,
				sub: i18n.dict.deck.sessionSize(today.reviews, today.fresh),
				href: `${base}/words`
			};
		}
		const done = roundsCompleted(item.lesson.id);
		const rounds = item.lesson.content.rounds.length;
		return {
			icon: Play,
			title: i18n.title(item.lesson.id),
			sub: rounds > 1 ? i18n.dict.lesson.roundLabel(Math.min(done + 1, rounds), rounds) : t.lessonNext,
			href: `${base}/lessons?lesson=${item.lesson.id}`
		};
	});
</script>

<!-- hrefs are runtime-built paths and query strings into module pages, not typed routes -->
<!-- eslint-disable svelte/no-navigation-without-resolve -->
<a
	href={view.href}
	in:fly={{ y: 8, duration: 250, easing: cubicOut }}
	class="flex items-center gap-3 rounded-2xl bg-surface p-3 shadow-md ring-1 shadow-overlay/5 ring-line/70 transition hover:shadow-lg active:scale-[0.99]"
>
	<span
		class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand"
	>
		<view.icon size={20} aria-hidden="true" />
	</span>
	<span class="flex min-w-0 flex-1 flex-col">
		<span class="text-xs font-semibold text-muted">{moduleLabel}</span>
		<span dir="auto" class="truncate font-bold [text-align:match-parent]">{view.title}</span>
		<span class="truncate text-xs text-muted">{view.sub}</span>
	</span>
	<span class="shrink-0 rounded-full bg-brand px-4 py-2 text-sm font-bold text-white">
		{t.todayContinue}
	</span>
</a>
<!-- eslint-enable svelte/no-navigation-without-resolve -->
