<script lang="ts">
	import ExamEditWorkspace from '$lib/content-edit/ExamEditWorkspace.svelte';
	import { editStore } from '$lib/content-edit/editStore.svelte';
	import { checkContentEditPassword, rememberContentEditPassword } from '$lib/content-edit/api';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	// dev: open. production: same session password gate as /edit.
	let unlocked = $derived(data.dev || editStore.authed);
	let pw = $state('');
	let err = $state('');

	async function unlock(e: Event) {
		e.preventDefault();
		err = '';
		if (await checkContentEditPassword(pw)) {
			rememberContentEditPassword(pw);
			editStore.setAuthed(true);
		} else {
			err = 'סיסמה שגויה';
		}
	}
</script>

<svelte:head><title>עריכת מבחנים</title></svelte:head>

{#if unlocked}
	<ExamEditWorkspace moduleId={data.module} exam={data.exam} />
{:else}
	<div class="mx-auto flex min-h-dvh max-w-sm flex-col justify-center px-6">
		<form onsubmit={unlock} class="rounded-2xl border border-line bg-surface p-6">
			<p class="mb-3 font-bold">עריכת מבחנים - נדרשת סיסמה</p>
			<input
				type="password"
				bind:value={pw}
				class="mb-2 w-full rounded-lg border-2 border-line bg-canvas p-2"
				placeholder="סיסמה"
			/>
			{#if err}<p class="mb-2 text-xs text-danger">{err}</p>{/if}
			<button type="submit" class="w-full rounded-lg bg-brand py-2 font-bold text-white"
				>כניסה</button
			>
		</form>
	</div>
{/if}
