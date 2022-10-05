<script lang="ts">
    import { default as cx } from 'classnames';
    import { updateContentClassNames } from '../../utilities/CreateAttributes';
    import Cta from '../cta/Cta.svelte';
    export let appJSON: {
        placement: string;
        image: { default: string; tablet?: string; mobile?: string };
        preheader?: { label: string; className: string };
        header: { label: string; className: string };
        promo?: { label: string; className: string };
        description?: { label: string; className: string };
        disclaimer?: { label: string; className: string };
        cta: [{ label: string; href: string; className: string }];
    };

    let evenCta: any;
    let lastOddCta: any;
    let ctaLength: number = appJSON.cta.length;
    if (ctaLength % 2 === 0) {
        evenCta = appJSON.cta.slice();
    } else {
        evenCta = appJSON.cta.slice(0, ctaLength - 1);
        lastOddCta = appJSON.cta.slice(ctaLength - 1)[0];
    }

    // Define content class to move the content to left/right/center
    let placementClass =
        appJSON.placement === 'right'
            ? 'lg:tw-ml-auto lg:tw-pr-10'
            : appJSON.placement === 'left'
            ? 'lg:tw-mr-auto lg:tw-pl-10'
            : 'tw-m-auto';

    // update className with default styles
    updateContentClassNames(appJSON, 'HERO');
</script>

<div
    class="container tw-mx-auto tw-px-4 tw-max-w-screen-xl tw-min-h-235 tw-max-h-500"
>
    <div class="lg:tw-relative">
        <picture>
            <source
                srcset={appJSON.image.default}
                media="(min-width: 1024px)"
            />
            <source srcset={appJSON.image.tablet} media="(min-width: 768px)" />
            <source srcset={appJSON.image.mobile} media="(min-width: 320px)" />
            <img
                class="tw-w-full tw-object-cover"
                src={appJSON.image.default}
                alt="hero"
            />
        </picture>
        <div
            class="tw-grid tw-place-content-center tw-inset-0 tw-h-full lg:tw-grid-cols-1 lg:tw-absolute"
        >
            <div class={cx(placementClass, 'tw-max-w-[500px]')}>
                <h2>
                    {#if appJSON.preheader}
                        <span
                            class={cx(appJSON.preheader.className, 'tw-block')}
                        >
                            {appJSON.preheader.label}
                        </span>
                    {/if}
                    <span class={cx(appJSON.header.className, 'tw-block')}>
                        {appJSON.header.label}
                    </span>
                </h2>
                {#if appJSON.promo}
                    <p class={appJSON.promo.className}>
                        {appJSON.promo.label}
                    </p>
                {/if}
                {#if appJSON.description}
                    <p class={appJSON.description.className}>
                        {appJSON.description.label}
                    </p>
                {/if}
                <Cta cta={appJSON.cta} />
                {#if appJSON.disclaimer}
                    <p class={appJSON.disclaimer.className}>
                        {appJSON.disclaimer.label}
                    </p>
                {/if}
            </div>
        </div>
    </div>
</div>
