<script lang="ts">
    import {Card, CardContent, CardFooter} from "$lib/components/ui/card";
    import {Button} from "$lib/components/ui/button";
    import ProductCard from "$lib/components/ProductCard.svelte";

    export let data;

    $: ({products} = data);


    // Mock data for products (replace with your actual data fetching logic)
    // const products = [
    //     {id: 1, name: "Product 1", price: 19.99, image: "/images/trisara-logo.png"},
    //     {id: 1, name: "Product 1", price: 19.99, image: "/images/trisara-logo.png"},
    //     {id: 1, name: "Product 1", price: 19.99, image: "/images/trisara-logo.png"},
    //     {id: 1, name: "Product 1", price: 19.99, image: "/images/trisara-logo.png"},
    //     {id: 1, name: "Product 1", price: 19.99, image: "/images/trisara-logo.png"},
    //     // { id: 2, name: "Product 2", price: 29.99, image: "/product2.jpg" },
    //     // Add more products...
    // ];
</script>

<main class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">All Products</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {#each products as product}
            <ProductCard product={product}/>
        {/each}
    </div>
</main>
