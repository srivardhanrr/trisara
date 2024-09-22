<script lang="ts">
	import ProductCard from '$lib/components/ProductCard.svelte';

	export let products;
	export let showBanner = false;
	export let title = 'All Products';
	export let bannerImage = '/images/our-story-1.png';
	export let description = 'Check out our latest products';
</script>

<main class="container mx-auto px-4 py-8">
	{#if showBanner}
  <div class='flex flex-col md:flex-row items-center bg-orange-50 p-4'>
    <div class='w-full md:w-3/5 mb-4 md:mb-0'>
      {#if bannerImage}
        <img src={bannerImage} alt='products' class='h-[40vh] max-h-96 object-cover aspect-[3/2]' />
      {/if}
    </div>
    <div class='w-full md:w-3/5 p-2 md:p-4'>
      <div class='text-center md:text-left'>
        <h2 class='text-4xl font-extrabold tracking-tight text-orange-500 md:text-5xl'>{title}</h2>
        <p class='mt-4 lg:text-lg text-black'>          
			{description.length > 500 ? description.slice(0, 500) + '...' : description}
		</p>
      </div>
    </div>
  </div>
{/if}


	<div class="my-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
		{#each products as product}
		  <ProductCard {product} />
		{/each}
	  </div>
</main>
