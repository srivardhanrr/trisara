<script lang="ts">
    import {onMount} from 'svelte';
    import Swiper from 'swiper';
    import {Navigation, Thumbs} from 'swiper/modules';
    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/thumbs';

    interface Props {
        images?: string[];
    }

    let { images = [
        'https://www.allamerican1930.com/cdn/shop/files/Canner-Mustard.png?v=1713339918&width=500',
        'https://www.allamerican1930.com/cdn/shop/files/Canner-Mustard.png?v=1713339918&width=500',
        'https://www.allamerican1930.com/cdn/shop/files/Canner-Mustard.png?v=1713339918&width=500',
        'https://www.allamerican1930.com/cdn/shop/files/Canner-Mustard.png?v=1713339918&width=500',
        'https://www.allamerican1930.com/cdn/shop/files/Canner-Mustard.png?v=1713339918&width=500',
        'https://www.allamerican1930.com/cdn/shop/files/Canner-Mustard.png?v=1713339918&width=500',
    ] }: Props = $props();

    let mainSwiper: Swiper;
    let thumbsSwiper: Swiper;

    onMount(() => {
        thumbsSwiper = new Swiper('.thumbs-swiper', {
            spaceBetween: 10,
            slidesPerView: 4,
            freeMode: true,
            watchSlidesProgress: true,
        });

        mainSwiper = new Swiper('.main-swiper', {
            modules: [Navigation, Thumbs],
            spaceBetween: 10,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            thumbs: {
                swiper: thumbsSwiper,
            },
        });
    });
</script>

<div class="flex">
    <!-- Thumbnails -->
    <div class="w-1/5 pr-4">
        <div class="thumbs-swiper swiper-container">
            <div class="swiper-wrapper flex flex-col">
                {#each images as image, index}
                    <div class="swiper-slide">
                        <img src={image} alt={`Product thumbnail ${index + 1}`}
                             class="w-full h-auto object-cover cursor-pointer"/>
                    </div>
                {/each}
            </div>
        </div>
    </div>

    <!-- Main image -->
    <div class="w-4/5">
        <div class="main-swiper swiper-container">
            <div class="swiper-wrapper">
                {#each images as image, index}
                    <div class="swiper-slide">
                        <img src={image} alt={`Product image ${index + 1}`} class="w-full h-auto object-contain"/>
                    </div>
                {/each}
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>
    </div>
</div>

<style>
    :global(.swiper-button-next),
    :global(.swiper-button-prev) {
        color: #000;
    }

    :global(.swiper-slide-thumb-active) {
        border: 2px solid #007bff;
    }
</style>
