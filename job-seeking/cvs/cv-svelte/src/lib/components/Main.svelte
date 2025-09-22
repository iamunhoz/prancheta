<script lang="ts">
	import { xpList } from '$lib/assets/xp-list';
	import CardExperience from './CardExperience.svelte';

	export let className: string | undefined = undefined;
</script>

<main class="{className ?? ''} flex flex-col items-center justify-center gap-2 text-center">
	{#each xpList as experience}
		<CardExperience data={experience} />
	{/each}
</main>
