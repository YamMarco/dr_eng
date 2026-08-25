<script lang="ts">
	import AppBar from '$lib/components/AppBar.svelte';
	import Button from '$lib/components/Button.svelte';
	import Sheet from '$lib/components/Sheet.svelte';
	import { EXAM_MINUTES } from '$lib/modules';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let mod = $derived(data.module);

	let showQuestionsPrompt = $state(false);
</script>

<AppBar title={mod.title} back="/" backLabel="חזרה לבחירת מודול" />

<main class="mx-auto w-full max-w-lg flex-1 px-4 pt-6 pb-12">
	<p class="mb-6 leading-relaxed text-muted">{mod.description}</p>

	<div class="flex flex-col gap-4">
		<button
			type="button"
			onclick={() => (showQuestionsPrompt = true)}
			class="flex w-full items-start gap-4 rounded-3xl bg-surface p-5 text-right shadow-md ring-1 shadow-ink/5 ring-line/70 transition duration-150 hover:shadow-lg active:scale-[0.99]"
		>
			<span
				class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-ink/70"
			>
				<svg
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="h-6 w-6"
					aria-hidden="true"
				>
					<path d="M9.1 9a3 3 0 1 1 4 2.8c-.8.3-1.1 1-1.1 1.7v.5" />
					<path d="M12 17.5h.01" />
					<circle cx="12" cy="12" r="9" />
				</svg>
			</span>
			<span class="min-w-0 flex-1">
				<span class="block text-xl font-bold">שאלות</span>
				<span class="mt-1 block text-sm leading-relaxed text-muted">
					תרגול שאלות בודדות, ללא הגבלת זמן
				</span>
			</span>
		</button>

		<a
			href="/module/{mod.id}/exam"
			class="flex w-full items-start gap-4 rounded-3xl bg-brand p-5 text-right text-white shadow-md shadow-brand/25 transition duration-150 hover:bg-brand-dark active:scale-[0.99]"
		>
			<span
				class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-white"
			>
				<svg
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="h-6 w-6"
					aria-hidden="true"
				>
					<path d="M15 3H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Z" />
					<path d="M16 5h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2" />
					<path d="m9 14 2 2 4-4" />
				</svg>
			</span>
			<span class="min-w-0 flex-1">
				<span class="block text-xl font-bold">מבחן</span>
				<span class="mt-1 block text-sm leading-relaxed text-white/85">
					מבחן מלא בתנאי בחינה · {EXAM_MINUTES} דקות
				</span>
			</span>
		</a>
	</div>
</main>

<Sheet
	bind:open={showQuestionsPrompt}
	title="תרגול שאלות עדיין לא זמין"
	description="בינתיים אפשר לתרגל דרך המבחן המלא, שכולל את כל סוגי השאלות של המודול."
>
	<Button href="/module/{mod.id}/exam">מעבר למבחן</Button>
	<Button variant="ghost" onclick={() => (showQuestionsPrompt = false)}>לא עכשיו</Button>
</Sheet>
