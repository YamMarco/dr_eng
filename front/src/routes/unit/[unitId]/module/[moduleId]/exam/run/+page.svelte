<script lang="ts">
	import { goto } from '$app/navigation';
	import AppBar from '$lib/components/AppBar.svelte';
	import Button from '$lib/components/Button.svelte';
	import Sheet from '$lib/components/Sheet.svelte';
	import Timer from '$lib/components/Timer.svelte';
	import { exam, formatTime } from '$lib/exam.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let group = $derived(data.group);
	let mod = $derived(data.mod);
	let base = $derived(`/unit/${group.id}/module/${mod.id}`);

	let tabs = $derived(mod.sections.length ? mod.sections : [{ id: 'general', label: 'תרגול' }]);

	let activeTab = $state(0);
	let showExitPrompt = $state(false);

	let current = $derived(tabs[activeTab] ?? tabs[0]);
	let isLast = $derived(activeTab === tabs.length - 1);

	// Someone landing here without starting the exam goes back to the start screen.
	$effect(() => {
		if (!exam.running && !exam.finished) goto(`${base}/exam`, { replaceState: true });
	});

	async function leave() {
		// Navigate first: resetting while still mounted would trip the guard effect above.
		await goto(base);
		exam.reset();
	}
</script>

<AppBar title={current.label} onback={() => (showExitPrompt = true)} backLabel="יציאה מהתרגול">
	{#snippet trailing()}
		<Timer seconds={exam.remaining} warning={exam.warning} />
	{/snippet}
</AppBar>

<main class="mx-auto w-full max-w-lg flex-1 px-4 pt-4 pb-28">
	{#if tabs.length > 1}
		<div role="tablist" aria-label="חלקי התרגול" class="flex gap-1 rounded-2xl bg-line/50 p-1">
			{#each tabs as tab, i (tab.id)}
				<button
					type="button"
					role="tab"
					aria-selected={activeTab === i}
					onclick={() => (activeTab = i)}
					class="min-h-[44px] flex-1 rounded-xl px-3 text-base font-semibold transition {activeTab ===
					i
						? 'bg-surface text-brand-dark shadow-sm'
						: 'text-muted hover:text-ink'}"
					dir="ltr"
				>
					{tab.label}
				</button>
			{/each}
		</div>
	{/if}

	<section class="mt-5">
		<h2 class="text-2xl font-extrabold" dir="ltr">{current.label}</h2>

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
			<p class="mt-4 font-semibold" dir="ltr">השאלות של {current.label} ייטענו כאן</p>
			<p class="mt-1 text-sm leading-relaxed text-muted">
				זוהי גרסת הדגמה — התוכן יתווסף בשלב הבא. הטיימר פועל כרגיל.
			</p>
		</div>
	</section>
</main>

<div class="sticky bottom-0 border-t border-line/70 bg-canvas/90 px-4 py-3 backdrop-blur">
	<div class="mx-auto flex max-w-lg gap-3">
		{#if !isLast}
			<Button onclick={() => (activeTab += 1)}>המשך</Button>
		{:else}
			{#if tabs.length > 1}
				<Button variant="secondary" onclick={() => (activeTab = 0)}>חזרה להתחלה</Button>
			{/if}
			<Button onclick={() => exam.finish()}>סיום התרגול</Button>
		{/if}
	</div>
</div>

<Sheet
	bind:open={showExitPrompt}
	title="לצאת מהתרגול?"
	description="היציאה תעצור את הטיימר וההתקדמות לא תישמר."
>
	<Button onclick={leave}>יציאה מהתרגול</Button>
	<Button variant="ghost" onclick={() => (showExitPrompt = false)}>המשך בתרגול</Button>
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
				{exam.remaining === 0 ? 'הזמן נגמר' : 'התרגול הסתיים'}
			</h2>
			<p class="mt-2 leading-relaxed text-muted">
				{#if exam.remaining === 0}
					התרגול נסגר אוטומטית בתום 30 הדקות.
				{:else}
					סיימתם את התרגול עם <span class="font-semibold text-ink tabular" dir="ltr"
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
