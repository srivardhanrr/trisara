<script lang="ts">
    import ProductsPage from "$lib/ProductsPage.svelte";

    export let data;

    $: ({collection} = data);

</script>

<ProductsPage products={collection.products} bannerImage={collection.image} showBanner=true title={collection.name} description={collection.description} />
