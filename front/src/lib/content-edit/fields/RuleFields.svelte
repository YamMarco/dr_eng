<script lang="ts">
	// The answer-checking rules of one level (module / section / lesson / screen).
	// Each row is either inherited (greyed, shows the value from above) or set here.
	// Shared by the rules panel and the writing-task screen settings.
	import type { RuleSet, Rules } from '$lib/feedback/rules';

	let {
		own,
		inherited,
		onSet
	}: {
		/** What this level sets itself. */
		own: Rules;
		/** The value each field takes from the levels above. */
		inherited: RuleSet;
		/** `undefined` = back to inheriting. */
		onSet: (key: keyof Rules, value: boolean | number | undefined) => void;
	} = $props();

	const BOOLS: { key: 'llmGrade' | 'llmFix' | 'autoCheck' | 'capitalIsError'; label: string }[] = [
		{ key: 'llmGrade', label: 'בדיקת תשובה ע״י AI' },
		{ key: 'llmFix', label: 'ה-AI מציע תיקון: המילה הנכונה מוצגת בטקסט (מילה שגויה / חסרה)' },
		{
			key: 'autoCheck',
			label:
				'בדיקת כתיב ופיסוק: התלמיד רואה את הטעויות בזמן הכתיבה, והן נספרות מול "טעויות קטנות מותרות"'
		},
		{ key: 'capitalIsError', label: 'אות ראשונה קטנה = טעות' }
	];
	const isOwn = (key: keyof RuleSet) => own[key] !== undefined;
	const valueOf = <K extends keyof RuleSet>(key: K): RuleSet[K] =>
		(own[key] as RuleSet[K] | undefined) ?? inherited[key];
</script>

<div class="flex flex-col gap-2 text-xs text-muted">
	{#each BOOLS.slice(0, 3) as row (row.key)}
		{@render boolRow(row)}
	{/each}
	<!-- the two small-slip settings share one row -->
	<div class="flex flex-wrap items-center gap-x-5 gap-y-2">
		{@render boolRow(BOOLS[3])}
		<div class="flex items-center gap-2">
			<span class={isOwn('maxTypos') ? 'font-semibold text-ink' : ''}>טעויות קטנות מותרות</span>
			<input
				type="number"
				min="0"
				value={valueOf('maxTypos')}
				oninput={(e) =>
					onSet('maxTypos', e.currentTarget.value ? e.currentTarget.valueAsNumber : undefined)}
				class="w-14 rounded-lg border-2 border-line bg-surface p-1"
			/>
			{@render source('maxTypos')}
		</div>
	</div>
	<label class="mt-1 flex items-center gap-2 border-t border-line/60 pt-2">
		<input
			type="checkbox"
			checked={own.rulesLock ?? false}
			onchange={(e) => onSet('rulesLock', e.currentTarget.checked)}
		/>
		🔒 נעילה: "החלה על כל מה שמתחת" מרמה גבוהה יותר לא תשנה את ההגדרות כאן
	</label>
</div>

{#snippet boolRow(row: (typeof BOOLS)[number])}
	<div class="flex items-center gap-2">
		<input
			type="checkbox"
			checked={valueOf(row.key)}
			onchange={(e) => onSet(row.key, e.currentTarget.checked)}
		/>
		<span class={isOwn(row.key) ? 'font-semibold text-ink' : ''}>{row.label}</span>
		{@render source(row.key)}
	</div>
{/snippet}

{#snippet source(key: keyof RuleSet)}
	{#if isOwn(key)}
		<button
			type="button"
			class="text-brand underline"
			title="חזרה לערך שמגיע מלמעלה"
			onclick={() => onSet(key, undefined)}>הוגדר כאן · ביטול</button
		>
	{:else}
		<span class="text-muted/70">(בירושה)</span>
	{/if}
{/snippet}
