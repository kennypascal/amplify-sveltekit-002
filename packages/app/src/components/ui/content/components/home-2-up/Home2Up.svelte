<script lang="ts">
    import { default as cx } from 'classnames';
    import { updateContentClassNames } from '../../utilities/CreateAttributes';
    import Cta from '../cta/Cta.svelte';
    type ElementH2U = {
        sideClass?: string;
        image: { default: string };
        header: { label: string; className: string };
        promo?: { label: string; className: string };
        description?: { label: string; className: string };
        disclaimer?: { label: string; className: string };
        cta: [{ label: string; href: string; className: string }];
    };
    export let appJSON: {
        title?: { label: string; className: string };
        content: ElementH2U[];
    };
    updateContentClassNames(appJSON, 'HOME2UP');
    appJSON.content[0].sideClass = 'md:tw-ml-auto md:tw-mr-0';
    appJSON.content[1].sideClass = 'md:tw-mr-auto md:tw-ml-0';
    // image description disclaimer tw-p-4
</script>

<div
    class="content content-home-2-up container tw-mx-auto tw-px-4 tw-max-w-screen-xl"
>
    {#if appJSON.title}
        <h2 class={appJSON.title.className}>
            {appJSON.title.label}
        </h2>
    {/if}
    <div class="tw-grid md:tw-relative md:tw-grid-cols-2">
        {#each appJSON.content as column}
            <div
                class={cx(
                    'tw-grid tw-place-content-center lg:tw-place-content-start tw-text-center tw-mx-auto tw-p-2 tw-w-4/5',
                    column.sideClass
                )}
            >
                <img
                    src={column.image.default}
                    class="tw-aspect-[4/3] tw-mx-auto tw-object-cover tw-object-top "
                    alt=""
                />
                <div class="tw-w-4/5 tw-mx-auto tw-pt-4">
                    <h3 class={column.header.className}>
                        {column.header.label}
                    </h3>
                    {#if column.promo}
                        <p class={column.promo.className}>
                            {column.promo.label}
                        </p>
                    {/if}
                    {#if column.description}
                        <p class={column.description.className}>
                            {column.description.label}
                        </p>
                    {/if}
                    <Cta cta={column.cta} />
                    {#if column.disclaimer}
                        <p class={column.disclaimer.className}>
                            {column.disclaimer.label}
                        </p>
                    {/if}
                </div>
            </div>
        {/each}
    </div>
</div>
