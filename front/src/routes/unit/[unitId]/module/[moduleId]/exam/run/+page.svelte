<script lang="ts">
	import { goto } from '$app/navigation';
	import { fade, scale } from 'svelte/transition';
	import { backOut } from 'svelte/easing';
	import AppBar from '$lib/components/AppBar.svelte';
	import Button from '$lib/components/Button.svelte';
	import Sheet from '$lib/components/Sheet.svelte';
	import Timer from '$lib/components/Timer.svelte';
	import { exam, formatTime } from '$lib/exam.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import { EXAM_MINUTES } from '$lib/curriculum';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let group = $derived(data.group);
	let mod = $derived(data.mod);
	let base = $derived(`/unit/${group.id}/module/${mod.id}`);

	let tabs = $derived(
		mod.sections.length ? mod.sections : [{ id: 'general', label: i18n.dict.examRun.generalTab }]
	);

	let showExitPrompt = $state(false);

	// Someone landing here without starting the exam goes back to the start screen.
	$effect(() => {
		if (!exam.running && !exam.finished) goto(`${base}/exam`, { replaceState: true });
	});

	async function leave() {
		// Navigate first: resetting while still mounted would trip the guard effect above.
		await goto(base);
		exam.reset();
	}

	// Parts are a cosmetic grouping only — the whole exam is on one scrollable
	// page, and a tap here just scrolls that part into view.
	function jumpTo(id: string) {
		document.getElementById(`exam-part-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}
</script>

<AppBar
	title="{i18n.dict.examStart.titlePrefix} {mod.letter}"
	onback={() => (showExitPrompt = true)}
	backLabel={i18n.dict.examRun.exitLabel}
>
	{#snippet trailing()}
		<Timer seconds={exam.remaining} warning={exam.warning} />
	{/snippet}
</AppBar>

<main class="mx-auto w-full max-w-lg flex-1 px-4 pt-4 pb-28">
	{#if tabs.length > 1}
		<div
			role="tablist"
			aria-label={i18n.dict.examRun.tabsAriaLabel}
			class="sticky top-16 z-10 flex gap-1 rounded-2xl bg-line/50 p-1 backdrop-blur"
		>
			{#each tabs as tab (tab.id)}
				<button
					type="button"
					onclick={() => jumpTo(tab.id)}
					class="min-h-11 flex-1 rounded-xl px-3 text-base font-semibold text-muted transition hover:text-ink"
					dir="ltr"
				>
					{tab.label}
				</button>
			{/each}
		</div>
	{/if}

	{#each tabs as tab (tab.id)}
		<section id="exam-part-{tab.id}" class="mt-5 scroll-mt-32">
			<h2 class="text-2xl font-extrabold" dir="ltr">{tab.label}</h2>

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
				<p class="mt-4 font-semibold" dir="ltr">
					{i18n.dict.examRun.placeholderTitle(tab.label)}
				</p>
				<p class="mt-1 text-sm leading-relaxed text-muted">
					{i18n.dict.examRun.placeholderDesc}
				</p>
			</div>
		</section>
	{/each}
</main>

<div class="sticky bottom-0 border-t border-line/70 bg-canvas/90 px-4 py-3 backdrop-blur">
	<div class="mx-auto flex max-w-lg gap-3">
		<Button onclick={() => exam.finish()}>{i18n.dict.examRun.finishButton}</Button>
	</div>
</div>

<Sheet
	bind:open={showExitPrompt}
	title={i18n.dict.examRun.exitPromptTitle}
	description={i18n.dict.examRun.exitPromptDesc}
>
	<Button onclick={leave}>{i18n.dict.examRun.exitConfirm}</Button>
	<Button variant="ghost" onclick={() => (showExitPrompt = false)}
		>{i18n.dict.examRun.exitCancel}</Button
	>
</Sheet>

{#if exam.finished}
	<div
		transition:fade={{ duration: 150 }}
		class="fixed inset-0 z-50 flex items-center justify-center bg-overlay/50 p-4"
	>
		<div
			in:scale={{ start: 0.9, duration: 220, delay: 60, easing: backOut }}
			class="w-full max-w-sm rounded-3xl bg-surface p-6 text-center shadow-xl"
		>
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
				{exam.remaining === 0 ? i18n.dict.examRun.timeUpTitle : i18n.dict.examRun.finishedTitle}
			</h2>
			<p class="mt-2 leading-relaxed text-muted">
				{#if exam.remaining === 0}
					{i18n.dict.examRun.timeUpDesc(EXAM_MINUTES)}
				{:else}
					{i18n.dict.examRun.finishedDescBefore}
					<span class="font-semibold text-ink tabular" dir="ltr">{formatTime(exam.remaining)}</span>
					{i18n.dict.examRun.finishedDescAfter}
				{/if}
			</p>

			<div class="mt-6 flex flex-col gap-3">
				<Button onclick={leave}>{i18n.dict.examRun.backToModule}</Button>
			</div>
		</div>
	</div>
{/if}
