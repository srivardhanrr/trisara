<script lang="ts">
    import * as Card from "$lib/components/ui/card/index.js";
    import * as Carousel from "$lib/components/ui/carousel/index.js";

    import Autoplay from "embla-carousel-autoplay";


    const categories = [
        {name: "Chairs", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/1280px-Coca-Cola_logo.svg.png"},
        {name: "Bedrooms", image: "https://trisara.in/cdn/shop/files/lossy-page1-1200px-thumbnail_tif.jpg?v=1722882267"},
        {name: "TV Cabinet", image: "https://trisara.in/cdn/shop/files/lossy-page1-1200px-thumbnail_tif.jpg?v=1722882267"},
        {name: "Chairs", image: "https://trisara.in/cdn/shop/files/lossy-page1-1200px-thumbnail_tif.jpg?v=1722882267"},
        {name: "Sectional Sofas", image: "https://trisara.in/cdn/shop/files/lossy-page1-1200px-thumbnail_tif.jpg?v=1722882267"},
        {name: "Sectional Sofas", image: "https://trisara.in/cdn/shop/files/lossy-page1-1200px-thumbnail_tif.jpg?v=1722882267"},
        {name: "Sectional Sofas", image: "https://trisara.in/cdn/shop/files/lossy-page1-1200px-thumbnail_tif.jpg?v=1722882267"},
        {name: "Sectional Sofas", image: "https://trisara.in/cdn/shop/files/lossy-page1-1200px-thumbnail_tif.jpg?v=1722882267"},
    ];

    const plugin = Autoplay({delay: 2000, stopOnInteraction: true});
</script>

<section class="px-8">
    <div class="container mx-auto px-4">
        <h2 class="text-2xl font-bold text-orange-500 mb-2">Popular Category</h2>
        <p class="text-gray-600 mb-4">Search By Category of the products listed.</p>
        <Carousel.Root
                opts={{
    align: "start"
  }}
                plugins={[plugin]}
                class="w-full"
                on:mousenter={plugin.stop}
                on:mouseleave={plugin.reset}
        >
            <Carousel.Content>
                {#each categories as category}
                    <Carousel.Item class="basis-1/2 md:basis-1/10 lg:basis-1/6">
                        <div class="p-1">
                            <Card.Root>
                                <Card.Content
                                        class="flex aspect-square items-center justify-center p-6"
                                >
                                    <span class="text-xl md:text-2xl font-semibold">{category.name}</span>
                                </Card.Content>
                            </Card.Root>
                        </div>
                    </Carousel.Item>
                {/each}
                <!--{#each Array(20) as _, i (i)}-->
                <!--    <Carousel.Item class="basis-1/2 md:basis-1/10 lg:basis-1/6">-->
                <!--        <div class="p-1">-->
                <!--            <Card.Root>-->
                <!--                <Card.Content-->
                <!--                        class="flex aspect-square items-center justify-center p-6"-->
                <!--                >-->
                <!--                    <span class="text-3xl font-semibold">{i + 1}</span>-->
                <!--                </Card.Content>-->
                <!--            </Card.Root>-->
                <!--        </div>-->
                <!--    </Carousel.Item>-->
                <!--{/each}-->
            </Carousel.Content>

            <Carousel.Previous/>
            <Carousel.Next/>
        </Carousel.Root>
    </div>
</section>
