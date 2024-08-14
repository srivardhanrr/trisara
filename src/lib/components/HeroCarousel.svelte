<script lang="ts">
    import * as Card from "$lib/components/ui/card/index.js";
    import * as Carousel from "$lib/components/ui/carousel/index.js";

    import Autoplay from "embla-carousel-autoplay";


    const items = [
        {
            name: 'Hero 1',
            src: '/images/hero1.png'
        },
        {
            name: 'Hero 1',
            src: '/images/hero2.png'
        }, {
            name: 'Hero 1',
            src: '/images/hero3.png'
        },
    ]

    const plugin = Autoplay({delay: 5000, stopOnInteraction: true});


</script>

<Carousel.Root
        opts={{align: "start"}}
        plugins={[plugin]}
        class="w-full"
        on:mousenter={plugin.stop}
        on:mouseleave={plugin.reset}>
    <Carousel.Content>
        <!--    <div class="relative h-56 overflow-hidden md:h-96">-->

        {#each items as item}
            <Carousel.Item>
                <img src="{item.src}"
                     class="" alt="{item.name}">
                <!--        <div class="p-1">-->
                <!--          <Card.Root>-->
                <!--            <Card.Content-->
                <!--              class="flex aspect-square items-center justify-center p-6"-->
                <!--            >-->
                <!--              <span class="text-4xl font-semibold">{i + 1}</span>-->
                <!--            </Card.Content>-->
                <!--          </Card.Root>-->
                <!--        </div>-->

            </Carousel.Item>
        {/each}
        <!--    </div>-->
    </Carousel.Content>
    <Carousel.Previous class="ml-16"/>
    <Carousel.Next class="mr-16"/>
</Carousel.Root>


<!--<div id="indicators-carousel" class="relative w-full" data-carousel="static">-->
<!--    &lt;!&ndash; Carousel wrapper &ndash;&gt;-->
<!--    <div class="relative h-56 overflow-hidden md:h-96">-->
<!--         &lt;!&ndash; Item 1 &ndash;&gt;-->
<!--        <div class="duration-700 ease-in-out" data-carousel-item="active">-->
<!--            <img src="https://www.ellementry.com/cdn/shop/files/Lucknow-Desktop2-Aug12.jpg?v=1723447578&width=1500" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">-->
<!--        </div>-->
<!--        &lt;!&ndash; Item 2 &ndash;&gt;-->
<!--        <div class=" duration-700 ease-in-out" data-carousel-item>-->
<!--            <img src="https://www.ellementry.com/cdn/shop/files/Lucknow-Desktop2-Aug12.jpg?v=1723447578&width=1500" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">-->
<!--        </div>-->
<!--        &lt;!&ndash; Item 3 &ndash;&gt;-->
<!--        <div class="duration-700 ease-in-out" data-carousel-item>-->
<!--            <img src="https://www.ellementry.com/cdn/shop/files/Lucknow-Desktop2-Aug12.jpg?v=1723447578&width=1500" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">-->
<!--        </div>-->
<!--        &lt;!&ndash; Item 4 &ndash;&gt;-->
<!--        <div class="duration-700 ease-in-out" data-carousel-item>-->
<!--            <img src="https://www.ellementry.com/cdn/shop/files/Lucknow-Desktop2-Aug12.jpg?v=1723447578&width=1500" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">-->
<!--        </div>-->
<!--        &lt;!&ndash; Item 5 &ndash;&gt;-->
<!--        <div class="duration-700 ease-in-out" data-carousel-item>-->
<!--            <img src="https://www.ellementry.com/cdn/shop/files/Lucknow-Desktop2-Aug12.jpg?v=1723447578&width=1500" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">-->
<!--        </div>-->
<!--    </div>-->
<!--    &lt;!&ndash; Slider indicators &ndash;&gt;-->
<!--    <div class="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">-->
<!--        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>-->
<!--        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>-->
<!--        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>-->
<!--        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>-->
<!--        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>-->
<!--    </div>-->
<!--    &lt;!&ndash; Slider controls &ndash;&gt;-->
<!--    <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>-->
<!--        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">-->
<!--            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">-->
<!--                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>-->
<!--            </svg>-->
<!--            <span class="sr-only">Previous</span>-->
<!--        </span>-->
<!--    </button>-->
<!--    <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>-->
<!--        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">-->
<!--            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">-->
<!--                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>-->
<!--            </svg>-->
<!--            <span class="sr-only">Next</span>-->
<!--        </span>-->
<!--    </button>-->
<!--</div>-->
