<!-- @migration-task Error while migrating Svelte code: Can't migrate code with afterUpdate. Please migrate by hand. -->
<script lang="ts">
    import { Card } from "$lib/components/ui/card";
    import { onMount, afterUpdate } from 'svelte';

    interface Brand {
        name: string;
        logo: string;
    }

    export let brands: Brand[] = [
        { name: 'Zepto', logo: '/images/zepto-new.png' },
        { name: 'Blinkit', logo: '/images/blinkit.png' },
        { name: 'Swiggy', logo: '/images/swiggy.png' },
        { name: 'Amazon', logo: '/images/amazon.png' },
        { name: 'Flipkart', logo: '/images/flipkart-new.png' },

    ];

    let containerRef: HTMLDivElement;
    let scrollerRef: HTMLDivElement;
    let isHovering = false;

    function checkScroll() {
        if (isHovering) return;
        if (scrollerRef.scrollLeft >= scrollerRef.scrollWidth / 2) {
            scrollerRef.scrollLeft = 0;
        } else if (scrollerRef.scrollLeft <= 0) {
            scrollerRef.scrollLeft = scrollerRef.scrollWidth / 2;
        }
    }

    onMount(() => {
        scrollerRef.scrollLeft = 0;
        const interval = setInterval(checkScroll, 10);
        return () => clearInterval(interval);
    });

    afterUpdate(() => {
        if (scrollerRef) {
            scrollerRef.style.setProperty('--scroll-width', `${scrollerRef.scrollWidth / 2}px`);
        }
    });
</script>

<div class="flex items-center">
    <div class="mr-4 text-xl text-orange-500 font-semibold">Available on</div>
    <div
        class="relative flex-1 overflow-hidden bg-background"
        bind:this={containerRef}
        on:mouseenter={() => isHovering = true}
        on:mouseleave={() => isHovering = false}
    >
        <div
            class="flex scroller"
            bind:this={scrollerRef}
        >
            {#each [...brands, ...brands] as brand}
                <Card class="shadow-none border-0 flex-shrink-0 w-36 md:w-48 h-24 mx-4 flex items-center justify-center">
                    <img src={brand.logo} alt={brand.name} class="max-w-full max-h-full" aria-label={`${brand.name} logo`} />
                </Card>
            {/each}
        </div>
    </div>
</div>

<style>
    .scroller {
        animation: scroll 30s linear infinite;
    }

    .scroller:hover {
        animation-play-state: paused;
    }

    @keyframes scroll {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(calc(-1 * var(--scroll-width)));
        }
    }
</style>
