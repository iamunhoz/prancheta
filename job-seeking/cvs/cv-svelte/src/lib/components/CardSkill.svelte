<script lang="ts">
	import type { SkillData } from '$lib/types/index';
	import { language } from '$lib/state/i18n';

	export let data: SkillData;
	export let className: string | undefined = undefined;

	const { name, level } = data;
</script>

<div class={`${className ?? ''} font-source-code flex justify-between gap-2 text-[10px]`}>
	<h3>{name}</h3>
	<p>{level[$language]}</p>
</div>
