<script lang="ts">
    import { updateContentClassNames } from '../../utilities/CreateAttributes';
    import Cta from '../cta/Cta.svelte';
    export let appJSON: {
        image: { default: string };
        header: { label: string; className: string };
        promo?: { label: string; className: string };
        description?: { label: string; className: string };
        disclaimer?: { label: string; className: string };
        cta: [{ label: string; href: string; className: string }];
    };
    // update className with default styles
    updateContentClassNames(appJSON, 'SKINNYBANNER');
</script>

<div
    class="container content content-skinny-banner tw-mx-auto tw-px-4 tw-max-w-screen-xl tw-min-h-100 tw-my-2"
>
    <div class="lg:tw-relative">
        <img
            src={appJSON.image.default}
            class="tw-w-full tw-object-cover tw-h-[100px] "
            alt=""
        />
        <div
            class="tw-grid tw-place-content-center tw-inset-0 lg:tw-grid-cols-3 lg:tw-absolute"
        >
            <div class="tw-grid" />
            <div class="tw-grid tw-place-content-center">
                <h2 class={appJSON.header.className}>
                    {appJSON.header.label}
                </h2>
                {#if appJSON.disclaimer}
                    <p
                        data-testid="disclaimer"
                        class={appJSON.disclaimer.className}
                    >
                        {appJSON.disclaimer.label}
                    </p>
                {/if}
            </div>
            <Cta cta={appJSON.cta} />
        </div>
    </div>
</div>
