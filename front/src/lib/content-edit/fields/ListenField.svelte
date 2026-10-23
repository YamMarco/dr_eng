<script lang="ts">
	// The one listening switch, the same on every screen that has it (spelling,
	// question, order, speak): the student hears the English instead of reading
	// it. `children` = the screen's extra listening settings, shown when on.
	import type { Snippet } from 'svelte';
	import SettingsGroup from './SettingsGroup.svelte';

	let {
		checked,
		onChange,
		children
	}: { checked: boolean; onChange: (on: boolean) => void; children?: Snippet } = $props();
</script>

<SettingsGroup title="🎧 האזנה">
	<label class="flex items-center gap-2 text-xs text-muted">
		<input type="checkbox" {checked} onchange={(e) => onChange(e.currentTarget.checked)} />
		התלמיד שומע ולא רואה (הטקסט מופיע אחרי התשובה)
	</label>
	{#if checked}{@render children?.()}{/if}
</SettingsGroup>
