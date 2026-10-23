<script lang="ts">
	// The "slide" canvas inside SlideStage: an editable facsimile of how a
	// screen renders in the player. Prose is click-to-type (MarkdownInput,
	// chromeless). Structural bits (correct answer, token marks, question
	// lists, numbers, modes) are left to SlideStage's own fields below it.
	// Mutates the live model's node in place. Works against any EditModelLike
	// (lessons' editModel or exams' examEditModel). Detachable — content-edit/.
	import MarkdownInput from './MarkdownInput.svelte';
	import StringListEditor from './fields/StringListEditor.svelte';
	import NumberField from './fields/NumberField.svelte';
	import WordChips from './fields/WordChips.svelte';
	import { mcqCorrect } from '$lib/lesson-screens/types';
	import type { ScreenPath } from './screenPath';
	import type { EditModelLike } from './editModelTypes';
	import WordImageField from './WordImageField.svelte';
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let {
		model,
		nodeId,
		path,
		isExam = false
	}: { model: EditModelLike; nodeId: string; path: ScreenPath; isExam?: boolean } = $props();

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let screen = $derived.by<any>(() => model.screenAt(nodeId, path) ?? null);

	const touch = () => model.touch();
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

	// passage-mcq: {prompt, options, correctIndex}[] questions,
	// edited inline in the same radio-button style as a plain mcq screen.
	function addMcqQuestion() {
		screen.questions = [
			...(screen.questions ?? []),
			{ prompt: '', options: ['', ''], correctIndex: 0 }
		];
		touch();
	}
	function removeMcqQuestion(qi: number) {
		screen.questions = screen.questions.filter((_: unknown, j: number) => j !== qi);
		touch();
	}
	function addMcqOption(qi: number) {
		screen.questions[qi].options = [...screen.questions[qi].options, ''];
		touch();
	}
	function removeMcqOption(qi: number, oi: number) {
		screen.questions[qi].options = screen.questions[qi].options.filter(
			(_: unknown, j: number) => j !== oi
		);
		touch();
	}

	// passage-quiz: {prompt, keywords, answerHint, points?}[] questions.
	function addKeywordQuestion() {
		screen.questions = [
			...(screen.questions ?? []),
			{ prompt: '', keywords: [''], answerHint: '' }
		];
		touch();
	}
	function removeKeywordQuestion(qi: number) {
		screen.questions = screen.questions.filter((_: unknown, j: number) => j !== qi);
		touch();
	}

	// passage: {id, text}[] paragraphs, roman-numeral order is positional (I,
	// II, III, ... - see PassageBody.svelte), not tied to `id`.
	function addParagraph() {
		const n = (screen.paragraphs?.length ?? 0) + 1;
		screen.paragraphs = [...(screen.paragraphs ?? []), { id: `p${n}`, text: '' }];
		touch();
	}
	function removeParagraph(i: number) {
		screen.paragraphs = screen.paragraphs.filter((_: unknown, j: number) => j !== i);
		touch();
	}
</script>

{#if screen}
	<div class="mx-auto flex min-h-full w-full max-w-md flex-col gap-4 px-3 pt-4 pb-8 text-start">
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
						{#if screen.ordered}<span class="pt-1 text-xs font-bold text-muted">{i + 1}.</span>{/if}
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
						class="flex items-center gap-2 rounded-xl border p-2 {mcqCorrect(screen).includes(i)
							? 'border-brand bg-brand-soft/50'
							: 'border-line'}"
					>
						<button
							type="button"
							title="סמן כנכונה"
							class="h-4 w-4 shrink-0 rounded-full border-2 {mcqCorrect(screen).includes(i)
								? 'border-brand bg-brand'
								: 'border-muted'}"
							onclick={() => {
								// Tick-N: toggle membership, keeping at least 2 right options.
								const multi = screen.correctIndices;
								if (!multi) set('correctIndex', i);
								else if (!multi.includes(i))
									set(
										'correctIndices',
										[...multi, i].sort((a, b) => a - b)
									);
								else if (multi.length > 2)
									set(
										'correctIndices',
										multi.filter((c: number) => c !== i)
									);
							}}
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
		{:else if screen.type === 'cloze-pick'}
			<p class="text-xs text-muted">
				המשפט הקבוע (אחרי הפתיח שנבחר) - האפשרויות והתשובה הנכונה בסרגל התחתון
			</p>
			<MarkdownInput bare minRows={2} value={screen.clause} onInput={(v) => set('clause', v)} />
		{:else if screen.type === 'order'}
			<MarkdownInput bare minRows={1} value={screen.prompt} onInput={(v) => set('prompt', v)} />
			<p class="text-xs text-muted">האריחים בסדר הנכון (התלמיד רואה אותם מעורבבים)</p>
			<div class="flex flex-col gap-2">
				{#each screen.tiles as _tile, i (i)}
					<div class="flex items-center gap-2">
						<span class="text-xs text-muted">{i + 1}.</span>
						<input
							bind:value={screen.tiles[i]}
							oninput={touch}
							dir="ltr"
							class="min-w-0 flex-1 rounded-lg border-2 border-line bg-surface p-1.5"
						/>
						<button
							type="button"
							class="text-xs font-semibold text-danger"
							onclick={() => removeFrom('tiles', i)}
						>
							✕
						</button>
					</div>
				{/each}
				<button
					type="button"
					class="self-start text-xs font-semibold text-brand"
					onclick={() => pushInto('tiles', '')}
				>
					+ אריח
				</button>
			</div>
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
		{:else if screen.type === 'video'}
			<p class="text-xs font-bold text-muted">קישור לקליפ (ריק = מקום שמור לקליפ)</p>
			<input
				dir="ltr"
				value={screen.src ?? ''}
				oninput={(e) => set('src', e.currentTarget.value || undefined)}
				class="w-full rounded-lg border-2 border-line bg-surface p-2 text-sm"
			/>
			<p class="text-xs font-bold text-muted">שורה מתחת לקליפ (לא חובה)</p>
			<MarkdownInput
				bare
				minRows={1}
				value={screen.caption ?? ''}
				onInput={(v) => set('caption', v)}
			/>
		{:else if screen.type === 'speak'}
			<p class="text-xs font-bold text-muted">השאלה (באנגלית)</p>
			<MarkdownInput
				bare
				minRows={2}
				dir="ltr"
				value={screen.prompt}
				onInput={(v) => set('prompt', v)}
			/>
			<p class="text-xs font-bold text-muted">טיפ (לא חובה)</p>
			<MarkdownInput bare minRows={1} value={screen.tip ?? ''} onInput={(v) => set('tip', v)} />
			<p class="text-xs font-bold text-muted">תשובה לדוגמה (לא חובה)</p>
			<div class="rounded-xl bg-surface/70 p-2">
				<MarkdownInput
					bare
					minRows={2}
					dir="ltr"
					value={screen.modelAnswer ?? ''}
					onInput={(v) => set('modelAnswer', v)}
				/>
			</div>
		{:else if screen.type === 'writing-task'}
			{@const paragraph = isExam || screen.minWords !== undefined}
			<MarkdownInput bare minRows={3} value={screen.prompt} onInput={(v) => set('prompt', v)} />
			<p class="text-xs text-muted">
				בטקסט אפשר לכתוב <code dir="ltr">{'{sentences}'}</code> ו-<code dir="ltr">{'{words}'}</code>
				- יוחלפו במספר המשפטים / המילים.
			</p>

			<!-- Same order the student sees: word bank, then the answer area. -->
			{#if screen.wordBank}
				<div>
					<p class="mb-1 flex items-center gap-2 text-xs font-semibold text-muted">
						בנק מילים
						<button
							type="button"
							class="font-normal text-danger"
							onclick={() => (screen.wordBank = undefined)}>הסר בנק</button
						>
					</p>
					<WordChips bind:items={screen.wordBank} />
				</div>
			{:else}
				<button
					type="button"
					class="self-start rounded-full border border-dashed border-brand px-2.5 py-1 text-xs font-semibold text-brand"
					onclick={() => (screen.wordBank = [''])}>+ הוספת בנק מילים</button
				>
			{/if}

			{#if !isExam}
				<div class="flex gap-1 self-start rounded-lg border border-line p-0.5 text-xs font-bold">
					<button
						type="button"
						class="rounded-md px-2 py-1 {paragraph ? 'text-muted' : 'bg-brand text-white'}"
						onclick={() => {
							screen.minWords = undefined;
							screen.maxWords = undefined;
						}}>שורה לכל משפט</button
					>
					<button
						type="button"
						class="rounded-md px-2 py-1 {paragraph ? 'bg-brand text-white' : 'text-muted'}"
						onclick={() => {
							screen.minWords = 70;
							screen.maxWords = 90;
							screen.wordCounter = undefined;
						}}>פסקה אחת (כמו בבחינה)</button
					>
				</div>
			{/if}

			{#if paragraph}
				<textarea
					disabled
					rows="4"
					dir="ltr"
					placeholder="אזור הכתיבה של התלמיד"
					class="w-full rounded-xl border-2 border-line bg-surface p-3"></textarea>
				<div class="flex flex-wrap items-center gap-x-4 gap-y-2">
					{#if !isExam}
						<NumberField
							label="מינ׳ משפטים"
							min={1}
							value={screen.minSentences}
							onChange={(v) => (screen.minSentences = v)}
						/>
					{/if}
					<NumberField
						label="מינ׳ מילים"
						value={screen.minWords}
						onChange={(v) => (screen.minWords = isExam ? v : (v ?? 0))}
					/>
					<NumberField
						label="מקס׳ מילים"
						value={screen.maxWords}
						onChange={(v) => (screen.maxWords = v)}
					/>
				</div>
			{:else}
				<NumberField
					label="מספר שורות"
					min={1}
					value={screen.minSentences}
					onChange={(v) => (screen.minSentences = v)}
				/>
				<div class="flex flex-col gap-3">
					{#each { length: screen.minSentences ?? 1 }, i (i)}
						<input
							disabled
							dir="ltr"
							placeholder="שורה {i + 1}"
							class="w-full rounded-xl border-2 border-line bg-surface px-3 py-2"
						/>
					{/each}
				</div>
				<label class="flex items-center gap-2 text-xs text-muted">
					<input
						type="checkbox"
						checked={screen.wordCounter ?? false}
						onchange={(e) => set('wordCounter', e.currentTarget.checked || undefined)}
					/>
					מונה מילים מתחת לשורות
				</label>
			{/if}
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
			<WordImageField
				src={screen.image}
				alt={screen.imageAlt || screen.word}
				onChange={(url) => set('image', url)}
			/>
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
				<div class="mt-3 border-t border-dashed border-line/60 pt-3 text-start">
					<p class="text-xs font-bold text-muted">משפט לדוגמה (**מילה** להדגשה)</p>
					<MarkdownInput
						bare
						minRows={1}
						dir="ltr"
						value={screen.exampleEn ?? ''}
						onInput={(v) => set('exampleEn', v)}
					/>
					<MarkdownInput
						bare
						minRows={1}
						dir="rtl"
						value={screen.exampleHe ?? ''}
						onInput={(v) => set('exampleHe', v)}
					/>
					<p class="mt-2 text-xs font-bold text-muted">טיפ לזיכרון</p>
					<MarkdownInput
						bare
						minRows={1}
						dir="rtl"
						value={screen.hookHe ?? ''}
						onInput={(v) => set('hookHe', v)}
					/>
				</div>
			</div>
		{:else if screen.type === 'match-pairs'}
			<div class="flex flex-col gap-2">
				{#each screen.pairs as _pair, i (i)}
					<div class="flex items-center gap-2">
						<input
							bind:value={screen.pairs[i].en}
							oninput={touch}
							dir="ltr"
							placeholder="English"
							class="min-w-0 flex-1 rounded-lg border-2 border-line bg-surface p-1.5"
						/>
						<input
							bind:value={screen.pairs[i].he}
							oninput={touch}
							dir="rtl"
							placeholder="עברית"
							class="min-w-0 flex-1 rounded-lg border-2 border-line bg-surface p-1.5"
						/>
						<button
							type="button"
							class="text-xs font-semibold text-danger"
							onclick={() => removeFrom('pairs', i)}
						>
							✕
						</button>
					</div>
				{/each}
				<button
					type="button"
					class="self-start text-xs font-semibold text-brand"
					onclick={() => pushInto('pairs', { en: '', he: '' })}
				>
					+ זוג
				</button>
			</div>
		{:else if screen.type === 'spell-word'}
			<MarkdownInput
				bare
				minRows={1}
				dir="ltr"
				value={screen.word}
				onInput={(v) => set('word', v)}
			/>
			<p class="text-xs text-muted">🎧 האזנה - בסרגל התחתון</p>
		{:else if screen.type === 'timed-reading'}
			<MarkdownInput bare minRows={1} value={screen.label} onInput={(v) => set('label', v)} />
			<MarkdownInput
				bare
				minRows={6}
				dir="ltr"
				value={screen.text}
				onInput={(v) => set('text', v)}
			/>
			<p class="text-xs text-muted">timerKey - בסרגל התחתון</p>
		{:else if screen.type === 'passage-mcq'}
			{#if screen.timerKey}
				<MarkdownInput bare minRows={1} value={screen.label} onInput={(v) => set('label', v)} />
			{/if}
			<MarkdownInput
				bare
				minRows={6}
				dir="ltr"
				value={screen.text}
				onInput={(v) => set('text', v)}
			/>
			<div class="mt-2 flex flex-col gap-4 border-t border-dashed border-line/60 pt-4">
				{#each screen.questions as _q, qi (qi)}
					<div class="flex flex-col gap-1.5">
						<div class="flex items-center justify-between">
							{#if screen.questions.length > 1}
								<span class="text-xs font-bold text-muted">שאלה {qi + 1}</span>
							{:else}
								<span></span>
							{/if}
							<label class="flex items-center gap-1 text-xs font-bold text-muted">
								ניקוד
								<input
									type="number"
									min="0"
									value={screen.questions[qi].points ?? 1}
									oninput={(e) => {
										screen.questions[qi].points = e.currentTarget.valueAsNumber;
										touch();
									}}
									class="w-14 rounded-lg border-2 border-line bg-surface p-1 font-normal"
								/>
							</label>
							<button
								type="button"
								class="text-xs text-danger"
								onclick={() => removeMcqQuestion(qi)}>מחק שאלה ✕</button
							>
						</div>
						<MarkdownInput
							bare
							minRows={1}
							value={screen.questions[qi].prompt}
							onInput={(v) => {
								screen.questions[qi].prompt = v;
								touch();
							}}
						/>
						<ul class="space-y-1.5">
							{#each screen.questions[qi].options as _opt, oi (oi)}
								<li
									class="flex items-center gap-2 rounded-xl border p-2 {screen.questions[qi]
										.correctIndex === oi
										? 'border-brand bg-brand-soft/50'
										: 'border-line'}"
								>
									<button
										type="button"
										title="סמן כנכונה"
										class="h-4 w-4 shrink-0 rounded-full border-2 {screen.questions[qi]
											.correctIndex === oi
											? 'border-brand bg-brand'
											: 'border-muted'}"
										onclick={() => {
											screen.questions[qi].correctIndex = oi;
											touch();
										}}
									></button>
									<div class="flex-1">
										<MarkdownInput
											bare
											minRows={1}
											value={screen.questions[qi].options[oi]}
											onInput={(v) => {
												screen.questions[qi].options[oi] = v;
												touch();
											}}
										/>
									</div>
									<button
										type="button"
										class="text-xs text-danger"
										onclick={() => removeMcqOption(qi, oi)}>✕</button
									>
								</li>
							{/each}
						</ul>
						<button
							type="button"
							class="self-start text-xs font-semibold text-brand"
							onclick={() => addMcqOption(qi)}
						>
							+ אפשרות
						</button>
					</div>
				{/each}
				<button
					type="button"
					class="self-start text-xs font-semibold text-brand"
					onclick={addMcqQuestion}
				>
					+ הוסף שאלה
				</button>
			</div>
			<p class="text-xs text-muted">טיימר (אופציונלי) - בסרגל התחתון</p>
		{:else if screen.type === 'passage-quiz'}
			<MarkdownInput
				bare
				minRows={6}
				dir="ltr"
				value={screen.text}
				onInput={(v) => set('text', v)}
			/>
			<div class="mt-2 flex flex-col gap-4 border-t border-dashed border-line/60 pt-4">
				{#each screen.questions as _q, qi (qi)}
					<div class="flex flex-col gap-1.5">
						<div class="flex items-center justify-between">
							{#if screen.questions.length > 1}
								<span class="text-xs font-bold text-muted">שאלה {qi + 1}</span>
							{:else}
								<span></span>
							{/if}
							<label class="flex items-center gap-1 text-xs font-bold text-muted">
								ניקוד
								<input
									type="number"
									min="0"
									value={screen.questions[qi].points ?? 1}
									oninput={(e) => {
										screen.questions[qi].points = e.currentTarget.valueAsNumber;
										touch();
									}}
									class="w-14 rounded-lg border-2 border-line bg-surface p-1 font-normal"
								/>
							</label>
							<button
								type="button"
								class="text-xs text-danger"
								onclick={() => removeKeywordQuestion(qi)}>מחק שאלה ✕</button
							>
						</div>
						<MarkdownInput
							bare
							minRows={1}
							value={screen.questions[qi].prompt}
							onInput={(v) => {
								screen.questions[qi].prompt = v;
								touch();
							}}
						/>
						<p class="text-xs text-muted">מילות מפתח - כולן חייבות להופיע בתשובה</p>
						<div class="ps-1">
							<StringListEditor
								bind:items={screen.questions[qi].keywords}
								addLabel="+ מילת מפתח"
								dir="ltr"
							/>
						</div>
						<MarkdownInput
							bare
							minRows={1}
							dir="auto"
							value={screen.questions[qi].answerHint}
							onInput={(v) => {
								screen.questions[qi].answerHint = v;
								touch();
							}}
						/>
					</div>
				{/each}
				<button
					type="button"
					class="self-start text-xs font-semibold text-brand"
					onclick={addKeywordQuestion}
				>
					+ הוסף שאלה
				</button>
			</div>
		{:else if screen.type === 'time-result'}
			<MarkdownInput bare minRows={1} value={screen.label} onInput={(v) => set('label', v)} />
			<p class="text-xs text-muted">timerKey - בסרגל התחתון</p>
		{:else if screen.type === 'passage'}
			<MarkdownInput
				bare
				minRows={1}
				dir="ltr"
				value={screen.title ?? ''}
				onInput={(v) => set('title', v)}
			/>
			<div class="flex flex-col gap-3">
				{#each screen.paragraphs as _para, i (i)}
					<div class="rounded-xl border border-line bg-surface/70 p-2">
						<div class="mb-1 flex items-center justify-between">
							<span class="text-xs font-bold text-muted">פסקה {i + 1}</span>
							<button type="button" class="text-xs text-danger" onclick={() => removeParagraph(i)}
								>✕</button
							>
						</div>
						<MarkdownInput
							bare
							minRows={3}
							dir="ltr"
							value={screen.paragraphs[i].text}
							onInput={(v) => {
								screen.paragraphs[i].text = v;
								touch();
							}}
						/>
					</div>
				{/each}
			</div>
			<button
				type="button"
				class="self-start text-xs font-semibold text-brand"
				onclick={addParagraph}
			>
				+ פסקה
			</button>
		{:else if screen.type === 'sentence-completion'}
			<p class="text-xs text-muted">לפני החלק שהתלמיד/ה ישלימו</p>
			<MarkdownInput bare minRows={1} value={screen.before} onInput={(v) => set('before', v)} />
			<p class="text-xs text-muted">אחרי (למשל נקודה)</p>
			<MarkdownInput bare minRows={1} value={screen.after} onInput={(v) => set('after', v)} />
			<p class="text-xs text-muted">תשובות מקובלות (כל אחת מספיקה)</p>
			<StringListEditor bind:items={screen.modelAnswers} addLabel="+ תשובה" dir="auto" />
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
