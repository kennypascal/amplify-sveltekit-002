<script lang="ts">
    import { getTranslatedText } from '@stores/Languages.store';
    import Icon from '@ui/icon/Icon.svelte';
    export let appJSON: {
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
    };
    const translatedText: any = getTranslatedText('product-full', '');
</script>

<div
    class="content content-product-full container tw-mx-auto tw-my-5 tw-max-w-screen-xl bfx-product"
>
    <div class="tw-grid tw-place-content-center">
        <a href={appJSON.href} class="hover:tw-underline">
            <div class="tw-relative">
                <div class="tw-absolute tw-ml-[12px] tw-mt-[15px]">
                    {#if appJSON.badge}
                        <p
                            class="tw-font-sans tw-text-0 tw-font-medium tw-bg-yellow tw-py-[2px] tw-px-[6px] tw-tracking-[1.5px]"
                        >
                            {appJSON.badge}
                        </p>
                    {/if}
                </div>
                <div class="tw-absolute tw-right-0 tw-mr-[12px] tw-mt-[15px]">
                    <Icon name="heart-o" />
                </div>
                <img
                    src={appJSON.imageURL}
                    class="tw-aspect-[3/4] tw-object-cover bfx-product-image"
                    alt=""
                />
            </div>
            <div class="tw-grid tw-text-center tw-mt-[15px]">
                <h3>
                    <span class="tw-product-brand">
                        {appJSON.brand}
                    </span>
                    <span class="tw-product-name tw-text-dark-gray bfx-product-name">
                        {appJSON.name}
                    </span>
                </h3>
                <p class="tw-mt-[5px]">
                    {#if appJSON.oldPrice}
                        <span class="tw-sr-only bfx-list-price bfx-price"
                            >{translatedText.oldPrice.from}</span
                        >
                        <span class="tw-product-price-cut bfx-list-price bfx-price">
                            {appJSON.oldPrice}
                        </span>
                        <span class="tw-sr-only"
                            >{translatedText.oldPrice.to}</span
                        >
                    {/if}
                    <span class="tw-product-price tw-text-shadow bfx-sale-price">
                        {appJSON.price}
                    </span>
                </p>
                {#if appJSON.percentOff}
                    <p class="tw-product-discount">
                        {appJSON.percentOff}
                        {translatedText.percentOff}
                    </p>
                {/if}
                {#if appJSON.finalSale}
                    <p class="tw-product-price-sale-final">
                        {translatedText.finalSale}
                    </p>
                {/if}
            </div>
        </a>
    </div>
</div>
