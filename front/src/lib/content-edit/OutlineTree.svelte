<script lang="ts">
	// The selected lesson's structure: preface + rounds + screens, with
	// round management and drag-to-move screens (within or across buckets).
	// Reads/writes the shared editModel. Detachable — src/lib/content-edit/.
	import { editModel } from './editModel.svelte';
	import { SCREEN_TYPE_GROUPS } from './screenSkeletons';
	import { countQuestions } from '$lib/lesson-screens/types';
	import type { LessonScreen } from '$lib/lesson-screens/types';
	import type { ScreenPath } from './screenPath';
	import type { Issue } from './validate';

	let { issues = [] }: { issues?: Issue[] } = $props();

	const ICON: Record<LessonScreen['type'], string> = {
		preface: '📄',
		steps: '🪜',
		summary: '📋',
		'question-preview': '👁',
		'word-card': '🃏',
		mcq: '◉',
		'mark-word': '✍',
		'mark-all': '🖍',
		'spell-word': '🔤',
		'writing-task': '📝',
		'timed-passage': '⏱',
		'passage-quiz': '❓',
		'passage-mcq': '❓',
		'self-check': '🔎',
		'timed-reading': '📖',
		'time-result': '⏲',
		'time-comparison': '⚖'
	};

	let node = $derived(editModel.selectedNode);
	let sel = $derived(editModel.selectedPath);

	// buckets in display order
	type Bucket = {
		key: ScreenPath['bucket'];
		title: string;
		note?: string;
		screens: LessonScreen[];
	};
	let buckets = $derived<Bucket[]>(
		node
			? [
					{
						key: 'preface',
						title: 'פתיח',
						note: 'מוצג פעם אחת לפני סבב 1',
						screens: node.content.preface
					},
					...node.content.rounds.map((r, i) => ({
						key: i as ScreenPath['bucket'],
						title: `סבב ${i + 1}`,
						note: i === 0 ? 'חובה - משוחק עם הפתיח, פותח את המסלול' : 'תרגול רשות',
						screens: r.screens
					}))
				]
			: []
	);

	let collapsed = $state<Set<string>>(new Set());
	const bkey = (b: ScreenPath['bucket']) => (b === 'preface' ? 'preface' : `r${b}`);
	function toggleCollapse(b: ScreenPath['bucket']) {
		const k = bkey(b);
		const next = new Set(collapsed);
		next.has(k) ? next.delete(k) : next.add(k);
		collapsed = next;
	}

	function issueFor(path: ScreenPath): Issue | undefined {
		return issues.find(
			(i) => i.path && i.path.bucket === path.bucket && i.path.index === path.index
		);
	}

	// ---- drag to move ----
	let drag = $state<ScreenPath | null>(null);
	let over = $state<string | null>(null); // `${bucketKey}:${index}`

	function onDrop(bucket: ScreenPath['bucket'], index: number) {
		if (drag && node) editModel.moveScreen(node.id, drag, { bucket, index });
		drag = null;
		over = null;
	}

	// ---- add-screen menu ----
	let addMenuFor = $state<string | null>(null);
	function addScreen(bucket: ScreenPath['bucket'], type: LessonScreen['type']) {
		if (node) editModel.addScreen(node.id, bucket, -1, type);
		addMenuFor = null;
	}
</script>

{#if node}
	<div class="space-y-3 text-sm">
		{#each buckets as bucket (bkey(bucket.key))}
			{@const k = bkey(bucket.key)}
			{@const isRound = bucket.key !== 'preface'}
			<section class="rounded-xl border border-line/70 bg-surface/60">
				<header class="flex items-center gap-1.5 px-2 py-1.5">
					<button
						type="button"
						class="text-muted hover:text-ink"
						onclick={() => toggleCollapse(bucket.key)}
						title={collapsed.has(k) ? 'הרחב' : 'כווץ'}
					>
						{collapsed.has(k) ? '▸' : '▾'}
					</button>
					<span class="font-bold">{bucket.title}</span>
					<span class="text-xs text-muted">· {bucket.screens.length} מסכים · {bucket.note}</span>
					<span class="flex-1"></span>
					{#if isRound}
						{@const ri = bucket.key as number}
						<button
							type="button"
							class="btn"
							title="הזז מעלה"
							disabled={ri === 0}
							onclick={() => node && editModel.moveRound(node.id, ri, ri - 1)}>▲</button
						>
						<button
							type="button"
							class="btn"
							title="הזז מטה"
							disabled={ri === node.content.rounds.length - 1}
							onclick={() => node && editModel.moveRound(node.id, ri, ri + 1)}>▼</button
						>
						<button
							type="button"
							class="btn"
							title="שכפל סבב"
							onclick={() => node && editModel.duplicateRound(node.id, ri)}>⎘</button
						>
						<button
							type="button"
							class="btn text-danger"
							title="מחק סבב"
							disabled={node.content.rounds.length <= 1}
							onclick={() =>
								confirm(`למחוק את ${bucket.title}?`) && node && editModel.deleteRound(node.id, ri)}
							>🗑</button
						>
					{/if}
				</header>

				{#if !collapsed.has(k)}
					<ul class="space-y-0.5 px-2 pb-2">
						{#each bucket.screens as screen, i (i)}
							{@const path = { bucket: bucket.key, index: i } as ScreenPath}
							{@const iss = issueFor(path)}
							{@const isSel = sel && sel.bucket === bucket.key && sel.index === i}
							<li>
								{#if over === `${k}:${i}`}<div class="h-0.5 rounded bg-brand"></div>{/if}
								<div
									role="button"
									tabindex="0"
									draggable="true"
									class="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-1.5 {isSel
										? 'bg-brand-soft ring-1 ring-brand/40'
										: 'hover:bg-line/40'}"
									onclick={() => node && editModel.select(node.id, path)}
									onkeydown={(e) => e.key === 'Enter' && node && editModel.select(node.id, path)}
									ondragstart={() => (drag = path)}
									ondragend={() => {
										drag = null;
										over = null;
									}}
									ondragover={(e) => {
										e.preventDefault();
										over = `${k}:${i}`;
									}}
									ondrop={(e) => {
										e.preventDefault();
										onDrop(bucket.key, i);
									}}
								>
									<span class="cursor-grab text-muted select-none">⠿</span>
									<span aria-hidden="true">{ICON[screen.type]}</span>
									<span class="font-mono text-xs" dir="ltr">{screen.type}</span>
									{#if countQuestions(screen) > 0}
										<span class="rounded bg-brand/15 px-1 text-[10px] font-bold text-brand-dark">
											{countQuestions(screen)}?
										</span>
									{/if}
									{#if iss}
										<span title={iss.message} class="text-xs"
											>{iss.severity === 'error' ? '🔴' : '🟠'}</span
										>
									{/if}
									<span class="flex-1 truncate text-xs text-muted" dir="auto">
										{'text' in screen
											? screen.text
											: 'prompt' in screen
												? screen.prompt
												: 'title' in screen
													? screen.title
													: ''}
									</span>
									<button
										type="button"
										class="btn text-danger"
										title="מחק מסך"
										onclick={(e) => {
											e.stopPropagation();
											node && editModel.deleteScreen(node.id, path);
										}}>✕</button
									>
								</div>
							</li>
						{/each}
						<li
							role="none"
							class="rounded-lg border border-dashed border-line/70 {over === `${k}:end`
								? 'bg-brand-soft'
								: ''}"
							ondragover={(e) => {
								e.preventDefault();
								over = `${k}:end`;
							}}
							ondrop={(e) => {
								e.preventDefault();
								onDrop(bucket.key, bucket.screens.length);
							}}
						>
							<div class="relative">
								<button
									type="button"
									class="w-full px-2 py-1 text-start text-xs font-semibold text-brand"
									onclick={() => (addMenuFor = addMenuFor === k ? null : k)}
								>
									+ הוסף מסך
								</button>
								{#if addMenuFor === k}
									<div
										class="absolute z-10 mt-1 w-56 rounded-xl border border-line bg-canvas p-1 shadow-lg"
									>
										{#each SCREEN_TYPE_GROUPS as g (g.label)}
											<p class="px-2 pt-1 text-[10px] font-bold text-muted">{g.label}</p>
											{#each g.types as t (t)}
												<button
													type="button"
													class="block w-full rounded px-2 py-1 text-start font-mono text-xs hover:bg-line/50"
													dir="ltr"
													onclick={() => addScreen(bucket.key, t)}
												>
													{ICON[t]}
													{t}
												</button>
											{/each}
										{/each}
									</div>
								{/if}
							</div>
						</li>
					</ul>
				{/if}
			</section>
		{/each}

		<button
			type="button"
			class="w-full rounded-xl border border-dashed border-brand/50 py-1.5 text-xs font-bold text-brand hover:bg-brand-soft/50"
			onclick={() => node && editModel.addRound(node.id)}
		>
			+ הוסף סבב
		</button>
	</div>
{/if}

<style>
	.btn {
		border-radius: 0.375rem;
		padding: 0 0.25rem;
		font-size: 0.75rem;
		color: var(--color-muted, #6b7280);
	}
	.btn:hover:not(:disabled) {
		background: rgb(0 0 0 / 0.06);
	}
	.btn:disabled {
		opacity: 0.3;
	}
</style>
