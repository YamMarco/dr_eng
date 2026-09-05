// Blank screen shapes for the "add screen" / "change type" dropdown in the
// dev content editor. One entry per registry.ts key.
import type { LessonScreen } from '$lib/lesson-screens/types';

export const SCREEN_TYPE_GROUPS: { label: string; types: LessonScreen['type'][] }[] = [
	{
		label: 'טקסט והצגה',
		types: ['preface', 'steps', 'summary', 'question-preview', 'word-card']
	},
	{
		label: 'שאלות',
		types: [
			'mcq',
			'mark-word',
			'mark-all',
			'spell-word',
			'writing-task',
			'timed-passage',
			'passage-quiz',
			'passage-mcq'
		]
	},
	{
		label: 'תזמון',
		types: ['timed-reading', 'time-result', 'time-comparison']
	}
];

export const SCREEN_TYPES: LessonScreen['type'][] = SCREEN_TYPE_GROUPS.flatMap((g) => g.types);

export function blankScreen(type: LessonScreen['type']): LessonScreen {
	switch (type) {
		case 'preface':
			return { type, text: '' };
		case 'steps':
			return { type, steps: [''] };
		case 'summary':
			return { type, title: '', lines: [''] };
		case 'mcq':
			return { type, prompt: '', options: ['', ''], correctIndex: 0 };
		case 'mark-word':
			return { type, sentence: '', correctWordIndex: 0 };
		case 'mark-all':
			return { type, instruction: '', text: '', correctIndices: [] };
		case 'timed-reading':
			return { type, label: '', text: '', timerKey: '' };
		case 'question-preview':
			return { type, intro: '', prompts: [''] };
		case 'time-result':
			return { type, label: '', timerKey: '' };
		case 'time-comparison':
			return {
				type,
				aLabel: '',
				aKey: '',
				bLabel: '',
				bKey: '',
				fasterMessage: '',
				tieMessage: ''
			};
		case 'timed-passage':
			return { type, label: '', text: '', timerKey: '', questions: [] };
		case 'passage-quiz':
			return { type, text: '', questions: [] };
		case 'passage-mcq':
			return { type, text: '', questions: [] };
		case 'writing-task':
			return { type, prompt: '', wordBank: [], minSentences: 1, minWordsUsed: 1 };
		case 'word-card':
			return { type, word: '' };
		case 'spell-word':
			return { type, word: '', mode: 'copy' };
	}
}
