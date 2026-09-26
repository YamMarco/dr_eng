<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { modules, unitGroups } from '$lib/curriculum';
	import { i18n } from '$lib/i18n/index.svelte';
	import { staggerDelay } from '$lib/motion';
	import { moduleLocation } from '$lib/moduleLocation.svelte';
	import { lessonProgress } from '$lib/lessonProgress.svelte';
	import { getLesson } from '$lib/content';
	import LessonProgressBar from '$lib/components/LessonProgressBar.svelte';

	function letters(moduleIds: string[]) {
		return moduleIds.map((id) => modules[id].letter.toUpperCase()).join(' · ');
	}

	// The single most recently opened lesson, across every module - lets a
	// returning student resume in one tap instead of re-choosing unit/module.
	let continueInfo = $derived.by(() => {
		const recent = moduleLocation.mostRecent();
		if (!recent) return undefined;
		const lesson = getLesson(recent.lessonId);
		const group = unitGroups.find((g) => g.moduleIds.includes(recent.moduleId));
		if (!lesson || !group) return undefined;
		return {
			lesson,
			href: `/unit/${group.id}/module/${recent.moduleId}/lessons?lesson=${lesson.id}`,
			roundsCompleted: lessonProgress.completedRounds(recent.moduleId, lesson.id),
			totalRounds: lesson.content.rounds.length
		};
	});
</script>

<main class="mx-auto w-full max-w-lg flex-1 px-4 pt-10 pb-12 sm:pt-14">
	<div class="mb-8">
		<span
			class="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-3 py-1 text-sm font-semibold text-ink/70"
		>
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="h-4 w-4"
				aria-hidden="true"
			>
				<path d="M12 3 3 8l9 5 9-5-9-5Z" />
				<path d="M21 8v6" />
				<path d="M7 10.5V16c0 1.1 2.2 2.5 5 2.5s5-1.4 5-2.5v-5.5" />
			</svg>
			{i18n.dict.home.badge}
		</span>

		<h1 class="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">{i18n.dict.home.title}</h1>
		<p class="mt-2 leading-relaxed text-muted">{i18n.dict.home.subtitle}</p>
	</div>

	{#if continueInfo}
		<!-- continueInfo.href is a runtime-built query string into the lessons
		     page, not a typed route -->
		<!-- eslint-disable svelte/no-navigation-without-resolve -->
		<a
			href={continueInfo.href}
			in:fly={{ y: 12, duration: 300, easing: cubicOut }}
			class="mb-6 flex flex-col gap-3 rounded-3xl bg-brand p-5 text-white shadow-md transition duration-150 hover:shadow-lg active:scale-[0.99]"
		>
			<span class="text-sm font-semibold text-white/80">{i18n.dict.home.continueTitle}</span>
			<span class="flex items-center justify-between gap-3">
				<span class="min-w-0 flex-1">
					<span class="block truncate text-lg font-bold">{continueInfo.lesson.titleHe}</span>
					{#if continueInfo.totalRounds > 1}
						<span class="mt-1 block text-sm text-white/80" dir="ltr">
							{i18n.dict.lesson.roundLabel(
								Math.min(continueInfo.roundsCompleted + 1, continueInfo.totalRounds),
								continueInfo.totalRounds
							)}
						</span>
					{/if}
				</span>
				<span class="shrink-0 rounded-full bg-white/20 px-4 py-2 text-sm font-bold active:scale-95">
					{i18n.dict.home.continueButton}
				</span>
			</span>
			<LessonProgressBar
				compact
				segments={Array.from({ length: continueInfo.totalRounds }, () => 1)}
				current={continueInfo.roundsCompleted}
			/>
		</a>
		<!-- eslint-enable svelte/no-navigation-without-resolve -->
	{/if}

	<ul class="flex flex-col gap-4">
		{#each unitGroups as group, i (group.id)}
			<li in:fly={{ y: 12, duration: 300, delay: staggerDelay(i), easing: cubicOut }}>
				<a
					href="/unit/{group.id}"
					class="group flex items-center gap-4 rounded-3xl bg-surface p-5 shadow-md ring-1 shadow-overlay/5 ring-line/70 transition duration-150 hover:shadow-lg active:scale-[0.99]"
				>
					<span
						class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-soft text-2xl font-extrabold text-brand-dark"
						dir="ltr"
					>
						{group.units}
					</span>

					<span class="min-w-0 flex-1">
						<span class="text-xl font-bold">{group.units} {i18n.dict.home.unitsSuffix}</span>
						<span class="mt-1 block text-sm leading-relaxed text-muted" dir="ltr">
							{#if group.moduleIds.length}
								{letters(group.moduleIds)}
							{:else}
								{i18n.dict.common.comingSoon}
							{/if}
						</span>
					</span>

					<svg
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="h-5 w-5 shrink-0 text-muted transition group-hover:text-brand rtl:rotate-180"
						aria-hidden="true"
					>
						<path d="m9 18 6-6-6-6" />
					</svg>
				</a>
			</li>
		{/each}
	</ul>
</main>
