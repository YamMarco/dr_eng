<script lang="ts">
	import AppBar from '$lib/components/AppBar.svelte';
	import { EXAM_MINUTES } from '$lib/curriculum';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let group = $derived(data.group);
	let mod = $derived(data.mod);
	let section = $derived(data.section);

	let base = $derived(`/unit/${group.id}/module/${mod.id}/section/${section.id}`);
	let backHref = $derived(
		mod.sections.length === 1 ? `/unit/${group.id}` : `/unit/${group.id}/module/${mod.id}`
	);
</script>

<AppBar title="מודול {mod.letter}" back={backHref} backLabel="חזרה" />

<main class="mx-auto w-full max-w-lg flex-1 px-4 pt-6 pb-12">
	<p class="mb-6 leading-relaxed text-muted" dir="ltr">{section.label}</p>

	<div class="flex flex-col gap-4">
		<a
			href="{base}/questions"
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
		</a>

		<a
			href="{base}/exam"
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
