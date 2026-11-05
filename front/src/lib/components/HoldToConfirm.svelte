<script lang="ts">
	import type { Snippet } from 'svelte';

	// A button that acts only after being held (a finger or the mouse, or Enter / Space) for
	// `duration` ms, with a fill showing the progress; letting go early cancels. For actions
	// that can't be undone. Assistive technology often can't hold, and sends a plain click: the
	// first click then arms the button (the content shows it, see `armed`) and the next confirms.

	type Props = {
		onconfirm: () => void;
		duration?: number;
		disabled?: boolean;
		class?: string;
		children: Snippet<[{ armed: boolean }]>;
	};
	let {
		onconfirm,
		duration = 1500,
		disabled = false,
		class: extra = '',
		children
	}: Props = $props();

	let progress = $state(0);
	let armed = $state(false);
	let frame = 0;
	let startedAt = 0;
	let held = false;
	/** A pointer or key hold began since the last click: that click is not assistive technology's. */
	let interacted = false;
	let armTimer: ReturnType<typeof setTimeout> | undefined;

	function tick(now: number) {
		progress = Math.min(1, (now - startedAt) / duration);
		if (progress < 1) {
			frame = requestAnimationFrame(tick);
			return;
		}
		held = false;
		setTimeout(() => (interacted = false));
		onconfirm();
	}

	function start() {
		if (disabled || held) return;
		held = true;
		interacted = true;
		armed = false;
		startedAt = performance.now();
		frame = requestAnimationFrame(tick);
	}

	function cancel() {
		if (!held) return;
		held = false;
		cancelAnimationFrame(frame);
		progress = 0;
		// The click that follows a release comes right after: leave the flag until then.
		setTimeout(() => (interacted = false));
	}

	function onclick() {
		if (disabled) return;
		if (interacted) {
			interacted = false;
			return;
		}
		if (armed) {
			clearTimeout(armTimer);
			armed = false;
			onconfirm();
			return;
		}
		armed = true;
		armTimer = setTimeout(() => (armed = false), 6000);
	}

	function onkeydown(e: KeyboardEvent) {
		if (e.key !== 'Enter' && e.key !== ' ') return;
		e.preventDefault();
		if (!e.repeat) start();
	}
	function onkeyup(e: KeyboardEvent) {
		if (e.key !== 'Enter' && e.key !== ' ') return;
		e.preventDefault();
		cancel();
	}
</script>

<button
	type="button"
	{disabled}
	{onclick}
	{onkeydown}
	{onkeyup}
	onpointerdown={(e) => (e.pointerType !== 'mouse' || e.button === 0) && start()}
	onpointerup={cancel}
	onpointerleave={cancel}
	onpointercancel={cancel}
	onblur={cancel}
	oncontextmenu={(e) => e.preventDefault()}
	class="relative [touch-action:manipulation] overflow-hidden select-none [-webkit-touch-callout:none] {extra}"
>
	<span
		aria-hidden="true"
		class="pointer-events-none absolute inset-y-0 inset-s-0 bg-miss/20"
		style="width: {progress * 100}%"
	></span>
	<span class="pointer-events-none relative flex w-full flex-col items-start gap-1">
		{@render children({ armed })}
	</span>
</button>
