<script lang="ts">
	import Aside from '$lib/components/Aside.svelte';
	import Header from '$lib/components/Header.svelte';
	import Main from '$lib/components/Main.svelte';
</script>

<div class="p-4 pl-24">
	<Header className=" w-full" />
	<div class="mt-3 flex gap-4">
		<Main className="w-full" />
		<Aside className="" />
	</div>
</div>
