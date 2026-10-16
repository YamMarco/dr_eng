<script lang="ts">
	// One COBE recording in the exam report: play it back, judge each rubric
	// criterion in a band, and the score follows (feedback/speaking.ts applies
	// the weights and the official deductions). Self-assessment until the
	// voice-LLM grader exists; it will fill the same judgement.
	import { fly } from 'svelte/transition';
	import { cobeRubric, type CobeBand, type CobeCriterion } from '$lib/content/rubrics';
	import {
		gradeSpeaking,
		lengthPercentOff,
		type CobeLevel,
		type CobePart,
		type SpeakingJudgement
	} from '$lib/feedback/speaking';
	import type { ExamGrade } from '$lib/feedback/types';
	import type { Take } from '$lib/recorder.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import Md from '$lib/components/Md.svelte';
	import SpeakingFeedback from '$lib/feedback/SpeakingFeedback.svelte';
	import type { SpeakingVerdict } from '$lib/feedback/types';

	let {
		label,
		prompt,
		part,
		points,
		level,
		take,
		grade,
		onGrade
	}: {
		label: string;
		prompt: string;
		part: CobePart;
		points: number;
		level: CobeLevel;
		take?: Take;
		grade?: ExamGrade;
		onGrade: (grade: ExamGrade) => void;
	} = $props();

	const t = $derived(i18n.dict.cobeReview);
	const criteria = $derived(cobeRubric.levels[level]);
	const seconds = $derived(Math.round(take?.seconds ?? 0));
	const lengthOff = $derived(lengthPercentOff(cobeRubric, part, seconds));
	// Under the minimum the section is 0 whatever the bands: no judging needed.
	const zeroByRule = $derived(lengthOff === 100);

	// svelte-ignore state_referenced_locally
	let bands = $state<Partial<Record<CobeCriterion['id'], CobeBand>>>({
		...grade?.judgement?.bands
	});
	// svelte-ignore state_referenced_locally
	let answeredAll = $state(grade?.judgement?.answeredAll ?? true);
	let audioFailed = $state(false);
	// What the AI heard and advised, kept with the grade.
	// svelte-ignore state_referenced_locally
	let ai = $state(grade?.ai);

	function regrade() {
		if (zeroByRule) return;
		if (!criteria.every((c) => bands[c.id])) return;
		const judgement = { bands: { ...bands }, answeredAll } as SpeakingJudgement;
		onGrade({ ...gradeSpeaking(cobeRubric, { level, part, points, seconds }, judgement), ai });
	}

	/** The AI judged the recording: its bands fill the rubric (still editable). */
	function fromAi({ judgement, ...rest }: SpeakingVerdict) {
		ai = rest;
		bands = { ...judgement.bands };
		answeredAll = judgement.answeredAll;
		regrade();
	}

	$effect(() => {
		if (zeroByRule && !grade)
			onGrade(
				gradeSpeaking(
					cobeRubric,
					{ level, part, points, seconds },
					{
						bands: { topic: 'none', delivery: 'none', vocabulary: 'none', language: 'none' },
						answeredAll: false
					}
				)
			);
	});

	const BANDS: CobeBand[] = ['high', 'mid', 'low', 'none'];
	const range = (band: CobeBand) => cobeRubric.bands.find((b) => b.id === band)!.range;
</script>

<li class="flex flex-col gap-3 py-4 first:pt-0 last:pb-0">
	<div class="flex items-baseline justify-between gap-3">
		<span class="text-sm font-bold">{label}</span>
		<span class="font-bold tabular {grade ? 'text-ink' : 'text-muted'}" dir="ltr">
			{grade ? grade.earned : '-'}/{points}
		</span>
	</div>
	<div class="text-sm text-muted" dir="ltr"><Md block text={prompt} /></div>

	{#if !take}
		<p class="text-sm font-semibold text-miss">{t.notRecorded}</p>
	{:else}
		<div class="flex flex-col gap-1">
			{#if take.audioUrl && !audioFailed}
				<audio controls src={take.audioUrl} class="w-full" onerror={() => (audioFailed = true)}
				></audio>
			{:else}
				<p class="text-xs text-muted">{t.audioGone}</p>
			{/if}
			<p class="text-xs font-semibold text-ink/70">{t.seconds(seconds)}</p>
		</div>
	{/if}

	{#if take?.audioUrl && !audioFailed && !zeroByRule}
		<SpeakingFeedback
			{level}
			{part}
			question={prompt}
			{seconds}
			audioUrl={take.audioUrl}
			verdict={grade?.ai}
			onVerdict={fromAi}
		/>
		{#if ai}
			<p class="text-xs text-muted">{t.aiFilled}</p>
		{/if}
	{/if}

	{#if zeroByRule}
		<p class="rounded-xl bg-miss-soft px-3 py-2 text-sm font-semibold text-miss">
			{t.tooShort(cobeRubric.deductions.minSeconds)}
		</p>
	{:else}
		<ul class="flex flex-col gap-3">
			{#each criteria as c (c.id)}
				{@const picked = bands[c.id]}
				<li>
					<p class="mb-1.5 flex justify-between text-sm font-semibold">
						<span>{t.criterion[c.id]}</span>
						<span class="text-xs text-muted tabular" dir="ltr">{c.weight}%</span>
					</p>
					<div class="grid grid-cols-4 gap-1.5">
						{#each BANDS as band (band)}
							<button
								type="button"
								onclick={() => {
									bands[c.id] = band;
									regrade();
								}}
								class="flex flex-col items-center rounded-xl border-2 px-1 py-1.5 text-xs font-bold transition active:scale-[0.97] {picked ===
								band
									? 'border-brand bg-brand-soft text-brand-dark'
									: 'border-line bg-surface text-ink/70 hover:border-brand/50'}"
							>
								{t.band[band]}
								<span class="font-normal text-muted tabular" dir="ltr"
									>{range(band)[0]}-{range(band)[1]}</span
								>
							</button>
						{/each}
					</div>
					{#if picked}
						<ul
							class="mt-1.5 list-disc ps-5 text-xs leading-relaxed text-muted"
							dir="ltr"
							in:fly={{ y: 4, duration: 200 }}
						>
							{#each c.descriptors[picked] as line (line)}<li>{line}</li>{/each}
						</ul>
					{/if}
				</li>
			{/each}
		</ul>

		<label class="flex items-center gap-2 text-sm">
			<input
				type="checkbox"
				bind:checked={answeredAll}
				onchange={regrade}
				class="h-4 w-4 accent-brand"
			/>
			{t.answeredAll}
		</label>

		{#if grade}
			<div
				class="flex flex-col gap-1 rounded-xl bg-canvas px-3 py-2 text-xs"
				in:fly={{ y: 6, duration: 200 }}
			>
				<ul class="grid grid-cols-2 gap-x-4 gap-y-1">
					{#each criteria as c (c.id)}
						<li class="flex justify-between gap-2">
							<span class="text-muted">{t.criterion[c.id]}</span>
							<span class="font-semibold tabular" dir="ltr"
								>{grade.criteria?.[c.id] ?? 0}/{(points * c.weight) / 100}</span
							>
						</li>
					{/each}
				</ul>
				{#if lengthOff}
					<p class="font-semibold text-miss">{t.lengthOff(lengthOff)}</p>
				{/if}
				{#if !answeredAll}
					<p class="font-semibold text-miss">{t.setOff}</p>
				{/if}
			</div>
		{:else}
			<p class="text-xs text-muted">{t.pickAll}</p>
		{/if}
	{/if}
</li>
