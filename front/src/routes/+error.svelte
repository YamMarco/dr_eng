<script lang="ts">
	import { page } from '$app/state';
	import Button from '$lib/components/Button.svelte';
</script>

<main
	class="mx-auto flex w-full max-w-lg flex-1 flex-col items-center justify-center px-4 py-16 text-center"
>
	<span class="text-5xl font-extrabold text-brand" dir="ltr">{page.status}</span>
	<h1 class="mt-3 text-2xl font-bold">{page.error?.message ?? 'משהו השתבש'}</h1>
	<p class="mt-2 text-muted">אפשר לחזור ולבחור מודול מחדש.</p>
	<div class="mt-8 w-full max-w-xs">
		<Button href="/">חזרה לבחירת מודול</Button>
	</div>
</main>
