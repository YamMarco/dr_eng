<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import Button from '$lib/components/Button.svelte';
	import ChoiceList from '$lib/components/ChoiceList.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import { NAME_MAX, profile, type UnitsGoal } from '$lib/profile.svelte';
	import { parseSessionKey, sessionOptions, unitsOptions } from './goalOptions';

	// Three short questions before the dashboard - no signup wall: an optional name
	// (may stay empty) and enough to build the route and the countdown.
	const TOTAL_STEPS = 3;

	let step = $state(1);
	let name = $state('');
	let units = $state<UnitsGoal | undefined>();
	let session = $state<string | undefined>();

	let t = $derived(i18n.dict.onboarding);

	function finish() {
		if (!units || !session) return;
		profile.save({ units, exam: parseSessionKey(session), name: name.trim() || undefined });
	}
</script>

<main class="mx-auto flex w-full max-w-lg flex-1 flex-col px-4 pt-6 pb-10">
	<div class="flex min-h-11 items-center justify-between">
		{#if step > 1}
			<button
				type="button"
				onclick={() => step--}
				class="min-h-11 rounded-xl px-2 font-semibold text-muted hover:text-ink"
			>
				{i18n.dict.common.back}
			</button>
		{:else}
			<span></span>
		{/if}
		<span class="text-sm font-semibold text-muted">{t.step(step, TOTAL_STEPS)}</span>
	</div>

	{#key step}
		<section in:fly={{ x: -16, duration: 250, easing: cubicOut }} class="mt-6 flex-1">
			{#if step === 1}
				<h1
					class="flex flex-wrap items-center gap-x-3 gap-y-1 text-3xl font-extrabold tracking-tight"
				>
					{t.nameTitle}
					<span class="rounded-full bg-line/60 px-2.5 py-0.5 text-sm font-semibold text-muted"
						>{t.nameOptional}</span
					>
				</h1>
				<p class="mt-2 mb-6 text-muted">{t.nameDesc}</p>
				<input
					type="text"
					bind:value={name}
					maxlength={NAME_MAX}
					autocomplete="given-name"
					placeholder={t.namePlaceholder}
					aria-label={t.nameTitle}
					onkeydown={(e) => e.key === 'Enter' && step++}
					class="min-h-14 w-full rounded-2xl border-2 border-line bg-surface px-4 text-lg transition-colors placeholder:text-muted/70 focus:border-brand focus:outline-none"
				/>
			{:else if step === 2}
				<h1 class="text-3xl font-extrabold tracking-tight">{t.goalTitle}</h1>
				<p class="mt-2 mb-6 text-muted">{t.goalDesc}</p>
				<ChoiceList
					label={t.goalTitle}
					options={unitsOptions()}
					value={units}
					onchange={(v) => (units = v as UnitsGoal)}
				/>
			{:else}
				<h1 class="text-3xl font-extrabold tracking-tight">{t.examTitle}</h1>
				<p class="mt-2 mb-6 text-muted">{t.examDesc}</p>
				<ChoiceList
					label={t.examTitle}
					options={sessionOptions()}
					value={session}
					onchange={(v) => (session = v)}
				/>
			{/if}
		</section>
	{/key}

	<div class="mt-8">
		{#if step < TOTAL_STEPS}
			<Button disabled={step === 2 && !units} onclick={() => step++}>
				{step === 1 && !name.trim() ? t.skip : t.next}
			</Button>
		{:else}
			<Button disabled={!session} onclick={finish}>{t.finish}</Button>
		{/if}
	</div>
</main>
