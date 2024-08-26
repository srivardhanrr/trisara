<script lang="ts">
    import ProductsPage from "$lib/ProductsPage.svelte";

    export let data;

    $: ({category} = data);

</script>

<ProductsPage products={category.products} bannerImage={category.image} showBanner=true title={category.name} description={category.description} />
