<script lang="ts">
    import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
    import Content from '@ui/content/Content.svelte';
    import { getOptions } from '../../utilities/CreateAttributes';

    export let appJSON: {
        header: {
            label: string;
            className: string;
        };
        items: [
            {
                imageURL: string;
                href: string;
                badge?: string;
                name: string;
                brand: string;
                percentOff: string;
                oldPrice?: string;
                price: string;
                finalSale: boolean;
                id: string;
            }
        ];
    };
    const itemsQuantity = appJSON.items.length;
    const options = getOptions('einstein-recommender', itemsQuantity);
</script>

<div
    class="content content-einstein-recommender container tw-mx-auto tw-px-4 tw-my-5 tw-max-w-screen-xl"
>
    <div class="lg:tw-relative">
        <h2
            class="tw-font-serif tw-text-5 lg:tw-text-6 tw-text-center tw-text-medium"
        >
            {appJSON.header.label}
        </h2>
        <Splide {options} hasTrack={false}>
            <SplideTrack>
                {#each appJSON.items as item}
                    <SplideSlide>
                        <div class="tw-grid tw-place-content-center">
                            <Content
                                variant="product-full"
                                options={{
                                    appJSON: {
                                        imageURL: item.imageURL,
                                        href: item.href,
                                        brand: item.brand,
                                        name: item.name,
                                        percentOff: item.percentOff,
                                        oldPrice: item.oldPrice,
                                        price: item.price,
                                        finalSale: item.finalSale,
                                        badge: item.badge
                                    }
                                }}
                            />
                        </div>
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
    .content-einstein-recommender :global(.splide__pagination__page) {
        border: solid 1px #d3c8c8;
        margin: 0px 5px 0px 5px;
    }
    .content-einstein-recommender
        :global(.splide__pagination__page:focus-visible) {
        outline: 1px dashed black;
        outline-offset: 3px;
    }
    .content-einstein-recommender :global(.splide__pagination__page.is-active) {
        background: rgba(173, 171, 171, 0.767);
        transform: none;
    }
    .content-einstein-recommender :global(.splide__track) {
        padding-bottom: 40px;
        margin-left: 40px;
        margin-right: 40px;
    }
    .content-einstein-recommender :global(.splide__arrow) {
        background-color: white;
        width: 24px;
        height: 24px;
    }
    .content-einstein-recommender :global(.splide__arrow:focus-visible) {
        outline: 1px dashed black;
        outline-offset: 0px;
    }
    .content-einstein-recommender :global(.splide__arrow--prev) {
        padding-right: 10px;
    }
    .content-einstein-recommender :global(.splide__arrow--next) {
        padding-left: 10px;
    }
    .content-einstein-recommender :global(.splide__arrow svg) {
        width: 24px;
        height: 24px;
    }
</style>
