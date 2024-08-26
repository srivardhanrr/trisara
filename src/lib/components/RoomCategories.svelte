<script>
  const categories = [
    { name: "Living Room", image: "https://new-ella-demo-11.myshopify.com/cdn/shop/products/15727.jpg?v=1658118570" },
    { name: "Bedroom", image: "https://new-ella-demo-11.myshopify.com/cdn/shop/products/15685.jpg?v=1658118570" },
    { name: "Bedroom", image: "https://new-ella-demo-11.myshopify.com/cdn/shop/products/15685.jpg?v=1658118570" },
    { name: "Bedroom", image: "https://new-ella-demo-11.myshopify.com/cdn/shop/products/15685.jpg?v=1658118570" },
    { name: "Bedroom", image: "https://new-ella-demo-11.myshopify.com/cdn/shop/products/15685.jpg?v=1658118570" },
    { name: "Bedroom", image: "https://new-ella-demo-11.myshopify.com/cdn/shop/products/15685.jpg?v=1658118570" },
    // { name: "Bedroom", image: "https://new-ella-demo-11.myshopify.com/cdn/shop/products/15685.jpg?v=1658118570" },
  ];
</script>

<section class="bg-orange-50">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {#each categories as category}
        <div class="relative overflow-hidden group">
          <img src={category.image} alt={category.name} class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
          <div class="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6">
            <div>
              <h3 class="text-white text-2xl font-semibold mb-2">{category.name}</h3>
              <button class="text-white bg-transparent border border-white px-4 py-2 hover:bg-white hover:text-black transition-colors duration-300">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

