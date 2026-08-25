<script lang="ts">
	import AppBar from '$lib/components/AppBar.svelte';
	import Toggle from '$lib/components/Toggle.svelte';

	let soundEffects = $state(true);
	let dailyReminders = $state(true);
	let showHints = $state(false);

	const version = '0.1.0 (הדגמה מקומית)';
</script>

<AppBar title="הגדרות" />

<main class="mx-auto w-full max-w-lg flex-1 px-4 pt-6 pb-28">
	<section class="rounded-3xl bg-surface shadow-md ring-1 shadow-ink/5 ring-line/70">
		<h2 class="px-5 pt-5 text-sm font-bold text-muted">חוויית תרגול</h2>
		<ul class="mt-2 flex flex-col divide-y divide-line/70">
			<li class="flex items-center justify-between gap-4 px-5 py-4">
				<span>
					<span class="block font-semibold">אפקטי קול</span>
					<span class="block text-sm text-muted">צליל בתשובה נכונה או שגויה</span>
				</span>
				<Toggle bind:checked={soundEffects} label="אפקטי קול" />
			</li>
			<li class="flex items-center justify-between gap-4 px-5 py-4">
				<span>
					<span class="block font-semibold">תזכורות יומיות</span>
					<span class="block text-sm text-muted">התראה לתרגול יומי</span>
				</span>
				<Toggle bind:checked={dailyReminders} label="תזכורות יומיות" />
			</li>
			<li class="flex items-center justify-between gap-4 px-5 py-4">
				<span>
					<span class="block font-semibold">רמזים בתרגילים</span>
					<span class="block text-sm text-muted">הצגת רמז לפני בדיקת תשובה</span>
				</span>
				<Toggle bind:checked={showHints} label="רמזים בתרגילים" />
			</li>
		</ul>
	</section>

	<section class="mt-6 rounded-3xl bg-surface shadow-md ring-1 shadow-ink/5 ring-line/70">
		<h2 class="px-5 pt-5 text-sm font-bold text-muted">אודות</h2>
		<ul class="mt-2 flex flex-col divide-y divide-line/70">
			<li class="flex items-center justify-between gap-4 px-5 py-4">
				<span class="font-semibold">גרסה</span>
				<span class="text-sm text-muted" dir="ltr">{version}</span>
			</li>
			<li class="px-5 py-4">
				<span class="block font-semibold">מצב הדגמה</span>
				<span class="mt-1 block text-sm leading-relaxed text-muted">
					זהו דמו מקומי ללא חיבור לאינטרנט. שינויים במסך זה אינם נשמרים.
				</span>
			</li>
		</ul>
	</section>
</main>
