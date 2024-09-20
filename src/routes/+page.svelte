<script lang="ts">
	import FeaturedProducts from '$lib/components/FeaturedProducts.svelte';
	import Newsletter from '$lib/components/Newsletter.svelte';
	import InfiniteScroll from '$lib/components/InfiniteScroll.svelte';
	import CategoriesCarousel from '$lib/components/CategoriesCarousel.svelte';
	import HeroCarousel from '$lib/components/HeroCarousel.svelte';
	import RoomCategories from '$lib/components/RoomCategories.svelte';
	import InstagramGallery from '$lib/components/InstagramGallery.svelte';
	import ProductCarousel from '$lib/components/ProductCarousel.svelte';
	import RecentPosts from '$lib/components/RecentPosts.svelte';
	import RecentPostNew from '$lib/components/RecentPostNew.svelte';
	import FeaturedSection from '$lib/components/FeaturedSection.svelte';
	import CollectionCarousel from '$lib/components/CollectionCarousel.svelte';
	import CollectionCarousel2 from '$lib/components/CollectionCarousel2.svelte';
	import Header from '$lib/components/Header.svelte';
	import NewCategories from '$lib/components/ui/NewCategories.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import CategoriesOpacity from '$lib/components/CategoriesOpacity.svelte';

	export let data;
</script>

<svelte:head>
	<title>Trisara Homeware | Home</title>
	<meta name="description" content="Trisara Homeware | Home" />
</svelte:head>

<div class="flex  w-full flex-col">
	<!-- <Hero /> -->
	 <div class="overflow-hidden">
	<HeroCarousel heroImages={data.heroImages} />
</div>
	<main class="flex flex-1 flex-col gap-4 md:gap-8">
		<!-- <div class="pt-20 hidden md:block">
			<CategoriesOpacity categories={data.categories} />
		</div> -->
		<div class="md:px-8 pt-8 pb-10">
			<CategoriesCarousel categories={data.categories} />
		</div>
		<CollectionCarousel collection={data.collection1} />
		̥
		<div class="md:mb-10">
			<NewCategories series={data.series} />
		</div>

		<!-- <Categories/>-->
		<!--        <RoomCategories/>-->
		<!-- <div class="md:px-8">
            <InfiniteScroll/>
        </div> -->
		{#if data.collection2}
        <CollectionCarousel collection="{data.collection2}" />
		{/if}
		<InstagramGallery instagramPosts={data.instagramPosts} />

		<!--        <ProductCarousel products={data.collection1.products}/>-->
		<!--        <CollectionCarousel2 />-->
		<!--                <Newsletter/>-->
		<!--        <FeaturedSection products="{data.collection1.products}"/>-->
		<!--        <RecentPosts/>-->
		<RecentPostNew posts={data.blogPosts} />
	</main>
</div>
