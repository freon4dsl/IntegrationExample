<script lang="ts">
	import {
		Dropdown,
		DropdownItem,
		Heading,
		Listgroup,
		ListgroupItem
	} from 'flowbite-svelte';
	import { ChevronDownOutline, DotsHorizontalOutline } from 'flowbite-svelte-icons';
	import { langInfo } from '$lib/stores/LanguageInfo.svelte';
	let simpleList = ['Profile', 'Settings', 'Messages', 'Download'];

</script>

<Listgroup>
	{#each langInfo.unitTypes as unitType}
		<Heading tag="h5" class="pl-2">{unitType}</Heading>
		<ListgroupItem class="gap-2 text-base font-semibold">
			<Listgroup items={simpleList} let:item class="w-48">
				<div class="flex justify-between">
					{item}<DotsHorizontalOutline class="dots-menu1 inline dark:text-white" />
				</div>
				<Dropdown triggeredBy=".dots-menu1">
					<DropdownItem>Open</DropdownItem>
					<DropdownItem>Save</DropdownItem>
					<DropdownItem>Rename</DropdownItem>
					<DropdownItem>Delete</DropdownItem>
					<DropdownItem slot="footer">Export</DropdownItem>
				</Dropdown>
			</Listgroup>
		</ListgroupItem>
	{/each}
	<!-- Instead of DotsHorizontalOutline we could use ChevronDownOutline-->
</Listgroup>
