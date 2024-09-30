<script lang="ts">
	import ProductCard from '$lib/components/ProductCard.svelte';
	import CategoriesCarousel from './components/CategoriesCarousel.svelte';

	export let products;
	export let showBanner: boolean = false;
	export let title = 'All Products';
	export let bannerImage = '/images/our-story-1.png';
	export let description = 'Check out our latest products';
	export let categories;
</script>

<main class="container mx-auto px-4 py-8">
	{#if showBanner}
		<div class="flex flex-col items-center bg-orange-50 p-4 md:flex-row">
			<div class="mb-4 w-full md:mb-0 md:w-3/5">
				{#if bannerImage}
					<img
						src={bannerImage}
						alt="products"
						class="aspect-[3/2] h-[40vh] max-h-96 object-cover"
					/>
				{/if}
			</div>
			<div class="w-full p-2 md:w-3/5 md:p-4">
				<div class="text-center md:text-left">
					<h2 class="text-4xl font-extrabold tracking-tight text-orange-500 md:text-4xl">
						{title}
					</h2>
					<p class="text-md mt-4 text-black lg:text-lg">
						{description.length > 500 ? description.slice(0, 500) + '...' : description}
					</p>
				</div>
			</div>
		</div>
	{/if}

	<div class="my-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
		{#each products as product}
			<ProductCard {product} />
		{/each}
	</div>
	{#if categories}
		<div class="pb-10 pt-8 md:px-8">
			<CategoriesCarousel {categories} />
		</div>
	{/if}
</main>
