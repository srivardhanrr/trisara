<script lang="ts">
  import * as Breadcrumb  from "$lib/components/ui/breadcrumb";
  import { Button } from "$lib/components/ui/button";
  import * as Carousel from "$lib/components/ui/carousel";
  import ProductCarousel from "$lib/components/ProductCarousel.svelte";


  // Mock data for the product
  const product = {
    name: "Bowl",
    description: "A bowl is a round container with a wide, open top and deep sides, typically used for preparing, serving, storing, or consuming food and liquids. The interior of a bowl is characteristically shaped like a spherical cap, with seamless curves from the edges to the bottom, making it especially suited for holding liquids and loose food, as gravity concentrates the contents in the center",
    images: ["/images/trisara-logo.png", "https://trisara.in/cdn/shop/files/lossy-page1-1200px-thumbnail_tif.jpg?v=1722882267"],
  };

  // Mock data for related products
  const relatedProducts = [
    { name: "Example Product Title", price: "Rs. 19.99", image: "/path/to/product1.jpg" },
    { name: "Example Product Title", price: "Rs. 19.99", image: "/path/to/product2.jpg" },
    { name: "Example Product Title", price: "Rs. 19.99", image: "/path/to/product3.jpg" },
    { name: "Example Product Title", price: "Rs. 19.99", image: "/path/to/product4.jpg" },
  ];
</script>

<div class="container mx-auto px-4 py-8">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div class="relative">
      <img src={product.images[0]} alt={product.name} class="w-full h-auto" />
      <span class="absolute top-4 left-4 bg-gray-800 text-white px-2 py-1 text-sm">New</span>
    </div>

    <div>
      <Breadcrumb.Root>
  <Breadcrumb.List>
    <Breadcrumb.Item>
      <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
    </Breadcrumb.Item>
    <Breadcrumb.Separator />
    <Breadcrumb.Item>
      <Breadcrumb.Link href="/products">Products</Breadcrumb.Link>
    </Breadcrumb.Item>
    <Breadcrumb.Separator />
    <Breadcrumb.Item>
      <Breadcrumb.Page>{product.name}</Breadcrumb.Page>
    </Breadcrumb.Item>
  </Breadcrumb.List>
</Breadcrumb.Root>

      <h1 class="text-3xl font-bold my-4">{product.name}</h1>
      <p class="text-gray-600 mb-6">{product.description}</p>

      <div class="flex space-x-4 mb-6">
        <Button variant="outline" class="flex-1">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
          Add to Cart
        </Button>
        <Button variant="outline" class="flex-1">Ask An Expert</Button>
      </div>

      <div class="space-y-4">
        <div class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7h1a1 1 0 011 1v6h-1V7z" />
          </svg>
          <span>Free Shipping</span>
        </div>
        <div class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
          </svg>
          <span>Free Returns</span>
        </div>
        <div class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
          </svg>
          <span>Built And Shipped Within 5 - 7 Business Days</span>
        </div>
      </div>
    </div>
  </div>
  <div class="m-8">

  <ProductCarousel heading="Related Products" />
  </div>
    <h2 class="text-2xl font-bold mb-6">Related Products</h2>
    <Carousel.Root opts={{ align: "start" }}>
      <Carousel.Content>
        {#each relatedProducts as product}
          <Carousel.Item class="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
            <div class="p-4">
              <img src={product.image} alt={product.name} class="w-full h-48 object-cover mb-4" />
              <p class="text-sm text-gray-500">VENDOR</p>
              <h3 class="text-lg font-semibold">{product.name}</h3>
              <p class="font-bold">{product.price}</p>
            </div>
          </Carousel.Item>
        {/each}
      </Carousel.Content>
      <Carousel.Previous class="ml-12 overflow-hidden" />
      <Carousel.Next class="mr-12 overflow-hidden"/>
    </Carousel.Root>
  </div>

