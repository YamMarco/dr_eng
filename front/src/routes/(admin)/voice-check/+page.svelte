<script lang="ts">
	// Staff check of the recorded vocab voices: 10 random deck words, each in
	// both voices, normal and slow (the app's 0.75x), next to the browser voice.
	import { decks } from '$lib/deck';
	import { RATE, hush, speak } from '$lib/speech';
	import { VOICES, vocabAudioUrl, type VoiceGender } from '$lib/vocabAudio';

	const all = Object.values(decks).flatMap((ds) => ds.flatMap((d) => d.words.map((w) => w.word)));
	const pick = () => [...all].sort(() => Math.random() - 0.5).slice(0, 10);

	let words = $state(pick());
	let missing = $state<Record<string, boolean>>({});
	const player = typeof Audio === 'undefined' ? undefined : new Audio();

	function play(word: string, gender: VoiceGender, slow: boolean) {
		const url = vocabAudioUrl(word, gender);
		if (!player || !url) return;
		hush();
		player.src = url;
		player.preservesPitch = true;
		player.playbackRate = slow ? 0.75 : 1;
		player.onerror = () => (missing[`${gender}:${word}`] = true);
		void player.play().catch(() => {});
	}

	const genders = Object.keys(VOICES) as VoiceGender[];
	const btn =
		'min-h-11 rounded-lg bg-accent-soft px-3 text-sm font-semibold transition active:scale-95';
</script>

<main class="app-col px-4 py-6">
	<div class="mb-4 flex items-center justify-between gap-4">
		<h1 class="text-xl font-bold">בדיקת קולות המילים</h1>
		<button type="button" class={btn} onclick={() => ((words = pick()), (missing = {}))}>
			10 מילים אחרות
		</button>
	</div>
	<ul class="flex flex-col divide-y divide-line/70 rounded-2xl bg-surface ring-1 ring-line/70">
		{#each words as word (word)}
			<li class="flex flex-col gap-2 px-4 py-3">
				<span class="text-lg font-bold" dir="ltr">{word}</span>
				<div class="flex flex-wrap gap-2">
					{#each genders as gender (gender)}
						{#if missing[`${gender}:${word}`]}
							<span class="text-sm text-muted"
								>{gender === 'female' ? 'אישה' : 'גבר'}: אין הקלטה</span
							>
						{:else}
							<button type="button" class={btn} onclick={() => play(word, gender, false)}>
								{gender === 'female' ? 'אישה' : 'גבר'}
							</button>
							<button type="button" class={btn} onclick={() => play(word, gender, true)}>
								{gender === 'female' ? 'אישה' : 'גבר'} לאט
							</button>
						{/if}
					{/each}
					<button type="button" class={btn} onclick={() => speak(word, RATE.normal)}>
						קול הדפדפן
					</button>
				</div>
			</li>
		{/each}
	</ul>
</main>
