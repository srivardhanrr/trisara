<script>
  const categories = [
    { name: "Kitchen", image: "https://via.placeholder.com/400" },
    { name: "Living Room", image: "https://via.placeholder.com/400" },
    { name: "Bedroom", image: "https://via.placeholder.com/400" },
    { name: "Dining", image: "https://via.placeholder.com/400" },
  ];
</script>

<section id="about" class="bg-gray-100 py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold mb-8 text-center">Shop by Category</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {#each categories as category}
        <div class="relative overflow-hidden rounded-lg shadow-md">
          <img src={category.image} alt={category.name} class="w-full h-64 object-cover" />
          <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h3 class="text-white text-2xl font-bold">{category.name}</h3>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
