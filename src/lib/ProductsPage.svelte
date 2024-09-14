<script lang="ts">
	import { Button } from '$lib/components/ui/button';
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
					<h2 class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
						{title}
					</h2>
					<p class="mx-auto mt-3 max-w-md truncate text-sm text-white md:text-xl">
						{description}
					</p>
					<!--                    <div class="mt-8">-->
					<!--                        <Button variant="secondary" class="bg-white text-black hover:bg-gray-100">-->
					<!--                            View Now-->
					<!--                        </Button>-->
					<!--                    </div>-->
				</div>
			</div>
		</div>
	{/if}

	<h1 class="m-6 items-center justify-center text-center text-3xl font-bold text-orange-500">
		{title}
	</h1>

	<div class="grid grid-cols-2 gap-2 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
		{#each products as product}
			<!--            <ProductCard product={product}/>-->
			<div
				class="relative my-1 w-full max-w-72 overflow-hidden rounded-lg shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-xl"
			>
				<a href="/products/{product.slug}">
					<div class="relative overflow-hidden">
						{#if product.images[0].image}
							<img
								loading="lazy"
								src={product.images[0].image}
								alt="Product"
								class="aspect-square h-full w-full transform object-cover transition-transform duration-500 ease-in-out hover:scale-110"
							/>
						{:else}
							<img
								loading="lazy"
								src="https://placehold.co/500x500"
								alt="Product"
								class="aspect-square h-full w-full transform object-cover transition-transform duration-500 ease-in-out hover:scale-110"
							/>
						{/if}
						{#if product.images[1].image}
							<img
								loading="lazy"
								src={product.images[1].image}
								alt="Product Hover"
								class="absolute inset-0 aspect-square h-full w-full object-cover opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100"
							/>
						{:else}
							<img
								loading="lazy"
								src="https://placehold.co/500x500"
								alt="Product"
								class="aspect-square h-full w-full transform object-cover transition-transform duration-500 ease-in-out hover:scale-110"
							/>
						{/if}
					</div>
					<div class="p-2">
						{#if product.name}
							<h3 class="truncate text-xs font-semibold md:text-sm">{product.name}</h3>
						{/if}
						{#if product.material}
							<p class="truncate text-sm text-gray-600">{product.material}</p>
						{/if}
					</div>
				</a>
			</div>
		{/each}
	</div>
</main>
