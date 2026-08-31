<script lang="ts">
	import AppBar from '$lib/components/AppBar.svelte';
	import Button from '$lib/components/Button.svelte';
	import { i18n } from '$lib/i18n/index.svelte';

	// Mock availability — same slots every workday.
	const TIME_SLOTS = ['16:00', '16:45', '17:30', '18:15', '19:00'];

	const today = new Date();
	today.setHours(0, 0, 0, 0);

	let viewYear = $state(today.getFullYear());
	let viewMonth = $state(today.getMonth());

	let selectedDate = $state<Date | null>(null);
	let selectedTime = $state<string | null>(null);
	let selectedTopics = $state<string[]>([]);
	let selectedLevel = $state<string | null>(null);
	let note = $state('');
	let submitted = $state(false);

	let b = $derived(i18n.dict.book);

	let leadingBlanks = $derived(new Date(viewYear, viewMonth, 1).getDay());
	let daysInMonth = $derived(new Date(viewYear, viewMonth + 1, 0).getDate());
	let cells = $derived<(Date | null)[]>([
		...Array.from({ length: leadingBlanks }, () => null),
		...Array.from({ length: daysInMonth }, (_, i) => new Date(viewYear, viewMonth, i + 1))
	]);

	let canGoPrev = $derived(
		viewYear > today.getFullYear() ||
			(viewYear === today.getFullYear() && viewMonth > today.getMonth())
	);

	function dayDisabled(d: Date) {
		return d < today || d.getDay() === 5 || d.getDay() === 6;
	}
	function sameDay(a: Date | null, d: Date) {
		return !!a && a.toDateString() === d.toDateString();
	}
	function shiftMonth(delta: number) {
		const m = viewMonth + delta;
		viewYear += Math.floor(m / 12);
		viewMonth = ((m % 12) + 12) % 12;
	}
	function pickDay(d: Date) {
		selectedDate = d;
		selectedTime = null;
	}
	function toggleTopic(t: string) {
		selectedTopics = selectedTopics.includes(t)
			? selectedTopics.filter((x) => x !== t)
			: [...selectedTopics, t];
	}

	let canSubmit = $derived(!!selectedDate && !!selectedTime && selectedTopics.length > 0);
	let formattedDate = $derived(
		selectedDate ? `${selectedDate.getDate()} ${b.monthNames[selectedDate.getMonth()]}` : ''
	);

	function submit() {
		if (canSubmit) submitted = true;
	}
	function reset() {
		submitted = false;
		selectedDate = null;
		selectedTime = null;
		selectedTopics = [];
		selectedLevel = null;
		note = '';
	}

	const card = 'rounded-3xl bg-surface p-5 shadow-md ring-1 shadow-ink/5 ring-line/70';
	const chipBase =
		'min-h-11 rounded-full border-2 px-4 py-2 text-sm font-semibold transition active:scale-[0.97]';
	function chip(selected: boolean) {
		return `${chipBase} ${
			selected
				? 'border-brand bg-brand-soft text-brand-dark'
				: 'border-line text-muted hover:border-brand/50'
		}`;
	}
</script>

<AppBar title={b.title} />

<main class="mx-auto w-full max-w-lg flex-1 px-4 pt-6 pb-28">
	{#if submitted}
		<div class="{card} flex flex-col items-center gap-4 text-center">
			<span
				class="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-soft text-brand-dark"
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
					<path d="m5 13 4 4L19 7" />
				</svg>
			</span>
			<h2 class="text-xl font-bold">{b.confirmedTitle}</h2>
			<p class="leading-relaxed text-muted">
				{b.confirmedDesc(formattedDate, selectedTime ?? '')}
			</p>
			<Button variant="secondary" onclick={reset}>{b.reset}</Button>
		</div>
	{:else}
		<p class="mb-6 leading-relaxed text-muted">{b.intro}</p>

		<div class="flex flex-col gap-6">
			<!-- Calendar -->
			<section class={card}>
				<div class="flex items-center justify-between">
					<button
						type="button"
						class="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink transition hover:bg-line/70 disabled:opacity-30"
						disabled={!canGoPrev}
						aria-label={b.prevMonth}
						onclick={() => shiftMonth(-1)}
					>
						<svg
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="h-5 w-5 rtl:rotate-180"
							aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg
						>
					</button>
					<span class="text-sm font-bold">{b.monthNames[viewMonth]} {viewYear}</span>
					<button
						type="button"
						class="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink transition hover:bg-line/70"
						aria-label={b.nextMonth}
						onclick={() => shiftMonth(1)}
					>
						<svg
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="h-5 w-5 rtl:rotate-180"
							aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg
						>
					</button>
				</div>

				<div class="mt-4 grid grid-cols-7 gap-1 text-center text-xs font-bold text-muted">
					{#each b.weekdays as wd (wd)}
						<span class="py-1">{wd}</span>
					{/each}
				</div>
				<div class="mt-1 grid grid-cols-7 gap-1">
					{#each cells as cell, i (i)}
						{#if cell === null}
							<span></span>
						{:else}
							{@const disabled = dayDisabled(cell)}
							{@const selected = sameDay(selectedDate, cell)}
							<button
								type="button"
								{disabled}
								onclick={() => pickDay(cell)}
								class="flex aspect-square items-center justify-center rounded-xl text-sm font-semibold transition {selected
									? 'bg-brand text-white'
									: disabled
										? 'text-muted/30'
										: 'text-ink hover:bg-brand-soft'}"
							>
								{cell.getDate()}
							</button>
						{/if}
					{/each}
				</div>
			</section>

			<!-- Time -->
			<section class={card}>
				<h2 class="text-sm font-bold text-muted">{b.timeSection}</h2>
				{#if !selectedDate}
					<p class="mt-3 text-sm text-muted">{b.pickDateFirst}</p>
				{:else}
					<div class="mt-3 flex flex-wrap gap-2">
						{#each TIME_SLOTS as slot (slot)}
							<button
								type="button"
								dir="ltr"
								class={chip(selectedTime === slot)}
								onclick={() => (selectedTime = slot)}
							>
								{slot}
							</button>
						{/each}
					</div>
				{/if}
			</section>

			<!-- Topics -->
			<section class={card}>
				<h2 class="text-sm font-bold text-muted">{b.topicSection}</h2>
				<p class="mt-1 text-xs text-muted">{b.topicHint}</p>
				<div class="mt-3 flex flex-wrap gap-2">
					{#each b.topics as topic (topic)}
						<button
							type="button"
							class={chip(selectedTopics.includes(topic))}
							onclick={() => toggleTopic(topic)}
						>
							{topic}
						</button>
					{/each}
				</div>
			</section>

			<!-- Level -->
			<section class={card}>
				<h2 class="text-sm font-bold text-muted">{b.levelSection}</h2>
				<div class="mt-3 flex flex-col gap-2">
					{#each b.levels as level (level)}
						<button
							type="button"
							class="flex min-h-11 items-center gap-3 rounded-2xl border-2 px-4 py-3 text-start text-sm font-semibold transition {selectedLevel ===
							level
								? 'border-brand bg-brand-soft text-brand-dark'
								: 'border-line text-muted hover:border-brand/50'}"
							onclick={() => (selectedLevel = level)}
						>
							<span
								class="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 {selectedLevel ===
								level
									? 'border-brand'
									: 'border-line'}"
							>
								{#if selectedLevel === level}
									<span class="h-2 w-2 rounded-full bg-brand"></span>
								{/if}
							</span>
							{level}
						</button>
					{/each}
				</div>
			</section>

			<!-- Note -->
			<section class={card}>
				<h2 class="text-sm font-bold text-muted">
					{b.noteSection}
					<span class="font-normal">· {b.noteOptional}</span>
				</h2>
				<textarea
					bind:value={note}
					rows="3"
					placeholder={b.notePlaceholder}
					class="mt-3 w-full resize-none rounded-2xl border-2 border-line bg-canvas px-4 py-3 text-sm text-ink transition focus:border-brand focus:outline-none"
				></textarea>
			</section>

			<div>
				{#if !canSubmit}
					<p class="mb-2 text-center text-xs text-muted">{b.missing}</p>
				{/if}
				<Button onclick={submit} disabled={!canSubmit}>{b.submit}</Button>
			</div>
		</div>
	{/if}
</main>
