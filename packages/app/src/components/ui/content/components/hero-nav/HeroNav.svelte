<script lang="ts">
    import { updateContentClassNames } from '../../utilities/CreateAttributes';
    import Cta from '../cta/Cta.svelte';
    export let appJSON: {
        image: {
            default: string;
            alt: string;
            tablet?: string;
            mobile?: string;
        };
        cta: [{ label: string; href: string; className: string }];
    };

    updateContentClassNames(appJSON, 'HEROLOWERNAV');
</script>

<div
    class="container content-hero-lower-nav tw-mx-auto tw-px-4 tw-max-w-screen-xl tw-min-h-235 tw-max-h-500"
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
                alt={appJSON.image.alt}
            />
        </picture>
        <div
            class="tw-grid tw-inset-0 tw-h-full tw-mt-3 lg:tw-mt-0 lg:tw-absolute lg:tw-content-end"
        >
            <Cta cta={appJSON.cta} />
        </div>
    </div>
</div>
