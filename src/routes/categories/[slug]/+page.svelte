<script lang="ts">
	import Categories from './../../../lib/components/Categories.svelte';
    import ProductsPage from "$lib/ProductsPage.svelte";

    interface Props {
        data: any;
    }

    let { data }: Props = $props();

    let {category} = $derived(data);

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
