<script lang="ts">
    import {ScrollArea} from "$lib/components/ui/scroll-area/index.js";
    import * as Card from "$lib/components/ui/card";
    import ProductCard from "$lib/components/ProductCard.svelte";

    const products = [
        {
            title: "Example Product Title",
            price: "Rs. 19.99",
            image: "https://www.ellementry.com/cdn/shop/files/SWSWA3232_01_1920x.webp?v=1712134523"
        },
        {
            title: "Example Product Title",
            price: "Rs. 19.99",
            image: "https://www.ellementry.com/cdn/shop/products/swtea2780_01_1920x.jpg?v=1706524428"
        },
        {
            title: "Example Product Title",
            price: "Rs. 19.99",
            image: "https://www.ellementry.com/cdn/shop/products/gstea2562_01_1920x.jpg?v=1706522686"
        },
        {
            title: "Example Product Title",
            price: "Rs. 19.99",
            image: "https://www.ellementry.com/cdn/shop/files/WDDEA3337_01_1920x.webp?v=1712755561"
        },
        {
            title: "Example Product Title",
            price: "Rs. 19.99",
            image: "https://www.ellementry.com/cdn/shop/files/SWTEA3092_01_1920x.webp?v=1712063713"
        },
        {
            title: "Example Product Title",
            price: "Rs. 19.99",
            image: "https://www.ellementry.com/cdn/shop/files/WDDEA3337_01_1920x.webp?v=1712755561"
        },
        {
            title: "Example Product Title",
            price: "Rs. 19.99",
            image: "https://www.ellementry.com/cdn/shop/products/gstea2562_01_1920x.jpg?v=1706522686"
        },
    ];

</script>

<ScrollArea
        class="whitespace-nowrap"
        orientation="horizontal"
>
    <div class="flex w-full space-x-5 p-4">
        {#each products as product}
            <ProductCard name="{product.title}" originalPrice=100 discount=10 price=90 image="{product.image}"/>

        {/each}
    </div>
</ScrollArea>
