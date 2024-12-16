<script lang="ts">
    import ProductsPage from "$lib/ProductsPage.svelte";

    interface Props {
        data: any;
    }

    let { data }: Props = $props();

    let {products} = $derived(data);

</script>

<svelte:head>
	<title>Trisara | All Products</title>
</svelte:head>

<ProductsPage products={products} showBanner={true} categories={data.categories} />
