<script lang="ts">
	// Profile-picture-style crop dialog: drag to move, slider to zoom, button to
	// rotate. The bright frame is the exact 16:9 rounded card the player shows
	// (WORD_IMAGE); everything outside it is dimmed. Accept exports the framed
	// area as a JPEG at the final size. Detachable — content-edit/.
	import { Check, RotateCw, X } from '@lucide/svelte';
	import { WORD_IMAGE } from '$lib/lesson-screens/wordImage';

	let {
		file,
		onAccept,
		onCancel
	}: { file: File; onAccept: (jpeg: Blob) => Promise<void>; onCancel: () => void } = $props();

	// One cropper per picked file (the parent remounts it), so reading `file` once is right.
	// svelte-ignore state_referenced_locally
	const url = URL.createObjectURL(file);
	$effect(() => () => URL.revokeObjectURL(url));

	let img = $state<HTMLImageElement>();
	let nw = $state(0);
	let nh = $state(0);
	let frameW = $state(0);
	let zoom = $state(1);
	let rot = $state(0); // 0 | 90 | 180 | 270
	let ox = $state(0);
	let oy = $state(0);
	let busy = $state(false);
	let failed = $state('');

	let frameH = $derived(frameW / WORD_IMAGE.aspect);
	// The image after rotation, and the scale at which it just covers the frame.
	let rw = $derived(rot % 180 ? nh : nw);
	let rh = $derived(rot % 180 ? nw : nh);
	let scale = $derived(nw ? Math.max(frameW / rw, frameH / rh) * zoom : 1);

	// Keep the image covering the frame — no empty edges in the result.
	function clampOffset() {
		const mx = Math.max(0, (rw * scale - frameW) / 2);
		const my = Math.max(0, (rh * scale - frameH) / 2);
		ox = Math.min(mx, Math.max(-mx, ox));
		oy = Math.min(my, Math.max(-my, oy));
	}

	function rotate() {
		rot = (rot + 90) % 360;
		ox = oy = 0;
	}

	let drag: { x: number; y: number; ox: number; oy: number } | null = null;
	function down(e: PointerEvent) {
		(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
		drag = { x: e.clientX, y: e.clientY, ox, oy };
	}
	function move(e: PointerEvent) {
		if (!drag) return;
		ox = drag.ox + e.clientX - drag.x;
		oy = drag.oy + e.clientY - drag.y;
		clampOffset();
	}

	async function accept() {
		if (!img || busy) return;
		busy = true;
		failed = '';
		const k = WORD_IMAGE.width / frameW;
		const canvas = document.createElement('canvas');
		canvas.width = WORD_IMAGE.width;
		canvas.height = WORD_IMAGE.height;
		const ctx = canvas.getContext('2d')!;
		ctx.fillStyle = '#fff'; // JPEG has no alpha
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		ctx.translate(canvas.width / 2 + ox * k, canvas.height / 2 + oy * k);
		ctx.rotate((rot * Math.PI) / 180);
		ctx.scale(scale * k, scale * k);
		ctx.drawImage(img, -nw / 2, -nh / 2);
		const blob = await new Promise<Blob | null>((r) => canvas.toBlob(r, 'image/jpeg', 0.85));
		try {
			if (!blob) throw new Error('לא ניתן לעבד את התמונה');
			await onAccept(blob);
		} catch (e) {
			failed = e instanceof Error ? e.message : String(e);
			busy = false;
		}
	}
</script>

<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3">
	<div class="w-full max-w-md overflow-hidden rounded-2xl bg-surface shadow-xl">
		<!-- The stage: the padding shows the dimmed image around the frame. -->
		<div
			class="relative touch-none overflow-hidden bg-black p-6 select-none"
			role="presentation"
			onpointerdown={down}
			onpointermove={move}
			onpointerup={() => (drag = null)}
			onpointercancel={() => (drag = null)}
		>
			<div bind:clientWidth={frameW} class="relative aspect-video w-full">
				<img
					bind:this={img}
					src={url}
					alt=""
					draggable="false"
					onload={() => {
						nw = img!.naturalWidth;
						nh = img!.naturalHeight;
					}}
					class="pointer-events-none absolute top-1/2 left-1/2 max-w-none cursor-grab"
					style="width:{nw}px;height:{nh}px;transform:translate(-50%,-50%) translate({ox}px,{oy}px) rotate({rot}deg) scale({scale})"
				/>
				<div
					class="pointer-events-none absolute inset-0 rounded-3xl ring-2 ring-white"
					style="box-shadow:0 0 0 9999px rgb(0 0 0 / 0.6)"
				></div>
			</div>
		</div>

		<div class="flex items-center gap-3 p-3">
			<input
				type="range"
				min="1"
				max="4"
				step="0.01"
				bind:value={zoom}
				oninput={clampOffset}
				aria-label="זום"
				class="flex-1 accent-brand"
			/>
			<button
				type="button"
				onclick={rotate}
				title="סיבוב"
				aria-label="סיבוב"
				class="flex h-9 w-9 items-center justify-center rounded-full bg-accent-soft text-ink/70"
			>
				<RotateCw size={18} aria-hidden="true" />
			</button>
		</div>

		{#if failed}<p class="px-3 pb-2 text-sm text-danger">{failed}</p>{/if}

		<div class="flex justify-end gap-2 border-t border-line p-3">
			<button
				type="button"
				onclick={onCancel}
				disabled={busy}
				class="flex items-center gap-1 rounded-xl border-2 border-line px-4 py-2 text-sm font-semibold"
			>
				<X size={16} aria-hidden="true" /> ביטול
			</button>
			<button
				type="button"
				onclick={accept}
				disabled={busy || !nw}
				class="flex items-center gap-1 rounded-xl bg-brand px-4 py-2 text-sm font-semibold text-white disabled:opacity-50"
			>
				<Check size={16} aria-hidden="true" />
				{busy ? 'שומר...' : 'אישור'}
			</button>
		</div>
	</div>
</div>
