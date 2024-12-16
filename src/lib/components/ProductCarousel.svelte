<script lang="ts">
    import * as Carousel from "$lib/components/ui/carousel";
    import * as Card from "$lib/components/ui/card";
    import ProductCard from "$lib/components/ProductCard.svelte";
    interface Props {
        products: any;
    }

    let { products }: Props = $props();
</script>

<section class="py-8">
    <div class="container mx-auto px-4">
        <div class="flex justify-between items-center mb-6">
            <h2 class="text-2xl font-bold text-orange-500">Hello</h2>
            <a href="/products" class="text-orange-500 hover:underline">View All</a>
        </div>

        <Carousel.Root opts={{ align: "start" }}>
            <Carousel.Content>
                {#each products as product}
                    <Carousel.Item class="basis-1/2 lg:basis-1/3 xl:basis-1/4">
                        <ProductCard product={product} />
                    </Carousel.Item>
                {/each}
            </Carousel.Content>
            <Carousel.Previous class="ml-16 "/>
            <Carousel.Next class="mr-16 "/>
        </Carousel.Root>
    </div>
</section>
