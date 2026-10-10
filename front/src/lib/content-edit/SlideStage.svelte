<script lang="ts">
	// The big central editor (PowerPoint's "current slide" pane): the selected
	// screen rendered large and directly editable, with every control for it —
	// type, structural fields, delete — in this one place. No popup, no
	// separate panel. Detachable — part of src/lib/content-edit/.
	import type { EditModelLike } from './editModelTypes';
	import { SCREEN_TYPE_GROUPS } from './screenSkeletons';
	import { typeHe } from './screenTypeNames';
	import { checkScreen, type ScreenProblem } from '$lib/lesson-screens/screenChecks';
	import {
		activeLine,
		formatBold,
		formatItalic,
		formatUnderline,
		formatStrike,
		formatCode,
		formatLink,
		formatColor,
		formatHeader,
		formatAlign,
		formatDirection,
		formatTextBlock,
		formatCallout,
		formatDivider,
		formatBulletList,
		formatNumberList
	} from './activeField.svelte';
	import { TEXT_COLOR_PALETTE, type TextColorName } from '$lib/lesson-screens/textColors';

	const HEADER_OPTIONS: { level: 0 | 1 | 2 | 3; label: string }[] = [
		{ level: 0, label: 'רגיל' },
		{ level: 1, label: 'H1' },
		{ level: 2, label: 'H2' },
		{ level: 3, label: 'H3' }
	];
	let colorMenuOpen = $state(false);
	let headerMenuOpen = $state(false);
	import EditableScreen from './EditableScreen.svelte';
	import MarkdownInput from './MarkdownInput.svelte';
	import TextMarker from './fields/TextMarker.svelte';
	import { expandAccepted } from '$lib/lesson-screens/acceptedAnswers';
	import SettingsGroup from './fields/SettingsGroup.svelte';
	import NumberField from './fields/NumberField.svelte';
	import StringListEditor from './fields/StringListEditor.svelte';
	import {
		MARK_ALL_PALETTE,
		markAllSwatch,
		type MarkAllSwatch
	} from '$lib/lesson-screens/markAllColors';
	import { formatScreenLocation, type ScreenPath } from './screenPath';
	import type { LessonScreen } from '$lib/lesson-screens/types';

	let {
		model,
		nodeId,
		path,
		isExam = false
	}: {
		model: EditModelLike;
		nodeId: string;
		path: ScreenPath | null;
		/** Points only mean anything in an exam - hide the points field in a lesson. */
		isExam?: boolean;
	} = $props();

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let screen = $derived.by<any>(() => (path ? (model.screenAt(nodeId, path) ?? null) : null));

	// Copy-pasteable pointer to this exact screen (e.g. "q-words-1 · round 3 ·
	// screen 6"), so a bug report can name a screen precisely instead of
	// "the fourth one in that round".
	let location = $derived(path ? formatScreenLocation(nodeId, path) : '');
	// Preview width of the slide: desktop = the lesson runner's max width, phone = a typical handset.
	let device = $state<'desk' | 'phone'>('desk');
	// Wide screens only: fold the settings away so the slide centers on the canvas.
	let settingsCollapsed = $state(false);
	let locationCopied = $state(false);
	let copyTimer: ReturnType<typeof setTimeout> | undefined;
	async function copyLocation() {
		try {
			await navigator.clipboard.writeText(location);
		} catch {
			return;
		}
		locationCopied = true;
		clearTimeout(copyTimer);
		copyTimer = setTimeout(() => (locationCopied = false), 1200);
	}

	// Any in-place field mutation flips dirty (skip the initial run per screen).
	let sig = $derived(screen ? JSON.stringify(screen) : '');
	let lastSig = '';
	$effect(() => {
		if (sig && sig !== lastSig) {
			if (lastSig !== '') model.touch();
			lastSig = sig;
		}
	});

	let raw = $state('');
	let rawOpen = $state(false);
	let rawProblems = $state<ScreenProblem[]>([]);
	function openRaw() {
		raw = JSON.stringify(screen, null, 2);
		rawProblems = [];
		rawOpen = true;
	}
	// Pasted JSON (often edited by an AI) goes through the same checks as the
	// /mcp validate_screens tool; it's only applied when there are no errors.
	function applyRaw() {
		if (!path) return;
		const result = checkScreen(raw);
		rawProblems = result.problems.filter((p) => p.severity === 'error');
		if (!result.ok) return;
		model.applyScreen(nodeId, path, result.screen);
		rawOpen = false;
	}

	// ---- mark-all category marking ----
	let pending = $state<number[]>([]);
	let markColors = $derived.by(() => {
		const m: Record<number, MarkAllSwatch> = {};
		if (screen?.type !== 'mark-all') return m;
		for (const i of screen.correctIndices ?? []) m[i] = markAllSwatch(undefined);
		for (const c of screen.categories ?? [])
			for (const i of c.indices) m[i] = markAllSwatch(c.color);
		return m;
	});
	function markPending(cat: string | null) {
		for (const i of pending) {
			screen.correctIndices = (screen.correctIndices ?? []).filter((x: number) => x !== i);
			for (const c of screen.categories ?? []) c.indices = c.indices.filter((x: number) => x !== i);
			if (cat === null) screen.correctIndices.push(i);
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			else screen.categories.find((c: any) => c.name === cat)?.indices.push(i);
		}
		screen.correctIndices.sort((a: number, b: number) => a - b);
		for (const c of screen.categories ?? []) c.indices.sort((a: number, b: number) => a - b);
		pending = [];
		window.getSelection()?.removeAllRanges();
	}
	function unmark(i: number) {
		screen.correctIndices = (screen.correctIndices ?? []).filter((x: number) => x !== i);
		for (const c of screen.categories ?? []) c.indices = c.indices.filter((x: number) => x !== i);
	}
	function addCategory() {
		const name = prompt('שם קטגוריה (שמות / שלילה / מספרים …)')?.trim();
		if (!name) return;
		screen.categories ??= [];
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		if (screen.categories.some((c: any) => c.name === name)) return;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const used = new Set(screen.categories.map((c: any) => c.color));
		const color = (MARK_ALL_PALETTE.find((p) => !used.has(p.key)) ?? MARK_ALL_PALETTE[0]).key;
		screen.categories.push({ name, color, indices: [] });
	}
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	function delCategory(cat: any) {
		screen.correctIndices.push(...cat.indices);
		screen.correctIndices = [...new Set<number>(screen.correctIndices)].sort((a, b) => a - b);
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		screen.categories = screen.categories.filter((c: any) => c !== cat);
		if (screen.categories.length === 0) delete screen.categories;
	}
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	function cycleColor(cat: any) {
		const idx = MARK_ALL_PALETTE.findIndex((p) => p.key === cat.color);
		cat.color = MARK_ALL_PALETTE[(idx + 1) % MARK_ALL_PALETTE.length].key;
	}

	// Screen types with a single top-level `points` field (quiz mode only,
	// ignored in lesson mode) - passage-mcq/passage-quiz have per-question
	// points instead, edited inline in EditableScreen's question loop.
	const POINTS_TYPES = new Set([
		'mcq',
		'cloze-pick',
		'mark-all',
		'spell-word',
		'match-pairs',
		'sentence-completion',
		'writing-task'
	]);
	// Writing screens with a per-screen auto-check switch (lessons only:
	// exams never auto-check).
	const AUTO_CHECK_TYPES = new Set(['writing-task', 'self-check']);
</script>

{#if !path || !screen}
	<div class="flex h-full items-center justify-center p-10 text-center text-sm text-muted">
		בחרו מסך מהרשימה מימין, או הוסיפו מסך חדש כדי להתחיל לערוך.
	</div>
{:else}
	<div class="flex h-full min-h-0 flex-col">
		<div
			class="flex flex-wrap items-center gap-x-2 gap-y-1.5 border-b border-line/70 bg-surface/60 px-4 py-2"
		>
			<!-- Toolbar order: screen type | text style | paragraph | blocks | JSON, delete -->
			<select
				class="rounded-lg border-2 border-brand bg-canvas px-2 py-1 text-xs font-bold"
				title="סוג המסך"
				aria-label="סוג המסך"
				value={screen.type}
				onchange={(e) =>
					path && model.setScreenType(nodeId, path, e.currentTarget.value as LessonScreen['type'])}
			>
				{#each SCREEN_TYPE_GROUPS as g (g.label)}
					<optgroup label={g.label}>
						{#each g.types as t (t)}<option value={t}>{typeHe(t)}</option>{/each}
					</optgroup>
				{/each}
			</select>
			<span class="mx-1 h-4 w-px bg-line"></span>
			<!-- One shared formatting toolbar for every text field on this screen
			     (whichever field is focused). mousedown preventDefault keeps that
			     field's focus/selection alive through the click, so execCommand
			     still lands on it. -->
			<div
				class="flex overflow-hidden rounded-lg border border-line"
				role="toolbar"
				aria-label="עיצוב טקסט"
			>
				<button
					type="button"
					class="px-2 py-1 text-xs font-bold hover:bg-line/60"
					title="הדגשה"
					onmousedown={(e) => e.preventDefault()}
					onclick={formatBold}>B</button
				>
				<button
					type="button"
					class="border-s border-line px-2 py-1 text-xs italic hover:bg-line/60"
					title="נטוי"
					onmousedown={(e) => e.preventDefault()}
					onclick={formatItalic}>I</button
				>
				<button
					type="button"
					class="border-s border-line px-2 py-1 text-xs underline hover:bg-line/60"
					title="קו תחתון"
					onmousedown={(e) => e.preventDefault()}
					onclick={formatUnderline}>U</button
				>
				<button
					type="button"
					class="border-s border-line px-2 py-1 text-xs line-through hover:bg-line/60"
					title="קו חוצה"
					onmousedown={(e) => e.preventDefault()}
					onclick={formatStrike}>S</button
				>
				<button
					type="button"
					class="border-s border-line px-2 py-1 font-mono text-xs hover:bg-line/60"
					title="קוד"
					onmousedown={(e) => e.preventDefault()}
					onclick={formatCode}>{'<>'}</button
				>
				<button
					type="button"
					class="border-s border-line px-2 py-1 text-xs hover:bg-line/60"
					title="קישור"
					onmousedown={(e) => e.preventDefault()}
					onclick={formatLink}>🔗</button
				>
			</div>
			<div class="relative">
				<button
					type="button"
					class="rounded-lg border border-line px-2 py-1 text-xs hover:bg-line/60"
					title="צבע טקסט"
					onmousedown={(e) => e.preventDefault()}
					onclick={() => (colorMenuOpen = !colorMenuOpen)}
				>
					🎨
				</button>
				{#if colorMenuOpen}
					<button
						type="button"
						class="fixed inset-0 z-10 cursor-default"
						aria-label="סגירת בחירת הצבע"
						onclick={() => (colorMenuOpen = false)}
					></button>
					<div
						class="absolute top-full z-20 mt-1 flex w-28 flex-wrap gap-1.5 rounded-lg border border-line bg-surface p-2 shadow-md"
						role="menu"
						aria-label="בחירת צבע טקסט"
					>
						{#each Object.entries(TEXT_COLOR_PALETTE) as [name, hex] (name)}
							<button
								type="button"
								class="size-5 shrink-0 rounded-full ring-1 ring-line/70"
								style="background:{hex}"
								title={name}
								onmousedown={(e) => e.preventDefault()}
								onclick={() => {
									formatColor(name as TextColorName);
									colorMenuOpen = false;
								}}
							></button>
						{/each}
					</div>
				{/if}
			</div>
			<span class="mx-1 h-4 w-px bg-line"></span>
			<div class="relative">
				<button
					type="button"
					class="flex items-center gap-1 rounded-lg border border-line px-2 py-1 text-xs font-bold hover:bg-line/60"
					title="כותרת שורה"
					onmousedown={(e) => e.preventDefault()}
					onclick={() => (headerMenuOpen = !headerMenuOpen)}
				>
					{activeLine.level ? `H${activeLine.level}` : '¶'}
					<span class="text-[8px] text-muted">▾</span>
				</button>
				{#if headerMenuOpen}
					<button
						type="button"
						class="fixed inset-0 z-10 cursor-default"
						aria-label="סגירת בחירת הכותרת"
						onclick={() => (headerMenuOpen = false)}
					></button>
					<div
						class="absolute top-full z-20 mt-1 flex flex-col overflow-hidden rounded-lg border border-line bg-surface shadow-md"
						role="menu"
						aria-label="כותרת שורה"
					>
						{#each HEADER_OPTIONS as opt (opt.level)}
							<button
								type="button"
								class="px-3 py-1 text-start text-xs font-bold hover:bg-line/60 {activeLine.level ===
								opt.level
									? 'bg-brand-soft text-brand-dark'
									: ''}"
								onmousedown={(e) => e.preventDefault()}
								onclick={() => {
									formatHeader(opt.level);
									headerMenuOpen = false;
								}}
							>
								{opt.label}
							</button>
						{/each}
					</div>
				{/if}
			</div>
			<div
				class="flex overflow-hidden rounded-lg border border-line"
				role="toolbar"
				aria-label="יישור שורה"
			>
				<button
					type="button"
					class="px-2 py-1 text-xs hover:bg-line/60"
					title="יישור לימין"
					onmousedown={(e) => e.preventDefault()}
					onclick={() => formatAlign('right')}>⇥</button
				>
				<button
					type="button"
					class="border-s border-line px-2 py-1 text-xs hover:bg-line/60"
					title="למרכז"
					onmousedown={(e) => e.preventDefault()}
					onclick={() => formatAlign('center')}>≡</button
				>
				<button
					type="button"
					class="border-s border-line px-2 py-1 text-xs hover:bg-line/60"
					title="יישור לשמאל"
					onmousedown={(e) => e.preventDefault()}
					onclick={() => formatAlign('left')}>⇤</button
				>
			</div>
			<div
				class="flex overflow-hidden rounded-lg border border-line"
				role="toolbar"
				aria-label="כיוון שורה"
			>
				<button
					type="button"
					class="px-2 py-1 text-sm hover:bg-line/60"
					title="ימין-לשמאל"
					onmousedown={(e) => e.preventDefault()}
					onclick={() => formatDirection('rtl')}>⇐א</button
				>
				<button
					type="button"
					class="border-s border-line px-2 py-1 text-sm hover:bg-line/60"
					title="שמאל-לימין"
					onmousedown={(e) => e.preventDefault()}
					onclick={() => formatDirection('ltr')}>A⇒</button
				>
			</div>
			<span class="mx-1 h-4 w-px bg-line"></span>
			<button
				type="button"
				class="rounded-lg border border-line px-2 py-1 text-sm hover:bg-line/60"
				title="סימון השורה כטקסט באנגלית ללימוד (מודגש, שמאל-לימין) - לחיצה נוספת מבטלת"
				onmousedown={(e) => e.preventDefault()}
				onclick={formatTextBlock}>📖</button
			>
			<button
				type="button"
				class="rounded-lg border border-line px-2 py-1 text-sm hover:bg-line/60"
				title="סימון השורה כהערה / טיפ עם נורה - לחיצה נוספת מבטלת"
				onmousedown={(e) => e.preventDefault()}
				onclick={formatCallout}>💡</button
			>
			<button
				type="button"
				class="rounded-lg border border-line px-2 py-1 text-sm hover:bg-line/60"
				title="הוספת קו מפריד מתחת לשורה"
				onmousedown={(e) => e.preventDefault()}
				onclick={formatDivider}>―</button
			>
			<button
				type="button"
				class="rounded-lg border border-line px-2 py-1 text-sm hover:bg-line/60"
				title="רשימה עם תבליטים - לחיצה נוספת מבטלת"
				onmousedown={(e) => e.preventDefault()}
				onclick={formatBulletList}>•</button
			>
			<button
				type="button"
				class="rounded-lg border border-line px-2 py-1 text-sm hover:bg-line/60"
				title="רשימה ממוספרת - לחיצה נוספת מבטלת"
				onmousedown={(e) => e.preventDefault()}
				onclick={formatNumberList}>1.</button
			>
			<span class="flex-1"></span>
			<button
				type="button"
				class="rounded border border-line px-1.5 py-0.5 text-[10px] font-bold text-muted hover:bg-line/60"
				onclick={openRaw}
			>
				JSON
			</button>
			<button
				type="button"
				class="rounded-lg px-2 py-1 text-xs font-bold text-rose-600 hover:bg-rose-50"
				onclick={() => {
					if (path && confirm('למחוק את המסך?')) model.deleteScreen(nodeId, path);
				}}
			>
				🗑 מחיקת המסך
			</button>
		</div>

		<div class="relative min-h-0 flex-1 overflow-y-auto">
			<!-- relative+invisible-span sizes the button to the (always-longer)
			     location text, so switching to "✓ הועתק" never changes its width. -->
			<div class="absolute top-2 right-2 z-10 flex items-center gap-2">
				<button
					type="button"
					title="העתקת מיקום המסך"
					onclick={copyLocation}
					class="relative rounded-lg border border-dashed border-line bg-surface/90 px-2 py-1 font-mono text-[11px] font-semibold text-muted hover:bg-line/60"
					dir="ltr"
				>
					<span class="invisible">{location}</span>
					<span class="absolute inset-0 flex items-center justify-center">
						{locationCopied ? '✓ הועתק' : location}
					</span>
				</button>
				<div
					class="flex overflow-hidden rounded-lg border border-line bg-surface/90 text-[11px] font-semibold"
					role="group"
					aria-label="רוחב התצוגה"
				>
					<button
						type="button"
						class="px-2 py-1 {device === 'desk'
							? 'bg-brand text-white'
							: 'text-muted hover:bg-line/60'}"
						onclick={() => (device = 'desk')}>מחשב</button
					>
					<button
						type="button"
						class="px-2 py-1 {device === 'phone'
							? 'bg-brand text-white'
							: 'text-muted hover:bg-line/60'}"
						onclick={() => (device = 'phone')}>טלפון</button
					>
				</div>
			</div>
			<div class="mx-auto max-w-lg p-6 xl:mx-0 xl:h-full xl:max-w-none">
				<!-- Wide screens: the slide on the start side (right in RTL), its settings
				     beside it. Narrow: settings stack under the slide. Settings are plain
				     flow groups, never sticky, so they cannot cover one another. -->
				<div
					class="@container relative grid gap-4 xl:h-full xl:grid-cols-[36.95rem_minmax(0,1fr)] xl:items-start xl:overflow-x-clip"
				>
					<div
						class="min-h-0 motion-reduce:transition-none xl:h-full xl:overflow-y-auto xl:ps-[2.4rem] xl:pe-[2.55rem] xl:transition-transform xl:duration-300 xl:ease-out {settingsCollapsed
							? 'xl:translate-x-[calc(18.475rem-50cqw)]'
							: ''}"
					>
						<div
							class="mx-auto w-full {device === 'phone'
								? 'max-w-[390px]'
								: 'max-w-lg'} overflow-hidden rounded-2xl border-2 border-line bg-canvas shadow-md transition-[max-width] duration-300 ease-in-out motion-reduce:transition-none"
						>
							<div class="h-[min(68vh,700px)] overflow-y-auto px-4 pt-6 pb-6">
								<EditableScreen {model} {nodeId} {path} />
							</div>
						</div>
					</div>
					<!-- Settings and their lip are one unit: they slide out together, and the lip stays
					     docked on the canvas's left edge when collapsed. -->
					<div
						class="relative min-h-0 motion-reduce:transition-none xl:h-full xl:border-s-2 xl:border-line xl:transition-transform xl:duration-300 xl:ease-out {settingsCollapsed
							? 'xl:-translate-x-full'
							: ''}"
					>
						<button
							type="button"
							class="absolute top-1/2 right-0 z-10 hidden h-14 w-5 translate-x-full -translate-y-1/2 items-center justify-center rounded-r-xl border-2 border-s-0 border-line bg-surface text-lg leading-none text-muted transition-colors hover:text-brand xl:flex"
							aria-label={settingsCollapsed ? 'הצג הגדרות' : 'הסתר הגדרות'}
							onclick={() => (settingsCollapsed = !settingsCollapsed)}
						>
							{settingsCollapsed ? '›' : '‹'}
						</button>
						<div
							inert={settingsCollapsed}
							class="min-h-0 motion-reduce:transition-none xl:h-full xl:overflow-y-auto xl:ps-5 xl:transition-opacity xl:duration-300 xl:ease-out {settingsCollapsed
								? 'xl:opacity-0'
								: ''}"
						>
							<div
								class="hidden has-[*]:block xl:columns-[17rem] xl:gap-x-10 [&>*]:mt-0! [&>*]:mb-5 [&>*]:break-inside-avoid [&>*]:border-t-0! [&>*]:pt-0!"
							>
								{#if rawOpen}
									<div class="mt-4 border-t-2 border-dashed border-line/60 pt-4">
										<p class="mb-2 text-xs font-bold text-muted">JSON מתקדם</p>
										<textarea
											bind:value={raw}
											rows="10"
											dir="ltr"
											spellcheck="false"
											class="w-full rounded-xl border-2 border-line bg-surface p-2 font-mono text-xs"
										></textarea>
										{#if rawProblems.length}
											<ul class="mt-1 list-disc ps-4 text-xs text-danger" dir="rtl">
												{#each rawProblems as problem, i (i)}
													<li>{problem.message}</li>
												{/each}
											</ul>
										{/if}
										<div class="mt-2 flex gap-2">
											<button
												type="button"
												class="rounded-lg bg-brand px-3 py-1 text-xs font-bold text-white"
												onclick={applyRaw}
											>
												החל
											</button>
											<button
												type="button"
												class="text-xs text-muted"
												onclick={() => (rawOpen = false)}>ביטול</button
											>
										</div>
									</div>
								{:else if screen.type === 'cloze-pick'}
									<div class="mt-4 space-y-2 border-t-2 border-dashed border-line/60 pt-4">
										<p class="mb-2 text-xs font-bold text-muted">
											אפשרויות - סמנו את כל התשובות הנכונות (אפשר יותר מאחת)
										</p>
										{#each screen.options as _opt, i (i)}
											<div
												class="flex items-center gap-2 rounded-xl border p-2 {(
													screen.correctIndices ?? []
												).includes(i)
													? 'border-brand bg-brand-soft/50'
													: 'border-line'}"
											>
												<input
													type="checkbox"
													checked={(screen.correctIndices ?? []).includes(i)}
													onchange={() => {
														screen.correctIndices ??= [];
														screen.correctIndices = screen.correctIndices.includes(i)
															? screen.correctIndices.filter((x: number) => x !== i)
															: [...screen.correctIndices, i].sort((a: number, b: number) => a - b);
													}}
													aria-label="תשובה נכונה"
												/>
												<div class="w-full">
													<MarkdownInput bind:value={screen.options[i]} minRows={1} />
												</div>
												<button
													type="button"
													class="text-xs text-danger"
													onclick={() => {
														screen.options.splice(i, 1);
														screen.correctIndices = (screen.correctIndices ?? [])
															.filter((x: number) => x !== i)
															.map((x: number) => (x > i ? x - 1 : x));
													}}
												>
													✕
												</button>
											</div>
										{/each}
										<button
											type="button"
											class="text-xs font-semibold text-brand"
											onclick={() => (screen.options = [...screen.options, ''])}
										>
											+ אפשרות
										</button>
									</div>
								{:else if screen.type === 'mark-all'}
									<div class="mt-4 space-y-3 border-t-2 border-dashed border-line/60 pt-4">
										<div class="flex flex-wrap items-center gap-1.5">
											<span class="text-xs font-bold text-muted">קטגוריות:</span>
											{#each screen.categories ?? [] as cat (cat)}
												{@const sw = markAllSwatch(cat.color)}
												<span
													class="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-bold"
													style="background:{sw.bg};color:{sw.fg}"
												>
													<button type="button" onclick={() => cycleColor(cat)}>🎨</button>
													<span>{cat.name}</span>
													<button type="button" onclick={() => delCategory(cat)}>✕</button>
												</span>
											{/each}
											<button
												type="button"
												class="text-xs font-semibold text-brand"
												onclick={addCategory}
											>
												+ קטגוריה
											</button>
										</div>
										<p class="text-xs text-muted">
											גררו לבחירת ביטוי, ואז שייכו. לחיצה על מילה מסומנת מבטלת.
										</p>
										<TextMarker
											text={screen.text}
											dir={screen.dir ?? 'auto'}
											colors={markColors}
											onSelect={(t) => (pending = t)}
											onTokenClick={unmark}
										/>
										{#if pending.length}
											<div
												class="flex flex-wrap items-center gap-1.5 rounded-xl bg-brand-soft/50 p-2"
											>
												<span class="text-xs font-bold text-muted">סמן כ־</span>
												{#each screen.categories ?? [] as cat (cat)}
													{@const sw = markAllSwatch(cat.color)}
													<button
														type="button"
														class="rounded-full px-2 py-0.5 text-xs font-bold"
														style="background:{sw.bg};color:{sw.fg}"
														onclick={() => markPending(cat.name)}
													>
														{cat.name}
													</button>
												{/each}
												<button
													type="button"
													class="rounded-full bg-surface px-2 py-0.5 text-xs font-bold ring-1 ring-line"
													onclick={() => markPending(null)}
												>
													{screen.categories?.length ? 'ללא קטגוריה' : 'סמן'}
												</button>
												<button
													type="button"
													class="px-2 text-xs text-muted"
													onclick={() => (pending = [])}>בטל</button
												>
											</div>
										{/if}
										<label class="flex items-center gap-2 text-xs text-muted">
											מזהה טיימר (אופציונלי)
											<input
												bind:value={screen.timerKey}
												dir="ltr"
												class="w-28 rounded-lg border-2 border-line bg-surface p-1"
											/>
										</label>
									</div>
								{:else if screen.type === 'steps'}
									<label
										class="mt-4 flex items-center gap-2 border-t-2 border-dashed border-line/60 pt-4 text-xs text-muted"
									>
										<input type="checkbox" bind:checked={screen.ordered} />
										רשימה ממוספרת
									</label>
								{:else if screen.type === 'passage-mcq'}
									<div class="mt-4 border-t-2 border-dashed border-line/60 pt-4">
										<label class="flex items-center gap-2 text-xs text-muted">
											מזהה טיימר (אופציונלי - ריק = בלי טיימר)
											<input
												bind:value={screen.timerKey}
												dir="ltr"
												class="w-28 rounded-lg border-2 border-line bg-surface p-1"
											/>
										</label>
									</div>
								{:else if screen.type === 'timed-reading'}
									<label
										class="mt-4 flex items-center gap-2 border-t-2 border-dashed border-line/60 pt-4 text-xs text-muted"
									>
										מזהה טיימר
										<input
											bind:value={screen.timerKey}
											dir="ltr"
											class="w-28 rounded-lg border-2 border-line bg-surface p-1"
										/>
									</label>
								{:else if screen.type === 'time-result'}
									<label
										class="mt-4 flex items-center gap-2 border-t-2 border-dashed border-line/60 pt-4 text-xs text-muted"
									>
										מזהה טיימר
										<input
											bind:value={screen.timerKey}
											dir="ltr"
											class="w-28 rounded-lg border-2 border-line bg-surface p-1"
										/>
									</label>
								{:else if screen.type === 'time-comparison'}
									<div
										class="mt-4 flex flex-wrap gap-4 border-t-2 border-dashed border-line/60 pt-4"
									>
										<label class="flex items-center gap-2 text-xs text-muted">
											מזהה א׳
											<input
												bind:value={screen.aKey}
												dir="ltr"
												class="w-28 rounded-lg border-2 border-line bg-surface p-1"
											/>
										</label>
										<label class="flex items-center gap-2 text-xs text-muted">
											מזהה ב׳
											<input
												bind:value={screen.bKey}
												dir="ltr"
												class="w-28 rounded-lg border-2 border-line bg-surface p-1"
											/>
										</label>
									</div>
								{:else if screen.type === 'writing-task'}
									{#if isExam}
										<SettingsGroup title="חיבור חופשי - טווח מילים">
											<div class="flex flex-wrap gap-x-4 gap-y-2">
												<NumberField
													label="מינ׳ מילים"
													value={screen.minWords}
													onChange={(v) => (screen.minWords = v)}
												/>
												<NumberField
													label="מקס׳ מילים"
													value={screen.maxWords}
													onChange={(v) => (screen.maxWords = v)}
												/>
											</div>
										</SettingsGroup>
									{:else}
										<SettingsGroup title="תנאי מעבר">
											<div class="flex flex-wrap gap-x-4 gap-y-2">
												<NumberField
													label="מינ׳ משפטים"
													min={1}
													value={screen.minSentences}
													onChange={(v) => (screen.minSentences = v)}
												/>
												<NumberField
													label="מינ׳ מילים מהבנק"
													value={screen.minWordsUsed}
													onChange={(v) => (screen.minWordsUsed = v)}
												/>
												<NumberField
													label="טעויות קטנות מותרות"
													value={screen.maxTypos ?? 1}
													onChange={(v) => (screen.maxTypos = v)}
												/>
												<NumberField
													label="מינ׳ מילים (פסקה)"
													value={screen.minWords}
													onChange={(v) => (screen.minWords = v)}
												/>
												{#if screen.minWords !== undefined}
													<NumberField
														label="מקס׳ מילים"
														value={screen.maxWords}
														onChange={(v) => (screen.maxWords = v)}
													/>
												{/if}
												<NumberField
													label="שעון (דקות)"
													min={1}
													value={screen.timeLimitMinutes}
													onChange={(v) => (screen.timeLimitMinutes = v)}
												/>
											</div>
											<p class="text-xs text-muted">
												מינ׳ מילים = תיבת פסקה אחת (כמו בבחינה) במקום שורה לכל משפט.
											</p>
											<label class="flex items-center gap-2 text-xs text-muted">
												<input
													type="checkbox"
													checked={screen.capitalIsError ?? true}
													onchange={(e) => (screen.capitalIsError = e.currentTarget.checked)}
												/>
												אות ראשונה קטנה = טעות
											</label>
											{#if screen.minWords === undefined}
												<label class="flex items-center gap-2 text-xs text-muted">
													<input
														type="checkbox"
														checked={screen.wordCounter ?? false}
														onchange={(e) => (screen.wordCounter = e.currentTarget.checked || undefined)}
													/>
													מונה מילים מתחת לשורות
												</label>
											{/if}
										</SettingsGroup>
									{/if}
									<SettingsGroup title="בנק מילים" hint="מוצג לתלמיד כצ׳יפים. אופציונלי.">
										{#if screen.wordBank}
											<StringListEditor
												bind:items={screen.wordBank}
												addLabel="+ מילה"
												dir="ltr"
												compact
											/>
										{:else}
											<button
												type="button"
												class="self-start text-xs font-semibold text-brand"
												onclick={() => (screen.wordBank = [])}
											>
												+ הוספת בנק מילים
											</button>
										{/if}
									</SettingsGroup>
									{#if !isExam}
										<SettingsGroup
											title="תשובות מתקבלות"
											hint="משפט שלם בכל שורה. הסימן | בתוך סוגריים = ״או״: (I think|I believe) = אחת משתי האפשרויות. אם יש שורות כאן, המשפט חייב להתאים לאחת מהן."
										>
											{#if screen.acceptedAnswers}
												<StringListEditor
													bind:items={screen.acceptedAnswers}
													addLabel="+ תשובה"
													dir="ltr"
													multiline
												/>
												<details class="text-xs text-muted">
													<summary class="cursor-pointer font-semibold">
														מה יתקבל בפועל ({expandAccepted(screen.acceptedAnswers).length} משפטים)
													</summary>
													<ul class="mt-1 list-disc space-y-0.5 ps-5" dir="ltr">
														{#each expandAccepted(screen.acceptedAnswers) as sentence (sentence)}
															<li>{sentence}</li>
														{/each}
													</ul>
												</details>
											{:else}
												<button
													type="button"
													class="self-start text-xs font-semibold text-brand"
													onclick={() => (screen.acceptedAnswers = [])}
												>
													+ הוספת תשובות מתקבלות
												</button>
											{/if}
										</SettingsGroup>
										<SettingsGroup
											title="בדיקה עצמית"
											hint="מוצג אחרי הבדיקה, בלי ציון: תשובה לדוגמה ורשימה שהתלמיד מסמן על הטקסט שלו."
										>
											<textarea
												dir="ltr"
												rows="3"
												placeholder="תשובה לדוגמה"
												value={screen.modelAnswer ?? ''}
												oninput={(e) => (screen.modelAnswer = e.currentTarget.value || undefined)}
												class="w-full rounded-lg border-2 border-line bg-surface p-2 text-sm"
											></textarea>
											{#if screen.checklist}
												<StringListEditor bind:items={screen.checklist} addLabel="+ סעיף" compact />
											{:else}
												<button
													type="button"
													class="self-start text-xs font-semibold text-brand"
													onclick={() => (screen.checklist = [])}
												>
													+ הוספת רשימת בדיקה
												</button>
											{/if}
										</SettingsGroup>
									{/if}
								{:else if screen.type === 'spell-word'}
									<div class="mt-4 flex gap-4 border-t-2 border-dashed border-line/60 pt-4 text-sm">
										<label class="flex items-center gap-1.5">
											<input
												type="radio"
												name={`m-${String(path.bucket)}-${path.index}`}
												checked={screen.mode === 'copy'}
												onchange={() => (screen.mode = 'copy')}
											/>
											העתקה (המילה מוצגת)
										</label>
										<label class="flex items-center gap-1.5">
											<input
												type="radio"
												name={`m-${String(path.bucket)}-${path.index}`}
												checked={screen.mode === 'listen'}
												onchange={() => (screen.mode = 'listen')}
											/>
											הכתבה (לפי שמיעה)
										</label>
									</div>
									{#if screen.mode === 'listen'}
										<label class="mt-2 flex flex-col gap-1 text-xs text-muted">
											רמז בעברית (אופציונלי)
											<input
												bind:value={screen.hintHe}
												dir="rtl"
												class="rounded-lg border-2 border-line bg-surface p-1"
											/>
										</label>
									{/if}
								{:else if screen.type === 'word-card'}
									<label
										class="mt-4 flex flex-col gap-1 border-t-2 border-dashed border-line/60 pt-4 text-xs text-muted"
									>
										תיאור תמונה (אופציונלי)
										<input
											bind:value={screen.imageAlt}
											dir="auto"
											class="rounded-lg border-2 border-line bg-surface p-1"
										/>
									</label>
								{/if}
								{#if !rawOpen && ((isExam && POINTS_TYPES.has(screen.type)) || (!isExam && AUTO_CHECK_TYPES.has(screen.type)))}
									<SettingsGroup title="הגדרות כלליות">
										{#if isExam}
											<NumberField
												label="ניקוד"
												value={screen.points ?? 1}
												onChange={(v) => (screen.points = v)}
											/>
										{:else}
											<label class="flex items-center gap-2 text-xs text-muted">
												<input
													type="checkbox"
													checked={screen.autoCheck ?? true}
													onchange={(e) =>
														(screen.autoCheck = e.currentTarget.checked ? undefined : false)}
												/>
												בדיקה אוטומטית (אותיות גדולות, פיסוק, כתיב) והערות
											</label>
										{/if}
									</SettingsGroup>
								{/if}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
