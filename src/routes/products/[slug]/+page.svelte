<script lang="ts">
	import { onMount } from 'svelte';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb';
	import * as Accordion from '$lib/components/ui/accordion';
	import * as Card from '$lib/components/ui/card';
	import * as Carousel from '$lib/components/ui/carousel';
	import { Separator } from '$lib/components/ui/separator';
	import CollectionCarousel from '$lib/components/CollectionCarousel.svelte';
	import { ChevronDown } from 'lucide-svelte';
	import type { EmblaCarouselType } from 'embla-carousel';

	let selectedVariant: string | null = $state(null);
	let mainCarouselApi: EmblaCarouselType = $state();
	let thumbnailCarouselApi: EmblaCarouselType = $state();

	interface Props {
		data: any;
	}

	let { data }: Props = $props();

	let { product, collection } = $derived(data);

	let activeCard = 0;
	let scrollYProgress = 0;
	let isMobile: boolean = $state();
	let currentImageIndex = $state(0); // New: Track the current image index

	function checkMobile() {
		isMobile = window.innerWidth < 768;
	}

	let ref: HTMLDivElement = $state();

	onMount(() => {
		checkMobile();
		window.addEventListener('resize', checkMobile);

		const handleScroll = (event: Event) => {
			const target = event.target as HTMLElement;
			scrollYProgress = target.scrollTop / target.scrollHeight;
			// const cardsBreakpoints = content.map((_, index) => index / content.length);

			// cardsBreakpoints.forEach((breakpoint, index) => {
			// 	if (scrollYProgress > breakpoint - 0.2 && scrollYProgress <= breakpoint) {
			// 		activeCard = index;
			// 	}
			// });
		};

		ref.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('resize', checkMobile);
			ref.removeEventListener('scroll', handleScroll);
		};
	});

	function changeImage(index: number) {
		currentImageIndex = index;
		if (mainCarouselApi) {
			mainCarouselApi.scrollTo(index);
		}
		if (thumbnailCarouselApi) {
			thumbnailCarouselApi.scrollTo(index);
		}
	}

	function handleMainCarouselChange(event: CustomEvent) {
		currentImageIndex = event.detail.selectedIndex;
		if (thumbnailCarouselApi) {
			thumbnailCarouselApi.scrollTo(currentImageIndex);
		}
	}
</script>

<svelte:head>
	<title>Trisara | {product.name}</title>
	<meta name="description" content={product.description} />
</svelte:head>

<div class="md:container">
	<div
		bind:this={ref}
		class="mb-8 flex flex-col gap-8 p-2 transition ease-in-out sm:p-6 md:flex-row"
	>
		<div class:sticky={!isMobile} class="sticky w-full overflow-hidden md:w-1/2">
			<!-- Main image carousel -->
			<Carousel.Root
				opts={{
					loop: true,
					align: 'start'
				}}
				class="w-full"
				on:change={handleMainCarouselChange}
				bind:api={mainCarouselApi}
			>
				<Carousel.Content>
					{#each product.images as image, index}
						<Carousel.Item class="basis-full">
							<img
								src="{image.image}?blur=15"
								alt={`${product.name} - Image ${index + 1}`}
								class="aspect-square h-full w-full object-cover"
							/>
						</Carousel.Item>
					{/each}
				</Carousel.Content>
				<Carousel.Previous />
				<Carousel.Next />
			</Carousel.Root>

			<div class="mt-4">
				<Carousel.Root
					opts={{
						align: 'start',
						containScroll: 'trimSnaps'
					}}
					class="w-full"
					bind:api={thumbnailCarouselApi}
				>
					<Carousel.Content class="-ml-2">
						{#each product.images as image, index}
							<Carousel.Item class="lg:basis-1/7 basis-1/4 pl-2 sm:basis-1/5 md:basis-1/6">
								<button class="w-full cursor-pointer" onclick={() => changeImage(index)}>
									<img
										src={image.image}
										alt={`${product.name} - Thumbnail ${index + 1}`}
										class="flex h-20 w-full aspect-square items-center justify-center rounded-lg object-cover"
										class:border-2={index === currentImageIndex}
										class:border-orange-500={index === currentImageIndex}
									/>
								</button>
							</Carousel.Item>
						{/each}
					</Carousel.Content>
					<Carousel.Previous />
					<Carousel.Next />
				</Carousel.Root>
			</div>
		</div>

		<div class="info-section w-full md:w-1/2">
			<Breadcrumb.Root>
				<Breadcrumb.List>
					<Breadcrumb.Item>
						<Breadcrumb.Link href="/">Home</Breadcrumb.Link>
					</Breadcrumb.Item>
					<Breadcrumb.Separator />
					<Breadcrumb.Item>
						<Breadcrumb.Link href="/products">Products</Breadcrumb.Link>
					</Breadcrumb.Item>
					<Breadcrumb.Separator />
					<Breadcrumb.Item>
						<Breadcrumb.Page class="overflow-hidden truncate text-orange-600"
							>{product.name}</Breadcrumb.Page
						>
					</Breadcrumb.Item>
				</Breadcrumb.List>
			</Breadcrumb.Root>
			<h1 class="mb-2 mt-4 text-xl font-bold md:text-3xl lg:mt-10">{product.name}</h1>
			{#if product.set}
			<h6 class="text-md">{product.set}</h6>
			{/if}
			<p class="mb-4 text-sm md:text-md text-black lg:mt-10">{product.description}</p>

			{#if product.variants && product.variants.length > 0}
				<div class="mb-6">
					<h3 class="mb-3 text-lg font-semibold">Available Variants</h3>
					<div class="flex flex-wrap gap-3">
						{#each product.variants as variant}
							<label class="flex items-center">
								<input
									type="radio"
									name="variant"
									value={variant.variant}
									bind:group={selectedVariant}
									class="hidden"
								/>
								<span
									class="cursor-pointer rounded-full border-2 border-orange-500 px-4 py-2 text-sm transition-colors duration-200 ease-in-out"
									class:bg-orange-500={selectedVariant === variant.name}
									class:text-white={selectedVariant === variant.name}
								>
									{variant.variant}
								</span>
							</label>
						{/each}
					</div>
				</div>
			{/if}

			<a href={product.buy_link} target="_blank">
				<button
					class="flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-yellow-200 bg-orange-500 px-4 py-2 font-bold text-black transition duration-200 ease-in-out hover:bg-orange-400 active:bg-orange-400"
				>
					<span class="text-center align-text-top">Buy Now</span>
				</button>
			</a>
			<!-- 
		{#if product.buy_link}
			<a href={product.buy_link} target="_blank">
				<button
					class="flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-yellow-200 bg-orange-500 px-4 py-2 font-bold text-black transition duration-200 ease-in-out hover:bg-orange-400 active:bg-orange-400"
				>
					<span class="text-center align-text-top">Buy Now</span>
				</button>
			</a>
		{/if} -->

			{#if product.features.length > 0}
				<div class="mt-8">
					<Card.Root class="border-orange-200 bg-orange-50">
						<Accordion.Root value="item-1">
							<Accordion.Item value="item-1">
								<Card.Title class="mx-5 text-xl">
									<Accordion.Trigger>
										<h2 class="text-lg text-orange-500">PRODUCT FEATURES</h2>
									</Accordion.Trigger>
								</Card.Title>
								<Accordion.Content>
									<ul class="mx-4 list-disc space-y-2 pl-5">
										{#each product.features as feature}
											<li><b>{#if feature.feature}{feature.feature}: {/if}</b>
												{#if feature.description}{feature.description}{/if}</li>
										{/each}
									</ul>
								</Accordion.Content>
							</Accordion.Item>
						</Accordion.Root>
					</Card.Root>
				</div>
			{/if}
			<div class="mt-8">
				<Card.Root class="bg-orange-50">
					<Accordion.Root value="item-1">
						<Accordion.Item value="item-1">
							<Card.Title class="mx-5 text-xl"></Card.Title>

							<Accordion.Content class="mx-4 mt-4">
								<div class="grid grid-cols-4 gap-4 md:flex md:justify-center md:space-x-4">
									{#if product.infographics && product.infographics.length > 0}
										{#each product.infographics as infographics}
											<img
												src="{infographics.image}"
												alt="{infographics.name}"
												class="h-16 w-16 rounded-lg object-cover md:h-24 md:w-24"
											/>
										{/each}
									{:else}

									<img
										src="/images/feature/eth.png"
										alt="Feature 1"
										class="h-16 w-16 rounded-lg object-cover md:h-24 md:w-24"
									/>
									<img
										src="/images/feature/etc.png"
										alt="Feature 2"
										class="h-16 w-16 rounded-lg object-cover md:h-24 md:w-24"
									/>
									<img
										src="/images/feature/hqss.png"
										alt="Feature 3"
										class="h-16 w-16 rounded-lg object-cover md:h-24 md:w-24"
									/>
									<img
										src="/images/feature/if.png"
										alt="Feature 4"
										class="h-16 w-16 rounded-lg object-cover md:h-24 md:w-24"
									/>
									{/if}
								</div>
							</Accordion.Content>
						</Accordion.Item>
					</Accordion.Root>
				</Card.Root>
			</div>

			{#if product.specifications.length > 0}
				<div class="mt-8">
					<Card.Root class="border-orange-200 bg-orange-50">
						<Accordion.Root value="item-1">
							<Accordion.Item value="item-1">
								<Card.Title class="mx-5 text-xl">
									<Accordion.Trigger>
										<h2 class="text-lg text-orange-500">PRODUCT SPECIFICATIONS</h2>
									</Accordion.Trigger>
								</Card.Title>
								<Accordion.Content>
									<div class="px-4 pb-4">
										<table class="w-full">
											<tbody>
												{#each product.specifications as specification}
													<tr class="border-b border-gray-200 last:border-b-0">
														<td class="py-3 font-semibold">{specification.label}</td>
														<td class="py-3 text-right">{specification.value}</td>
													</tr>
												{/each}
											</tbody>
										</table>
									</div>
								</Accordion.Content>
							</Accordion.Item>
						</Accordion.Root>
					</Card.Root>
				</div>
			{/if}

			{#if product.instructions.length > 0}
				<div class="mt-8">
					<Card.Root class="border-orange-200 bg-orange-50">
						<Accordion.Root value="item-1">
							<Accordion.Item value="item-1">
								<Card.Title class="mx-5 text-xl">
									<Accordion.Trigger>
										<h2 class="text-lg text-orange-500">USAGE INSTRUCTIONS</h2>
									</Accordion.Trigger>
								</Card.Title>

								<Accordion.Content>
									<ul class="mx-4 list-disc space-y-2 pl-5">
										{#each product.instructions as instruction}
											<li><b>{#if instruction.instruction}
												{instruction.instruction}: 
											{/if}</b>{#if instruction.description}{instruction.description}{/if}</li>
										{/each}
									</ul>
								</Accordion.Content>
							</Accordion.Item>
						</Accordion.Root>
					</Card.Root>
				</div>
			{/if}

			<div class="mt-8">
				<Card.Root class="border-orange-200 bg-orange-50">
					<Accordion.Root value="item-1">
						<Accordion.Item value="item-1">
							<Card.Title class="mx-5 text-xl">
								<Accordion.Trigger>
									<h2 class="text-lg text-orange-500">ADDITIONAL INFORMATION</h2>
								</Accordion.Trigger>
							</Card.Title>

							<Accordion.Content>
								<ul class="mx-4 list-disc space-y-2 pl-5">
									<li><b>Manufacturer</b>: Arvind Industries</li>
									<li>
										<b>Address</b>: No. 45, Embassy Square, 4th Main Road, Chamarajpet,
										Bangalore-560018
									</li>
									<li><b>Contact</b>: +91-7349061709</li>
								</ul>
							</Accordion.Content>
						</Accordion.Item>
					</Accordion.Root>
				</Card.Root>
			</div>
		</div>
	</div>
</div>
<CollectionCarousel collection={data.collection} />

<style>
	.sticky {
		position: sticky;
		top: 1rem;
		align-self: flex-start;
	}

	:global(.accordion-trigger[data-state='open'] .chevron) {
		transform: rotate(180deg);
	}
</style>
