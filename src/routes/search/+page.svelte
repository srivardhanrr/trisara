<script lang="ts">
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';
    import { Input } from "$lib/components/ui/input";
    import { Button } from "$lib/components/ui/button";
	import ProductCard from '$lib/components/ProductCard.svelte';

    interface Props {
        data: any;
    }

    let { data }: Props = $props();

    let searchTerm = $state(data?.searchTerm || '');
    let searchResults = $derived(data?.searchResults || []);

    console.log('Page data:', data);  // Log the page data

    function handleSearch(event: Event) {
        event.preventDefault();
        if (searchTerm.trim()) {
            goto(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
        }
    }
</script>

<svelte:head>
    <title>Search Results</title>
</svelte:head>

<div class="md:container mx-auto md:py-8">
    <div class="relative">
        <img src='/images/hero3.png' alt="products" class="h-36 w-full object-cover sm:h-80" />
        <!-- {/if} -->
        <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
            <div class="text-center">
                <h2 class="text-3xl font-extrabold tracking-tight text-white md:text-5xl">
                    Search Products
                </h2>
            </div>
        </div>
    </div>
    <div class="container mx-auto px-4 py-8">
    <form onsubmit={handleSearch} class="mb-8">
        <div class="flex justify-center gap-2">
            <Input
                type="search"
                placeholder="Search products..."
                class="lg:w-2/3"
                bind:value={searchTerm}
            />
            <Button class="bg-orange-500" type="submit">Search</Button>
        </div>
    </form>

    {#if searchResults.length > 0}
        <div class="my-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {#each searchResults as product}
            <ProductCard {product} />
            {/each}
        </div>
    {:else if searchTerm}
        <p>No results found for "{searchTerm}"</p>
    {:else}
        <p>Enter a search term to find products</p>
    {/if}
    </div>
</div>