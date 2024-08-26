<script lang="ts">
    import {onMount} from 'svelte';
    import * as Carousel from "$lib/components/ui/carousel";
    import {ChevronLeft, ChevronRight} from "lucide-svelte";


    // Mock data for collections
    const collections = [
        {
            id: 1,
            name: "fluer d'or",
            image: '/images/hero1.png',
            description: 'When you love picking all of them together'
        },
        {
            id: 2,
            name: 'terracotta',
            image: '/images/hero3.png',
            description: 'When you love picking all of them together'
        },
        {
            id: 3,
            name: 'terracotta',
            image: '/images/hero2.png',
            description: 'When you love picking all of them together'
        },
        // Add more collections as needed
    ];
</script>


<section class="py-12 bg-orange-50">
    <div class="container mx-auto px-4">
         <div class="flex justify-between items-center mb-6">
            <h2 class="text-2xl font-bold text-orange-500">buy Collection</h2>
            <a href="/collections/" class="text-orange-500 hover:underline">View All</a>
        </div>
        <p class="text-gray-600 mb-8">When you love picking all of them together</p>

        <Carousel.Root class="w-full">
            <Carousel.Content class="-ml-4">
                {#each collections as collection}
                    <Carousel.Item class="pl-4 md:basis-1/2">
                        <div class="relative overflow-hidden">
                            <img src={collection.image} alt={collection.name} class="w-full h-56 object-cover"/>
                            <div class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                                <h3 class="text-xl font-semibold">{collection.name}</h3>
                            </div>
                        </div>
                    </Carousel.Item>
                {/each}
            </Carousel.Content>
            <Carousel.Previous class="rounded-none left-2">
            </Carousel.Previous>
            <Carousel.Next class="absolute rounded-none right-4 top-1/2 -translate-y-1/2">
                <ChevronRight class="h-4 w-4"/>
            </Carousel.Next>
        </Carousel.Root>
    </div>
</section>
