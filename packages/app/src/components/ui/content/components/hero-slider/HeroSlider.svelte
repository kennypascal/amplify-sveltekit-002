<script lang="ts">
    import '@splidejs/splide/dist/css/splide.min.css';
    import { Splide, SplideSlide } from '@splidejs/svelte-splide';
    import Content from '@ui/content/Content.svelte';

    const sliderOptions = {
        type: 'loop',
        autoplay: true,
        interval: 5000,
        perPage: 1,
        pagination: true
    };

    const appJSONs = [];
    Object.keys($$restProps).forEach(key => {
        appJSONs.push($$restProps[key]);
    });
</script>

<div
    class="content content-hero-slider container tw-mx-auto tw-my-5 tw-max-w-screen-xl"
>
    <Splide options={sliderOptions}>
        {#each appJSONs as appJSON}
            <SplideSlide>
                <Content variant={appJSON.variant} options={{ appJSON }} />
            </SplideSlide>
        {/each}
    </Splide>
</div>

<style>
    .content-hero-slider :global(.splide__pagination__page:focus-visible) {
        outline: 1px dashed black;
        outline-offset: 3px;
    }
    .content-hero-slider :global(.splide__arrow) {
        background-color: white;
        width: 24px;
        height: 24px;
    }
    .content-hero-slider :global(.splide__arrow:focus-visible) {
        outline: 1px dashed black;
        outline-offset: 0px;
    }
    .content-hero-slider :global(.splide__arrow svg) {
        padding: 5px;
        width: 24px;
        height: 24px;
    }
</style>
