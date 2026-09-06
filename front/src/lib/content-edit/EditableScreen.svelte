<script lang="ts">
	// One carousel slide: an editable facsimile of how a screen renders in the
	// player. Prose is click-to-type (MarkdownInput, chromeless). Structural
	// bits (correct answer, token marks, question lists, numbers, modes) are
	// left to ScreenToaster. Mutates the live editModel node in place.
	// Detachable — part of src/lib/content-edit/.
	import { editModel } from './editModel.svelte';
	import MarkdownInput from './MarkdownInput.svelte';
	import type { ScreenPath } from './screenPath';
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let { nodeId, path }: { nodeId: string; path: ScreenPath } = $props();

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let screen = $derived.by<any>(() => {
		const n = editModel.node(nodeId);
		if (!n) return null;
		const list =
			path.bucket === 'preface' ? n.content.preface : n.content.rounds[path.bucket]?.screens;
		return list?.[path.index] ?? null;
	});

	const touch = () => editModel.touch();
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	function set(key: string, v: any) {
		if (screen) {
			screen[key] = v;
			touch();
		}
	}
	function pushInto(key: string, v: unknown) {
		screen[key] = [...(screen[key] ?? []), v];
		touch();
	}
	function removeFrom(key: string, i: number) {
		screen[key] = screen[key].filter((_: unknown, j: number) => j !== i);
		touch();
	}
</script>

{#if screen}
	<div class="mx-auto flex min-h-full w-full max-w-md flex-col gap-3 p-1 text-start">
		{#if screen.type === 'preface'}
			<MarkdownInput
				bare
				minRows={6}
				dir={screen.dir ?? 'auto'}
				value={screen.text}
				onInput={(v) => set('text', v)}
			/>
		{:else if screen.type === 'summary'}
			<MarkdownInput bare minRows={1} value={screen.title} onInput={(v) => set('title', v)} />
			<ul class="space-y-1">
				{#each screen.lines as _line, i (i)}
					<li class="flex items-start gap-1 rounded-lg bg-surface/70 p-1.5">
						<span class="pt-1 text-brand">•</span>
						<div class="flex-1">
							<MarkdownInput
								bare
								minRows={1}
								value={screen.lines[i]}
								onInput={(v) => {
									screen.lines[i] = v;
									touch();
								}}
							/>
						</div>
						<button type="button" class="text-xs text-danger" onclick={() => removeFrom('lines', i)}
							>✕</button
						>
					</li>
				{/each}
			</ul>
			<button
				type="button"
				class="text-xs font-semibold text-brand"
				onclick={() => pushInto('lines', '')}
			>
				+ שורה
			</button>
		{:else if screen.type === 'steps'}
			<ol class="space-y-1">
				{#each screen.steps as _step, i (i)}
					<li class="flex items-start gap-2 rounded-lg bg-surface/70 p-1.5">
						<span class="pt-1 text-xs font-bold text-muted">{i + 1}.</span>
						<div class="flex-1">
							<MarkdownInput
								bare
								minRows={1}
								value={screen.steps[i]}
								onInput={(v) => {
									screen.steps[i] = v;
									touch();
								}}
							/>
						</div>
						<button type="button" class="text-xs text-danger" onclick={() => removeFrom('steps', i)}
							>✕</button
						>
					</li>
				{/each}
			</ol>
			<button
				type="button"
				class="text-xs font-semibold text-brand"
				onclick={() => pushInto('steps', '')}
			>
				+ שלב
			</button>
		{:else if screen.type === 'mcq'}
			<MarkdownInput bare minRows={2} value={screen.prompt} onInput={(v) => set('prompt', v)} />
			<ul class="space-y-1.5">
				{#each screen.options as _opt, i (i)}
					<li
						class="flex items-center gap-2 rounded-xl border p-2 {screen.correctIndex === i
							? 'border-brand bg-brand-soft/50'
							: 'border-line'}"
					>
						<button
							type="button"
							title="סמן כנכונה"
							class="h-4 w-4 shrink-0 rounded-full border-2 {screen.correctIndex === i
								? 'border-brand bg-brand'
								: 'border-muted'}"
							onclick={() => set('correctIndex', i)}
						></button>
						<div class="flex-1">
							<MarkdownInput
								bare
								minRows={1}
								value={screen.options[i]}
								onInput={(v) => {
									screen.options[i] = v;
									touch();
								}}
							/>
						</div>
						<button
							type="button"
							class="text-xs text-danger"
							onclick={() => removeFrom('options', i)}>✕</button
						>
					</li>
				{/each}
			</ul>
			<button
				type="button"
				class="text-xs font-semibold text-brand"
				onclick={() => pushInto('options', '')}
			>
				+ אפשרות
			</button>
		{:else if screen.type === 'mark-word'}
			<p class="text-xs text-muted">המשפט - הסימון נעשה בסרגל התחתון</p>
			<MarkdownInput
				bare
				minRows={2}
				dir={screen.dir ?? 'auto'}
				value={screen.sentence}
				onInput={(v) => set('sentence', v)}
			/>
		{:else if screen.type === 'mark-all'}
			<MarkdownInput
				bare
				minRows={1}
				value={screen.instruction}
				onInput={(v) => set('instruction', v)}
			/>
			<MarkdownInput
				bare
				minRows={4}
				dir={screen.dir ?? 'auto'}
				value={screen.text}
				onInput={(v) => set('text', v)}
			/>
			<p class="text-xs text-muted">הסימון והקטגוריות - בסרגל התחתון</p>
		{:else if screen.type === 'self-check'}
			{#if 'text' in screen}
				<MarkdownInput
					bare
					minRows={3}
					dir="ltr"
					value={screen.text ?? ''}
					onInput={(v) => set('text', v)}
				/>
			{/if}
			<p class="text-xs font-bold text-muted">הנחיה</p>
			<MarkdownInput bare minRows={2} value={screen.prompt} onInput={(v) => set('prompt', v)} />
			<p class="text-xs font-bold text-muted">תשובת מודל</p>
			<div class="rounded-xl bg-surface/70 p-2">
				<MarkdownInput
					bare
					minRows={2}
					value={screen.modelAnswer}
					onInput={(v) => set('modelAnswer', v)}
				/>
			</div>
		{:else if screen.type === 'writing-task'}
			<MarkdownInput bare minRows={3} value={screen.prompt} onInput={(v) => set('prompt', v)} />
			<p class="text-xs text-muted">בנק מילים ומספרי מינימום - בסרגל התחתון</p>
		{:else if screen.type === 'question-preview'}
			<MarkdownInput bare minRows={2} value={screen.intro} onInput={(v) => set('intro', v)} />
			<ul class="space-y-1">
				{#each screen.prompts as _p, i (i)}
					<li class="flex items-start gap-1 rounded-lg bg-surface/70 p-1.5">
						<span class="pt-1 text-muted">{i + 1}.</span>
						<div class="flex-1">
							<MarkdownInput
								bare
								minRows={1}
								value={screen.prompts[i]}
								onInput={(v) => {
									screen.prompts[i] = v;
									touch();
								}}
							/>
						</div>
						<button
							type="button"
							class="text-xs text-danger"
							onclick={() => removeFrom('prompts', i)}>✕</button
						>
					</li>
				{/each}
			</ul>
			<button
				type="button"
				class="text-xs font-semibold text-brand"
				onclick={() => pushInto('prompts', '')}
			>
				+ שאלה
			</button>
		{:else if screen.type === 'word-card'}
			<div class="rounded-2xl border border-line bg-surface/70 p-4 text-center">
				<MarkdownInput
					bare
					minRows={1}
					dir="ltr"
					value={screen.word}
					onInput={(v) => set('word', v)}
				/>
				<div class="mt-2 text-muted">
					<MarkdownInput
						bare
						minRows={1}
						dir="rtl"
						value={screen.translationHe ?? ''}
						onInput={(v) => set('translationHe', v)}
					/>
				</div>
			</div>
		{:else if screen.type === 'spell-word'}
			<MarkdownInput
				bare
				minRows={1}
				dir="ltr"
				value={screen.word}
				onInput={(v) => set('word', v)}
			/>
			<p class="text-xs text-muted">מצב ({screen.mode}) - בסרגל התחתון</p>
		{:else if screen.type === 'timed-reading' || screen.type === 'timed-passage'}
			<MarkdownInput bare minRows={1} value={screen.label} onInput={(v) => set('label', v)} />
			<MarkdownInput
				bare
				minRows={6}
				dir="ltr"
				value={screen.text}
				onInput={(v) => set('text', v)}
			/>
			<p class="text-xs text-muted">
				timerKey{screen.type === 'timed-passage' ? ' + שאלות' : ''} - בסרגל התחתון
			</p>
		{:else if screen.type === 'passage-quiz' || screen.type === 'passage-mcq'}
			<MarkdownInput
				bare
				minRows={6}
				dir="ltr"
				value={screen.text}
				onInput={(v) => set('text', v)}
			/>
			<p class="text-xs text-muted">השאלות על הקטע - בסרגל התחתון</p>
		{:else if screen.type === 'time-result'}
			<MarkdownInput bare minRows={1} value={screen.label} onInput={(v) => set('label', v)} />
			<p class="text-xs text-muted">timerKey - בסרגל התחתון</p>
		{:else if screen.type === 'time-comparison'}
			<MarkdownInput bare minRows={1} value={screen.aLabel} onInput={(v) => set('aLabel', v)} />
			<MarkdownInput bare minRows={1} value={screen.bLabel} onInput={(v) => set('bLabel', v)} />
			<MarkdownInput
				bare
				minRows={1}
				value={screen.fasterMessage}
				onInput={(v) => set('fasterMessage', v)}
			/>
			<MarkdownInput
				bare
				minRows={1}
				value={screen.tieMessage}
				onInput={(v) => set('tieMessage', v)}
			/>
			<p class="text-xs text-muted">מזהי טיימר - בסרגל התחתון</p>
		{/if}
	</div>
{/if}
