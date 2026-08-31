// The plug-in point: one entry per screen type. Adding a new exercise type
// means adding its shape to types.ts, writing the component, and registering
// it here — nothing else in the runner or lesson pages needs to change.

import type { Component } from 'svelte';
import type { LessonScreen } from './types';
import Preface from './Preface.svelte';
import Steps from './Steps.svelte';
import Summary from './Summary.svelte';
import Mcq from './Mcq.svelte';
import MarkWord from './MarkWord.svelte';
import TimedReading from './TimedReading.svelte';
import QuestionPreview from './QuestionPreview.svelte';
import TimeResult from './TimeResult.svelte';
import TimeComparison from './TimeComparison.svelte';
import TimedPassage from './TimedPassage.svelte';
import PassageQuiz from './PassageQuiz.svelte';
import WritingTask from './WritingTask.svelte';
import WordCard from './WordCard.svelte';
import SpellWord from './SpellWord.svelte';

// Prop shapes differ per screen type, so this registry is intentionally
// loosely typed at the map level; each component fully types its own props.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const screenComponents: Record<LessonScreen['type'], Component<any>> = {
	preface: Preface,
	steps: Steps,
	summary: Summary,
	mcq: Mcq,
	'mark-word': MarkWord,
	'timed-reading': TimedReading,
	'question-preview': QuestionPreview,
	'time-result': TimeResult,
	'time-comparison': TimeComparison,
	'timed-passage': TimedPassage,
	'passage-quiz': PassageQuiz,
	'writing-task': WritingTask,
	'word-card': WordCard,
	'spell-word': SpellWord
};
