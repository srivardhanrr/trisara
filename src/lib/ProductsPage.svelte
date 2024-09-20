<script lang="ts">
	import ProductCard from '$lib/components/ProductCard.svelte';

	export let products;
	export let showBanner = false;
	export let title = 'All Products';
	export let bannerImage = '/images/hero1.png';
</script>

<main class="container mx-auto px-4 py-8">
	{#if showBanner}
		<div class="relative">
			{#if bannerImage}
				<img src={bannerImage} alt="products" class="h-64 w-full object-cover sm:h-80" />
			{/if}
			<div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
				<div class="text-center">
					<h2 class="text-3xl font-extrabold tracking-tight text-white md:text-5xl">
						{title}
					</h2>
				</div>
			</div>
		</div>
	{/if}

	<!-- <h1 class="m-6 items-center justify-center text-center text-3xl font-bold text-orange-500">
		{title}
	</h1> -->

	<div class="my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
		{#each products as product}
		  <ProductCard {product} />
		{/each}
	  </div>
</main>
