<script lang="ts">
	import CategoriesCarousel from '$lib/components/CategoriesCarousel.svelte';
	import HeroCarousel from '$lib/components/HeroCarousel.svelte';
	import InstagramGallery from '$lib/components/InstagramGallery.svelte';
	import RecentPostNew from '$lib/components/RecentPostNew.svelte';
	import CollectionCarousel from '$lib/components/CollectionCarousel.svelte';
	import NewCategories from '$lib/components/ui/NewCategories.svelte';
	import InfiniteScroll from '$lib/components/InfiniteScroll.svelte';
	import { Card, CardHeader, CardTitle, CardContent } from '$lib/components/ui/card';
	// import { Heading, Text } from '@/components/ui/typography';
	export let data;
</script>

<svelte:head>
	<title>Trisara Homeware | Home</title>
	<meta name="description" content="Trisara Homeware | Home" />
</svelte:head>

<div class="flex w-full flex-col">
	{#if data.homePageSettings['hero_images']}
		<HeroCarousel heroImages={data.homePageSettings['hero_images']} />
	{:else}
		<HeroCarousel />
	{/if}
	<main class="flex flex-1 flex-col gap-4 md:gap-8">
		<div class="pb-10 pt-8 md:px-8">
			<CategoriesCarousel categories={data.categories} />
		</div>
		<CollectionCarousel collection={data.homePageSettings['collection_1']} />
	
		  <Card class="bg-white shadow-md rounded-md p-8">
			<CardHeader>
			  <CardTitle>
				<h1  class="text-orange-500">How We Work</h1>
			  </CardTitle>
			</CardHeader>
			<CardContent>
			  <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
				<div>
				  <h4 class="text-black">Sourcing</h4>
				  <p class="text-gray-700">
					Responsible and ethical sourcing is paramount. We prioritize partnering with suppliers who share our values. This ensures we use the finest materials.
				  </p>
				</div>
				<div>
				  <h4 class="text-black">Precision</h4>
				  <p class="text-gray-700">
					Meticulous attention to detail for packaging and precision with a subtle design quotient, allows our customers to experience what Trisara stands for.
				  </p>
				</div>
				<div>
				  <h4   class="text-black">Services</h4>
				  <p class="text-gray-700">
					Customer service is the cornerstone of Trisara. With emphasis given towards a customer centric approach where, ever feedback is considered with utmost priority.
				  </p>
				</div>
				<div>
				  <h4   class="text-black">Employee Centric</h4>
				  <p class="text-gray-700">
					We believe that supporting our exceptional work force, translates to even greater heights in terms of productivity and services.
				  </p>
				</div>
			  </div>
			</CardContent>
		  </Card>
		<div class="md:mb-10">
			<NewCategories series={data.series} />
		</div>
		<InfiniteScroll />

		<CollectionCarousel collection={data.homePageSettings['collection_2']} />

		<InstagramGallery instagramPosts={data.instagramPosts} />

		<RecentPostNew posts={data.blogPosts} />
	</main>
</div>
