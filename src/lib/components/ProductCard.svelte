<script lang="ts">
  export let product;

  let isHovered = false;

  // Assuming these properties exist in your product object
  // If not, you'll need to add logic to determine when to show these badges
  $: isNew = product.isNew;
  $: isBestSeller = product.isBestSeller;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div 
  class="group relative w-full max-w-72 overflow-hidden my-4 rounded-lg transition-all duration-300 ease-in-out hover:shadow-xl"
  on:mouseenter={() => isHovered = true}
  on:mouseleave={() => isHovered = false}
>
  <a href="/products/{product.slug}" class="block">
    <div class="relative aspect-square overflow-hidden bg-gray-100">
      {#if product.images.length > 1}
        <img 
          loading="lazy" 
          src="{product.images[1].image}" 
          alt="{product.name}" 
          class="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
      {:else}
        <div class="w-full h-full flex items-center justify-center text-gray-400">
          No Image Available
        </div>
      {/if}
      {#if product.images.length > 0}
          <img 
            loading="lazy" 
            src="{product.images[0].image}" 
            alt="{product.name} - Alternate View" 
            class="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
          />
          {:else}
        <div class="w-full h-full flex items-center justify-center text-gray-400">
          No Image Available
        </div>
        {/if}

      
      <!-- Badges -->
      <div class="absolute top-3 left-3 flex flex-col gap-2">
        {#if product.new_badge}
          <span class="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-md">New</span>
        {/if}
        {#if product.best_seller}
          <span class="bg-black text-white text-xs font-bold px-2 py-1 rounded-md">Best Seller</span>
        {/if}
      </div>
    </div>
    <div class="p-2 md:p-4 bg-white">
      <h4 class="text-sm font-medium text-gray-900 truncate">{product.name}</h4>
      <div class="mt-2 flex items-center justify-between">
        <!-- <p class="text-sm font-semibold text-gray-900">${product.price}</p> -->
        <!-- <div 
          class="text-xs font-medium hover:bg-orange-500 text-black bg-brand-primary px-2 py-1 rounded transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100"
        >
          View Details
        </div> -->
      </div>
    </div>
  </a>
</div>
