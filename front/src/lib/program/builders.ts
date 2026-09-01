// Screen builders for the Module C programme (docs/module c/duolingo-program.md).
//
// Every node in the programme is one of a handful of exercise shapes — VOCAB,
// MARK, CLASSIFY, MCQ, GAP, WRITE, TIMED, CHECK — and each shape maps onto
// existing lesson screens. These helpers do that mapping once so a section
// file stays a flat list of teaching content: the rule to show, the items,
// the answers. No section file builds a screen literal by hand.

import type { LessonScreen, McqScreen, PassageQuizQuestion } from '../lesson-screens/types';
import { markTargets } from '../markText';

/** The rule card shown before the exercise — one node teaches one rule. */
export function rule(text: string): LessonScreen {
	return { type: 'preface', text };
}

/** Closing card: what the student now knows, in the words they'll reuse. */
export function takeaway(title: string, lines: string[]): LessonScreen {
	return { type: 'summary', title, lines };
}

/** An ordered procedure (P1's five steps, P10's three, ...). */
export function steps(list: string[]): LessonScreen {
	return { type: 'steps', steps: list };
}

export type McqItem = {
	prompt: string;
	/** The correct option, spelled out. */
	answer: string;
	/** The wrong options, in the order they should appear around the answer. */
	wrong: string[];
};

/**
 * MCQ items with the answer rotated through the option slots, so the correct
 * position never becomes a pattern the student can learn instead of the skill.
 */
export function mcqs(items: McqItem[]): McqScreen[] {
	return items.map((item, i) => {
		const options = [...item.wrong];
		const correctIndex = i % (item.wrong.length + 1);
		options.splice(correctIndex, 0, item.answer);
		return { type: 'mcq', prompt: item.prompt, options, correctIndex };
	});
}

/**
 * CLASSIFY: sort each item into one of a fixed set of categories. Rendered as
 * one MCQ per item with the categories as the options — same interaction the
 * student already knows, no new screen type.
 */
export function classify(question: string, categories: string[], items: [string, string][]) {
	return mcqs(
		items.map(([item, category]) => ({
			prompt: `${question}\n\n${item}`,
			answer: category,
			wrong: categories.filter((c) => c !== category)
		}))
	);
}

export type MarkSpec = {
	instruction: string;
	text: string;
	/** The phrases that count — matched case- and punctuation-insensitively. */
	targets: string[];
	/** Scaffold chips above the text; drop them in the later rounds. */
	wordBank?: string[];
	/** Set to run a stopwatch over the marking (the final, timed round). */
	timerKey?: string;
};

/** MARK: tap every eye catcher in the text. */
export function mark(spec: MarkSpec): LessonScreen {
	return {
		type: 'mark-all',
		instruction: spec.instruction,
		text: spec.text,
		correctIndices: markTargets(spec.text, spec.targets),
		wordBank: spec.wordBank,
		timerKey: spec.timerKey
	};
}

/** MARK on a single sentence: tap the one word that matters. */
export function markWord(sentence: string, word: string): LessonScreen {
	const index = markTargets(sentence, [word])[0] ?? 0;
	return { type: 'mark-word', sentence, correctWordIndex: index };
}

/**
 * GAP / short answer: the student types the answer instead of picking it.
 * `keywords` are what must appear for it to count — keep them to the content
 * words so wording stays free.
 */
export function gap(
	text: string,
	questions: { prompt: string; answer: string; keywords: string[] }[]
): LessonScreen {
	return {
		type: 'passage-quiz',
		text,
		questions: questions.map(
			(q): PassageQuizQuestion => ({
				prompt: q.prompt,
				keywords: q.keywords,
				answerHint: q.answer
			})
		)
	};
}

/** TIMED: a passage and its questions under a running clock. */
export function timed(
	label: string,
	text: string,
	timerKey: string,
	items: McqItem[]
): LessonScreen[] {
	return [
		{
			type: 'timed-passage',
			label,
			text,
			timerKey,
			questions: mcqs(items).map((m) => ({
				prompt: m.prompt,
				options: m.options,
				correctIndex: m.correctIndex
			}))
		},
		{ type: 'time-result', label: 'סיימתם!', timerKey }
	];
}

/** WRITE: an open task with the rubric shown up front, as the programme asks. */
export function write(
	prompt: string,
	rubric: string[],
	wordBank: string[],
	minSentences: number,
	minWordsUsed: number
): LessonScreen[] {
	return [
		takeaway('לפני שכותבים — כך נבדוק', rubric),
		{ type: 'writing-task', prompt, wordBank, minSentences, minWordsUsed }
	];
}

/** Read the questions before the text — the P1 habit, as its own screen. */
export function preview(intro: string, prompts: string[]): LessonScreen {
	return { type: 'question-preview', intro, prompts };
}
