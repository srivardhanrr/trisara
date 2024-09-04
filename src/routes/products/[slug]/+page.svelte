<script lang="ts">
    import {onMount} from 'svelte';
    import * as Breadcrumb from "$lib/components/ui/breadcrumb";
    import * as Accordion from "$lib/components/ui/accordion";
    import * as Card from "$lib/components/ui/card";
    import * as Carousel from "$lib/components/ui/carousel";
    import {Separator} from "$lib/components/ui/separator";
    import CollectionCarousel from "$lib/components/CollectionCarousel.svelte";


    export let data;

    $: ({product, collection} = data);

    let activeCard = 0;
    let scrollYProgress = 0;

    let isMobile: boolean;

    function checkMobile() {
        isMobile = window.innerWidth < 768; // Adjust this breakpoint as needed
    }

    let ref: HTMLDivElement;

    onMount(() => {
        checkMobile();
        window.addEventListener('resize', checkMobile);

        const handleScroll = (event: Event) => {
            const target = event.target as HTMLElement;
            scrollYProgress = target.scrollTop / target.scrollHeight;
            const cardsBreakpoints = content.map((_, index) => index / content.length);

            cardsBreakpoints.forEach((breakpoint, index) => {
                if (scrollYProgress > breakpoint - 0.2 && scrollYProgress <= breakpoint) {
                    activeCard = index;
                }
            });
        };

        ref.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', checkMobile);
            ref.removeEventListener('scroll', handleScroll);
        };
    });

</script>

<div bind:this={ref}
     class="product-container flex flex-col md:flex-row gap-8 p-2 sm:p-6 transition ease-in-out">
    <div class:sticky={!isMobile} class="sticky overflow-hidden image-section w-full md:w-1/2 image-section">
        <Carousel.Root>
            <Carousel.Content>
                {#each product.images as image}
                    <Carousel.Item>
                        <img src={image.image} alt={product.name}
                             class="md:px-8 w-full h-fit flex items-center object-fit"/>
                    </Carousel.Item>
                {/each}
            </Carousel.Content>
            <Carousel.Previous class="ml-16 sm:ml-24"/>
            <Carousel.Next class="mr-16 sm:mr-24"/>
        </Carousel.Root>
        <!-- Thumbnail images -->
        <div class="flex gap-2 mt-4 items-center justify-center">
            {#each product.images as image}
                <button class="cursor-pointer">
                    <img src={image.image} alt={product.name}
                         class="w-20 rounded-lg h-20 flex items-center justify-center"/>
                </button>
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
                    <Breadcrumb.Page class="text-orange-600 truncate">{product.name}</Breadcrumb.Page>
                </Breadcrumb.Item>
            </Breadcrumb.List>
        </Breadcrumb.Root>
        <h1 class="text-2xl md:text-3xl mt-4 lg:mt-10 font-bold mb-2">{product.name}</h1>
        <p class="text-gray-600 mt-5 lg:mt-10 mb-4">{product.description}</p>

        <!-- Star rating placeholder -->
        <!--        <div class="flex mb-2">-->
        <!--            {#each Array(5) as _, i}-->
        <!--                <span class={i < 4 ? "text-yellow-400" : "text-gray-300"}>★</span>-->
        <!--            {/each}-->
        <!--        </div>-->

        <button class="w-full flex gap-2 h-12 items-center justify-center bg-orange-500 hover:bg-orange-400 active:bg-orange-400 text-black font-bold py-2 px-4 rounded-lg border border-yellow-200 transition duration-200 ease-in-out">
            <span class="align-text-top animate-bounce translate-x-1/3 translate-y-1.5">Buy On Amazon</span>
            <!--            <img src="/images/amazon.png" class="h-5" alt="">-->
        </button>
        <div class="mt-8">
            <Card.Root class="bg-orange-50">
                <Accordion.Root value="item-1">
                    <Accordion.Item value="item-1">
                        <Card.Title class="mx-5 text-xl">
                            <Accordion.Trigger>
                                <h2 class="text-orange-500 text-lg">
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
            <Card.Root class="bg-orange-50">
                <Accordion.Root value="item-1">
                    <Accordion.Item value="item-1">
                        <Card.Title class="mx-5 text-xl">
                            <Accordion.Trigger>
                                <h2 class="text-orange-500 text-lg">
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
            <Card.Root class="bg-orange-50">
                <Accordion.Root value="item-1">
                    <Accordion.Item value="item-1">
                        <Card.Title class="mx-5 text-xl">
                            <!--                            <Accordion.Trigger>-->
                            <!--                                <h2 class="text-orange-500 text-lg">-->
                            <!--                                    PRODUCT DESCRIPTION-->
                            <!--                                </h2>-->
                            <!--                            </Accordion.Trigger>-->
                        </Card.Title>

                        <Accordion.Content class="mx-4 mt-4">
                            <div class="grid grid-cols-4 gap-4 md:flex md:justify-center md:space-x-4">
                                <img src="/images/feature/eth.png" alt="Feature 1"
                                     class="h-16 w-16  md:h-24 md:w-24 object-cover rounded-lg"/>
                                <img src="/images/feature/etc.png" alt="Feature 2"
                                     class="h-16 w-16 md:h-24 md:w-24 object-cover rounded-lg"/>
                                <img src="/images/feature/hqss.png" alt="Feature 3"
                                     class="h-16 w-16 md:h-24 md:w-24 object-cover rounded-lg"/>
                                <img src="/images/feature/if.png" alt="Feature 4"
                                     class="h-16 w-16 md:h-24 md:w-24 object-cover rounded-lg"/>
                            </div>
                        </Accordion.Content>
                    </Accordion.Item>
                </Accordion.Root>
            </Card.Root>
        </div>
        <div class="mt-8">
            <Card.Root class="bg-orange-50">
                <Accordion.Root value="item-1">
                    <Accordion.Item value="item-1">
                        <Card.Title class="mx-5 text-xl">
                            <Accordion.Trigger>
                                <h2 class="text-orange-500 text-lg">
                                    PRODUCT SPECIFICATION
                                </h2>
                            </Accordion.Trigger>
                        </Card.Title>

                        <Accordion.Content>

                            <div class="space-y-4 mx-4">
                                <div class="flex justify-between">
                                    <span class=" font-semibold">Dimensions</span>
                                    <span>{product.dimensions}</span>
                                </div>
                                <Separator class="bg-gray-700"/>
                                <div class="flex justify-between">
                                    <span class=" font-semibold">Capacity</span>
                                    <span>{product.capacity}</span>
                                </div>
                                <Separator class="bg-gray-700"/>
                                <div class="flex justify-between">
                                    <span class=" font-semibold">Material</span>
                                    <span>{product.material}</span>
                                </div>
                                <Separator class="bg-gray-700"/>
                                <div class="flex justify-between">
                                    <span class=" font-semibold">Weight</span>
                                    <span>{product.weight}</span>
                                </div>
                                <Separator class="bg-gray-700"/>
                                <div class="flex justify-between">
                                    <span class=" font-semibold">Suitable Heat Sources</span>
                                    <span>{product.suitable_heat_sources}</span>
                                </div>
                                <Separator class="bg-gray-700"/>
                                <div class="flex justify-between">
                                    <span class=" font-semibold">Made In</span>
                                    <span>{product.made_in}</span>
                                </div>
                            </div>

                        </Accordion.Content>
                    </Accordion.Item>
                </Accordion.Root>
            </Card.Root>
        </div>
        <div class="mt-8">
            <Card.Root class="bg-orange-50">
                <Accordion.Root value="item-1">
                    <Accordion.Item value="item-1">
                        <Card.Title class="mx-5 text-xl">
                            <Accordion.Trigger>
                                <h2 class="text-orange-500 text-lg">
                                    ADDITIONAL INFORMATION
                                </h2>
                            </Accordion.Trigger>
                        </Card.Title>

                        <Accordion.Content>
                            <ul class="list-disc pl-5 space-y-2 mx-4">
                                <li><b>Manufacturer</b>: Arvind Industries</li>
                                <li><b>Address</b>: No. 45, Embassy Square, 4th Main Road, Chamarajpet, Bangalore-560018
                                </li>
                                <li><b>Contact</b>: care.arvindindustries@gmail.com | +91-7349061709</li>
                            </ul>
                        </Accordion.Content>
                    </Accordion.Item>
                </Accordion.Root>
            </Card.Root>
        </div>

    </div>
</div>

<!--<div class="w-full mt-8">-->
<!--    <h2 class="text-2xl font-bold mb-4 text-center">Product Features</h2>-->
<!--    <div class="grid grid-cols-2 gap-4 md:flex md:justify-center md:space-x-4">-->
<!--        <img src="/images/feature/eth.png" alt="Feature 1" class="h-40 w-full md:h-64 md:w-64 object-cover rounded-lg"/>-->
<!--        <img src="/images/feature/etc.png" alt="Feature 2" class="h-40 w-full md:h-64 md:w-64 object-cover rounded-lg"/>-->
<!--        <img src="/images/feature/hqss.png" alt="Feature 3"-->
<!--             class="h-40 w-full md:h-64 md:w-64 object-cover rounded-lg"/>-->
<!--        <img src="/images/feature/if.png" alt="Feature 4" class="h-40 w-full md:h-64 md:w-64 object-cover rounded-lg"/>-->
<!--    </div>-->
<!--</div>-->

<CollectionCarousel collection="{data.collection}"/>

<style>
    .sticky {
        position: sticky;
        top: 1rem;
        align-self: flex-start;
    }
</style>
