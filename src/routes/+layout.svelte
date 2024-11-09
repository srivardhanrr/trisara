<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer2.svelte';
	import { onNavigate } from '$app/navigation';
	import { transitioning } from '$lib/stores/transition';
	import LogoTransition from '$lib/components/LogoTransition.svelte';
	import { fly } from 'svelte/transition';
	import { page } from '$app/stores';
	import '@fontsource/noto-serif-jp';
    import WhatsAppButton from '$lib/components/WhatsAppButton.svelte';
	import BackToTopButton from '$lib/components/BackToTopButton.svelte';
	import { browser } from '$app/environment'
    import { onMount, onDestroy } from 'svelte'
    import { initLenis, destroyLenis } from '$lib/lenis'

    onMount(() => {
        if (browser) {
            initLenis()
        }
    })

    onDestroy(() => {
        if (browser) {
            destroyLenis()
        }
    })

	export let data;
</script>

<div class="app">
	<Header categories={data.categories} cookbookCategories={data.cookbookCategories} />

	<main>
		{#key $page.url.pathname}
			<div in:fly={{ y: 50, duration: 100, delay: 100 }}>
				<slot />
			</div>
		{/key}
		<Footer />
        <BackToTopButton />
		<WhatsAppButton />
	</main>
</div>

<LogoTransition />
