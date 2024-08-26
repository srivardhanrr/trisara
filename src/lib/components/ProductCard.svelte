<script lang="ts">


    export let product;
</script>



<div class="relative w-40 lg:w-72 overflow-hidden my-10 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
    <a href="/products/{product.slug}">
  <div class="relative w-full h-36 md:h-64 overflow-hidden">
    <img loading="lazy" src="{product.images[0].image}" alt="Product" class="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110" />
    <img loading="lazy" src="{product.images[1].image}" alt="Product Hover" class="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100" />
  </div>
  <div class="p-2">
    <h3 class="text-sm md:text-sm font-semibold">{product.name}</h3>
    <p class="text-sm text-gray-600">{product.material}</p>
  </div>
    </a>
</div>

<style>
  .hover\:opacity-100:hover {
    opacity: 1;
  }
</style>
