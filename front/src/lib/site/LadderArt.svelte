<!-- The skill ladder: a dot hops up the steps (toward the start side, RTL), lighting
     each node; the top one is gold. Decorative; motion in site.css (.ladder-*). -->
<svg viewBox="0 0 200 124" class="h-auto w-full max-w-52 sm:max-w-72" aria-hidden="true">
	<path
		class="ladder-steps"
		d="M196 116H150V91H110V66H70V41H30V16H4"
		fill="none"
		pathLength="1"
		stroke-width="4"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
	{#each [0, 1, 2, 3] as i (i)}
		<circle class="ladder-node ladder-node-{i}" cx={170 - i * 40} cy={116 - i * 25} r="6" />
	{/each}
	<circle class="ladder-goal" cx="17" cy="16" r="8" />
	<g class="ladder-ball">
		<circle cx="170" cy="103" r="6" />
	</g>
</svg>
