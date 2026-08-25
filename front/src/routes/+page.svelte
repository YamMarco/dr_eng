<script lang="ts">
	import { modules, unitGroups } from '$lib/curriculum';

	function letters(moduleIds: string[]) {
		return moduleIds.map((id) => modules[id].letter.toUpperCase()).join(' · ');
	}
</script>

<main class="mx-auto w-full max-w-lg flex-1 px-4 pt-10 pb-12 sm:pt-14">
	<div class="mb-8">
		<span
			class="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-3 py-1 text-sm font-semibold text-ink/70"
		>
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="h-4 w-4"
				aria-hidden="true"
			>
				<path d="M12 3 3 8l9 5 9-5-9-5Z" />
				<path d="M21 8v6" />
				<path d="M7 10.5V16c0 1.1 2.2 2.5 5 2.5s5-1.4 5-2.5v-5.5" />
			</svg>
			בגרות באנגלית
		</span>

		<h1 class="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">בחרו יחידות לימוד</h1>
		<p class="mt-2 leading-relaxed text-muted">כל רמת יחידות כוללת מספר מודולים לתרגול.</p>
	</div>

	<ul class="flex flex-col gap-4">
		{#each unitGroups as group (group.id)}
			<li>
				<a
					href="/unit/{group.id}"
					class="group flex items-center gap-4 rounded-3xl bg-surface p-5 shadow-md ring-1 shadow-ink/5 ring-line/70 transition duration-150 hover:shadow-lg active:scale-[0.99]"
				>
					<span
						class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-soft text-2xl font-extrabold text-brand-dark"
						dir="ltr"
					>
						{group.units}
					</span>

					<span class="min-w-0 flex-1">
						<span class="text-xl font-bold">{group.units} יח"ל</span>
						<span class="mt-1 block text-sm leading-relaxed text-muted" dir="ltr">
							{#if group.moduleIds.length}
								{letters(group.moduleIds)}
							{:else}
								בקרוב
							{/if}
						</span>
					</span>

					<svg
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="h-5 w-5 shrink-0 text-muted transition group-hover:text-brand rtl:rotate-180"
						aria-hidden="true"
					>
						<path d="m9 18 6-6-6-6" />
					</svg>
				</a>
			</li>
		{/each}
	</ul>
</main>
