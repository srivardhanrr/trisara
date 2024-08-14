<script>
    import {Card} from "$lib/components/ui/card";
    import {onMount, afterUpdate} from 'svelte';

    export let brands = [
        {
            name: 'Brand 1',
            logo: 'https://www.apto.digital/wp-content/uploads/2022/12/Zepto-logo.png'
        },
        {
            name: 'Brand 1',
            logo: 'https://www.rewardone.in/wp-content/uploads/2024/05/b4a0607481.png'
        },
        {
            name: 'Brand 1',
            logo: 'https://static.vecteezy.com/system/resources/previews/019/766/240/non_2x/amazon-logo-amazon-icon-transparent-free-png.png'
        },
        {
            name: 'Brand 1',
            logo: 'https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Logo.png'
        },
                {
            name: 'Brand 1',
            logo: 'https://www.apto.digital/wp-content/uploads/2022/12/Zepto-logo.png'
        },
        {
            name: 'Brand 1',
            logo: 'https://www.rewardone.in/wp-content/uploads/2024/05/b4a0607481.png'
        },
        {
            name: 'Brand 1',
            logo: 'https://static.vecteezy.com/system/resources/previews/019/766/240/non_2x/amazon-logo-amazon-icon-transparent-free-png.png'
        },
        {
            name: 'Brand 1',
            logo: 'https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Logo.png'
        },

    ];

    let containerRef;
    let scrollerRef;
    let isHovering = false;

    function cloneItems() {
        const items = scrollerRef.children;
        const itemsArray = Array.from(items);
        itemsArray.forEach(item => {
            const clone = item.cloneNode(true);
            scrollerRef.appendChild(clone);
        });
    }

    function checkScroll() {
        if (isHovering) return;
        if (scrollerRef.scrollLeft >= scrollerRef.scrollWidth / 2) {
            scrollerRef.scrollLeft = 0;
        } else if (scrollerRef.scrollLeft <= 0) {
            scrollerRef.scrollLeft = scrollerRef.scrollWidth / 2;
        }
    }

    onMount(() => {
        cloneItems();
        scrollerRef.scrollLeft = 0;
        setInterval(checkScroll, 10);
    });

    afterUpdate(() => {
        if (scrollerRef) {
            scrollerRef.style.setProperty('--scroll-width', `${scrollerRef.scrollWidth / 2}px`);
        }
    });
</script>

<div
        class="relative w-full overflow-hidden bg-background"
        bind:this={containerRef}
        on:mouseenter={() => isHovering = true}
        on:mouseleave={() => isHovering = false}
>
    <div
            class="flex scroller"
            bind:this={scrollerRef}
    >
        {#each brands as brand}
            <Card class="shadow-none border-0 flex-shrink-0 w-48 h-24 mx-4 flex items-center justify-center">
                <img src={brand.logo} alt={brand.name} class="max-w-full max-h-full"/>
            </Card>
        {/each}
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
