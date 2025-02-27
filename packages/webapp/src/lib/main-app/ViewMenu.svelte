<script lang="ts">
	import { Checkbox, Dropdown, DropdownDivider, DropdownItem, NavLi } from 'flowbite-svelte';
	import { ChevronDownOutline } from 'flowbite-svelte-icons';

</script>

<NavLi class="cursor-pointer"
	>View<ChevronDownOutline class="text-primary-800 ms-2 inline h-6 w-6 dark:text-white" /></NavLi
>
<Dropdown class="z-20 w-44 space-y-3 p-3 text-sm">
	<li>
		<Checkbox checked disabled>Default</Checkbox>
	</li>
	<DropdownDivider />
	<DropdownItem>Apply changes</DropdownItem>
</Dropdown>
