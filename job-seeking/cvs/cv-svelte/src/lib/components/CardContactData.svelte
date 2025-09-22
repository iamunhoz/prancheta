<script lang="ts">
	import { contactList } from '$lib/assets/contact-data';

	export let className: string | undefined = undefined;
</script>

<div class={`${className ?? ''} flex flex-col items-center justify-center gap-2 text-center`}>
	{#each contactList as { Icon, label, content }}
		<div class="flex flex-col items-center justify-center gap-2 text-center">
			<Icon />
			<p>{label}</p>
			<p>{content}</p>
		</div>
	{/each}
</div>
