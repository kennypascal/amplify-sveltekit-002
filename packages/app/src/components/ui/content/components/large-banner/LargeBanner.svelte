<script lang="ts">
    import { default as cx } from 'classnames';
    import { updateContentClassNames } from '../../utilities/CreateAttributes';
    import Cta from '../cta/Cta.svelte';
    export let appJSON: {
        placement: string;
        image: { default: string };
        header: { label: string; className: string };
        promo?: { label: string; className: string };
        description?: { label: string; className: string };
        disclaimer?: { label: string; className: string };
        cta: [{ label: string; href: string; className: string }];
    };

    // Define content class to move the content to left/right/center
    let placementClass =
        appJSON.placement == 'right'
            ? 'lg:tw-ml-auto lg:tw-pr-10 tw-m-auto'
            : appJSON.placement == 'left'
            ? 'lg:tw-mr-auto lg:tw-pl-10 tw-m-auto'
            : 'tw-m-auto';
    // update className with default styles
    updateContentClassNames(appJSON, 'LARGEBANNER');
</script>

<div
    class="container content-large-banner tw-mx-auto tw-px-4 tw-my-2 tw-max-w-screen-xl tw-min-h-235 tw-max-h-295"
>
    <div class="lg:tw-relative">
        <img
            src={appJSON.image.default}
            class="tw-aspect-[21/9] lg:tw-aspect-auto tw-w-full tw-object-cover"
            alt=""
        />
        <div
            class="tw-grid tw-place-content-center tw-inset-0 lg:tw-grid-cols-1 lg:tw-absolute"
        >
            <div class={cx('lg:tw-w-2/5', placementClass)}>
                <h2 class={appJSON.header.className}>
                    {appJSON.header.label}
                </h2>
                {#if appJSON.promo}
                    <p data-testid="promo" class={appJSON.promo.className}>
                        {appJSON.promo.label}
                    </p>
                {/if}
                {#if appJSON.description}
                    <p
                        data-testid="description"
                        class={appJSON.description.className}
                    >
                        {appJSON.description.label}
                    </p>
                {/if}
                <Cta cta={appJSON.cta} />
                {#if appJSON.disclaimer}
                    <p
                        data-testid="disclaimer"
                        class={appJSON.disclaimer.className}
                    >
                        {appJSON.disclaimer.label}
                    </p>
                {/if}
            </div>
        </div>
    </div>
</div>
