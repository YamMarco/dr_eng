// Builds a 3-round vocabulary lesson from a compact per-word spec — the same
// shape as module C section 1's vocab lessons: round 1 = meaning MCQ, round 2
// = fill-in-the-blank MCQ (distractors are the lesson's other words), round 3
// = word-in-context MCQ. Used by every section-2+ opener (see vocabSections.ts).

import type { LessonScreen, McqScreen } from './lesson-screens/types';

export type VocabWord = {
	/** The English word or phrase being taught. */
	en: string;
	/** Its Hebrew meaning — the correct answer in the meaning rounds. */
	he: string;
	/** Three wrong Hebrew meanings. */
	heWrong: string[];
	/** A sentence with `___` where `en` fits. */
	cloze: string;
	/** A sentence that uses `en`, quoted back to the student in round 3. */
	context: string;
};

/** Insert `correct` among `wrong` at slot `i % (wrong.length + 1)`. */
function placed(
	correct: string,
	wrong: string[],
	i: number
): { options: string[]; correctIndex: number } {
	const options = [...wrong];
	const correctIndex = i % (wrong.length + 1);
	options.splice(correctIndex, 0, correct);
	return { options, correctIndex };
}

export function vocabRounds(intro: string, words: VocabWord[]): LessonScreen[][] {
	const ens = words.map((w) => w.en);

	const meaning: LessonScreen[] = [
		{ type: 'preface', text: intro },
		...words.map((w, i): McqScreen => {
			const { options, correctIndex } = placed(w.he, w.heWrong, i);
			return { type: 'mcq', prompt: `מה המשמעות של "${w.en}"?`, options, correctIndex };
		})
	];

	const cloze: LessonScreen[] = words.map((w, i): McqScreen => {
		const siblings = ens.filter((e) => e !== w.en);
		const wrong = [0, 1, 2].map((k) => siblings[(i + k) % siblings.length]);
		const { options, correctIndex } = placed(w.en, wrong, i);
		return { type: 'mcq', prompt: w.cloze, options, correctIndex };
	});

	const context: LessonScreen[] = words.map((w, i): McqScreen => {
		const { options, correctIndex } = placed(w.he, w.heWrong, i);
		return {
			type: 'mcq',
			prompt: `"${w.context}" — מה המשמעות של "${w.en}" כאן?`,
			options,
			correctIndex
		};
	});

	return [meaning, cloze, context];
}
