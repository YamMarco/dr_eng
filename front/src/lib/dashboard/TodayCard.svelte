<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import LessonProgressBar from '$lib/components/LessonProgressBar.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import type { LessonNode } from '$lib/content';

	// The one thing to do now. With no lesson left it points at the exam.
	type Props = {
		lesson: LessonNode | undefined;
		roundsCompleted: number;
		href: string;
	};

	let { lesson, roundsCompleted, href }: Props = $props();

	let totalRounds = $derived(lesson?.content.rounds.length ?? 0);
	let t = $derived(i18n.dict.home);
</script>

<!-- href is a runtime-built query string into the lessons page, not a typed route -->
<!-- eslint-disable svelte/no-navigation-without-resolve -->
<a
	{href}
	in:fly={{ y: 12, duration: 300, easing: cubicOut }}
	class="flex items-center gap-3 rounded-3xl bg-brand p-4 text-white shadow-md transition duration-150 hover:shadow-lg active:scale-[0.99]"
>
	<span class="flex min-w-0 flex-1 flex-col gap-1">
		<span class="text-xs font-semibold text-white/80">{t.todayTitle}</span>
		<span class="truncate text-lg font-bold">
			{lesson ? i18n.title(lesson.id) : t.allDoneTitle}
		</span>
		{#if !lesson}
			<span class="text-sm text-white/80">{t.allDoneDesc}</span>
		{:else if totalRounds > 1}
			<LessonProgressBar
				compact
				inverted
				segments={Array.from({ length: totalRounds }, () => 1)}
				current={roundsCompleted}
				label={i18n.dict.lesson.roundLabel(Math.min(roundsCompleted + 1, totalRounds), totalRounds)}
			/>
		{/if}
	</span>
	<span class="shrink-0 rounded-full bg-white/20 px-4 py-2 text-sm font-bold">
		{!lesson ? t.toExams : roundsCompleted > 0 ? t.todayContinue : t.todayStart}
	</span>
</a>
<!-- eslint-enable svelte/no-navigation-without-resolve -->
