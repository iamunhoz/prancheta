<script lang="ts">
	import { uiLabels } from '$lib/assets/ui-labels';
	import { skillsList } from '$lib/assets/xp-list';
	import CardContactData from './CardContactData.svelte';
	import CardSkill from './CardSkill.svelte';
	import { language } from '$lib/state/i18n';
	import SectionTitle from './SectionTitle.svelte';

	export let className: string | undefined = undefined;
</script>

<aside class="{className ?? ''} flex flex-col gap-2">
	<SectionTitle>
		{uiLabels.contact[$language]}
	</SectionTitle>
	<CardContactData />

	<SectionTitle>
		{uiLabels.skills[$language]}
	</SectionTitle>
	{#each skillsList as skill}
		<CardSkill data={skill} />
	{/each}
</aside>
