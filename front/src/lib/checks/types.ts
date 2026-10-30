/** Which Bagrut Module C rubric category a flagged problem belongs to. */
export type RubricArea = 'vocabulary' | 'language' | 'mechanics';

/** `sure` = a definite error. `maybe` = a pattern that is usually wrong but
 *  can be legitimate, so the UI words it as a question, never as a mistake. */
export type Confidence = 'sure' | 'maybe';

export type CheckIssue = {
	/** Stable id; the UI looks the Hebrew explanation up by it. */
	rule: string;
	area: RubricArea;
	confidence: Confidence;
	/** Offsets into the checked text. */
	start: number;
	end: number;
	/** The flagged text. */
	text: string;
	/** Replacement candidates, best first. */
	suggestions: string[];
};

export type CheckOptions = {
	/** The task question: its words are never flagged, and a copied instruction sentence is not counted. */
	prompt?: string;
	/** Words handed to the student by the task (word bank): never flagged as typos. */
	extraWords?: string[];
	/** The reading passage: sentences copied from it are not counted as the student's words. */
	source?: string;
	/** Target length when it is not Module C's 70-90. An official range (C 70-90, G 120-140) brings its deduction table. */
	range?: { min: number; max: number };
};

export type LengthReport = {
	/** Words the Ministry counts (copied instruction / passage sentences removed). */
	valid: number;
	/** Everything the student typed. */
	typed: number;
	/** Points taken off the Content score; `zero` = the whole task scores 0. */
	deduction: number;
	zero: boolean;
	status: 'short' | 'ok' | 'long';
	/** The target range the status was judged against. */
	min: number;
	max: number;
};

export type CheckReport = {
	length: LengthReport;
	issues: CheckIssue[];
	/** Writing in Hebrew / not English: nothing else was checked. */
	notEnglish: boolean;
};
