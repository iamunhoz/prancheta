<script lang="ts">
	import Aside from '$lib/components/Aside.svelte';
	import Header from '$lib/components/Header.svelte';
	import Main from '$lib/components/Main.svelte';
</script>

<div class="h-screen w-screen">
	<Header className=" w-full" />
	<div class="flex gap-2">
		<Main className="h-[80vh] w-full hidden" />
		<Aside className="hidden" />
	</div>
</div>
