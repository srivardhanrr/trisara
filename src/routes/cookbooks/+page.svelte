<script>
	export let data;
</script>

<svelte:head>
	<title>Trisara | Cookbooks</title>
</svelte:head>

<div class="min-h-screen bg-gray-100 py-12">
	<div class="container mx-auto px-4">
		<h1 class="mb-12 text-center text-4xl font-bold md:text-5xl">Cookbook</h1>

		{#each data.cookbookCategories as cookbookCategory}
			<div class="mb-16">
				<h2 class="mb-6 text-3xl font-semibold text-orange-500">{cookbookCategory.name}</h2>
				<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
					{#each cookbookCategory.cookbooks as cookbook}
						<div class="overflow-hidden rounded-lg bg-white shadow-md">
								<a href="/cookbooks/{cookbookCategory.slug}/{cookbook.slug}">
							<div class="relative pb-[100%]">
								<img
									src={cookbook.image}
									alt={cookbook.name}
									class="absolute left-0 top-0 h-full w-full object-cover"
								/>
							</div>
							<div class="p-4">
									<h3 class="mb-2 text-xl font-semibold text-orange-500">{cookbook.title}</h3>
								<!-- <p class="truncate text-gray-600">{cookbook.description}</p> -->
							</div>
								</a>

						</div>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</div>
