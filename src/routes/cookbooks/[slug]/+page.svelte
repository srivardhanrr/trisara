<script>
	export let data;

	$: ({ cookbookCategory } = data);
</script>

<svelte:head>
	<title>Trisara | {cookbookCategory.name}</title>
</svelte:head>

<div class="min-h-screen bg-gray-100 py-12">
	<div class="container mx-auto px-4">
		<h1 class="mb-12 text-center text-4xl font-bold text-orange-500 md:text-5xl">{cookbookCategory.name}</h1>

		<div class="mb-16">
			<!-- <h2 class="mb-6 text-3xl font-semibold text-orange-500">{cookbookCategory.name}</h2> -->
			<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{#each cookbookCategory.cookbooks as cookbook}
					<div class="overflow-hidden rounded-lg bg-white shadow-md">
						<div class="relative pb-[100%]">
							<img
								src={cookbook.image}
								alt={cookbook.name}
								class="absolute left-0 top-0 h-full w-full object-cover"
							/>
						</div>
						<div class="p-4">
							<a href="/cookbooks/{cookbookCategory.slug}/{cookbook.slug}">
								<h3 class="mb-2 text-xl font-semibold text-gray-800">{cookbook.title}</h3>
							</a>
							<p class="text-gray-600">{cookbook.description}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
