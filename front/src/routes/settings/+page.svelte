<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import AppBar from '$lib/components/AppBar.svelte';
	import Toggle from '$lib/components/Toggle.svelte';
	import { i18n, type Language } from '$lib/i18n/index.svelte';
	import { debugStore } from '$lib/debug.svelte';
	import { themeStore, type ThemeMode } from '$lib/theme.svelte';
	import { staggerDelay } from '$lib/motion';

	let soundEffects = $state(true);
	let dailyReminders = $state(true);
	let showHints = $state(false);

	const languages: { value: Language; label: string }[] = [
		{ value: 'he', label: 'עברית' },
		{ value: 'ar', label: 'العربية' }
	];

	const themeOptions: { value: ThemeMode; label: () => string }[] = [
		{ value: 'system', label: () => i18n.dict.settings.themeSystem },
		{ value: 'light', label: () => i18n.dict.settings.themeLight },
		{ value: 'dark', label: () => i18n.dict.settings.themeDark }
	];
</script>

<AppBar title={i18n.dict.settings.title} />

<main class="mx-auto w-full max-w-lg flex-1 px-4 pt-6 pb-28">
	<section
		in:fly={{ y: 12, duration: 300, delay: staggerDelay(0), easing: cubicOut }}
		class="rounded-3xl bg-surface shadow-md ring-1 shadow-overlay/5 ring-line/70"
	>
		<h2 class="px-5 pt-5 text-sm font-bold text-muted">{i18n.dict.settings.languageSection}</h2>
		<ul class="mt-2 flex flex-col divide-y divide-line/70">
			<li class="flex items-center justify-between gap-4 px-5 py-4">
				<span>
					<span class="block font-semibold">{i18n.dict.settings.interfaceLanguage}</span>
					<span class="block text-sm text-muted">{i18n.dict.settings.interfaceLanguageEn}</span>
				</span>
				<select
					value={i18n.language}
					onchange={(e) => i18n.setLanguage(e.currentTarget.value as Language)}
					aria-label={i18n.dict.settings.interfaceLanguage}
					class="min-h-11 rounded-xl border-2 border-line bg-canvas px-3 py-2 font-semibold text-ink transition focus:border-brand"
				>
					{#each languages as option (option.value)}
						<option value={option.value}>{option.label}</option>
					{/each}
				</select>
			</li>
		</ul>
	</section>

	<section
		in:fly={{ y: 12, duration: 300, delay: staggerDelay(1), easing: cubicOut }}
		class="mt-6 rounded-3xl bg-surface shadow-md ring-1 shadow-overlay/5 ring-line/70"
	>
		<h2 class="px-5 pt-5 text-sm font-bold text-muted">{i18n.dict.settings.appearanceSection}</h2>
		<ul class="mt-2 flex flex-col divide-y divide-line/70">
			<li class="flex items-center justify-between gap-4 px-5 py-4">
				<span class="font-semibold">{i18n.dict.settings.theme}</span>
				<div
					role="radiogroup"
					aria-label={i18n.dict.settings.theme}
					class="flex gap-1 rounded-xl bg-canvas p-1"
				>
					{#each themeOptions as option (option.value)}
						<button
							type="button"
							role="radio"
							aria-checked={themeStore.mode === option.value}
							onclick={() => themeStore.setMode(option.value)}
							class="rounded-lg px-3 py-1.5 text-sm font-semibold transition active:scale-95 {themeStore.mode ===
							option.value
								? 'bg-brand text-white shadow'
								: 'text-muted hover:text-ink'}"
						>
							{option.label()}
						</button>
					{/each}
				</div>
			</li>
		</ul>
	</section>

	<section
		in:fly={{ y: 12, duration: 300, delay: staggerDelay(2), easing: cubicOut }}
		class="mt-6 rounded-3xl bg-surface shadow-md ring-1 shadow-overlay/5 ring-line/70"
	>
		<h2 class="px-5 pt-5 text-sm font-bold text-muted">{i18n.dict.settings.practiceSection}</h2>
		<ul class="mt-2 flex flex-col divide-y divide-line/70">
			<li class="flex items-center justify-between gap-4 px-5 py-4">
				<span>
					<span class="block font-semibold">{i18n.dict.settings.soundEffects}</span>
					<span class="block text-sm text-muted">{i18n.dict.settings.soundEffectsDesc}</span>
				</span>
				<Toggle bind:checked={soundEffects} label={i18n.dict.settings.soundEffects} />
			</li>
			<li class="flex items-center justify-between gap-4 px-5 py-4">
				<span>
					<span class="block font-semibold">{i18n.dict.settings.dailyReminders}</span>
					<span class="block text-sm text-muted">{i18n.dict.settings.dailyRemindersDesc}</span>
				</span>
				<Toggle bind:checked={dailyReminders} label={i18n.dict.settings.dailyReminders} />
			</li>
			<li class="flex items-center justify-between gap-4 px-5 py-4">
				<span>
					<span class="block font-semibold">{i18n.dict.settings.showHints}</span>
					<span class="block text-sm text-muted">{i18n.dict.settings.showHintsDesc}</span>
				</span>
				<Toggle bind:checked={showHints} label={i18n.dict.settings.showHints} />
			</li>
		</ul>
	</section>

	<section
		in:fly={{ y: 12, duration: 300, delay: staggerDelay(3), easing: cubicOut }}
		class="mt-6 rounded-3xl bg-surface shadow-md ring-1 shadow-overlay/5 ring-line/70"
	>
		<h2 class="px-5 pt-5 text-sm font-bold text-muted">{i18n.dict.settings.developerSection}</h2>
		<ul class="mt-2 flex flex-col divide-y divide-line/70">
			<li class="flex items-center justify-between gap-4 px-5 py-4">
				<span>
					<span class="block font-semibold">{i18n.dict.settings.debugTools}</span>
					<span class="block text-sm text-muted">{i18n.dict.settings.debugToolsDesc}</span>
				</span>
				<Toggle
					checked={debugStore.enabled}
					onchange={(value) => debugStore.setEnabled(value)}
					label={i18n.dict.settings.debugTools}
				/>
			</li>
		</ul>
	</section>

	<section
		in:fly={{ y: 12, duration: 300, delay: staggerDelay(4), easing: cubicOut }}
		class="mt-6 rounded-3xl bg-surface shadow-md ring-1 shadow-overlay/5 ring-line/70"
	>
		<h2 class="px-5 pt-5 text-sm font-bold text-muted">{i18n.dict.settings.aboutSection}</h2>
		<ul class="mt-2 flex flex-col divide-y divide-line/70">
			<li class="flex items-center justify-between gap-4 px-5 py-4">
				<span class="font-semibold">{i18n.dict.settings.version}</span>
				<span class="text-sm text-muted" dir="ltr">{i18n.dict.settings.versionValue}</span>
			</li>
			<li class="px-5 py-4">
				<span class="block font-semibold">{i18n.dict.settings.demoModeTitle}</span>
				<span class="mt-1 block text-sm leading-relaxed text-muted">
					{i18n.dict.settings.demoModeDesc}
				</span>
			</li>
		</ul>
	</section>
</main>
