<script lang="ts">
	import CategoriesCarousel from '$lib/components/CategoriesCarousel.svelte';
	import HeroCarousel from '$lib/components/HeroCarousel.svelte';
	import InstagramGallery from '$lib/components/InstagramGallery.svelte';
	import RecentPostNew from '$lib/components/RecentPostNew.svelte';
	import CollectionCarousel from '$lib/components/CollectionCarousel.svelte';
	import NewCategories from '$lib/components/ui/NewCategories.svelte';
	import InfiniteScroll from '$lib/components/InfiniteScroll.svelte';
	import { Card, CardHeader, CardTitle, CardContent } from '$lib/components/ui/card';
	import HowWeWork from '$lib/components/HowWeWork.svelte';
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
		<div class="container">
			<InfiniteScroll />
		</div>
		<div class="md:mb-10">
			<NewCategories series={data.series} />
		</div>
		<HowWeWork />
		<!-- <InfiniteScroll /> -->

		<CollectionCarousel collection={data.homePageSettings['collection_2']} />

		<InstagramGallery instagramPosts={data.instagramPosts} />

		<RecentPostNew posts={data.blogPosts} />
	</main>
</div>
