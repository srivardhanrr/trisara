<script>
  import { onMount } from 'svelte';

  let isSticky = false;
    let isMobile = false;

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
    <div class="bg-gray-100 h-96 flex items-center justify-center">
      <span class="text-gray-400">Product Image</span>
    </div>

    <!-- Thumbnail images -->
    <div class="flex gap-2 mt-4">
      {#each Array(3) as _, i}
        <div class="bg-gray-100 w-20 h-20 flex items-center justify-center">
          <span class="text-gray-400">Thumb {i + 1}</span>
        </div>
      {/each}
    </div>
  </div>

  <div class="info-section w-full md:w-1/2">
    <h1 class="text-3xl font-bold mb-2">Acme Prism T-Shirt</h1>
    <p class="text-gray-600 mb-4">60% combed ringspun cotton/40% polyester jersey tee.</p>

    <!-- Star rating placeholder -->
    <div class="flex mb-2">
      {#each Array(5) as _, i}
        <span class={i < 3 ? "text-yellow-400" : "text-gray-300"}>★</span>
      {/each}
    </div>

    <p class="text-3xl font-bold mb-6">$99</p>

    <!-- Color, Size, Quantity selections here -->

    <button class="w-full bg-black text-white py-2 rounded-md mt-6">Add to cart</button>

    <div class="mt-8">
      <h3 class="text-xl font-semibold mb-2">Product Details</h3>
      <p>Introducing the Acme Prism T-Shirt, a perfect blend of style and comfort for the modern wardrobe.</p>
    </div>
      <div class="mt-8">
      <h3 class="text-xl font-semibold mb-2">Product Details</h3>
      <p>Introducing the Acme Prism T-Shirt, a perfect blend of style and comfort for the modern wardrobe.</p>
    </div>
  <div class="mt-8">
      <h3 class="text-xl font-semibold mb-2">Product Details</h3>
      <p>Introducing the Acme Prism T-Shirt, a perfect blend of style and comfort for the modern wardrobe.</p>
    </div>
  <div class="mt-8">
      <h3 class="text-xl font-semibold mb-2">Product Details</h3>
      <p>Introducing the Acme Prism T-Shirt, a perfect blend of style and comfort for the modern wardrobe.</p>
    </div>
  <div class="mt-8">
      <h3 class="text-xl font-semibold mb-2">Product Details</h3>
      <p>Introducing the Acme Prism T-Shirt, a perfect blend of style and comfort for the modern wardrobe.</p>
    </div>
  <div class="mt-8">
      <h3 class="text-xl font-semibold mb-2">Product Details</h3>
      <p>Introducing the Acme Prism T-Shirt, a perfect blend of style and comfort for the modern wardrobe.</p>
    </div>
  <div class="mt-8">
      <h3 class="text-xl font-semibold mb-2">Product Details</h3>
      <p>Introducing the Acme Prism T-Shirt, a perfect blend of style and comfort for the modern wardrobe.</p>
    </div>
  <div class="mt-8">
      <h3 class="text-xl font-semibold mb-2">Product Details</h3>
      <p>Introducing the Acme Prism T-Shirt, a perfect blend of style and comfort for the modern wardrobe.</p>
    </div>
  <div class="mt-8">
      <h3 class="text-xl font-semibold mb-2">Product Details</h3>
      <p>Introducing the Acme Prism T-Shirt, a perfect blend of style and comfort for the modern wardrobe.</p>
    </div>
  <div class="mt-8">
      <h3 class="text-xl font-semibold mb-2">Product Details</h3>
      <p>Introducing the Acme Prism T-Shirt, a perfect blend of style and comfort for the modern wardrobe.</p>
    </div>
  <div class="mt-8">
      <h3 class="text-xl font-semibold mb-2">Product Details</h3>
      <p>Introducing the Acme Prism T-Shirt, a perfect blend of style and comfort for the modern wardrobe.</p>
    </div>
  <div class="mt-8">
      <h3 class="text-xl font-semibold mb-2">Product Details</h3>
      <p>Introducing the Acme Prism T-Shirt, a perfect blend of style and comfort for the modern wardrobe.</p>
    </div>
  <div class="mt-8">
      <h3 class="text-xl font-semibold mb-2">Product Details</h3>
      <p>Introducing the Acme Prism T-Shirt, a perfect blend of style and comfort for the modern wardrobe.</p>
    </div>
  <div class="mt-8">
      <h3 class="text-xl font-semibold mb-2">Product Details</h3>
      <p>Introducing the Acme Prism T-Shirt, a perfect blend of style and comfort for the modern wardrobe.</p>
    </div>

  </div>
</div>

<style>
  .sticky {
    position: sticky;
    top: 1rem;
    align-self: flex-start;
  }
</style>
