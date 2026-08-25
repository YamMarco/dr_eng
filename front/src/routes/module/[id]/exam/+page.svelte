<script lang="ts">
	import { goto } from '$app/navigation';
	import AppBar from '$lib/components/AppBar.svelte';
	import Button from '$lib/components/Button.svelte';
	import Timer from '$lib/components/Timer.svelte';
	import { EXAM_SECONDS, exam } from '$lib/exam.svelte';
	import { EXAM_MINUTES } from '$lib/modules';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let mod = $derived(data.module);

	const parts = [
		{ label: 'חלק I', description: 'הבנת הנקרא ואוצר מילים' },
		{ label: 'חלק II', description: 'שאלות פתוחות וכתיבה' }
	];

	function startExam() {
		exam.start(mod.id);
		goto(`/module/${mod.id}/exam/run`);
	}
</script>

<AppBar title="מבחן — {mod.title}" back="/module/{mod.id}" />

<main class="mx-auto w-full max-w-lg flex-1 px-4 pt-6 pb-12">
	<div class="rounded-3xl bg-surface p-6 text-center shadow-md ring-1 shadow-ink/5 ring-line/70">
		<p class="text-sm font-semibold text-muted">משך המבחן</p>
		<div class="mt-3 flex justify-center">
			<Timer seconds={EXAM_SECONDS} size="lg" />
		</div>
		<p class="mt-4 leading-relaxed text-muted">
			המבחן נמשך {EXAM_MINUTES} דקות. הטיימר מתחיל לרוץ ברגע הלחיצה על "התחלה" ונעצר אוטומטית בסיום הזמן.
		</p>
	</div>

	<div class="mt-6 rounded-3xl bg-surface p-5 shadow-md ring-1 shadow-ink/5 ring-line/70">
		<h2 class="mb-3 text-base font-bold">מבנה המבחן</h2>
		<ul class="flex flex-col divide-y divide-line/70">
			{#each parts as part (part.label)}
				<li class="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
					<span
						class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-sm font-bold text-brand-dark"
						dir="ltr"
					>
						{part.label.replace('חלק ', '')}
					</span>
					<span class="min-w-0 flex-1">
						<span class="block font-semibold">{part.label}</span>
						<span class="block text-sm text-muted">{part.description}</span>
					</span>
				</li>
			{/each}
		</ul>
	</div>

	<div class="mt-8 flex flex-col gap-3">
		<Button onclick={startExam}>התחלה</Button>
		<Button variant="secondary" href="/module/{mod.id}">חזרה</Button>
	</div>
</main>
