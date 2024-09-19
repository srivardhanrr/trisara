<script lang="ts">
    // Import necessary components and functions
    import { onMount } from 'svelte';
  
    // Define an interface for the gallery items
    interface GalleryItem {
      image: string;
      description: string;
      link: string;
    }

    export let data;
    let galleryItems: GalleryItem[] = data.galleryItems;
  
  </script>
  
  <svelte:head>
    <title>Gallery | Your Site Name</title>
    <meta name="description" content="Explore our gallery of beautiful images" />
  </svelte:head>
  
  <div class="container mx-auto px-4 py-8">
    <h1 class="mb-8 text-3xl font-bold text-center text-orange-500">Gallery</h1>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {#each galleryItems as item}
        <div class="relative aspect-square overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <img src={item.image} alt={item.description} class="h-full w-full object-cover" />
            <!-- <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p class="text-white text-center p-4">{item.description}</p>
            </div> -->
          </a>
        </div>
      {/each}
    </div>
  </div>
  