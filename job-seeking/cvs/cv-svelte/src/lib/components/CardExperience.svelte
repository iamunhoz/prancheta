<script lang="ts">
	import type { ExperienceData } from '$lib/types/index';

	export let data: ExperienceData;
	export let className: string | undefined = undefined;

	const { beginDate, endDate, company, position, description } = data;
</script>

<div class={`${className ?? ''} flex flex-col items-center justify-center gap-2 text-center`}>
	<h2>{position}</h2>
	<ol>
		{#each description as item}
			<li>{item}</li>
		{/each}
	</ol>
	<p>
		{beginDate} - {endDate}
	</p>
	<p>{company}</p>
</div>
