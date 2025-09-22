<script lang="ts">
	import { contactList } from '$lib/assets/contact-data';

	export let className: string | undefined = undefined;
</script>

<div class={`${className ?? ''} flex flex-col gap-2`}>
	{#each contactList as { Icon, content }}
		<div class="flex items-center gap-1 text-xs text-gray-800">
			<Icon size={12} />
			<p class="font-source-code">{content}</p>
		</div>
	{/each}
</div>
