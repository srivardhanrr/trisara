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
            <img
                    src="{bannerImage}"
                    alt="Summer Sale Banner"
                    class="w-full h-64 object-cover sm:h-80 "
            />
            <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div class="text-center">
                    <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
                        {title}
                    </h2>
                    <p class="mt-3 max-w-md mx-auto text-xl text-white">
                        {description}
                    </p>
                    <div class="mt-8">
                        <Button variant="secondary" class="bg-white text-black hover:bg-gray-100">
                            View Now
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    {/if}

    <h1 class="text-3xl font-bold m-6 items-center justify-center text-center">{title}</h1>

    <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6">
        {#each products as product}
            <ProductCard product={product}/>
        {/each}
    </div>
</main>
