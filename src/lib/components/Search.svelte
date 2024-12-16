<script lang="ts">
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';
    import { Input } from "$lib/components/ui/input";
    import { Button } from "$lib/components/ui/button";

    let searchTerm = $state('');
    let searchResults: string | any[] = $state([]);
    let loading = $state(false);

    onMount(() => {
        searchTerm = $page.url.searchParams.get('q') || '';
        if (searchTerm) {
            performSearch();
        }
    });

    async function performSearch() {
        loading = true;
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/products/?search=${encodeURIComponent(searchTerm)}`);
            if (response.ok) {
                const data = await response.json();
                searchResults = data.results;
            } else {
                console.error('Search failed');
            }
        } catch (error) {
            console.error('Error during search:', error);
        } finally {
            loading = false;
        }
    }

    function handleSearch(event: Event) {
        event.preventDefault();
        if (searchTerm.trim()) {
            goto(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
            performSearch();
        }
    }
</script>

<div class="container mx-auto py-8">
    <form onsubmit={handleSearch} class="mb-8">
        <div class="flex gap-2">
            <Input
                type="search"
                placeholder="Search products..."
                class="flex-grow"
                bind:value={searchTerm}
            />
            <Button type="submit">Search</Button>
        </div>
    </form>

    {#if loading}
        <p>Loading...</p>
    {:else if searchResults.length > 0}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {#each searchResults as product}
                <div class="border p-4 rounded-lg">
                    <h2 class="text-xl font-semibold">{product.name}</h2>
                    <p class="text-gray-600">{product.description}</p>
                    <p class="text-lg font-bold mt-2">${product.price}</p>
                    <a href="/products/{product.slug}" class="text-blue-500 hover:underline">View Details</a>
                </div>
            {/each}
        </div>
    {:else if searchTerm}
        <p>No results found for "{searchTerm}"</p>
    {/if}
</div>