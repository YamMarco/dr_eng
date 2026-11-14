<script lang="ts">
	import {
		BookOpen,
		CalendarCheck,
		Check,
		CircleCheck,
		GraduationCap,
		Lightbulb,
		PenLine,
		ShieldCheck,
		Sparkles,
		Target
	} from '@lucide/svelte';
	import Button from '$lib/components/Button.svelte';
	import Confetti from '$lib/components/Confetti.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import { staggerDelay } from '$lib/motion';
	import ClassMock from '$lib/site/ClassMock.svelte';
	import Faq from '$lib/site/Faq.svelte';
	import { reveal } from '$lib/site/reveal';
	import { SUPPORT_EMAIL } from '$lib/support';

	// The organizations' front door (schools, learning centers, municipalities): a sales
	// conversation, not a checkout. The one action is the contact form, which for now
	// opens the visitor's mail app with the details filled in.

	let t = $derived(i18n.dict.site.schools);

	const teacherIcons = [Target, Lightbulb, PenLine, CalendarCheck];
	const trustIcons = [BookOpen, ShieldCheck, GraduationCap];

	let form = $state({ name: '', role: '', org: '', students: '', phone: '', email: '' });
	let sent = $state(false);

	function send(event: SubmitEvent) {
		event.preventDefault();
		const f = t.form;
		const body = [
			`${f.name}: ${form.name}`,
			`${f.role}: ${form.role}`,
			`${f.org}: ${form.org}`,
			`${f.students}: ${form.students}`,
			`${f.phone}: ${form.phone}`,
			`${f.email}: ${form.email}`
		].join('\n');
		location.href = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(f.subject)}&body=${encodeURIComponent(body)}`;
		sent = true;
	}

	const kicker = 'text-sm font-bold tracking-wide text-brand-dark uppercase';
	const h2 = 'text-3xl font-black tracking-tight text-balance sm:text-5xl';
	const input =
		'min-h-12 w-full rounded-2xl border-2 border-line bg-surface px-4 transition-colors placeholder:text-muted/70 focus:border-brand focus:ring-0 focus:outline-none';
</script>

<svelte:head>
	<title>{t.metaTitle}</title>
	<meta name="description" content={t.metaDescription} />
	<meta property="og:title" content={t.metaTitle} />
	<meta property="og:description" content={t.metaDescription} />
	<meta property="og:type" content="website" />
</svelte:head>

<main class="flex flex-1 flex-col overflow-x-clip">
	<!-- Hero -->
	<section
		class="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 pt-10 pb-16 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:pt-16 lg:pb-24"
	>
		<div class="flex flex-col items-start gap-6">
			<span class="{kicker} motion-safe:animate-rise">{t.kicker}</span>
			<h1
				class="text-[2.6rem] leading-[1.08] font-black tracking-tight text-balance motion-safe:animate-rise sm:text-6xl"
				style="animation-delay: {staggerDelay(1)}ms"
			>
				{t.heroTitle}
			</h1>
			<p
				class="max-w-xl text-lg leading-relaxed text-muted motion-safe:animate-rise sm:text-xl"
				style="animation-delay: {staggerDelay(2)}ms"
			>
				{t.heroBody}
			</p>
			<div
				class="grid w-full max-w-xl gap-3 motion-safe:animate-rise sm:grid-cols-2"
				style="animation-delay: {staggerDelay(3)}ms"
			>
				<Button href="#contact">{t.ctaContact}</Button>
				<Button variant="secondary" href="#how">{t.ctaHow}</Button>
			</div>
			<span
				class="flex items-center gap-2 rounded-full bg-surface py-1.5 ps-2.5 pe-3.5 text-sm font-semibold shadow-sm ring-1 ring-line motion-safe:animate-rise"
				style="animation-delay: {staggerDelay(4)}ms"
			>
				<Sparkles size={16} class="text-accent" aria-hidden="true" />
				{t.pilotChip}
			</span>
		</div>
		<div
			class="float-slow flex justify-center motion-safe:animate-rise lg:justify-end"
			style="animation-delay: 150ms"
		>
			<ClassMock />
		</div>
	</section>

	<!-- How it works -->
	<section
		id="how"
		class="mx-auto flex w-full max-w-6xl scroll-mt-20 flex-col gap-10 px-4 pb-20 sm:px-6 lg:pb-28"
	>
		<header {@attach reveal} class="flex max-w-2xl flex-col gap-2">
			<span class={kicker}>{t.stepsKicker}</span>
			<h2 class={h2}>{t.stepsTitle}</h2>
		</header>
		<ol class="grid gap-4 sm:grid-cols-3">
			{#each t.steps as step, i (step.title)}
				<li
					{@attach reveal}
					style="--reveal-delay: {i * 90}ms"
					class="flex flex-col gap-2 rounded-4xl bg-surface p-6 shadow-sm ring-1 ring-line/70 transition duration-200 hover:-translate-y-1 hover:shadow-lg"
				>
					<span class="flex items-center gap-2 text-lg font-extrabold">
						<span
							class="flex h-7 w-7 items-center justify-center rounded-full bg-brand text-sm text-white tabular"
							>{i + 1}</span
						>
						{step.title}
					</span>
					<p class="leading-relaxed text-muted">{step.body}</p>
				</li>
			{/each}
		</ol>
	</section>

	<!-- The teacher's view -->
	<section class="px-3 pb-20 sm:px-6 lg:pb-28">
		<div
			{@attach reveal}
			class="relative mx-auto flex max-w-6xl flex-col gap-10 overflow-hidden rounded-[2.5rem] bg-overlay px-6 py-14 text-white ring-1 ring-white/10 sm:px-12 lg:py-20"
		>
			<div
				class="pointer-events-none absolute -inset-e-24 -top-24 h-80 w-80 rounded-full bg-brand/30 blur-3xl"
				aria-hidden="true"
			></div>
			<header class="relative flex max-w-2xl flex-col gap-3">
				<span class="text-sm font-bold tracking-wide text-brand uppercase">{t.teacherKicker}</span>
				<h2 class="text-3xl font-black tracking-tight text-balance sm:text-5xl">
					{t.teacherTitle}
				</h2>
				<p class="text-lg leading-relaxed text-white/80">{t.teacherBody}</p>
			</header>
			<ul class="relative grid gap-4 sm:grid-cols-2">
				{#each t.teacherFeatures as feature, i (feature.title)}
					{@const Icon = teacherIcons[i]}
					<li
						{@attach reveal}
						style="--reveal-delay: {i * 90}ms"
						class="flex items-start gap-4 rounded-3xl bg-white/5 p-5 ring-1 ring-white/10"
					>
						<span
							class="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand text-white"
						>
							<Icon size={20} aria-hidden="true" />
						</span>
						<span class="flex flex-col gap-0.5">
							<span class="text-lg font-bold">{feature.title}</span>
							<span class="leading-relaxed text-white/75">{feature.body}</span>
						</span>
					</li>
				{/each}
			</ul>
		</div>
	</section>

	<!-- Trust -->
	<section class="mx-auto w-full max-w-6xl px-4 pb-20 sm:px-6 lg:pb-28">
		<ul class="grid gap-4 sm:grid-cols-3">
			{#each t.trust as item, i (item.title)}
				{@const Icon = trustIcons[i]}
				<li
					{@attach reveal}
					style="--reveal-delay: {i * 90}ms"
					class="flex flex-col gap-3 rounded-4xl bg-surface p-6 shadow-sm ring-1 ring-line/70"
				>
					<span
						class="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-soft text-brand-dark"
					>
						<Icon size={20} aria-hidden="true" />
					</span>
					<span class="text-xl font-extrabold">{item.title}</span>
					<p class="leading-relaxed text-muted">{item.body}</p>
				</li>
			{/each}
		</ul>
	</section>

	<!-- Pricing and the pilot -->
	<section class="px-3 pb-20 sm:px-6 lg:pb-28">
		<div
			{@attach reveal}
			class="mx-auto grid max-w-6xl gap-10 rounded-[2.5rem] bg-brand-soft px-6 py-12 sm:px-12 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:py-16"
		>
			<div class="flex flex-col items-start gap-4">
				<span class={kicker}>{t.pricingKicker}</span>
				<h2 class={h2}>{t.pricingTitle}</h2>
				<p class="text-lg leading-relaxed text-muted">{t.pricingBody}</p>
				<ul class="flex flex-col gap-2">
					{#each t.pricingPoints as point (point)}
						<li class="flex items-start gap-2 leading-snug font-semibold">
							<Check size={18} class="mt-0.5 shrink-0 text-brand-dark" aria-hidden="true" />
							{point}
						</li>
					{/each}
				</ul>
			</div>
			<div class="flex flex-col gap-4 rounded-3xl bg-surface p-6 shadow-sm">
				<span
					class="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-soft text-ink"
				>
					<Sparkles size={20} aria-hidden="true" />
				</span>
				<span class="text-2xl font-extrabold">{t.pilotTitle}</span>
				<p class="leading-relaxed text-muted">{t.pilotBody}</p>
				<Button href="#contact">{t.ctaContact}</Button>
			</div>
		</div>
	</section>

	<div class="px-4 pb-20 sm:px-6 lg:pb-28">
		<Faq title={t.faqTitle} items={t.faq} />
	</div>

	<!-- Contact -->
	<section
		id="contact"
		class="mx-auto flex w-full max-w-2xl scroll-mt-20 flex-col gap-6 px-4 pb-16 sm:px-6"
	>
		<header {@attach reveal} class="flex flex-col items-center gap-2 text-center">
			<span class={kicker}>{t.contactKicker}</span>
			<h2 class={h2}>{t.contactTitle}</h2>
			<p class="text-lg text-muted">{t.contactBody}</p>
		</header>
		{#if sent}
			<div
				class="relative flex flex-col items-center gap-2 rounded-3xl bg-brand-soft p-8 text-center motion-safe:animate-rise"
				role="status"
			>
				<Confetti />
				<CircleCheck
					size={32}
					class="text-brand-dark motion-safe:animate-pop-correct"
					aria-hidden="true"
				/>
				<span class="text-xl font-extrabold">{t.form.doneTitle}</span>
				<p class="text-muted">{t.form.doneBody}</p>
			</div>
		{:else}
			<form
				{@attach reveal}
				onsubmit={send}
				class="grid gap-4 rounded-3xl bg-surface p-5 shadow-sm ring-1 ring-line/70 sm:grid-cols-2 sm:p-6"
			>
				<label class="flex flex-col gap-1.5 text-sm font-semibold">
					{t.form.name}
					<input required autocomplete="name" bind:value={form.name} class={input} />
				</label>
				<label class="flex flex-col gap-1.5 text-sm font-semibold">
					{t.form.role}
					<input
						autocomplete="organization-title"
						placeholder={t.form.rolePlaceholder}
						bind:value={form.role}
						class={input}
					/>
				</label>
				<label class="flex flex-col gap-1.5 text-sm font-semibold">
					{t.form.org}
					<input required autocomplete="organization" bind:value={form.org} class={input} />
				</label>
				<label class="flex flex-col gap-1.5 text-sm font-semibold">
					{t.form.students}
					<input
						inputmode="numeric"
						dir="ltr"
						bind:value={form.students}
						class="{input} text-end"
					/>
				</label>
				<label class="flex flex-col gap-1.5 text-sm font-semibold">
					{t.form.phone}
					<input
						type="tel"
						autocomplete="tel"
						dir="ltr"
						bind:value={form.phone}
						class="{input} text-end"
					/>
				</label>
				<label class="flex flex-col gap-1.5 text-sm font-semibold">
					{t.form.email}
					<input
						type="email"
						required
						autocomplete="email"
						dir="ltr"
						bind:value={form.email}
						class="{input} text-end"
					/>
				</label>
				<div class="flex flex-col gap-2 sm:col-span-2">
					<Button type="submit">{t.form.submit}</Button>
					<p class="text-xs text-muted">{t.form.note}</p>
				</div>
			</form>
		{/if}
	</section>
</main>
