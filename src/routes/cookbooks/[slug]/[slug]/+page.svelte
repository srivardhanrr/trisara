<script>

  /** @type {{data: any}} */
  let { data } = $props();

    let {cookbook} = $derived(data);

  const recipe = {
    name: "Paneer Bhurji Wraps",
    description: "A delicious and quick Indian-inspired wrap filled with spicy scrambled paneer.",
    image: "https://via.placeholder.com/800x600?text=Paneer+Bhurji+Wraps",
    ingredients: [
      "100g paneer, crumbled",
      "1 small onion, finely chopped",
      "1 small tomato, finely chopped",
      "1 green chili, finely chopped (optional)",
      "1/4 tsp turmeric powder",
      "1/2 tsp coriander powder",
      "1/2 tsp cumin seeds",
      "Fresh coriander leaves, chopped",
      "2 whole wheat tortillas",
      "Salt, to taste",
      "1 tbsp oil or ghee"
    ],
    method: [
      "Heat oil in a pan, add cumin seeds and let them splutter.",
      "Add chopped onions and sauté until golden brown.",
      "Add tomatoes, green chili, turmeric, coriander powder, and salt. Cook until tomatoes are soft.",
      "Add crumbled paneer and mix well. Cook for 2-3 minutes.",
      "Garnish with fresh coriander and wrap the mixture in warm tortillas."
    ]
  };
</script>

<svelte:head>
	<title>Trisara | {cookbook.title}</title>
	<meta
		name="description"
		content="{cookbook.description}"
	/>
</svelte:head>

<div class="bg-gray-100 min-h-screen py-12">
  <div class="container mx-auto px-4 max-w-4xl">
    <h1 class="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-8">{cookbook.title}</h1>

    <div class="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
      {#if cookbook.image}
        <img src={cookbook.image} alt={cookbook.title} class="w-full h-80 object-cover">
      {:else}
        <img src="https://placehold.co/600x400" alt="Default Cookbook Image" class="w-full h-80 object-cover">
      {/if}
      <div class="p-6">
        <p class="text-lg text-gray-700 mb-4">{cookbook.description}</p>
      </div>
    </div>

    <div class="grid md:grid-cols-2 gap-8">
      <div>
        <h2 class="text-2xl font-semibold text-orange-500 mb-4">Ingredients</h2>
        <ul class="list-disc pl-5 space-y-2">
          {#each cookbook.ingredients as ingredient}
            <li class="text-gray-700">{ingredient.description}</li>
          {/each}
        </ul>
      </div>

      <div>
        <h2 class="text-2xl font-semibold text-orange-500 mb-4">Method</h2>
        <ol class="list-decimal pl-5 space-y-4">
          {#each cookbook.preparation_steps as step}
            <li class="text-gray-700">{step.description}</li>
          {/each}
        </ol>
      </div>
    </div>
  </div>
</div>
