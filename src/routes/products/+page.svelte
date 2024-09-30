<script lang="ts">
    import ProductsPage from "$lib/ProductsPage.svelte";

    export let data;

    $: ({products} = data);

</script>

<svelte:head>
	<title>Trisara | All Products</title>
</svelte:head>

<ProductsPage products={products} showBanner=true categories={data.categories} />
