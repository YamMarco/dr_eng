<script lang="ts">
	import { FlaskConical } from '@lucide/svelte';
	import AppBar from '$lib/components/AppBar.svelte';
	import ClaudeWritingPrototype from './ClaudeWritingPrototype.svelte';
	import GptWritingPrototype from './GptWritingPrototype.svelte';

	type Prototype = 'claude' | 'gpt';
	let { onclose }: { onclose: () => void } = $props();
	let selected = $state<Prototype | null>(null);
</script>

<div class="fixed inset-0 z-50 flex flex-col overflow-hidden bg-canvas">
	<AppBar
		title={selected === null
			? 'מעבדת הכתיבה'
			: selected === 'claude'
				? 'אב־טיפוס Claude'
				: 'אב־טיפוס GPT'}
		onback={selected === null ? onclose : () => (selected = null)}
	/>

	<main class="mx-auto w-full max-w-lg flex-1 overflow-y-auto px-4 py-6 pb-12">
		{#if selected === null}
			<div class="flex flex-col items-center text-center">
				<span
					class="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-soft text-ink/70"
				>
					<FlaskConical size={30} aria-hidden="true" />
				</span>
				<h2 class="mt-4 text-2xl font-extrabold">איזו גישה בודקים?</h2>
				<p class="mt-2 max-w-sm text-sm leading-relaxed text-muted">
					שני הניסויים משתמשים באותה מטלה ובאותו מחוון, אבל מלמדים בדרך שונה.
				</p>
			</div>

			<div class="mt-7 space-y-3">
				<button
					type="button"
					onclick={() => (selected = 'claude')}
					class="w-full rounded-3xl border-2 border-line bg-surface p-5 text-start shadow-sm transition hover:border-brand active:scale-[0.99]"
				>
					<div class="flex items-center justify-between gap-3">
						<h3 class="text-lg font-extrabold">Claude</h3>
						<span class="rounded-full bg-accent-soft px-3 py-1 text-xs font-bold">מחוון בסוף</span>
					</div>
					<p class="mt-2 text-sm leading-relaxed text-muted">
						כותבים טיוטה מלאה ומקבלים פירוט של 30 הנקודות לפי ארבעת סעיפי המחוון.
					</p>
				</button>

				<button
					type="button"
					onclick={() => (selected = 'gpt')}
					class="w-full rounded-3xl border-2 border-line bg-surface p-5 text-start shadow-sm transition hover:border-brand active:scale-[0.99]"
				>
					<div class="flex items-center justify-between gap-3">
						<h3 class="text-lg font-extrabold">GPT</h3>
						<span class="rounded-full bg-brand-soft px-3 py-1 text-xs font-bold text-brand-dark"
							>מאמן בשלבים</span
						>
					</div>
					<p class="mt-2 text-sm leading-relaxed text-muted">
						מתכננים עמדה, סיבה ודוגמה, כותבים, ואז מתקנים חולשה אחת לפני בדיקה נוספת.
					</p>
				</button>
			</div>

			<p
				class="mt-6 rounded-2xl border border-dashed border-line p-3 text-center text-xs leading-relaxed text-muted"
			>
				זהו ניסוי מקומי בלבד. הטקסט אינו נשלח ל‑Claude, ל‑GPT או לשירות חיצוני אחר.
			</p>
		{:else if selected === 'claude'}
			<ClaudeWritingPrototype />
		{:else}
			<GptWritingPrototype />
		{/if}
	</main>
</div>
