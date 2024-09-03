<script lang="ts">
    import '../app.css';
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import {onNavigate} from '$app/navigation';
    import {transitioning} from '$lib/stores/transition';
    import LogoTransition from '$lib/components/LogoTransition.svelte';
    import {fly} from 'svelte/transition';
    import {page} from '$app/stores';
    import "@fontsource/noto-serif-jp";

    export let data;


</script>

<div class="app">
    <Header categories={data.categories} cookbookCategories={data.cookbookCategories}/>

    <main>
        {#key $page.url.pathname}
            <div in:fly={{ y: 50, duration: 100, delay: 100 }}>
                <slot/>
            </div>
        {/key}
        <Footer/>
    </main>
</div>

<LogoTransition/>
