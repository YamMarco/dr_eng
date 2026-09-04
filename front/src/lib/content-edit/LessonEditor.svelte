<script lang="ts">
	import AppBar from '$lib/components/AppBar.svelte';
	import ScreenForm from './ScreenForm.svelte';
	import type { LessonNode } from '$lib/content';

	let { lesson, onClose }: { lesson: LessonNode; onClose: () => void } = $props();

	let buckets = $derived([
		{ key: 'preface' as const, title: 'פתיח', screens: lesson.content.preface },
		...lesson.content.rounds.map((r, i) => ({
			key: i,
			title: `סבב ${i + 1}`,
			screens: r.screens
		}))
	]);
</script>

<div class="fixed inset-0 z-50 flex flex-col bg-canvas">
	<AppBar title={`עריכת תוכן — ${lesson.titleHe}`} onback={onClose} backLabel="סגור" />

	<main class="mx-auto w-full max-w-lg flex-1 overflow-y-auto px-4 pt-4 pb-10">
		<p class="mb-2 text-xs text-muted" dir="ltr">{lesson.id} · {lesson.code}</p>

		{#each buckets as bucket (bucket.key)}
			<h2 class="mt-6 mb-2 text-sm font-bold text-muted">{bucket.title}</h2>
			{#if bucket.screens.length === 0}
				<p class="text-sm text-muted">— אין מסכים —</p>
			{/if}
			{#each bucket.screens as screen, i (i)}
				<ScreenForm {lesson} bucket={bucket.key} index={i} {screen} />
			{/each}
		{/each}
	</main>
</div>
