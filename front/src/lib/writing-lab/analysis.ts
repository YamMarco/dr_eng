export type RubricResult = {
	key: 'content' | 'vocabulary' | 'language' | 'mechanics';
	label: string;
	score: number;
	max: number;
	feedback: string;
};

export type WritingAnalysis = {
	wordCount: number;
	total: number;
	criteria: RubricResult[];
	priority: string;
};

const TOPIC_WORDS = new Set(['homework', 'student', 'students', 'school', 'teacher', 'teachers']);
const VAGUE_WORDS = new Set(['good', 'bad', 'nice', 'fun', 'important', 'things', 'stuff']);
const CONNECTORS = [
	'because',
	'for example',
	'for instance',
	'in addition',
	'however',
	'therefore'
];

function words(text: string): string[] {
	return text.toLowerCase().match(/[a-z']+/g) ?? [];
}

function sentences(text: string): string[] {
	return text
		.split(/[.!?]+/)
		.map((sentence) => sentence.trim())
		.filter(Boolean);
}

function occurrences(text: string, values: Iterable<string>): number {
	const normalized = text.toLowerCase();
	return [...values].filter((value) => normalized.includes(value)).length;
}

export function analyzeWriting(text: string): WritingAnalysis {
	const tokens = words(text);
	const sentenceList = sentences(text);
	const normalized = text.toLowerCase();
	const wordCount = tokens.length;
	const topicHits = occurrences(normalized, TOPIC_WORDS);
	const connectorHits = occurrences(normalized, CONNECTORS);
	const vagueHits = tokens.filter((word) => VAGUE_WORDS.has(word)).length;
	const hasStance =
		/\b(i think|i believe|in my opinion|students should|students should not)\b/i.test(text);
	const hasReason = /\b(because|since)\b/i.test(text);
	const hasExample = /\b(for example|for instance|such as)\b/i.test(text);
	const capitalsOk = sentenceList.filter((sentence) => /^[A-Z]/.test(sentence)).length;
	const ended = (text.match(/[.!?](?=\s|$)/g) ?? []).length;
	const uniqueRatio = wordCount === 0 ? 0 : new Set(tokens).size / wordCount;

	const contentSignals = [topicHits > 0, hasStance, hasReason, hasExample].filter(Boolean).length;
	const content = contentSignals === 4 ? 10 : contentSignals === 3 ? 7 : contentSignals > 0 ? 3 : 0;

	let vocabulary = wordCount === 0 ? 0 : 2;
	if (wordCount >= 45 && uniqueRatio >= 0.45) vocabulary = 5;
	if (wordCount >= 70 && uniqueRatio >= 0.52 && connectorHits >= 2 && vagueHits <= 2)
		vocabulary = 8;

	let language = wordCount === 0 ? 0 : 2;
	if (sentenceList.length >= 4 && hasReason) language = 5;
	if (sentenceList.length >= 5 && connectorHits >= 2 && capitalsOk >= sentenceList.length - 1)
		language = 8;

	let mechanics = wordCount === 0 ? 0 : 1;
	if (sentenceList.length > 0 && capitalsOk >= sentenceList.length - 1) mechanics = 2;
	if (
		sentenceList.length >= 4 &&
		capitalsOk === sentenceList.length &&
		ended >= sentenceList.length
	) {
		mechanics = 4;
	}

	const criteria: RubricResult[] = [
		{
			key: 'content',
			label: 'תוכן וארגון',
			score: content,
			max: 10,
			feedback:
				content >= 8
					? 'העמדה ברורה, יש סיבה ויש דוגמה שתומכת בה.'
					: 'חסר אחד מאלה: עמדה ברורה, סיבה מוסברת או דוגמה ממשית.'
		},
		{
			key: 'vocabulary',
			label: 'אוצר מילים',
			score: vocabulary,
			max: 8,
			feedback:
				vocabulary >= 8
					? 'יש מגוון מילים ומקשרים, בלי הישענות רבה על מילים כלליות.'
					: 'כדאי להחליף מילים כלליות ולגוון את המקשרים.'
		},
		{
			key: 'language',
			label: 'שימוש בשפה',
			score: language,
			max: 8,
			feedback:
				language >= 8
					? 'המשפטים מחוברים ומציגים קשר ברור בין הרעיונות.'
					: 'כדאי לחבר בין המשפטים ולהסביר את הקשר בין הסיבה לעמדה.'
		},
		{
			key: 'mechanics',
			label: 'כתיב ופיסוק',
			score: mechanics,
			max: 4,
			feedback:
				mechanics >= 4
					? 'המשפטים מתחילים באות גדולה ומסתיימים בסימן פיסוק.'
					: 'בדקו אות גדולה בתחילת כל משפט וסימן פיסוק בסופו.'
		}
	];

	let priority = 'הוסיפו פרט חדש שמחזק את אחת הסיבות.';
	if (wordCount < 70) priority = `הוסיפו ${70 - wordCount} מילים כדי להגיע לאורך הבחינה.`;
	else if (wordCount > 90) priority = `קצרו ${wordCount - 90} מילים כדי להישאר בטווח הבחינה.`;
	else if (!hasStance) priority = 'פתחו בעמדה חד־משמעית שעונה ישירות על השאלה.';
	else if (!hasReason) priority = 'הוסיפו סיבה שמסבירה למה העמדה שלכם נכונה.';
	else if (!hasExample) priority = 'הוסיפו דוגמה עם אדם, מצב או פרט שאפשר לדמיין.';
	else if (vagueHits > 2) priority = 'החליפו לפחות מילה כללית אחת בפרט מדויק.';
	else if (connectorHits < 2) priority = 'חברו בין הרעיונות בעזרת מקשר נוסף.';
	else if (mechanics < 4) priority = 'תקנו תחילה אותיות גדולות וסימני פיסוק.';

	return {
		wordCount,
		total: criteria.reduce((sum, criterion) => sum + criterion.score, 0),
		criteria,
		priority
	};
}
