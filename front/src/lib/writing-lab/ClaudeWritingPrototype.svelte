<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import WritingCheck from '$lib/checks/WritingCheck.svelte';
	import RubricFeedback from './RubricFeedback.svelte';
	import WritingIntro from './WritingIntro.svelte';
	import { analyzeWriting, type WritingAnalysis } from './analysis';

	let started = $state(false);
	const PROMPT = 'Should students get homework every day? Give reasons to explain your opinion.';
	let text = $state('');
	let result = $state<WritingAnalysis | null>(null);
	let wordCount = $derived(text.trim() ? text.trim().split(/\s+/).length : 0);

	function check() {
		result = analyzeWriting(text);
	}
</script>

<div class="rounded-3xl bg-surface p-5 shadow-md ring-1 shadow-overlay/5 ring-line/70">
	<div class="mb-4 flex items-center justify-between gap-3">
		<div>
			<p class="text-xs font-bold text-muted">אב־טיפוס Claude</p>
			<h2 class="text-xl font-extrabold">בודק לפי המחוון</h2>
		</div>
		<span class="rounded-full bg-accent-soft px-3 py-1 text-xs font-bold">
			{started ? 'טיוטה אחת' : 'איך זה עובד'}
		</span>
	</div>

	{#if !started}
		<WritingIntro
			title="כותבים תשובה מלאה, ורואים איך הבוחן יקרא אותה"
			body="בבגרות תשובת כתיבה שווה 30 נקודות, והן מתחלקות לארבעה סעיפים. כאן כותבים טיוטה אחת של 70-90 מילים, ובסוף רואים כמה נקודות קיבלתם בכל סעיף ומה התיקון הכי חשוב."
			steps={[
				{
					marker: '10',
					title: 'תוכן וארגון',
					detail: 'עמדה ברורה, סיבה שמסבירה אותה ודוגמה אמיתית.'
				},
				{
					marker: '8',
					title: 'אוצר מילים',
					detail: 'מילים מגוונות ומדויקות, בלי good, nice, important.'
				},
				{
					marker: '8',
					title: 'שימוש בשפה',
					detail: 'משפטים שמתחברים במקשרים: because, for example.'
				},
				{ marker: '4', title: 'כתיב ופיסוק', detail: 'אות גדולה בתחילת משפט ונקודה בסופו.' }
			]}
			note="האומדן מיועד לתרגול ואינו ציון רשמי. הבדיקה מקומית, והטקסט לא נשלח לשירות חיצוני."
			startLabel="להתחיל לכתוב"
			onstart={() => (started = true)}
		>
			<div class="rounded-2xl border border-line p-3 text-sm">
				<p class="font-bold">מה ההבדל בין סיבה כללית לסיבה טובה?</p>
				<p class="mt-2 text-danger" dir="ltr">✗ Homework is good because it is important.</p>
				<p class="mt-1 text-brand-dark" dir="ltr">
					✓ Homework helps students remember what they learned in class.
				</p>
				<p class="mt-2 text-muted">הסיבה הטובה אומרת בדיוק מה קורה, ואפשר לתת לה דוגמה.</p>
			</div>
		</WritingIntro>
	{:else}
		<p class="font-semibold" dir="ltr">
			Should students get homework every day? Give reasons to explain your opinion.
		</p>
		<p class="mt-2 text-sm text-muted">
			כתבו 70–90 מילים. המשוב יוצג לפי ארבעת סעיפי מחוון שאלון C.
		</p>

		<textarea
			dir="auto"
			rows="9"
			bind:value={text}
			oninput={() => (result = null)}
			placeholder="כתבו כאן באנגלית..."
			class="mt-4 w-full rounded-2xl border-2 border-line bg-canvas p-3 leading-relaxed focus:border-brand"
		></textarea>
		<div class="mb-4 flex items-center justify-between text-xs font-semibold text-muted">
			<span>{wordCount} מילים</span>
			<span class={wordCount >= 70 && wordCount <= 90 ? 'text-brand-dark' : ''}>יעד: 70–90</span>
		</div>
		<WritingCheck {text} options={{ prompt: PROMPT }} />

		<Button onclick={check} disabled={wordCount < 10}>בדקו לפי המחוון</Button>
		{#if result}
			<RubricFeedback analysis={result} />
		{/if}
	{/if}
</div>
