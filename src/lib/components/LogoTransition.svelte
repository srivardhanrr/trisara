<script>
  import { onNavigate } from '$app/navigation';
  import { fade, fly } from 'svelte/transition';

  let transitioning = $state(false);
  let showLogo = $state(false);
  let exitTransition = false;

  onNavigate(() => {
    transitioning = true;
    setTimeout(() => showLogo = true, 500);

    return new Promise(resolve => {
      setTimeout(() => {
        showLogo = false;
        exitTransition = true;
        setTimeout(() => {
          transitioning = false;
          exitTransition = false;
          resolve();
        }, 300);
      }, 1500);
    });
  });
</script>

<div class={`fixed inset-x-0 bottom-0 bg-white transition-[height] duration-500 ease-in-out z-50 ${transitioning ? 'h-full' : 'h-0'}`}>
  {#if showLogo}
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" in:fade={{ duration: 300 }} out:fade={{ duration: 300 }}>
      <!-- Add your logo here -->
      <img src="/images/trisara-logo.png" alt="Logo" class="w-32 h-32 object-contain" /> <!-- Adjust size as needed -->
    </div>
  {/if}
</div>


