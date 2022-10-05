<script lang="ts">
    import { updateContentClassNames } from '../../utilities/CreateAttributes';
    import Cta from '../cta/Cta.svelte';

    export let appJSON: {
        image: { default: string; className: string };
        header: { label: string; className: string };
        promo: { label: string; className: string };
        description: { label: string; className: string };
        disclaimer: { label: string; className: string };
        cta: [
            {
                label: string;
                href: string;
                className: string;
            }
        ];
    };

    updateContentClassNames(appJSON, 'MEDIUMBANNER');
</script>

<div
    class="content content-medium-banner container tw-mx-auto tw-px-4 tw-my-2 tw-max-w-screen-xl"
>
    <div class="lg:tw-relative">
        <img
            src={appJSON.image.default}
            class="tw-h-[160px] tw-w-full tw-object-cover"
            alt=""
        />
        <div
            class="tw-grid tw-place-content-center tw-inset-0 tw-gap-4 lg:tw-grid-cols-3 lg:tw-absolute"
        >
            <div class="tw-grid tw-place-content-center">
                <h2 class={appJSON.header.className}>
                    {appJSON.header.label}
                </h2>
                {#if appJSON.promo}
                    <p class={appJSON.promo.className}>
                        {appJSON.promo.label}
                    </p>
                {/if}
            </div>
            <div class="tw-grid tw-place-content-center">
                {#if appJSON.description}
                    <p class={appJSON.description.className}>
                        {appJSON.description.label}
                    </p>
                {/if}
            </div>
            <div class="tw-grid tw-place-content-center">
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
