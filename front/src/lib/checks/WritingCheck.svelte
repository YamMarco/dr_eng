<script lang="ts">
	// Live deterministic feedback under any writing box: length rule + spelling /
	// mechanics / language-use flags. Free and instant; the dictionary loads the
	// first time there is text to check. Flags only, never edits the student's text.
	import { checkWriting, type CheckOptions, type CheckReport } from './index';
	import { browserDictionaries } from './dictionaries';
	import { i18n } from '$lib/i18n/index.svelte';

	let {
		text,
		options = {},
		/** Hide the length line (single-sentence tasks). */
		showLength = true,
		/** Report upward, e.g. to gate an LLM call (see worthGrading). */
		report = $bindable(null)
	}: {
		text: string;
		options?: CheckOptions;
		showLength?: boolean;
		report?: CheckReport | null;
	} = $props();

	const MAX_SHOWN = 8;
	let busy = $state(false);

	$effect(() => {
		const value = text;
		const opts = options;
		if (!value.trim()) {
			report = null;
			return;
		}
		busy = true;
		const timer = setTimeout(async () => {
			const result = await checkWriting(value, browserDictionaries, opts);
			if (value === text) report = result;
			busy = false;
		}, 350);
		return () => clearTimeout(timer);
	});

	const t = $derived(i18n.dict.writingCheck);
	let issues = $derived(report?.issues ?? []);
	let lengthLine = $derived.by(() => {
		const l = report?.length;
		if (!l) return null;
		if (l.zero) return { tone: 'text-danger', text: t.lengthZero };
		if (l.status === 'short')
			return { tone: 'text-danger', text: t.lengthShort(l.valid, l.deduction) };
		if (l.status === 'long') return { tone: 'text-muted', text: t.lengthLong(l.valid) };
		return { tone: 'text-brand-dark', text: t.lengthOk };
	});
</script>

{#if report}
	<div class="mt-3 rounded-2xl border border-line bg-surface p-3 text-sm">
		<p class="mb-1 text-xs font-bold text-muted">{t.title}</p>
		{#if report.notEnglish}
			<p class="font-semibold text-danger">{t.notEnglish}</p>
		{:else}
			{#if showLength && lengthLine}
				<p class="font-semibold {lengthLine.tone}">
					<span class="tabular" dir="ltr">{report.length.valid}</span>
					· {lengthLine.text}
				</p>
			{/if}
			{#if issues.length === 0}
				<p class="mt-1 font-semibold text-brand-dark">{t.allClear}</p>
			{:else}
				<ul class="mt-2 flex flex-col gap-1.5">
					{#each issues.slice(0, MAX_SHOWN) as issue (issue.start + issue.rule)}
						<li class="flex flex-wrap items-baseline gap-x-2">
							<span dir="ltr" class="rounded bg-danger-soft px-1.5 font-semibold text-danger"
								>{issue.text}</span
							>
							{#if issue.suggestions.length}
								<span dir="ltr" class="font-semibold text-brand-dark"
									>→ {issue.suggestions.join(' / ')}</span
								>
							{/if}
							<span class="text-xs text-muted">
								{issue.confidence === 'maybe' ? `${t.maybe}: ` : ''}{t.rule[issue.rule] ??
									issue.rule}
							</span>
						</li>
					{/each}
				</ul>
				{#if issues.length > MAX_SHOWN}
					<p class="mt-1 text-xs text-muted">{t.more(issues.length - MAX_SHOWN)}</p>
				{/if}
			{/if}
		{/if}
	</div>
{:else if busy}
	<p class="mt-3 text-xs text-muted">{t.loading}</p>
{/if}
