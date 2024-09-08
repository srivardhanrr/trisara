<script lang="ts">
    import ProductsPage from "$lib/ProductsPage.svelte";

    export let data;

    $: ({collection} = data);

</script>

<svelte:head>
	<title>Trisara | {collection.name}</title>
	<meta
		name="description"
		content="{collection.description}"
	/>
</svelte:head>

<ProductsPage products={collection.products} bannerImage={collection.image} showBanner=true title={collection.name} description={collection.description} />
