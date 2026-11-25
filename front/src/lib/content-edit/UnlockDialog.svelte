<script lang="ts">
	// Asks for the production editing password when a save hits the lock
	// (unlock.svelte.ts). Mounted once in the (admin) layout.
	import { unlock } from './unlock.svelte';

	let dialog = $state<HTMLDialogElement>();
	let password = $state('');

	$effect(() => {
		if (unlock.pending && !dialog?.open) dialog?.showModal();
		else if (!unlock.pending && dialog?.open) dialog.close();
	});

	function answer(pw: string | null) {
		password = '';
		unlock.answer(pw);
	}

	function submit(e: SubmitEvent) {
		e.preventDefault();
		if (password) answer(password);
	}
</script>

<dialog
	bind:this={dialog}
	oncancel={() => answer(null)}
	aria-labelledby="unlock-title"
	class="m-auto w-[min(26rem,calc(100%-2rem))] rounded-2xl p-6 shadow-xl backdrop:bg-black/40"
	dir="rtl"
>
	<form onsubmit={submit} class="flex flex-col gap-3">
		<h2 id="unlock-title" class="text-lg font-bold">שמירה באתר החי</h2>
		<p class="text-sm text-gray-700">
			שמירה כאן עולה מיד לתלמידים, בלי לעבור בדיקה. עריכה רגילה נעשית ב-
			<a href="https://dev.engup.co.il" class="underline" dir="ltr">dev.engup.co.il</a>
		</p>
		<label class="flex flex-col gap-1 text-sm">
			סיסמת עריכה
			<!-- svelte-ignore a11y_autofocus -->
			<input
				type="password"
				autofocus
				bind:value={password}
				autocomplete="current-password"
				class="rounded-lg border border-gray-300 px-3 py-2"
				aria-invalid={unlock.pending?.wrong}
				aria-describedby={unlock.pending?.wrong ? 'unlock-wrong' : undefined}
			/>
		</label>
		{#if unlock.pending?.wrong}
			<p id="unlock-wrong" class="text-sm text-red-700" role="alert">הסיסמה שגויה</p>
		{/if}
		<div class="flex gap-2">
			<button type="submit" class="rounded-lg bg-gray-900 px-4 py-2 text-white" disabled={!password}>
				שמירה
			</button>
			<button type="button" class="rounded-lg px-4 py-2" onclick={() => answer(null)}>
				ביטול
			</button>
		</div>
	</form>
</dialog>
