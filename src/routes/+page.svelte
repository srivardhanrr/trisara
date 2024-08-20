<script lang="ts">
    import Activity from "lucide-svelte/icons/activity";
    import ArrowUpRight from "lucide-svelte/icons/arrow-up-right";
    import CreditCard from "lucide-svelte/icons/credit-card";
    import DollarSign from "lucide-svelte/icons/dollar-sign";
    import Users from "lucide-svelte/icons/users";
    import * as Avatar from "$lib/components/ui/avatar/index.js";
    import {Badge} from "$lib/components/ui/badge/index.js";
    import {Button} from "$lib/components/ui/button/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
    import * as Sheet from "$lib/components/ui/sheet/index.js";
    import * as Table from "$lib/components/ui/table/index.js";
    import Hero from "$lib/components/Hero.svelte";
    import Categories from "$lib/components/Categories.svelte";
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

    export let data;
</script>

<div class="flex min-h-screen w-full flex-col">
    <HeroCarousel/>
    <!--    <Hero/>-->
    <main class="flex flex-1 flex-col gap-4  md:gap-8 md:p-8">
        <FeaturedProducts/>
        <CategoriesCarousel categories={data.categories}/>
        <!--        <Categories/>-->
        <RoomCategories/>
        <InstagramGallery/>
<!--        <ProductCarousel products={data.collection.products}/>-->
        <CollectionCarousel collection="{data.collection1}" />
        <InfiniteScroll/>
        <!--        <Newsletter/>-->
<!--        <FeaturedSection/>-->
        <!--        <RecentPosts/>-->
        <RecentPostNew/>
    </main>
</div>
