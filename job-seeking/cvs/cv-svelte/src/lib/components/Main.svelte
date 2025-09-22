<script lang="ts">
	import { uiLabels } from '$lib/assets/ui-labels';
	import { educationList, projectsList, xpList } from '$lib/assets/xp-list';
	import CardExperience from './CardExperience.svelte';
	import { language } from '$lib/state/i18n';
	import SectionTitle from './SectionTitle.svelte';

	export let className: string | undefined = undefined;
</script>

<main class="{className ?? ''} flex flex-col gap-2">
	<SectionTitle>
		{uiLabels.experience[$language]}
	</SectionTitle>
	{#each xpList as experience}
		<CardExperience data={experience} />
	{/each}

	<div class="h-2"></div>

	<SectionTitle>
		{uiLabels.projects[$language]}
	</SectionTitle>
	{#each projectsList as project}
		<CardExperience data={project} />
	{/each}

	<div class="h-2"></div>

	<SectionTitle>
		{uiLabels.education[$language]}
	</SectionTitle>
	{#each educationList as education}
		<CardExperience data={education} />
	{/each}
</main>
