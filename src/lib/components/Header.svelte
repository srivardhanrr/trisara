<script lang="ts">
    import { onMount } from 'svelte';
    import CircleUser from "lucide-svelte/icons/circle-user";
    import {Share2} from 'lucide-svelte';
    import Menu from "lucide-svelte/icons/menu";
    import Search from "lucide-svelte/icons/search";
    import {Button} from "$lib/components/ui/button";
    import {Input} from "$lib/components/ui/input";
    import * as Sheet from "$lib/components/ui/sheet";

    export let categories;
    export let cookbookCategories;

    let productsOpen = false;
    let cookbooksOpen = false;

    function openProducts() {
        productsOpen = true;
    }

    function closeProducts() {
        productsOpen = false;
    }

    function openCookbooks() {
        cookbooksOpen = true;
    }

    function closeCookbooks() {
        cookbooksOpen = false;
    }
</script>

<header class="bg-background z-50 sticky top-0 h-20 md:h-22 border-b md:px-8 lg:px-12">
    <div class="container mx-auto h-full flex items-center justify-between">
        <nav class="hidden md:flex items-center space-x-6 flex-1">
            <a href="/" class="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="/our-story" class="text-foreground hover:text-primary transition-colors">Our Story</a>
            
            <div class="dropdown" on:mouseenter={openProducts} on:mouseleave={closeProducts}>
                <button class="dropdown-trigger">All Products</button>
                {#if productsOpen}
                    <div class="dropdown-content">
                        <div class="dropdown-group">
                            <div class="dropdown-label">Categories</div>
                            <hr class="dropdown-separator" />
                            {#each categories as category}
                                <a href="/categories/{category.slug}" class="dropdown-item">{category.name}</a>
                            {/each}
                            <a href="/products" class="dropdown-item view-all">View All</a>
                        </div>
                    </div>
                {/if}
            </div>
            
            <div class="dropdown" on:mouseenter={openCookbooks} on:mouseleave={closeCookbooks}>
                <button class="dropdown-trigger">Cookbooks</button>
                {#if cookbooksOpen}
                    <div class="dropdown-content">
                        <div class="dropdown-group">
                            <div class="dropdown-label">Cookbook Categories</div>
                            <hr class="dropdown-separator" />
                            {#each cookbookCategories as cookbookCategory}
                                <div class="dropdown-sub">
                                <a href="/cookbooks/{cookbookCategory.slug}">
                                    <button class="dropdown-sub-trigger">{cookbookCategory.name}</button>
                                </a>
                                    <div class="dropdown-sub-content">
                                        {#each cookbookCategory.cookbooks as cookbook}
                                            <a href="/cookbooks/{cookbookCategory.slug}/{cookbook.slug}" class="dropdown-item truncate">{cookbook.title}</a>
                                        {/each}
                                    </div>
                                </div>
                            {/each}
                            <a href="/cookbooks" class="dropdown-item view-all">View All</a>
                        </div>
                    </div>
                {/if}
            </div>

            <a href="/contact" class="text-foreground hover:text-primary transition-colors">Contact Us</a>
        </nav>

        <Sheet.Root>
            <Sheet.Trigger asChild let:builder>
                <Button
                        variant="ghost"
                        size="icon"
                        class="md:hidden"
                        builders={[builder]}
                >
                    <Menu class="h-6 w-6"/>
                    <span class="sr-only">Toggle navigation menu</span>
                </Button>
            </Sheet.Trigger>
            <Sheet.Content side="left">
                <nav class="grid gap-6 text-lg font-medium pt-16">
                    <a href="/our-story" class="hover:text-primary">Our Story</a>
                    <a href="/products" class="hover:text-primary">All Products</a>
                    <a href="/cookbooks" class="hover:text-primary">Cookbooks</a>
                    <a href="/contact" class="hover:text-primary">Contact Us</a>
                </nav>
            </Sheet.Content>
        </Sheet.Root>

        <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <a href="/" class="flex items-center justify-center">
                <img src="/images/trisara-logo.png" alt="Trisara" class="h-16 w-16 rounded-full"/>
                <span class="sr-only">Trisara</span>
            </a>
        </div>

        <div class="flex items-center space-x-4 flex-1 justify-end">
            <form class="hidden md:block">
                <div class="relative">
                    <Search class="text-muted-foreground absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4"/>
                    <Input
                            type="search"
                            placeholder="Search products..."
                            class="pl-10 w-[200px] lg:w-[250px]"
                    />
                </div>
            </form>
            <Button
                variant="ghost"
                size="icon"
                class="rounded-full"
            >
                <Share2 class="h-6 w-6"/>
                <span class="sr-only">Toggle Social Links</span>
            </Button>
        </div>
    </div>
</header>

<style>
    .dropdown {
        position: relative;
        /* display: inline-block; */
    }

    .dropdown-trigger {
        background: none;
        border: none;
        cursor: pointer;
        font-size: 1rem;
        /* padding: 0.5rem 1rem; */
        transition: color 0.3s ease;
    }

    .dropdown-trigger:hover {
        color: #ff6b35; /* Adjust this color to match your primary color */
    }

    .dropdown-content {
        position: absolute;
        top: 100%;
        left: 0;
        background-color: #ffffff;
        min-width: 220px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        border-radius: 0.5rem;
        padding: 1rem;
        z-index: 1000;
        opacity: 0;
        transform: translateY(-10px);
        transition: opacity 0.3s ease, transform 0.3s ease;
    }

    .dropdown:hover .dropdown-content {
        opacity: 1;
        transform: translateY(0);
    }

    .dropdown-group {
        display: flex;
        flex-direction: column;
    }

    .dropdown-label {
        font-weight: 600;
        color: #ff6b35; /* Adjust this color to match your primary color */
        margin-bottom: 0.5rem;
    }

    .dropdown-separator {
        border: none;
        border-top: 1px solid #e2e8f0;
        margin: 0.5rem 0;
    }

    .dropdown-item {
        color: #4a5568;
        padding: 0.5rem 0;
        text-decoration: none;
        display: block;
        transition: color 0.2s ease, padding-left 0.2s ease;
    }

    .dropdown-item:hover {
        color: #ff6b35; /* Adjust this color to match your primary color */
        padding-left: 0.5rem;
    }

    .dropdown-item.view-all {
        font-weight: 600;
        margin-top: 0.5rem;
    }

    .dropdown-sub {
        position: relative;
    }

    .dropdown-sub-trigger {
        width: 100%;
        text-align: left;
        background: none;
        border: none;
        cursor: pointer;
        padding: 0.5rem 0;
        color: #4a5568;
        transition: color 0.2s ease, padding-left 0.2s ease;
    }

    .dropdown-sub-trigger:hover {
        color: #ff6b35; /* Adjust this color to match your primary color */
        padding-left: 0.5rem;
    }

    .dropdown-sub-content {
        display: none;
        position: absolute;
        left: 100%;
        top: 0;
        background-color: #ffffff;
        min-width: 200px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        border-radius: 0.5rem;
        padding: 1rem;
        z-index: 1000;
    }

    .dropdown-sub:hover .dropdown-sub-content {
        display: block;
    }
</style>
