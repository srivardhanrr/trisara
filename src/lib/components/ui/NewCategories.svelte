<script lang="ts">
	import { onMount } from 'svelte';
	import { Separator } from '$lib/components/ui/separator';
	import * as Carousel from '$lib/components/ui/carousel';

	interface Category {
		name: string;
		description: string;
		image: string;
	}

	const categories: Category[] = [
		{
			name: 'Cast Iron Series',
			description: 'Elegant plates and bowls for your dining table',
			image: '/images/category1.JPG'
		},
		{
			name: 'Stainless Steel Series',
			description: 'Stylish utensils for a perfect dining experience',
			image: '/images/category2.JPG'
		},
	];

	let activeCategory: Category | null = null;
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
	<div class="relative hidden  h-[450px] w-full overflow-hidden md:block">
		<div
			class="absolute inset-0 bg-cover bg-center transition-all duration-300 ease-in-out"
			style="background-image: url({activeCategory?.image || categories[0].image});"
		></div>
		<div class="absolute inset-0 bg-black bg-opacity-50"></div>
		<div class="relative z-10 flex h-full">
			{#each categories as category, index}
				<div
					class="hover:bg-orange-700 hover:bg-opacity-25 border-1 flex flex-1 flex-col items-center justify-center border  border-gray-300 p-4 text-white transition-all duration-300 ease-in-out"
					on:mouseenter={() => (activeCategory = category)}
					on:mouseleave={() => (activeCategory = null)}
				>
					<h3 class="mb-2 text-center text-2xl font-bold uppercase">{category.name}</h3>
					<p class="text-center">{category.description}</p>
					{#if index < categories.length - 1}
						<Separator orientation="vertical" class="absolute right-0 h-full bg-white/20" />
					{/if}
				</div>
			{/each}
		</div>
	</div>
{:else}
	<div class="md:hidden">
		<!-- Mobile Version -->
		<Carousel.Root class="w-full">
			<Carousel.Content>
				{#each categories as category}
					<Carousel.Item class="md:basis-1/2 lg:basis-1/3">
						<div class="relative aspect-square overflow-hidden">
							<div
								class="absolute inset-0 bg-cover bg-center"
								style="background-image: url({category.image});"
							></div>
							<div class="absolute inset-0 bg-black opacity-30"></div>
							<div class="absolute flex flex-1 flex-col items-center text-white inset-0 justify-center">
								<h3 class="text-center text-2xl font-bold uppercase">{category.name}</h3>
								<p class="text-center mt-5">{category.description}</p>
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
