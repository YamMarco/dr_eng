<!-- A heartbeat line that keeps running: "the body getting ready". Two copies of the
     same beat pattern slide one width and loop (site.css: .pulse-track). -->
<div dir="ltr" class="pulse-mask h-16 w-full overflow-hidden" aria-hidden="true">
	<svg class="pulse-track h-full w-[200%]" viewBox="0 0 800 64" preserveAspectRatio="none">
		{#each [0, 400] as x (x)}
			<path
				transform="translate({x} 0)"
				d="M0 32H60l8-8 8 8h20l8-26 10 50 8-24h40l6-6 6 6h40l8-8 8 8h20l8-26 10 50 8-24h40l6-6 6 6h72"
				fill="none"
				stroke="currentColor"
				stroke-width="3"
				stroke-linecap="round"
				stroke-linejoin="round"
				vector-effect="non-scaling-stroke"
			/>
		{/each}
	</svg>
</div>
