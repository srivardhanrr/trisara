<script lang="ts">
  import { Button } from "$lib/components/ui/button";
</script>

<section class="relative h-64 md:h-screen w-full overflow-hidden">
  <video
    class="absolute top-0 left-0 w-full h-full object-cover"
    autoplay
    loop
    muted
    playsinline
  >
    <source src="/video2.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  
  <div class="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
    <!-- <h1 class="text-5xl font-bold mb-4 text-orange-500">trisara</h1> -->
    <!-- <p class="text-xl mb-8">Reshaping education by merging academic wisdom with industry foresight</p> -->
    <!-- <Button variant="outline" class="bg-brand-burgundy text-brand-gold hover:bg-brand-dark-gold">
      Learn More
    </Button> -->
  </div>
</section>

<style>
  video::cue {
    opacity: 0;
  }
</style>
