<script lang="ts">
	// Undo/redo buttons + Ctrl+Z / Ctrl+Shift+Z (or Ctrl+Y) for either edit
	// model. Shortcuts are skipped inside text fields so the browser's own
	// text undo keeps working there. Detachable — part of src/lib/content-edit/.
	let { model } = $props<{
		model: { canUndo: boolean; canRedo: boolean; undo(): void; redo(): void };
	}>();

	function inTextField(t: EventTarget | null) {
		const el = t as HTMLElement | null;
		return !!el && (el.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName));
	}

	function onKey(e: KeyboardEvent) {
		if (!(e.ctrlKey || e.metaKey) || inTextField(e.target)) return;
		const k = e.key.toLowerCase();
		if (k === 'z' && !e.shiftKey) {
			e.preventDefault();
			model.undo();
		} else if ((k === 'z' && e.shiftKey) || k === 'y') {
			e.preventDefault();
			model.redo();
		}
	}

	const btn =
		'rounded-lg border border-line px-2.5 py-1.5 text-sm font-semibold text-muted hover:bg-line/60 disabled:cursor-not-allowed disabled:opacity-40';
</script>

<svelte:window onkeydown={onKey} />

<div class="flex gap-1">
	<button
		type="button"
		class={btn}
		disabled={!model.canUndo}
		title="ביטול (Ctrl+Z)"
		onclick={() => model.undo()}
	>
		↩️ ביטול
	</button>
	<button
		type="button"
		class={btn}
		disabled={!model.canRedo}
		title="שחזור (Ctrl+Shift+Z)"
		onclick={() => model.redo()}
	>
		↪️ שחזור
	</button>
</div>
