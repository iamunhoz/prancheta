<script lang="ts">
	import type { ExperienceData } from '$lib/types/index';
	import { language } from '$lib/state/i18n';
	import { MapPin } from 'lucide-svelte';
	import { uiLabels } from '$lib/assets/ui-labels';

	export let data: ExperienceData;
	export let className: string | undefined = undefined;

	const { beginDate, endDate, company, position, description, location } = data;
</script>

<div
	class={`${className ?? ''} relative flex flex-col before:absolute before:top-1/2 before:-left-4 before:mt-1 before:h-[93%] before:w-[1px] before:-translate-y-1/2 before:transform before:bg-gray-300 before:content-['']`}
>
	<h2 class="font-medium">{position[$language]}</h2>

	<p class="font-custom-sans mt-[-4px] text-xs text-gray-900">{company[$language]}</p>

	<ul class="list-inside list-disc">
		{#each description as item}
			<li class="text-[10px] text-gray-700">{item[$language]}</li>
		{/each}
	</ul>

	<div class="absolute top-0 -left-16 mt-1 flex flex-col items-center text-[10px] text-gray-500">
		<p>{beginDate}</p>
		{#if endDate}
			<p>|</p>
			<p>{endDate[$language]}</p>
		{/if}
	</div>
	{#if location[$language].length}
		<div class="absolute top-[6px] right-0 flex items-center">
			<MapPin size={12} />
			<p class="font-source-code text-[10px] text-gray-500">{location[$language]}</p>
		</div>
	{/if}
</div>
