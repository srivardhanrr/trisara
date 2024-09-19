<script lang="ts">
	import * as Carousel from '$lib/components/ui/carousel/index.js';

	import Autoplay from 'embla-carousel-autoplay';

	const items = [
		{
			name: 'Hero 1',
			src: '/images/home/hero1.jpg'
		},
		{
			name: 'Hero 1',
			src: '/images/home/hero3.jpg'
		},
		{
			name: 'Hero 1',
			src: '/images/home/hero2.jpg'
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
		{#each items as item}
			<Carousel.Item>
				<div class="relative md:min-h-screen h-64 overflow-hidden lg:h-full">
					<img
						class="left-0 top-0 h-full w-full object-cover"
						src={item.src}
						alt="Kitchen utilities"
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
