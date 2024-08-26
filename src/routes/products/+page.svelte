<script lang="ts">
    import ProductsPage from "$lib/ProductsPage.svelte";

    export let data;

    $: ({products} = data);

</script>

<ProductsPage products={products} showBanner=true />
