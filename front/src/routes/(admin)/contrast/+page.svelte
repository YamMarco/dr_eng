<script lang="ts">
	import { Check, Lightbulb } from '@lucide/svelte';
	import AppBar from '$lib/components/AppBar.svelte';
	import Button from '$lib/components/Button.svelte';
	import AnswerMark from '$lib/lesson-screens/AnswerMark.svelte';

	// Prototype (staff only): the theme colors now vs. a version that passes
	// WCAG AA contrast (4.5:1 for normal text). Each panel sets its own color
	// variables, so the app's real theme is untouched. Delete once decided.

	type Palette = Record<string, string>;

	const lightNow: Palette = {
		canvas: '#f9f7f4',
		surface: '#ffffff',
		brand: '#2a9d8f',
		'brand-dark': '#23867b',
		'brand-soft': '#e6f2f0',
		ink: '#1f2937',
		muted: '#6b7280',
		line: '#ece8e1',
		danger: '#e76f51',
		'danger-soft': '#fdeae4',
		miss: '#4b5d7a',
		'miss-soft': '#e9edf3',
		'on-fill': '#ffffff'
	};
	const lightAfter: Palette = {
		...lightNow,
		brand: '#238478',
		'brand-dark': '#1f796f',
		danger: '#ab523c'
	};
	const darkNow: Palette = {
		canvas: '#14181b',
		surface: '#1c2226',
		brand: '#35b3a3',
		'brand-dark': '#7fd8c8',
		'brand-soft': '#1c332f',
		ink: '#f3f1ec',
		muted: '#98a1a8',
		line: '#2b3236',
		danger: '#ee8267',
		'danger-soft': '#3a2019',
		miss: '#a9b8cf',
		'miss-soft': '#232b36',
		'on-fill': '#ffffff'
	};
	const darkAfter: Palette = { ...darkNow, 'on-fill': '#14181b' };

	const panels = [
		{ title: 'בהיר: עכשיו', p: lightNow },
		{ title: 'בהיר: אחרי', p: lightAfter },
		{ title: 'כהה: עכשיו', p: darkNow },
		{ title: 'כהה: אחרי', p: darkAfter }
	];

	function luminance(hex: string) {
		const [r, g, b] = [1, 3, 5]
			.map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
			.map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
		return 0.2126 * r + 0.7152 * g + 0.0722 * b;
	}
	function ratio(a: string, b: string) {
		const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
		return (hi + 0.05) / (lo + 0.05);
	}

	const pairs: [string, string, string][] = [
		['כפתור', 'on-fill', 'brand'],
		['כפתור משני', 'brand', 'surface'],
		['טקסט טורקיז', 'brand-dark', 'surface'],
		['תגית', 'brand-dark', 'brand-soft'],
		['עיגול "לא נכון"', 'on-fill', 'miss'],
		['הודעת שגיאה', 'danger', 'danger-soft'],
		['טקסט אפור', 'muted', 'surface']
	];

	const vars = (p: Palette) =>
		Object.entries(p)
			.map(([k, v]) => `--color-${k}: ${v}`)
			.join('; ');
</script>

<AppBar title="ניגודיות צבעים: לפני ואחרי" />

<main class="mx-auto grid max-w-6xl gap-4 p-4 sm:grid-cols-2">
	{#each panels as { title, p } (title)}
		<section
			class="flex flex-col gap-3 rounded-3xl p-4 ring-1 ring-line"
			class:dark-labels={p['on-fill'] !== '#ffffff'}
			style="{vars(p)}; background: var(--color-canvas); color: var(--color-ink)"
		>
			<h2 class="text-lg font-bold">{title}</h2>

			<Button>המשיכו</Button>
			<Button variant="secondary">חזרה</Button>

			<div class="flex flex-wrap items-center gap-3">
				<span class="rounded-full bg-brand-soft px-3 py-1 text-sm font-bold text-brand-dark">
					בחירה מרובה
				</span>
				<span class="text-sm font-semibold text-brand-dark underline">שכחתי סיסמה</span>
			</div>

			<div
				class="flex items-center gap-2 rounded-2xl border-2 border-brand bg-brand-soft px-4 py-3 font-semibold text-brand-dark"
			>
				<span class="flex-1" lang="en">The answer you picked</span>
				<AnswerMark right={true} />
			</div>
			<div
				class="flex items-center gap-2 rounded-2xl border-2 border-miss bg-miss-soft px-4 py-3 font-semibold text-miss"
			>
				<span class="flex-1" lang="en">Another answer</span>
				<AnswerMark right={false} />
			</div>

			<div class="flex items-center gap-3">
				<span
					class="flex h-11 w-11 items-center justify-center rounded-full bg-brand"
					style="color: var(--color-on-fill)"
				>
					<Check size={26} strokeWidth={3} aria-hidden="true" />
				</span>
				<span
					class="flex h-11 w-11 items-center justify-center rounded-full bg-miss"
					style="color: var(--color-on-fill)"
				>
					<Lightbulb size={22} strokeWidth={2.5} aria-hidden="true" />
				</span>
				<span class="text-sm text-muted">טקסט משני באפור</span>
			</div>

			<p class="rounded-xl bg-danger-soft px-3 py-2 text-sm font-semibold text-danger">
				משהו השתבש. נסו שוב בעוד רגע.
			</p>

			<ul class="grid grid-cols-2 gap-x-3 gap-y-1 text-xs">
				{#each pairs as [label, fg, bg] (label)}
					{@const r = ratio(p[fg], p[bg])}
					<li class="flex justify-between gap-2">
						<span>{label}</span>
						<span class="font-bold tabular" dir="ltr">
							{r.toFixed(1)}
							{r >= 4.5 ? '✓' : '✗'}
						</span>
					</li>
				{/each}
			</ul>
		</section>
	{/each}
</main>

<style>
	/* The real Button paints its label white; the "after" dark panel shows it dark. */
	.dark-labels :global(.puck-3d) {
		color: var(--color-on-fill);
	}
</style>
