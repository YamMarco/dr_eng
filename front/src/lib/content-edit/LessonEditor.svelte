<script lang="ts">
	import { untrack } from 'svelte';
	import AppBar from '$lib/components/AppBar.svelte';
	import Button from '$lib/components/Button.svelte';
	import ScreenForm from './ScreenForm.svelte';
	import { blankScreen } from './screenSkeletons';
	import { saveLessonContent } from './api';
	import type { LessonNode } from '$lib/content';
	import type { LessonScreen } from '$lib/lesson-screens/types';

	let { lesson, onClose }: { lesson: LessonNode; onClose: () => void } = $props();

	// Local, mutable working copy. Nothing here touches the server until the
	// big "שמור שינויים בשיעור" button is pressed — one save = one commit,
	// however many screens were edited/added/removed/reordered meanwhile.
	let content = $state<LessonNode['content']>(untrack(() => structuredClone(lesson.content)));
	// Bumped on add/delete to force every ScreenForm to remount at its new index.
	let structureVersion = $state(0);
	let dirty = $state(false);
	let banner = $state('');
	let saveState = $state<'idle' | 'saving' | 'saved' | 'error'>('idle');

	type BucketKey = 'preface' | number;

	let buckets = $derived([
		{ key: 'preface' as BucketKey, title: 'פתיח', screens: content.preface },
		...content.rounds.map((r, i) => ({ key: i as BucketKey, title: `סבב ${i + 1}`, screens: r.screens }))
	]);

	function listFor(bucket: BucketKey): LessonScreen[] {
		return bucket === 'preface' ? content.preface : content.rounds[bucket].screens;
	}

	function markDirty() {
		dirty = true;
		saveState = 'idle';
	}

	function applyScreen(bucket: BucketKey, index: number, screen: LessonScreen) {
		listFor(bucket)[index] = screen;
		markDirty();
	}

	function deleteScreen(bucket: BucketKey, index: number) {
		listFor(bucket).splice(index, 1);
		structureVersion += 1;
		markDirty();
	}

	function addScreen(bucket: BucketKey, index: number) {
		listFor(bucket).splice(index, 0, blankScreen('preface'));
		structureVersion += 1;
		markDirty();
	}

	async function saveAll() {
		saveState = 'saving';
		banner = '';
		try {
			await saveLessonContent(lesson.id, content);
			dirty = false;
			saveState = 'saved';
		} catch (e) {
			saveState = 'error';
			banner = e instanceof Error ? e.message : String(e);
		}
	}

	function confirmDiscard(): boolean {
		return !dirty || confirm('יש שינויים שלא נשמרו. לצאת בכל זאת?');
	}

	function handleClose() {
		if (confirmDiscard()) onClose();
	}

	function handleBeforeUnload(e: BeforeUnloadEvent) {
		if (!dirty) return;
		e.preventDefault();
		e.returnValue = '';
	}
</script>

<svelte:window onbeforeunload={handleBeforeUnload} />

{#snippet insertRow(bucket: BucketKey, index: number)}
	<div class="flex justify-center py-1">
		<button
			type="button"
			onclick={() => addScreen(bucket, index)}
			class="rounded-full border border-dashed border-line px-3 py-0.5 text-xs font-semibold text-muted hover:border-brand hover:text-brand"
		>
			+ מסך כאן
		</button>
	</div>
{/snippet}

<div class="fixed inset-0 z-50 flex flex-col bg-canvas">
	<AppBar title={`עריכת תוכן — ${lesson.titleHe}`} onback={handleClose} backLabel="סגור" />

	<main class="mx-auto w-full max-w-lg flex-1 overflow-y-auto px-4 pt-4 pb-32">
		<p class="mb-2 text-xs text-muted" dir="ltr">{lesson.id} · {lesson.code}</p>
		{#if banner}
			<p class="mb-2 rounded-lg bg-danger-soft px-3 py-2 text-xs text-danger" dir="ltr">{banner}</p>
		{/if}

		{#key structureVersion}
			{#each buckets as bucket (bucket.key)}
				<h2 class="mt-6 mb-1 text-sm font-bold text-muted">{bucket.title}</h2>
				{#each bucket.screens as screen, i (i)}
					{@render insertRow(bucket.key, i)}
					<ScreenForm
						{screen}
						lessonId={lesson.id}
						bucket={bucket.key}
						index={i}
						onApply={(next) => applyScreen(bucket.key, i, next)}
						onDelete={() => deleteScreen(bucket.key, i)}
					/>
				{/each}
				{@render insertRow(bucket.key, bucket.screens.length)}
			{/each}
		{/key}
	</main>

	<div class="sticky bottom-0 border-t border-line/70 bg-canvas/90 px-4 py-3 backdrop-blur">
		<div class="mx-auto flex max-w-lg flex-col gap-2">
			{#if saveState === 'saved'}
				<p class="text-center text-sm font-semibold text-brand-dark">
					השינויים נשלחו. המתן כדקה ורענן את הדף כדי לראות אותם.
				</p>
			{/if}
			<Button onclick={saveAll} disabled={!dirty || saveState === 'saving'}>
				{saveState === 'saving' ? 'שומר…' : dirty ? '💾 שמור שינויים בשיעור' : 'אין שינויים לשמור'}
			</Button>
		</div>
	</div>
</div>
