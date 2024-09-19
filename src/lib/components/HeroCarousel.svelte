<script lang="ts">
	import * as Carousel from '$lib/components/ui/carousel/index.js';

	import Autoplay from 'embla-carousel-autoplay';

	export let heroImages = [
		{
			title: 'Hero 1',
			image: '/images/home/hero1.jpg'
		},
		{
			title: 'Hero 1',
			image: '/images/home/hero3.jpg'
		},
		{
			title: 'Hero 1',
			image: '/images/home/hero2.jpg'
		},
		
	]; 

	const plugin = Autoplay({ delay: 4000, stopOnInteraction: true });
</script>

<Carousel.Root
	opts={{ align: 'start' }}
	plugins={[plugin]}
	class="w-full"
	on:mousenter={plugin.stop}
	on:mouseleave={plugin.reset}
>
	<Carousel.Content>
		{#each heroImages as heroImage}
			<Carousel.Item>
				<div class="relative md:min-h-[calc(100vh-80px)] h-64 overflow-hidden">
					<img
						class="left-0 top-0 h-full w-full object-fit"
						src={heroImage.image}
						alt="{heroImage.title}"
					/>
					<!-- <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
						<h2 class="text-xl text-white">{item.name}</h2>
					</div> -->
				</div>
			</Carousel.Item>
			
		{/each}
		<!--    </div>-->
	</Carousel.Content>
	<!-- <Carousel.Previous class="ml-16" />
	<Carousel.Next class="mr-16" /> -->
</Carousel.Root>
