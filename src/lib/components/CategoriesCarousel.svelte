<script lang="ts">
    import * as Carousel from "$lib/components/ui/carousel/index.js";
    import Autoplay from "embla-carousel-autoplay";
    interface Props {
        categories: any;
    }

    let { categories }: Props = $props();
    const plugin = Autoplay({delay: 2000, stopOnInteraction: true});
</script>

<section class="mt-6 md:mt-12">
    <div class="container mx-auto px-4">
        <h2 class="text-xl pb-5 md:text-2xl font-bold text-orange-500 mb-2">Shop by Category</h2>
<!--        <p class="text-gray-600 text-sm mb-4">Search By Category of the products listed.</p>-->
        <Carousel.Root
                opts={{
                    align: "center",
                    containScroll: "trimSnaps",
                    dragFree: true
                }}
                plugins={[plugin]}
                class="w-full"
                on:mousenter={plugin.stop}
                on:mouseleave={plugin.reset}>
            <Carousel.Content class="flex md:justify-center">
                {#each categories as category}
                    <Carousel.Item class="lg:basis-1/4 md:basis-1/4 sm:basis-1/3 basis-1/2 flex-grow-0 flex-shrink-0">
                        <a href="/categories/{category.slug}">
                            <div class="relative w-full overflow-hidden">
                                <img class="aspect-square top-0 left-0 w-full h-full object-cover" src="{category.image}"
                                     alt="Kitchen utilities">
                                <div class="absolute inset-0 bg-orange-100 bg-opacity-40 flex items-center justify-center">
                                    <h2 class="text-white text-md md:text-lg lg:text-xl">{category.name}</h2>
                                </div>
                            </div>
                        </a>
                    </Carousel.Item>
                {/each}
            </Carousel.Content>
            <Carousel.Previous class="ml-12 overflow-hidden"/>
            <Carousel.Next class="mr-12 overflow-hidden"/>
        </Carousel.Root>
    </div>
</section>