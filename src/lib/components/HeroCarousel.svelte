<script lang="ts">
    import {run} from 'svelte/legacy';

    import * as Carousel from '$lib/components/ui/carousel/index.js';
    import type {CarouselAPI} from '$lib/components/ui/carousel/context.js';

    let api: CarouselAPI = $state();
    let current = $state(0);
    let count = $state(0);

    import Autoplay from 'embla-carousel-autoplay';

    interface Props {
        heroImages?: any;
    }

    let {
        heroImages = [
            {
                title: 'Hero 1',
                image: '/images/hero4.jpg'
            },
            {
                title: 'Hero 1',
                image: '/images/hero2.png'
            },
            {
                title: 'Hero 2',
                image: '/images/hero3.png'
            }
        ]
    }: Props = $props();

    run(() => {
        if (api) {
            count = api.scrollSnapList().length;
            current = api.selectedScrollSnap() + 1;

            api.on('select', () => {
                current = api.selectedScrollSnap() + 1;
            });
        }
    });

    const plugin = Autoplay({delay: 4500, stopOnInteraction: true});
</script>

<Carousel.Root
        bind:api
        opts={{ align: 'start' }}
        plugins={[plugin]}
        class="w-full"
        on:mousenter={plugin.stop}
        on:mouseleave={plugin.reset}
>
    <Carousel.Content>
        {#each heroImages as heroImage}
            <Carousel.Item>
                {#if heroImages.mobile_image}
                    <div class="relative md:hidden overflow-hidden">
                        <img
                                class="object-fit left-0 top-0 h-full w-full"
                                src={heroImage.mobile_image}
                                alt={heroImage.title}
                        />
                    </div>
                {:else }
                    <div class="relative md:hidden h-64 overflow-hidden">
                        <img
                                class="object-fit left-0 top-0 h-full w-full"
                                src={heroImage.image}
                                alt={heroImage.title}
                        />
                    </div>
                {/if}
                <div class="relative hidden md:block h-64 overflow-hidden md:h-full">
                    <img
                            class="object-fit left-0 top-0 h-full w-full"
                            loading="lazy"
                            src={heroImage.image}
                            alt={heroImage.title}
                    />
                </div>
            </Carousel.Item>
        {/each}
    </Carousel.Content>
    <Carousel.Previous class="ml-16"/>
    <Carousel.Next class="mr-16"/>
</Carousel.Root>
<!-- <div class="py-2 text-center text-sm text-muted-foreground">
	Slide {current} of {count}
</div> -->
<div class="text-center text-sm space-x-3 -mt-10 z-10">
    {#each Array(count) as _, i}
        <button
                onclick={() => api?.scrollTo(i)}
                class="w-3 h-3 rounded-full transition-all duration-300 focus:outline-none"
                class:bg-orange-500={current === i}
                class:bg-gray-400={current !== i}
                aria-label={`Go to slide ${i + 1}`}
        ></button>
    {/each}
</div>