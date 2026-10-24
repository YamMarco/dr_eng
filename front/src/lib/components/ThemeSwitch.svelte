<script lang="ts">
	// Animated sun/moon switch, horizontal or vertical. Sized in em, so it scales
	// with the surrounding text; the label carries the 44px tap target.
	let {
		dark,
		label,
		vertical = false,
		onchange
	}: { dark: boolean; label: string; vertical?: boolean; onchange: (dark: boolean) => void } =
		$props();
</script>

<label class="switch" class:switch--v={vertical}>
	<input
		class="switch__input"
		type="checkbox"
		role="switch"
		checked={dark}
		onchange={(e) => onchange(e.currentTarget.checked)}
		// Drop focus after a tap so no ring lingers; keyboard users re-focus with Tab.
		onpointerup={(e) => e.currentTarget.blur()}
	/>
	<span class="switch__icon" aria-hidden="true">
		{#each Array.from({ length: 11 }, (_, i) => i + 1) as n (n)}
			<span class="switch__icon-part switch__icon-part--{n}"></span>
		{/each}
	</span>
	<span class="switch__sr">{label}</span>
</label>

<style>
	.switch {
		--on: hsl(223, 10%, 10%);
		--off: hsl(223, 10%, 90%);
		--dur: 0.4s;
		--ease: cubic-bezier(0.65, 0, 0.35, 1);
		display: inline-flex;
		align-items: center;
		min-height: 2.75rem;
		position: relative;
		-webkit-tap-highlight-color: transparent;
	}
	.switch__input {
		appearance: none;
		position: relative;
		display: block;
		width: 3em;
		height: 1.5em;
		border-radius: 0.75em;
		background-color: var(--on);
		outline: none;
		cursor: pointer;
		transition: background-color var(--dur) var(--ease);
	}
	.switch__input::before {
		content: '';
		position: absolute;
		top: 0.125em;
		left: 0.125em;
		width: 1.25em;
		height: 1.25em;
		border-radius: 50%;
		background-color: var(--on);
		transition:
			background-color var(--dur) var(--ease),
			transform var(--dur) var(--ease);
	}
	.switch__input:focus-visible {
		outline: 2px solid var(--color-brand);
		outline-offset: 2px;
	}
	.switch__icon,
	.switch__icon-part {
		display: block;
		position: absolute;
		top: 0;
		left: 0;
	}
	.switch__icon {
		top: 50%;
		left: 0.125em;
		width: 1.25em;
		height: 1.25em;
		margin-top: -0.625em;
		border-radius: 50%;
		background-color: var(--off);
		overflow: hidden;
		pointer-events: none;
		transition: transform var(--dur) var(--ease);
	}
	.switch__icon-part {
		transition:
			box-shadow var(--dur) var(--ease),
			transform var(--dur) var(--ease);
	}
	.switch__icon-part--1,
	.switch__icon-part--2,
	.switch__icon-part--3 {
		border-radius: 50%;
	}
	.switch__icon-part--1 {
		background-color: var(--off);
		top: calc(50% - 0.375em);
		left: calc(50% - 0.375em);
		width: 0.75em;
		height: 0.75em;
	}
	.switch__icon-part--2 {
		background-color: var(--on);
		top: calc(50% - 0.4375em);
		left: calc(50% - 0.0625em);
		width: 0.5em;
		height: 0.5em;
		transform: translate(-0.1875em, 0.1875em) scale(0.2);
	}
	.switch__icon-part--3 {
		box-shadow: 0 0 0 0.625em var(--on) inset;
		width: 1.25em;
		height: 1.25em;
		transform: scale(0.25);
	}
	.switch__icon-part--3 ~ .switch__icon-part {
		background-color: var(--on);
		border-radius: 0.0625em;
		top: 50%;
		left: 50%;
		width: 0.125em;
		height: 0.1875em;
		transform-origin: 50% 0;
	}
	/* Sun rays: parts 4-11, 45deg apart. */
	.switch__icon-part--4 {
		transform: translateX(-50%) rotate(0deg) translateY(0.25em);
	}
	.switch__icon-part--5 {
		transform: translateX(-50%) rotate(45deg) translateY(0.25em);
	}
	.switch__icon-part--6 {
		transform: translateX(-50%) rotate(90deg) translateY(0.25em);
	}
	.switch__icon-part--7 {
		transform: translateX(-50%) rotate(135deg) translateY(0.25em);
	}
	.switch__icon-part--8 {
		transform: translateX(-50%) rotate(180deg) translateY(0.25em);
	}
	.switch__icon-part--9 {
		transform: translateX(-50%) rotate(225deg) translateY(0.25em);
	}
	.switch__icon-part--10 {
		transform: translateX(-50%) rotate(270deg) translateY(0.25em);
	}
	.switch__icon-part--11 {
		transform: translateX(-50%) rotate(315deg) translateY(0.25em);
	}
	.switch__sr {
		position: absolute;
		width: 1px;
		height: 1px;
		overflow: hidden;
	}

	/* Vertical: the knob slides down instead of across. */
	.switch--v .switch__input {
		width: 1.5em;
		height: 3em;
	}
	.switch--v .switch__icon {
		top: 0.125em;
		left: 50%;
		margin-top: 0;
		margin-left: -0.625em;
	}

	/* Dark (checked): moon, track turns light. */
	.switch__input:checked {
		background-color: var(--off);
	}
	.switch__input:checked::before,
	.switch__input:checked ~ .switch__icon {
		transform: translateX(1.5em);
	}
	.switch--v .switch__input:checked::before,
	.switch--v .switch__input:checked ~ .switch__icon {
		transform: translateY(1.5em);
	}
	.switch__input:checked ~ .switch__icon .switch__icon-part--2 {
		transform: translate(0, 0) scale(1);
	}
	.switch__input:checked ~ .switch__icon .switch__icon-part--3 {
		box-shadow: 0 0 0 0.25em var(--on) inset;
		transform: scale(1);
	}
	.switch__input:checked ~ .switch__icon .switch__icon-part--4 {
		transform: translateX(-50%) rotate(0deg) translateY(0.625em) scale(0);
	}
	.switch__input:checked ~ .switch__icon .switch__icon-part--5 {
		transform: translateX(-50%) rotate(45deg) translateY(0.625em) scale(0);
	}
	.switch__input:checked ~ .switch__icon .switch__icon-part--6 {
		transform: translateX(-50%) rotate(90deg) translateY(0.625em) scale(0);
	}
	.switch__input:checked ~ .switch__icon .switch__icon-part--7 {
		transform: translateX(-50%) rotate(135deg) translateY(0.625em) scale(0);
	}
	.switch__input:checked ~ .switch__icon .switch__icon-part--8 {
		transform: translateX(-50%) rotate(180deg) translateY(0.625em) scale(0);
	}
	.switch__input:checked ~ .switch__icon .switch__icon-part--9 {
		transform: translateX(-50%) rotate(225deg) translateY(0.625em) scale(0);
	}
	.switch__input:checked ~ .switch__icon .switch__icon-part--10 {
		transform: translateX(-50%) rotate(270deg) translateY(0.625em) scale(0);
	}
	.switch__input:checked ~ .switch__icon .switch__icon-part--11 {
		transform: translateX(-50%) rotate(315deg) translateY(0.625em) scale(0);
	}
</style>
