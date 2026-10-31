<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import AppBar from '$lib/components/AppBar.svelte';
	import Toggle from '$lib/components/Toggle.svelte';
	import AccountSection from '$lib/components/AccountSection.svelte';
	import SupportSection from '$lib/components/SupportSection.svelte';
	import ReminderRow from '$lib/components/ReminderRow.svelte';
	import Segmented from '$lib/components/Segmented.svelte';
	import { install } from '$lib/install.svelte';
	import { reminders } from '$lib/reminders.svelte';
	import { ChevronLeft } from '@lucide/svelte';
	import { resolve } from '$app/paths';
	import { MOBILE_BUILD } from '$lib/platform';
	import { auth } from '$lib/auth.svelte';
	import { i18n, type Language } from '$lib/i18n/index.svelte';
	import { debugStore } from '$lib/debug.svelte';
	import { themeStore, type ThemeMode } from '$lib/theme.svelte';
	import { staggerDelay } from '$lib/motion';
	import { NAME_MAX, profile, type UnitsGoal } from '$lib/profile.svelte';
	import {
		parseSessionKey,
		sessionKey,
		sessionOptions,
		unitsOptions
	} from '$lib/dashboard/goalOptions';

	const selectClass =
		'min-h-11 rounded-xl border-2 border-line bg-canvas px-3 py-2 font-semibold text-ink transition focus:border-brand';

	let soundEffects = $state(true);

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

<main class="app-col flex-1 px-4 pt-6 pb-28">
	{#if profile.value}
		{@const current = profile.value}
		<section
			in:fly={{ y: 12, duration: 300, delay: staggerDelay(0), easing: cubicOut }}
			class="mb-6 rounded-3xl bg-surface shadow-md ring-1 shadow-overlay/5 ring-line/70"
		>
			<h2 class="px-5 pt-5 text-sm font-bold text-muted">{i18n.dict.settings.goalSection}</h2>
			<ul class="mt-2 flex flex-col divide-y divide-line/70">
				<li class="flex items-center justify-between gap-4 px-5 py-4">
					<span class="font-semibold">{i18n.dict.settings.nameLabel}</span>
					<input
						type="text"
						value={current.name ?? ''}
						onchange={(e) =>
							profile.save({ ...current, name: e.currentTarget.value.trim() || undefined })}
						maxlength={NAME_MAX}
						autocomplete="given-name"
						aria-label={i18n.dict.settings.nameLabel}
						class="{selectClass} w-40 min-w-0"
					/>
				</li>
				<li class="flex items-center justify-between gap-4 px-5 py-4">
					<span class="font-semibold">{i18n.dict.settings.unitsLabel}</span>
					<select
						value={current.units}
						onchange={(e) =>
							profile.save({ ...current, units: e.currentTarget.value as UnitsGoal })}
						aria-label={i18n.dict.settings.unitsLabel}
						class={selectClass}
					>
						{#each unitsOptions() as option (option.value)}
							<option value={option.value}>{option.label}</option>
						{/each}
					</select>
				</li>
				<li class="flex items-center justify-between gap-4 px-5 py-4">
					<span class="font-semibold">{i18n.dict.settings.examLabel}</span>
					<select
						value={sessionKey(current.exam)}
						onchange={(e) =>
							profile.save({ ...current, exam: parseSessionKey(e.currentTarget.value) })}
						aria-label={i18n.dict.settings.examLabel}
						class={selectClass}
					>
						{#each sessionOptions(current.exam) as option (option.value)}
							<option value={option.value}>{option.label}</option>
						{/each}
					</select>
				</li>
			</ul>
		</section>
	{/if}

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
				<Segmented
					options={themeOptions.map((o) => ({ value: o.value, label: o.label() }))}
					value={themeStore.mode}
					label={i18n.dict.settings.theme}
					onchange={(mode) => themeStore.setMode(mode)}
				/>
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
			{#if reminders.available}
				<ReminderRow />
			{/if}
			{#if !MOBILE_BUILD && !install.installed}
				<li>
					<a
						href={resolve('/app/install')}
						class="flex items-center justify-between gap-4 px-5 py-4 transition hover:bg-brand-soft active:scale-[0.99]"
					>
						<span>
							<span class="block font-semibold">{i18n.dict.settings.installRow}</span>
							<span class="block text-sm text-muted">{i18n.dict.settings.installRowDesc}</span>
						</span>
						<ChevronLeft size={18} class="shrink-0 text-muted" aria-hidden="true" />
					</a>
				</li>
			{/if}
		</ul>
	</section>

	{#if auth.isAdmin}
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
				<!-- Staff tools: need the server, so not in the mobile app. -->
				{#if !MOBILE_BUILD}
					<li>
						<a
							href={resolve('/vocab-images')}
							class="flex items-center justify-between gap-4 px-5 py-4 font-semibold transition hover:bg-brand-soft"
						>
							{i18n.dict.nav.vocabImages}
							<ChevronLeft size={18} class="text-muted" aria-hidden="true" />
						</a>
					</li>
					<li>
						<a
							href={resolve('/kanban')}
							data-sveltekit-preload-data="off"
							class="flex items-center justify-between gap-4 px-5 py-4 font-semibold transition hover:bg-brand-soft"
						>
							{i18n.dict.nav.kanban}
							<ChevronLeft size={18} class="text-muted" aria-hidden="true" />
						</a>
					</li>
					<li>
						<a
							href={resolve('/finance')}
							data-sveltekit-preload-data="off"
							class="flex items-center justify-between gap-4 px-5 py-4 font-semibold transition hover:bg-brand-soft"
						>
							{i18n.dict.nav.finance}
							<ChevronLeft size={18} class="text-muted" aria-hidden="true" />
						</a>
					</li>
				{/if}
			</ul>
		</section>
	{/if}

	<SupportSection index={4} />

	{#if auth.enabled}
		<AccountSection index={5} />
	{/if}

	<section
		in:fly={{ y: 12, duration: 300, delay: staggerDelay(6), easing: cubicOut }}
		class="mt-6 rounded-3xl bg-surface shadow-md ring-1 shadow-overlay/5 ring-line/70"
	>
		<h2 class="px-5 pt-5 text-sm font-bold text-muted">{i18n.dict.settings.aboutSection}</h2>
		<ul class="mt-2 flex flex-col divide-y divide-line/70">
			<!-- The public site (splash) doesn't exist in the mobile app. -->
			{#if !MOBILE_BUILD}
				<li>
					<a
						href={resolve('/')}
						class="flex items-center justify-between gap-4 px-5 py-4 font-semibold transition hover:bg-brand-soft"
					>
						{i18n.dict.nav.toSite}
						<ChevronLeft size={18} class="text-muted" aria-hidden="true" />
					</a>
				</li>
				<li>
					<a
						href={resolve('/accessibility')}
						class="flex items-center justify-between gap-4 px-5 py-4 font-semibold transition hover:bg-brand-soft"
					>
						{i18n.dict.site.accessibility}
						<ChevronLeft size={18} class="text-muted" aria-hidden="true" />
					</a>
				</li>
			{/if}
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
