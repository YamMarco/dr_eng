<script lang="ts">
	// Dev-only floating widget, shown when the "כלי דיבוג" setting is on.
	// Tap the badge to toggle the panel (hover is unreliable on touch: it sticks
	// after a tap and made the panel flicker on phones).
	import { debugStore } from '$lib/debug.svelte';
	import { lessonProgress } from '$lib/lessonProgress.svelte';

	let open = $state(false);
</script>

<!-- Own view-transition layer: a fixed element inside the root snapshot gets
     cross-faded/jumped on every route change. -->
<div class="fixed inset-e-4 bottom-20 z-40" style="view-transition-name: debug-tools">
	<button
		type="button"
		aria-label="כלי דיבוג"
		aria-expanded={open}
		onclick={() => (open = !open)}
		class="flex h-11 w-11 items-center justify-center rounded-full bg-overlay text-lg text-white shadow-lg transition active:scale-95"
	>
		🐞
	</button>

	{#if open}
		<div
			class="absolute inset-e-0 bottom-full mb-2 w-48 rounded-2xl bg-surface p-3 shadow-xl ring-1 ring-line/70"
		>
			<p class="mb-2 text-xs font-semibold text-muted">כלי דיבוג</p>
			<button
				type="button"
				onclick={() => debugStore.setUnlockAll(!debugStore.unlockAll)}
				class="w-full rounded-xl border-2 px-3 py-2 text-sm font-semibold transition {debugStore.unlockAll
					? 'border-brand bg-brand-soft text-brand-dark'
					: 'border-line hover:border-brand'}"
			>
				{debugStore.unlockAll ? '✅ הכול פתוח' : 'פתח את כל השיעורים'}
			</button>
			<button
				type="button"
				onclick={() => lessonProgress.resetAll()}
				class="mt-2 w-full rounded-xl border-2 border-line px-3 py-2 text-sm font-semibold transition hover:border-brand"
			>
				אפס התקדמות בכל השיעורים
			</button>
		</div>
	{/if}
</div>
