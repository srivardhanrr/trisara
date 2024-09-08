<script lang="ts">
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import Autoplay from 'embla-carousel-autoplay';

	export let instagramPosts;

	const images = [
		{
			src: 'http://new-ella-demo-11.myshopify.com/cdn/shop/files/image-gallery-3.jpg?v=1658374861',
			alt: 'Gallery image 1'
		},
		{
			src: 'https://new-ella-demo-11.myshopify.com/cdn/shop/files/image-gallery-4.jpg?v=1658374875',
			alt: 'Gallery image 1'
		},
		{
			src: 'http://new-ella-demo-11.myshopify.com/cdn/shop/files/image-gallery-1.jpg?v=1658374891',
			alt: 'Gallery image 1'
		},
		{
			src: 'https://new-ella-demo-11.myshopify.com/cdn/shop/files/image-gallery-3.jpg?v=1658374861',
			alt: 'Gallery image 1'
		},
		{
			src: 'http://new-ella-demo-11.myshopify.com/cdn/shop/files/image-gallery-1.jpg?v=1658374891',
			alt: 'Gallery image 1'
		},
		{
			src: 'https://new-ella-demo-11.myshopify.com/cdn/shop/files/image-gallery-4.jpg?v=1658374875',
			alt: 'Gallery image 1'
		}

		// Add more images as needed
	];

	const plugin = Autoplay({ delay: 2000, stopOnInteraction: true });
</script>

<section class="bg-gradient-to-r from-orange-50 to-orange-100 py-12">
	<div class="container mx-auto px-4">
		<div class="mb-6 flex items-center justify-between">
			<h2 class="text-lg font-bold text-orange-500 sm:text-2xl">#Instagram Gallery</h2>
			<a href="/gallery" class="text-sm text-orange-500 hover:underline">View Gallery</a>
		</div>
		<p class="mb-8 text-gray-600">
			Step into our kitchen and explore the world of culinary delights through our Image Gallery.
		</p>

		<Carousel.Root
			opts={{ align: 'start' }}
			plugins={[plugin]}
			class="w-full"
			on:mousenter={plugin.stop}
			on:mouseleave={plugin.reset}
		>
			<Carousel.Content>
				{#each instagramPosts as post}
					<Carousel.Item class="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
						<div class="relative aspect-square overflow-hidden">
							<a href={post.link} target="_blank">
								<img src={post.image} alt={post.description} class="h-full w-full object-cover" />
							</a>
						</div>
					</Carousel.Item>
				{/each}
			</Carousel.Content>

			<Carousel.Previous class="ml-16 " />
			<Carousel.Next class="mr-16 " />
		</Carousel.Root>
	</div>
</section>
