<script lang="ts">
  import { fade } from 'svelte/transition';
  import { transitioning } from '$lib/stores/transition';

  export let duration = 600;
</script>

{#if $transitioning}
  <div
    class="logo-container bg-white"
    in:fade={{ duration }}
    out:fade={{ duration }}
  >
    <!-- Replace with your company logo -->
    <img src="/images/trisara-logo.png" alt="Company Logo" class="logo" />
  </div>
{/if}

<style>
  .logo-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.9);
    z-index: 1000;
  }

  .logo {
    width: 150px;
    height: auto;
  }
</style>
