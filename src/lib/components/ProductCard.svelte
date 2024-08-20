<script lang="ts">
    import {Card, CardContent, CardFooter} from "$lib/components/ui/card";
      import { Badge } from "$lib/components/ui/badge";
    import {Button} from "$lib/components/ui/button";
    import Heart from "lucide-svelte/icons/heart";
    import Eye from "lucide-svelte/icons/eye";

    export let product;
</script>

<Card class="group overflow-hidden shadow-none rounded-none">
        <a href="/products/{product.slug}">

    <CardContent class="p-0 relative aspect-square">
        <img
        src={product.images[0].image}
        alt={product.name}
        class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <!--  {#if discount}-->
      <!--<span class="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">-->
      <!--  -{discount}%-->
      <!--</span>-->
      <!--  {/if}-->
        <div class="absolute top-2 left-2 flex space-x-2">
            <Badge>New</Badge>
<!--            <Button variant="ghost" size="icon" class="bg-white bg-opacity-80 hover:bg-opacity-100">-->
<!--                <Heart class="h-4 w-4"/>-->
<!--            </Button>-->
<!--            <Button variant="ghost" size="icon" class="bg-white bg-opacity-80 hover:bg-opacity-100">-->
<!--                <Eye class="h-4 w-4"/>-->
<!--            </Button>-->
        </div>
        <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
    </CardContent>
    <CardFooter class="flex flex-col items-start p-4">
        <h3 class="md:text-md font-semibold text-gray-700 line-clamp-2">{product.category.name}</h3>
        <h3 class="md:text-lg font-semibold mb-2 line-clamp-2">{product.name}</h3>
<!--        <div class="flex items-center mb-2">-->
<!--            <span class="font-bold text-lg">${}</span>-->
<!--            {#if originalPrice}-->
<!--                <span class="ml-2 text-sm text-gray-500 line-through">${originalPrice}</span>-->
<!--            {/if}-->
<!--        </div>-->
</CardFooter>
        </a>
</Card>
