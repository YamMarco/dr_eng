<script lang="ts">
	// Timer wiring without exposing the internal id. A screen that measures
	// time ("make") is just a checkbox - the id is generated. A screen that
	// shows a measured time ("pick") chooses from the timers in its lesson.
	let {
		mode,
		value = $bindable(),
		taken,
		label = 'טיימר'
	}: {
		mode: 'make' | 'pick';
		value: string | undefined;
		/** Timer ids already measured by screens in this lesson. */
		taken: string[];
		label?: string;
	} = $props();

	function toggle(on: boolean) {
		if (!on) {
			value = '';
			return;
		}
		let n = taken.length + 1;
		while (taken.includes(`timer${n}`)) n += 1;
		value = `timer${n}`;
	}
</script>

{#if mode === 'make'}
	<label class="flex items-center gap-2 text-xs text-muted">
		<input type="checkbox" checked={!!value} onchange={(e) => toggle(e.currentTarget.checked)} />
		עם טיימר
	</label>
{:else}
	<label class="flex items-center gap-2 text-xs text-muted">
		{label}
		<select bind:value class="rounded-lg border-2 border-line bg-surface p-1">
			<option value="">- בחרו -</option>
			{#each taken as key (key)}
				<option value={key}>{key}</option>
			{/each}
			{#if value && !taken.includes(value)}
				<option {value}>{value} (לא נמדד בשיעור)</option>
			{/if}
		</select>
	</label>
{/if}
