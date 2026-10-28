<script lang="ts">
	import { fade, scale } from 'svelte/transition';
	import { backOut } from 'svelte/easing';
	import Button from '$lib/components/Button.svelte';
	import Confetti from '$lib/components/Confetti.svelte';
	import StreakFlame from './StreakFlame.svelte';
	import { activity, WEEKLY_GOAL } from '$lib/activity.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import { lockScroll } from '$lib/scrollLock';
	import { reducedMotion } from '$lib/motion';
	import { Flame } from '@lucide/svelte';

	// The day's first practice: the flame ignites, the day count rolls up and
	// today's dot fills in. Shown once a day, over whatever screen finished it.
	let t = $derived(i18n.dict.streakModal);
	let weekT = $derived(i18n.dict.streak);
	let streak = $derived(activity.streak);
	let days = $derived(activity.daysThisWeek);

	$effect(() => {
		if (activity.celebrating) return lockScroll();
	});

	const close = () => (activity.celebrating = false);

	// A new streak: the unlit flame catches fire a beat after the modal opens.
	// A continued one: the burning flame grows and flares instead.
	const LIGHT_DELAY = 450;
	let lit = $state(false);
	$effect(() => {
		if (!activity.celebrating) return void (lit = false);
		const id = setTimeout(() => (lit = true), reducedMotion ? 0 : LIGHT_DELAY);
		return () => clearTimeout(id);
	});

	// Fixed for the modal's lifetime, not reactive state.
	const today = new Date();
	const thisWeek = Array.from({ length: 7 }, (_, d) => {
		// eslint-disable-next-line svelte/prefer-svelte-reactivity
		const date = new Date(today);
		date.setDate(today.getDate() - today.getDay() + d);
		return date;
	});
</script>

<svelte:window onkeydown={(e) => activity.celebrating && e.key === 'Escape' && close()} />

{#if activity.celebrating}
	<div class="fixed inset-0 z-50 flex items-center justify-center p-4">
		<button
			type="button"
			aria-label={i18n.dict.common.close}
			class="absolute inset-0 bg-overlay/50"
			onclick={close}
			transition:fade={{ duration: 150 }}
		></button>

		<div
			role="dialog"
			aria-modal="true"
			aria-labelledby="streak-title"
			class="relative flex w-full max-w-sm flex-col items-center gap-4 rounded-3xl bg-surface px-6 pt-8 pb-6 text-center shadow-xl"
			transition:scale={{ start: 0.85, duration: 300, easing: backOut }}
		>
			<Confetti />
			<div class="relative flex h-24 w-24 items-center justify-center">
				{#if streak > 1}
					<span class="grow">
						<StreakFlame {days} goal={WEEKLY_GOAL} size={96} ignite={false} />
					</span>
				{:else if lit}
					<StreakFlame days={1} goal={WEEKLY_GOAL} size={96} ignite />
				{:else}
					<span out:fade={{ duration: 150 }} class="absolute">
						<Flame size={80} class="text-muted" aria-hidden="true" />
					</span>
				{/if}
			</div>

			<div class="flex flex-col items-center">
				<span
					class="inline-block h-[1em] overflow-hidden text-6xl leading-none font-black text-orange-500"
					dir="ltr"
					aria-hidden="true"
				>
					<span class="roll flex flex-col">
						<span>{streak - 1}</span>
						<span>{streak}</span>
					</span>
				</span>
				<span class="mt-1 text-sm font-bold text-muted">{t.days(streak)}</span>
			</div>

			<div class="flex flex-col gap-1">
				<h2 id="streak-title" class="text-2xl font-extrabold">
					<span class="sr-only">{streak} {t.days(streak)}.</span>
					{streak === 1 ? t.started : t.continued}
				</h2>
				<p class="text-muted">{streak === 1 ? t.startedSub : t.continuedSub}</p>
			</div>

			<ol class="flex w-full justify-between gap-1">
				{#each thisWeek as date, d (d)}
					{@const done = activity.practiced(date)}
					{@const isToday = d === today.getDay()}
					<li class="flex flex-1 flex-col items-center gap-1 text-xs text-muted">
						<span
							class="flex h-8 w-8 items-center justify-center rounded-full text-white {done
								? 'bg-orange-400'
								: 'bg-line/60'}"
							class:today-pop={isToday}
							aria-hidden="true"
						>
							{#if done}✓{/if}
						</span>
						<span class={isToday ? 'font-bold text-ink' : ''}>{weekT.weekDays[d]}</span>
					</li>
				{/each}
			</ol>
			<p class="text-sm font-bold {days >= WEEKLY_GOAL ? 'text-brand-dark' : 'text-muted'}">
				{days >= WEEKLY_GOAL ? weekT.goalMet : weekT.thisWeek(days, WEEKLY_GOAL)}
			</p>

			<Button onclick={close}>{t.cta}</Button>
		</div>
	</div>
{/if}

<style>
	/* The old count rolls up and out as the new one rolls in, after the flame lights. */
	.roll {
		animation: roll 450ms cubic-bezier(0.3, 1.4, 0.5, 1) 650ms both;
	}
	@keyframes roll {
		from {
			transform: translateY(0);
		}
		to {
			transform: translateY(-50%);
		}
	}
	/* A continued streak: the flame swells, flares and settles bigger. */
	.grow {
		display: block;
		transform-origin: 50% 90%;
		animation: grow 900ms cubic-bezier(0.3, 1.5, 0.5, 1) 300ms both;
	}
	@keyframes grow {
		0% {
			transform: scale(0.6);
		}
		55% {
			transform: scale(1.3);
			filter: drop-shadow(0 0 12px rgb(251 146 60 / 0.9));
		}
		100% {
			transform: scale(1);
		}
	}
	/* Today's dot fills in with a pop, right after the count. */
	.today-pop {
		animation: today-pop 400ms cubic-bezier(0.3, 1.6, 0.5, 1) 1000ms both;
	}
	@keyframes today-pop {
		from {
			transform: scale(0);
		}
		to {
			transform: scale(1);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.roll {
			animation: none;
			transform: translateY(-50%);
		}
		.today-pop,
		.grow {
			animation: none;
		}
	}
</style>
