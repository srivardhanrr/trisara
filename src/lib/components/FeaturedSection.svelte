<script lang="ts">
    import {ScrollArea} from "$lib/components/ui/scroll-area/index.js";
    import * as Card from "$lib/components/ui/card";

    const products = [
        {
            title: "Example Product Title",
            price: "Rs. 19.99",
            image: "https://www.ellementry.com/cdn/shop/products/wdeta2318_00.jpg?v=1706522243"
        },
        {
            title: "Example Product Title",
            price: "Rs. 19.99",
            image: "https://www.ellementry.com/cdn/shop/products/wdeta2318_00.jpg?v=1706522243"
        },
        {
            title: "Example Product Title",
            price: "Rs. 19.99",
            image: "https://www.ellementry.com/cdn/shop/products/wdeta2318_00.jpg?v=1706522243"
        },
        {
            title: "Example Product Title",
            price: "Rs. 19.99",
            image: "https://www.ellementry.com/cdn/shop/products/wdeta2318_00.jpg?v=1706522243"
        },
        {
            title: "Example Product Title",
            price: "Rs. 19.99",
            image: "https://www.ellementry.com/cdn/shop/products/wdeta2318_00.jpg?v=1706522243"
        },
        {
            title: "Example Product Title",
            price: "Rs. 19.99",
            image: "https://www.ellementry.com/cdn/shop/products/wdeta2318_00.jpg?v=1706522243"
        },
        {
            title: "Example Product Title",
            price: "Rs. 19.99",
            image: "https://www.ellementry.com/cdn/shop/products/wdeta2318_00.jpg?v=1706522243"
        },
        {
            title: "Example Product Title",
            price: "Rs. 19.99",
            image: "https://www.ellementry.com/cdn/shop/products/wdeta2318_00.jpg?v=1706522243"
        },
        {
            title: "Example Product Title",
            price: "Rs. 19.99",
            image: "https://www.ellementry.com/cdn/shop/products/wdeta2318_00.jpg?v=1706522243"
        },
    ];
</script>

<ScrollArea
        class="whitespace-nowrap"
        orientation="horizontal"
>
    <div class="flex w-full space-x-5 p-4">
        {#each products as product}
            <Card.Root>
                <Card.Content class="p-0">
                    <img src={product.image} alt={product.title} class="w-full rounded-lg h-48 object-cover"/>
                </Card.Content>
                <Card.Footer class="flex flex-col items-start">
                    <p class="text-sm text-gray-500">VENDOR</p>
                    <Card.Title class="text-lg">{product.title}</Card.Title>
                    <p class="font-bold">{product.price}</p>
                </Card.Footer>
            </Card.Root>
        {/each}
    </div>
</ScrollArea>
