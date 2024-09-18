<script lang="ts">
    import * as Carousel from "$lib/components/ui/carousel/index.js";
    import Autoplay from "embla-carousel-autoplay";
    export let categories;
    const plugin = Autoplay({delay: 2000, stopOnInteraction: true});
</script>

<section class="mt-12">
    <div class="container mx-auto px-4">
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
            <Carousel.Content class="flex justify-center">
                {#each categories as category}
                    <Carousel.Item class="lg:basis-1/5 md:basis-1/4 sm:basis-1/3 basis-1/2 flex-grow-0 flex-shrink-0">
                        <a href="/categories/{category.slug}">
                            <div class="relative w-full overflow-hidden">
                                <img class="aspect-square top-0 left-0 w-full h-full object-cover" src="{category.image}"
                                     alt="Kitchen utilities">
                                <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                                    <h2 class="text-white text-lg ">{category.name}</h2>
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