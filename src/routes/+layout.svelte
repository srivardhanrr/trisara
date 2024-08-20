<script>
    import '../app.css';
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import {onNavigate} from '$app/navigation';
    import {transitioning} from '$lib/stores/transition';
    import LogoTransition from '$lib/components/LogoTransition.svelte';

    let transitionDuration = 1000; // Adjust as needed

    onNavigate((navigation) => {
        if (!navigation.from || !navigation.to || navigation.type === 'popstate') {
            return;
        }

        transitioning.set(true);

        return new Promise((resolve) => {
            setTimeout(() => {
                transitioning.set(false);
                resolve();
            }, transitionDuration);
        });
    });
</script>

<div class="app">
    <Header/>
    <main>
        <slot/>
        <Footer/>
    </main>
</div>

<LogoTransition duration={transitionDuration}/>
