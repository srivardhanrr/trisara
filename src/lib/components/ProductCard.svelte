<script lang="ts">
    import {Card, CardContent, CardFooter} from "$lib/components/ui/card";
    import {Badge} from "$lib/components/ui/badge";
    import {Button} from "$lib/components/ui/button";
    import Heart from "lucide-svelte/icons/heart";
    import Eye from "lucide-svelte/icons/eye";

    export let product;
</script>

<!--<Card class="group overflow-hidden shadow-none rounded-none">-->
<!--    <a href="/products/{product.slug}">-->

<!--        <CardContent class="p-0 relative aspect-square">-->
<!--            <img-->
<!--                    src={product.images[0].image}-->
<!--                    alt={product.name}-->
<!--                    class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"-->
<!--            />-->
<!--            &lt;!&ndash;  {#if discount}&ndash;&gt;-->
<!--            &lt;!&ndash;<span class="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">&ndash;&gt;-->
<!--            &lt;!&ndash;  -{discount}%&ndash;&gt;-->
<!--            &lt;!&ndash;</span>&ndash;&gt;-->
<!--            &lt;!&ndash;  {/if}&ndash;&gt;-->
<!--            <div class="absolute top-2 left-2 flex space-x-2">-->
<!--                <Badge>New</Badge>-->
<!--                &lt;!&ndash;            <Button variant="ghost" size="icon" class="bg-white bg-opacity-80 hover:bg-opacity-100">&ndash;&gt;-->
<!--                &lt;!&ndash;                <Heart class="h-4 w-4"/>&ndash;&gt;-->
<!--                &lt;!&ndash;            </Button>&ndash;&gt;-->
<!--                &lt;!&ndash;            <Button variant="ghost" size="icon" class="bg-white bg-opacity-80 hover:bg-opacity-100">&ndash;&gt;-->
<!--                &lt;!&ndash;                <Eye class="h-4 w-4"/>&ndash;&gt;-->
<!--                &lt;!&ndash;            </Button>&ndash;&gt;-->
<!--            </div>-->
<!--            <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>-->
<!--        </CardContent>-->
<!--        <CardFooter class="flex flex-col items-start p-4">-->
<!--            <h3 class="md:text-md font-semibold text-gray-700 line-clamp-2">{product.category.name}</h3>-->
<!--            <h3 class="md:text-lg font-semibold mb-2 line-clamp-2">{product.name}</h3>-->
<!--            &lt;!&ndash;        <div class="flex items-center mb-2">&ndash;&gt;-->
<!--            &lt;!&ndash;            <span class="font-bold text-lg">${}</span>&ndash;&gt;-->
<!--            &lt;!&ndash;            {#if originalPrice}&ndash;&gt;-->
<!--            &lt;!&ndash;                <span class="ml-2 text-sm text-gray-500 line-through">${originalPrice}</span>&ndash;&gt;-->
<!--            &lt;!&ndash;            {/if}&ndash;&gt;-->
<!--            &lt;!&ndash;        </div>&ndash;&gt;-->
<!--        </CardFooter>-->
<!--    </a>-->
<!--</Card>-->


<div class="relative overflow-hidden rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
    <a href="/products/{product.slug}">
  <div class="relative w-full h-36 md:h-64 overflow-hidden">
    <img src="{product.images[0].image}" alt="Product" class="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110" />
    <img src="{product.images[1].image}" alt="Product Hover" class="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100" />
  </div>
  <div class="p-4">
    <h3 class="text-md md:text-lg font-semibold">{product.name}</h3>
    <p class="text-sm text-gray-600">{product.material}</p>
  </div>
    </a>
</div>

<style>
  .hover\:opacity-100:hover {
    opacity: 1;
  }
</style>
