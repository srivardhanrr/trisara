<script lang="ts">
	import ProductCard from '$lib/components/ProductCard.svelte';

	export let products;
	export let showBanner = false;
	export let title = 'All Products';
	export let description = 'All the Products that meet your daily needs';
	export let bannerImage = '/images/hero1.png';
</script>

<main class="container mx-auto px-4 py-8">
	{#if showBanner}
		<div class="relative">
			{#if bannerImage}
				<img src={bannerImage} alt="Summer Sale Banner" class="h-64 w-full object-cover sm:h-80" />
			{/if}
			<div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
				<div class="text-center">
					<h2 class="text-3xl font-extrabold tracking-tight text-white md:text-5xl">
						{title}
					</h2>
					<!-- <p class="mx-auto mt-3 max-w-md truncate text-sm text-white md:text-xl">
						{description}
					</p> -->
				</div>
			</div>
		</div>
	{/if}

	<!-- <h1 class="m-6 items-center justify-center text-center text-3xl font-bold text-orange-500">
		{title}
	</h1> -->

	<div class="grid grid-cols-2 gap-2 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
		{#each products as product}
            <ProductCard product={product} />
		{/each}
	</div>
</main>
