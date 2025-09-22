<script lang="ts">
	import { skillsList } from '$lib/assets/xp-list';
	import CardContactData from './CardContactData.svelte';
	import CardSkill from './CardSkill.svelte';

	export let className: string | undefined = undefined;
</script>

<aside class="{className ?? ''} flex flex-col items-center justify-center gap-2 text-center">
	<h2>Contact</h2>
	<CardContactData />
	<h2>Skills</h2>
	{#each skillsList as skill}
		<CardSkill data={skill} />
	{/each}
</aside>
