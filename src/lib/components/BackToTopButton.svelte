<script>
    import { onMount } from 'svelte';
    
    let showButton = false;
  
    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  
    function handleScroll() {
      showButton = window.pageYOffset > 300;
    }
  
    onMount(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    });
  </script>
  
  {#if showButton}
    <button
      on:click={scrollToTop}
      class="fixed bottom-28 right-8 bg-orange-500 text-white rounded-full p-3 shadow-lg hover:bg-orange-500 transition-colors duration-300 z-50"
      aria-label="Back to top"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  {/if}
  