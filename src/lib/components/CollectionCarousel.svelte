<script lang="ts">
    import * as Carousel from "$lib/components/ui/carousel";
    import * as Card from "$lib/components/ui/card";
    import ProductCard from "$lib/components/ProductCard.svelte";
    export let collection;
</script>

{#if (collection)}
 <section class="py-8 md:p-8 bg-opacity-15" style="background-image: url('/images/background-2.png'); background-size: cover; background-position: center;">
    <div class="container mx-auto px-4">
        <div class="flex justify-between items-center mb-6">
            <h2 class="text-lg sm:text-2xl font-bold text-orange-500">{collection.name}</h2>
            <a href="/collections/{collection.slug}" class="text-sm text-orange-500 hover:underline">View All</a>
        </div>

        <Carousel.Root opts={{ align: "start" }}>
            <Carousel.Content>
                {#each collection.products as product}
                    <Carousel.Item class="basis-1/2 md:basis-1/3 lg:basis-1/4">
                        <ProductCard product={product} />
                    </Carousel.Item>
                {/each}
            </Carousel.Content>
            <Carousel.Previous class="ml-16 "/>
            <Carousel.Next class="mr-16 "/>
        </Carousel.Root>
    </div>
</section>
{/if}
