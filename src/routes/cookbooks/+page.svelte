<script>

    export let data;

</script>

<svelte:head>
	<title>Trisara | Cookbooks</title>
</svelte:head>

<div class="bg-gray-100 min-h-screen py-12">
    <div class="container mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-bold text-center text-orange-500 mb-12">Our Cookbooks</h1>

        {#each data.cookbookCategories as cookbookCategory}
            <div class="mb-16">
                <h2 class="text-3xl font-semibold text-orange-500 mb-6">{cookbookCategory.name}</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {#each cookbookCategory.cookbooks as cookbook}
                        <div class="bg-white rounded-lg shadow-md overflow-hidden">
                            <div class="relative pb-[100%]">
                                <img
                                        src={cookbook.image}
                                        alt={cookbook.name}
                                        class="absolute top-0 left-0 w-full h-full object-cover"
                                />
                            </div>
                            <div class="p-4">
                                <a href="/cookbooks/{cookbook.slug}">
                                    <h3 class="text-xl font-semibold text-gray-800 mb-2">{cookbook.title}</h3>
                                </a>
                                <p class="text-gray-600">{cookbook.description}</p>
                            </div>
                        </div>
                    {/each}
                </div>
            </div>
        {/each}
    </div>
</div>
