<script lang="ts">
    import * as Carousel from "$lib/components/ui/carousel";
    import * as Card from "$lib/components/ui/card";
    import ProductCard from "$lib/components/ProductCard.svelte";

    export let heading = "Popular Products";

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

<section class="py-8">
    <div class="container mx-auto px-4">
        <div class="flex justify-between items-center mb-6">
            <h2 class="text-2xl font-bold text-orange-500">{heading}</h2>
            <a href="/products" class="text-orange-500 hover:underline">View All</a>
        </div>

        <Carousel.Root opts={{ align: "start" }}>
            <Carousel.Content>
                {#each products as product}
                    <Carousel.Item class="basis-1/2 lg:basis-1/3 xl:basis-1/4">
<!--                        <Card.Root>-->
<!--                            <Card.Content class="p-0">-->
<!--                                <img src={product.image} alt={product.title}-->
<!--                                     class="w-full rounded-lg h-48 object-cover"/>-->
<!--                            </Card.Content>-->
<!--                            <Card.Footer class="flex flex-col items-start">-->
<!--                                <p class="text-sm text-gray-500">VENDOR</p>-->
<!--                                <Card.Title class="text-lg">{product.title}</Card.Title>-->
<!--                                <p class="font-bold">{product.price}</p>-->
<!--                            </Card.Footer>-->
<!--                        </Card.Root>-->
                        <ProductCard name="{product.title}" originalPrice=100 discount=10 price=90 image="{product.image}" />
                    </Carousel.Item>
                {/each}
            </Carousel.Content>
            <Carousel.Previous class="ml-16 "/>
            <Carousel.Next class="mr-16 "/>
        </Carousel.Root>
    </div>
</section>
