<script lang="ts">
	import { goto } from '$app/navigation';
	import AppBar from '$lib/components/AppBar.svelte';
	import Button from '$lib/components/Button.svelte';
	import Sheet from '$lib/components/Sheet.svelte';
	import Timer from '$lib/components/Timer.svelte';
	import { exam, formatTime } from '$lib/exam.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let mod = $derived(data.module);

	const parts = [
		{ id: 1, label: 'I', title: 'חלק I', subtitle: 'הבנת הנקרא ואוצר מילים' },
		{ id: 2, label: 'II', title: 'חלק II', subtitle: 'שאלות פתוחות וכתיבה' }
	];

	let activePart = $state(1);
	let showExitPrompt = $state(false);

	let current = $derived(parts.find((p) => p.id === activePart)!);

	// Someone landing here without starting the exam goes back to the start screen.
	$effect(() => {
		if (!exam.running && !exam.finished) goto(`/module/${mod.id}/exam`, { replaceState: true });
	});

	async function leave() {
		// Navigate first: resetting while still mounted would trip the guard effect above.
		await goto(`/module/${mod.id}`);
		exam.reset();
	}
</script>

<AppBar title={current.title} onback={() => (showExitPrompt = true)} backLabel="יציאה מהמבחן">
	{#snippet trailing()}
		<Timer seconds={exam.remaining} warning={exam.warning} />
	{/snippet}
</AppBar>

<main class="mx-auto w-full max-w-lg flex-1 px-4 pt-4 pb-28">
	<div role="tablist" aria-label="חלקי המבחן" class="flex gap-1 rounded-2xl bg-line/50 p-1">
		{#each parts as part (part.id)}
			<button
				type="button"
				role="tab"
				aria-selected={activePart === part.id}
				onclick={() => (activePart = part.id)}
				class="min-h-[44px] flex-1 rounded-xl px-3 text-base font-semibold transition {activePart ===
				part.id
					? 'bg-surface text-brand-dark shadow-sm'
					: 'text-muted hover:text-ink'}"
			>
				{part.title}
			</button>
		{/each}
	</div>

	<section class="mt-5">
		<h2 class="text-2xl font-extrabold">{current.title}</h2>
		<p class="mt-1 text-muted">{current.subtitle}</p>

		<div
			class="mt-5 flex flex-col items-center rounded-3xl border-2 border-dashed border-line bg-surface/60 px-6 py-14 text-center"
		>
			<span
				class="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-soft text-ink/60"
			>
				<svg
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="h-7 w-7"
					aria-hidden="true"
				>
					<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
					<path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
				</svg>
			</span>
			<p class="mt-4 font-semibold">השאלות של {current.title} ייטענו כאן</p>
			<p class="mt-1 text-sm leading-relaxed text-muted">
				זוהי גרסת הדגמה — התוכן יתווסף בשלב הבא. הטיימר פועל כרגיל.
			</p>
		</div>
	</section>
</main>

<div class="sticky bottom-0 border-t border-line/70 bg-canvas/90 px-4 py-3 backdrop-blur">
	<div class="mx-auto flex max-w-lg gap-3">
		{#if activePart === 1}
			<Button onclick={() => (activePart = 2)}>מעבר לחלק II</Button>
		{:else}
			<Button variant="secondary" onclick={() => (activePart = 1)}>חזרה לחלק I</Button>
			<Button onclick={() => exam.finish()}>סיום המבחן</Button>
		{/if}
	</div>
</div>

<Sheet
	bind:open={showExitPrompt}
	title="לצאת מהמבחן?"
	description="היציאה תעצור את הטיימר והתקדמות המבחן לא תישמר."
>
	<Button onclick={leave}>יציאה מהמבחן</Button>
	<Button variant="ghost" onclick={() => (showExitPrompt = false)}>המשך במבחן</Button>
</Sheet>

{#if exam.finished}
	<div class="fixed inset-0 z-50 flex items-center justify-center bg-ink/50 p-4">
		<div class="w-full max-w-sm rounded-3xl bg-surface p-6 text-center shadow-xl">
			<span
				class="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl {exam.remaining === 0
					? 'bg-danger-soft text-danger'
					: 'bg-brand-soft text-brand'}"
			>
				<svg
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="h-8 w-8"
					aria-hidden="true"
				>
					<circle cx="12" cy="12" r="9" />
					<path d="M12 7v5l3 2" />
				</svg>
			</span>

			<h2 class="mt-4 text-2xl font-extrabold">
				{exam.remaining === 0 ? 'הזמן נגמר' : 'המבחן הסתיים'}
			</h2>
			<p class="mt-2 leading-relaxed text-muted">
				{#if exam.remaining === 0}
					המבחן נסגר אוטומטית בתום 30 הדקות.
				{:else}
					סיימתם את המבחן עם <span class="font-semibold text-ink tabular" dir="ltr"
						>{formatTime(exam.remaining)}</span
					> דקות שנותרו.
				{/if}
			</p>

			<div class="mt-6 flex flex-col gap-3">
				<Button onclick={leave}>חזרה למודול</Button>
			</div>
		</div>
	</div>
{/if}
