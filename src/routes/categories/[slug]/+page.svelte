<script lang="ts">
	import Categories from './../../../lib/components/Categories.svelte';
    import ProductsPage from "$lib/ProductsPage.svelte";

    export let data;

    $: ({category} = data);

</script>

<svelte:head>
	<title>Trisara | {category.name}</title>
	<meta
		name="description"
		content="{category.description}"
	/>
</svelte:head>

<ProductsPage 
    products={category.products} 
    bannerImage={category.image} 
    showBanner={true} 
    title={category.name} 
    description={category.description} 
    categories={data.categories}
/>
