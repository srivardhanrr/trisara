<script lang="ts">
    import CircleUser from "lucide-svelte/icons/circle-user";
    import {Share2} from 'lucide-svelte';
    import Menu from "lucide-svelte/icons/menu";
    import Search from "lucide-svelte/icons/search";
    import {Button} from "$lib/components/ui/button";
    import {Input} from "$lib/components/ui/input";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
    import * as Sheet from "$lib/components/ui/sheet";

    export let categories;
    export let cookbookCategories;

</script>

<header class="bg-background z-50 sticky top-0 h-20 md:h-22 border-b md:px-8 lg:px-12">
    <div class="container mx-auto h-full flex items-center justify-between">
        <nav class="hidden md:flex items-center space-x-6 flex-1">
            <a href="/our-story" class="text-foreground hover:text-primary transition-colors">Our Story</a>
            <DropdownMenu.Root>
                <DropdownMenu.Trigger>All Products</DropdownMenu.Trigger>
                <DropdownMenu.Content>
                    <DropdownMenu.Group>
                        <DropdownMenu.Label class='text-orange-500'>Categories</DropdownMenu.Label>
                        <DropdownMenu.Separator/>
                        {#each categories as category}
                            <DropdownMenu.Item><a href="/categories/{category.slug}">{category.name}</a>
                            </DropdownMenu.Item>
                        {/each}
                        <DropdownMenu.Item><a href="/categories">View All</a>
                        </DropdownMenu.Item>
                    </DropdownMenu.Group>
                </DropdownMenu.Content>
            </DropdownMenu.Root>
            <DropdownMenu.Root>
                <DropdownMenu.Trigger>Cookbooks</DropdownMenu.Trigger>
                <DropdownMenu.Content>
                    <DropdownMenu.Group>
                        <DropdownMenu.Label class="text-orange-500">Cookbook Categories</DropdownMenu.Label>
                        <DropdownMenu.Separator/>
                        {#each cookbookCategories as cookbookCategory}
                           <DropdownMenu.Sub>
                                <DropdownMenu.SubTrigger>{cookbookCategory.name}</DropdownMenu.SubTrigger>
                                <DropdownMenu.SubContent>
                                    {#each cookbookCategory.cookbooks as cookbook}
                                        <DropdownMenu.Item class="truncate"><a href="/cookbooks/{cookbook.slug}">{cookbook.title}</a></DropdownMenu.Item>
                                    {/each}
                                </DropdownMenu.SubContent>
                            </DropdownMenu.Sub>
                        {/each}
                    </DropdownMenu.Group>
                </DropdownMenu.Content>
            </DropdownMenu.Root>

            <!--            <a href="/cookbooks" class="text-foreground hover:text-primary transition-colors">Cookbooks</a>-->
            <a href="/contact" class="text-foreground hover:text-primary transition-colors">Contact
                Us</a>
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
                <img src="/images/trisara-logo.png" alt="Trisara"
                     class="h-16 w-16 rounded-full"/>
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
            <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild let:builder>
                    <Button
                            builders={[builder]}
                            variant="ghost"
                            size="icon"
                            class="rounded-full"
                    >
                        <Share2 class="h-6 w-6"/>
                        <span class="sr-only">Toggle Social Links</span>
                    </Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content align="end">
                    <!--                    <DropdownMenu.Label>Social Media</DropdownMenu.Label>-->
                    <!--                    <DropdownMenu.Separator/>-->
                    <DropdownMenu.Item>Instagram</DropdownMenu.Item>
                    <DropdownMenu.Item>Facebook</DropdownMenu.Item>
                    <DropdownMenu.Item>X</DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Root>
        </div>
    </div>
</header>
