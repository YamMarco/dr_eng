<script lang="ts">
	// Dev-only floating widget, shown when the "כלי דיבוג" setting is on.
	// Hover (or focus, for keyboard) the badge to reveal the panel.
</script>

<div class="group fixed inset-e-4 bottom-20 z-40">
	<button
		type="button"
		aria-label="כלי דיבוג"
		class="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-lg text-white shadow-lg transition active:scale-95"
	>
		🐞
	</button>

	<div
		class="pointer-events-none absolute inset-e-0 bottom-full mb-2 w-48 rounded-2xl bg-surface p-3 opacity-0 shadow-xl ring-1 ring-line/70 transition group-focus-within:pointer-events-auto group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:opacity-100"
	>
		<p class="mb-2 text-xs font-semibold text-muted">כלי דיבוג</p>
		<button
			type="button"
			onclick={() => console.log('debug: placeholder button clicked')}
			class="w-full rounded-xl border-2 border-line px-3 py-2 text-sm font-semibold transition hover:border-brand"
		>
			כפתור לדוגמה
		</button>
	</div>
</div>
