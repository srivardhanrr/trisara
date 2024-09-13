<script lang="ts">
    import {Button} from "$lib/components/ui/button";
    import ProductCard from "$lib/components/ProductCard.svelte";

    export let products;
    export let showBanner = false;
    export let title = "All Products";
    export let description = "All the Products that meet your daily needs";
    export let bannerImage = "/images/hero1.png";
</script>

<main class="container mx-auto px-4 py-8">
    {#if (showBanner)}
        <div class="relative">
            {#if bannerImage}
            <img
                    src="{bannerImage}"
                    alt="Summer Sale Banner"
                    class="w-full h-64 object-cover sm:h-80 "
                />
            {/if}
            <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div class="text-center">
                    <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
                        {title}
                    </h2>
                    <p class="mt-3 max-w-md mx-auto text-sm md:text-xl text-white truncate">
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

    <h1 class="text-3xl font-bold m-6 text-orange-500 items-center justify-center text-center">{title}</h1>

    <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6">
        {#each products as product}
            <!--            <ProductCard product={product}/>-->
            <div class="relative w-full max-w-72 overflow-hidden my-1 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <a href="/products/{product.slug}">
                    <div class="relative overflow-hidden">
                        {#if product.images[0].image}
                        <img loading="lazy" src="{product.images[0].image}" alt="Product"
                             class="aspect-square w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"/>
                        {:else}
                        <img loading="lazy" src="https://placehold.co/500x500" alt="Product"
                             class="aspect-square w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"/>
                        {/if}
                        {#if product.images[1].image}
                        <img loading="lazy" src="{product.images[1].image}" alt="Product Hover"
                             class="aspect-square absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100"/>
                        {/if}
                    </div>
                    <div class="p-2">
                        <h3 class="text-xs md:text-sm font-semibold truncate  ">{product.name}</h3>
                        <p class="text-sm text-gray-600 truncate">{product.material}</p>
                    </div>
                </a>
            </div>
        {/each}
    </div>
</main>
