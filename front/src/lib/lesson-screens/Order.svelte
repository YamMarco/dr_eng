<script lang="ts">
	import { untrack } from 'svelte';
	import type { OrderScreen } from './types';
	import { isOrderCorrect } from './types';
	import Md from '$lib/components/Md.svelte';
	import ExerciseKindBadge from './ExerciseKindBadge.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import { getLessonScore, recordAnswer } from './score.svelte';
	import { getScreenMode } from './mode.svelte';
	import { getQuizAnswerSlot } from '$lib/quiz/answers.svelte';
	import { shuffle } from './shuffle';
	import ListenCard from './ListenCard.svelte';

	const mode = getScreenMode();
	const score = mode === 'lesson' ? getLessonScore() : undefined;
	const answerSlot = mode === 'quiz' ? getQuizAnswerSlot() : undefined;

	let {
		screen,
		onAdvance,
		// eslint-disable-next-line no-useless-assignment
		disabled = $bindable(true),
		// eslint-disable-next-line no-useless-assignment
		label = $bindable('')
	}: {
		screen: OrderScreen;
		onAdvance: () => void;
		disabled?: boolean;
		label?: string;
	} = $props();

	// Two or more tiles that end a sentence = ordering sentences / events: they
	// stack as numbered lines. Else they are the words of one sentence, inline.
	// The runner remounts per screen, so the first `screen` is the only one.
	const tiles = untrack(() => screen.tiles);
	const lines = tiles.filter((t) => /[.!?]["']?$/.test(t.trim())).length > 1;
	const bank = shuffle(tiles.map((_, i) => i));

	// Revisiting via the quiz navigator restores the placed order.
	let placed = $state<number[]>(mode === 'quiz' ? ((answerSlot!.get() as number[]) ?? []) : []);
	let checked = $state(false);
	let correct = $state(false);

	// eslint-disable-next-line no-useless-assignment
	label = i18n.dict.exerciseKind.submitButton;
	// eslint-disable-next-line no-useless-assignment
	disabled = placed.length < tiles.length;

	function place(i: number) {
		if (checked) return;
		placed.push(i);
		disabled = placed.length < tiles.length;
	}

	function unplace(at: number) {
		if (checked) return;
		placed.splice(at, 1);
		disabled = true;
	}

	export function primaryAction() {
		if (placed.length < tiles.length) return;
		if (mode === 'quiz') {
			answerSlot!.set([...placed]);
			onAdvance();
			return;
		}
		if (!checked) {
			checked = true;
			correct = isOrderCorrect(screen, placed);
			recordAnswer(score!, correct);
			label = i18n.dict.lesson.nextQuestionButton;
		} else {
			onAdvance();
		}
	}
</script>

{#if mode === 'lesson'}
	<ExerciseKindBadge label={i18n.dict.exerciseKind.order} />
{/if}

<div class="leading-relaxed font-semibold"><Md block text={screen.prompt} /></div>
{#if screen.listen}
	<div class="mt-3">
		<ListenCard
			text={tiles.join(' ')}
			hint={i18n.dict.exerciseKind.listenHint}
			revealed={checked}
		/>
	</div>
{/if}

<!-- The answer being built: tap a tile to send it back. -->
<div
	dir="ltr"
	class="mt-4 flex min-h-14 gap-2 rounded-2xl border-2 border-dashed p-2 transition {lines
		? 'flex-col'
		: 'flex-wrap items-center'} {checked
		? correct
			? 'border-brand bg-brand-soft motion-safe:animate-pop-correct'
			: 'border-miss bg-miss-soft'
		: 'border-line'}"
>
	{#each placed as tile, at (tile)}
		<button
			type="button"
			disabled={checked}
			onclick={() => unplace(at)}
			class="rounded-xl border-2 border-brand bg-surface px-3 py-2 text-start text-base font-semibold transition hover:bg-brand-soft/60 active:scale-[0.97] motion-safe:animate-pop-correct"
		>
			{#if lines}<span class="me-1 text-muted">{at + 1}.</span>{/if}<Md text={screen.tiles[tile]} />
		</button>
	{/each}
</div>

<!-- The tiles still to place; each keeps its slot so the rest don't jump. -->
<div dir="ltr" class="mt-4 flex gap-2 {lines ? 'flex-col' : 'flex-wrap'}">
	{#each bank as tile (tile)}
		{@const used = placed.includes(tile)}
		<button
			type="button"
			disabled={checked || used}
			onclick={() => place(tile)}
			class="rounded-xl border-2 border-line bg-surface px-3 py-2 text-start text-base font-semibold transition hover:border-brand active:scale-[0.97] {used
				? 'invisible'
				: ''}"
		>
			<Md text={screen.tiles[tile]} />
		</button>
	{/each}
</div>

{#if checked && (!correct || screen.explanation)}
	<div class="mt-4 rounded-2xl bg-accent-soft p-3">
		<p class="mb-1 text-xs font-bold text-ink/60">{i18n.dict.exerciseKind.answerKeyLabel}</p>
		{#if !correct}
			<p dir="ltr" class="leading-relaxed font-semibold">
				{#if lines}
					{#each screen.tiles as tile, i (i)}<span class="block">{i + 1}. <Md text={tile} /></span
						>{/each}
				{:else}
					<Md text={screen.tiles.join(' ')} />
				{/if}
			</p>
		{/if}
		{#if screen.explanation}
			<div class="mt-1 leading-relaxed"><Md block text={screen.explanation} /></div>
		{/if}
	</div>
{/if}
