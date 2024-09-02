<script lang="ts">
    import FeaturedProducts from "$lib/components/FeaturedProducts.svelte";
    import Newsletter from "$lib/components/Newsletter.svelte";
    import InfiniteScroll from '$lib/components/InfiniteScroll.svelte';
    import CategoriesCarousel from "$lib/components/CategoriesCarousel.svelte";
    import HeroCarousel from "$lib/components/HeroCarousel.svelte";
    import RoomCategories from "$lib/components/RoomCategories.svelte";
    import InstagramGallery from "$lib/components/InstagramGallery.svelte";
    import ProductCarousel from "$lib/components/ProductCarousel.svelte";
    import RecentPosts from "$lib/components/RecentPosts.svelte";
    import RecentPostNew from "$lib/components/RecentPostNew.svelte";
    import FeaturedSection from "$lib/components/FeaturedSection.svelte";
    import CollectionCarousel from "$lib/components/CollectionCarousel.svelte";
    import CollectionCarousel2 from "$lib/components/CollectionCarousel2.svelte";

    export let data;
</script>

<div class="flex min-h-screen w-full flex-col">
    <HeroCarousel/>
    <!--    <Hero/>-->
    <main class="flex flex-1 flex-col gap-4  md:gap-8 md:p-8">
        <FeaturedProducts/>
        <CategoriesCarousel categories={data.categories}/>
        <CollectionCarousel collection="{data.collection1}" />

        <!--        <Categories/>-->
<!--        <RoomCategories/>-->
        <InstagramGallery/>
<!--        <ProductCarousel products={data.collection1.products}/>-->
        <InfiniteScroll/>
        <CollectionCarousel collection="{data.collection1}" />
        <CollectionCarousel2 />
<!--                <Newsletter/>-->
        <FeaturedSection products="{data.collection1.products}"/>
        <!--        <RecentPosts/>-->
        <RecentPostNew/>
    </main>
</div>
