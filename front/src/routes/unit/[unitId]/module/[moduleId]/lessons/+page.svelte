<script lang="ts">
	import { onMount } from 'svelte';
	import { FlaskConical } from '@lucide/svelte';
	import { draw, fade, scale } from 'svelte/transition';
	import { backOut } from 'svelte/easing';
	import AppBar from '$lib/components/AppBar.svelte';
	import Button from '$lib/components/Button.svelte';
	import LessonProgressBar from '$lib/components/LessonProgressBar.svelte';
	import { editStore } from '$lib/content-edit/editStore.svelte';
	import LessonRunner from '$lib/lesson-screens/LessonRunner.svelte';
	import { sectionMeta, getLessonsBySection, type LessonNode } from '$lib/content';
	import { themeForSectionIndex, type SectionTheme } from '$lib/sectionThemes';
	import { isScreenEmpty, type LessonScreen } from '$lib/lesson-screens/types';
	import { lessonIcon } from '$lib/lessonIcon';
	import { SvelteSet, SvelteMap } from 'svelte/reactivity';
	import { debugStore } from '$lib/debug.svelte';
	import { lessonProgress } from '$lib/lessonProgress.svelte';
	import { moduleLocation } from '$lib/moduleLocation.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let group = $derived(data.group);
	let mod = $derived(data.mod);
	let base = $derived(`/unit/${group.id}/module/${mod.id}`);

	// The generic canvas graph every module's path is drawn from: every
	// lesson carries its own placement (x, y) and prerequisite lesson ids
	// (AND'd together — empty = a root, unlocked from the start). Sections
	// only contribute grouping (theme color, heading) — all layout and
	// locking flows from this graph, so a module's structure (linear,
	// branching, parallel tracks that converge, ...) is just data.
	const MIN_CANVAS_WIDTH = 400;
	const NODE_HALF_WIDTH = 40; // the big node is h-20 w-20
	const HEADING_HALF_WIDTH = 64; // section headings are w-32
	const LABEL_HALF_WIDTH = 88; // the node label popup is w-44

	/** Nudge (px) that keeps a node's label popup inside the canvas. */
	function labelShift(nodeX: number): number {
		const center = canvasCenter + nodeX;
		return (
			Math.max(0, LABEL_HALF_WIDTH - center) + Math.min(0, canvasWidth - center - LABEL_HALF_WIDTH)
		);
	}

	type PathNode = {
		lesson: LessonNode;
		sectionId: string;
		sectionTitleHe: string;
		/** 1-based position within its own section — shown on the node. */
		lessonNumber: number;
		theme: SectionTheme;
		x: number;
		y: number;
		/** No scored questions at all. Shown bigger. */
		isBig: boolean;
	};

	/** No screens written yet anywhere — the node still shows (title only) but never unlocks. */
	function hasContent(lesson: LessonNode): boolean {
		const all = [lesson.content.preface, ...lesson.content.rounds.map((r) => r.screens)];
		return all.some((screens) => screens.some((screen) => !isScreenEmpty(screen)));
	}

	// Every section's lessons, flattened into one graph. Section order only
	// matters for which color a section's nodes get — actual unlocking is
	// driven entirely by each lesson's own `prerequisites`.
	let nodes = $derived.by(() => {
		const result: PathNode[] = [];
		if (mod.id !== 'c') return result;
		sectionMeta.forEach((section, sectionIndex) => {
			const theme = themeForSectionIndex(sectionIndex);
			getLessonsBySection(section.id).forEach((lesson, lessonIndexInSection) => {
				result.push({
					lesson,
					sectionId: section.id,
					sectionTitleHe: section.titleHe,
					lessonNumber: lessonIndexInSection + 1,
					theme,
					x: lesson.position.x,
					y: lesson.position.y,
					isBig: lesson.big
				});
			});
		});
		return result;
	});

	let nodeById = $derived(new SvelteMap(nodes.map((node) => [node.lesson.id, node])));

	// One heading per section, placed above that section's first node.
	let sectionHeadings = $derived.by(() => {
		const seen = new SvelteSet<string>();
		const result: { sectionId: string; titleHe: string; x: number; y: number }[] = [];
		for (const node of nodes) {
			if (seen.has(node.sectionId)) continue;
			seen.add(node.sectionId);
			result.push({
				sectionId: node.sectionId,
				titleHe: node.sectionTitleHe,
				x: node.x,
				y: node.y
			});
		}
		return result;
	});

	// Sized to the real node extents (nodes sit at +-x from the centre, so their
	// circles poke out past the nominal width) — symmetric so x stays centre-relative.
	let canvasWidth = $derived(
		Math.max(
			MIN_CANVAS_WIDTH,
			2 * nodes.reduce((max, node) => Math.max(max, Math.abs(node.x) + NODE_HALF_WIDTH), 0),
			2 *
				sectionHeadings.reduce(
					(max, heading) => Math.max(max, Math.abs(heading.x) + HEADING_HALF_WIDTH),
					0
				)
		)
	);
	let canvasCenter = $derived(canvasWidth / 2);

	// Fit-to-width: on narrow phones the fixed-width canvas is shrunk (never
	// enlarged) so it can't push the page wider than the screen.
	let viewWidth = $state(0);
	let fitScale = $derived(viewWidth ? Math.min(1, viewWidth / canvasWidth) : 1);

	// Straight connector lines from each prerequisite to its dependent node.
	let edges = $derived.by(() => {
		const result: {
			id: string;
			x1: number;
			y1: number;
			x2: number;
			y2: number;
			targetY: number;
		}[] = [];
		for (const node of nodes) {
			for (const prereqId of node.lesson.required) {
				const from = nodeById.get(prereqId);
				if (!from) continue;
				result.push({
					id: `${prereqId}->${node.lesson.id}`,
					x1: canvasCenter + from.x,
					y1: from.y + (from.isBig ? 40 : 32),
					x2: canvasCenter + node.x,
					y2: node.y + (node.isBig ? 40 : 32),
					targetY: node.y
				});
			}
		}
		return result;
	});

	let canvasHeight = $derived(nodes.reduce((max, node) => Math.max(max, node.y), 0) + 200);

	// Load-up animation for the path: every node sharing a y (parallel-track
	// rows converge on the same value) pops in together, row by row, starting
	// at whichever row will land at the top of the screen — the student's
	// last-known position on a return visit (see moduleLocation below), or
	// literally the first row on a first visit. Rows above that point just
	// appear without a wait since scrolling put them off-screen anyway.
	const reducedMotion =
		typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	const ROW_STAGGER_MS = 55;
	const ROW_STAGGER_CAP_MS = 400;
	let lastLessonId = $derived(moduleLocation.get(mod.id));
	let rowOrder = $derived.by(() => {
		const ys = [...new Set(nodes.map((node) => node.y))].sort((a, b) => a - b);
		return new Map(ys.map((y, row) => [y, row]));
	});
	let anchorRow = $derived.by(() => {
		const anchorNode = lastLessonId ? nodeById.get(lastLessonId) : undefined;
		return rowOrder.get(anchorNode?.y ?? 0) ?? 0;
	});
	function delayForY(y: number): number {
		if (reducedMotion) return 0;
		const rowsBelowAnchor = Math.max(0, (rowOrder.get(y) ?? 0) - anchorRow);
		return 40 + Math.min(rowsBelowAnchor * ROW_STAGGER_MS, ROW_STAGGER_CAP_MS);
	}
	function edgeDelay(targetY: number): number {
		return reducedMotion ? 0 : Math.max(0, delayForY(targetY) - 60);
	}

	// Jump straight to wherever the student left off, with that row at the
	// top of the screen, instead of the top of a possibly long path. Instant
	// (no smooth scroll) so it doesn't fight with the pop-in animation
	// starting at the same time.
	onMount(() => {
		if (!lastLessonId) return;
		document
			.querySelector(`[data-lesson-node-id="${CSS.escape(lastLessonId)}"]`)
			?.scrollIntoView({ block: 'start' });
	});

	function isDone(lessonId: string): boolean {
		return lessonProgress.isCompleted(
			mod.id,
			lessonId,
			nodeById.get(lessonId)?.lesson.requiredRounds
		);
	}

	function roundsCompleted(lessonId: string): number {
		return lessonProgress.completedRounds(mod.id, lessonId);
	}

	function totalRounds(node: PathNode): number {
		return node.lesson.content.rounds.length;
	}

	/** The round to open next: the first not-yet-completed one, capped at the last. */
	function nextRoundIndex(node: PathNode): number {
		return Math.min(roundsCompleted(node.lesson.id), totalRounds(node) - 1);
	}

	// The debug "unlock all" flag is a full override — it comes before every
	// other check, content-availability included, so it always does what it
	// says regardless of what's been authored yet. A lesson the student has
	// already completed always stays open too, even if debug-unlocking was
	// used earlier to reach it out of order and its formal prerequisites
	// still aren't otherwise satisfied — turning "unlock all" back off must
	// never re-lock real progress (its own following nodes then stay open
	// too, same as any other completed lesson, via the normal chain).
	function isUnlocked(node: PathNode): boolean {
		if (debugStore.unlockAll) return true;
		if (isDone(node.lesson.id)) return true;
		if (!hasContent(node.lesson)) return false;
		return node.lesson.required.every((id) => isDone(id));
	}

	// Which node's title+start label is showing (click to toggle, not hover).
	let openLabelId = $state<string | null>(null);

	function toggleLabel(lessonId: string) {
		openLabelId = openLabelId === lessonId ? null : lessonId;
	}

	// Which node (and which of its rounds) is currently open in the runner —
	// null activeId means we're showing the path.
	let activeId = $state<string | null>(null);
	let activeRoundIndex = $state(0);

	let activeNode = $derived(activeId ? nodeById.get(activeId) : undefined);

	// "Continue to next lesson" only makes sense within the same section's
	// authored order — a node feeding into another section (e.g. a
	// convergence point) just returns to the path instead.
	let sectionLessonIds = $derived.by(() => {
		const bySection = new SvelteMap<string, string[]>();
		for (const node of nodes) {
			const list = bySection.get(node.sectionId) ?? [];
			list.push(node.lesson.id);
			bySection.set(node.sectionId, list);
		}
		return bySection;
	});

	function nextInSameSection(node: PathNode): PathNode | undefined {
		const ids = sectionLessonIds.get(node.sectionId) ?? [];
		const index = ids.indexOf(node.lesson.id);
		const nextId = index >= 0 ? ids[index + 1] : undefined;
		return nextId ? nodeById.get(nextId) : undefined;
	}

	let hasNextLesson = $derived.by(() => {
		if (!activeNode) return false;
		const next = nextInSameSection(activeNode);
		if (!next || !hasContent(next.lesson)) return false;
		// Predict the unlock state right after this lesson gets marked done.
		return next.lesson.required.every((id) => id === activeNode!.lesson.id || isDone(id));
	});

	function openNode(node: PathNode) {
		openLabelId = null;
		activeId = node.lesson.id;
		activeRoundIndex = nextRoundIndex(node);
		moduleLocation.set(mod.id, node.lesson.id);
	}

	function closeNode() {
		activeId = null;
	}

	// The node that just flipped to "done" and is due a celebratory pop the
	// moment the path is visible again — cleared once the animation's played.
	let justCompletedId = $state<string | null>(null);

	function celebrateIfNewlyDone(lessonId: string, wasDone: boolean) {
		if (wasDone || !isDone(lessonId)) return;
		justCompletedId = lessonId;
		setTimeout(() => {
			if (justCompletedId === lessonId) justCompletedId = null;
		}, 900);
	}

	function finishNode() {
		if (activeId) {
			const wasDone = isDone(activeId);
			lessonProgress.markRoundCompleted(mod.id, activeId, activeRoundIndex);
			celebrateIfNewlyDone(activeId, wasDone);
		}
		activeId = null;
	}

	function nextRound() {
		if (!activeId) return;
		lessonProgress.markRoundCompleted(mod.id, activeId, activeRoundIndex);
		activeRoundIndex += 1;
	}

	function finishNodeAndContinue() {
		if (!activeNode) return;
		const wasDone = isDone(activeNode.lesson.id);
		lessonProgress.markRoundCompleted(mod.id, activeNode.lesson.id, activeRoundIndex);
		celebrateIfNewlyDone(activeNode.lesson.id, wasDone);
		const next = nextInSameSection(activeNode);
		if (!next) {
			activeId = null;
			return;
		}
		activeId = next.lesson.id;
		activeRoundIndex = nextRoundIndex(next);
		moduleLocation.set(mod.id, next.lesson.id);
	}

	function dismissLabelOnOutsideClick(event: MouseEvent) {
		if (openLabelId === null) return;
		const target = event.target as HTMLElement;
		if (!target.closest('[data-lesson-node]')) openLabelId = null;
	}

	// Debug-only scratch node to preview every vocabulary screen a new word
	// gets — not part of any section's real graph/progress, so it's kept
	// entirely separate from `nodes`/`activeId` above.
	const vocabTestScreens: LessonScreen[] = [
		{ type: 'word-card', word: 'butterfly', translationHe: 'פרפר', imageAlt: 'butterfly' },
		{ type: 'spell-word', word: 'butterfly', mode: 'copy' },
		{ type: 'spell-word', word: 'butterfly', mode: 'listen' }
	];
	let vocabTestOpen = $state(false);
</script>

<svelte:window onclick={dismissLabelOnOutsideClick} />

<AppBar title="{i18n.dict.lessons.titlePrefix} {mod.letter}" back={base} />

<main class="mx-auto w-full max-w-lg flex-1 overflow-x-clip px-4 pt-36 pb-12">
	{#if nodes.length === 0}
		<div
			class="flex flex-col items-center rounded-3xl border-2 border-dashed border-line bg-surface/60 px-6 py-14 text-center"
		>
			<span
				class="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-soft text-ink/60"
			>
				<svg
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="h-7 w-7"
					aria-hidden="true"
				>
					<circle cx="12" cy="12" r="9" />
					<path d="M12 8v4l2.5 2.5" />
				</svg>
			</span>
			<p class="mt-4 font-semibold">{i18n.dict.lessons.emptyTitle(mod.letter)}</p>
		</div>
	{:else}
		<div bind:clientWidth={viewWidth} class="w-full">
			<div
				class="relative mx-auto"
				style="width: {canvasWidth * fitScale}px; height: {canvasHeight * fitScale}px"
			>
				<div
					class="absolute top-0 left-0 origin-top-left"
					style="width: {canvasWidth}px; height: {canvasHeight}px; transform: scale({fitScale})"
				>
					<svg
						class="pointer-events-none absolute inset-0"
						width={canvasWidth}
						height={canvasHeight}
						viewBox="0 0 {canvasWidth} {canvasHeight}"
						aria-hidden="true"
					>
						{#each edges as edge (edge.id)}
							<line
								x1={edge.x1}
								y1={edge.y1}
								x2={edge.x2}
								y2={edge.y2}
								class="stroke-line"
								stroke-width="3"
								stroke-linecap="round"
								in:draw={{ duration: 220, delay: edgeDelay(edge.targetY) }}
							/>
						{/each}
					</svg>

					{#each sectionHeadings as heading (heading.sectionId)}
						<p
							class="absolute -translate-x-1/2 text-center text-xs font-bold text-muted"
							style="left: {canvasCenter + heading.x}px; top: {heading.y - 32}px; width: 8rem"
							in:fade={{ duration: 180, delay: reducedMotion ? 0 : 40 }}
						>
							{heading.titleHe}
						</p>
					{/each}

					{#each nodes as node (node.lesson.id)}
						{@const unlocked = isUnlocked(node)}
						{@const done = isDone(node.lesson.id)}
						{@const size = node.isBig ? 'h-20 w-20 text-3xl' : 'h-16 w-16 text-2xl'}
						<div
							data-lesson-node
							data-lesson-node-id={node.lesson.id}
							class="absolute -translate-x-1/2 scroll-mt-24 transition-opacity {unlocked || done
								? ''
								: 'opacity-40'} {openLabelId === node.lesson.id ? 'z-10' : ''}"
							style="left: {canvasCenter + node.x}px; top: {node.y}px; --puck-border: {node.theme
								.nodeShadow}; --puck-lip: {node.theme.nodeFace}"
							in:scale={{ start: 0.35, duration: 300, delay: delayForY(node.y), easing: backOut }}
						>
							<!-- Unlocked-and-playable nodes get a push-button cap: the rim (this
					     element) stays put, the inner .node-face recedes on tap (see
					     layout.css) — done/locked stay flat (badge, not a pressable CTA). -->
							<button
								type="button"
								disabled={!unlocked}
								title={unlocked ? undefined : i18n.dict.lesson.lessonLocked}
								onclick={() => toggleLabel(node.lesson.id)}
								class="flex shrink-0 items-center justify-center rounded-full font-extrabold transition-colors {size} {node
									.lesson.id === justCompletedId
									? 'motion-safe:animate-pop-correct'
									: ''} {unlocked
									? done
										? node.theme.soft
										: 'node-socket'
									: 'cursor-not-allowed bg-line/60 text-muted'}"
							>
								<span
									class="flex items-center justify-center rounded-full {unlocked && !done
										? 'node-face'
										: ''}"
								>
									{#if done}
										<svg
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2.5"
											stroke-linecap="round"
											stroke-linejoin="round"
											class="h-7 w-7"
											aria-hidden="true"
										>
											<path d="M20 6 9 17l-5-5" />
										</svg>
									{:else if unlocked}
										{lessonIcon(node.lesson.id)}
									{:else}
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
											<rect x="4" y="10" width="16" height="10" rx="2" />
											<path d="M8 10V7a4 4 0 0 1 8 0v3" />
										</svg>
									{/if}
								</span>
							</button>

							{#if unlocked && openLabelId === node.lesson.id}
								<!-- Click-triggered label instead of a full-screen modal: title + start
						     (or, once round 1 is done, the next round to play). -->
								<div
									in:scale={{ start: 0.55, duration: 160, easing: backOut }}
									out:scale={{ start: 0.55, duration: 90 }}
									class="absolute bottom-full left-1/2 z-10 mb-3 flex w-44 origin-bottom flex-col gap-3 rounded-2xl bg-surface p-4 text-center shadow-xl ring-1 ring-line/70"
									style="translate: calc(-50% + {labelShift(node.x)}px)"
								>
									<div class="flex flex-col gap-2">
										<p class="text-sm font-bold">{node.lesson.titleHe}</p>
										<LessonProgressBar
											compact
											segments={node.lesson.content.rounds.map(() => 1)}
											current={Math.min(roundsCompleted(node.lesson.id), totalRounds(node))}
										/>
									</div>
									<Button onclick={() => openNode(node)}>
										{i18n.dict.lesson.startRound(nextRoundIndex(node) + 1)}
									</Button>
									<p class="text-xs font-semibold text-muted tabular" dir="ltr">{node.lesson.id}</p>
									{#if editStore.available}
										<!-- Open this lesson in the /edit workspace (dev, or once
								     unlocked on the deployed site). Detachable — see
								     src/lib/content-edit/README.md. -->
										<a
											href="/edit?section={node.lesson.section}&lesson={node.lesson.id}"
											class="inline-flex items-center justify-center gap-1 rounded-xl border-2 border-dashed border-ink/40 px-3 py-1.5 text-xs font-semibold text-ink/70"
										>
											✎ ערוך
										</a>
									{/if}
								</div>
							{/if}
						</div>
					{/each}
				</div>
			</div>
		</div>
	{/if}
</main>

{#if debugStore.enabled}
	<!-- Debug-only: preview every vocabulary screen type on a scratch node,
	     isolated from any real lesson/section. -->
	<button
		type="button"
		onclick={() => (vocabTestOpen = true)}
		title="בדיקת מסכי אוצר מילים (דיבוג)"
		class="fixed inset-s-4 top-40 z-30 flex h-14 w-14 items-center justify-center rounded-full border-2 border-dashed border-ink/40 bg-surface text-ink/60 shadow-lg transition active:scale-95"
	>
		<FlaskConical size={22} aria-hidden="true" />
	</button>
{/if}

<!-- Open the /edit workspace. Only for module 'c' — that's the only module
     the content model / content-edit tooling covers so far (see the same
     `mod.id !== 'c'` guard above). /edit itself is password-gated on the
     deployed site. Detachable — see src/lib/content-edit/README.md. -->
{#if mod.id === 'c'}
	<a
		href="/edit"
		title="עריכת תוכן"
		class="fixed inset-s-4 top-56 z-30 flex h-14 w-14 items-center justify-center rounded-full border-2 border-dashed border-ink/40 bg-surface text-lg text-ink/60 shadow-lg transition active:scale-95"
	>
		✎
	</a>
{/if}

{#if vocabTestOpen}
	<LessonRunner
		screens={vocabTestScreens}
		lessonLabel="בדיקת אוצר מילים (דיבוג)"
		hasNextLesson={false}
		onExit={() => (vocabTestOpen = false)}
		onFinish={() => (vocabTestOpen = false)}
		onFinishAndContinue={() => (vocabTestOpen = false)}
		onNextRound={() => (vocabTestOpen = false)}
	/>
{/if}

{#if activeNode}
	<!-- Keyed so "continue to next lesson"/"continue to next round" force a
	     full remount instead of just handing the same runner instance new
	     `lesson`/`roundIndex` props. -->
	{#key `${activeId}-${activeRoundIndex}`}
		<LessonRunner
			lesson={activeNode.lesson}
			roundIndex={activeRoundIndex}
			lessonLabel={totalRounds(activeNode) > 1
				? `${activeNode.lesson.titleHe} — ${i18n.dict.lesson.roundLabel(activeRoundIndex + 1, totalRounds(activeNode))}`
				: activeNode.lesson.titleHe}
			{hasNextLesson}
			onExit={closeNode}
			onFinish={finishNode}
			onFinishAndContinue={finishNodeAndContinue}
			onNextRound={nextRound}
		/>
	{/key}
{/if}
