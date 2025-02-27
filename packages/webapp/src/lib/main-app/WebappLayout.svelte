<script lang="ts">
	import { FooterLink, FooterLinkGroup } from 'flowbite-svelte';
	import { Drawer, CloseButton } from 'flowbite-svelte';
	import { sineIn } from 'svelte/easing';
	import NavBar from '$lib/main-app/NavBar.svelte';
	import { drawerHidden } from '$lib/stores/WebappStores.svelte';
	import ModelInfo from '$lib/main-app/ModelInfo.svelte';
	import { Footer, FooterCopyright } from 'flowbite-svelte';

	let transitionParams = {
		x: 320,
		duration: 200,
		easing: sineIn
	};
</script>

<NavBar />

<div style="height:60px;" class="block md:hidden lg:hidden xl:hidden">
	<!--  This block is here to shift the content down on small media. This is done because the "sm:mt-12"
      marking down below does not function. -->
</div>

<div style="height: 1000px;"
	class="flex items-center justify-center bg-primary-50 dark:bg-gray-700 dark:text-white pb-16 sm:mb-12 sm:mt-12 md:mb-20 md:mt-20 lg:mb-20 lg:mt-20 xl:mb-20 xl:mt-20"
>
	<p>Editor comes here</p>
</div>

<Footer
	class="md: fixed bottom-0 start-0 z-20 w-full border-t border-gray-200 bg-white p-4 px-4 text-xs shadow md:flex md:items-center md:justify-between md:py-1 dark:border-gray-600 dark:bg-gray-800"
>
	<FooterCopyright
		href="/"
		by="Freon contributors"
		year={2025}
		class="inline-flex items-center text-xs"
	/>
	<FooterLinkGroup
		ulClass="flex flex-wrap items-center mt-3 text-xs text-gray-500 dark:text-gray-400 sm:mt-0"
	>
		<FooterLink href="https://freon4dsl.dev" class="inline-flex items-center"
			>freon4dsl.dev</FooterLink
		>
	</FooterLinkGroup>
</Footer>

<!-- Normally hidden elements-->

<Drawer
	placement="right"
	transitionType="fly"
	{transitionParams}
	bind:hidden={drawerHidden.value}
	id="sidebar1"
>
	<div class="flex items-center">
		<h5
			id="drawer-label"
			class="mb-4 inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400"
		>
			Model Info
		</h5>
		<CloseButton onclick={() => (drawerHidden.value = true)} class="mb-4 dark:text-white" />
	</div>
	<ModelInfo />
</Drawer>
