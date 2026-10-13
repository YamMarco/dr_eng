<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { Laptop } from '@lucide/svelte';
	import LessonProgressBar from '$lib/components/LessonProgressBar.svelte';
	import { i18n } from '$lib/i18n/index.svelte';

	// The one thing to do now - the home page decides what it is.
	type Props = {
		title: string;
		desc?: string;
		cta: string;
		href: string;
		/** Rounds played so far, for a multi-round lesson. */
		rounds?: { done: number; total: number };
		/** Shown on a phone for a step that's better done on a computer. */
		desktopNote?: string;
		/** A phone-friendly alternative to the step. */
		alt?: { label: string; href: string };
	};

	let { title, desc, cta, href, rounds, desktopNote, alt }: Props = $props();
</script>

<!-- hrefs are runtime-built query strings into module pages, not typed routes -->
<!-- eslint-disable svelte/no-navigation-without-resolve -->
<section
	in:fly={{ y: 12, duration: 300, easing: cubicOut }}
	class="flex flex-col gap-3 rounded-3xl bg-brand p-5 text-white shadow-md"
>
	<span class="text-xs font-semibold text-white/80">{i18n.dict.home.todayTitle}</span>
	<div class="flex flex-col gap-1">
		<h2 dir="auto" class="text-xl font-extrabold [text-align:match-parent]">{title}</h2>
		{#if desc}<p class="text-sm leading-relaxed text-white/85">{desc}</p>{/if}
	</div>
	{#if rounds && rounds.total > 1}
		<LessonProgressBar
			compact
			inverted
			segments={Array.from({ length: rounds.total }, () => 1)}
			current={rounds.done}
			label={i18n.dict.lesson.roundLabel(Math.min(rounds.done + 1, rounds.total), rounds.total)}
		/>
	{/if}
	{#if desktopNote}
		<p class="flex items-center gap-2 text-sm text-white/85">
			<Laptop size={16} aria-hidden="true" />
			{desktopNote}
		</p>
	{/if}
	<div class="flex flex-wrap items-center gap-3">
		<a
			{href}
			class="flex min-h-11 items-center rounded-full bg-white px-6 font-bold text-brand-dark shadow-sm transition active:scale-95"
		>
			{cta}
		</a>
		{#if alt}
			<a href={alt.href} class="text-sm font-semibold text-white underline underline-offset-4">
				{alt.label}
			</a>
		{/if}
	</div>
</section>
<!-- eslint-enable svelte/no-navigation-without-resolve -->
