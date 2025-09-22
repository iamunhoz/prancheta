<script lang="ts">
	export let className: string | undefined = undefined;
</script>

<header
	class={`${className ?? ''} flex flex-col items-center justify-center gap-2 pt-1 text-center`}
>
	<h1 class="font-custom-sans text-2xl">IVÃ APOLONIO MUNHOZ</h1>
	<p class="font-source-code text-lg">Software Engineer</p>
	<p>Node.js, TypeScript, Svelte, React, Next.js, SQL, DevOps</p>
	<p>Brazil (GMT-3)</p>
</header>
