<script lang="ts">
    import { default as cx } from 'classnames';
    import { updateContentClassNames } from '../../utilities/CreateAttributes';
    import Cta from '../cta/Cta.svelte';
    export let appJSON: {
        title: {
            label: string;
            className: string;
        };
        content: [
            {
                header: { label: string; className: string };
                image: { default: string };
                description: { label: string; className: string };
                promo: { label: string; className: string };
                disclaimer: { label: string; className: string };
                cta: [
                    {
                        label: string;
                        href: string;
                        className: string;
                    }
                ];
            }
        ];
    };

    updateContentClassNames(appJSON, 'HOMECASCADE');
</script>

<div
    class="content content-home-cascade container tw-mx-auto tw-px-4 tw-my-5 tw-max-w-screen-xl"
>
    <h2 class={cx('tw-pb-3', appJSON.title.className)}>
        {appJSON.title.label}
    </h2>
    <div class="tw-grid tw-place-content-center lg:tw-px-6">
        {#each appJSON.content as column, i}
            <div
                class="tw-flex-auto tw-grid tw-gap-3.5 tw-place-content-start lg:tw-grid-cols-12 tw-pb-6"
            >
                <div
                    class={cx(
                        'lg:tw-col-span-7',
                        i % 2 === 1 ? 'lg:tw-order-last' : ''
                    )}
                >
                    <img
                        src={column.image.default}
                        alt=""
                        class="tw-aspect-[5/3]"
                    />
                </div>
                <div class="lg:tw-col-span-5 lg:tw-grid lg:tw-content-center">
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
