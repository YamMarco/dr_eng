<script lang="ts">
	import AppBar from '$lib/components/AppBar.svelte';
	import { dev } from '$app/environment';
	import { editStore } from '$lib/content-edit/editStore.svelte';
	import { checkContentEditPassword, rememberContentEditPassword } from '$lib/content-edit/api';
	import { allLessons } from '$lib/content';
	import { screensForRound } from '$lib/content-edit/screenPath';
	import type { WordCardScreen } from '$lib/lesson-screens/types';
	import { SvelteSet } from 'svelte/reactivity';

	// Same session password gate as /edit - this is a content-authoring tool,
	// not student-facing content, even though its nav tab is visible to all.
	let unlocked = $derived(dev || editStore.authed);
	let pw = $state('');
	let err = $state('');

	async function unlock(e: Event) {
		e.preventDefault();
		err = '';
		if (await checkContentEditPassword(pw)) {
			rememberContentEditPassword(pw);
			editStore.setAuthed(true);
		} else {
			err = 'סיסמה שגויה';
		}
	}

	type Entry = WordCardScreen & {
		lessonId: string;
		lessonTitle: string;
		section: string;
		round: number;
		screenIndex: number;
		editHref: string;
	};

	// Walks every lesson's actual screens (not a stale hand-maintained list) so
	// this reflects reality - broken/missing images show up as soon as content
	// changes, with no separate file to keep in sync.
	let entries = $derived.by<Entry[]>(() => {
		const out: Entry[] = [];
		for (const lesson of Object.values(allLessons)) {
			lesson.content.rounds.forEach((_, round) => {
				const screens = screensForRound(lesson.content, round);
				screens.forEach((screen, screenIndex) => {
					if (screen.type !== 'word-card') return;
					out.push({
						...screen,
						lessonId: lesson.id,
						lessonTitle: lesson.titleHe,
						section: lesson.section,
						round,
						screenIndex,
						editHref: `/edit?section=${lesson.section}&lesson=${lesson.id}&round=${round}&screen=${screenIndex}`
					});
				});
			});
		}
		return out;
	});

	// An <img> that 404s (stale/renamed file) is caught here, same bucket as
	// "no image field at all" - both mean "go set an image for this word".
	let brokenImages = new SvelteSet<string>();
	function markBroken(key: string) {
		brokenImages.add(key);
	}
	function entryKey(e: Entry) {
		return `${e.lessonId}:${e.round}:${e.screenIndex}`;
	}

	let missingCount = $derived(
		entries.filter((e) => !e.image || brokenImages.has(entryKey(e))).length
	);
	let sortedEntries = $derived(
		[...entries].sort((a, b) => {
			const aMissing = !a.image || brokenImages.has(entryKey(a));
			const bMissing = !b.image || brokenImages.has(entryKey(b));
			return aMissing === bMissing ? 0 : aMissing ? -1 : 1;
		})
	);
</script>

<svelte:head><title>תמונות אוצר מילים</title></svelte:head>

{#if unlocked}
	<AppBar title="תמונות אוצר מילים" back="/" />

	<main class="mx-auto w-full max-w-lg flex-1 px-4 pt-6 pb-28">
		<p class="mb-4 text-sm text-muted">
			{entries.length} כרטיסי מילים · {missingCount} חסרות תמונה
		</p>

		<ul class="flex flex-col gap-3">
			{#each sortedEntries as entry (entryKey(entry))}
				{@const key = entryKey(entry)}
				{@const missing = !entry.image || brokenImages.has(key)}
				<li
					class="flex items-center gap-3 rounded-2xl bg-surface p-3 shadow-md ring-1 shadow-overlay/5 ring-line/70"
				>
					<div
						class="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-canvas text-xs text-muted"
					>
						{#if entry.image && !brokenImages.has(key)}
							<img
								src={entry.image}
								alt={entry.imageAlt ?? entry.word}
								class="h-full w-full object-cover"
								onerror={() => markBroken(key)}
							/>
						{:else}
							אין תמונה
						{/if}
					</div>
					<div class="min-w-0 flex-1">
						<p class="truncate font-bold" dir="ltr">{entry.word}</p>
						{#if entry.translationHe}
							<p class="truncate text-sm text-muted">{entry.translationHe}</p>
						{/if}
						<p class="truncate text-xs text-muted">{entry.lessonTitle}</p>
					</div>
					<!-- editHref is a runtime-built query string into /edit, not a typed route -->
					<!-- eslint-disable svelte/no-navigation-without-resolve -->
					<a
						href={entry.editHref}
						class="shrink-0 rounded-full px-3 py-1.5 text-sm font-bold transition active:scale-95 {missing
							? 'bg-danger-soft text-danger'
							: 'bg-brand-soft text-brand-dark'}"
					>
						ערוך
					</a>
					<!-- eslint-enable svelte/no-navigation-without-resolve -->
				</li>
			{/each}
		</ul>
	</main>
{:else}
	<div class="mx-auto flex min-h-dvh max-w-sm flex-col justify-center px-6">
		<form onsubmit={unlock} class="rounded-2xl border border-line bg-surface p-6">
			<p class="mb-3 font-bold">תמונות אוצר מילים - נדרשת סיסמה</p>
			<input
				type="password"
				bind:value={pw}
				class="mb-2 w-full rounded-lg border-2 border-line bg-canvas p-2"
				placeholder="סיסמה"
			/>
			{#if err}<p class="mb-2 text-xs text-danger">{err}</p>{/if}
			<button type="submit" class="w-full rounded-lg bg-brand py-2 font-bold text-white"
				>כניסה</button
			>
		</form>
	</div>
{/if}
