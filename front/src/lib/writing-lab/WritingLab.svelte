<script lang="ts">
	// Debug-only showcase of everything the LLM (layer 2) grading can show a student:
	// every tag on a sample answer, the verdict lines and the exam report. Static
	// samples through the real components and the real mark pipeline; no API call.
	import AppBar from '$lib/components/AppBar.svelte';
	import FeedbackView from '$lib/feedback/FeedbackView.svelte';
	import MarkedText from '$lib/feedback/MarkedText.svelte';
	import ExamAnswerReview from '$lib/quiz/ExamAnswerReview.svelte';
	import { applyFixes, locateMarks, mergeMarks } from '$lib/feedback/merge';
	import { TAGS } from '$lib/feedback/tags';
	import { essayRubric } from '$lib/content/rubrics';
	import { i18n } from '$lib/i18n/index.svelte';
	import type { ExamGrade, Feedback, LlmMark, Mark } from '$lib/feedback/types';

	let { onclose }: { onclose: () => void } = $props();

	const QUESTION =
		'Do you think all high school pupils should do volunteer work? Give reasons to explain your opinion.';

	/** Same path as a real reply: quoted spans -> marks on the student's own text. */
	function build(text: string, llm: LlmMark[]): Mark[] {
		return mergeMarks([], locateMarks(text, applyFixes(text, []), llm));
	}

	/** One sample answer per tag; `fix` only where the model sends one (wrong-word, word-choice, missing-word). */
	const SAMPLES: Record<string, { text: string; marks: LlmMark[] }> = {
		'off-topic': { text: 'My favourite food is pizza with cheese.', marks: [] },
		incomplete: {
			text: 'I think pupils should volunteer because it teaches responsibility.',
			marks: []
		},
		unclear: {
			text: 'Students volunteer because the community of reasons is important for work.',
			marks: [{ span: 'the community of reasons', tag: 'unclear' }]
		},
		repeats: {
			text: 'I think volunteering is good. I think volunteering is good because it helps.',
			marks: [{ span: 'I think volunteering is good', tag: 'repeats', nth: 2 }]
		},
		'off-point': {
			text: 'Volunteering teaches responsibility. My brother has a red car.',
			marks: [{ span: 'My brother has a red car.', tag: 'off-point' }]
		},
		'wrong-word': {
			text: 'Students can learn a lot form volunteering.',
			marks: [{ span: 'form', tag: 'wrong-word', fix: 'from' }]
		},
		'word-choice': {
			text: 'Volunteering makes a big benefit for the community.',
			marks: [{ span: 'makes', tag: 'word-choice', fix: 'brings' }]
		},
		tense: {
			text: 'Last year I volunteer in a school.',
			marks: [{ span: 'volunteer', tag: 'tense' }]
		},
		agreement: {
			text: 'Every student need a chance to help.',
			marks: [{ span: 'need', tag: 'agreement' }]
		},
		'word-form': {
			text: 'Volunteers are very help for old people.',
			marks: [{ span: 'help', tag: 'word-form' }]
		},
		preposition: {
			text: 'I help at old people every week.',
			marks: [{ span: 'at', tag: 'preposition' }]
		},
		'word-order': {
			text: 'I every week help old people.',
			marks: [{ span: 'every week help', tag: 'word-order' }]
		},
		'missing-word': {
			text: 'Volunteering gives teenagers real experience for future.',
			marks: [{ span: 'future', tag: 'missing-word', fix: 'the' }]
		},
		'extra-word': {
			text: 'I think that the volunteering is important.',
			marks: [{ span: 'the', tag: 'extra-word' }]
		}
	};

	/** A full answer carrying every in-text tag at once, to see how the marks read on a long block. */
	const longText =
		'I think all high school pupils should do volunteer work. Last year I volunteer in a home for old people, and it changed me. Every student need a chance to help others, because volunteers are very help for people who feel alone. I every week visited an old man called David. We talked about his life and I listened at his stories for hours. Students can learn a lot form this kind of work. Volunteering also makes a big benefit for the community, and it gives teenagers real experience for future. In addition, the volunteering builds the community of reasons in our town. My brother has a red car. I think volunteering is good. To sum up, I think volunteering is good, and every school should make it part of the program.';
	const longFeedback: Feedback = {
		stage: 'llm',
		pass: true,
		marks: build(longText, [
			{ span: 'volunteer', tag: 'tense', nth: 2 },
			{ span: 'need', tag: 'agreement' },
			{ span: 'help', tag: 'word-form', nth: 2 },
			{ span: 'every week visited', tag: 'word-order' },
			{ span: 'at', tag: 'preposition' },
			{ span: 'form', tag: 'wrong-word', fix: 'from' },
			{ span: 'makes', tag: 'word-choice', fix: 'brings' },
			{ span: 'future', tag: 'missing-word', fix: 'the' },
			{ span: 'the', tag: 'extra-word', nth: 3 },
			{ span: 'the community of reasons', tag: 'unclear' },
			{ span: 'My brother has a red car.', tag: 'off-point' },
			{ span: 'I think volunteering is good', tag: 'repeats', nth: 2 }
		])
	};

	const AREA: Record<string, string> = {
		content: 'תוכן',
		vocabulary: 'אוצר מילים',
		language: 'שפה'
	};

	const tagRows = TAGS.map((def) => {
		const s = SAMPLES[def.id];
		const llm = s?.marks ?? [];
		const marks = build(s?.text ?? '', llm);
		// whole-answer tags have no spot in the text: they show as a general line
		const feedback: Feedback = {
			stage: 'llm',
			pass: !def.fatal,
			marks,
			general: llm.length === 0 ? [def.id] : undefined
		};
		return { def, text: s?.text ?? '', feedback };
	});

	const verdicts: { title: string; feedback: Feedback }[] = [
		{ title: 'עבר', feedback: { stage: 'llm', pass: true, marks: [] } },
		{
			title: 'עבר, עם סימונים',
			feedback: { stage: 'llm', pass: true, marks: build('Last year I volunteer.', [{ span: 'volunteer', tag: 'tense' }]) }
		},
		{
			title: 'נכשל: תג פוסל כללי',
			feedback: { stage: 'llm', pass: false, marks: [], general: ['off-topic'] }
		},
		{
			title: 'נכשל: תג פוסל עם סימון בטקסט',
			feedback: { stage: 'llm', pass: false, marks: [], general: ['incomplete', 'unclear'] }
		},
		{ title: 'ה-AI לא זמין (partial)', feedback: { stage: 'partial', pass: false, marks: [] } },
		...Object.keys(i18n.dict.feedback.gate).map((gate) => ({
			title: `שער מקומי: ${gate}`,
			feedback: {
				stage: 'l1-gate',
				pass: false,
				gate,
				marks: []
			} as Feedback
		}))
	];

	const readingText = 'Volunteers help old people because they feels alone. It also teach them skills.';
	const essayText =
		'I think pupils should volunteer. Because it gives them opportunity to develop skills. In addition, they can help the community. In conclusion I believe volunteering is good.';
	const criteria = Object.fromEntries(essayRubric.criteria.map((c) => [c.id, Math.max(0, c.max - 2)]));
	const examSamples: { label: string; prompt: string; points: number; grade?: ExamGrade }[] = [
		{
			label: 'קריאה: ציון חלקי',
			prompt: 'Why do volunteers visit old people?',
			points: 6,
			grade: {
				kind: 'reading',
				status: 'graded',
				earned: 4,
				max: 6,
				text: readingText,
				marks: build(readingText, [
					{ span: 'feels', tag: 'agreement' },
					{ span: 'teach', tag: 'agreement' }
				])
			}
		},
		{
			label: 'קריאה: כללי (לא עונה)',
			prompt: 'Why do volunteers visit old people?',
			points: 6,
			grade: {
				kind: 'reading',
				status: 'graded',
				earned: 0,
				max: 6,
				text: 'I like football.',
				marks: [],
				general: ['off-topic']
			}
		},
		{
			label: 'חיבור: מחוון + ניכוי אורך',
			prompt: QUESTION,
			points: 30,
			grade: {
				kind: 'essay',
				status: 'graded',
				earned: Object.values(criteria).reduce((a, b) => a + b, 0) - 3,
				max: 30,
				text: essayText,
				marks: build(essayText, [
					{ span: 'Because it gives them opportunity', tag: 'incomplete' },
					{ span: 'opportunity', tag: 'missing-word', fix: 'an' }
				]),
				criteria,
				lengthDeduction: 3,
				validWords: 52
			}
		},
		{
			label: 'ה-AI נכשל (failed)',
			prompt: QUESTION,
			points: 30,
			grade: { kind: 'essay', status: 'failed', earned: 0, max: 30, text: essayText, marks: [] }
		},
		{
			label: 'שער: ציון 0 בלי AI',
			prompt: QUESTION,
			points: 30,
			grade: {
				kind: 'essay',
				status: 'graded',
				earned: 0,
				max: 30,
				text: 'I like it.',
				marks: [],
				gate: 'too-short'
			}
		}
	];
</script>

<div class="fixed inset-0 z-50 flex flex-col overflow-hidden bg-canvas">
	<AppBar title="תצוגת בדיקת AI" onback={onclose} />

	<main class="mx-auto w-full max-w-lg flex-1 space-y-8 overflow-y-auto px-4 py-6 pb-12">
		<p class="rounded-2xl border border-dashed border-line p-3 text-xs leading-relaxed text-muted">
			דוגמאות קבועות דרך אותם רכיבים ואותו מסלול סימון כמו בבדיקה אמיתית. אין קריאה ל-AI.
			לחצו על מילה מסומנת כדי לראות את ההסבר.
		</p>

		<section class="space-y-3">
			<h2 class="text-lg font-extrabold">תגיות ({TAGS.length})</h2>
			<p class="text-xs text-muted" dir="ltr">{QUESTION}</p>
			{#each tagRows as row (row.def.id)}
				<div class="rounded-2xl border border-line bg-surface p-3">
					<div class="flex flex-wrap items-center gap-2">
						<code class="text-xs font-bold" dir="ltr">{row.def.id}</code>
						<span class="rounded-full bg-accent-soft px-2 py-0.5 text-[11px] font-bold">
							{AREA[row.def.area]}
						</span>
						{#if row.def.fatal}
							<span class="rounded-full bg-danger-soft px-2 py-0.5 text-[11px] font-bold text-danger">
								פוסל
							</span>
						{/if}
					</div>
					<p class="mt-1 text-sm">{i18n.dict.feedback.tag[row.def.id]}</p>
					<MarkedText
						text={row.text}
						marks={row.feedback.marks}
						class="mt-2 rounded-xl border border-line bg-canvas p-3 text-sm"
					/>
					{#if row.feedback.general}
						<FeedbackView feedback={row.feedback} />
					{/if}
				</div>
			{/each}
		</section>

		<section class="space-y-3">
			<h2 class="text-lg font-extrabold">טקסט ארוך ({longFeedback.marks.length} סימונים)</h2>
			<p class="text-xs text-muted" dir="ltr">{QUESTION}</p>
			<MarkedText
				text={longText}
				marks={longFeedback.marks}
				class="rounded-xl border border-line bg-canvas p-3 text-sm"
			/>
			<FeedbackView feedback={longFeedback} />
		</section>

		<section class="space-y-3">
			<h2 class="text-lg font-extrabold">פסק הדין מתחת לתשובה</h2>
			{#each verdicts as v (v.title)}
				<div>
					<p class="text-xs font-bold text-muted">{v.title}</p>
					<FeedbackView feedback={v.feedback} />
				</div>
			{/each}
		</section>

		<section class="space-y-3">
			<h2 class="text-lg font-extrabold">דוח מבחן</h2>
			<ul class="divide-y divide-line rounded-2xl border border-line bg-surface p-3">
				{#each examSamples as s (s.label)}
					<ExamAnswerReview {...s} />
				{/each}
			</ul>
		</section>
	</main>
</div>
