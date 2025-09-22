<script lang="ts">
	import type { SkillData } from '$lib/types/index';

	export let data: SkillData;
	export let className: string | undefined = undefined;

	const { name, level } = data;
</script>

<div class={`${className ?? ''} flex flex-col items-center justify-center gap-2 text-center`}>
	<h2>{name}</h2>
	<p>{level}</p>
</div>
