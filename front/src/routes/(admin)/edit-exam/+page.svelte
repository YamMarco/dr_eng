<script lang="ts">
	import ExamEditWorkspace from '$lib/content-edit/ExamEditWorkspace.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<svelte:head><title>עריכת מבחנים</title></svelte:head>

<ExamEditWorkspace moduleId={data.module} exam={data.exam} />
