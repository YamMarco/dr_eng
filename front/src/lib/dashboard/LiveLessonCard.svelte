<script lang="ts">
	import { onMount } from 'svelte';
	import { fly, slide } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { CalendarPlus, ChevronLeft, PlayCircle, Video } from '@lucide/svelte';
	import { resolve } from '$app/paths';
	import { apiFetch } from '$lib/api';
	import Loader from '$lib/components/Loader.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import { MOBILE_BUILD } from '$lib/platform';
	import { profile } from '$lib/profile.svelte';
	import {
		joinOpen,
		lessonCalendar,
		lessonWhen,
		NAME_MAX,
		NAME_MIN,
		NAME_PATTERN,
		type LessonSlot,
		type LessonsInfo
	} from '$lib/liveLesson';

	// Home's weekly group Zoom lesson (/api/lessons): when it is, the join button around
	// lesson time (the student's personal link, opened in Zoom in a new tab), the latest
	// recording, and a one-time name for the lesson. Hidden while lessons are off or the
	// server can't be reached; a plan without lessons gets a link to the plans (web only).

	let t = $derived(i18n.dict.liveLesson);
	let info = $state<LessonsInfo | null>(null);
	let now = $state(Date.now());

	let naming = $state(false);
	let name = $state(profile.name ?? '');
	let busy = $state(false);
	let failed = $state<string | null>(null);

	async function load() {
		const response = await apiFetch('/api/lessons').catch(() => null);
		if (response?.ok) info = await response.json();
	}

	onMount(() => {
		load();
		const timer = setInterval(() => (now = Date.now()), 30_000);
		return () => clearInterval(timer);
	});

	let next = $derived(info && info.status !== 'locked' ? info.next : null);
	let joinUrl = $derived(
		info?.status === 'ready' && next && joinOpen(next, now) ? info.joinUrl : null
	);
	let recording = $derived(info?.status === 'ready' ? info.recording : null);
	let words = $derived({ today: t.today, tomorrow: t.tomorrow });

	let locked = $derived(info?.status === 'locked');
	let heading = $derived(locked ? t.upsellTitle : joinUrl ? t.liveTitle : t.title);
	let sub = $derived(locked ? t.upsellSub : next ? lessonWhen(next.start, now, words) : t.noDate);

	async function register(event: SubmitEvent) {
		event.preventDefault();
		const value = name.trim();
		if (value.length < NAME_MIN || value.length > NAME_MAX || !NAME_PATTERN.test(value)) {
			failed = t.errors.name;
			return;
		}
		busy = true;
		failed = null;
		const response = await apiFetch('/api/lessons', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ name: value })
		}).catch(() => null);
		busy = false;
		if (response?.ok) {
			info = await response.json();
			naming = false;
		} else failed = response?.status === 400 ? t.errors.name : t.errors.failed;
	}

	/** A weekly event in the student's calendar, linking back to the app. */
	function addToCalendar(slot: LessonSlot) {
		const appUrl = `${import.meta.env.VITE_API_BASE || location.origin}/app`;
		const text = lessonCalendar(slot, { title: t.calendarTitle, note: t.calendarNote }, appUrl);
		const url = URL.createObjectURL(new Blob([text], { type: 'text/calendar' }));
		const link = document.createElement('a');
		link.href = url;
		link.download = 'engup-lesson.ics';
		link.click();
		setTimeout(() => URL.revokeObjectURL(url), 1000);
	}

	const pill =
		'flex min-h-11 shrink-0 items-center gap-1.5 rounded-full px-4 text-sm font-bold transition duration-100 active:scale-[0.97]';
	const primary = `${pill} bg-brand text-white hover:bg-brand-dark`;
	const secondary = `${pill} bg-brand-soft text-brand-dark hover:bg-brand-soft/70`;
</script>

{#if info && (info.status !== 'locked' || !MOBILE_BUILD)}
	<section
		aria-labelledby="live-lesson-title"
		in:fly={{ y: 8, duration: 250, easing: cubicOut }}
		class="rounded-3xl bg-surface p-3 shadow-md shadow-overlay/5 lg:p-5 {joinUrl
			? 'ring-2 ring-brand'
			: 'ring-1 ring-line/70'}"
	>
		<div class="flex items-center gap-3">
			<span
				class="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand-dark"
			>
				<Video size={20} aria-hidden="true" />
				{#if joinUrl}
					<span class="absolute -end-0.5 -top-0.5 flex h-3 w-3" aria-hidden="true">
						<span
							class="absolute inline-flex h-full w-full rounded-full bg-danger opacity-75 motion-safe:animate-ping"
						></span>
						<span class="relative inline-flex h-3 w-3 rounded-full bg-danger"></span>
					</span>
				{/if}
			</span>

			<div class="min-w-0 flex-1">
				<h2 id="live-lesson-title" class="truncate leading-snug font-bold lg:text-lg">
					{heading}
				</h2>
				<p class="truncate text-xs text-muted lg:text-sm">{sub}</p>
			</div>

			{#if info.status === 'locked'}
				<a href={resolve('/plans')} class={secondary}>
					{t.upsellCta}
					<ChevronLeft size={16} aria-hidden="true" />
				</a>
			{:else if info.status === 'needs-name'}
				{#if !naming}
					<button type="button" class={primary} onclick={() => (naming = true)}>{t.signUp}</button>
				{/if}
			{:else if joinUrl}
				<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- external Zoom link -->
				<a href={joinUrl} target="_blank" rel="noopener noreferrer" class={primary}>
					{t.join}<span class="sr-only">{t.opensZoom}</span>
				</a>
			{:else if next}
				<button
					type="button"
					class={secondary}
					onclick={() => addToCalendar(next!)}
					aria-label={t.calendarLabel}
				>
					<CalendarPlus size={16} aria-hidden="true" />
					{t.calendar}
				</button>
			{/if}
		</div>

		{#if naming && info.status === 'needs-name'}
			<form
				class="mt-3 flex flex-col gap-1.5"
				onsubmit={register}
				transition:slide={{ duration: 200 }}
			>
				<label for="live-lesson-name" class="text-sm font-semibold">{t.nameLabel}</label>
				<input
					id="live-lesson-name"
					type="text"
					autocomplete="given-name"
					maxlength={NAME_MAX}
					{@attach (input) => input.focus()}
					bind:value={name}
					aria-describedby="live-lesson-hint"
					aria-invalid={failed === t.errors.name}
					class="rounded-2xl border-2 border-line bg-canvas px-4 py-2.5 focus:border-brand focus:outline-none"
				/>
				<p id="live-lesson-hint" class="text-xs text-muted">{t.nameHint}</p>
				{#if failed}
					<p
						class="rounded-xl bg-miss-soft px-3 py-2 text-sm font-semibold text-miss"
						role="alert"
						in:fly={{ y: 6, duration: 200 }}
					>
						{failed}
					</p>
				{/if}
				<div class="mt-1 flex gap-2">
					<button type="submit" class={primary} disabled={busy} aria-busy={busy}>
						{#if busy}<Loader size="sm" inherit />{t.saving}{:else}{t.save}{/if}
					</button>
					<button
						type="button"
						class="{pill} text-muted hover:bg-line/60 hover:text-ink"
						onclick={() => ((naming = false), (failed = null))}>{t.cancel}</button
					>
				</div>
			</form>
		{/if}

		{#if recording}
			<div class="mt-2 flex flex-wrap items-center gap-x-3 border-t border-line/70 pt-2 text-sm">
				<!-- eslint-disable svelte/no-navigation-without-resolve -- external Zoom link -->
				<a
					href={recording.url}
					target="_blank"
					rel="noopener noreferrer"
					class="-ms-2 flex min-h-11 items-center gap-1.5 rounded-xl px-2 font-semibold text-brand-dark transition duration-100 hover:bg-line/40 active:scale-[0.98]"
				>
					<PlayCircle size={16} aria-hidden="true" />
					{t.recording}
					<span class="sr-only">{t.opensZoom}</span>
				</a>
				<!-- eslint-enable svelte/no-navigation-without-resolve -->
				{#if recording.passcode}
					<span class="text-muted">
						{t.recordingCode}
						<span dir="ltr" class="font-semibold tabular select-all">{recording.passcode}</span>
					</span>
				{/if}
			</div>
		{/if}
	</section>
{/if}
