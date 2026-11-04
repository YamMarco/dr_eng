<script lang="ts">
	// Staff-only preview of the Loader in every place it appears.
	import Loader from '$lib/components/Loader.svelte';
	import Button from '$lib/components/Button.svelte';

	let busy = $state(true);
	let fullScreen = $state(false);
</script>

<main class="mx-auto flex max-w-3xl flex-col gap-6 px-4 py-8">
	<h1 class="text-2xl font-extrabold">בדיקת טעינה</h1>

	<section class="grid grid-cols-3 gap-4">
		{#each ['sm', 'md', 'lg'] as const as size (size)}
			<div class="flex h-32 flex-col items-center justify-center gap-2 rounded-2xl bg-surface ring-1 ring-line">
				<Loader {size} />
				<span class="text-xs text-muted" dir="ltr">{size}</span>
			</div>
		{/each}
	</section>

	<section class="flex h-40 items-center justify-center rounded-2xl bg-surface ring-1 ring-line">
		<Loader size="lg" showLabel label="טוענים את השיעור..." />
	</section>

	<section class="flex flex-wrap items-center gap-3">
		<Button {busy} onclick={() => (busy = !busy)}>שמירה</Button>
		<Button variant="secondary" {busy} onclick={() => (busy = !busy)}>שליחה</Button>
		<span class="text-sm text-muted">לחיצה מחליפה מצב טעינה</span>
	</section>

	<section class="relative h-20 rounded-2xl bg-canvas ring-1 ring-line">
		<Loader
			size="sm"
			class="absolute inset-x-0 top-3 mx-auto w-fit rounded-full bg-surface px-4 py-2.5 shadow-lg ring-1 ring-line/70"
		/>
	</section>

	<Button variant="secondary" onclick={() => (fullScreen = true)}>מסך מלא (לחיצה לסגירה)</Button>
</main>

{#if fullScreen}
	<button
		type="button"
		class="fixed inset-0 z-50 flex bg-canvas"
		aria-label="סגירה"
		onclick={() => (fullScreen = false)}
	>
		<Loader screen />
	</button>
{/if}
