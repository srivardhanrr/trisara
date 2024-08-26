<script>
    import {onMount} from 'svelte';
    import * as Breadcrumb from "$lib/components/ui/breadcrumb";
    import * as Accordion from "$lib/components/ui/accordion";
    import * as Card from "$lib/components/ui/card";
    import {Separator} from "$lib/components/ui/separator";
    import CollectionCarousel from "$lib/components/CollectionCarousel.svelte";


    let isSticky = false;
    let isMobile = false;

    export let data;

    $: ({product, collection} = data);

    let mainImage;

    function changeMainImage(imageUrl) {
        mainImage = imageUrl;
    }

    onMount(() => {
        const checkMobile = () => {
            isMobile = window.innerWidth < 768; // Adjust this breakpoint as needed
        };
        const handleScroll = () => {
            if (isMobile) return;
            const container = document.querySelector('.product-container');
            const imageSection = document.querySelector('.image-section');
            const infoSection = document.querySelector('.info-section');

            const containerRect = container.getBoundingClientRect();
            const infoRect = infoSection.getBoundingClientRect();

            isSticky = containerRect.top <= 0 && containerRect.bottom > window.innerHeight;
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', checkMobile);
            window.removeEventListener('scroll', handleScroll);
        };
    });


</script>

<div class="product-container flex flex-col md:flex-row gap-8 p-6">
    <div class="image-section w-full md:w-1/2" class:sticky={isSticky && !isMobile}>

        <img src={product.images[0].image} alt={product.name}
             class="md:px-8 w-full h-fit flex items-center object-cover"/>

        <!-- Thumbnail images -->
        <div class="flex gap-2 mt-4 items-center justify-center">
            {#each product.images as image}
                <div class="cursor-pointer" on:click={changeMainImage(image)}>
                    <img src={image.image} alt={product.name}
                         class="w-20 rounded-lg h-20 flex items-center justify-center"/>
                </div>
            {/each}
        </div>
    </div>

    <div class="info-section w-full md:w-1/2">
        <Breadcrumb.Root>
            <Breadcrumb.List>
                <Breadcrumb.Item>
                    <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
                </Breadcrumb.Item>
                <Breadcrumb.Separator/>
                <Breadcrumb.Item>
                    <Breadcrumb.Link href="/products">Products</Breadcrumb.Link>
                </Breadcrumb.Item>
                <Breadcrumb.Separator/>
                <Breadcrumb.Item>
                    <Breadcrumb.Page>{product.name}</Breadcrumb.Page>
                </Breadcrumb.Item>
            </Breadcrumb.List>
        </Breadcrumb.Root>
        <h1 class="text-3xl mt-4 font-bold mb-2">{product.name}</h1>
        <p class="text-gray-600 mb-4">{product.description}</p>

        <!-- Star rating placeholder -->
        <div class="flex mb-2">
            {#each Array(5) as _, i}
                <span class={i < 4 ? "text-yellow-400" : "text-gray-300"}>★</span>
            {/each}
        </div>

        <button class="w-full flex gap-2 h-12 items-center justify-center hover:bg-yellow-100 active:bg-yellow-100 text-black font-bold py-2 px-4 rounded-lg border border-yellow-200 transition duration-200 ease-in-out">

            <span class="align-text-top">Buy On</span>
            <img src="/images/amazon-icon.webp" class="h-5" alt="">

        </button>
        <button class="w-full my-2 flex h-12 gap-2 items-center justify-center hover:bg-yellow-100 active:bg-yellow-100 text-black font-bold py-2 px-4 rounded-lg border border-yellow-200 transition duration-200 ease-in-out">

            <span class="align-text-top">Buy On</span>
            <img src="/images/flipkart.png" class="h-20 overflow-hidden" alt="">

        </button>
        <button class="w-full my-2 flex h-12 gap-2 items-center justify-center hover:bg-yellow-100 active:bg-yellow-100 text-black font-bold py-2 px-4 rounded-lg border border-yellow-200 transition duration-200 ease-in-out">

            <span class="align-text-top">Buy On</span>
            <img src="/images/zepto.png" class="h-20 overflow-hidden" alt="">

        </button>
        <button class="w-full my-2 flex h-12 gap-2 items-center justify-center hover:bg-yellow-100 active:bg-yellow-100 text-black font-bold py-2 px-4 rounded-lg border border-yellow-200 transition duration-200 ease-in-out">

            <span class="align-text-top">Buy On</span>
            <img src="/images/blinkit.png" class="h-5 overflow-hidden" alt="">

        </button>

        <div class="mt-8">
            <Card.Root class="bg-gray-100">
                <Accordion.Root>
                    <Accordion.Item value="item-1">
                        <Card.Title class="mx-5 text-xl">
                            <Accordion.Trigger>
                                <h2 class=" text-lg">
                                    PRODUCT FEATURES
                                </h2>
                            </Accordion.Trigger>
                        </Card.Title>

                        <Accordion.Content>
                            <ul class="list-disc pl-5 space-y-2 mx-4">
                                {#each product.features as feature}
                                    <li>{feature.feature}</li>
                                {/each}
                            </ul>
                        </Accordion.Content>
                    </Accordion.Item>
                </Accordion.Root>
            </Card.Root>
        </div>

        <div class="mt-8">
            <Card.Root class="bg-gray-100">
                <Accordion.Root>
                    <Accordion.Item value="item-1">
                        <Card.Title class="mx-5 text-xl">
                            <Accordion.Trigger>
                                <h2 class=" text-lg">
                                    PRODUCT DESCRIPTION
                                </h2>
                            </Accordion.Trigger>
                        </Card.Title>

                        <Accordion.Content class="mx-4">
                            <p>{product.description}</p>
                        </Accordion.Content>
                    </Accordion.Item>
                </Accordion.Root>
            </Card.Root>
        </div>
        <div class="mt-8">
            <Card.Root class="bg-gray-100">
                <Accordion.Root>
                    <Accordion.Item value="item-1">
                        <Card.Title class="mx-5 text-xl">
                            <Accordion.Trigger>
                                <h2 class=" text-lg">
                                    PRODUCT SPECIFICATION
                                </h2>
                            </Accordion.Trigger>
                        </Card.Title>

                        <Accordion.Content>

                            <div class="space-y-4 mx-4">
                                <div class="flex justify-between">
                                    <span class="font-medium font-semibold">Dimensions</span>
                                    <span>{product.dimensions}</span>
                                </div>
                                <Separator class="bg-gray-700"/>
                                <div class="flex justify-between">
                                    <span class="font-medium font-semibold">Capacity</span>
                                    <span>{product.capacity}</span>
                                </div>
                                <Separator class="bg-gray-700"/>
                                <div class="flex justify-between">
                                    <span class="font-medium font-semibold">Material</span>
                                    <span>{product.material}</span>
                                </div>
                                <Separator class="bg-gray-700"/>
                                <div class="flex justify-between">
                                    <span class="font-medium font-semibold">Weight</span>
                                    <span>{product.weight}</span>
                                </div>
                                <Separator class="bg-gray-700"/>
                                <div class="flex justify-between">
                                    <span class="font-medium font-semibold">Suitable Heat Sources</span>
                                    <span>{product.suitable_heat_sources}</span>
                                </div>
                                <Separator class="bg-gray-700"/>
                                <div class="flex justify-between">
                                    <span class="font-medium font-semibold">Made In</span>
                                    <span>{product.made_in}</span>
                                </div>
                            </div>

                        </Accordion.Content>
                    </Accordion.Item>
                </Accordion.Root>
            </Card.Root>
        </div>
    </div>
</div>

<div class="w-full mt-8">
    <h2 class="text-2xl font-bold mb-4 text-center">Product Features</h2>
    <div class="grid grid-cols-2 gap-4 md:flex md:justify-center md:space-x-4">
        <img src="/images/feature/eth.png" alt="Feature 1" class="h-40 w-full md:h-64 md:w-64 object-cover rounded-lg"/>
        <img src="/images/feature/etc.png" alt="Feature 2" class="h-40 w-full md:h-64 md:w-64 object-cover rounded-lg"/>
        <img src="/images/feature/hqss.png" alt="Feature 3"
             class="h-40 w-full md:h-64 md:w-64 object-cover rounded-lg"/>
        <img src="/images/feature/if.png" alt="Feature 4" class="h-40 w-full md:h-64 md:w-64 object-cover rounded-lg"/>
    </div>
</div>

<CollectionCarousel collection="{data.collection}"/>

<style>
    .sticky {
        position: sticky;
        top: 1rem;
        align-self: flex-start;
    }
</style>
