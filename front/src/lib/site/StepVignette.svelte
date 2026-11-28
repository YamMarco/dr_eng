<script lang="ts">
	import { Check, Timer } from '@lucide/svelte';
	import { prefersReducedMotion } from 'svelte/motion';
	import { fade } from 'svelte/transition';
	import { i18n } from '$lib/i18n/index.svelte';

	// The small product still on each "how it works" card. CSS animations play once the card
	// scrolls in (paused under [data-reveal='hidden'] in site.css). The exam clock and the
	// feedback answers tick in script; reduced motion keeps them still. Decorative: each
	// card says it in words.
	let { step }: { step: number } = $props();
	let t = $derived(i18n.dict.site.home.vignette);

	/** Seconds since the card mounted (the clock, the feedback cycle). */
	let elapsed = $state(0);
	let still = $derived(prefersReducedMotion.current);
	$effect(() => {
		if (step < 2 || still) return;
		const id = setInterval(() => elapsed++, 1000);
		return () => clearInterval(id);
	});

	// Card 3: counts down from 41:07; a question every 5 seconds, 6 to 9 and around again.
	const EXAM_START = 41 * 60 + 7;
	let left = $derived(EXAM_START - elapsed);
	let clock = $derived(`${Math.floor(left / 60)}:${String(left % 60).padStart(2, '0')}`);
	let question = $derived(6 + (Math.floor(elapsed / 5) % 4));

	// Card 4: a new answer every 4 seconds; still: the half-right one (the most telling).
	let answer = $derived(still ? 1 : Math.floor(elapsed / 4) % 3);

	// Card 2: memory falls, each review lifts it back, and it falls slower each time.
	const REVIEWS = [30, 68, 116, 180];
	const CURVE =
		'M4 8 Q12 40 30 46 L30 8 Q42 36 68 44 L68 8 Q86 30 116 41 L116 8 Q140 24 180 36 L180 8 Q190 12 198 16';
</script>

<div class="flex h-52 flex-col justify-center gap-2 rounded-2xl bg-canvas p-4" aria-hidden="true">
	{#if step === 0}
		<!-- Explanation, then the practice right under it, then the lesson moves on. -->
		<p class="m-step m-step-1 flex items-center gap-2 text-sm">
			<span class="rounded-full bg-accent-soft px-2 py-0.5 text-xs font-bold">{t.tipLabel}</span>
			<span dir="ltr" class="font-bold">{t.tipWord}</span>
			<span class="text-muted">=</span>
			<span>{t.tipMeaning}</span>
		</p>
		<div class="m-step m-step-2 flex flex-col gap-1.5">
			<p dir="ltr" class="text-start text-sm font-bold">{t.question}</p>
			<div dir="ltr" class="flex gap-1.5">
				{#each t.options as option, i (option)}
					<span
						class="relative flex flex-1 items-center justify-center gap-1 rounded-xl bg-surface px-2 py-1.5 text-xs ring-1 ring-line"
					>
						{#if i === 0}
							<span
								class="m-step m-step-3 absolute inset-0 rounded-xl bg-brand-soft ring-2 ring-brand"
							></span>
						{/if}
						<span class="relative {i === 0 ? 'font-semibold text-brand-dark' : ''}">{option}</span>
						{#if i === 0}<Check size={12} class="m-step m-step-3 relative text-brand-dark" />{/if}
					</span>
				{/each}
			</div>
		</div>
		<div class="flex items-center gap-2 pt-1">
			<span class="text-xs font-semibold text-muted">{t.lessonProgress}</span>
			<span class="flex flex-1 gap-1">
				{#each Array.from({ length: 5 }, (_, i) => i) as segment (segment)}
					<span class="h-1.5 flex-1 overflow-hidden rounded-full bg-line">
						{#if segment < 2}
							<span class="block h-full bg-brand"></span>
						{:else if segment === 2}
							<span class="m-step m-step-4 block h-full bg-brand"></span>
						{/if}
					</span>
				{/each}
			</span>
		</div>
	{:else if step === 1}
		<!-- The word, and its memory curve: a review just before it drops past forgetting. -->
		<p class="flex items-baseline gap-2">
			<span dir="ltr" class="text-lg font-extrabold">{t.cardWord}</span>
			<span class="text-sm text-muted">{t.cardMeaning}</span>
		</p>
		<!-- Review days sit over their dots; "forgotten" under the line, before the first dip. -->
		<div dir="ltr" class="relative h-4 text-[0.65rem] font-semibold text-brand-dark">
			{#each REVIEWS as x, i (x)}
				<span
					class="absolute -translate-x-1/2 whitespace-nowrap"
					style="left: {(x / 200) * 100}%"
					dir="rtl">{t.reviewDays[i]}</span
				>
			{/each}
		</div>
		<div dir="ltr" class="relative pb-3">
			<svg viewBox="0 0 200 60" class="block h-auto w-full overflow-visible">
				<line
					x1="0"
					y1="52"
					x2="200"
					y2="52"
					class="stroke-miss/50"
					stroke-width="1"
					stroke-dasharray="3 3"
				/>
				<path
					d={CURVE}
					pathLength="1"
					fill="none"
					class="vig-draw stroke-brand"
					stroke-width="2.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				{#each REVIEWS as x, i (x)}
					<circle
						cx={x}
						cy="8"
						r="4"
						class="vig-dot fill-brand stroke-canvas"
						stroke-width="2"
						style="animation-delay: {400 + i * 450}ms; transform-origin: {x}px 8px"
					/>
				{/each}
			</svg>
			<span
				dir="rtl"
				class="absolute top-[78%] left-0 text-[0.65rem] font-semibold whitespace-nowrap text-miss"
				>{t.forget}</span
			>
		</div>
	{:else if step === 2}
		<div class="flex items-center justify-between text-xs font-semibold text-muted">
			<span>{t.timerLabel}</span>
			<span class="tabular-nums">{t.timerQuestion(question)}</span>
		</div>
		<div class="flex items-center gap-3">
			<span
				class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-overlay text-white"
			>
				<Timer size={22} class="vig-tick" />
			</span>
			<span dir="ltr" class="text-4xl font-black tracking-tight tabular-nums">{clock}</span>
		</div>
		<span class="flex gap-1" dir="ltr">
			{#each Array.from({ length: 9 }, (_, i) => i) as q (q)}
				<span
					class="h-2 flex-1 rounded-full transition-colors duration-500 {q < question - 1
						? 'bg-brand'
						: q === question - 1
							? 'bg-brand/40'
							: 'bg-line'}"
				></span>
			{/each}
		</span>
	{:else}
		<!-- One open question, three answers in turn, each with the feedback it earns. -->
		{@const item = t.feedbackAnswers[answer]}
		{@const full = answer === t.feedbackAnswers.length - 1}
		<p dir="ltr" class="text-start text-xs leading-snug font-bold">{t.feedbackQuestion}</p>
		{#key answer}
			<div class="flex flex-col gap-1.5" in:fade={{ duration: still ? 0 : 250 }}>
				<p
					dir="ltr"
					class="rounded-xl bg-surface px-3 py-1.5 text-start text-sm leading-snug ring-1 ring-line"
				>
					{item.answer}
				</p>
				<div
					class="flex items-start gap-2 rounded-xl p-2.5 text-xs leading-snug text-ink {full
						? 'bg-brand-soft'
						: 'bg-miss-soft'}"
				>
					<span
						dir="ltr"
						class="flex shrink-0 items-center gap-0.5 font-black tabular-nums {full
							? 'text-brand-dark'
							: 'text-miss'}"
					>
						{#if full}<Check size={12} />{/if}
						{item.score}
					</span>
					<span>{item.note}</span>
				</div>
			</div>
		{/key}
		<span class="flex justify-center gap-1">
			{#each t.feedbackAnswers as entry, i (entry.score)}
				<span
					class="h-1.5 rounded-full transition-[width,background-color] duration-300 {i === answer
						? 'w-4 bg-brand'
						: 'w-1.5 bg-line'}"
				></span>
			{/each}
		</span>
	{/if}
</div>
