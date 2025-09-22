<script lang="ts">
	export let className: string | undefined = undefined;
</script>

<header class={`${className ?? ''} flex flex-col items-start justify-center pt-1`}>
	<h1 class="font-custom-sans text-2xl">IVÃ APOLONIO MUNHOZ</h1>
	<p class="font-source-code mt-[-3px] text-sm opacity-70">FULL STACK DEVELOPER - Brazil (GMT-3)</p>
	<p class="font-source-code mt-[-3px] text-xs opacity-70">
		React, Next, SQL, Node, TypeScript, Svelte, DevOps
	</p>
</header>
