<script lang="ts">
    import * as Card from "$lib/components/ui/card/index.js";
    import * as Carousel from "$lib/components/ui/carousel/index.js";

    import Autoplay from "embla-carousel-autoplay";


    const categories = [
        {
            name: "Chairs",
            image: "https://new-ella-demo-11.myshopify.com/cdn/shop/files/Home-Furniture-Brand-2_220x.jpg?v=1658374702"
        },
        {
            name: "Bedrooms",
            image: "https://trisara.in/cdn/shop/files/lossy-page1-1200px-thumbnail_tif.jpg?v=1722882267"
        },
        {
            name: "TV Cabinet",
            image: "https://trisara.in/cdn/shop/files/lossy-page1-1200px-thumbnail_tif.jpg?v=1722882267"
        },
        {name: "Chairs", image: "https://trisara.in/cdn/shop/files/lossy-page1-1200px-thumbnail_tif.jpg?v=1722882267"},
        {
            name: "Sectional Sofas",
            image: "https://trisara.in/cdn/shop/files/lossy-page1-1200px-thumbnail_tif.jpg?v=1722882267"
        },
        {
            name: "Sectional Sofas",
            image: "https://trisara.in/cdn/shop/files/lossy-page1-1200px-thumbnail_tif.jpg?v=1722882267"
        },
        {
            name: "Sectional Sofas",
            image: "https://trisara.in/cdn/shop/files/lossy-page1-1200px-thumbnail_tif.jpg?v=1722882267"
        },
        {
            name: "Sectional Sofas",
            image: "https://trisara.in/cdn/shop/files/lossy-page1-1200px-thumbnail_tif.jpg?v=1722882267"
        },
    ];

    const plugin = Autoplay({delay: 2000, stopOnInteraction: true});
</script>

<section class="md:px-8 mt-8">
    <div class="container mx-auto px-4">
        <h2 class="text-xl md:text-2xl font-bold text-orange-500 mb-2">Popular Category</h2>
        <p class="text-gray-600 text-sm mb-4">Search By Category of the products listed.</p>
        <Carousel.Root
                opts={{align: "start"}}
                plugins={[plugin]}
                class="w-full"
                on:mousenter={plugin.stop}
                on:mouseleave={plugin.reset}>
            <Carousel.Content>
                {#each categories as category}
                    <Carousel.Item class="basis-1/2 md:basis-1/10 lg:basis-1/6">
<!--                        <div class="p-1">-->
<!--                            <Card.Root>-->
<!--                                <Card.Content class="flex aspect-square items-center justify-center p-6">-->
<!--                                    <img src="{category.src}" alt="{category.name}"/>-->
<!--                                    <span class="text-xl md:text-2xl font-semibold">{category.name}</span>-->
<!--                                </Card.Content>-->
<!--                            </Card.Root>-->
<!--                        </div>-->
                        <div class="relative w-full overflow-hidden">
                            <img src={category.image} alt={category.name} class="w-full h-full object-cover ease-in"/>
                            <div class="category-title">{category.name}</div>
                        </div>
                    </Carousel.Item>
                {/each}
            </Carousel.Content>

            <Carousel.Previous class="ml-12 overflow-hidden"/>
            <Carousel.Next class="mr-12 overflow-hidden"/>
        </Carousel.Root>
    </div>
</section>
