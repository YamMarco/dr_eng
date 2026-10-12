/** One flagged spot in the student's text - from the local checks (l1) or the LLM (l2). */
export type Mark = {
	/** Layer-1 rule id or Layer-2 tag; the UI looks the Hebrew text up by it. */
	tag: string;
	source: 'l1' | 'l2';
	/** Offsets into the student's own text. */
	start: number;
	end: number;
	text: string;
	suggestions?: string[];
	/** `maybe` = worded as a question, not a mistake. */
	maybe?: boolean;
};

/** Why Layer 1 refused to send the submit on: the student gets an outright "wrong". */
export type GateReason =
	'empty' | 'not-english' | 'too-short' | 'unreadable' | 'typos' | 'accepted-miss' | 'word-bank';

export type Feedback = {
	/** Where the verdict came from. `partial` = the LLM was unavailable: marks only, no verdict. */
	stage: 'l1-gate' | 'l1-accepted' | 'llm' | 'partial';
	pass: boolean;
	gate?: GateReason;
	/** Layer 1 + Layer 2 together, sorted by position. */
	marks: Mark[];
	/** Exam only. */
	score?: { got: number; of: number; criteria: Record<string, number> };
};

/** What the LLM sends back. Spans are quoted text, never offsets. */
export type LlmMark = { span: string; tag: string; nth?: number };
export type LessonVerdict = { pass: boolean; marks: LlmMark[] };
export type ExamVerdict = { scores: Record<string, number>; marks: LlmMark[] };

export type GradeRequest = {
	kind: 'lesson' | 'exam';
	/** The task's question, as the student saw it. */
	question: string;
	/** The student's text with Layer-1 typos already corrected. */
	text: string;
	/** Editor's best answers / pitfalls (`gradingNotes`). */
	notes?: string;
};
