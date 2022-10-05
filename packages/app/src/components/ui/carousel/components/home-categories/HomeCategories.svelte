<script lang="ts">
    import '@splidejs/splide/dist/css/splide.min.css';
    import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
    import { getOptions } from '../../utilities/CreateAttributes';
    export let appJSON: {
        header: {
            label: string;
        };
        items: [
            {
                name: string;
                header: string;
                url: string;
                imageUrl: string;
            }
        ];
    };
    const itemsQuantity = appJSON.items.length;
    const options = getOptions('home-categories', itemsQuantity);
</script>

<div class="container carousel-home-categories">
    <div class="container tw-mx-auto tw-max-w-screen-xl tw-mb-3">
        <div class="tw-flex tw-relative">
            <span
                class="tw-relative tw-mx-auto tw-bg-white tw-font-serif tw-text-5
                tw-text-medium tw-uppercase tw-px-5"
            >
                {appJSON.header.label}
            </span>
        </div>
    </div>

    <div class="tw-max-w-screen-xl  tw-mx-auto tw-py-3">
        <Splide {options} hasTrack={false}>
            <SplideTrack>
                {#each appJSON.items as category}
                    <SplideSlide>
                        <a href={category.url}>
                            <div class="tw-flex tw-relative">
                                <div class="tw-bg-black">
                                    <img
                                        src={category.imageUrl}
                                        class="tw-aspect-4/3 tw-opacity-80 tw-mx-auto"
                                        alt=""
                                    />
                                </div>
                                <div
                                    class="tw-flex tw-flex-col tw-text-center
                                    tw-top-1/2 tw-bottom-0 tw-right-0 tw-left-1/2
                                    tw-absolute tw-w-36
                                    tw-translate-x-[-50%] tw-translate-y-0"
                                >
                                    <span
                                        class="tw-bg-yellow
                                        tw-py-1.5 tw-px-2.5
                                        tw-font-sans tw-text-1 lg:tw-text-2 tw-font-medium tw-tracking-wide tw-uppercase
                                        tw-mb-4"
                                    >
                                        {category.header}
                                    </span>
                                    <span
                                        class="tw-text-white
                                        tw-leading-6  tw-font-sans tw-text-4 lg:tw-text-5 tw-font-medium tw-tracking-wide tw-uppercase
                                        tw-mb-4"
                                    >
                                        {category.name}
                                    </span>
                                </div>
                            </div>
                        </a>
                    </SplideSlide>
                {/each}
            </SplideTrack>
            <div class="splide__arrows">
                <button
                    class="splide__arrow splide__arrow--prev"
                    name="IconChevronRight"
                    aria-label="Prev"
                >
                    <svg>
                        <path
                            d="M0 1.39765L1.42169 0L14.375 11.3238L1.42313 22.6334L0 21.2358L11.5604 11.2941L0 1.39765Z"
                        />
                    </svg>
                </button>
                <button
                    class="splide__arrow splide__arrow--next"
                    name="IconChevronRight"
                    aria-label="Next"
                >
                    <svg>
                        <path
                            d="M0 1.39765L1.42169 0L14.375 11.3238L1.42313 22.6334L0 21.2358L11.5604 11.2941L0 1.39765Z"
                        />
                    </svg>
                </button>
            </div>
        </Splide>
    </div>
</div>

<style>
    .carousel-home-categories :global(.splide__pagination__page) {
        border: solid 1px #dcdcdc;
        margin: 0px 5px 0px 5px;
    }
    .carousel-home-categories :global(.splide__pagination__page:focus-visible) {
        outline: 1px dashed black;
        outline-offset: 3px;
    }

    .carousel-home-categories :global(.splide__pagination__page.is-active) {
        background: #ccc;
        transform: none;
    }
    .carousel-home-categories :global(.splide__track) {
        padding-bottom: 40px;
        margin-left: 40px;
        margin-right: 40px;
    }

    .carousel-home-categories :global(.splide__arrow) {
        background-color: white;
        width: 24px;
        height: 24px;
    }
    .carousel-home-categories :global(.splide__arrow:focus-visible) {
        outline: 1px dashed black;
        outline-offset: 0px;
    }
    .carousel-home-categories :global(.splide__arrow--prev) {
        padding-right: 10px;
    }
    .carousel-home-categories :global(.splide__arrow--next) {
        padding-left: 10px;
    }
    .carousel-home-categories :global(.splide__arrow svg) {
        width: 24px;
        height: 24px;
    }
    .carousel-home-categories :global(.splide__arrow:disabled svg) {
        fill: gray;
    }
</style>
