<script lang="ts">
	import { onMount } from 'svelte';
	import { Separator } from '$lib/components/ui/separator';
	import * as Carousel from '$lib/components/ui/carousel';

	interface Series {
		name: string;
		description: string;
		image: string;
		slug: string;
	}

	export let series: Series[];

	// const categories: Category[] = [
	// 	{
	// 		name: 'Cast Iron Series',
	// 		description: 'Elegant plates and bowls for your dining table',
	// 		image: '/images/category1.JPG'
	// 	},
	// 	{
	// 		name: 'Stainless Steel Series',
	// 		description: 'Stylish utensils for a perfect dining experience',
	// 		image: '/images/category2.JPG'
	// 	},
	// ];

	let isMobile: boolean = false;

	onMount(() => {
		const checkMobile = () => {
			isMobile = window.innerWidth < 768;
		};

		checkMobile();
		window.addEventListener('resize', checkMobile);

		return () => {
			window.removeEventListener('resize', checkMobile);
		};
	});
</script>

{#if !isMobile}
	<div class="relative hidden h-[450px] w-full overflow-hidden md:block">
		<div class="flex h-full">
			{#each series as category, index}
				<div
					class="relative flex flex-1 flex-col items-center justify-center overflow-hidden p-4 text-white transition-all duration-300 ease-in-out"
				>
				<a href="/series/{category.slug}">

					{#if category.image}
						<div
							class="absolute inset-0 bg-cover bg-center"
							style="background-image: url({category.image});"
						></div>
					{:else}
						<div class="absolute inset-0 bg-black bg-opacity-50"></div>
					{/if}
					<div class="absolute inset-0 bg-black hover:bg-orange-600 hover:opacity-30 bg-opacity-50"></div>
					<div class="relative z-10">
						<h3 class="mb-2 text-center text-2xl font-bold uppercase">{category.name}</h3>
						<p class="text-center">{category.description}</p>
					</div>
					{#if index < series.length - 1}
						<Separator orientation="vertical" class="absolute right-0 h-full bg-white/20" />
					{/if}
				</a>
				</div>
			{/each}
		</div>
	</div>
{:else}
	<div class="md:hidden">
		<!-- Mobile Version -->
		<Carousel.Root class="w-full">
			<Carousel.Content>
				{#each series as category}
					<Carousel.Item class="md:basis-1/2 lg:basis-1/3">
						<div class="relative aspect-square overflow-hidden">
							{#if category.image}
							<div
								class="absolute inset-0 bg-cover bg-center"
								style="background-image: url({category.image});"
								></div>
							{:else}
								<div class="absolute inset-0 bg-black bg-opacity-50"></div>
							{/if}
							<div class="absolute inset-0 bg-black opacity-30"></div>
							<div
								class="absolute inset-0 flex flex-1 flex-col items-center justify-center text-white"
							>
								<h3 class="text-center text-2xl font-bold uppercase">{category.name}</h3>
								<p class="mt-5 text-center">{category.description}</p>
							</div>
						</div>
					</Carousel.Item>
				{/each}
			</Carousel.Content>
			<Carousel.Previous class="ml-16" />
			<Carousel.Next class="mr-16" />
		</Carousel.Root>
	</div>
{/if}
