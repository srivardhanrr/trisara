<script>
    import '../app.css';
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import {onNavigate} from '$app/navigation';
    import {transitioning} from '$lib/stores/transition';
    import LogoTransition from '$lib/components/LogoTransition.svelte';
    import {fly} from 'svelte/transition';
    import {page} from '$app/stores';

    // let transitionDuration = 1000; // Adjust as needed

    // onNavigate((navigation) => {
    //     if (!navigation.from || !navigation.to || navigation.type === 'popstate') {
    //         return;
    //     }
    //
    //     transitioning.set(true);
    //
    //     return new Promise((resolve) => {
    //         setTimeout(() => {
    //             transitioning.set(false);
    //             resolve();
    //         }, transitionDuration);
    //     });
    // });
</script>

<div class="app">
    <Header/>
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

