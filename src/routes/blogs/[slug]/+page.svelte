<script lang="ts">
    import { fade } from 'svelte/transition';
    import { Calendar, Clock, ChevronLeft } from 'lucide-svelte';
  
    export let data;
    let post = data.post;
    let updatedContent = data.updatedContent;
  </script>
  
  <svelte:head>
    <title>{post ? post.title : 'Blog'} - Leadership Innovation World</title>
  </svelte:head>
  
  <div class="bg-white min-h-screen">
    <div class="container mx-auto px-4 py-16">
      {#if post}
        <article transition:fade="{{ duration: 300 }}">
          <a href="/blogs" class="inline-flex items-center text-brand-burgundy hover:text-brand-gold transition-colors mb-8">
            <ChevronLeft size={20} />
            <span class="ml-2 font-bricolage">Back to all posts</span>
          </a>
  
          <h1 class="font-playfair text-4xl md:text-6xl text-center font-bold mb-6 text-brand-burgundy">{post.title}</h1>
          {#if post.image}
          <img 
            src={post.image} 
            alt={post.title} 
            class="w-full md:w-2/3 lg:w-1/3 mx-auto h-[30vh] object-cover rounded-lg shadow-lg mb-12"
          />
        {/if}
  
          <div class="prose prose-lg max-w-none font-inter">
            {@html updatedContent}
          </div>
        </article>
      {:else}
        <p class="text-center font-bricolage text-xl text-brand-burgundy">Post not found.</p>
      {/if}
    </div>
  </div>
