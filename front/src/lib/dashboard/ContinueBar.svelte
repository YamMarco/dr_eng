<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { MediaQuery } from 'svelte/reactivity';
	import { BookOpen, ChevronLeft, ClipboardCheck, Languages, Play } from '@lucide/svelte';
	import { modules } from '$lib/curriculum';
	import { deckToday } from '$lib/deck';
	import { i18n } from '$lib/i18n/index.svelte';
	import { continueHref, lessonSubtitle, type ContinueItem } from './data';

	// Home's top bar: one tap back into whatever the student did last, in any module.
	type Props = { item: ContinueItem; groupId: string };

	let { item, groupId }: Props = $props();

	let t = $derived(i18n.dict.home);
	let moduleLabel = $derived(`${i18n.dict.unit.modulePrefix} ${modules[item.moduleId].letter}`);
	const phone = new MediaQuery('pointer: coarse');

	let view = $derived.by(() => {
		if (item.kind === 'exam')
			return { icon: ClipboardCheck, title: i18n.title(item.quiz.id), sub: t.examMidway };
		if (item.kind === 'words') {
			const today = deckToday(item.moduleId);
			return {
				icon: Languages,
				title: i18n.dict.deck.title,
				sub: i18n.dict.deck.sessionSize(today.reviews, today.fresh)
			};
		}
		return {
			icon: BookOpen,
			title: i18n.title(item.lesson.id),
			sub: lessonSubtitle(item.lesson, phone.current)
		};
	});
</script>

<!-- hrefs are runtime-built paths and query strings into module pages, not typed routes -->
<!-- eslint-disable svelte/no-navigation-without-resolve -->
<a
	href={continueHref(item, groupId)}
	in:fly={{ y: 8, duration: 250, easing: cubicOut }}
	class="group flex items-center gap-3 rounded-[26px] bg-overlay py-2 ps-2 pe-4 text-white shadow-lg ring-1 ring-brand/50 transition hover:shadow-xl active:scale-[0.99] lg:gap-5 lg:rounded-3xl lg:p-5"
>
	<span
		class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand text-white lg:h-14 lg:w-14"
	>
		<Play size={20} fill="currentColor" aria-hidden="true" />
	</span>
	<span class="flex min-w-0 flex-1 flex-col">
		<span dir="auto" class="truncate [text-align:match-parent] leading-snug font-bold lg:text-xl"
			>{view.title}</span
		>
		<span class="flex items-center gap-1.5 text-xs text-white/70 lg:text-sm">
			<view.icon size={12} class="shrink-0" aria-hidden="true" />
			<span class="truncate">{moduleLabel} · {view.sub}</span>
		</span>
	</span>
	<span
		class="hidden min-h-11 shrink-0 items-center gap-1 rounded-full bg-brand ps-6 pe-4 font-bold text-white transition group-hover:bg-brand-dark lg:flex"
	>
		{t.continueCta}
		<ChevronLeft size={18} aria-hidden="true" />
	</span>
</a>
<!-- eslint-enable svelte/no-navigation-without-resolve -->
