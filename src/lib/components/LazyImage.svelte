<script lang="ts">
    export let src: string;
    export let alt: string;
    export let width: string | number = "100%";
    export let height: string | number = "auto";

    let loaded = false;
</script>

<div
        class="relative"
        style="width: {width}; height: {height};"
>
    <!-- Placeholder -->
    {#if !loaded}
        <div
                class="absolute inset-0 bg-gray-200 animate-pulse"
                style="width: {width}; height: {height};"
        />
    {/if}

    <!-- Actual Image -->
    <img
            {src}
            {alt}
            {width}
            {height}
            class="w-full h-full object-cover"
            class:opacity-0={!loaded}
            class:opacity-100={loaded}
            on:load={() => loaded = true}
    />
</div>

<style>
    img {
        transition: opacity 0.3s ease-in-out;
    }
</style>