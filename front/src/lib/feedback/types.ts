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
	/** LLM tags about the whole answer (off-topic, incomplete): no position in the text. */
	general?: string[];
};

/** What the LLM sends back. Spans are quoted text, never offsets. */
export type LlmMark = { span: string; tag: string; nth?: number };
export type LessonVerdict = { pass: boolean; marks: LlmMark[] };
/** An exam open reading question: points out of the question's POINTS. */
export type ReadingVerdict = { score: number; marks: LlmMark[] };
/** The exam essay: one score per rubric criterion (content, vocabulary, language, mechanics). */
export type EssayVerdict = { scores: Record<string, number>; marks: LlmMark[] };

/** Software mechanics counts handed to the essay grader (it sees spelling-corrected text). */
export type MechanicsCount = { spelling: number; punctuation: number; runOn: number };

export type GradeRequest = {
	/** lesson = pass/fail; reading = exam open question, scored 0..points; essay = the 30-point rubric. */
	kind: 'lesson' | 'reading' | 'essay';
	/** The task's question, as the student saw it. */
	question: string;
	/** The student's text with Layer-1 typos already corrected. */
	text: string;
	/** Editor's best answers / pitfalls (`gradingNotes`). */
	notes?: string;
	/** reading: the paragraph(s) the question refers to. */
	passage?: string;
	/** reading: the question's points. */
	points?: number;
	/** essay */
	mechanics?: MechanicsCount;
};

/** One graded open exam answer, stored with the attempt so a report never re-grades. */
export type ExamGrade = {
	kind: 'reading' | 'essay';
	/** failed = the LLM was unavailable; counts 0 until re-graded. */
	status: 'graded' | 'failed';
	earned: number;
	max: number;
	/** The answer as submitted (marks point into it). */
	text: string;
	marks: Mark[];
	general?: string[];
	/** Scored 0 by rule, no LLM call (empty, not English, under 25 words). */
	gate?: GateReason;
	/** essay: points per rubric criterion, after the length deduction. */
	criteria?: Record<string, number>;
	lengthDeduction?: number;
	validWords?: number;
};
