<script lang="ts">
	import AnswerMark from './AnswerMark.svelte';
	import { untrack } from 'svelte';
	import { fly } from 'svelte/transition';
	import Md from '$lib/components/Md.svelte';
	import { staggerDelay } from '$lib/motion';
	import type { MatchDefinitionsScreen } from './types';
	import ExerciseKindBadge from './ExerciseKindBadge.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import { getLessonScore, recordAnswer } from './score.svelte';
	import { getScreenMode } from './mode.svelte';
	import { getQuizAnswerSlot } from '$lib/quiz/answers.svelte';

	const mode = getScreenMode();
	const score = mode === 'lesson' ? getLessonScore() : undefined;
	const answerSlot = mode === 'quiz' ? getQuizAnswerSlot() : undefined;

	let {
		screen,
		onAdvance = () => {},
		// eslint-disable-next-line no-useless-assignment
		disabled = $bindable(true),
		// eslint-disable-next-line no-useless-assignment
		label = $bindable(''),
		review
	}: {
		screen: MatchDefinitionsScreen;
		onAdvance?: () => void;
		disabled?: boolean;
		label?: string;
		/** Read-only, already checked, showing these picks (exam practice / report). */
		review?: (number | null)[];
	} = $props();

	// picks[d] = the item index written next to definition d (null = empty).
	// The exam's own layout: numbered items, definitions with a blank each.
	const restored = untrack(() =>
		mode === 'quiz' && !review ? (answerSlot!.get() as (number | null)[] | undefined) : undefined
	);
	let picks = $state<(number | null)[]>(
		untrack(() => review ?? restored ?? screen.definitions.map(() => null))
	);
	let active = $state(0);
	let checked = $state(untrack(() => !!review));

	// eslint-disable-next-line no-useless-assignment
	label = i18n.dict.exerciseKind.submitButton;
	// eslint-disable-next-line no-useless-assignment
	disabled = untrack(() => picks.some((p) => p === null));

	function choose(item: number) {
		if (checked) return;
		// An item is written next to one definition at most: move it if reused.
		picks = picks.map((p, d) => (d === active ? item : p === item ? null : p));
		const nextEmpty = picks.findIndex((p) => p === null);
		if (nextEmpty !== -1) active = nextEmpty;
		disabled = nextEmpty !== -1;
	}

	function focus(d: number) {
		if (checked) return;
		active = d;
	}

	export function primaryAction() {
		if (picks.some((p) => p === null)) return;
		if (mode === 'quiz') {
			answerSlot!.set(picks);
			onAdvance();
			return;
		}
		if (!checked) {
			checked = true;
			// One answer per definition, in order - the deck reads them per word.
			screen.definitions.forEach((d, i) => recordAnswer(score!, picks[i] === d.itemIndex));
			label = i18n.dict.lesson.nextQuestionButton;
		} else {
			onAdvance();
		}
	}
</script>

{#if mode === 'lesson' && !review}
	<ExerciseKindBadge label={i18n.dict.exerciseKind.matchDefinitions} />
	<p class="mt-1 text-sm text-muted">{i18n.dict.exerciseKind.matchDefinitionsHint}</p>
{/if}

<div class="mt-4 flex flex-col gap-2" dir="ltr" lang="en">
	{#each screen.definitions as definition, d (d)}
		{@const pick = picks[d]}
		{@const right = checked && pick === definition.itemIndex}
		{@const wrong = checked && pick !== definition.itemIndex}
		<button
			type="button"
			onclick={() => focus(d)}
			disabled={checked}
			aria-pressed={checked ? undefined : active === d}
			class="flex items-center gap-3 rounded-2xl border-2 px-3 py-3 text-start transition {wrong
				? `border-miss bg-miss-soft ${review ? '' : 'motion-safe:animate-shake-wrong'}`
				: right
					? `border-brand bg-brand-soft ${review ? '' : 'motion-safe:animate-pop-correct'}`
					: active === d
						? 'border-brand bg-brand-soft/40'
						: 'border-line bg-surface'}"
		>
			<span
				class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg font-extrabold {pick ===
				null
					? 'border-2 border-dashed border-line text-muted'
					: wrong
						? 'bg-miss text-white'
						: 'bg-brand text-white'}"
			>
				{pick === null ? '' : pick + 1}
			</span>
			<span class="leading-snug font-semibold">
				{definition.text}
				{#if wrong}
					<span class="mt-1 block text-sm font-bold text-brand-dark">
						{definition.itemIndex + 1}. {screen.items[definition.itemIndex]}
					</span>
				{/if}
			</span>
			{#if checked}<span class="ms-auto"><AnswerMark {right} /></span>{/if}
		</button>
		{#if checked && definition.feedback}
			<div
				lang="he"
				in:fly={{ y: 8, duration: 240, delay: staggerDelay(d) }}
				class="-mt-1 rounded-2xl bg-accent-soft p-3 text-sm leading-relaxed font-normal"
			>
				<Md block text={definition.feedback} />
			</div>
		{/if}
	{/each}
</div>

<div class="mt-5 grid grid-cols-2 gap-2" dir="ltr" lang="en">
	{#each screen.items as item, i (i)}
		{@const used = picks.includes(i)}
		<button
			type="button"
			onclick={() => choose(i)}
			disabled={checked}
			class="flex items-center gap-2 rounded-2xl border-2 px-3 py-2.5 text-start font-semibold transition active:scale-[0.97] {used
				? 'border-brand/40 bg-brand-soft/40 text-ink/60'
				: 'border-line bg-surface hover:border-brand'}"
		>
			<span class="text-sm font-extrabold text-muted tabular">{i + 1}.</span>
			<span class="min-w-0">
				{item}
				{#if checked && screen.itemGlosses?.[i]}
					<span class="block text-sm font-normal text-muted" dir="rtl" lang="he"
						>{screen.itemGlosses[i]}</span
					>
				{/if}
			</span>
		</button>
	{/each}
</div>
