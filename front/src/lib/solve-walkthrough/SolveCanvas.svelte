<script lang="ts">
	// The exam page itself (question + passage), with every mark from steps
	// 0..step drawn over it. Only the current step's marks animate in; earlier
	// ones are already on the page, so going back and forth stays calm.
	import { onMount } from 'svelte';
	import {
		circlePath,
		lineRects,
		linkPath,
		resolve,
		strikePath,
		toBlocks,
		underlinePath,
		type Mark,
		type Rect,
		type Walkthrough
	} from './model';

	let { walkthrough, step }: { walkthrough: Walkthrough; step: number } = $props();

	let canvas = $state<HTMLDivElement>();
	// Bumped whenever text may have reflowed, so mark geometry is re-measured.
	let layout = $state(0);

	let blocks = $derived(toBlocks(walkthrough));

	let focus = $derived.by(() => {
		for (let s = step; s >= 0; s--) {
			const f = walkthrough.steps[s]?.focus;
			if (f) return new Set(f.flatMap((t) => resolve(blocks, t)));
		}
		return null;
	});

	let drawn = $derived(
		walkthrough.steps
			.slice(0, step + 1)
			.flatMap((s, si) => (s.marks ?? []).map((mark, mi) => ({ mark, si, mi })))
	);

	type Shape = {
		key: string;
		mark: Mark;
		current: boolean;
		delay: number;
		lines: Rect[];
		to?: Rect[];
	};

	let shapes = $derived.by((): Shape[] => {
		void layout;
		if (!canvas) return [];
		const origin = canvas.getBoundingClientRect();
		const measure = (keys: string[]) =>
			lineRects(
				keys.map((k) => canvas!.querySelector<HTMLElement>(`[data-k="${k}"]`)).filter((el) => !!el),
				origin
			);
		return drawn.map(({ mark, si, mi }) => ({
			key: `${si}-${mi}`,
			mark,
			current: si === step,
			delay: mi * 0.45,
			lines: measure(resolve(blocks, mark.kind === 'link' ? mark.from : mark.target)),
			to: mark.kind === 'link' ? measure(resolve(blocks, mark.to)) : undefined
		}));
	});

	onMount(() => {
		const ro = new ResizeObserver(() => layout++);
		ro.observe(canvas!);
		document.fonts?.ready.then(() => layout++);
		return () => ro.disconnect();
	});

	const PENS = {
		circle: { path: circlePath, stroke: 'stroke-danger', width: 2.5 },
		underline: { path: underlinePath, stroke: 'stroke-brand', width: 3 },
		strike: { path: strikePath, stroke: 'stroke-danger', width: 2.5 }
	};

	// Bring the step's first mark into view (focus-only steps leave the scroll alone).
	$effect(() => {
		const first = walkthrough.steps[step]?.marks?.[0];
		const target = first && (first.kind === 'link' ? first.to : first.target);
		const key = target && resolve(blocks, target)[0];
		if (!key || !canvas) return;
		canvas
			.querySelector(`[data-k="${key}"]`)
			?.scrollIntoView({ block: 'center', behavior: 'smooth' });
	});

	const lit = (key: string) => !focus || focus.has(key);
	const blockLit = (id: string, count: number) =>
		!focus || Array.from({ length: count }, (_, i) => `${id}:${i}`).some((k) => focus!.has(k));
</script>

{#snippet words(id: string, list: string[])}
	{#each list as word, i (i)}
		<!-- inline-block + margin instead of spaces (each-block edges trim
		     whitespace); inline-blocks still wrap between each other. -->
		<span
			data-k="{id}:{i}"
			class="me-[0.28em] inline-block leading-tight transition-opacity duration-500 {lit(
				`${id}:${i}`
			)
				? ''
				: 'opacity-20'}">{word}</span
		>
	{/each}
{/snippet}

<div bind:this={canvas} class="relative" dir="ltr">
	<!-- Highlighter: drawn over the text (the cards are opaque), translucent so words stay readable. -->
	<svg
		class="pointer-events-none absolute inset-0 z-10 h-full w-full overflow-visible"
		aria-hidden="true"
	>
		{#each shapes as s (s.key)}
			{#if s.mark.kind === 'highlight'}
				{#each s.lines as r, i (i)}
					<rect
						x={r.x - 3}
						y={r.y + 2}
						width={r.w + 6}
						height={r.h - 2}
						rx="4"
						class="fill-mark-yellow/45 {s.current ? 'sweep' : ''}"
						style="animation-delay: {s.delay}s"
					/>
				{/each}
			{/if}
		{/each}
	</svg>

	<div class="relative space-y-4">
		<div class="rounded-2xl border border-line bg-surface p-4">
			<p
				class="mb-1 text-xs font-bold tracking-wide text-muted uppercase transition-opacity duration-500 {blockLit(
					'q',
					blocks[0].words.length
				)
					? ''
					: 'opacity-20'}"
			>
				Question
			</p>
			<p class="text-lg leading-loose font-semibold">{@render words('q', blocks[0].words)}</p>
		</div>

		<div class="space-y-3 rounded-2xl border border-line bg-surface p-4 leading-loose">
			{#each blocks.slice(1) as b (b.id)}
				<p>
					<span
						class="me-1 font-bold text-brand-dark transition-opacity duration-500 {blockLit(
							b.id,
							b.words.length
						)
							? ''
							: 'opacity-20'}">{b.label}</span
					>
					{@render words(b.id, b.words)}
				</p>
			{/each}
		</div>
	</div>

	<!-- Over the text: the pen. -->
	<svg
		class="pointer-events-none absolute inset-0 z-20 h-full w-full overflow-visible"
		aria-hidden="true"
	>
		{#each shapes as s (s.key)}
			{@const cls = `fill-none ${s.current ? 'draw' : ''}`}
			{@const style = `animation-delay: ${s.delay}s`}
			{#if s.mark.kind === 'circle' || s.mark.kind === 'underline' || s.mark.kind === 'strike'}
				{@const pen = PENS[s.mark.kind]}
				{#each s.lines as r, i (i)}
					<path
						d={pen.path(r)}
						pathLength="1"
						class="{cls} {pen.stroke}"
						stroke-width={pen.width}
						stroke-linecap="round"
						{style}
					/>
				{/each}
			{:else if s.mark.kind === 'link' && s.lines[0] && s.to?.[0]}
				{@const end = s.to[0]}
				<path
					d={linkPath(s.lines[0], end)}
					pathLength="1"
					class="{cls} stroke-brand"
					stroke-width="2.5"
					stroke-linecap="round"
					{style}
				/>
				<path
					d="M{end.x + end.w / 2 - 6},{end.y - 12} L{end.x + end.w / 2},{end.y - 4} L{end.x +
						end.w / 2 +
						6},{end.y - 12}"
					class="fill-none stroke-brand {s.current ? 'pop' : ''}"
					stroke-width="2.5"
					stroke-linecap="round"
					stroke-linejoin="round"
					style="animation-delay: {s.delay + 0.5}s"
				/>
			{/if}
		{/each}
	</svg>

	<!-- Margin notes, in Hebrew, pinned above the first marked line. -->
	{#each shapes as s (s.key)}
		{#if s.mark.kind !== 'link' && s.mark.note && s.lines[0]}
			<span
				dir="rtl"
				class="pointer-events-none absolute z-20 rounded-full bg-danger px-1.5 text-[11px] leading-4 font-bold whitespace-nowrap text-white shadow-sm {s.current
					? 'pop'
					: ''}"
				style="left: {Math.max(0, s.lines[0].x - 4)}px; top: {s.lines[0].y -
					19}px; animation-delay: {s.delay + 0.4}s"
			>
				{s.mark.note}
			</span>
		{/if}
	{/each}
</div>

<style>
	.draw {
		stroke-dasharray: 1;
		stroke-dashoffset: 1;
		animation: draw 0.6s ease-out forwards;
	}
	.sweep {
		transform-box: fill-box;
		transform-origin: left;
		transform: scaleX(0);
		animation: sweep 0.45s ease-out forwards;
	}
	.pop {
		opacity: 0;
		animation: pop 0.25s ease-out forwards;
	}
	@keyframes draw {
		to {
			stroke-dashoffset: 0;
		}
	}
	@keyframes sweep {
		to {
			transform: scaleX(1);
		}
	}
	@keyframes pop {
		from {
			opacity: 0;
			transform: translateY(4px);
		}
		to {
			opacity: 1;
			transform: none;
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.draw,
		.sweep,
		.pop {
			animation-duration: 0.01s;
		}
	}
</style>
