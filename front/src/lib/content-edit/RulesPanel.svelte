<script lang="ts">
	// The module-wide answer-checking settings: pick a level (module > section > lesson),
	// set fields there, and they cascade to every screen below that doesn't set its own.
	// "Apply to all below" clears the lower levels' own values (locked ones are kept).
	import Sheet from '$lib/components/Sheet.svelte';
	import RuleFields from './fields/RuleFields.svelte';
	import { editModel } from './editModel.svelte';
	import { rulesStore, type RuleLevel } from './rulesStore.svelte';
	import { sectionMeta } from '$lib/content/sectionMeta';
	import { ownerModule, ruleChain } from '$lib/content/rules';
	import { ownKeys, resolveRules } from '$lib/feedback/rules';

	let { open = $bindable(false) }: { open: boolean } = $props();

	const MODULES = [...new Set(sectionMeta.map((s) => s.modules[0]))];
	const LEVEL_NAMES: Record<RuleLevel, string> = {
		modules: 'מודול',
		sections: 'פרק',
		lessons: 'שיעור'
	};

	let level = $state<RuleLevel>('modules');
	let sectionId = $state(editModel.selectedNode?.section ?? sectionMeta[0].id);
	let moduleId = $derived(ownerModule(sectionId) ?? MODULES[0]);
	let lessons = $derived(editModel.nodes.filter((n) => n.section === sectionId));
	let lessonId = $state(editModel.selectedNodeId ?? '');
	$effect(() => {
		if (!lessons.some((n) => n.id === lessonId)) lessonId = lessons[0]?.id ?? '';
	});

	let id = $derived(level === 'modules' ? moduleId : level === 'sections' ? sectionId : lessonId);
	let own = $derived(rulesStore.get(level, id));
	// what this level would get from the levels above it
	let inherited = $derived(
		resolveRules(
			level === 'modules'
				? []
				: level === 'sections'
					? [rulesStore.get('modules', moduleId)]
					: ruleChain(rulesStore.file, { id: '', section: sectionId })
		)
	);

	let report = $state('');
	function applyBelow() {
		const what = ownKeys(own).length;
		if (!what) return;
		if (
			!confirm(
				`להחיל את ההגדרות של ה${LEVEL_NAMES[level]} על כל מה שמתחתיו? ערכים נעולים לא ישתנו.`
			)
		)
			return;
		const { levels, screens } = rulesStore.applyBelow(level, id, editModel.nodes);
		if (screens) editModel.touch();
		report = `עודכנו ${levels} רמות ו-${screens} מסכים. לחצו "שמירת שינויים".`;
	}
</script>

<Sheet bind:open title="כללי בדיקת תשובות" onclose={() => (report = '')}>
	<div class="flex flex-col gap-3 text-sm">
		<p class="text-xs text-muted">
			הגדרה ברמה גבוהה עוברת לכל מה שמתחתיה, אלא אם רמה נמוכה יותר (פרק, שיעור או מסך) הגדירה ערך
			משלה.
		</p>
		<div class="flex overflow-hidden rounded-lg border-2 border-brand text-xs font-bold">
			{#each Object.entries(LEVEL_NAMES) as [key, name] (key)}
				<button
					type="button"
					class="flex-1 px-3 py-1.5 {level === key ? 'bg-brand text-white' : 'text-brand'}"
					onclick={() => ((level = key as RuleLevel), (report = ''))}>{name}</button
				>
			{/each}
		</div>

		{#if level === 'modules'}
			<label class="flex items-center gap-2 text-xs text-muted">
				מודול
				<select
					class="rounded-lg border-2 border-line bg-surface p-1"
					value={moduleId}
					onchange={(e) =>
						(sectionId =
							sectionMeta.find((s) => s.modules[0] === e.currentTarget.value)?.id ?? sectionId)}
				>
					{#each MODULES as m (m)}<option value={m}>{m.toUpperCase()}</option>{/each}
				</select>
			</label>
		{:else}
			<label class="flex items-center gap-2 text-xs text-muted">
				פרק
				<select class="rounded-lg border-2 border-line bg-surface p-1" bind:value={sectionId}>
					{#each sectionMeta as s (s.id)}
						<option value={s.id}>{s.id} · {s.titleEn ?? ''}</option>
					{/each}
				</select>
			</label>
			{#if level === 'lessons'}
				<label class="flex items-center gap-2 text-xs text-muted">
					שיעור
					<select class="rounded-lg border-2 border-line bg-surface p-1" bind:value={lessonId}>
						{#each lessons as n (n.id)}
							<option value={n.id}>{n.id} · {editModel.titles.get(n.id)}</option>
						{/each}
					</select>
				</label>
			{/if}
		{/if}

		{#if id}
			<div class="rounded-xl border border-line p-3">
				<RuleFields
					{own}
					{inherited}
					onSet={(key, value) => rulesStore.set(level, id, key, value)}
				/>
			</div>
			<button
				type="button"
				class="self-start rounded-lg border-2 border-brand px-3 py-1.5 text-xs font-bold text-brand disabled:opacity-40"
				disabled={!ownKeys(own).length}
				onclick={applyBelow}
			>
				⬇ החלה על כל מה שמתחת
			</button>
			{#if report}<p class="text-xs font-semibold text-emerald-700">{report}</p>{/if}
		{/if}
	</div>
</Sheet>
