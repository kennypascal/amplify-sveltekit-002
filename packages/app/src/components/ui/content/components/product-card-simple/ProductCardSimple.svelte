<script lang="ts">
    export let appJSON: {
        name: string;
        url: string;
        imageUrl: string;
        brand: string;
    };
</script>

<a
    class="content content-product-card-simple container tw-mx-auto tw-px-4 tw-max-w-screen-xl
        tw-grid tw-place-content-center
        hover:tw-underline"
    href={appJSON.url}
>
    <img src={appJSON.imageUrl} class="tw-aspect-[3/4] bfx-product-image" alt="" />
    <div class="tw-grid tw-text-center">
        <strong
            class="tw-uppercase tw-font-sans tw-text-1 tw-font-medium tw-tracking-[1.5px]"
        >
            {appJSON.brand}
        </strong>
        <span class="tw-font-sans tw-text-2 tw-font-normal bfx-product-name">
            {appJSON.name}
        </span>
    </div>
</a>
