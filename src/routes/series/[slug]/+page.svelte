<script lang="ts">
    import ProductsPage from "$lib/ProductsPage.svelte";

    export let data;

    $: ({serie} = data);

</script>

<svelte:head>
	<title>Trisara | {serie.name}</title>
	<meta
		name="description"
		content="{serie.description}"
	/>
</svelte:head>

<ProductsPage products={serie.products} bannerImage={serie.image} showBanner=true title={serie.name} description={serie.description} />
