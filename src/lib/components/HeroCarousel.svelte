<script lang="ts">
	import * as Carousel from '$lib/components/ui/carousel/index.js';

	import Autoplay from 'embla-carousel-autoplay';

	export let heroImages;

	const plugin = Autoplay({ delay: 4000, stopOnInteraction: true });
</script>

<!-- {#if heroImages.length > 0}
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
				</div>
			</Carousel.Item>
		{/each}
	</Carousel.Content>	
</Carousel.Root>
{/if} -->
