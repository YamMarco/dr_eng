<script lang="ts">
	import { untrack } from 'svelte';
	import AppBar from '$lib/components/AppBar.svelte';
	import ScreenForm from './ScreenForm.svelte';
	import { blankScreen } from './screenSkeletons';
	import type { LessonNode } from '$lib/content';
	import type { LessonScreen } from '$lib/lesson-screens/types';

	let { lesson, onClose }: { lesson: LessonNode; onClose: () => void } = $props();

	// Local, mutable working copy so the view survives the Vite HMR reload
	// that each save triggers (which replaces the `lesson` prop's objects).
	let content = $state<LessonNode['content']>(
		untrack(() => JSON.parse(JSON.stringify(lesson.content)))
	);
	// Bumped on add/delete to force every ScreenForm to remount at its new index.
	let structureVersion = $state(0);
	let banner = $state('');

	type BucketKey = 'preface' | number;

	let buckets = $derived([
		{ key: 'preface' as BucketKey, title: 'פתיח', screens: content.preface },
		...content.rounds.map((r, i) => ({ key: i as BucketKey, title: `סבב ${i + 1}`, screens: r.screens }))
	]);

	function listFor(bucket: BucketKey): LessonScreen[] {
		return bucket === 'preface' ? content.preface : content.rounds[bucket].screens;
	}

	async function api(op: 'set' | 'insert' | 'delete', bucket: BucketKey, index: number, screen?: unknown) {
		const res = await fetch('/api/content-edit', {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify({ lessonId: lesson.id, bucket, index, op, screen })
		});
		if (!res.ok) throw new Error(await res.text());
	}

	async function saveScreen(bucket: BucketKey, index: number, screen: LessonScreen) {
		await api('set', bucket, index, screen);
		listFor(bucket)[index] = screen;
	}

	async function deleteScreen(bucket: BucketKey, index: number) {
		await api('delete', bucket, index);
		listFor(bucket).splice(index, 1);
		structureVersion += 1;
	}

	async function addScreen(bucket: BucketKey, index: number) {
		const screen = blankScreen('preface');
		try {
			await api('insert', bucket, index, screen);
			listFor(bucket).splice(index, 0, screen);
			structureVersion += 1;
		} catch (e) {
			banner = e instanceof Error ? e.message : String(e);
		}
	}
</script>

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
	<AppBar title={`עריכת תוכן — ${lesson.titleHe}`} onback={onClose} backLabel="סגור" />

	<main class="mx-auto w-full max-w-lg flex-1 overflow-y-auto px-4 pt-4 pb-10">
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
						bucket={bucket.key}
						index={i}
						onSave={(next) => saveScreen(bucket.key, i, next)}
						onDelete={() => deleteScreen(bucket.key, i)}
					/>
				{/each}
				{@render insertRow(bucket.key, bucket.screens.length)}
			{/each}
		{/key}
	</main>
</div>
