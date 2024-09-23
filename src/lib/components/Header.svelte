<script lang="ts">
	import { onMount } from 'svelte';
	import CircleUser from 'lucide-svelte/icons/circle-user';
	import { Share2 } from 'lucide-svelte';
	import Menu from 'lucide-svelte/icons/menu';
	import Search from 'lucide-svelte/icons/search';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import * as Sheet from '$lib/components/ui/sheet';
	import { goto } from '$app/navigation';

	import { navigating } from '$app/stores';

	let isOpen = false;

	$: if ($navigating) {
		isOpen = false;
	}

	export let categories;
	export let cookbookCategories;

	let productsOpen = false;
	let cookbooksOpen = false;
	let searchTerm = '';

	function openProducts() {
		productsOpen = true;
	}

	function closeProducts() {
		productsOpen = false;
	}

	function openCookbooks() {
		cookbooksOpen = true;
	}

	function closeCookbooks() {
		cookbooksOpen = false;
	}

	function handleSearch(event: Event) {
		event.preventDefault();
		if (searchTerm.trim()) {
			goto(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
		}
	}
</script>

<header class="md:h-22 sticky top-0 z-50 h-20 border-b bg-background md:px-8 lg:px-12">
	<div class="container mx-auto flex h-full items-center justify-between">
		<nav class="hidden flex-1 items-center space-x-6 lg:flex">
			<a href="/" class="text-black transition-colors hover:text-primary">Home</a>
			<a href="/our-story" class="text-black transition-colors hover:text-primary">Our Story</a>

			<div class="dropdown" on:mouseenter={openProducts} on:mouseleave={closeProducts}>
				<a href="/products">
					<button class="dropdown-trigger">All Products</button>
				</a>
				{#if productsOpen}
					<div class="dropdown-content">
						<div class="dropdown-group">
							<div class="dropdown-label">Categories</div>
							<hr class="dropdown-separator" />
							{#each categories as category}
								<a href="/categories/{category.slug}" class="dropdown-item">{category.name}</a>
							{/each}
							<a href="/products" class="dropdown-item view-all">View All</a>
						</div>
					</div>
				{/if}
			</div>

			<div class="dropdown" on:mouseenter={openCookbooks} on:mouseleave={closeCookbooks}>
				<a href="/cookbooks">
					<button class="dropdown-trigger text-black">Cookbooks</button>
				</a>
				{#if cookbooksOpen}
					<div class="dropdown-content">
						<div class="dropdown-group">
							<div class="dropdown-label">Cookbook Categories</div>
							<hr class="dropdown-separator" />
							{#each cookbookCategories as cookbookCategory}
								<div class="dropdown-sub">
									<a href="/cookbooks/{cookbookCategory.slug}">
										<button class="dropdown-sub-trigger">{cookbookCategory.name}</button>
									</a>
									<div class="dropdown-sub-content">
										{#each cookbookCategory.cookbooks as cookbook}
											<a
												href="/cookbooks/{cookbookCategory.slug}/{cookbook.slug}"
												class="dropdown-item truncate">{cookbook.title}</a
											>
										{/each}
									</div>
								</div>
							{/each}
							<a href="/cookbooks" class="dropdown-item view-all">View All</a>
						</div>
					</div>
				{/if}
			</div>

			<a href="/contact" class="text-black transition-colors hover:text-primary">Contact Us</a>
		</nav>

		<Sheet.Root bind:open={isOpen}>
			<Sheet.Trigger asChild let:builder>
				<Button variant="ghost" size="icon" class="lg:hidden" builders={[builder]}>
					<Menu class="h-6 w-6" />
					<span class="sr-only">Toggle navigation menu</span>
				</Button>
			</Sheet.Trigger>
			<Sheet.Content side="left">
				<nav class="grid gap-6 pt-16 text-lg font-medium">
					<a href="/our-story" class="hover:text-primary">Our Story</a>
					<a href="/products" class="hover:text-primary">All Products</a>
					<a href="/cookbooks" class="hover:text-primary">Cookbooks</a>
					<a href="/contact" class="hover:text-primary">Contact Us</a>
				</nav>
			</Sheet.Content>
		</Sheet.Root>

		<div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
			<a href="/" class="flex items-center justify-center">
				<img src="/images/trisara-logo.png" alt="Trisara" class="h-16 w-16 rounded-full" />
				<span class="sr-only">Trisara</span>
			</a>
		</div>

		<div class="flex flex-1 items-center justify-end space-x-4">
			<form class="hidden items-center gap-4 md:flex" on:submit={handleSearch}>
				<div class="relative">
					<Search
						class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground"
					/>
					<Input
						type="search"
						placeholder="Search products..."
						class="w-[200px] pl-10 lg:w-[250px]"
						bind:value={searchTerm}
					/>
				</div>
				<Button
					variant="outline"
					type="submit"
					size="icon"
					class="hidden justify-center rounded-full bg-orange-500 md:flex"
				>
					<Search class="h-5 w-5 text-white" />
					<span class="sr-only">Search</span>
				</Button>
			</form>
			<a href="/search">
				<Button variant="ghost" size="icon" class="rounded-full md:hidden">
					<Search class="h-6 w-6" />
					<span class="sr-only">Search</span>
				</Button>
			</a>
		</div>
	</div>
</header>

<style>
	.dropdown {
		position: relative;
		/* display: inline-block; */
	}

	.dropdown-trigger {
		background: none;
		border: none;
		cursor: pointer;
		font-size: 1rem;
		/* padding: 0.5rem 1rem; */
		transition: color 0.3s ease;
	}

	.dropdown-trigger:hover {
		color: #ff6b35; /* Adjust this color to match your primary color */
	}

	.dropdown-content {
		position: absolute;
		top: 100%;
		left: 0;
		background-color: #ffffff;
		min-width: 220px;
		box-shadow:
			0 10px 15px -3px rgba(0, 0, 0, 0.1),
			0 4px 6px -2px rgba(0, 0, 0, 0.05);
		border-radius: 0.5rem;
		padding: 1rem;
		z-index: 1000;
		opacity: 0;
		transform: translateY(-10px);
		transition:
			opacity 0.3s ease,
			transform 0.3s ease;
	}

	.dropdown:hover .dropdown-content {
		opacity: 1;
		transform: translateY(0);
	}

	.dropdown-group {
		display: flex;
		flex-direction: column;
	}

	.dropdown-label {
		font-weight: 600;
		color: #ff6b35; /* Adjust this color to match your primary color */
		margin-bottom: 0.5rem;
	}

	.dropdown-separator {
		border: none;
		border-top: 1px solid #e2e8f0;
		margin: 0.5rem 0;
	}

	.dropdown-item {
		color: #4a5568;
		padding: 0.5rem 0;
		text-decoration: none;
		display: block;
		transition:
			color 0.2s ease,
			padding-left 0.2s ease;
	}

	.dropdown-item:hover {
		color: #ff6b35; /* Adjust this color to match your primary color */
		padding-left: 0.5rem;
	}

	.dropdown-item.view-all {
		font-weight: 600;
		margin-top: 0.5rem;
	}

	.dropdown-sub {
		position: relative;
	}

	.dropdown-sub-trigger {
		width: 100%;
		text-align: left;
		background: none;
		border: none;
		cursor: pointer;
		padding: 0.5rem 0;
		color: #4a5568;
		transition:
			color 0.2s ease,
			padding-left 0.2s ease;
	}

	.dropdown-sub-trigger:hover {
		color: #ff6b35; /* Adjust this color to match your primary color */
		padding-left: 0.5rem;
	}

	.dropdown-sub-content {
		display: none;
		position: absolute;
		left: 100%;
		top: 0;
		background-color: #ffffff;
		min-width: 200px;
		box-shadow:
			0 10px 15px -3px rgba(0, 0, 0, 0.1),
			0 4px 6px -2px rgba(0, 0, 0, 0.05);
		border-radius: 0.5rem;
		padding: 1rem;
		z-index: 1000;
	}

	.dropdown-sub:hover .dropdown-sub-content {
		display: block;
	}
</style>
